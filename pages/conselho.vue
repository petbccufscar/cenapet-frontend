<template>
  <div class="container-fluid">
    <div class="row no-gutters page-title">
      <div class="col">
        <h1 class="text-center">Conselhos</h1>
      </div>
    </div>

    <div class="container">
      <div
        class="row no-gutters justify-content-around align-items-center"
        v-for="conselho in conselhos"
        :key="conselho.id"
      >
        <div class="col-12 my-4 ano">
          <h2>{{conselho.anoInicio}} - {{conselho.anoTermino}}</h2>
        </div>
        <div
          class="col-sm-12 col-md-8 col-lg-5 my-3"
          v-for="pessoa in conselho.pessoas"
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
      conselho: [],
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
    const conselhos = await axios.get(
      process.env.baseURL + "/conselhos?_sort=anoInicio:DESC"
    );
    return { conselhos: conselhos.data };
  },
};
</script>
