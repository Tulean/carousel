import React from "react";
import { Settings } from "react-slick";
import styled from "@emotion/styled";
import { Carousel } from "../../src/components/Carousel";

const settings: Partial<Settings> = {
  infinite: true,
  swipeToSlide: true,
  speed: 300,
  centerPadding: "0px",
  arrows: true,
  dots: true,
  draggable: true,
  slidesPerRow: 1,
  slidesToShow: 3,
};

const mockItems = [
  "slide1",
  "slide2",
  "slide3",
  "slide4",
  "slide5",
  "slide6",
  "slide7",
];

const Page = styled.div`
  width: 400px;
  height: 500px;
  background-color: grey;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 50px;
`;

const Slide = styled.div`
  width: 30px;
  height: 30px;
  background-color: #d47575;
`;

export default {
  title: "Carousel example",
  component: Carousel,
};

export const CarouselExample = () => (
  <Page>
    <Carousel settings={settings}>
      {mockItems.map((item, index) => {
        return <Slide key={index}>{item}</Slide>;
      })}
    </Carousel>
  </Page>
);
