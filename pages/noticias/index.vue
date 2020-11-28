<template>
  <div class="container-fluid min-75 mb-4">
    <div class="row no-gutters align-items-center page-title mb-5">
      <div class="col">
        <h1 class="text-center">Notícias</h1>
      </div>
    </div>
    <div
      v-for="(linha, index) in $paginate(noticias, 3)"
      :key="index"
      class="row no-gutters justify-content-center my-2"
    >
      <NoticiaDeck :noticias="linha" />
    </div>
  </div>
</template>

<style scoped>
.list-group {
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 0.5rem;
}

.list-group-item {
  margin: 0.2rem 0.5rem;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.5rem;
  color: var(--accent);
}
</style>

<script>
import NoticiaDeck from "@/components/NoticiaDeck.vue";
import axios from "axios";

export default {
  asyncData({ params }) {
    axios.defaults.headers.post["Content-Type"] =
      "application/x-www-form-urlencoded";
    return axios
      .get(process.env.baseURL + `/noticias?_sort=data_publicacao:DESC`)
      .then((res) => {
        return { noticias: res.data };
      });
  },
  components: {
    NoticiaDeck,
  },
  head() {
    return {
      title: "Notícias",
    };
  },
};
</script>
