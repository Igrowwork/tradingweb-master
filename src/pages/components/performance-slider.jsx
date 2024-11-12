import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import axios from 'axios';
import React , {useState , useEffect} from 'react'

// import required modules
import { Pagination } from 'swiper/modules';
import Image from 'next/image';

export default function PerformanceSlider() {
    const [data, setData] = useState([]);

    const isFetch = async () => {
        try {
            const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}/api/topperformance`);
            // console.log(res.data.val, "Fetched Data");
            setData(res.data.val);
        } catch (error) {
            console.error(error, "Error fetching data");
        }
    };

    useEffect(() => {
        isFetch();
    }, []); 
  return (
    <div className="md:px-0 px-6">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        // loop={true}
        autoplay
        // pagination={{
        //   clickable: true,
        // }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper md:absolute max-w-7xl mx-auto min-h-[383px]"
      >
        {
          data.map((ele,i) => (
          <SwiperSlide key={i} className="f1 w-full md:h-[383px] max-md:h-[250px] border border-[#66D2EF] md:rounded-[20px] max-md:rounded-[10px] md:p-[8px] flex items-center justify-center">
            <div className="md:h-[367px] max-md:h-[240px] w-full rounded-[8px] bg-[#0B3B5C] flex flex-col items-center justify-center">
              <div className="dp md:w-[150px] max-md:w-[80px] md:h-[150px] max-md:h-[80px] rounded-full relative">
                  <Image src="/images/04.png" fill alt="" className="rounded-full object-cover" />
                <div className="rank absolute md:w-[32px] max-md:w-[18px] md:h[32px] max-md:h-[18px] rounded-full md:top-[90%] max-md:top-[90%] md:left-[41%] max-md:left-[40%] bg-[#FFF]">
                  <p className=' font-[400] md:text-[20px] max-md:text-[14px] text-[#000] text-center'>{i+1}</p>
                </div>
              </div>
              <h1 className='md:text-[24px] max-md:text-[20px] font-[400] md:leading-[125%] md:mt-[40px] max-md:mt-[20px]'>{ele.name}</h1>
              <p className='md:px-[16px] max-md:px-[8px] text-center md:text-[16px]  max-md:text-[12px] font-[400] md:leading-[150%] md:mt-[16px] max-md:[8px]'>{ele.description}</p>
            </div>
          </SwiperSlide>

          ))
        }
      </Swiper>
    </div>
  );
}
