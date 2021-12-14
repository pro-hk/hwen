const mainVisualSlider = new Swiper("#businessVisual", {
  speed: 1000,
  effect: "fade",
  // navigation: {
  //   prevEl: "#mainVisual .prev",
  //   nextEl: "#mainVisual .next",
  // },
  pagination: {
    el: "#businessVisual .pagination",
    type: "bullets",
    clickable: "true",
  },
});

const productSlider = new Swiper("#product .list", {
  speed: 600,
  slidesPerView: 3, //화면에 보여지는 갯수
  slidesPerGroup: 3, //묶음
  navigation: {
    prevEl: "#product .prev",
    nextEl: "#product .next",
  },
});

const header = $("#header");
const gnbList = $("#gnb .list > li");
const menuOn = header.find(".etc .menuOn");
const menuOff = header.find(".etc .menuOff");

gnbList.on("mouseenter", function () {
  if (!header.hasClass("menu")) {
    header.addClass("on");
  }
});
header.on("mouseleave", function () {
  header.removeClass("on");
});

menuOn.on("click", function () {
  header.removeClass("on");
  header.addClass("menu");
  // gnbList 이벤트 실행이 끝난다
});
menuOff.on("click", function () {
  header.removeClass("menu");
});

// $(window).on("scroll", function () {
//   const st = $(window).scrollTop();
//   if (st > 0) {
//     header.hide();
//     return (st01 = st);
//   }
//   if (st01 > st) {
//     header.show();
//   }
//   console.log(st);
//   console.log(st01);
// });
