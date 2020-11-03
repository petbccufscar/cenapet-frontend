<template>
  <div class="card-deck">
    <div class="card" v-for="noticia in noticias" :key="noticia.id">
      <img class="card-img-top" :src="backgroundURL(noticia.img_fundo)" aria-hidden="true" />
      <div class="card-body">
        <h5 class="card-title">
          <nuxt-link :to="'/noticias/' + noticia.id">{{ noticia.titulo }}</nuxt-link>
        </h5>
        <div class="card-text">{{ unformat(findPrimeiroTexto(noticia.conteudo)) }}</div>
        <div class="ver-mais">
          <nuxt-link :to="'/noticias/' + noticia.id">Ver mais</nuxt-link>
        </div>
      </div>
      <div class="card-footer">
        <p class="data text-muted">Publicada em {{ moment(noticia.data_publicacao).format("DD/MM/YYYY") }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-deck {
  flex-wrap: wrap;
  justify-content: center;
}

.card-deck .card {
  margin: 1rem;
  flex: 1 1 100%;
  box-shadow: 0 3px 5px #7778;
}

.card-img-top {
  height: 30vh;
  max-width: 100%;
  object-fit: cover;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
}

.card-title {
  color: var(--accent);
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2; /* number of lines to show */
  line-height: 1.5rem; /* fallback */
  max-height: calc(1.5rem * 2); /* fallback */
}

.card-body {
  padding-bottom: 0.5rem;
}

.card-text {
  margin: 1rem 0;
  color: var(--text-grey-darker);
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2; /* number of lines to show */
  line-height: 1.3rem; /* fallback */
  max-height: calc(1.3rem * 2); /* fallback */
}

.ver-mais {
  text-align: right;
  color: var(--accent);
  font-weight: 600;
}

.card-footer .data {
  margin: 0;
  font-size: 0.9rem;
}
@media (min-width: 768px) {
  .card-deck .card {
    flex: 0 0 40%;
  }
}
@media (min-width: 1100px) {
  .card-deck .card {
    flex: 1 1 0%;
  }
}
</style>

<script>
var moment = require("moment");

export default {
  data() {
    return {
      moment: moment
    };
  },
  methods: {
    unformat(text) {
      const removeMd = require("remove-markdown");
      return removeMd(text);
    },
    backgroundURL: function(image) {
      return image
        ? process.env.baseURL + image.formats.small.url
        : require("@/assets/images/fundo.png");
    },
    findPrimeiroTexto: function(conteudo) {
      return conteudo ? conteudo.find(c => c.__component === "conteudo.conteudo").conteudo : "";
    }
  },
  props: {
    noticias: Array
  }
};
</script>
