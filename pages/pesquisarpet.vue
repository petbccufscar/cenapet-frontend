<template>
  <div class="container-fluid mb-4">
    <div class="row no-gutters page-title align-content-center">
      <div class="col">
        <h1 class="text-center">Pesquisa</h1>
      </div>
    </div>

    <div class="container-fluid">
      <form class="SearchBar">
        
          <div class="row no-gutters">
            <div class="col-md-3 mt-4 ml-4">
            <div class= "form-group">
              <input type="text" placeholder="Nome" aria-label="Pesquisar no site" class="form-control">
            </div>
        <!-- if(){ -->

            <div class="form-group">
              <label for="area">Estado:</label>
                <select name="estado" id="estado" class="form-control">
                    <option selected value="" disabled="" hidden="">Selecione uma opção</option>
                    <option class="listapets" v-for="Universidade in Universidades" :key="Universidade.id">
                          {{Universidade.estado}}
                    </option>
                </select> 
            </div>

            <div class="form-group">
              <label for="area">Faculdade:</label>
                <select name="faculdade" id="faculdade" class="form-control">
                    <option selected value="" disabled="" hidden="">Selecione uma opção</option>
                    <option class="listapets" v-for="Universidade in Universidades" :key="Universidade.id">
                          {{Universidade.sigla}}
                    </option>
                </select> 
            </div>

            <div class="form-group">
              <label for="area">Eixo:</label>
                <select name="eixo" id="eixo" class="form-control">
                    <option selected value="" disabled="" hidden="">Selecione uma opção</option>
                    <option>Ciências Agrárias</option>
                    <option>Ciências Biológicas</option>
                    <option>Ciências da Saúde</option>
                    <option>Ciências Exatas e da Terra</option>
                    <option>Ciências Sociais Aplicadas</option>
                    <option>Ciências Humanas</option>
                    <option>Engenharias</option>
                    <option>Interdisciplinar</option>
                    <option>Linguística, Letras e Arte</option>
                </select> 
            </div>
          <!-- } --> 
                
              <button type="submit" class="btn btn-secondary">
                <font-awesome-icon :icon="['fas', 'search']" />
              </button>
                
          

          </div> 
        </div>
      </form>
    </div>
  </div>
</template>

<script>

import axios from "axios";

// const searchBar = document.getElementById('searchBar')

// searchBar.addEventListener('keyup', (text) => {
//   const searchString = text.target.value;
// const  

// });
//@submit.prevent listener form 
// @chance listener select / @click
// Nome do pet com link da página dele


export default {
  
    async asyncData({params}){
        const pets = await axios.get(process.env.baseURL+ "/pets");
        const Universidades = await axios.get(process.env.baseURL+ "/Universidades");
        return {  pets: pets.data, 
                  Universidades: Universidades.data }
    }

}


</script>


<style scoped>

.SearchBar{
  color: var(--theme-dark);

}


.SearchBar label{
  font-size: 1.3rem;
}

.SearchBar select{
  color: var(--text-light1);
  background-color: var(--footer-dark);
  font-size: 1.3rem;
  border-radius: 1rem;
  border: 0;
  
}


.SearchBar button{ 
  font-size: 1.5rem;
  padding: 0.3rem 5rem;
  border: 0;
  border-radius: 1rem;
  cursor: pointer;
  background-color: var(--border-dark);
  color: var(--text-light1);
  text-decoration: none;
  transition: background 0.2s;
  justify-content: center;
  
}

.SearchBar button:hover{
  background: var(--text-grey-darker);
}

</style>

