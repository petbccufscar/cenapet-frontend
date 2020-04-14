<template>
  <b-container fluid>
    <Carousel />
    <b-container class="intro">
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
    </b-container>
    <b-container class="noticias mb-4">
      <h1 class="intro-title text-center mb-2">Últimas notícias</h1>
      <h6 class="text-right mb-1">
        <nuxt-link to="noticias">Ver todas</nuxt-link>
      </h6>
      <b-row no-gutters class="justify-content-center">
        <NoticiaCardDeck />
      </b-row>
    </b-container>
  </b-container>
</template>

<script>
import Carousel from "@/components/Carousel.vue";
import NoticiaCardDeck from "@/components/NoticiaCardDeck.vue";

export default {
  components: {
    Carousel,
    NoticiaCardDeck
  }
};
</script>

<style>
.container-fluid {
  padding: 0;
}
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
</style>
