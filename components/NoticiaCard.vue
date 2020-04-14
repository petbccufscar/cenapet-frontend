<template>
  <div class="card">
    <b-row no-gutters>
      <b-col md="4">
        <img :src="img" class="card-img" />
      </b-col>
      <b-col md="8">
        <div class="card-body">
          <h4 class="card-title">{{ titulo }}</h4>
          <p class="card-text">{{ conteudo }}</p>
          <p class="card-text text-muted mt-1">Publicada em {{ data_publicacao }}</p>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<style>
.card {
  border-radius: 1rem;
  margin: 1rem;
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
  line-height: 1.3rem; /* fallback */
  max-height: calc(1.3rem * 4); /* fallback */
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
export default {
  props: {
    titulo: String,
    conteudo: String,
    img: String,
    data_publicacao: String
  }
};
</script>
