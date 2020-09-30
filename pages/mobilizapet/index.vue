<template>
<div class="container-fluid text-center">

<!-- First Container -->
<div class = "col bg-1">
  <h3 class="p-5">Mobiliza PET</h3>
  <img src="data:image/png;base64,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" 
    class="img-responsive img-circle margin" style="display:inline" alt="Logo" width="350" height="350">
  <h3 class = "py-5 mb-0">O PET resiste! Por isso ele existe!</h3>
</div>

<!-- Second Container -->
<div class="col bg-2">
  <h3 class="pt-5 mb-4">O que é?</h3>
  <p class="p-5 mx-4">O Mobiliza PET é um movimento de nível nacional que tem por objetivo formar uma unidade coesa na luta pela manutenção do Programa de Educação e Tutorial, buscando reverter o cenário de fragilidade e ameaças vivenciado pelo Programa. Suas atividades são sempre voltadas a fortalecer a voz da comunidade petiana a partir do levantamento de pauta de reivindicações e, consequentemente, seu empoderamento através do apoio aos grupo tanto em necessidades internas, quanto para além de sua Instituição de Ensino Superior (IES). </p>
</div>

<!-- Third Container (Grid) -->
<div class="col bg-3">    
  <h3 class="p-4 my-4">Estrutura</h3>
  <p class="p-4 mx-5">According to all known laws of aviation, there is no way a bee should be able to fly. Its wings are too small to get its fat little body off the ground. The bee, of course, flies anyway because bees don't care
what humans think is impossible. Yellow, black. Yellow, black. Yellow, black. Yellow, black. Ooh, black and yellow! Let's shake it up a little. Barry! Breakfast is ready! Ooming! Hang on a second.</p><br>
  <div class="row no-gutter">
    <div class="col-sm-4">
      <h5 class="mb-4"> NACIONAL </h5>
      <p class="p-4 mx-4">A realização do evento foi resultado das deliberações do XVIII ENAPET (que ocorreu em Recife entre os dias 1 e 6 de outubro daquele ano) e teve por objetivo estabelecer um debate juntamente</p>
      <img src="https://upload.wikimedia.org/wikipedia/commons/a/af/Escudo_del_Club_Nacional_de_Football.svg" class="img-responsive margin" width="250">
    </div>
    <div class="col-sm-4"> 
      <h5 class="mb-4"> LOCAL </h5>
      <p class="p-4 mx-4">A realização do evento foi resultado das deliberações do XVIII ENAPET (que ocorreu em Recife entre os dias 1 e 6 de outubro daquele ano) e teve por objetivo estabelecer um debate juntamente</p>
      <img src="https://www.shapeweb.com.br/blog/wp-content/uploads/2016/08/Anuncio-local-no-Facebook-ads.jpg" class="img-responsive margin" width="250" alt="Image">
    </div>
    <div class="col-sm-4"> 
      <h5 class="mb-4"> REGIONAL </h5>
      <p class="p-4 mx-4">A realização do evento foi resultado das deliberações do XVIII ENAPET (que ocorreu em Recife entre os dias 1 e 6 de outubro daquele ano) e teve por objetivo estabelecer um debate juntamente</p>
      <img src="https://deolhonoradio.com.br/wp-content/uploads/2018/10/Radio-Regional-900x900-768x768.png" class="img-responsive margin" width="250" alt="Image">
    </div>
  </div>
</div>
</div>
</template>



<style scoped>    
  body {
    font: 20px Montserrat, sans-serif;
    line-height: 1.8;
    color: #f5f6f7;
  }
  p {
    font-size: 16px;
  }
  .bg-1 { 
    background-image: linear-gradient(90deg, rgba(156,214,161,1) 0%, rgba(252,238,33,1) 50%, rgba(247,147,30,1) 100%);
    color: #000000;
  }
  .bg-2 { 
    background-color: #474e5d; /* Dark Blue */
    color: #ffffff;
  }
  .bg-3 { 
    background-color: #ffffff; /* White */
    color: #555555;
  }
  .bg-4 { 
    background-color: #2f2f2f; /* Black Gray */
    color: #fff;
  }
  .container-fluid {
    text-align: center;
  }
  </style>
