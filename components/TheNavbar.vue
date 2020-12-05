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

        <!-- MENU CENAPET -->
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            @click="hideSubmenus"
            >CENAPET</a
          >
          <div class="dropdown-menu" aria-labelledby="Menu cenapet">
            <nuxt-link class="dropdown-item" to="/sobre">Quem somos</nuxt-link>
            <nuxt-link class="dropdown-item" to="/estatuto">Estatuto</nuxt-link>

            <!-- SUBMENU AÇÕES -->
            <div class="dropdown-submenu">
              <a
                class="dropdown-item dropdown-toggle"
                @click.stop.prevent="showSubmenu"
                >Ações</a
              >
              <div class="dropdown-menu">
                <nuxt-link class="dropdown-item" to="/reunioes">Reuniões</nuxt-link>
                <nuxt-link class="dropdown-item" to="/docs-cartas">Cartas e comunicados</nuxt-link>
              </div>
            </div>

            <!-- SUBMENU DIRETORIA-->
            <div class="dropdown-submenu">
              <a
                class="dropdown-item dropdown-toggle"
                @click.stop.prevent="showSubmenu"
                >Diretoria</a
              >
              <div class="dropdown-menu">
                <nuxt-link class="dropdown-item" to="/sobre">Todas as gestões</nuxt-link>
                <nuxt-link class="dropdown-item" to="/relatorios-gestoes">Relatórios da gestão</nuxt-link>
              </div>
            </div>

            <!--SUBMENU CONSELHO -->
            <div class="dropdown-submenu">
              <a
                class="dropdown-item dropdown-toggle"
                @click.stop.prevent="showSubmenu">Conselho</a>
              <div class="dropdown-menu">
                <nuxt-link class="dropdown-item" to="/conselho">Todos os conselhos</nuxt-link>
            <nuxt-link class="dropdown-item" to="/docs-conselho">Documentos</nuxt-link>
                <nuxt-link class="dropdown-item" to="/relatorios-conselho">Relatórios</nuxt-link>
              </div>
            </div>
            <nuxt-link class="dropdown-item" to="/anuidade">Anuidade</nuxt-link>
          </div>
        </li>

        <!-- MENU DOCUMENTOS -->
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            >DOCUMENTOS</a
          >
          <div class="dropdown-menu" aria-labelledby="Menu documentos">
            <nuxt-link class="dropdown-item" to="/orientacoes">Orientações gerais</nuxt-link>
            <nuxt-link class="dropdown-item" to="/docs-sesu">SESu/MEC</nuxt-link>
            <nuxt-link class="dropdown-item" to="/docs-outros">Outros</nuxt-link>
          </div>
        </li>

        <!-- MENU PET -->
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            @click="hideSubmenus"
            >PET</a
          >
          <div class="dropdown-menu" aria-labelledby="Menu PET">
            <nuxt-link class="dropdown-item" to="/sobre-pet">O que é</nuxt-link>
            <nuxt-link class="dropdown-item" to="/pets">Grupos</nuxt-link>
            <nuxt-link class="dropdown-item" to="/mapa">Mapa</nuxt-link>

            <!--SUBMENU COMISSÕES NACIONAIS -->
            <div class="dropdown-submenu">
              <a
                class="dropdown-item dropdown-toggle"
                @click.stop.prevent="showSubmenu"
                >Comissões Nacionais</a
              >
              <div class="dropdown-menu">
                <nuxt-link class="dropdown-item" to="/diversificapet">DiversificaPET</nuxt-link>
                <nuxt-link class="dropdown-item" to="/divulgapet">DivulgaPET</nuxt-link>
                <nuxt-link class="dropdown-item" to="/mobilizapet">MobilizaPET</nuxt-link>
              </div>
            </div>
          </div>
        </li>

        <!-- MENU EVENTOS -->
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            @click="hideSubmenus"
            >EVENTOS</a
          >
          <div class="dropdown-menu" aria-labelledby="Menu eventos">
            <nuxt-link class="dropdown-item" to="/org-eventos">Diretrizes</nuxt-link>
            <nuxt-link class="dropdown-item" to="/enapet">Nacional</nuxt-link>

            <!-- SUBMENU EVENTOS REGIONAIS -->
            <div class="dropdown-submenu">
              <a
                class="dropdown-item dropdown-toggle"
                @click.stop.prevent="showSubmenu"
                >Regionais</a
              >
              <div class="dropdown-menu">
                <nuxt-link class="dropdown-item" to="/econpet">ECONPET</nuxt-link>
                <nuxt-link class="dropdown-item" to="/ecopet">ECOPET</nuxt-link>
                <nuxt-link class="dropdown-item" to="/nortepet">NORTEPET</nuxt-link>
                <nuxt-link class="dropdown-item" to="/sudestepet">SUDESTEPET</nuxt-link>
                <nuxt-link class="dropdown-item" to="/enepet">ENEPET</nuxt-link>
                <nuxt-link class="dropdown-item" to="/sulpet">SULPET</nuxt-link>
              </div>
            </div>
          </div>
        </li>

        <!-- MENU FORMULÁRIO -->
        <li class="nav-item">
          <nuxt-link class="nav-link" to="/cadastro">CADASTRO</nuxt-link>
        </li>

        <!-- MENU CONTATO -->
        <li class="nav-item">
          <nuxt-link class="nav-link" to="/contato">CONTATO</nuxt-link>
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

