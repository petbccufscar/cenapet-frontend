<template>
  <div class="container-fluid">
        <div class="row" no-gutters>
            <div class="col ">
                <h1 class="page-title">Conselho</h1>
            </div>
        </div>
    
    
        <div class="row">
            <div class="col justify-content-center">
                <h2 class='subtitulo'>Representantes 2017 - 2019</h2>
            </div>
        </div>
        <div class="container">
            <div class="row regiao justify-content-left">
                Região Sudeste
            </div>
        </div>
        <div class="container juystify-content-center">
            <div class="row">
                <div class="col-lg-6">
                    <pessoa-card></pessoa-card>
                </div>
                <div class="col-lg-6">
                    <pessoa-card></pessoa-card>
                </div>
            </div>
        </div>
    </div>
</template>


<style>
.subtitulo {
    color: var(--accent);
    margin:2px auto;
    letter-spacing: 2px;
    text-align:center;
    font-weight:bold;
    justify-content: center;
    
}

.page-title {
  height: 6rem;
  width: 100%;
  background-color: var(--footer-dark);
  color: var(--text-accent);
  text-align: center;
  padding: 15px;
  font-size: 3.5rem;
}
.page-title h1 {
  font-size: 3rem;
}

.regiao{
   font-size:2rem;
   margin:10px auto;
   width:100%;
   color:var(--text-grey-darker);
   font-weight:bold; 
}
</style>

<script>
import PessoaCard from "@/components/PessoaCard.vue";
 export default {
     components:{
        'pessoa-card': PessoaCard
     }
    };
</script>