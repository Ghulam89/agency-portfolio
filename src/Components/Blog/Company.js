import React from "react";
import { Box, Container } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import CompanyData from "@/Data/Blog/Company.data";
import Image from "next/image";
import SectionHeading from "@/Utilis/SectionHeading";


const Company = () => {
  return (
     <Container>
        <SectionHeading
                value1="We are working on these"
                value2="Technologies"
                border={true}
            />
         <Box sx={{ width: "100%", position: "relative", overflow: "hidden", py:12}}>
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={5} // Number of cards visible
        spaceBetween={3} // Gap between cards
        loop={true}
        pagination={{ clickable: true }}
        navigation
        breakpoints={{
          0: { slidesPerView: 1 },
          600: { slidesPerView: 2 },
          960: { slidesPerView:4},
        }}
        style={{ width: "100%", height: "auto",backgroundColor:'#FAFAFA', borderRadius:'12px',padding:'12px 0px'}}
      >
        {CompanyData.map((image, index) => (
          <SwiperSlide key={index}>
            <Box width={200} height={150} border={1} borderColor={'gray'} borderRadius={2}  display={'flex'} justifyContent={'center'} alignItems={'center'}>
                <Image src={image?.logo} alt="" width={100} height={100} />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
     </Container>
  );
};

export default Company;
