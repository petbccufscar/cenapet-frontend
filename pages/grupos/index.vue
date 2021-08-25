<template>
  <div class="container-fluid min-75 mb-4">
    <div class="row no-gutters page-title align-content-center">
      <div class="col">
        <h1 class="text-center">Grupos</h1>
      </div>
    </div>

    <div class="container">
      <div class="row no-gutters justify-content-around">
        <form class="mt-4 pt-2" @submit.prevent="atualizaPETs()">
          <div class="form-row">
            <div class="col-md">
              <div class="form-group">
                <input
                  name="nome"
                  id="nome"
                  type="text"
                  placeholder="Nome"
                  aria-label="Pesquisar no site"
                  class="form-control"
                />
              </div>
            </div>

            <div class="col-md">
              <div class="form-group">
                <select
                  name="universidade.estado"
                  id="universidade.estado"
                  class="form-control"
                  @change="filtraUnis()"
                >
                  <option selected value="">Todos os estados</option>
                  <option value="AC">Acre</option>
                  <option value="AL">Alagoas</option>
                  <option value="AP">Amapá</option>
                  <option value="AM">Amazonas</option>
                  <option value="BA">Bahia</option>
                  <option value="CE">Ceará</option>
                  <option value="DF">Distrito Federal</option>
                  <option value="ES">Espírito Santo</option>
                  <option value="GO">Goiás</option>
                  <option value="MA">Maranhão</option>
                  <option value="MG">Minas Gerais</option>
                  <option value="MT">Mato Grosso</option>
                  <option value="MS">Mato Grosso do Sul</option>
                  <option value="PA">Pará</option>
                  <option value="PB">Paraíba</option>
                  <option value="PR">Paraná</option>
                  <option value="PE">Pernambuco</option>
                  <option value="PI">Piauí</option>
                  <option value="RJ">Rio de Janeiro</option>
                  <option value="RN">Rio Grande do Norte</option>
                  <option value="RS">Rio Grande do Sul</option>
                  <option value="RO">Rondônia</option>
                  <option value="RR">Roraima</option>
                  <option value="SC">Santa Catarina</option>
                  <option value="SP">São Paulo</option>
                  <option value="SE">Sergipe</option>
                  <option value="TO">Tocantins</option>
                </select>
              </div>
            </div>

            <div class="col-md">
              <div class="form-group">
                <select
                  name="universidade.nome"
                  id="universidade.nome"
                  class="form-control"
                >
                  <option selected value="">Todas as Instituições</option>
                  <option
                    class="listapets"
                    v-for="universidade in universidades_filter"
                    :key="universidade.id"
                    :value="universidade.nome"
                  >
                    {{ universidade.sigla }}
                  </option>
                </select>
              </div>
            </div>

            <div class="col-md">
              <div class="form-group">
                <select name="eixo" id="eixo" class="form-control">
                  <option selected value="">Todos os eixos</option>
                  <option>Ciências Agrárias</option>
                  <option>Ciências Biológicas</option>
                  <option>Ciências da Saúde</option>
                  <option>Ciências Exatas e da Terra</option>
                  <option>Ciências Sociais Aplicadas</option>
                  <option>Ciências Humanas</option>
                  <option>Engenharias</option>
                  <option>Interdisciplinar</option>
                  <option>Linguística, Letras e Arte</option>
                </select>
              </div>
            </div>

            <div class="col-md">
              <button type="submit" class="btn btn-secondary float-right">
                Pesquisar
                <font-awesome-icon class="ml-2" :icon="['fas', 'search']" />
              </button>
            </div>
          </div>
        </form>
      </div>

      <div class="row no-gutters align-items-center">
        <div class="col-md">
          <p class="mb-0 text-right">
            {{ this.pets_filter.length }} resultados encontrados
          </p>
        </div>
      </div>

      <div class="row no-gutters justify-content-center">
        <div class="col-md-10 pt-5">
          <div
            class="page"
            v-for="(pagina, i) in montaPaginasPET()"
            :key="i"
            :id="'page-' + i"
          >
            <PETCard
              v-for="(pet, index) in pagina"
              :key="index"
              class="py-4"
              :pet="pet"
            />
          </div>
        </div>
      </div>

      <div class="row no-gutters justify-content-center my-5">
        <nav>
          <ul class="pagination">
            <li class="page-item disabled">
              <a
                @click.prevent="prevPage"
                class="page-link"
                id="pagination-prev"
                href=""
                aria-label="Página anterior"
              >
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li class="page-item page-link">
              {{ this.pagina_atual + 1 }}
            </li>
            <li class="page-item">
              <a
                @click.prevent="nextPage"
                class="page-link"
                id="pagination-next"
                href=""
                aria-label="Próxima página"
              >
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page {
  display: none;
}

