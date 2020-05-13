<template>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand to="/">
      <img src="@/assets/images/logo_claro.png" class="nav-image" />
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item-dropdown text="CENAPET" left>
          <b-dropdown-item href="#">Sobre a diretoria</b-dropdown-item>
          <b-dropdown-item href="#">Gestões</b-dropdown-item>
          <b-dropdown-item href="#">Conselho</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown text="DOCUMENTOS" left>
          <b-dropdown-item href="#">Cartas</b-dropdown-item>
          <b-dropdown-item href="#">Comissão Executiva</b-dropdown-item>
          <b-dropdown-item href="#">Conselho</b-dropdown-item>
          <b-dropdown-item href="#">SESu/MEC</b-dropdown-item>
          <b-dropdown-item href="#">Outros</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown text="PET" left>
          <b-dropdown-item href="#">Grupos</b-dropdown-item>
          <b-dropdown-item href="#">Orientações gerais</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown text="EVENTOS" left>
          <b-dropdown-item href="#">Anais</b-dropdown-item>
          <b-dropdown-item href="#">Histórico</b-dropdown-item>
          <b-dropdown-item href="#">Organização</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item href="#">FORMULÁRIOS</b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
        <b-col sm="6" lg="12">
          <b-input-group>
            <b-form-input placeholder="Pesquisar" aria-label="Pesquisar no site"></b-form-input>
            <b-input-group-append>
              <b-button type="submit">
                <font-awesome-icon :icon="['fas', 'search']" />
              </b-button>
            </b-input-group-append>
          </b-input-group>
        </b-col>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<style>
.navbar .navbar-dark .navbar-expand-lg {
  padding: 0.5rem 0.5rem;
}
.nav-image {
  max-height: 2.5rem;
}
.navbar-dark .navbar-nav .nav-item {
  padding: 0 0.5rem;
  margin: 0 0.7rem;
  letter-spacing: 1px;
}
.navbar-dark .navbar-nav .nav-link {
  color: var(--text-light1);
}
.navbar-dark .navbar-nav .dropdown-menu {
  min-width: 15rem;
  background-color: var(--theme-dark);
  padding-bottom: 0;
  border: none;
  border-radius: 0;
}
.navbar-dark .navbar-nav .dropdown-item {
  padding-top: 0.6rem;
  padding-bottom: 0.6rem;
  color: var(--text-light1);
}
.navbar-dark .navbar-nav .dropdown-item:hover {
  background-color: var(--highlight-dark);
  color: var(--text-light1);
}
.navbar-dark .navbar-nav .dropdown-header {
  color: var(--text-grey);
}
.navbar-dark .navbar-nav .dropdown-divider {
  border-color: var(--border-dark);
}
.navbar-nav .input-group input {
  border: none;
  box-shadow: none;
}
.navbar-nav .input-group .btn {
  background-color: transparent;
  border: none;
  box-shadow: none;
}
@media (max-width: 991px) {
  .navbar-dark .navbar-nav .dropdown-menu {
    border: 1px solid var(--border-dark);
    border-radius: 0.5rem;
    padding-bottom: 0.5rem;
  }
  .navbar-dark .navbar-nav .form-inline {
    margin-top: 0.3rem;
    flex-flow: unset;
  }
  .navbar-dark .navbar-nav .form-inline .form-control {
    margin-right: 0.5rem;
  }
}
</style>
