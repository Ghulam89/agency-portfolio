import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    title: "Welcome to Nextwave tech",
    description: "Explore the best features and improve your experience.",
    image: "https://www.elexoft.com/assets/images/elexoft_office.jpg",
  },
  {
    id: 2,
    title: "Mobile App Development",
    description: "We ensure speed and efficiency in all aspects.",
    image: "https://www.elexoft.com/assets/images/slider/bg5.png",
  },
  {
    id: 3,
    title: "Join Us Today",
    description: "Sign up now and start your journey with us.",
    image: "https://www.elexoft.com/assets/images/slider/bg5.png",
  },
];

const Hero = () => {
  return (
    <Box sx={{ width: "100%", position: "relative", overflow: "hidden" }}>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        style={{ width: "100%", height: "90vh" }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            {/* Full-Screen Background */}
            <Box
              sx={{
                height: "100vh",
                background: `url(${slide.image}) center/cover no-repeat`,
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                color: "#fff",
              }}
            >
              {/* Dark Overlay */}
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  left: 0,
                  width: "70%",
                  height: "100%",
                //   backgroundColor: "rgba(0, 0, 0, 0.5)",
                  background:`url(${'https://www.elexoft.com/assets/images/slider/01.png'})`
                }}
              >
  {/* Content */}
  <Box
                sx={{
                  position: "relative",
                  zIndex: 10,
                //   backgroundColor: "rgba(0, 0, 0, 0.7)",
                  padding: "2rem",
                  borderRadius: "8px",
                
                }}
              >
                <Typography
                  variant="h3"
                  component="h1"
                  sx={{ fontWeight: "bold", color: "#ee3733" }} 
                >
                  {slide.title}
                </Typography>
                <Typography
                  variant="h6"
                  component="p"
                  sx={{ margin: "1rem 0", color: "#FFF" }}
                >
                  {slide.description}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  sx={{ mt: 2, px: 4, py: 1 }}
                >
                  Learn More
                </Button>
              </Box>

              </Box>

            
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Hero;
