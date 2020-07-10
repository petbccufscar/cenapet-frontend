<template>
  <div class="container-fluid mb-4">
    <div class="row no-gutters page-title align-content-center">
      <div class="col">
        <h1 class="text-center">Anais de eventos</h1>
      </div>
    </div>
    <div class="container mt-3">
      <div v-html="$md.render(docscomissao.conteudo)"></div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  asyncData ({ params }) {
     axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
     return axios.get(process.env.baseURL + `/docs-comissao`).then(res =>{
        return { docscomissao: res.data }
      })
  }
};
</script>
