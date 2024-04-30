import React from 'react'
// import {Box, Stack, Typography, Button} from '@mui/material'
import  HeroBannerImage  from '../assets/images/banner.png'

function HeroBanner() {
  
    return (
        <div className="flex justify-between relative pt-5">
            <div className='flex p-5 items-center'>
                <div>
                    <h1 className="text-red-600 font-semibold text-2xl lg:text-4xl">
                        Jacked Club
                    </h1>
                    <h2 className="font-bold text-4xl lg:text-6xl mt-8 mb-6">
                        Pump Iron, Feel the Pump <br /> & Get Shredded
                    </h2>
                    <p className="text-xl font-serif leading-8 mb-6">
                        Here are the big mass gainer movements
                    </p>
                    <button className="bg-red-600 text-white px-4 py-2 rounded-lg">
                        Power Start Here
                    </button>
                    <h1 className="font-semibold text-red-600 opacity-10 hidden lg:block text-9xl">
                        Power
                    </h1>
                </div>
            </div>
            <img
                className="hero-banner-img"
                src={HeroBannerImage}
                alt="hero-banner"
            />
        </div>
    );
}

export default HeroBanner