<template>
  <div class="container-fluid min-70 mb-4">
    <div class="row no-gutters align-items-center page-title">
      <div class="col">
        <h1 class="text-center">Histórico de Eventos</h1>
      </div>
    </div>
    <div class="container">
      <div id="accordion" class="accordion">
        <div class="card">
          <div class="row no-gutters justify-content-around align-items-center">
            <div class="col-12 my-14 ano mt-4">
              <div
                class="card-header collapsed"
                data-toggle="collapse"
                href="#collapseOne"
              >
                <h2>
                  ENAPET
                  <font-awesome-icon
                    class="fa-sm"
                    :icon="['fas', 'chevron-down']"
                  />
                </h2>
              </div>
            </div>
            <div
              class="col-sm-12 col-md-8 col-lg-6 my-3"
              v-for="evento in enapets"
              :key="evento.id"
            >
              <div
                id="collapseOne"
                class="card-body collapse"
                data-parent="#accordion"
              >
                <EventoCard
                  :id="evento.id"
                  :logo="getImgUrl(evento.logo)"
                  :titulo="evento.titulo"
                  :local="evento.local"
                  :data_inicio="evento.data_inicio"
                  :data_fim="evento.data_fim"
                  :links="evento.links"
                />
              </div>
            </div>
          </div>

          <div class="row no-gutters justify-content-around align-items-center">
            <div class="col-12 my-14 ano">
              <div
                class="card-header collapsed"
                data-toggle="collapse"
                href="#collapseTwo"
              >
                <h2>
                  ENEPET
                  <font-awesome-icon
                    class="fa-sm"
                    :icon="['fas', 'chevron-down']"
                  />
                </h2>
              </div>
            </div>
            <div
              class="col-sm-12 col-md-8 col-lg-6 my-3"
              v-for="evento in enepets"
              :key="evento.id"
            >
              <div
                id="collapseTwo"
                class="card-body collapse"
                data-parent="#accordion"
              >
                <EventoCard
                  :id="evento.id"
                  :logo="getImgUrl(evento.logo)"
                  :titulo="evento.titulo"
                  :local="evento.local"
                  :data_inicio="evento.data_inicio"
                  :data_fim="evento.data_fim"
                  :links="evento.links"
                />
              </div>
            </div>
          </div>

          <div class="row no-gutters justify-content-around align-items-center">
            <div class="col-12 my-14 ano">
              <div
                class="card-header collapsed"
                data-toggle="collapse"
                data-parent="#accordion"
                href="#collapseThree"
              >
                <h2>
                  ECONPET
                  <font-awesome-icon
                    class="fa-sm"
                    :icon="['fas', 'chevron-down']"
                  />
                </h2>
              </div>
            </div>
            <div
              class="col-sm-12 col-md-8 col-lg-6 my-3"
              v-for="evento in econpets"
              :key="evento.id"
            >
              <div id="collapseThree" class="collapse" data-parent="#accordion">
                <EventoCard
                  :id="evento.id"
                  :logo="getImgUrl(evento.logo)"
                  :titulo="evento.titulo"
                  :local="evento.local"
                  :data_inicio="evento.data_inicio"
                  :data_fim="evento.data_fim"
                  :links="evento.links"
                />
              </div>
            </div>
          </div>
          <div class="row no-gutters justify-content-around align-items-center">
            <div class="col-12 my-14 ano">
              <div
                class="card-header collapsed"
                data-toggle="collapse"
                data-parent="#accordion"
                href="#collapseFour"
              >
                <h2>
                  ECOPET
                  <font-awesome-icon
                    class="fa-sm"
                    :icon="['fas', 'chevron-down']"
                  />
                </h2>
              </div>
            </div>
            <div
              class="col-sm-12 col-md-8 col-lg-6 my-3"
              v-for="evento in ecopets"
              :key="evento.id"
            >
              <div id="collapseFour" class="collapse" data-parent="#accordion">
                <EventoCard
                  :id="evento.id"
                  :logo="getImgUrl(evento.logo)"
                  :titulo="evento.titulo"
                  :local="evento.local"
                  :data_inicio="evento.data_inicio"
                  :data_fim="evento.data_fim"
                  :links="evento.links"
                />
              </div>
            </div>
          </div>
          <div class="row no-gutters justify-content-around align-items-center">
            <div class="col-12 my-14 ano">
              <div
                class="card-header collapsed"
                data-toggle="collapse"
                data-parent="#accordion"
                href="#collapseFive"
              >
                <h2>
                  NORTEPET
                  <font-awesome-icon
                    class="fa-sm"
                    :icon="['fas', 'chevron-down']"
                  />
                </h2>
              </div>
            </div>
            <div
              class="col-sm-12 col-md-8 col-lg-6 my-3"
              v-for="evento in nortepets"
              :key="evento.id"
            >
              <div id="collapseFive" class="collapse" data-parent="#accordion">
                <EventoCard
                  :id="evento.id"
                  :logo="getImgUrl(evento.logo)"
                  :titulo="evento.titulo"
                  :local="evento.local"
                  :data_inicio="evento.data_inicio"
                  :data_fim="evento.data_fim"
                  :links="evento.links"
                />
              </div>
            </div>
          </div>
          <div class="row no-gutters justify-content-around align-items-center">
            <div class="col-12 my-14 ano">
              <div
                class="card-header collapsed"
                data-toggle="collapse"
                data-parent="#accordion"
                href="#collapseSix"
              >
                <h2>
                  SUDESTEPET
                  <font-awesome-icon
                    class="fa-sm"
                    :icon="['fas', 'chevron-down']"
                  />
                </h2>
              </div>
            </div>
            <div
              class="col-sm-12 col-md-8 col-lg-5 my-3"
              v-for="evento in sudestepets"
              :key="evento.id"
            >
              <div id="collapseSix" class="collapse" data-parent="#accordion">
                <EventoCard
                  :id="evento.id"
                  :logo="getImgUrl(evento.logo)"
                  :titulo="evento.titulo"
                  :local="evento.local"
                  :data_inicio="evento.data_inicio"
                  :data_fim="evento.data_fim"
                  :links="evento.links"
                />
              </div>
            </div>
          </div>
          <div class="row no-gutters justify-content-around align-items-center">
            <div class="col-12 my-14 ano">
              <div
                class="card-header collapsed"
                data-toggle="collapse"
                data-parent="#accordion"
                href="#collapseSeven"
              >
                <h2>
                  SULPET
                  <font-awesome-icon
                    class="fa-sm"
                    :icon="['fas', 'chevron-down']"
                  />
                </h2>
              </div>
            </div>
            <div
              class="col-sm-12 col-md-8 col-lg-5 my-3"
              v-for="evento in sulpets"
              :key="evento.id"
            >
              <div id="collapseSeven" class="collapse" data-parent="#accordion">
                <EventoCard
                  :id="evento.id"
                  :logo="getImgUrl(evento.logo)"
                  :titulo="evento.titulo"
                  :local="evento.local"
                  :data_inicio="evento.data_inicio"
                  :data_fim="evento.data_fim"
                  :links="evento.links"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-header {
  padding: 1rem 0;
}

