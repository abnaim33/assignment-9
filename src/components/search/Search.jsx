import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import InputControl from '../inputControl/InputControl'
import './Search.css'
import Map from 'react-map-gl';
import bike from '../../images/bike.png'
import car from '../../images/car.png'
import bus from '../../images/bus.png'
import train from '../../images/train.png'
import peopleicon from '../../images/peopleicon.png'
import map from '../../images/Map.png'


const Search = () => {
    const { vahicle } = useParams()

    console.log(vahicle)
    const [values, setValues] = useState({
        from: "",
        to: ""

    });
    const [data, setData] = useState({})

    const [errorMsg, setErrorMsg] = useState("");


    const handleSearch = () => {
        if (!values.from || !values.to) {
            setErrorMsg("Fill both fields");
            return;
        }
        setErrorMsg("");
        setData(values)

    }

    return (
        <div className='search'>
            <div className='search-box'>

                {
                    data.from && data.to ?
                        <div className='innerBox'>
                            <div className='places'>
                                <div>
                                    <h3>From : {values.from}</h3>
                                    <h3>To: {values.to}</h3>

                                </div>

                            </div>

                            <div className="search-suggestions">
                                <div>


                                    {
                                        vahicle === 'car' &&
                                        <img src={car} alt="car" />
                                    }
                                    {
                                        vahicle === 'bus' &&
                                        <img src={bus} alt="car" />
                                    }
                                    {
                                        vahicle === 'bike' &&
                                        <img src={bike} alt="car" />
                                    }
                                    {
                                        vahicle === 'train' &&
                                        <img src={train} alt="car" />
                                    }
                                    <div>
                                        <p>Car</p>
                                        <img src={peopleicon} alt="" />
                                        <p>4</p>
                                    </div>

                                    <h4>$67</h4>
                                </div>
                                <div>


                                    {
                                        vahicle === 'car' &&
                                        <img src={car} alt="car" />
                                    }
                                    {
                                        vahicle === 'bus' &&
                                        <img src={bus} alt="car" />
                                    }
                                    {
                                        vahicle === 'bike' &&
                                        <img src={bike} alt="car" />
                                    }
                                    {
                                        vahicle === 'train' &&
                                        <img src={train} alt="car" />
                                    }
                                    <div>
                                        <p>Car</p>
                                        <img src={peopleicon} alt="" />
                                        <p>4</p>
                                    </div>

                                    <h4>$67</h4>
                                </div>
                                <div>


                                    {
                                        vahicle === 'car' &&
                                        <img src={car} alt="car" />
                                    }
                                    {
                                        vahicle === 'bus' &&
                                        <img src={bus} alt="bus" />
                                    }
                                    {
                                        vahicle === 'bike' &&
                                        <img src={bike} alt="bike" />
                                    }
                                    {
                                        vahicle === 'train' &&
                                        <img src={train} alt="train" />
                                    }
                                    <div>
                                        <p>Car</p>
                                        <img src={peopleicon} alt="" className='peopleIcon' />
                                        <p>4</p>
                                    </div>

                                    <h4>$67</h4>
                                </div>




                            </div>


                        </div> :


                        <div className="innerBox">


                            <InputControl
                                label="Pick From"
                                placeholder="Enter pick from address"
                                onChange={(event) =>
                                    setValues((prev) => ({ ...prev, from: event.target.value }))
                                }
                            />
                            <InputControl
                                label="Pick To"
                                placeholder="Enter pick to address"
                                onChange={(event) =>
                                    setValues((prev) => ({ ...prev, to: event.target.value }))
                                }
                            />
                            {errorMsg && <b className="error">{errorMsg}</b>}

                            <div className="footer">

                                <button onClick={() => handleSearch()}>
                                    Search
                                </button>

                            </div>
                        </div>

                }

            </div>

            <div className="map">
                <img src={map} alt="" />
            </div>
        </div>
    )
}

export default Search