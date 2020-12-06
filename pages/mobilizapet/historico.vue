<template>
  <div class="container">
    <div class="titulo">
      <h1>Histórico</h1>
    </div>

    <div class="row no-gutters justify-content-around align-items-center mt-4">
      <div
        class="col-sm-12 col-md-6 col-lg-4 my-3"
        v-for="historico in historicos"
        :key="historico.id"
      >
        <div class="card" style="width: 18rem">
          <div class="card-body">
            <p class="card-title">{{ historico.titulo }}</p>

            <p class="card-text">{{ historico.texto }}</p>
          </div>
          <img
            class="card-img-top"
            :src="historico.imagem"
            alt="Card image cap"
          />
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";

export default {
  components: {},
  data() {
    return {
      historicos: [
        {
          id: "1",
          titulo: "ABCDEF",
          texto:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam posuere felis vel arcu tristique dictum. Cras ut risus porta, pulvinar! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam posuere felis vel arcu tristique dictum. Cras ut risus porta, pulvinar! ",
          imagem:
            "https://s2.glbimg.com/vXjbfjMlF6Nfp8cNtx5GfA8PtqQ=/512x320/smart/e.glbimg.com/og/ed/f/original/2014/07/29/caverna-melissani-kefalonia-grecia.jpg",
        },
        {
          id: "2",
          titulo: "GHIJK",
          texto:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam posuere felis vel arcu tristique dictum. Cras ut risus porta, pulvinar?",
          imagem:
            "https://s2.glbimg.com/vXjbfjMlF6Nfp8cNtx5GfA8PtqQ=/512x320/smart/e.glbimg.com/og/ed/f/original/2014/07/29/caverna-melissani-kefalonia-grecia.jpg",
        },
        {
          id: "3",
          titulo: "LMNOPQ",
          texto:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam posuere felis vel arcu tristique dictum. Cras ut risus porta, pulvinar.",
          imagem:
            "https://s2.glbimg.com/vXjbfjMlF6Nfp8cNtx5GfA8PtqQ=/512x320/smart/e.glbimg.com/og/ed/f/original/2014/07/29/caverna-melissani-kefalonia-grecia.jpg",
        },
      ],
    };
  },
};
</script>

<style>
.titulo {
  margin: 1.3rem;
  font-style: italic;
}
.linha {
  border-bottom: 15px solid yellow;
  border-radius: 10px;
}

.card {
  border: none;
  background-color: inherit;
  display: inline-block;

  height: 60vh;
  width: 100%;

  font-size: 1.2rem;
}

.card-img-top {
  padding: 1.25rem;
  border-radius: 25px;
}

.card-text {
  height: 20vh;
  overflow: auto;
}
</style>
