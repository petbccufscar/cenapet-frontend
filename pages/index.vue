<template>
  <div class="container-fluid">
    <Carousel />
    <div class="container intro">
      <h1 class="intro-title">A CENAPET</h1>
      <p class="intro-text">
        A CENAPET é a entidade representativa dos estudantes e
        professores-tutores no contexto do Programa de Educação Tutorial, sendo
        que esta tem a função de representar a comunidade petiana e realizar a
        comunicação com órgãos superiores como o MEC.
      </p>
      <p class="intro-text">Confira a atual composição da diretoria neste link!</p>
    </div>
    <div class="container noticias mb-4">
      <h1 class="intro-title text-center mb-2">Últimas notícias</h1>
      <h6 class="text-right mb-1">
        <nuxt-link to="noticias">Ver todas</nuxt-link>
      </h6>
      <div class="row no-gutters ustify-content-center">
        <NoticiaDeck />
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from "@/components/Carousel.vue";
import NoticiaDeck from "@/components/NoticiaDeck.vue";

export default {
  components: {
    Carousel,
    NoticiaDeck
  }
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
</style>
