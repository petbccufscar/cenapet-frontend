<template>
  <div class = "container mt-3">
  <div id="carousel" class="carousel slide carousel-fade" data-ride="carousel">
    <div class="carousel-inner">
      <div
        v-for="(slide, index) in slides"
        :key="slide.id"
        class="carousel-item"
        :class="{ active: index === 0 }"
      >
        <img :src="getImgUrl(slide.img_fundo)" alt="Imagem notícia" />

        <div class="carousel-caption">
          <h3>
            <nuxt-link :to="'/noticias/' + slide.id">{{
              slide.titulo
            }}</nuxt-link>
          </h3>
        </div>
      </div>
    </div>
    <a
      class="carousel-control-prev"
      href="#carousel"
      role="button"
      data-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Anterior</span>
    </a>
    <a
      class="carousel-control-next"
      href="#carousel"
      role="button"
      data-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Próximo</span>
    </a>
  </div>
</div>
</template>

<style scoped>

.carousel-caption {
  right: 0rem;
  left: 0;
  top: 17.5rem;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #222222;
  opacity: 0.8;
}

.carousel-caption h3 {
  max-width: 70%;
  padding: 1rem;
  color: #fff;
  text-shadow: 3px 3px 6px #424242;
  font-size: 1.5rem;
}

.carousel-caption a {
  color: #fff;
}

.carousel-caption a:hover {
  text-shadow: 5px 5px 7px #222;
}

.carousel-control-prev,
.carousel-control-next {
  z-index: 10;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  width: 1.5rem;
  height: 4rem;
}

.carousel-item img {
  width: 100%;
  height: 22rem;
  object-fit: cover;
}


.carousel-indicators .active {
  background-color: var(--deep-purple);
}
</style>

<script>
import axios from "axios";

export default {
  data() {
    return {
      sliding: null,
    };
  },
  methods: {
    getImgUrl(img) {
      return img
        ? process.env.baseURL + img.formats.small.url
        : require("~/assets/images/fundo.png");
    },
    formatLink: function (id) {
      return process.env.dominioURL + "/noticias/" + id;
    },
  },
  props: {
    slides: Array,
  },
};
</script>