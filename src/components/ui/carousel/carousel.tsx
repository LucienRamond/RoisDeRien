import React, { ReactElement } from "react";
import { EmblaOptionsType } from "embla-carousel";
import { usePrevNextButtons } from "./carouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import "./css/embla.css";
import { PrevButton } from "./PrevButton";
import { NextButton } from "./NextButton";

type PropType = {
  slides: ReactElement[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="embla h-[100%] w-auto rounded-t-lg relative bg-black">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container ">
          {slides.map((slide, index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number">{slide}</div>
            </div>
          ))}
        </div>

        <div className="embla__controls bg-black border-t border-gray-500 border-opacity-50 bg-opacity-75 w-full">
          <div className="embla__buttons">
            <PrevButton
              onClick={onPrevButtonClick}
              disabled={prevBtnDisabled}
            />

            <NextButton
              onClick={onNextButtonClick}
              disabled={nextBtnDisabled}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
