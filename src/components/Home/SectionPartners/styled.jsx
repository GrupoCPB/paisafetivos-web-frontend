import styled from "styled-components";
import medias from "../../../style/medias/mediaQueries";

import { Swiper, SwiperSlide } from "swiper/react";

export const SliderPartners = styled(SwiperSlide)`
  padding: 0;

  @media only screen and (${medias.tablet}) {
    padding: 80px;
  }

  @media only screen and (${medias.mobile}) {
    padding: 80px;
  }

  @media only screen and (${medias.mobile_small}) {
    padding: 80px;
  }
`;
