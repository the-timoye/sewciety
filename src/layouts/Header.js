import React from 'react';
import { HomeBanner, Button } from '../assets/styles';
import { slides } from '../utilities/constants';
import AliceCarousel from 'react-alice-carousel';


export const Header = () => {

    const slideImages = () => {
        return slides.map((slide) => {
            return (<img src={slide} alt={'milola-img'} />)
        })
    }

    return (
        <HomeBanner id="home">
            <AliceCarousel
                items={slideImages()}
                autoPlayInterval={4000}
                animationDuration={1000}
                autoPlayDirection="ltr"
                autoPlay={true}
                animationType={'fadeout'}
                fadeOutAnimation={true}
                mouseTrackingEnabled={true}
                disableAutoPlayOnAction={true}
                infinite={true}
                disableButtonsControls={true}
                disableDotsControls={true}
            >
            </AliceCarousel>
            <div className='slides-overlay'></div>
            <div className='landing-info-container'>
                <h2>look your best in our wears</h2>
                <p>Join the Sewciety</p>
                <Button primary href='/'>Get Started</Button>
            </div>
        </HomeBanner>
    )
}