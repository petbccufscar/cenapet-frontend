<template>
  <div class="container-fluid min-75 mb-4">
    <Carousel :slides="slides" />

    <div class="container intro">
      <h1 class="intro-title">A CENAPET</h1>
      <p class="intro-text">
        A CENAPET é a entidade representativa dos estudantes e
        professores-tutores no contexto do Programa de Educação Tutorial, sendo
        que esta tem a função de representar a comunidade petiana e realizar a
        comunicação com órgãos superiores como o MEC.
      </p>
      <p class="intro-text">
        Confira a atual composição da diretoria neste link!
      </p>
    </div>
    <div class="row no-gutters justify-content-center text-center mb-4">
      <h1 class="intro-title mb-2">Últimas notícias</h1>
      <div class="col-lg-10 text-right mb-3">
        <nuxt-link class="btn btn-noticias" to="noticias">Ver todas</nuxt-link>
      </div>
      <div class="col-lg-11">
        <NoticiaDeck :noticias="noticias" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Carousel from "@/components/Carousel.vue";
import NoticiaDeck from "@/components/NoticiaDeck.vue";

export default {
  components: {
    Carousel,
    NoticiaDeck,
  },
  async asyncData({ params }) {
    axios.defaults.headers.post["Content-Type"] =
      "application/x-www-form-urlencoded";
    const noticias = await axios.get(
      process.env.baseURL + `/noticias?_limit=3&_sort=data_publicacao:DESC`
    );
    const slides = await axios.get(
      process.env.baseURL +
        "/noticias?apareceCarrossel=1&_sort=data_publicacao:DESC"
    );
    return {
      slides: slides.data,
      noticias: noticias.data,
    };
  },
};
</script>

<style scoped>
.intro {
  margin-top: 1rem;
  text-align: center;
}

.intro-title {
  color: var(--accent);
  margin: 2rem 0 1rem 0;
  letter-spacing: 2px;
  font-weight: 600;
}

.intro-text {
  font-size: 1.3rem;
  letter-spacing: 1px;
  line-height: 2rem;
  margin: 1rem 8vw;
}

.btn-noticias {
  border: 1px solid var(--accent);
  color: var(--highlight-dark);
}

.btn-noticias:hover,
.btn-noticias:focus,
.btn-noticias:active {
  background-color: var(--accent);
  color: #fff;
}

@media (max-width: 883px) {
  .col-lg-11 {
    width: unset;
  }
}

@media (max-width: 991px) {
  .btn-noticias {
    margin-right: 2rem;
  }
}
</style>
