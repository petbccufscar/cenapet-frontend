<template>
  <div id="carousel" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li
        v-for="(slide, index) in slides"
        :key="slide.id"
        data-target="#carousel"
        :data-slide-to="index"
        :class="{ active: index === 0 }"
      ></li>
    </ol>
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
</template>

<style scoped>
.carousel-caption {
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #33333319;
}

.carousel-caption h3 {
  max-width: 70%;
  padding: 1rem;
  color: #fff;
  text-shadow: 3px 3px 6px #333;
  font-size: 3rem;
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
  width: 4rem;
  height: 4rem;
}

.carousel-item img {
  width: 100%;
  height: 75vh;
  object-fit: cover;
  filter: blur(7px);
}

.carousel-indicators li {
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  margin: 0 0.6rem;
  opacity: 0.9;
  background-color: #fff6;
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