<template>
  <div class="container-fluid min-75 mb-4">
    <div class="row no-gutters align-items-center page-title">
      <div class="col">
        <h1 class="text-center">Erro 404</h1>
      </div>
    </div>
    <div class="container text-center mt-3 p-4">
      <h4 class="mb-5">Página não encontrada!</h4>
      <font-awesome-icon class="fa-6x mb-5" :icon="['far', 'frown-open']" />
      <h5>
        Esta página não existe ou ainda não foi publicada.
      </h5>
      <h6 class="mb-4">
        Caso acredite que isto seja um erro, envie um email para
        <a href="mailto:petbcc@ufscar.br">petbcc@ufscar.br</a> relatando o
        problema.
      </h6>
      <nuxt-link to="/">Voltar para a página inicial</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "error-404",
  props: {
    error: {
      type: Object,
      default: () => {},
    },
  },
};
</script>