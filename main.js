$("#img-carousel").owlCarousel({
  center: false,
  items: 1,
  nav: true,
  loop: true,
  margin: 10,
  responsive: {
    700: {
      items: 2,
    },
    1200: {
      items: 3,
    },
    1300: {
      items: 4,
    },
  },
});
