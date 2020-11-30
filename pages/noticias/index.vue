<template>
  <div class="container-fluid min-75 mb-4">
    <div class="row no-gutters align-items-center page-title mb-5">
      <div class="col">
        <h1 class="text-center">Notícias</h1>
      </div>
    </div>
    <div
      class="page"
      v-for="(pagina, i) in noticias_paginadas"
      :key="i"
      :id="'page-' + i"
    >
      <div
        v-for="(linha, index) in pagina"
        :key="index"
        class="row no-gutters justify-content-center my-2"
      >
        <div class="col-md-10">
          <NoticiaDeck :noticias="linha" />
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
          <li
            v-for="numero_pagina in noticias_paginadas.length"
            :key="numero_pagina"
            class="page-item"
            :id="'pagination-' + (numero_pagina - 1)"
          >
            <a
              @click.prevent="paginationClick"
              class="page-link"
              href=""
              :aria-label="'Página ' + numero_pagina"
              >{{ numero_pagina }}</a
            >
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

.page-item.active .page-link {
  background-color: var(--accent);
  border-color: #dee2e6;
  color: #fff;
}

@media (max-width: 883px) {
  .col-md-10 {
    width: unset;
  }
}
</style>

<script>
import NoticiaDeck from "@/components/NoticiaDeck.vue";
import axios from "axios";

export default {
  head() {
    return {
      title: "Notícias",
    };
  },
  data() {
    return {
      pagina_atual: 0,
    };
  },
  components: {
    NoticiaDeck,
  },
  asyncData({ params }) {
    axios.defaults.headers.post["Content-Type"] =
      "application/x-www-form-urlencoded";
    return axios
      .get(process.env.baseURL + `/noticias?_sort=data_publicacao:DESC`)
      .then((res) => {
        return { noticias: res.data };
      });
  },
  computed: {
    noticias_paginadas: function () {
      // divide noticias em paginas com 4 linhas de 3 noticias
      // retorna um array de 3 dimensoes
      return this.$paginate(this.$paginate(this.noticias, 3), 4);
    },
  },
  mounted() {
    document.getElementById("pagination-0").classList.add("active");
  },
  methods: {
    paginationClick(event) {
      const pagina = event.target.firstChild.data - 1;

      if (pagina != this.pagina_atual) {
        this.changePage(pagina);
      }
    },
    nextPage() {
      if (this.pagina_atual < this.noticias_paginadas.length) {
        this.changePage(this.pagina_atual + 1);
      }
    },
    prevPage() {
      if (this.pagina_atual > 0) {
        this.changePage(this.pagina_atual - 1);
      }
    },
    changePage(pagina) {
      document.getElementById("page-" + this.pagina_atual).style.display = "none";
      document.getElementById("pagination-" + this.pagina_atual).classList.remove("active");

      this.pagina_atual = pagina;

      document.getElementById("page-" + pagina).style.display = "block";
      document.getElementById("pagination-" + pagina).classList.add("active");

      if (pagina == 0) {
        document.getElementById("pagination-prev").parentElement.classList.add("disabled");
      } else {
        document.getElementById("pagination-prev").parentElement.classList.remove("disabled");
      }

      if (pagina == this.noticias_paginadas.length - 1) {
        document.getElementById("pagination-next").parentElement.classList.add("disabled");
      } else {
        document.getElementById("pagination-next").parentElement.classList.remove("disabled");
      }
    },
  },
};
</script>
