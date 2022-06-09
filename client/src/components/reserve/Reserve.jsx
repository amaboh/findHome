import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faCircleXmark} from "@fortawesome/free-solid-svg-icons"
import "./reserve.css"

import useFetch from "../../hooks/useFetch"

const Reserve = ({setOpen, hotelId,}) => {

    const {data, loading, error} = useFetch(`http://localhost:8800/api/hotels/room/${hotelId}`)
  return (
    <div className="reserve">
        <div className="rConiner">
            <FontAwesomeIcon 
                icon={faCircleXmark} 
                className="rClose" 
                onClick={()=> setOpen(false)}
            />
            <span>Select your rooms:</span>
            {data.map((item)=>(
                <div className="rItem">
                    <div className="rItemInfo">
                        <div className="tTitle">{item.title}</div>
                        <div className="rDesc">{item.desc}</div>
                        <div className="rMax">
                            Max people: <b>{item.maxPeople}</b>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
};

export default Reserve