<template lang = "md">
  <div class="container-fluid orientacoes min-75">
    <div class="row no-gutters align-items-center page-title">
      <div class="col">
        <h1 class="text-center">Orientações gerais</h1>
      </div>
    </div>
    <div class="container my-4">
      <div class="accordion mt-4" id="accordion">
        <div v-for="(orientacao, index) in orientacoes" :key="orientacao.id" class="card">
          <div class="card-header">
            <h5 class="mb-0">
              <button
                class="btn btn-link w-100"
                data-toggle="collapse"
                :data-target="'#Collapse' + orientacao.id"
                aria-expanded="true"
                :aria-controls="orientacao.id"
              >{{orientacao.titulo}}</button>
            </h5>
          </div>
          <div
            :id="'Collapse' + orientacao.id"
            class="collapse"
            :class="{ 'show': index === 0 }"
            data-parent="#accordion"
          >
            <div class="card-body">
              <div v-html="$md.render(orientacao.conteudo)"></div>
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

.card hr {
  margin: 2rem 0;
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
    return axios.get(process.env.baseURL + `/orientacoes`).then((res) => {
      return { orientacoes: res.data };
    });
  },
};
</script>