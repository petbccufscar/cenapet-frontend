<template>
  <div class="row no-gutters justify-content-center my-2">
    <div class="col-12" v-if="content.__component === 'conteudo.conteudo'">
      <div class="conteudo" v-html="$md.render(content.conteudo)"></div>
    </div>

    <div
      class="col-12 citacao"
      v-if="content.__component === 'conteudo.citacao'"
    >
      <p v-if="content.texto" class="citacao-texto">{{ content.texto }}</p>
      <p v-if="content.autor" class="citacao-autor">— {{ content.autor }}</p>
    </div>

    <div
      class="col-12 text-center my-4"
      v-if="content.__component === 'conteudo.youtube'"
    >
      <iframe
        id="ytplayer"
        type="text/html"
        width="640"
        height="360"
        :src="'https://www.youtube.com/embed/' + content.video_id"
        frameborder="0"
      ></iframe>
    </div>

    <div
      :class="'col-md-' + content.colunas"
      v-if="content.__component === 'conteudo.imagem'"
    >
      <img class="img-fluid" :src="imageURL(content.imagem)" />
      <p v-if="content.descricao" class="img-caption">{{ content.descricao }}</p>
    </div>
  </div>
</template>

<style scoped>
.img-caption {
  text-align: center;
  font-size: 0.85rem;
  color: var(--text-grey-darker);
  margin-top: 0.2rem;
}

.citacao {
  margin-left: 2rem;
  padding-left: 1rem;
  border-left: 2px solid #ddd;
}

.citacao-texto {
  color: var(--text-grey-darker);
}

.citacao-autor {
  color: var(--text-grey);
  margin-bottom: 0;
}
</style>

<script>
export default {
  props: {
    content: Object,
  },
  methods: {
    imageURL(image) {
      return process.env.baseURL + image.url;
    },
  },
};
</script>