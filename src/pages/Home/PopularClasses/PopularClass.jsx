import { useEffect, useState } from "react";
import ClassSlider from "../Slider/ClassSlider";
import { Swiper,SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const PopularClass = () => {
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setClasses(data))
    }, [])
    const sortedClasses = classes.sort((a, b) => b.enrollment - a.enrollment).slice(0, 5);

    return (
            <Swiper
            slidesPerView={'auto'}
            centeredSlides={true}
            spaceBetween={30}
            pagination={{
              clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
            <SwiperSlide>
            {
                sortedClasses?.map(Class => <ClassSlider key={Class.id} Class={Class}></ClassSlider>)
            }
            </SwiperSlide>
            <SwiperSlide><img src={sortedClasses[1]?.image} /></SwiperSlide>
            
            
            </Swiper>
        
    );
};

export default PopularClass;