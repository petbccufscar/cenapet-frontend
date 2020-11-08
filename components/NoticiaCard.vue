<template>
  <div class="card">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img :src="getImgUrl(noticia.img_miniatura)" class="card-img" />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <nuxt-link :to="'/noticias/' + noticia.id">
            <h4 class="card-title">{{ noticia.titulo }}</h4>
          </nuxt-link>
          <p v-if="primeiroTexto" class="card-text">{{ removeMarkdown(primeiroTexto.conteudo) }}</p>
          <p class="card-text text-muted mt-1">Publicada em {{ $formatDate(noticia.data_publicacao) }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  border-radius: 1rem;
  margin: 1rem;
  box-shadow: 0 2px 4px #7778;
}

.card-img {
  object-fit: cover;
  object-position: center;
  height: 100%;
  border-radius: 1rem 0 0 1rem;
}

.card-title {
  color: var(--accent);
  margin-bottom: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4; /* number of lines to show */
  line-height: 1.7rem; /* fallback */
  max-height: calc(1.7rem * 4); /* fallback */
}

.card-text {
  margin-top: 2rem;
  font-size: 0.9rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3; /* number of lines to show */
  line-height: 1.3rem; /* fallback */
  max-height: calc(1.3rem * 3); /* fallback */
}

@media (max-width: 767px) {
  .card {
    width: 100%;
  }

  .card-img {
    max-height: 30vh;
    border-radius: 1rem 1rem 0 0;
  }
}
@media (max-width: 991px) {
  .card {
    width: 75%;
  }
}
</style>

<script>
const removeMd = require("remove-markdown");

export default {
  methods: {
    removeMarkdown(text) {
      return removeMd(text);
    },
    getImgUrl(img) {
      return img
        ? process.env.baseURL + img.formats.small.url
        : require("~/assets/images/logo_escuro.png");
    }
  },
  props: {
    noticia: Object
  },
  computed: {
    primeiroTexto: function() {
      return this.noticia.conteudo ? this.noticia.conteudo.find(c => c.__component === "conteudo.conteudo") : null;
    }
  }
};
</script>
