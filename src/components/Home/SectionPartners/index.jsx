import React from "react";
import { Brand } from "../../../style/brand";

import logocpb from "../../../assets/logo-cpb.png";
import logoLGBT from "../../../assets/logoLGBT.png";
import forum from "../../../assets/forumempresas.png";
import eternamente from "../../../assets/eternamente.png";
import advogados from "../../../assets/advogados.png";
import atados from "../../../assets/atados.png";
import probono from "../../../assets/probono.png";

import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";

import SwiperCore, { Autoplay } from "swiper";

function SctionParners() {
  const slidesPartnes = [
    { id: 1, image: logocpb },
    { id: 2, image: logoLGBT },
    { id: 3, image: forum },
    { id: 4, image: eternamente },
    { id: 5, image: advogados },
    { id: 6, image: atados },
    { id: 7, image: probono },
  ];

  SwiperCore.use([Autoplay]);
  return (
    <>
      <Swiper
        spaceBetween={20}
        slidesPerView={7}
        loop={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        style={{ marginTop: 20, marginBottom: 20 }}
        modules={[Autoplay]}
      >
        {slidesPartnes.map((data) => (
          <SwiperSlide key={`slide-${data.id}`} style={{ paddingLeft: 80 }}>
            <img src={data.image} alt="logo ong pais afetivos" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default SctionParners;
