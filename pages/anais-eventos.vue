<template>
  <div class="container-fluid mb-4">
    <div v-html="$md.render(anaisEventos.conteudo)"></div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  asyncData({ params }) {
    axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
    return axios.get(process.env.baseURL + `/anais-eventos`).then(res => {
      return { anaisEventos: res.data };
    });
  }
};
</script>