<template>
  <div class="container-fluid min-75 mb-4">
    <div class="row no-gutters align-items-center page-title">
      <div class="col">
        <h1 class="text-center">Relatórios das Gestões</h1>
      </div>
    </div>
    <div class="container mt-3">
      <DynamicZone
        v-for="content in this.relatoriosGestoes.conteudo"
        :key="content.id"
        :content="content"
        class="my-3"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import DynamicZone from "@/components/DynamicZone.vue";

export default {
  head() {
      return {
        title: "Relatórios das Gestões",
      }
  },
  components: {
    DynamicZone
  },
  asyncData({ params }) {
    axios.defaults.headers.post["Content-Type"] =
      "application/x-www-form-urlencoded";
    return axios.get(process.env.baseURL + `/relatorios-gestoes`).then(res => {
      return { relatoriosGestoes: res.data };
    });
  }
};
</script>