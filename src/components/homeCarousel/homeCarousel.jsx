"use client"
import "slick-carousel/slick/slick.css";
import Slider from 'react-slick';
import styles from './carousel.module.css';
import SliderImgDiv from '@/components/sliderImgDiv/sliderImgDiv';
import MovieSearchByTitleId from '@/js/movieFind.js';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div className={styles.previousArrow} onClick={onClick}>
            <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.758 3.054 C 7.416 3.147,7.160 3.395,7.061 3.729 C 6.985 3.987,6.985 4.053,7.063 4.323 C 7.125 4.534,7.225 4.638,10.853 8.270 L 14.579 12.000 10.871 15.710 C 7.994 18.589,7.145 19.460,7.083 19.600 C 6.984 19.819,6.975 20.182,7.062 20.391 C 7.144 20.587,7.381 20.831,7.580 20.924 C 7.818 21.034,8.175 21.025,8.422 20.901 C 8.576 20.824,9.545 19.876,12.745 16.671 C 16.526 12.885,16.876 12.524,16.935 12.343 C 17.017 12.094,17.017 11.906,16.935 11.657 C 16.876 11.476,16.528 11.117,12.768 7.353 C 9.951 4.532,8.609 3.214,8.483 3.147 C 8.252 3.024,7.992 2.990,7.758 3.054 " fill="currentColor" stroke="none" fillRule="evenodd"></path>
            </svg>
        </div>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div className={styles.nextsArrow} onClick={onClick}>
            <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.758 3.054 C 7.416 3.147,7.160 3.395,7.061 3.729 C 6.985 3.987,6.985 4.053,7.063 4.323 C 7.125 4.534,7.225 4.638,10.853 8.270 L 14.579 12.000 10.871 15.710 C 7.994 18.589,7.145 19.460,7.083 19.600 C 6.984 19.819,6.975 20.182,7.062 20.391 C 7.144 20.587,7.381 20.831,7.580 20.924 C 7.818 21.034,8.175 21.025,8.422 20.901 C 8.576 20.824,9.545 19.876,12.745 16.671 C 16.526 12.885,16.876 12.524,16.935 12.343 C 17.017 12.094,17.017 11.906,16.935 11.657 C 16.876 11.476,16.528 11.117,12.768 7.353 C 9.951 4.532,8.609 3.214,8.483 3.147 C 8.252 3.024,7.992 2.990,7.758 3.054 " fill="currentColor" stroke="none" fillRule="evenodd"></path>
            </svg>
        </div>
    );
}

const HomeCarousol = ({movie1, movie2, movie3, anime}) =>{
    const settings = {
        dots: true,
        Infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        customPaging: function (i) {
            return (
                <span>
                    <i className={styles.dot}></i>
                </span>
            );
        },
        dotsClass: "dots",
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    return (
        <div className={styles.container}>
            <Slider {...settings}>
                <div className={styles.sliderContainer}>
                    <SliderImgDiv movie={movie1} anime={anime} />
                </div>
                <div className={styles.sliderContainer}>
                    <SliderImgDiv movie={movie2} anime={anime}/>
                </div>
                <div className={styles.sliderContainer}>
                    <SliderImgDiv movie={movie3} anime={anime} />
                </div>
            </Slider>
        </div>
    );
}

export default HomeCarousol;