<template>
  <div class="container-fluid min-70 mb-4">
    <div class="row no-gutters align-items-center page-title">
      <div class="col">
        <h1 class="text-center">Grupos PET</h1>
      </div>
    </div>
    <div class="container mt-3">
     <p class="small font-weight-bold text-right m-3">página temporária</p>
      <div class="mt-3" v-for="pet in pets" :key="pet.id">
        <h4>
          <nuxt-link :to="'/pets/' + pet.id">{{pet.nome}}</nuxt-link>
        </h4>
        {{pet.campus.universidade}}
        <p class="mb-0">{{pet.campus.universidade.nome}}</p>
        <p>{{pet.campus.nome}}</p>
      </div>
     
    </div>
  </div>
</template>

<style scoped>
</style>

<script>
import axios from "axios";

export default {
  asyncData({ params }) {
    return axios.get(process.env.baseURL + `/pets`).then((res) => {
      return { pets: res.data };
    });
  },
};
</script>