<template>
  <div>
    <div v-swiper:mySwiper="swiperOption">
      <div class="swiper-wrapper">
        <div v-for="item in banner" :key="item.key" class="swiper-slide" >
          <img :src="item.src" alt="item.src">
        </div>
      </div>
      <div slot="pagination" class="swiper-pagination" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      banner: [
        {
          src: "https://dummyimage.com/800x100/206de0/ffffff"
        },
        {
          src: "https://dummyimage.com/800x100/206de0/ffffff"
        },
        {
          src: "https://dummyimage.com/800x100/206de0/ffffff"
        },
        {
          src: "https://dummyimage.com/800x100/206de0/ffffff"
        },
        {
          src: "https://dummyimage.com/800x100/206de0/ffffff"
        },
        {
          src: "https://dummyimage.com/800x100/206de0/ffffff"
        }
      ],
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 8,
        breakpoints: {
          // when window width is <= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 8
          },
          // when window width is <= 480px
          480: {
            slidesPerView: 2,
            spaceBetween: 8
          },
          // when window width is <= 800px
          800: {
            slidesPerView: 3,
            spaceBetween: 8
          }
        },
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        },
        pagination: {
          el: ".swiper-pagination"
        }
      }
    }
  }
}
</script>
