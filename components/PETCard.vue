<template>
  <div class="row no-gutters b-down p-2">
    <div class="col-md-3 align-self-center">
      <img :src="logoPET(pet.logo)" class="pet-img" />
    </div>
    <div class="col-md-4">
      <nuxt-link :to="'/pets/' + pet.id">
        <h4>{{ pet.nome }}</h4>
      </nuxt-link>
      <p class="mt-2">{{ pet.campus.universidade.sigla }} - {{ pet.campus.nome }}</p>
      <p>{{ pet.campus.cidade }} - {{ pet.campus.universidade.estado }}</p>
      <p><b>Eixo:</b> {{ pet.eixo }}</p>
    </div>
  </div>
</template>

<style scoped>
.b-down {
  border-bottom: 1px solid #ddd;
}

.pet-img {
  object-fit: cover;
  object-position: center;
  max-width: 90%;
  max-height: 7rem;
}

h4 {
  color: var(--accent);
  margin-bottom: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4; /* number of lines to show */
  line-height: 1.7rem; /* fallback */
  max-height: calc(1.7rem * 4); /* fallback */
}

p {
  margin-bottom: 0.3rem;
  font-size: 0.9rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3; /* number of lines to show */
  line-height: 1.3rem; /* fallback */
  max-height: calc(1.3rem * 3); /* fallback */
}

@media (max-width: 767px) {
  .pet-img {
    max-height: 5rem;
  }
}
</style>

<script>
export default {
  methods: {
    logoPET: function (image) {
      if (image && image.formats != "") {
        if (image.formats.small) {
          return process.env.baseURL + image.formats.small.url;
        } else if (image.formats.thumbnail) {
          return process.env.baseURL + image.formats.thumbnail.url;
        } else {
          return process.env.baseURL + image.url;
        }
      }
      return require("~/assets/images/logo_pet.png");
    },
  },
  props: {
    pet: Object,
  },
};
</script>
