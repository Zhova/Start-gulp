"use strict";

$(document).ready(function () {
  $(".btn_menu").on("click", function () {
    $(".nav-menu").css("right", "0");
  });
  $(".close-menu").on("click", function () {
    $(".nav-menu").css("right", "-100%");
  });
  $(".choice-list__title").on("click", function () {
    $(".choice-list__desc").not(this).slideUp();
    $(this).next().slideToggle();
  });
  $(".answers-list__title").on("click", function (e) {
    e.preventDefault();
    $(".answers-list__title").next().not(this).slideUp();
    $(".services-item").parent().not(this).removeClass("active");
    $(this).next().slideToggle();
    $(this).parent().parent().addClass("active");
  }); // responsive

  if ($(window).width() < 768) {
    $(".services-content .title-block").after($(".choice-text-block")); // $(".contacts-form-title .btn").after($(".contacts-form__phone"));
  }

  $(".cases-slider").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: '<div class="btn slick-custom-arrow slick-custom-arrow-right">Prew</div>',
    prevArrow: '<div class="btn slick-custom-arrow slick-custom-arrow-left">Next</div>',
    responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });
  $(".blog-page .services-list-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: '<div class="btn slick-custom-arrow slick-custom-arrow-right">Prew</div>',
    prevArrow: '<div class="btn slick-custom-arrow slick-custom-arrow-left">Next</div>'
  });
  $(".reviews-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: '<div class="btn slick-custom-arrow slick-custom-arrow-right">Prew</div>',
    prevArrow: '<div class="btn slick-custom-arrow slick-custom-arrow-left">Next</div>'
  });
  $(".info-client-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  });
  $(".clients-filter-slider").slick({
    slidesToShow: 7,
    slidesToScroll: 1,
    nextArrow: '<div class="clients-filter-arrow clients-filter-arrow-right"></div>',
    prevArrow: '<div class="clients-filter-arrow clients-filter-arrow-left"></div>',
    responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }]
  });
  $(".what-search-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: '<div class="btn slick-custom-arrow slick-custom-arrow-right">Prew</div>',
    prevArrow: '<div class="btn slick-custom-arrow slick-custom-arrow-left">Next</div>',
    responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  }); // $(".answers-content .services-list").append(
  //   "<a hover='#' class='btn btn_red btn_bold btn_slider'>TRY NOW</a>"
  // );

  $(".faq-page .services-list").append("<a hover='#' class='btn btn_red btn_bold btn_slider'>TRY NOW</a>");
  $(".blog-page .services-list").append("<a hover='#' class='btn btn_red btn_bold btn_slider'>TRY NOW</a>");
  $(".client-page .cases-content").prepend("<div class='title-block_center'><p class='title-block__title'>other cases</p></div>");
  $(".one-blog-page .info-client .btn-wrap").prepend('<div class="like-it-block"><p class="like-it-text"><span>12</span>liked</p><a hover="#" class="btn btn_social btn_narrow btn_like">I LIKE THIS</a></div>');
  $(".blog-page .blog-slider .services-list .btn_slider").remove();
});