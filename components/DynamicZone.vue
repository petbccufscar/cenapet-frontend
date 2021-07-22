<template>
  <div>
    <div class="row no-gutters justify-content-center my-2">
      <div
        class="col-12 citacao"
        v-if="content.__component === 'conteudo.citacao'"
      >
        <div v-if="content.texto" class="citacao-texto" v-html="$md.render(content.texto)"></div>
        <p v-if="content.autor" class="citacao-autor">— {{ content.autor }}</p>
      </div>
    </div>

    <div class="col-12" v-if="content.__component === 'conteudo.conteudo'">
      <div class="text-justify" v-html="$md.render(content.conteudo)"></div>
    </div>

    <div class="col-12" v-if="content.__component === 'conteudo.documentos'">
      <h4>Documentos</h4>
      <div class="row no-gutters text-center mt-3">
        <div
          class="col-md-3 mt-2"
          v-for="documento in content.documentos"
          :key="documento.id"
        >
          <a :href="URL(documento)" target="_blank" class="file">
            <font-awesome-icon class="fa-2x file-icon" :icon="['fas', 'file']" />
            <p>{{ documento.name }}</p>
          </a>
        </div>
      </div>
    </div>

    <div class="row no-gutters justify-content-center my-2">
      <div
        class="col-md-7 text-center my-4"
        v-if="content.__component === 'conteudo.googledrive'"
      >
        <iframe
          id="driveplayer"
          :src="content.link_arquivo"
          height="400px"
          width="100%"
          allowfullscreen
        ></iframe>
        <p v-if="content.descricao" class="content-caption">
          {{ content.descricao }}
        </p>
      </div>

      <div
        :class="'text-center col-md-' + content.colunas"
        v-if="content.__component === 'conteudo.imagem'"
      >
        <img class="img-fluid" :src="URL(content.imagem)" />
        <p v-if="content.descricao" class="content-caption">
          {{ content.descricao }}
        </p>
      </div>
    </div>

    <div class="row no-gutters justify-content-center my-2">
      <div
        class="col-md-7 text-center my-4"
        v-if="content.__component === 'conteudo.youtube'"
      >
        <iframe
          id="ytplayer"
          type="text/html"
          height="400px"
          width="100%"
          :src="'https://www.youtube.com/embed/' + content.apenas_id_video"
          frameborder="0"
        ></iframe>
        <p v-if="content.descricao" class="content-caption">
          {{ content.descricao }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.content-caption {
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
  text-align: justify;
  padding-right: 1rem;
}

.citacao-autor {
  color: #666;
  margin-bottom: 0;
}

.file-icon {
  color: var(--text-grey-darker);
}

.file:hover > .file-icon {
  color: var(--deep-purple);
}

.file p {
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>

<script>
export default {
  props: {
    content: Object,
  },
  methods: {
    URL(file) {
      return process.env.baseURL + file.url;
    },
  },
};
</script>