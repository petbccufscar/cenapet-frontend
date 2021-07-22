<template>
    <div class="page mt-3">
            <div class="logo">
                <img class="logo-pet" src="~/assets/images/LogoPETBCC.png" alt="Logo PetBCC">
                <img class="logo-ufscar" src="~/assets/images/logo_ufscar.png" alt="Logo UFSCar">
            </div>
        <div class="grid row">
            <div class="col-md">
                <div class="texto">
                    Esse site é um projeto desenvolvido pelo grupo PET-BCC da Universidade Federal de São Carlos, com objetivo de auxiliar a CENAPET na divulgação de suas comissões, eventos, documentos e notícias.
                </div>

                <div class="infos-pet">
                    <div class="ativos">
                        <a class="link_pet" href="https://petbcc.ufscar.br/projetos/" target="_blank">Conheça todos nossos projetos ativos!</a>
                    </div>
                    <div class="redes">
                        <p>Nos siga e acompanhe nossas Redes Sociais!</p>
                        <div class="icons">
                            <a href="https://www.facebook.com/petbcc"  target="_blank"> <font-awesome-icon :icon="['fab', 'facebook-f']" class="fa-3x" /></a> 
                            <a href="https://www.instagram.com/petbcc.ufscar/"  target="_blank"><font-awesome-icon :icon="['fab', 'instagram']" class="fa-3x" /></a> 
                            <a href="https://github.com/petbccufscar" target="_blank"><font-awesome-icon :icon="['fab', 'github']" class="fa-3x" /></a>
                        </div>
                    </div>   
                </div>
                
                
                <p class="devs-start">Conheça nossos devs!</p>
                <div class="devs">
                    <div class="dev">
                        <a  href="https://github.com/igorlmgx" target="_blank">
                            <img class="img-dev" src="https://avatars.githubusercontent.com/u/40547661?v=4" alt="Igor Lucio"> 
                            <p>Igor Lucio</p>
                        </a>
                    </div>
                    <div class="dev">
                        <a  href="https://github.com/amandapmn" target="_blank">
                            <img class="img-dev" src="https://avatars.githubusercontent.com/u/40667726?v=4" alt="Amanda Manso">
                            <p>Amanda Manso</p>
                        </a>
                    </div>
                    <div class="dev">
                        <a  href="https://github.com/Donderileo" target="_blank">
                            <img class="img-dev" src="https://avatars.githubusercontent.com/u/33060591?v=4" alt="Leonardo Rodrigues">
                            <p>Leonardo Rodrigues</p>
                        </a>
                    </div>
                    <div class="dev">
                        <a  href="https://github.com/mayktu  " target="_blank">
                            <img class="img-dev" src="https://avatars.githubusercontent.com/u/38228656?v=4" alt="Mayk Bezerra">
                            <p>Mayk Bezerra</p>
                        </a>
                    </div>
                    <div class="dev">
                        <a  href="https://github.com/reynold125" target="_blank">
                            <img class="img-dev" src="https://avatars.githubusercontent.com/u/37456066?v=4" alt="Reynold Mazo">
                            <p>Reynold Mazo</p>
                        </a>
                    </div>
                </div>
           
               
            </div>
        </div>
    </div>
</template>

<style scoped>
.page{
    margin-top:5rem;    
    min-height:71vh;
}
.grid{
    width:95%;
    padding-left:10rem;
    padding-right:10rem;
    margin-top:2rem;
}
.logo{
    height:30%;
    display:flex;
    justify-content:center;
    gap:5rem;
}
.logo-pet{
    width:20%;
    height:20%;
}

.logo-ufscar{
    width:15%;
    height:15%;
}

.texto{
    font-size:1.4rem;
    font-weight: 600;
    color:rgb(27, 27, 27)
}
.redes{
    margin-top:2rem;
}
.ativos{
    margin-top:2rem;
}
.icons{
    display:flex;
    gap:2rem;
}

.devs-start{
 margin-top:5rem;
}
.devs{

    width:70%;
    display:grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    align-items: center;
    justify-content: left;
}
.img-dev{
    width:60%;
    height:60%;
    border-radius:50%;
}

.devs div{
    text-align:center;
    justify-content:center;
}

.dev{
    margin-top:1rem;
    transition: all .2s ease-in-out;
}

.dev:hover{
    transform: translatey(-10%);
}


@media (max-width:650px) {
    .grid{
        padding:1rem;
    }
    .texto{
        font-size:0.7rem;
    }
    .devs{
        justify-content: center;
        grid-template-columns: 1fr;
        width:40%;
        height:40%;
    }
}
</style>
