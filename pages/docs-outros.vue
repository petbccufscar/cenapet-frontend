<template>
  <div class="container-fluid min-75 mb-4">
    <div class="row no-gutters align-items-center page-title">
      <div class="col">
        <h1 class="text-center">Outros</h1>
      </div>
    </div>
        <div class="container mt-3">
      <DynamicZone
        v-for="content in this.documentos.conteudo"
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
        title: "Outros documentos",
      }
  },
  components: {
    DynamicZone
  },
  asyncData ({ params }) {
     axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
     return axios.get(process.env.baseURL + `/outros`).then(res =>{
        return { documentos: res.data }
      })
  }
};
</script>
