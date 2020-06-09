<template>
  <div class="container-fluid">
      <div class="row" no-gutters>
        <div class="col">
          <h1 class="page-title">Gestões</h1>
        </div>
      </div>

       <div class="row ano">
                <h2>2018 - 2020</h2>
        </div>
  <div class="container">
        <div class="row">
          <div class="col-lg-6 justify-content-center">
              <pessoa-card></pessoa-card>
          </div>
          <div class="col-lg-6">
              <pessoa-card></pessoa-card>
          </div>
        </div>
  </div>
    </div>
</template>

<script>
import PessoaCard from "@/components/PessoaCard.vue";
 export default {
     components:{
        'pessoa-card': PessoaCard
     }
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