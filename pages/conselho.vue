<template>
  <div class="container-fluid min-75 mb-4">
    <div class="row no-gutters align-items-center page-title">
      <div class="col">
        <h1 class="text-center">Conselhos</h1>
      </div>
    </div>

     <div class="container dropdown">
        <div class="accordion mt-4" id="accordion">
          <div v-for="(conselho, index) in conselhos" :key="conselho.id">
            <div class="bloco">
              <h5 class="mb-0">
                <button
                  class="btn btn-link"
                  data-toggle="collapse"
                  :data-target="'#Collapse' + conselho.id"
                  aria-expanded="true"
                  :aria-controls="conselho.id"
                >
                <div class="row dropdown">
                  <h2 class="seta">
                  <font-awesome-icon class="mr-2 seta" :icon="['fas', 'chevron-right']" />
                  </h2>
                  
                  <h2 class="ano">
                    
                    {{conselho.anoInicio}} - {{conselho.anoTermino}}
                  </h2>
                </div>
                  
                </button>
                <div class="linha"></div>
              </h5>
            </div>
          <div
            :id="'Collapse' + conselho.id"
            class="collapse"
            :class="{ 'show': index === 0 }"
            :aria-labelledby="headingOne"
            data-parent="#accordion"
          >
        <div class="row content">
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
    </div>
  </div>
  </div>
</template>

<style>
*{
  text-transform:none !important;
  text-decoration:none !important;
}
.ano {
  color: var(--accent);
  letter-spacing: 2px;
  text-align: center;

}
.content{
  display:flex;
  justify-content:center;
  align-items:center;
  text-decoration: none;
  margin-bottom:30px;
  
}

.bloco{
  margin-left: 2rem;
  margin-bottom:26px;
}

.linha{
  border-bottom:1px solid var(--accent);
}

.dropdown
.btn-link.collapsed{
  display:flex;
  justify-content: center;
  text-align:left;
  position:relative;  

}

.seta{
  color: var(--accent);
  letter-spacing: 2px;
  text-align: center;
  margin-right:15px;
  
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
