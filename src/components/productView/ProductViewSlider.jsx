import Slider from "react-slick";
import {useEffect, useRef, useState} from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './sliderStyles.scss'


export default function ProductViewSlider({ images}) {

    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    let sliderRef1 = useRef(null);
    let sliderRef2 = useRef(null);

    useEffect(() => {
        setNav1(sliderRef1);
        setNav2(sliderRef2);
    }, []);

    const responsiveSettings =[
        {
            breakpoint: 1441,
            settings: {
                slidesToShow: 3,
                vertical: true,
                autoplay: true,
                speed: 500,
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                vertical: true,
                autoplay: true,
                speed: 500,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                vertical: true,
                autoplay: true,
                speed: 800,

            }
        },
        {
            breakpoint: 425,
            settings: {
                slidesToShow: 1,
                arrows: false,
                fade: true,
                dots:true,
                autoplay: true,
                speed: 800,
                className: "vertical-slider"
            }
        }
    ]

    return (
        <div className="sliderContainer">
            <Slider
                asNavFor={nav1}
                ref={slider => (sliderRef2 = slider)}
                slidesToShow={3}
                swipeToSlide={true}
                focusOnSelect={true}
                infinite={true}
                responsive={responsiveSettings}

                style = {
                    {
                        maxWidth: "574px",
                        maxHeight: "500px"
                    }
                }


            >

                {images.map((image, index) => <div key={index} >
                    <img
                        width={"100px"}
                        height={"100px"}
                        src={image}
                        alt={`товарне зображення ${index}`}


                    />
                </div>)}


            </Slider>
            <Slider
                asNavFor={nav2}
                ref={slider => (sliderRef1 = slider)}
                slidesToShow={1}
                style = {
                    {
                        maxWidth: "400px",
                        maxHeight: "400px",
                    }
                }
            >
                {images.map((image, index) => <div key={index}>
                    <img
                        width={"100%"}
                        height={"100%"}
                        src={image}
                        alt={`товарне зображення ${index}`}
                    />
                </div>)}

            </Slider>
        </div>
    )
}