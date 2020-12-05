<template>
  <div class="container-fluid min-70 mb-4">
    <div class="row no-gutters align-items-center page-title">
      <div class="col">
        <h1 class="text-center">SUDESTEPET</h1>
      </div>
    </div>
    <div class="container">
      <div class="card">
        <div
          class="col-sm-12 col-md-8 col-lg-6 my-3"
          v-for="evento in sudestepets"
          :key="evento.id"
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
  head() {
    return {
      title: "SUDESTEPET",
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
    const sudestepets = await axios.get(
      process.env.baseURL + "/Hist-eventos?titulo_contains=sudestepet"
    );
    return {
      sudestepets: sudestepets.data,
    };
  },
};
</script>
