<template lang = "md">
  <div class="container-fluid orientacoes">
    <div class="row no-gutters align-items-center page-title">
      <div class="col">
        <h1 class="text-center">Orientações gerais</h1>
      </div>
    </div>
    <div class="container my-4">
      <div class="accordion mt-4" id="accordion">
        <div v-for="Orientacao in Orientacoes" :key="Orientacao.id" class="card">
          <div class="card-header">
            <h5 class="mb-0">
              <button
                class="btn btn-link"
                data-toggle="collapse"
                :data-target="'#Collapse' + Orientacao.id"
                aria-expanded="true"
                :aria-controls="Orientacao.id"
              >{{Orientacao.titulo}}</button>
            </h5>
          </div>
          <div
            :id="'Collapse' + Orientacao.id"
            class="collapse"
            :class="{ 'show': index === 0 }"
            :aria-labelledby="headingOne"
            data-parent="#accordion"
          >
            <div class="card-body">
              <div v-html="$md.render(Orientacao.conteudo)"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.card-header {
  text-align: center;
}

h5 .btn-link:hover,
h5 .btn-link:focus,
h5 .btn-link:active {
  text-decoration: none;
  color: var(--deep-purple);
  outline: none;
  box-shadow: none;
}
</style>


<script>
import axios from "axios";

export default {
  asyncData({ params }) {
    axios.defaults.headers.post["Content-Type"] =
      "application/x-www-form-urlencoded";
    return axios.get(process.env.baseURL + `/Orientacoes`).then((res) => {
      return { Orientacoes: res.data };
    });
  },
};
</script>