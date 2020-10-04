<template>
  <div class="container-fluid min-70 mb-4">
    <div class="row no-gutters align-items-center page-title">
      <div class="col">
        <h1 class="text-center">Historico de Eventos</h1>
      </div>
    </div>
    <div class="container">

  <div id="accordion" class="accordion">
    <div class = "card">
      <div class="row no-gutters justify-content-around align-items-center">
        <div class="col-12 my-14 ano mt-4">
           <div class="card-header collapsed" data-toggle="collapse" href="#collapseOne">
             <button class="btn card-title"><h2>ENAPET</h2></button>
          </div>
        </div>
        <div
          class="col-sm-12 col-md-8 col-lg-6 my-3"
          v-for="evento in enapets"
          :key="evento.id"
        >
        <div id="collapseOne" class="card-body collapse" data-parent="#accordion">
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




      <div
        class="row no-gutters justify-content-around align-items-center"
      >
        <div class="col-12 my-14 ano">
          <div class="card-header collapsed" data-toggle="collapse" href="#collapseTwo">
             <button class="btn card-title"><h2>ENEPET</h2></button>
        </div>
        </div>
        <div
          class="col-sm-12 col-md-8 col-lg-6 my-3"
          v-for="evento in enepets"
          :key="evento.id"
        >
        <div id="collapseTwo" class="card-body collapse" data-parent="#accordion">
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


      <div
        class="row no-gutters justify-content-around align-items-center"
      >
        <div class="col-12 my-14 ano">
          <div class="card-header collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree">
          <button class="btn card-title"><h2>ECONPET</h2></button>
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
      <div
        class="row no-gutters justify-content-around align-items-center"
      >
        <div class="col-12 my-14 ano">
          <div class="card-header collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseFour">
          <button class="btn card-title"><h2>ECOPET</h2></button>
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
      <div
        class="row no-gutters justify-content-around align-items-center"
      >
        <div class="col-12 my-14 ano">
          <div class="card-header collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseFive">
          <button class="btn card-title"><h2>NORTEPET</h2></button>
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
      <div
        class="row no-gutters justify-content-around align-items-center"
      >
        <div class="col-12 my-14 ano">
          <div class="card-header collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseSix">
          <button class="btn card-title"><h2>SUDESTEPET</h2></button>
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
      <div
        class="row no-gutters justify-content-around align-items-center"
      >
        <div class="col-12 my-14 ano">
          <div class="card-header collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseSeven">
          <button class="btn card-title"><h2>SULPET</h2></button>
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

<style>

.ano {
  color: var(--accent);
  letter-spacing: 2px;
  text-align: center;
}
}
.accordion .card-header:after {
    font-family: 'FontAwesome';  
    content: "\f107";
    float: right;
}
.accordion .card-header.collapsed:after {
    /* symbol for "collapsed" panels */
    content: "\f105"; 
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
    "EventoCard": EventoCard,
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
}
</script>
