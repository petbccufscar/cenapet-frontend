<template>
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
            <nuxt-link :to="'/noticias/' + slide.id">
              {{ slide.titulo }}
              <font-awesome-icon
                :icon="['fas', 'external-link-alt']"
                class="ml-1 fa-xs"
                style="vertical-align: inherit"
              />
            </nuxt-link>
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
  top: 20rem;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #222222;
  opacity: 0.85;
}

.carousel-caption h3 {
  max-width: 70%;
  padding: 1rem;
  color: #fff;
  text-shadow: 3px 3px 6px #424242;
  font-size: 1.5rem;
}

@media (max-width: 767px) {
  .carousel-caption h3 {
    font-size: 1rem;
  }
}

.carousel-caption a {
  color: #fff;
}

.carousel-caption a:hover {
  color: var(--text-accent);
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
  height: 25rem;
  object-fit: cover;
  object-position: center;
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
        ? process.env.baseURL + img.url
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