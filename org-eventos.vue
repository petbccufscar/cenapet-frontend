<template>
  <div class="container-fluid">
    <div class="row no-gutters page-title align-content-center">
      <div class="col">
        <h1 class="text-center">Organização de eventos</h1>
      </div>
    </div>
    <div class="row no-gutters text">
      <div v-html="$md.render(organizacao.conteudo)"></div>
    </div>
    <div class="row no-gutters justify-content-center my-4">
      <div class="col-md-6 text-center">
        <iframe
          src="https://drive.google.com/file/d/1UF6dUTKpeg18qvqXzX_nLWMA5CMSomLq/preview"
          allowfullscreen="true"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<style scoped>
.text {
  font-size: 1rem;
  line-height: 1.5rem;
  text-align: justify;
  margin: 1rem 8vw;
}

iframe {
  width: 100%;
  height: 20rem;
  max-height: 50vh;
}
</style>

<script>
import axios from "axios";

export default {
  asyncData({ params }) {
    axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
    return axios.get(process.env.baseURL + `/org-eventos`).then(res => {
      return { organizacao: res.data };
    });
  }
};
</script>
