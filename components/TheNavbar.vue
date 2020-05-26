<template>
  <nav class="navbar navbar-dark bg-dark navbar-expand-lg">
    <nuxt-link to="/" class="navbar-brand">
      <img src="@/assets/images/logo_claro.png" class="nav-image" />
    </nuxt-link>
    <button
      type="button"
      aria-label="Toggle navigation"
      aria-controls="nav-collapse"
      aria-expanded="false"
      data-toggle="collapse"
      data-target="#nav-collapse"
      class="navbar-toggler"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div id="nav-collapse" class="navbar-collapse collapse">
      <ul class="navbar-nav">
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >CENAPET</a>
          <div class="dropdown-menu" aria-labelledby="Menu cenapet">
            <a class="dropdown-item" href="#">Sobre a diretoria</a>
            <a class="dropdown-item" href="#">Gestões</a>
            <a class="dropdown-item" href="#">Conselho</a>
          </div>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >DOCUMENTOS</a>
          <div class="dropdown-menu" aria-labelledby="Menu documentos">
            <a class="dropdown-item" href="#">Cartas</a>
            <a class="dropdown-item" href="#">Comissão Executiva</a>
            <a class="dropdown-item" href="#">Conselho</a>
            <a class="dropdown-item" href="#">SESu/MEC</a>
            <a class="dropdown-item" href="#">Outros</a>
          </div>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >PET</a>
          <div class="dropdown-menu" aria-labelledby="Menu PET">
            <a class="dropdown-item" href="#">Grupos</a>
            <a class="dropdown-item" href="#">Orientações gerais</a>
          </div>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >EVENTOS</a>
          <div class="dropdown-menu" aria-labelledby="Menu cenapet">
            <a class="dropdown-item" href="#">Anais</a>
            <a class="dropdown-item" href="#">Histórico</a>
            <a class="dropdown-item" href="#">Organização</a>
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">FORMULÁRIOS</a>
        </li>
      </ul>
      <ul class="navbar-nav ml-auto">
        <div class="col-sm-6 col-lg-12">
          <div role="group" class="input-group">
            <input
              type="text"
              placeholder="Pesquisar"
              class="form-control"
              aria-label="Pesquisar no site"
            />
            <div class="input-group-append">
              <button type="submit" class="btn btn-secondary">
                <font-awesome-icon :icon="['fas', 'search']" />
              </button>
            </div>
          </div>
        </div>
      </ul>
    </div>
  </nav>
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
  cursor: pointer;
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