.card-header h2 {
  color: var(--text-grey-darker);
}

.ano {
  color: var(--accent);
  letter-spacing: 2px;
  text-align: center;
}
</style>

<script>
import EventoCard from "@/components/EventoCard.vue";
import axios from "axios";

export default {
  data() {
    return {
      evento: [],
    };
  },

  components: {
    EventoCard: EventoCard,
  },

  methods: {
    getImgUrl: function (img) {
      return img
        ? process.env.baseURL + img.url
        : require("~/assets/images/logo_escuro.png");
    },
  },
  async asyncData({ params }) {
    const enapets = await axios.get(
      process.env.baseURL + "/Hist-eventos?titulo_contains=ENAPET"
    );
    const enepets = await axios.get(
      process.env.baseURL + "/Hist-eventos?titulo_contains=ENEPET"
    );
    const econpets = await axios.get(
      process.env.baseURL + "/Hist-eventos?titulo_contains=ECONPET"
    );
    const ecopets = await axios.get(
      process.env.baseURL + "/Hist-eventos?titulo_contains=ECOPET"
    );
    const nortepets = await axios.get(
      process.env.baseURL + "/Hist-eventos?titulo_contains=NORTEPET"
    );
    const sudestepets = await axios.get(
      process.env.baseURL + "/Hist-eventos?titulo_contains=SUDESTEPET"
    );
    const sulpets = await axios.get(
      process.env.baseURL + "/Hist-eventos?titulo_contains=SULPET"
    );
    return {
      enapets: enapets.data,
      enepets: enepets.data,
      econpets: econpets.data,
      ecopets: ecopets.data,
      nortepets: nortepets.data,
      sudestepets: sudestepets.data,
      sulpets: sulpets.data,
    };
  },
};
</script>
