<template>
  <div class="container-fluid min-75 mb-4">
    <div class="row no-gutters align-items-center page-title">
      <div class="col">
        <h1 class="text-center">Gestões</h1>
      </div>
    </div>

    <div class="container dropdown">
      <div class="accordion mt-4" id="accordion">
        <div v-for="(gestao, index) in gestoes" :key="gestao.id">
          <div class="bloco">
            <h5 class="mb-0">
              <button
                class="btn btn-link"
                data-toggle="collapse"
                :data-target="'#Collapse' + gestao.id"
                aria-expanded="true"
                :aria-controls="gestao.id"
              >
                <div class="row dropdown">
                  <h2 class="ano">
                    <font-awesome-icon
                      class="fa"
                      @click="$event.target.classList.toggle('fa-rotate-90')"
                      :icon="['fas', 'chevron-right']"
                    />
                    {{ gestao.anoInicio }} - {{ gestao.anoTermino }}
                  </h2>
                </div>
              </button>
              <div class="linha"></div>
            </h5>
          </div>
          <div
            :id="'Collapse' + gestao.id"
            class="collapse"
            :class="{ show: index === 0 }"
            :aria-labelledby="headingOne"
            data-parent="#accordion"
          >
            <div class="row content">
              <div
                class="col-sm-12 col-md-6 col-lg-4 my-3"
                v-for="pessoa in gestao.pessoas"
                :key="pessoa.id"
              >
                <pessoa-card
                  :id="pessoa.id"
                  :foto="getImgUrl(pessoa.foto)"
                  :cargo="pessoa.cargo"
                  :nome="pessoa.nome"
                  :facebookLink="pessoa.facebookLink"
                  :petLink="pessoa.petLink"
                  :universidadeCampus="pessoa.universidadeCampus"
                  :email="pessoa.email"
                  :nomePet="pessoa.nomePet"
                  :categoria="pessoa.Categoria"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
* {
  text-transform: none !important;
  text-decoration: none !important;
}
.ano {
  color: var(--accent);
  letter-spacing: 2px;
  text-align: center;
}
.content {
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  margin-bottom: 30px;
}

.bloco {
  margin-left: 2rem;
  margin-bottom: 26px;
}

.linha {
  margin-top: 0.3rem;
  border-bottom: 1px solid var(--accent);
}

.dropdown .btn-link.collapsed {
  display: flex;
  justify-content: center;
  text-align: left;
  position: relative;
}
</style>

<script>
import PessoaCard from "@/components/PessoaCard.vue";
import axios from "axios";

export default {
  head() {
    return {
      title: "Gestões da CENAPET",
    };
  },
  data() {
    return {
      gestoes: [],
    };
  },
  components: {
    "pessoa-card": PessoaCard,
  },
  methods: {
    getImgUrl: function (image) {
      if (image && image.formats) {
        if (image.formats.small) {
          return process.env.baseURL + image.formats.small.url;
        } else {
          return process.env.baseURL + image.formats.thumbnail.url;
        }
      } else {
        return require("~/assets/images/logo_escuro.png");
      }
    },
  },
  async asyncData({ params }) {
    const gestoes = await axios.get(
      process.env.baseURL + "/gestoes?_sort=anoInicio:DESC"
    );
    return { gestoes: gestoes.data };
  },
};
</script>
