<template>
  <div class="container-fluid min-70">
    <div class="container my-4">

      <div class="row no-gutters justify-content-between align-items-center mt-5">
        <div class="col-md-4">
          <div class="pet-img">
            <img :src="getImgUrl(pet.logo)" />
          </div>
        </div>
        <div class="col-md-7">
          <div class="header">
            <h2>{{ pet.nome }}</h2>
            <p>{{ pet.campus.universidade.nome }}</p>
            <p>{{ pet.campus.nome }}</p>
          </div>
        </div>
      </div>

      <div class="row no-gutters justify-content-between mt-4 pt-4">
        <div class="col-md-4 order-12 order-md-1">
          <div class="contato">
            <h5>Contatos</h5>
            <p v-if="pet.email_pet">
              <a :href="'mailto:' + pet.email_pet">
                <font-awesome-icon :icon="['fas', 'envelope']" class="mr-2" />Email
              </a>
            </p>
            <p v-if="pet.instagram">
              <a :href="pet.instagram">
                <font-awesome-icon :icon="['fab', 'instagram']" class="mr-2" />Instagram
              </a>
            </p>
            <p v-if="pet.facebook">
              <a :href="pet.facebook">
                <font-awesome-icon :icon="['fab', 'facebook-f']" class="mr-2" />Facebook
              </a>
            </p>
            <p v-if="pet.twitter">
              <a :href="pet.twitter">
                <font-awesome-icon :icon="['fab', 'twitter']" class="mr-2" />Twitter
              </a>
            </p>
            <p v-if="pet.youtube">
              <a :href="pet.youtube">
                <font-awesome-icon :icon="['fab', 'youtube']" class="mr-2" />YouTube
              </a>
            </p>
            <p v-if="pet.outras_midias" class="mt-3 mb-1 font-weight-bold">Outras mídias</p>
            <div v-if="pet.outras_midias" v-html=" $md.render(pet.outras_midias) "></div>
          </div>
        </div>
        <div class="col-md-7 order-1 order-md-12">
          <h5 class="header-dados">Dados</h5>
          <div class="row no-gutters dados">
            <div class="col-md-6 label">
              <p>Cidade</p>
            </div>
            <div class="col-md-6 conteudo">
              <p>{{ pet.campus.cidade }} - {{ pet.campus.universidade.estado}}</p>
            </div>

            <div v-if="pet.email_pet" class="col-md-6 label">
              <p>Email</p>
            </div>
            <div v-if="pet.email_pet" class="col-md-6 conteudo">
              <p>
                <a :href="'mailto:' + pet.email_pet">
                  {{ pet.email_pet }}
                  <font-awesome-icon
                    :icon="['fas', 'external-link-alt']"
                    class="ml-1 fa-xs"
                    style="vertical-align: inherit;"
                  />
                </a>
              </p>
            </div>

            <div v-if="pet.site_pet" class="col-md-6 label">
              <p>Site</p>
            </div>
            <div v-if="pet.site_pet" class="col-md-6 conteudo">
              <p>
                <a :href="pet.site_pet">
                  {{ pet.site_pet }}
                  <font-awesome-icon
                    :icon="['fas', 'external-link-alt']"
                    class="ml-1 fa-xs"
                    style="vertical-align: inherit;"
                  />
                </a>
              </p>
            </div>

            <div v-if="pet.site_pet_ies" class="col-md-6 label">
              <p>Site na instituição</p>
            </div>
            <div v-if="pet.site_pet_ies" class="col-md-6 conteudo">
              <p>
                <a :href="pet.site_pet_ies">
                  {{ pet.site_pet_ies }}
                  <font-awesome-icon
                    :icon="['fas', 'external-link-alt']"
                    class="ml-1 fa-xs"
                    style="vertical-align: inherit;"
                  />
                </a>
              </p>
            </div>

            <div v-if="pet.eixo" class="col-md-6 label">
              <p>Eixo</p>
            </div>
            <div v-if="pet.eixo" class="col-md-6 conteudo">
              <p>{{ pet.eixo }}</p>
            </div>

            <div v-if="pet.tematica" class="col-md-6 label">
              <p>Temática</p>
            </div>
            <div v-if="pet.tematica" class="col-md-6 conteudo">
              <p>{{ pet.Tematica }}</p>
            </div>

            <div v-if="pet.ano_criacao" class="col-md-6 label">
              <p>Ano de criação</p>
            </div>
            <div v-if="pet.ano_criacao" class="col-md-6 conteudo">
              <p>{{ pet.ano_criacao }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="map"></div>
  </div>
</template>


<script>
import axios from "axios";

export default {
  head: {
    link: [
      {
        rel: "stylesheet",
        href: `https://api.mapbox.com/mapbox-gl-js/v1.10.0/mapbox-gl.css`,
      },
    ],
  },
  data() {
    return {
      pet: {},
      map: {},
    };
  },
  mounted() {
    const mapboxgl = require("mapbox-gl");

    let map = this.map;
    let coord = [this.pet.campus.longitude, this.pet.campus.latitude];

    map = new mapboxgl.Map({
      accessToken: process.env.mbToken,
      container: "map", // <div id="map"></div>
      style: "mapbox://styles/mapbox/light-v10",
      center: coord,
      zoom: 5,
    });

    var marker = new mapboxgl.Marker().setLngLat(coord).addTo(map);

    map.addControl(new mapboxgl.NavigationControl());

    map.scrollZoom.disable();
    map.scrollZoom.setWheelZoomRate(0.02); // Default 1/450

    map.on("wheel", (event) => {
      if (event.originalEvent.ctrlKey) {
        // Check if CTRL key is pressed
        event.originalEvent.preventDefault(); // Prevent chrome/firefox default behavior
        if (!map.scrollZoom._enabled) map.scrollZoom.enable(); // Enable zoom only if it's disabled
      } else {
        if (map.scrollZoom._enabled) map.scrollZoom.disable(); // Disable zoom only if it's enabled
      }
    });
  },
  asyncData({ params }) {
    axios.defaults.headers.post["Content-Type"] =
      "application/x-www-form-urlencoded";
    return axios.get(process.env.baseURL + `/PETS/${params.id}`).then((res) => {
      return { pet: res.data };
    });
  },

  methods: {
    getImgUrl(img) {
      return img
        ? process.env.baseURL + img.url
        : require("~/assets/images/logo_pet.png");
    },
  },
};
</script>


<style scoped>
.pet-img {
  text-align: center;
}

.pet-img img {
  width: auto;
  max-width: 100%;
  max-height: 13rem;
  padding: 1rem 2rem;
}

.header {
  padding-bottom: 0.5rem;
  letter-spacing: 1px;
}

.header h2 {
  color: var(--theme-dark);
}

.header p {
  color: var(--accent);
  font-size: 18px;
  margin: 0;
}

.header-dados {
  border-bottom: 1px solid #3333;
  padding-bottom: 0.5rem;
  margin-bottom: 0.5rem;
}

.contato {
  text-align: center;
}

.contato p {
  margin: 0.7rem 0;
}

.dados p {
  margin: 0.7rem 0;
  font-weight: 600;
}

.dados .conteudo {
  color: var(--accent);
}

#map {
  width: 100%;
  height: 70vh;
}
</style>