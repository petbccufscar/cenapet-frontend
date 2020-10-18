<template>
  <div class="container-fluid min-75 mb-4">
    <div class="row no-gutters align-items-center page-title">
      <div class="col">
        <h1 class="text-center">Notícias</h1>
      </div>
    </div>
    <div class="row no-gutters justify-content-around mt-3">
      <div class ="col-sm-12 col-md-8 col-lg-6">
        <div class="row no-gutters justify-content-center">
          <NoticiaCard
            v-for="noticia in noticias"
            v-bind:key="noticia.id"
            :id="noticia.id"
            :img="getImgUrl(noticia.img_fundo)"
            :titulo="noticia.titulo"
            :conteudo="noticia.conteudo"
            :data_publicacao="noticia.data_publicacao"
          />
        </div>
      </div>
      <div class="col-sm-12 col-md-4 col-lg-4">
        <h4 class="text-right">Assuntos populares</h4>
        <ul class="list-group">
          <li class="list-group-item">(10) Cras justo odio</li>
          <li class="list-group-item">(8) Dapibus ac facilisis in</li>
          <li class="list-group-item">(5) Morbi leo risus</li>
          <li class="list-group-item">(4) Porta ac consectetur ac</li>
          <li class="list-group-item">(1) Vestibulum at eros</li>
        </ul>
      </div>
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
import NoticiaCard from "@/components/NoticiaCard.vue";
import axios from 'axios'

export default {
  asyncData ({ params }) {
    axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
    return axios.get(process.env.baseURL + `/noticias?_sort=data_publicacao:DESC`)
      .then((res) => {
        return { noticias: res.data }
      })
  },
  components: {
    NoticiaCard
  },
  head() {
      return {
        title: "Notícias",
      }
  },
  methods: {
    getImgUrl(img) {
      return img
        ? process.env.baseURL + img.formats.small.url
        : require("~/assets/images/logo_escuro.png");
    }
  }
};
</script>
