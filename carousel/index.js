// This is called an IIFE
!(function (d) {
  // carousel items
  let carousels = d.getElementsByClassName("carousel");
  let itemClassName = "carousel-item",
    items = d.getElementsByClassName(itemClassName),
    totalItems = items.length;
  (slide = 0), (moving = true);

  // pagination
  let paginatedClassName = "slide",
    paginatedItems = d.querySelectorAll(`.carousel-wrapper .pagination .${paginatedClassName}`);

  // Set classes
  function setInitialClasses() {
    items[totalItems - 1].classList.add("prev");
    items[0].classList.add("active");
    items[1].classList.add("next");

    paginatedItems[0].classList.add("active");
  }

  // handles auto play of carousel
  function handleAutoPlay() {
    const carousel = carousels[0];
    if (!carousel.classList.contains("auto")) {
        return;
    }
    const time = carousel.dataset.time || 3000;
    setInterval(() => {
        moveNext();
    }, time);
  }

  // Set event listeners
  function setEventListeners() {
    let next = d.getElementsByClassName("carousel__button--next")[0],
      prev = d.getElementsByClassName("carousel__button--prev")[0];
    if (next) {
      next.addEventListener("click", moveNext);
    }
    if (prev) {
      prev.addEventListener("click", movePrev);
    }

    handleAutoPlay();
  }

  function handlePagination(newSlide, prevSlide) {
    paginatedItems[newSlide].className = paginatedClassName + " active";
    paginatedItems[prevSlide].className = paginatedClassName;
  }

  // Next navigation handler
  function moveNext() {
    let prevSlide = slide;

    // Check if moving
    if (!moving) {
      // If it's the last slide, reset to 0, else +1
      if (slide === totalItems - 1) {
        slide = 0;
      } else {
        slide++;
      }
      // Move carousel to updated slide
      moveCarouselTo(slide);
      handlePagination(slide, prevSlide)
    }
  }

  // Previous navigation handler
  function movePrev() {
    let prevSlide = slide;

    // Check if moving
    if (!moving) {
      // If it's the first slide, set as the last slide, else -1
      if (slide === 0) {
        slide = totalItems - 1;
      } else {
        slide--;
      }

      // Move carousel to updated slide
      moveCarouselTo(slide);
      handlePagination(slide, prevSlide);
    }
  }

  function disableInteraction() {
    // Set 'moving' to true for the same duration as our transition.
    moving = true;
    setTimeout(function () {
      moving = false;
    }, 800);
  }

  function moveCarouselTo(newSlide) {
    // Check if carousel is moving, if not, allow interaction
    if (!moving) {
      disableInteraction();
      // Update the "old" adjacent slides with "new" ones
      let newPrevious = newSlide - 1,
        newNext = newSlide + 1,
        oldPrevious = newSlide - 2,
        oldNext = newSlide + 2;

      // Test if carousel has more than three items
      if (totalItems > 3) {
        // Checks and updates if the new newSlides are out of bounds
        if (newPrevious <= 0) {
          oldPrevious = totalItems - 1;
        } else if (newNext >= totalItems - 1) {
          oldNext = 0;
        }
        // Checks and updates if newSlide is at the beginning/end
        if (newSlide === 0) {
          newPrevious = totalItems - 1;
          oldPrevious = totalItems - 2;
          oldNext = newSlide + 1;
        } else if (newSlide === totalItems - 1) {
          newPrevious = newSlide - 1;
          newNext = 0;
          oldNext = 1;
        }

        items[oldPrevious].className = itemClassName;
        items[oldNext].className = itemClassName;
        // Add new classes
        items[newPrevious].className = itemClassName + " prev";
        items[newSlide].className = itemClassName + " active";
        items[newNext].className = itemClassName + " next";
      }
    }
  }

  function initCarousel() {
    setInitialClasses();
    setEventListeners();

    moving = false;
  }

  initCarousel();
})(document);
