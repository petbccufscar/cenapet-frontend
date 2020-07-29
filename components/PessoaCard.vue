<template>
    <div class="card">
      <div class="row no-gutters justify-content-center">
        <div class="col-6">
          <img
            :src="foto"
            class="card-img"
            />
        </div>
        <div class="col-6">
            <div class="card-body ">
                <div class="row justify-content-center">
                    <p class="card-title">{{ cargo }}</p>
                </div>
                <div class="row nome justify-content-center">
                        {{ nome }}
                </div>
                <div class="row icons justify-content-center">
                
                    <div>
                    <a class="mr-3" :href="formatURL(email)">
                        <font-awesome-icon :icon="['fas', 'envelope']" />
                    </a>
                    <a :href="formatURL(facebookLink)" target="_blank">
                        <font-awesome-icon :icon="['fab', 'facebook-f']" />
                    </a>
                    </div>
                </div>
                <div class="row justify-content-center text-center card-pet">
                    <a :href="formatURL(petLink)" target="_blank">{{ nomePet }}</a>
                    <div class="row justify-content-center card-universidade">{{ universidadeCampus }}</div>
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
    foto:String, 
    cargo: String,
    nome: String,
    facebookLink: String,
    petLink: String,
    universidadeCampus: String,
    email:String,
    nomePet:String
  },
  methods: {
        formatURL: function(link) {
          if (link.indexOf("http://") != -1)
            return link
          return ("http://" + link)
      }
  },
};
</script>

<style>
.card{
  object-position: left;
  color:var(--theme-dark);
  border-color: var(--accent);
  border-width:medium;
  width:85%;
  padding:0.1rem;
  margin-bottom:0.5rem;

}
.nome{
    font-size:1.2rem;
    font-weight:500;
    margin-bottom:0.8rem;
    
}
.card-title{
    color:var(--accent);
    font-size:1.5rem;
    height:2rem;
    font-weight:bolder;
}

.card-img{
    padding:10px;
    object-fit: cover;
}

.card-pet{
    padding-top:1rem;
    margin:0 auto;
    font-size:0.9rem;
    width: 100%;

}
.card-universidade{
    margin:0 auto;
    font-size:0.9rem;
    width: 100%;

}
.card-h1{
  height: 1.5rem;
  font-size:1.8rem;
  width: 100%;
  color:var(--accent);
}

.icons {
  font-size: 1rem;
  height:2.5rem;
}

</style>