#page-0 {
  display: block;
}

.pagination .page-link {
  color: var(--text-grey-darker);
}

.pagination .page-link:focus {
  box-shadow: none;
}

.pagination .disabled .page-link {
  background-color: #eee;
}
</style>

<script>
import axios from "axios";
import PETCard from "@/components/PETCard.vue";

export default {
  data() {
    return {
      pets: {},
      pets_filter: {},
      universidades: {},
      universidades_filter: {},
      pagina_atual: 0,
    };
  },
  head() {
    return {
      title: "Grupos",
    };
  },
  components: {
    PETCard,
  },
  async asyncData({ params }) {
    const pets = await axios.get(
      process.env.baseURL + "/pets?_limit=-1&_sort=nome"
    );
    const universidades = await axios.get(
      process.env.baseURL + "/universidades?_sort=sigla:ASC&_limit=-1"
    );
    return {
      pets: pets.data,
      pets_filter: pets.data,
      universidades: universidades.data,
      universidades_filter: universidades.data,
    };
  },
  methods: {
    montaFiltro() {
      const nome = document.getElementById("nome");
      const uni_estado = document.getElementById("universidade.estado");
      const uni_nome = document.getElementById("universidade.nome");
      const eixo = document.getElementById("eixo");

      let filtro = "";

      if (nome.value) {
        filtro += "nome_contains=" + nome.value + "&";
      }

      if (uni_estado.value) {
        filtro += "campus.universidade.estado=" + uni_estado.value + "&";
      }

      if (uni_nome.value) {
        filtro += "campus.universidade.nome=" + uni_nome.value + "&";
      }

      if (eixo.value) {
        filtro += "eixo=" + eixo.value + "&";
      }
      
      filtro += "_sort=nome";

      return filtro;
    },
    async atualizaPETs() {
      const filtro = this.montaFiltro();
      let result = {};

      if (filtro) {
        result = await axios.get(
          process.env.baseURL + "/pets?_limit=-1&" + filtro
        );
      } else {
        result.data = this.pets;
      }

      this.pets_filter = result.data;
      this.changePage(0);
    },
    filtraUnis() {
      const estado = document.getElementById("universidade.estado").value;

      if (estado) {
        this.universidades_filter = [];

        for (var i = 0; i < this.universidades.length; i++) {
          if (this.universidades[i].estado === estado) {
            this.universidades_filter.push(this.universidades[i]);
          }
        }
      } else {
        this.universidades_filter = this.universidades;
      }
    },
    montaPaginasPET() {
      return this.$paginate(this.pets_filter, 10);
    },
    nextPage() {
      if (this.pagina_atual < this.pets_filter.length / 10) {
        this.changePage(this.pagina_atual + 1);
      }
    },
    prevPage() {
      if (this.pagina_atual > 0) {
        this.changePage(this.pagina_atual - 1);
      }
    },
    changePage(pagina) {
      if (document.getElementById("page-" + this.pagina_atual)) {
        document.getElementById("page-" + this.pagina_atual).style.display =
        "none";

        this.pagina_atual = pagina;

        document.getElementById("page-" + pagina).style.display = "block";
      }

      if (pagina == 0) {
        document
          .getElementById("pagination-prev")
          .parentElement.classList.add("disabled");
      } else {
        document
          .getElementById("pagination-prev")
          .parentElement.classList.remove("disabled");
      }

      if (pagina >= Math.ceil(this.pets_filter.length / 10) - 1) {
        document
          .getElementById("pagination-next")
          .parentElement.classList.add("disabled");
      } else {
        document
          .getElementById("pagination-next")
          .parentElement.classList.remove("disabled");
      }
    },
  },
};
</script>
