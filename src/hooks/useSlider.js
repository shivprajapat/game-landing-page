import { useRef, useCallback } from "react";

export const useSlider = ({
  slidesToShow = 3,
  slidesToScroll = 1,
  responsive = [],
  infinite = true,
  autoplay = true,
  autoplaySpeed = 2000,
  speed = 500,
  initialSlide = 0,
}) => {
  const sliderRef = useRef(null);

  const settings = {
    infinite,
    speed,
    slidesToShow,
    slidesToScroll,
    initialSlide,
    arrows: false,
    autoplay,
    autoplaySpeed,
    responsive,
  };

  const handlePrevClick = useCallback(() => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  }, []);

  const handleNextClick = useCallback(() => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  }, []);

  return {
    sliderRef,
    settings,
    handlePrevClick,
    handleNextClick,
  };
};
