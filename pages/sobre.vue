<template>
  <div class="container-fluid min-75 mb-4">
    <div class="row no-gutters align-items-center page-title">
      <div class="col">
        <h1 class="text-center">Diretoria</h1>
      </div>
    </div>

    <div class="container mt-3">
      <DynamicZone
        v-for="content in sobre_diretoria.conteudo"
        :key="content.id"
        :content="content"
        class="my-3"
      />

      <div class="row no-gutters mt-2">
        <div class="col">
          <h1 class="intro-title">Objetivos</h1>
          <div v-html="$md.render(sobre_diretoria.objetivos)"></div>
        </div>
      </div>

      <h1 class="intro-title">Pessoas</h1>
      <div
        class="row no-gutters justify-content-around align-items-center mt-4"
      >
        <div
          class="col-sm-12 col-md-8 col-lg-5 my-3"
          v-for="pessoa in gestoes[0].pessoas"
          :key="pessoa.id"
        >
          <PessoaCard
            :id="pessoa.id"
            :foto="getImgUrl(pessoa.foto)"
            :cargo="pessoa.cargo"
            :nome="pessoa.nome"
            :facebookLink="pessoa.facebookLink"
            :petLink="pessoa.petLink"
            :universidadeCampus="pessoa.universidadeCampus"
            :email="pessoa.email"
            :nomePet="pessoa.nomePet"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.intro-title {
  color: var(--accent);
  margin: 2rem 0 1rem 0;
  letter-spacing: 2px;
  font-weight: 600;
  text-align: center;
}
</style>

<script>
import DynamicZone from "@/components/DynamicZone.vue";
import PessoaCard from "@/components/PessoaCard.vue";
import axios from "axios";

export default {
  data() {
    return {
      sobre_diretoria: {},
      gestoes: [],
    };
  },

  components: {
    DynamicZone,
    PessoaCard,
  },

  methods: {
    head() {
      return {
        title: "Sobre a Diretoria",
      };
    },
    getImgUrl: function (image) {
      if (image && image.formats) {
        if (image.formats.small) {
          return process.env.baseURL + image.formats.small.url;
        } else {
          return process.env.baseURL + image.formats.thumbnail.url;
        }
      } else {
        return require("~/assets/images/logo_escuro.png");
      }
    },
  },
  async asyncData({ params }) {
    const sobre_diretoria = await axios.get(
      process.env.baseURL + "/sobre-diretoria"
    );
    const gestoes = await axios.get(
      process.env.baseURL + "/gestoes?_sort=anoInicio:DESC"
    );
    return {
      sobre_diretoria: sobre_diretoria.data,
      gestoes: gestoes.data,
    };
  },
};
</script>