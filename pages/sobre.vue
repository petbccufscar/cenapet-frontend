<template>
  <div class="container-fluid">
      <div class="row" no-gutters>
        <div class="col">
          <h1 class="page-title">Sobre a diretoria</h1>
        </div>
      </div>

    <div class="container intro">
    <p class="intro-text" v-html="$md.render(texto1.sobre)"/> 
      
      <h1 class="intro-title">Objetivos da diretoria</h1>
      <p class="intro-text">
      <p class="intro-text" v-html="$md.render(texto1.objetivos)"/>
        <h1 class="intro-title ">Pessoas</h1>
        <div class="row">
            <div class="col-lg-6" v-for="pessoa in gestoes[0].pessoas" :key="pessoa.id">
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
.page-title {
  height: 6rem;
  width: 100%;
  background-color: var(--footer-dark);
  color: var(--text-accent);
  text-align: center;
  padding: 15px;
  font-size: 3.5rem;
}
.intro{
    margin-top: 1rem;
    text-align: center;
}
.page-title h1 {
  font-size: 3rem;
  margin: 0;
}

.intro-title {
  color: var(--accent);
  margin: 2rem 0 1rem 0;
  letter-spacing: 2px;
  font-weight: 600;
}
.intro-text {
  font-size: 1.3rem;
  letter-spacing: 1px;
  line-height: 2rem;

}
</style>

<script>  
import PessoaCard from "@/components/PessoaCard.vue";
import axios from 'axios'


 export default {
    data() {
        return {
        pessoa: [],
        texto1: [],
        gestoes:[], 
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
      const texto1 = await axios.get(process.env.baseURL + '/sobre-diretoria')
      const gestoes = await axios.get(process.env.baseURL + '/gestoes?_sort=anoInicio:DESC');
      return { pessoas: pessoas.data, texto1: texto1.data, gestoes: gestoes.data}; 
    },
};


</script>