<script>
export default {
  methods: {
    showSubmenu(event) {
      const submenu = event.target.nextElementSibling;
      const parentDropdown = event.target;
      const rootDropdown = submenu.parentElement.parentElement;

      if (submenu.classList.contains("show")) {
        parentDropdown.classList.remove("dropdown-submenu-active");
        submenu.classList.remove("show");

      } else {

        const anotherActiveSubMenu = rootDropdown.querySelector(".show");
        if (anotherActiveSubMenu) {
          rootDropdown
            .querySelector(".dropdown-submenu-active")
            .classList.remove("dropdown-submenu-active");
          anotherActiveSubMenu.classList.remove("show");
        }

        parentDropdown.classList.add("dropdown-submenu-active");
        submenu.classList.add("show");
      }
    },
    hideSubmenus(event) {
      const dropdown = event.target.nextElementSibling;
      const someActiveSubMenu = dropdown.querySelector(".show");

      if (someActiveSubMenu) {
        dropdown
          .querySelector(".dropdown-submenu-active")
          .classList.remove("dropdown-submenu-active");
        someActiveSubMenu.classList.remove("show");
      }
    },
  },
};
</script>

<style scoped>
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
  background-color: var(--theme-dark);
  min-width: 15rem;
  margin-top: 0.8rem;
  padding-top: 0;
  padding-bottom: 0;
  border: none;
  border-radius: 0;
}

.navbar-dark .navbar-nav .dropdown-item {
  padding-top: 0.6rem;
  padding-bottom: 0.6rem;
  color: var(--text-light1);
}

.navbar-dark .navbar-nav .dropdown-item:hover,
.navbar-dark .navbar-nav .dropdown-item:focus,
.navbar-dark .navbar-nav .dropdown-submenu-active {
  background-color: var(--highlight-dark);
  color: var(--text-light1);
}

.navbar-dark .navbar-nav .dropdown-header {
  color: var(--text-grey);
}

.navbar-dark .navbar-nav .dropdown-divider {
  border-color: var(--border-dark);
}

.navbar-dark .navbar-nav .dropdown-submenu {
  position: relative;
}

.navbar-dark .navbar-nav .dropdown-submenu a::after {
  transform: rotate(-90deg);
  float: right;
  margin-top: 0.6rem;
}

.navbar-dark .navbar-nav .dropdown-submenu .dropdown-menu {
  left: 100%;
  top: 0;
  margin: 0;
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

  .navbar-dark .navbar-nav .dropdown-submenu .dropdown-menu {
    border: none;
    border-radius: 0;
    padding: 0 1rem;
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
