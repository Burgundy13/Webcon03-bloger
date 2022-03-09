$(".owl-carousel").owlCarousel({
  loop: true,
  autoplay: true,
  autoplayTimeOut: 1000,
  autoplayHoverPause: true,
  margin: 50,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});
