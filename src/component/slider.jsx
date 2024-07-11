import "../assets/css/styles.css"

const Slider = () => {
        return (
        <>
        <section className="Slider-section" id="Slider">
                <div id="rs-slider" className="slider-section4 slider-overlay-2">
                    {/* <div id="home-slider" className="rs-carousel owl-carousel" data-loop="true" data-items="4" data-margin="0"data-autoplay="false" data-autoplay-timeout="5000" data-smart-speed="1200" data-dots="false" data-nav="true"data-nav-speed="false" data-mobile-device="1" data-mobile-device-nav="true" data-mobile-device-dots="true"data-ipad-device="1" data-ipad-device-nav="true" data-ipad-device-dots="true" data-md-device="1" data-md-device-nav="true" data-md-device-dots="false"> */}
                        {/* <!-- Item 1 --> */}
                        <div className="item active">
                            <img src="./assets/img/slide4.WebP" alt="Slide1" />
                            <div className="slide-content">
                                <div className="display-table">
                                    <div className="display-table-cell">
                                        <div className="container">
                                            <h1 className="slider-title" data-animation-in="fadeInLeft" data-animation-out="animate-out">
                                            TUTUP PENDAFTARAN<br/>NICYMS 2024
                                            </h1>
                                            <p data-animation-in="fadeInUp" data-animation-out="animate-out" className="slider-desc">
                                            NATIONAL INVENTION COMPETITION FOR YOUNG MOSLEM SCIENTIST (NICYMS).
                                            </p>
                                            <a
                                                href="/"
                                                className="sl-readmore-btn2 mr-30"
                                                data-animation-in="lightSpeedIn"
                                                data-animation-out="animate-out"
                                                >Tutup Pendaftaran</a>
                                            <a
                                                href="https://drive.google.com/file/d/1HGxqcFIEihma4_Jad_bLdnjsSzyoXxaT/view?usp=sharing"
                                                target="_blank"
                                                className="sl-get-started-btn2"
                                                data-animation-in="lightSpeedIn"
                                                data-animation-out="animate-out"
                                                >Buku Panduan</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>        
        </>
    )
}
export default Slider