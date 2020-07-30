<template>
  <div class="card">
    <div class="row no-gutters justify-content-center align-items-center">
      <div class="col-sm-6 text-center">
        <img :src="foto" class="card-img" />
      </div>
      <div class="col-sm-6">
        <div class="card-body text-center">
          <h4 class="card-title">{{ cargo }}</h4>
          <h5 class="mb-3">{{ nome }}</h5>
          <a class="mr-3" :href="formatURL(email)">
            <font-awesome-icon :icon="['fas', 'envelope']" />
          </a>
          <a :href="formatURL(facebookLink)" target="_blank">
            <font-awesome-icon :icon="['fab', 'facebook-f']" />
          </a>
          <div class="card-pet">
            <p>
              <a :href="formatURL(petLink)" target="_blank">{{ nomePet }}</a>
            </p>
            <p>{{ universidadeCampus }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: Number,
    foto: String,
    cargo: String,
    nome: String,
    facebookLink: String,
    petLink: String,
    universidadeCampus: String,
    email: String,
    nomePet: String,
  },
  methods: {
    formatURL: function (link) {
      if (link.indexOf("http://") != -1 || link.indexOf("https://") != -1) return link;
      return "http://" + link;
    },
  },
};
</script>

<style scoped>
.card {
  color: var(--theme-dark);
  box-shadow: 0 5px 5px #7778;
  width: 100%;
}

.card-title {
  color: var(--accent);
  font-weight: bolder;
}

.card-img {
  padding: 10px;
  object-fit: cover;
  max-height: 35vh;
  width: auto;
  border-radius: 50%;
}

.card-pet {
  padding-top: 1rem;
  margin: 0;
  font-size: 0.9rem;
}

.card-pet p {
  margin-bottom: 0;
}

</style>