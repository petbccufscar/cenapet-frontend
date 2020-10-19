<template>
  <div class="row no-gutters justify-content-center my-2">
    <div class="col-md-10" v-if="content.__component === 'noticia.conteudo'">
      <div class="conteudo" v-html="$md.render(content.conteudo)"></div>
    </div>

    <div
      class="col-md-10 citacao"
      v-if="content.__component === 'noticia.citacao'"
    >
      <p class="citacao-texto">{{ content.texto }}</p>
      <p class="mb-0">— {{ content.autor }}</p>
    </div>

    <div
      class="col-md-8 text-center my-4"
      v-if="content.__component === 'noticia.youtube'"
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
      v-if="content.__component === 'noticia.imagem'"
    >
      <img class="img-fluid" :src="imageURL(content.imagem)" />
      <p class="img-caption">{{ content.descricao }}</p>
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
