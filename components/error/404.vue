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
      <h5 class="mb-4">
        O link para a página selecionada pode estar quebrado ou a página não
        existe.
      </h5>
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