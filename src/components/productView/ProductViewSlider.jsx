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

    return (
        <div className="sliderContainer">
            <Slider
                asNavFor={nav1}
                ref={slider => (sliderRef2 = slider)}
                slidesToShow={3}
                swipeToSlide={true}
                focusOnSelect={true}
                vertical={true}
                style = {
                    {
                        maxWidth: "400px",
                        maxHeight: "400px"
                    }
                }

            >

                    {images.map(image => <div  >
                        <img
                            width={"100px"}
                            height={"100px"}
                            src={image}
                            alt="товарні зображення"

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
                        maxHeight: "400px"
                    }
                }
            >
                {images.map(image => <div >
                    <img
                        width={"370px"}
                        height={"370px"}
                        src={image}
                        alt="товарні зображення"


                    />
                </div>)}

            </Slider>
        </div>
    )
}