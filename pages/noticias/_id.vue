<template>
  <div class="container-fluid min-75 noticia">
    <div
      class="img-intro"
      :style="{ backgroundImage: `url(${backgroundURL()})` }"
    >
      <h1 class="text-intro">{{ noticia.titulo }}</h1>
    </div>
    <nuxt-link to="/noticias">
      <font-awesome-icon :icon="['fas', 'arrow-left']" class="icon-arrow" />
    </nuxt-link>
    <div class="container mt-5">
      <div class="row no-gutters justify-content-center">
        <div class="col-md-10">
          <DynamicZone
            v-for="content in this.noticia.conteudo"
            :key="content.id"
            :content="content"
            class="my-3"
          />
        </div>
      </div>

      <p v-if="noticia.data_publicacao" class="mt-4 small">
        Publicado em
        {{ $formatDate(noticia.data_publicacao) }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.noticia {
  margin-bottom: 5rem;
}

.img-intro {
  background-position: center -15vh;
  background-attachment: fixed;
  background-size: cover;
  min-height: 50vh;
  display: flex;
  align-items: center;
}

.img-intro .text-intro {
  color: #f4f4f4;
  font-size: 3rem;
  line-height: 3.5rem;
  text-align: center;
  background-color: #000a;
  text-shadow: 3px 3px 6px #333;
  width: 100%;
  padding: 7% 1rem;
  margin: 5% 0;
}

.conteudo {
  text-align: justify;
}

.citacao {
  border-left: 2px solid #ccc;
  padding-left: 1.5rem;
  margin-left: 1.5rem;
}

.citacao .citacao-texto {
  color: var(--text-grey-darker);
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
  .img-intro .text-intro {
    font-size: 2rem;
    line-height: 2.5rem;
  }

  .icon-arrow {
    position: initial;
    margin: 1.5rem 0 0.5rem 1rem;
  }
}
</style>

<script>
import axios from "axios";
import DynamicZone from "@/components/DynamicZone.vue";

export default {
  data() {
    return {
      noticia: {},
    };
  },
  head() {
    return {
      title: "Notícia | " + this.noticia.titulo,
    };
  },
  components: {
    DynamicZone,
  },
  asyncData({ params }) {
    axios.defaults.headers.post["Content-Type"] =
      "application/x-www-form-urlencoded";
    return axios
      .get(process.env.baseURL + `/noticias/${params.id}`)
      .then((res) => {
        return { noticia: res.data };
      });
  },
  methods: {
    // método para retornar a imagem de fundo padrão caso não haja nenhuma
    backgroundURL: function () {
      return this.noticia.img_fundo
        ? process.env.baseURL + this.noticia.img_fundo.url
        : require("~/assets/images/fundo.png");
    },
  },
};
</script>