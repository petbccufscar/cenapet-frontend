<template>
  <div class="container-fluid min-75 mb-4">
    <div class="row no-gutters align-items-center page-title">
      <div class="col">
        <h1 class="text-center">Organização de eventos</h1>
      </div>
    </div>
    <div class="container mt-3">
      <DynamicZone
        v-for="content in this.organizacao.conteudo"
        :key="content.id"
        :content="content"
        class="my-3"
      />
    </div>
  </div>
</template>

<style scoped>
.text {
  font-size: 1rem;
  line-height: 1.5rem;
  text-align: justify;
  margin: 1rem 8vw;
}

iframe {
  width: 100%;
  height: 20rem;
  max-height: 50vh;
}
</style>

<script>
import axios from "axios";
import DynamicZone from "@/components/DynamicZone.vue";

export default {
  head() {
      return {
        title: "Organização de eventos",
      }
  },
  components: {
    DynamicZone
  },
  asyncData({ params }) {
    axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
    return axios.get(process.env.baseURL + `/org-eventos`).then(res => {
      return { organizacao: res.data };
    });
  }
};
</script>
