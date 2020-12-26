
export const headerSlider = (index, slides) => {
    let currentSlide;

    if (index > slides.length) { index = 1 }

    currentSlide = slides[index - 1];
    index++;
    return currentSlide;
}