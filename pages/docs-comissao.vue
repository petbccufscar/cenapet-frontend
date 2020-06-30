<template>
  <div class="container-fluid">
    <div class="row no-gutters page-title align-content-center">
      <div class="col">
        <h1 class="text-center">Comissão Executiva</h1>
      </div>
    </div>
    <div class="row no-gutters text">
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

<style scoped>
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
