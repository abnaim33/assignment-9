import React, { useState } from 'react'
import './Home.css'
import Bike from '../../images/bike.png'
import Car from '../../images/car.png'
import Bus from '../../images/bus.png'
import Train from '../../images/train.png'

import { Link } from 'react-router-dom'
const homeData = [
    {
        "image": Bike,
        "title": "bike"
    },
    {
        "image": Car,
        "title": "car"
    },
    {
        "image": Bus,
        "title": "bus"
    },
    {
        "image": Train,
        "title": "train"
    },
]

const Home = () => {

    // const [vahicle, setVahicle] = useState('')
    // console.log(vahicle)
    return (
        <div className='home'>
            <div className="card-container">
                {
                    homeData.map(data => (
                        <Link key={data.title} to={`/search/${data.title}`}>
                            <div className='card'>

                                <img src={data.image} alt="" />
                                <h3>{data.title}</h3>
                            </div>

                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Home