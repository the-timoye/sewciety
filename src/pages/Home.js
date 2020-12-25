import React from 'react';
import { Header, Footer, About } from '../layouts';
import { Portfolio, sectionHeader as Title, CenterImages, Contact, MarginBottom, Button } from '../assets/styles';
import bgImage from '../assets/images/milola-header-image.jpg'
import phone from '../assets/images/phone.png';

const images = [
    bgImage, bgImage, bgImage, bgImage, bgImage, bgImage, bgImage, bgImage
]

export default () => {
    return (
        <>
            <Header />
            <About />
            <Portfolio>
                <Title>OUR PORTFOLIO</Title>
                <CenterImages>
                    {images.map((image, index) => {
                        return (
                            <img src={image} alt={index} />
                        )
                    })}
                </CenterImages>
            </Portfolio>

            <Contact>
                <section className="contact-section-one">
                    <img src={phone} alt="telephone" />
                    <div>

                    </div>
                </section>
                <section className="contact-section-two">
                    <Title>LET'S COMMUNICATE</Title>

                    <MarginBottom size={3} />

                    <p>Email: tunmiyinka@gmail.com</p>
                    <p>Phone: (+234) 805 793 4290</p>

                    <div className="contact-form">
                        <p>The Milola Sewcity would love to hear from you!</p>
                        <p>Fill in your details.</p>

                        <MarginBottom size={3} />

                        <form>
                            <div className="form-input">
                                <label for="full-name">Full Name</label>
                                <input
                                    type="text"

                                />
                            </div>
                            <div className="form-input">
                                <label for="email">Email Address</label>
                                <input
                                    type="email"

                                />
                            </div>
                            <div className="form-input">
                                <label for="message">Message</label>
                                <textarea></textarea>
                            </div>

                            <MarginBottom size={3} />

                            <Button primary>Submit</Button>
                        </form>
                    </div>
                </section>
            </Contact>
            <Footer />
        </>
    )
}