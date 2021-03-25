<template>
  <div class="card-deck">
    <div class="card" v-for="noticia in noticias" :key="noticia.id">
      <img class="card-img-top" v-if="noticia.img_miniatura" :src="backgroundURL(noticia.img_miniatura)" aria-hidden="true" />
      <div class="card-body">
        <h5 class="card-title">
          <nuxt-link :to="'/noticias/' + noticia.id">{{ noticia.titulo }}</nuxt-link>
        </h5>
        <div class="card-text" :class="noticia.img_miniatura ? 'overflow-three-lines' : 'overflow-ten-lines'"><p>{{ unformat(findPrimeiroTexto(noticia.conteudo)) }}</p></div>
      </div>
      <div class="ver-mais">
        <nuxt-link :to="'/noticias/' + noticia.id">Ver mais</nuxt-link>
      </div>
      <div class="card-footer">
        <p class="data text-muted">Publicada em {{ $formatDate(noticia.data_publicacao) }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-deck {
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 0;
}

.card-deck .card {
  margin: 0 1rem 2rem 1rem;
  flex: 1 1 100%;
  max-width: 100%;
  box-shadow: 0 3px 5px #7778;
}

.card-img-top {
  height: 16rem;
  max-width: 100%;
  object-fit: cover;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
}

.card-title {
  color: var(--accent);
  line-height: 1.7rem;
}

.card-body {
  padding-bottom: 0.5rem;
}

.card-text {
  max-width: 100%;
  margin: 1rem 0;
  color: var(--text-grey-darker);
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}

.overflow-three-lines {
  -webkit-line-clamp: 3;
  line-height: 1.5rem;
  max-height: calc(1.5rem * 3);
}

.overflow-ten-lines {
  -webkit-line-clamp: 10;
  line-height: 1.5rem;
  max-height: calc(1.5rem * 10);
}

.ver-mais {
  text-align: right;
  color: var(--accent);
  font-weight: 600;
  margin: 0 1rem 0.5rem 0;
}

.card-footer .data {
  margin: 0;
  font-size: 0.9rem;
}

@media (max-width: 767px) {
  .card-deck .card {
    margin-left: 10vw;
    margin-right: 10vw;
  }
}

@media (min-width: 768px) {
  .card-deck .card {
    flex: 0 0 40%;
    max-width: 25rem;
  }
}

@media (min-width: 1100px) {
  .card-deck .card {
    flex: 1 1 0%;
  }
}
</style>

<script>
export default {
  methods: {
    unformat(text) {
      const removeMd = require("remove-markdown");
      return removeMd(text);
    },
    backgroundURL: function(image) {
      if (image) {
        if (image.formats) {
          if (image.formats.small) {
            return process.env.baseURL + image.formats.small.url;
          } else if (image.formats.thumbnail) {
            return process.env.baseURL + image.formats.thumbnail.url;
          }
        } else {
          return process.env.baseURL + image.url;
        }
      }
      else {
        return  require("@/assets/images/fundo.png");
      }
    },
    findPrimeiroTexto: function(conteudo) {
      const texto = conteudo.find(c => c.__component === "conteudo.conteudo");

      return texto ? texto.conteudo.substring(0, 500) : "";
    }
  },
  props: {
    noticias: Array
  }
};
</script>
