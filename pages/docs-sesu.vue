<template>
  <div class="container-fluid mb-4">
    <div class="row no-gutters align-items-center page-title">
      <div class="col">
        <h1 class="text-center">SESu/MEC</h1>
      </div>
    </div>
    <div class="container mt-3">
      <div v-html="$md.render(docssesu.conteudo)"></div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';


export default {
  asyncData ({ params }) {
     axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
     return axios.get(process.env.baseURL + `/Docs-sesu`).then(res =>{
        return { docssesu: res.data }
      })
  }
};
</script>