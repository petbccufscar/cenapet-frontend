<template>
  <b-container fluid>
    <b-row no-gutters class="page-title" align-content="center">
      <b-col>
        <h1 class="text-center">Notícias</h1>
      </b-col>
    </b-row>
    <b-row no-gutters class="justify-content-around mt-3">
      <b-col sm="12" md="8" lg="6">
        <NoticiaCard
          v-for="noticia in noticias"
          v-bind:key="noticia.id"
          :id="noticia.id"
          :img="getImgUrl(noticia.img_fundo)"
          :titulo="noticia.titulo"
          :conteudo="noticia.conteudo"
          :data_publicacao="noticia.data_publicacao"
        />
      </b-col>
      <b-col sm="12" md="4" lg="4">
        <h4 class="text-right">Assuntos populares</h4>
        <b-list-group>
          <b-list-group-item>(10) Cras justo odio</b-list-group-item>
          <b-list-group-item>(8) Dapibus ac facilisis in</b-list-group-item>
          <b-list-group-item>(5) Morbi leo risus</b-list-group-item>
          <b-list-group-item>(4) Porta ac consectetur ac</b-list-group-item>
          <b-list-group-item>(1) Vestibulum at eros</b-list-group-item>
        </b-list-group>
      </b-col>
    </b-row>
  </b-container>
</template>

<style scoped>
.page-title {
  height: 6rem;
  width: 100%;
  background-color: var(--footer-dark);
  color: var(--text-accent);
}
.page-title h1 {
  font-size: 3rem;
  margin: 0;
}
.list-group {
  padding: 1rem;
  border: 1px solid #dddddd;
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
import noticiasQuery from "~/apollo/queries/noticia/noticias";

export default {
  data() {
    return {
      noticias: []
    };
  },
  components: {
    NoticiaCard
  },
  methods: {
    getImgUrl(img) {
      return img
        ? process.env.baseURL + img.url
        : require("~/assets/images/logo_escuro.png");
    }
  },
  apollo: {
    noticias: {
      prefetch: true,
      query: noticiasQuery,
      variables() {
        return { id: parseInt(this.$route.params.id) };
      }
    }
  }
};
</script>
