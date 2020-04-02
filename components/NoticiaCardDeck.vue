<template>
  <b-card-group deck>
    <b-card
      v-for="noticia in noticias"
      :key="noticia.id"
      :title="noticia.titulo"
      :img-src="noticia.img"
      img-top
    >
      <template v-slot:footer>
        <p class="data text-muted">Publicada em {{ noticia.data }}</p>
      </template>
    </b-card>
  </b-card-group>
</template>

<style>
.card-deck {
  flex-wrap: wrap;
  justify-content: center;
}
.card-deck .card {
  margin: 1rem;
  flex: 1 1 100%;
}
.card-img-top {
  max-height: 30vh;
  width: auto;
  object-fit: cover;
}
.card-title {
  color: var(--accent);
  margin-bottom: 0;
}
.card-footer .data {
  margin: 0;
  font-size: 0.9rem;
}
@media (min-width: 768px) {
  .card-deck .card {
    flex: 0 0 40%;
  }
}
@media (min-width: 1100px) {
  .card-deck .card {
    flex: 1 1 0%;
  }
}
</style>

<script>
export default {
  data() {
    return {
      // DADOS ESTATICOS
      // ALTERAR PARA DINAMICOS COM BACKEND
      noticias: [
        {
          id: 1,
          img: "https://picsum.photos/300/300/?image=41",
          titulo: "1º Comunicado da Diretoria da CENAPET 2020",
          data: "03/08/2019"
        },
        {
          id: 2,
          img: "https://i.picsum.photos/id/1/1024/728.jpg",
          titulo: "Problemas com prestação de contas",
          data: "21/01/2019"
        },
        {
          id: 3,
          img: "https://picsum.photos/1024/480/?image=52",
          titulo:
            "Formulário para descrição dos problemas com a plataforma SIGPET 2.0",
          data: "02/04/2018"
        }
      ]
    };
  }
};
</script>
