<template>
  <div class="container-fluid min-75 mb-4">
    <div class="row no-gutters align-items-center page-title">
      <div class="col">
        <h1 class="text-center">Gestões</h1>
      </div>
    </div>

    <div class="container">
      <div class="row no-gutters justify-content-around align-items-center" v-for="gestao in gestoes" :key="gestao.id">
        <div class="col-12 my-4 ano">
          <h2>{{gestao.anoInicio}} - {{gestao.anoTermino}}</h2>
        </div>
        <div
          class="col-sm-12 col-md-8 col-lg-5 my-3"
          v-for="pessoa in gestao.pessoas"
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
.ano {
  color: var(--accent);
  letter-spacing: 2px;
  text-align: center;
}
</style>

<script>
import PessoaCard from "@/components/PessoaCard.vue";
import axios from "axios";

export default {
  data() {
    return {
      gestoes: [],
    };
  },
  head() {
      return {
        title: "Gestões",
      }
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
    const gestoes = await axios.get(
      process.env.baseURL + "/gestoes?_sort=anoInicio:DESC"
    );
    return { gestoes: gestoes.data };
  },
};
</script>
