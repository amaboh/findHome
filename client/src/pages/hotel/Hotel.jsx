
import {useState, useContext} from "react"
import "./hotel.css"

import Header from "../../components/header/Header"
import Navbar from "../../components/navbar/Navbar"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome" 
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from "@fortawesome/free-solid-svg-icons"
import MailList from "../../components/mailList/MailList"
import Footer from "../../components/footer/Footer"
import { useLocation } from "react-router-dom"
import useFetch from "../../hooks/useFetch"
import { SearchContext } from "../../context/SearchContext"


const Hotel = () => {

  const [slideNumber, setSlideNumber] = useState(0);  
  const [open, setOpen] = useState(false);
  const location = useLocation() //location id is used here extract the id and pass it to the useFetch hook 
  console.log(location)
  const id = location.pathname.split("/")[2];

  const {data, loading,error} = useFetch(`http://localhost:8800/api/hotels/find/${id}`)

  const {dates, options} = useContext(SearchContext)

  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  function dayDifference(date1, date2) {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    return diffDays;
  }

  const days = dayDifference( dates[0].endDate, dates[0].startDate);


  const handleOpen=(i)=>{
    setSlideNumber(i);
    console.log(i)
    setOpen(true)
  }

  const handleMove=(direction)=>{
    let newSliderNumber;  

    if(direction ==="l"){
      newSliderNumber = slideNumber === 0 ? 5  : slideNumber - 1;
    }else{
      newSliderNumber = slideNumber === 5 ? 0 : slideNumber + 1
    }
    setSlideNumber(newSliderNumber)
  }

  return (
    <div> 
      <Navbar/>
      <Header type="list"/>
      {loading ? 
        ("Loading"): 
            (<div className="hotelContainer">
            {open && 
                <div className="slider">
                            <FontAwesomeIcon icon={faCircleXmark} className="closeBtn" onClick={()=>setOpen(false)}/> 
                            <FontAwesomeIcon icon={faCircleArrowLeft} className="arrowBtn" onClick={()=>handleMove("l")}/>
                            <div className="sliderWrapper">
                              <img src={data.photos[slideNumber]} alt="" className="sliderImg" />
                            </div>
                            <FontAwesomeIcon icon={faCircleArrowRight} className="arrowBtn" onClick={()=>handleMove("r")}/>
                </div> } 
            <div className="hotelWrapper">
              <button className="bookNow">Reserve or book now!</button>
              <h1 className="hotelTitle">{data.name}</h1>
              <div className="hotelAddress">
                <FontAwesomeIcon icon={faLocationDot}/>
                <span>{data.address}</span>
              </div>
              <span className="hotelDistance">
                Excellent location - {data.distance} from center
              </span>
              <span className="hotelPriceHighLight">
                Book a stay over ${data.cheapestPrice} at this property and get a free airport taxi
              </span>
              <div className="hotelImages">
                {data.photos?.map((photo, i) =>(
                  <div className="hotelImgWrapper">
                    <img 
                        onClick={()=>handleOpen(i)} 
                        src={photo} 
                        alt="" 
                        className="hotelImg"/>
                  </div>
                ))}
              </div>
              <div className="hotelDetails">
                <div className="hotelDetailsTexts">
                    <h1 className="hotelTitle">{data.title}</h1>
                    <p className="hotelDesc">{data.desc}</p>
                </div>
                <div className="hotelDetailsPrice">
                  <h1>Perfect for a {days}-night stay!</h1>
                  <span>
                    Located in the real heart of London, this property has an Excellent
                    location score of 9.8!
                  </span>
                  <h2>
                    <b>${days * data.cheapestPrice * options.room}</b> ({days} nights)
                  </h2>
                  <button className="bookBtn">Reserve or book Now!</button>
                </div>

              </div>
            </div>
            <MailList/>
          <Footer/>
          </div>)
    }
    </div>
  )
}

export default Hotel