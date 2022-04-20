import React from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ICarouselProps {
  children?: React.ReactNode;
  settings?: Settings;
  className?: string;
}

export const Carousel: React.FC<ICarouselProps> = ({
  children,
  settings,
  className,
}) => {
  return (
    <Slider {...settings} className={className}>
      {children}
    </Slider>
  );
};
