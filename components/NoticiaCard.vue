<template>
  <div class="card">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img :src="img" class="card-img" />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <nuxt-link :to="'/noticias/' + id">
            <h4 class="card-title">{{ titulo }}</h4>
          </nuxt-link>
          <p class="card-text">{{ unformat(conteudo) }}</p>
          <p class="card-text text-muted mt-1">Publicada em {{ moment(data_publicacao).format("DD/MM/YYYY") }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  border-radius: 1rem;
  margin: 1rem;
  box-shadow: 0 2px 4px #7778;
}

.card-img {
  object-fit: cover;
  object-position: center;
  height: 100%;
  border-radius: 1rem 0 0 1rem;
}

.card-title {
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

.card-text {
  margin-top: 2rem;
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
  .card {
    width: 100%;
  }

  .card-img {
    max-height: 30vh;
    border-radius: 1rem 1rem 0 0;
  }
}
@media (max-width: 991px) {
  .card {
    width: 75%;
  }
}
</style>

<script>
var moment = require("moment");

export default {
  data() {
    return {
      moment: moment
    };
  },
  methods: {
    unformat(text) {
      const removeMd = require("remove-markdown");
      return removeMd(text);
    }
  },
  props: {
    id: Number,
    titulo: String,
    conteudo: String,
    img: String,
    data_publicacao: String
  }
};
</script>
