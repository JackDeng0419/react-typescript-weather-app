import React from 'react'
import { CityCardSmall } from '../../components/CityCardSmall/index';
import './index.css'
import { AddCityCard } from '../../components/AddCityCard/index';
import Slider from 'react-slick';
import { HomePageSlider } from '../../components/HomePageSlider/index';

export const HomePage = () => {

    const sliderSetting = {
        dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
    };

  return (
    <div className='home-page'>
        <HomePageSlider />
    </div>
  )
}
