import React from 'react';
import { MdLocationOn, MdOutlineArrowForwardIos } from 'react-icons/md';
import { FiArrowRight } from 'react-icons/fi';
import { AiTwotoneStar } from 'react-icons/ai';
import ReactStars from "react-rating-stars-component";
import heroImg from '../../assets/Images/header_img.png'
import './HeroSection.css';

const HeroSection = () => {
    const rating = {
        size: 16,
        count: 3,
        color: "#C4C4C4",
        activeColor: "#FA5D5D",
        value: 2,
        a11y: true,
        emptyIcon: <AiTwotoneStar />,
        filledIcon: <AiTwotoneStar/>,
        onChange: (newValue) => {
            console.log(`Example 2: new value is ${newValue}`);
        }
    };
    return (
        <div className='hero_section'>
            <div className='location'>
                <span className='loc_icon'><MdLocationOn /></span>
                <p>See location on map</p>
                <span className='arrow'><FiArrowRight /></span>
            </div>
            <img src={heroImg} alt="" />
            <div className="hero_text">
                <p className='hero_title'>Monica Gamage Shop</p>
                <p className='sub_title'>Wattala, Sri Lanka</p>
                <ReactStars {...rating} />
            </div>
            <div className="check_reward">
                <div>
                    <p className='title'>Check the reward in this resto</p>
                    <p className='sub_title'>16 Reward</p>
                </div>
                <div>
                    <MdOutlineArrowForwardIos />
                </div>
            </div>
        </div>
    );
};

export default HeroSection;