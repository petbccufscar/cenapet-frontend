<template>
  <div class="container-fluid">
      <div class="row" no-gutters>
          <h1 class="page-title"> Gestões </h1>
      </div>
      
      <div class="container">
        <div class="row ano" v-for="gestao in gestoes" :key="gestao.id">
                <div class="col-12 my-4">
                  <h2>{{gestao.anoInicio}} - {{gestao.anoTermino}}</h2>
                </div>
                <div class="col-lg-6" v-for="pessoa in gestao.pessoas" :key="pessoa.id">
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

<script>  
import PessoaCard from "@/components/PessoaCard.vue";
import axios from 'axios'


 export default {
    data() {
        return {
        pessoa: [],
        gestoes: []  
        };
    },

    components:{
        'pessoa-card': PessoaCard
    },

   methods: {
        getImgUrl: function(img) {
            return img
            ? process.env.baseURL + img.url
            : require("~/assets/images/logo_escuro.png");
        }
    },
    async asyncData({ params }) {
      const pessoas = await axios.get(process.env.baseURL + '/pessoas')
      const gestoes = await axios.get(process.env.baseURL + '/gestoes?_sort=anoInicio:DESC');
      return { pessoas: pessoas.data, gestoes: gestoes.data}; 
    },
};


</script>


<style>

.page-title {
  height: 6rem;
  width: 100%;
  background-color: var(--footer-dark);
  color: var(--text-accent);
  text-align: center;
  padding: 15px;
  font-size: 3.5rem;
}

.ano{
    color: var(--accent);
    margin:2px auto;
    letter-spacing: 2px;
    text-align:center;
    font-weight:bold;
    justify-content: center;
}


</style>