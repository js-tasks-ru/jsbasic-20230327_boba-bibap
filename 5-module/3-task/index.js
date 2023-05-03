function initCarousel() {

  const arrowR = document.querySelector('.carousel__arrow_right');
  const arrowL = document.querySelector('.carousel__arrow_left');
  const slides = document.querySelector('.carousel__inner');
  const slideWidth = slides.children[0].offsetWidth;
  const countSlides = slides.children.length - 1
  let count = 0;
  let slidesPosition = 0;


  function rightArrow() {
   
    if (count < countSlides){
      count +=1;
    }

    if (count == countSlides) {
      arrowR.style.display = 'none'
    }
    
    if(count > 0) {
      arrowL.style.display = '';
    }


    slidesPosition += slideWidth;
    slides.style.transform = `translateX(-${slidesPosition}px)`;
    console.log(count)

  }

  function leftArrow() {

    if (count > 0) {
      count -= 1;
    }

    if (count == 0) {
      arrowL.style.display = 'none'
    }

    if (count < countSlides) {
      arrowR.style.display = '';
    }
    
    
    slidesPosition -= slideWidth;
    slides.style.transform = `translateX(-${slidesPosition}px)`;

    console.log(count)

  }

  arrowL.style.display = "none";


  arrowR.addEventListener('click', rightArrow);
  arrowL.addEventListener('click', leftArrow);

  console.log(count);
}





