<template>
  <div class="container-fluid min-75 mb-4">
    <div class="row no-gutters align-items-center page-title">
      <div class="col">
        <h1 class="text-center">Erro 500</h1>
      </div>
    </div>
    <div class="container text-center mt-3 p-4">
      <h4 class="mb-5">O servidor encontrou um erro interno!</h4>
      <font-awesome-icon class="fa-6x mb-5" :icon="['far', 'sad-cry']" />
      <h6 class="mb-4">
        Caso este problema persista, envie um email para
        <a href="mailto:petbcc@ufscar.br">petbcc@ufscar.br</a> relatando o
        erro.
      </h6>
      <nuxt-link to="/">Voltar para a página inicial</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "error-500",
  props: {
    error: {
      type: Object,
      default: () => {},
    },
  },
};
</script>