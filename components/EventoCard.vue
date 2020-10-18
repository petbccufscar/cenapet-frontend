<template>
  <div class="card">
    <div class="row no-gutters justify-content-center align-items-center">
      <div class="col-sm-6 text-center">
        <img :src="logo" class="card-img" />
      </div>
      <div class="col-sm-6">
        <div class="card-body text-center">
          <h4 class="card-title">{{ titulo }}</h4>
          <h5 class="mb-3">{{ local }}</h5>
          <!--<a class="mr-3" :href="formatURL(links)">{{ links }}</a>-->
          <div class="card-pet">
            <p>
              <a>{{ moment(data_inicio).format("DD/MM/YYYY") }} - {{ moment(data_fim).format("DD/MM/YYYY") }}</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
var moment = require("moment");
export default {
  data() {
    return {
      moment: moment
    };
  },
  props: {
    id: Number,
    logo: String,
    titulo: String,
    local: String,
    links: String,
    data_inicio: Date,
    data_fim: Date,
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

  min-height: 240px;
  min-width: 240px;
}

.card-title {
  color: var(--accent);
  font-weight: bolder;
}

.card-img {
  object-fit:cover;
  position:relative;
  padding: 10px;
  
  height:230px;
  width:230px;
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