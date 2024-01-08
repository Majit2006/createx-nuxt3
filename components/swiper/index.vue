<template>
  <div>
    <div class="swiper position-absolute">
      <Swiper
        :navigation="true"
        :modules="modules"
        :space-between="2"
        :loop="true"
        :autoplay="{
          delay: 7000,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }"
        class="mySwiper"
      >
        <swiper-slide>
          <div class="swiper-container me-6">
            <div
              class="swiper-slide-caption d-flex flex-column align-items-start start-5"
            >
              <p class="mb-0 me-5 text-collection">New collection</p>
              <h1 class="slider-title">Menswear 2020</h1>
            </div>
            <div class="swiper-btns mt-2 me-5">
              <button class="btn btn-green text-dark-green">Shop sale</button>
              <button class="btn btn-success text-white-lato mx-3">
                Shop the menswear
              </button>
            </div>
            <!-- <div class="horizont">
                <div class="horizont-item">
                <span class="horizont-count">01</span>
                <div class="horizont-line"></div>
                </div>
                <div class="horizont-item">
                <span class="horizont-count">02</span>
                <div class="horizont-line"></div>
                </div>
    
                <div class="horizont-item">
                <span class="horizont-count">03</span>
                <div class="horizont-line"></div>
                </div>
    
                <div class="horizont-item">
                <span class="horizont-count">04</span>
                <div class="horizont-line"></div>
                </div>
            </div> -->
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="swiper-container me-6">
            <div
              class="swiper-slide-caption d-flex flex-column align-items-start"
            >
              <p class="mb-0 me-5 text-collection">New collection</p>
              <h1 class="slider-title">Menswear 2020</h1>
            </div>
            <div class="swiper-btns mt-2 me-5">
              <button class="btn btn-green text-dark-green">Shop sale</button>
              <button class="btn btn-success text-white-lato mx-3">
                Shop the menswear
              </button>
            </div>
            <!-- <div class="horizont">
                <div class="horizont-item">
                <span class="horizont-count">01</span>
                <div class="horizont-line"></div>
                </div>
                <div class="horizont-item">
                <span class="horizont-count">02</span>
                <div class="horizont-line"></div>
                </div>
    
                <div class="horizont-item">
                <span class="horizont-count">03</span>
                <div class="horizont-line"></div>
                </div>
    
                <div class="horizont-item">
                <span class="horizont-count">04</span>
                <div class="horizont-line"></div>
                </div>
            </div> -->
          </div>
        </swiper-slide>
      </Swiper>
    </div>
    <div class="categories col d-flex justify-content-evenly position-relative z-3 top-50  end-0 start-0">
      <div class="categories-item text-center">
        <img src="~/assets/images/women.png" class="categories-img col-6" />
        <p class="categories-title">Women’s</p>
      </div>
      <div class="categories-item text-center">
        <img src="~/assets/images/kids.png" class="categories-img col-6" />
        <p class="categories-title">Men’s</p>
      </div>
      <div class="categories-item text-center">
        <img src="~/assets/images/men.png" class="categories-img col-6" />
        <p class="categories-title">Kids’</p>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// import topcategories from "~/components/topcategories/topcategories.vue";
export default {
  components: {
    Swiper,
    SwiperSlide,
    // topcategories,
  },
  setup() {
    return {
      // onSwiper,
      // onSlideChange,
      modules: [Navigation, Pagination, Scrollbar, A11y],
    };
  },
};
</script>

<style>
@import url("~/assets/css/mediaScreen.css");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.swiper {
  width: 100%;
  height: 92vh;
}

.swiper-slide {
  display: flex;
  /* Center slide text vertically */
  justify-content: center;
  align-items: center;
  background: url("~/assets/images/banner.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  text-align: center;
  font-size: 18px;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
