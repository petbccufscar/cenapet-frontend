<template>
  <div class="container-fluid">
    <div class="row no-gutters page-title align-content-center">
      <div class="col">
        <h1 class="text-center">Comissão Executiva</h1>
      </div>
    </div>
    <div class="row no-gutters text">
      <div v-html="$md.render(doccomissao.conteudo)"></div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
var moment = require("moment");

export default {
  data() {
    return {
      doccomissao: {},
      moment: moment
    };
  },
  asyncData ({ params }) {
    return axios.get(`http://localhost:1337/Doc-Comissao/`)
      .then((res) => {
        return { doccomissao: res.data }
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

<style>
.container-fluid {
  padding: 0;
}

.intro-comisexec {
  margin-top: 1rem;
}
.intro-title{
  color: var(--accent);
  margin: 2rem 0 1rem 0;
  letter-spacing: 2px;
  font-weight: 600;
}

.intro-subtitle{
  font-size: 1.1rem;
}

</style>
