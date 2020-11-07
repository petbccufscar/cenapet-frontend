<template>
    <div class="container-fluid min-75 mb-4">
    <div class = "row no-gutters align-items-center page-title">
      <div class = "col">
    <h1 class = "text-center">Erro 404 : Esta página não existe</h1>
  </div>
  </div>
  <div class="container mt-3 p-4">
    <h5 class = "mb-4">O link para a página selecionada pode estar quebrado ou a página não existe</h5>
    <nuxt-link to="/">Voltar para home</nuxt-link>
  </div>
  </div>
</template><script>
export default {
  name: 'error-404',
  props: {
    error: {
      type: Object,
      default: () => {},
    },
  },
};
</script>