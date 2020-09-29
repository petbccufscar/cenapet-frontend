<template>
  <div class="container-fluid min-75 mb-4">
    <div class="row no-gutters align-items-center page-title">
      <div class="col">
        <h1 class="text-center">Cartas</h1>
      </div>
    </div>
    <div class="container">
      <div class="row no-gutters mt-3">
        <div class="col">

          <div v-html="$md.render(carta.conteudo)"></div>

        </div>
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios"

export default {
  asyncData({ params }) {
    return axios.get(process.env.baseURL + `/cartas`).then(res => {
      return { carta: res.data};
    });
  }
};
</script>
