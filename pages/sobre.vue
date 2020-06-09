<template>
  <div class="container-fluid">
      <div class="row" no-gutters>
        <div class="col">
          <h1 class="page-title">Sobre a diretoria</h1>
        </div>
      </div>

    <div class="container intro">
      <p class="intro-text">
        A CENAPET foi fundada em 2006 durante a realização do ENAPET de Florianópolis, 
        quando foram aprovados seu estatuto e regimento. A Diretoria eleita foi presidida pelo Prof. Dante Barone.
        No entanto, antes deste período, existia informalmente um grupo de pessoas, 
        tutores e alunos reunidos sob uma Executiva Nacional, que foi se formando nos anos de luta contra a extinção do PET,
        desde 1998. Parte deste grupo compôs a CNAA, Comissão Nacional de Acompanhamento e Avaliação, no MEC-SESu, em 2002, 
        que recuperou o processo de avaliação, revisão do MANUAL DE ORIENTAÇÕES BÁSICAS, etc.
      </p>
      <h1 class="intro-title">Objetivos da diretoria</h1>
      <p class="intro-text">
        (Insira aqui planos e objetivos que a diretoria tem para o ano atual / futuro)
      </p>
        <h1 class="intro-title">Pessoas</h1>
        <div class="row">
            <div class="col-lg justify-content-center">
                <pessoa-card></pessoa-card>
            </div>
            <div class="col-lg">
                <pessoa-card></pessoa-card>
            </div>
        </div>
        
        <div class="row">
            <div class="col-lg">
                <pessoa-card></pessoa-card>
            </div>
            <div class="col-lg">
                <pessoa-card></pessoa-card>
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
 export default {
     components:{
        'pessoa-card': PessoaCard
     }
    };
</script>