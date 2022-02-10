import React from "react";
import { Blog } from "../../../style/blog";
import flecha2 from "../../../assets/flecha-branca-direita.png";

import noticia1 from "../../../assets/noticia-1.png";
import noticia2 from "../../../assets/noticia-2.png";
import noticia3 from "../../../assets/noticia-3.png";
import noticia4 from "../../../assets/noticia-4.png";

// Import Swiper React components

import { Swiper, SwiperSlide } from "swiper/react";

import { CardContentBlog, ResponsiveContainer } from "./styles";
import { Box } from "@mui/system";

function SectionBlog() {
  const slides = [
    {
      id: 1,
      image: noticia1,
      description: " Notícias da semana, notícias da semana",
    },
    {
      id: 2,
      image: noticia2,
      description: " Notícias da semana, notícias da semana",
    },
    {
      id: 3,
      image: noticia3,
      description: " Notícias da semana, notícias da semana",
    },
    {
      id: 4,
      image: noticia4,
      description: " Notícias da semana, notícias da semana",
    },
  ];

  return (
    <>
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <Blog>
          <h2>Acompanhe nosso blog</h2>
          <div className="blog-notice-area">
            <div className="notice notice-photo-1">
              <div className="notice--info">
                Notícias da semana, notícias da semana
              </div>
            </div>
            <div className="notice notice-photo-2">
              <div className="notice--info">
                Notícias da semana, notícias da semana
              </div>
            </div>
            <div className="notice notice-photo-3">
              <div className="notice--info">
                Notícias da semana, notícias da semana
              </div>
            </div>
            <div className="notice notice-photo-4">
              <div className="notice--info">
                Notícias da semana, notícias da semana
              </div>
            </div>
          </div>
          <div className="blog">
            <a href="/">
              Acesse o Blog <img src={flecha2} alt="icone de flecha" />{" "}
            </a>
          </div>
        </Blog>
      </Box>

      <ResponsiveContainer sx={{ display: { xs: "block", md: "none" } }}>
        <h2> Blog</h2>
        <Swiper
          spaceBetween={0}
          slidesPerView={3}
          centeredSlides={true}
          style={{ marginLeft: -180 }}
        >
          {slides.map((data) => (
            <SwiperSlide key={`slide-${data.id}`}>
              <CardContentBlog>
                <img src={data.image} alt="logo ong pais afetivos" />
                <span>{data.description}</span>
              </CardContentBlog>
            </SwiperSlide>
          ))}
        </Swiper>
      </ResponsiveContainer>
    </>
  );
}

export default SectionBlog;
