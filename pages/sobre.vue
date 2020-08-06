<template>
  <div class="container-fluid min-70 mb-4">
    <div class="row no-gutters align-items-center page-title">
      <div class="col">
        <h1 class="text-center">Diretoria</h1>
      </div>
    </div>

    <div class="container">
      <div class="row no-gutters mt-3">
        <div class="col">
          <div v-html="$md.render(texto1.sobre)"></div>
        </div>
      </div>

      <div class="row no-gutters mt-2">
        <div class="col">
          <h1 class="intro-title">Objetivos</h1>
          <div v-html="$md.render(texto1.objetivos)"></div>
        </div>
      </div>

      <h1 class="intro-title">Pessoas</h1>
      <div class="row no-gutters justify-content-around align-items-center mt-4">
        <div
          class="col-sm-12 col-md-8 col-lg-5 my-3"
          v-for="pessoa in gestoes[0].pessoas"
          :key="pessoa.id"
        >
          <pessoa-card
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
import PessoaCard from "@/components/PessoaCard.vue";
import axios from "axios";

export default {
  data() {
    return {
      texto1: [],
      gestoes: [],
    };
  },

  components: {
    "pessoa-card": PessoaCard,
  },

  methods: {
    getImgUrl: function (img) {
      return img
        ? process.env.baseURL + img.url
        : require("~/assets/images/logo_escuro.png");
    },
  },
  async asyncData({ params }) {
    const texto1 = await axios.get(process.env.baseURL + "/sobre-diretoria");
    const gestoes = await axios.get(
      process.env.baseURL + "/gestoes?_sort=anoInicio:DESC"
    );
    return {
      texto1: texto1.data,
      gestoes: gestoes.data,
    };
  },
};
</script>