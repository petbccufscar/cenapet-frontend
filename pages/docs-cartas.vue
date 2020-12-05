<template>
  <div class="container-fluid min-75 mb-4">
    <div class="row no-gutters align-items-center page-title">
      <div class="col">
        <h1 class="text-center">Cartas</h1>
      </div>
    </div>
    <div class="container mt-3">
      <DynamicZone
        v-for="content in this.cartas.conteudo"
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
      title: "Cartas",
    };
  },
  components: {
    DynamicZone,
  },
  asyncData({ params }) {
    return axios.get(process.env.baseURL + `/cartas`).then((res) => {
      return { cartas: res.data };
    });
  },
};
</script>
