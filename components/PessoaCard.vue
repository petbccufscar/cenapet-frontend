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
                    <a class="mr-3" :href="email">
                        <font-awesome-icon :icon="['fas', 'envelope']" />
                    </a>
                    <a :href="facebookLink" target="_blank">
                        <font-awesome-icon :icon="['fab', 'facebook-f']" />
                    </a>
                    </div>
                </div>
                <div class="row justify-content-center text-center card-pet">
                    <a :href="petLink" target="_blank">{{ nomePet }}</a>{{ universidadeCampus }}
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
  }
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
}

.card-pet{
    padding-top:1rem;
    margin:0 auto;
    font-size:0.9rem;
    width: 100%;

}
.card-h1{
  height: 1.5rem;
  font-size:1.8rem;
  width: 100%;
  /* text-align: left; */
  color:var(--accent);
}

.icons {
  font-size: 1rem;
  height:2.5rem;
}

</style>