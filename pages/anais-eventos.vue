<template>
  <div class="container-fluid min-75 mb-4">
    <div class="row no-gutters align-items-center page-title">
      <div class="col">
        <h1 class="text-center">Anais de eventos</h1>
      </div>
    </div>
    <div class="container mt-3">
      <DynamicZone
        v-for="content in this.anaisEventos.conteudo"
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
      title: "Anais de eventos",
    };
  },
  components: {
    DynamicZone,
  },
  asyncData({ params }) {
    return axios.get(process.env.baseURL + `/anais-eventos`).then((res) => {
      return { anaisEventos: res.data };
    });
  },
};
</script>