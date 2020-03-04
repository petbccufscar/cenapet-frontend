<template>
  <footer class="container-fluid footer-dark">
    <div class="text-center footer-text">
      <p>Comissão Executiva Nacional</p>
      <p>Programa de Educação Tutorial</p>
    </div>
    <div class="text-center footer-icons">
      <a :href="`mailto:cenapet@gmail.com`">
        <font-awesome-icon :icon="['fas', 'envelope']" />
      </a>

      <a :href="'//' + 'fb.com/ComissaoExecutivadoPET'" target="_blank">
        <font-awesome-icon :icon="['fab', 'facebook-f']" />
      </a>
    </div>
    <div class="text-center footer-end">
      <p>Gestão 2018-2020</p>
      <p>Todos os direitos reservados</p>
    </div>
  </footer>
</template>

<style scoped>
.footer-dark {
  background-color: var(--footer-dark);
  color: var(--text-light2);
}
.footer-text {
  padding-top: 1rem;
}
.footer-text p {
  letter-spacing: 2px;
  margin: 0;
  font-size: 1rem;
}
.footer-icons {
  border-bottom: 1px solid var(--border-dark);
}
.footer-icons a {
  color: var(--text-light2);
}
.footer-icons a:hover {
  color: var(--accent);
}
.footer-icons svg {
  margin: 1rem 1rem;
  font-size: 1.5rem;
}
.footer-end {
  padding: 1rem 0;
}
.footer-end p {
  margin: 0;
  font-size: 0.9rem;
  letter-spacing: 1px;
  color: var(--footer-text-dark);
}
</style>