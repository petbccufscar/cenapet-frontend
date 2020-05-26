<template>
  <div class="card-deck">
    <div class="card" v-for="noticia in noticias" :key="noticia.id">
      <img class="card-img-top" :src="noticia.img" aria-hidden="true" />
      <div class="card-body">
        <h5 class="card-title">{{ noticia.titulo }}</h5>
        <div class="card-text">{{ noticia.conteudo }}</div>
        <div class="ver-mais">Ver mais</div>
      </div>
      <div class="card-footer">
        <p class="data text-muted">Publicada em {{ noticia.data }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-deck {
  flex-wrap: wrap;
  justify-content: center;
}
.card-deck .card {
  margin: 1rem;
  flex: 1 1 100%;
}
.card-img-top {
  height: 30vh;
  max-width: 100%;
  object-fit: cover;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
}
.card-title {
  color: var(--accent);
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2; /* number of lines to show */
  line-height: 1.5rem; /* fallback */
  max-height: calc(1.5rem * 2); /* fallback */
}
.card-body {
  padding-bottom: 0.5rem;
}
.card-text {
  margin: 1rem 0;
  color: var(--text-grey-darker);
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2; /* number of lines to show */
  line-height: 1.3rem; /* fallback */
  max-height: calc(1.3rem * 2); /* fallback */
}
.ver-mais {
  text-align: right;
  color: var(--accent);
  font-weight: 600;
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
          conteudo:
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
          data: "03/08/2019"
        },
        {
          id: 2,
          img: "https://i.picsum.photos/id/1/1024/728.jpg",
          titulo: "Problemas com prestação de contas",
          conteudo:
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
          data: "21/01/2019"
        },
        {
          id: 3,
          img: "https://picsum.photos/1024/480/?image=52",
          titulo:
            "Formulário para descrição dos problemas com a plataforma SIGPET 2.0",
          conteudo:
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
          data: "02/04/2018"
        }
      ]
    };
  }
};
</script>
