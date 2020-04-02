<template>
  <div class="card">
    <b-row no-gutters>
      <b-col md="5" lg="4">
        <img :src="img" class="card-img" />
      </b-col>
      <b-col md="7" lg="8">
        <div class="card-body">
          <h4 class="card-title">{{ titulo }}</h4>
          <p class="card-text text-muted">Publicada em {{ data_publicacao }}</p>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<style>
.card {
  width: 45%;
  border-radius: 1rem;
  margin: 1rem;
}
.card-img {
  object-fit: cover;
  height: 100%;
  width: 100%;
  border-radius: 1rem 0 0 1rem;
}
.card-title {
  color: var(--accent);
  margin-bottom: 0;
}
.card-text {
  margin-top: 2rem;
  font-size: 0.9rem;
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
    img: String,
    data_publicacao: String
  }
};
</script>
