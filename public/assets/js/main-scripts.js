(function ($) {
  "use strict";
  var AFRA = {};

  /*====== Preloader ======*/
  var preloader = $(".preloader");
  $(window).on("load", function () {
    var preloaderFadeOutTime = 0;

    function hidePreloader() {
      preloader.fadeOut(preloaderFadeOutTime);
    }

    hidePreloader();
  });

  /*====== Sticky Navigation Menu ======*/
  AFRA.StickyHeader = function () {
    var header = $(".app-header");
    $(window).scroll(function () {
      if ($(this).scrollTop() > header.height()) {
        header.addClass("sticky");
      } else {
        header.removeClass("sticky");
      }
    });
  };

  /*====== Mega-Menu ======*/
  AFRA.MegaMenu = function () {
    var link = $(".app-header .has-menu");
    var header = $(".app-header");
    var overlay = $(".mega-menu-overlay");
    link.hover(
      function () {
        var id = $(this).data("megamenu-link");
        var megamenu = $("[data-megamenu-id=" + id + "]");
        megamenu.show();
        header.addClass("header-shadow");
        overlay.addClass("active");
        megamenu.addClass("active");
      },
      function () {
        var id = $(this).data("megamenu-link");
        var megamenu = $("[data-megamenu-id=" + id + "]");
        megamenu.hide(60);
        header.removeClass("header-shadow");
        overlay.removeClass("active");
        megamenu.removeClass("active");
      }
    );
  };

  /*====== Sidenav - Side Navigation Menu ======*/
  AFRA.Sidenav = function () {
    var body = $("body");
    var header = $(".app-header");
    var sidenav = $(".app-sidenav");

    var toggle = $(".app-sidenav .has-menu > a");

    toggle.on("click", function (e) {
      e.preventDefault();

      var parent = $(this).parent("li");

      if (parent.hasClass("show")) {
        parent.removeClass("show");
      } else {
        parent.addClass("show");
      }
    });
    header.on("click", ".button-open-sidenav", function () {
      sidenav.addClass("active");
      body.addClass("state-menu");
    });
    sidenav.on("click", ".button-close-sidenav, .sidenav-close", function () {
      sidenav.removeClass("active");
      body.removeClass("state-menu");
    });
  };

  /*====== Sidenav Filtering ======*/
  AFRA.SidenavFilter = function () {
    var body = $("body");
    var button = $(".button-open-sidenav-filter");
    var sidenav = $("#sidenav-filter");
    var buttonClose = $(".sidenav-filter-close");
    button.on("click", function (e) {
      e.preventDefault();
      body.addClass("state-menu");
      sidenav.addClass("active");
    });
    buttonClose.on("click", function (e) {
      e.preventDefault();
      body.removeClass("state-menu");
      sidenav.removeClass("active");
    });
  };

  /*====== Sidenav Sorting ======*/
  AFRA.SidenavSorting = function () {
    var body = $("body");
    var button = $(".button-open-sidenav-sorting");
    var sidenav = $("#sidenav-sorting");
    var buttonClose = $(".sidenav-mobile-close");
    button.on("click", function (e) {
      e.preventDefault();
      body.addClass("state-menu");
      sidenav.addClass("active");
    });
    buttonClose.on("click", function (e) {
      e.preventDefault();
      body.removeClass("state-menu");
      sidenav.removeClass("active");
    });
  };

  /*====== Select Multiple ClassRooms ======*/
  AFRA.MultipleClassRooms = function () {
    var value = 1;
    var select = $("#form-details-of-classrooms").children("ul");
    var btnAppend = $("#button-append-classroom");
    var btnDelete = $("#button-delete-classroom");
    btnAppend.on("click", function (e) {
      if (value < 15) {
        e.preventDefault();
        value = value + 1;
        select.append(
          "<li> <h4>Lesson <span>" +
            value +
            '</span></h4> <div class="row row-sm"> <div class="col-12 col-sm-12 col-md-6"> <div class="form-item"> <label class="form-label">Start</label> <input type="text" name="date[]" class="input-datepicker" required /> </div> </div> <div class="col-12 col-sm-12 col-md-6"> <div class="form-item"> <label for="input-type" class="form-label">End</label><input type="text" name="hours[]" class="input-datepicker" required /></div> </div> </div> </li>'
        );
      }
    });
    btnDelete.on("click", function (e) {
      e.preventDefault();
      if (value > 1) {
        value--;
        select.find("li:last-child").remove();
      }
    });
  };

  $(window).on("load", function () {});

  $(document).ready(function () {
    AFRA.MultipleClassRooms(),
      AFRA.MegaMenu(),
      AFRA.Stepper(),
      AFRA.Counter(),
      AFRA.StickyHeader(),
      AFRA.StickySidebar(),
      AFRA.Sidenav(),
      AFRA.SidenavFilter(),
      AFRA.SidenavSorting(),
      AFRA.Select2(),
      AFRA.Accordion(),
      AFRA.FormSwitch(),
      AFRA.Calendar(),
      AFRA.CalendarTabs(),
      AFRA.CalendarSelect(),
      AFRA.Popover(),
      AFRA.UploadAvatar();
  });
})(jQuery);

$(document).ready(function () {
  var swiperTeachers = new Swiper(".swiper-teachers", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      100: {
        slidesPerView: 1.4,
        spaceBetween: 12,
      },
      768: {
        slidesPerView: 2.4,
        spaceBetween: 12,
      },
      900: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1100: {
        slidesPerView: 4,
        spaceBetween: 15,
      },
      1300: {
        slidesPerView: 4.5,
        spaceBetween: 15,
      },
    },
  });

  var swiperTestimonial = new Swiper(".swiper-testimonial", {
    loop: true,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 45,
      },
    },
  });
});
