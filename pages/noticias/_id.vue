<template>
  <div class="container-fluid min-75 noticia">
    <div class="img-intro" :style="{ backgroundImage: `url(${backgroundURL()})` }">
      <h1 class="text-intro">{{ noticia.titulo }}</h1>
    </div>
    <nuxt-link to="/noticias">
      <font-awesome-icon :icon="['fas', 'arrow-left']" class="icon-arrow" />
    </nuxt-link>
    <div class="container">
      <div v-if="noticia.conteudo" class="conteudo" v-html="$md.render(noticia.conteudo)"></div>
      <p
        v-if="noticia.data_publicacao"
        class
      >Publicado em {{ moment(noticia.data_publicacao).format("DD/MM/YYYY") }}</p>
    </div>
  </div>
</template>

<style scoped>
.noticia {
  margin-bottom: 5rem;
}

.img-intro {
  background-position: center;
  background-size: cover;
  min-height: 50vh;
  display: flex;
  align-items: center;
}

.img-intro .text-intro {
  color: var(--text-accent);
  text-align: center;
  background-color: #0008;
  width: 100%;
  padding: 7% 1rem;
  margin: 5% 0;
}

.conteudo {
  text-align: justify;
  margin: 2rem 3rem 3rem 3rem;
}

.icon-arrow {
  font-size: 2rem;
  margin: 2rem 0 1rem 3rem;
  position: absolute;
  color: var(--theme-dark);
}

.icon-arrow:hover,
.icon-arrow:focus,
.icon-arrow:active {
  color: var(--accent);
}

@media (max-width: 577px) {
  #editor {
    margin: 0.3rem;
  }

  .icon-arrow {
    position: initial;
    margin: 1.5rem 0 0.5rem 1rem;
  }
}
</style>

<script>
import axios from 'axios';
var moment = require("moment");

export default {
  data() {
    return {
      noticia: {},
      moment: moment
    };
  },
  head() {
      return {
        title: "Notícia | " + this.noticia.titulo,
      }
  },
  asyncData ({ params }) {
    axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
    return axios.get(process.env.baseURL + `/noticias/${params.id}`)
      .then((res) => {
        return { noticia: res.data }
      })
  },
  methods: {
    // método para retornar a imagem de fundo padrão caso não haja nenhuma
    backgroundURL: function() {
      return this.noticia.img_fundo
        ? process.env.baseURL + this.noticia.img_fundo.url
        : require("~/assets/images/fundo.png");
    }
  }
};
</script>