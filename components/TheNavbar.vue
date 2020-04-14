<template>
  <b-navbar toggleable="xl" type="dark" variant="dark">
    <b-navbar-brand href="#">
      <nuxt-link to="/">
        <img src="@/assets/images/logo_claro.png" class="nav-image" />
      </nuxt-link>
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item-dropdown text="CENAPET" left>
          <b-dropdown-item href="#">Sobre nós</b-dropdown-item>
          <b-dropdown-item href="#">Gestões</b-dropdown-item>
          <b-dropdown-item href="#">Cartas</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown text="DOCUMENTOS" left>
          <b-dropdown-item href="#">CENAPET</b-dropdown-item>
          <b-dropdown-item href="#">Diretoria</b-dropdown-item>
          <b-dropdown-item href="#">Conselho</b-dropdown-item>
          <b-dropdown-item href="#">PET-MEC</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown text="EVENTOS" left>
          <b-dropdown-item href="#">Anais</b-dropdown-item>
          <b-dropdown-group id="dropdown-group-nacional" header="Nacional">
            <b-dropdown-item-button>ENAPET</b-dropdown-item-button>
          </b-dropdown-group>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-group id="dropdown-group-regionais" header="Regionais">
            <b-dropdown-item-button>ECOPET</b-dropdown-item-button>
            <b-dropdown-item-button>NORTEPET</b-dropdown-item-button>
            <b-dropdown-item-button>SUDESTEPET</b-dropdown-item-button>
            <b-dropdown-item-button>ENEPET</b-dropdown-item-button>
            <b-dropdown-item-button>SULPET</b-dropdown-item-button>
          </b-dropdown-group>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown text="OUTROS" left>
          <b-dropdown-item href="#">SIGPET</b-dropdown-item>
          <b-dropdown-item href="#">Formulários</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input
            size="sm"
            class="mr-sm-2"
            placeholder="Buscar"
          ></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">
            <font-awesome-icon :icon="['fas', 'search']" />
          </b-button>
        </b-nav-form>
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
