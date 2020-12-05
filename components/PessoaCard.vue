<template>
    <div class="card">
        <div class="foto text-center">
            <img :src="foto" class="card-img" />
        </div>
        <div class="nome">
            
                <h4 class="mb-3">{{ nome }}</h4> 
            
            
        </div>
        <div class="cargo">
            <h5 class="card-title">{{ cargo }}</h5>
        </div>
        <div class="redes text-center">
            <a class="mr-3" v-if="email" :href="`mailto:${email}`" target="_blank">
              <font-awesome-icon :icon="['fas', 'envelope']" />
            </a>

            <a v-if="facebookLink" :href="formatURL(facebookLink)" target="_blank">
              <font-awesome-icon :icon="['fab', 'facebook-f']" />
            </a>
        </div>
        <div class="texto ">
            <p>{{ categoria }} no <a :href="formatURL(petLink)" target="_blank">{{ nomePet }}</a><br> {{ universidadeCampus }}</p>
        </div>
    </div>
</template>


<style scoped>

.card{
  color: var(--theme-dark);
  box-shadow: 0 5px 5px #7778;
  width: 100%;
  height:12rem;

  word-wrap:  normal;

  

  display:grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 1.75fr 1.75fr 3.5fr;

  grid-template-areas:"foto nome cargo" "redes texto"

}

.foto{
    height:100%;
    /* background:blue; */
    grid-area:"foto";
    grid-row-start:1; 
    grid-row-end:3;

}
.nome{
    height:100%;
    /* background:red; */
    grid-area:"nome";
   
    
    color: var(--accent);
    font-weight:800;

    -webkit-transform:translate(0,-50%);
   transform:translate(0,-0);
   top:20%;
   position: relative;
    


}

.cargo{
    height:100%;
    /* background:yellow; */
    grid-area:"cargo";
    padding-top: 7px;
    
    color: var(--accent);
    font-weight: bolder;

}
.redes{
    height:100%;
    /* background:green; */
    grid-area:"redes";
      -webkit-transform:translate(0,-50%);
   transform:translate(0,-0);
   top:20%;
   position: relative;
}   
.texto{
  height:100%;
    /* background:purple;  */
    grid-area:"texto"; 

     -webkit-transform:translate(0,-50%);
   transform:translate(0,-0);
   top:20%;
   position: relative;
   font-size:0.85rem;
    
}

.card-img{
    object-fit:cover;
    position:relative;
    padding: 7px 10px 10px 10px;
    
    height:100px;
    width:100px;
    border-radius: 50%;
}

h4{
        font-size:1.3rem;
    }
h5{
        font-size:1.05rem;
    }


@media (max-width: 767px){
   .card{
        height:10rem;
    }
    .nome{
        top:30%;
    }
    .texto{
        font-size:0.7rem;
    }
    h4{
        font-size:1.1rem;
    }
    h5{
        font-size:0.85rem;
    }
};

@media (max-width: 360px){
    .card{
        height:10rem;
    }
    .nome{
        top:30%;
    }
      .texto{
        font-size:0.7rem;
    }
    h4{
        font-size:1.1rem;
    }
    h5{
        font-size:0.85rem;
    }
};

</style>


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
    categoria: String,
  },
  methods: {
    formatURL: function (link) {
      if(link){
        if (link.indexOf("http://") != -1 || link.indexOf("https://") != -1) return link;
        return "http://" + link;
      }
      
    },
  },
};
</script>
