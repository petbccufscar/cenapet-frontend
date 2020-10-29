<template>
    <div class="container-fluid min-75 mb-4">
    <div class = "row no-gutters align-items-center page-title">
      <div class = "col">
    <h1 class = "text-center">Erro 502 : Bad Gateway</h1>
  </div>
  </div>
  <div class="container mt-3 p-4">
    <h5 class = "mb-4"> O servidor encontrou um erro temporário e não pôde completar sua solicitação. </h5>
    <nuxt-link to="/">Voltar para home</nuxt-link>
  </div>
  </div>
</template><script>
export default {
  name: 'error-500',
  props: {
    error: {
      type: Object,
      default: () => {},
    },
  },
};
</script>