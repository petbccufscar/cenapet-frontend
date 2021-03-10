<template>
  <div class="container-fluid min-75 mb-4">
    <div class="row no-gutters align-items-center page-title">
      <div class="col">
        <h1 class="text-center">Cadastro</h1>
      </div>
    </div>
    <div class="container" v-if="!this.api_response.id">
      <div class="row no-gutters mt-3">
        <div class="col text-justify">
          <p>A Comissão Divulga PET Brasil, formada no XXII ENAPET em Brasília 2017, ligada diretamente à Diretoria de Comunicação da CENAPET, está coletando informações dos grupos do Programa de Educação Tutorial para a divulgação neste site, uma plataforma que pretende unir informações de PETs de todo o país.</p>

          <p>Queremos conhecer o seu PET e fazer com que o Brasil inteiro também o conheça!</p>

          <p>O preenchimento é rápido e usaremos essas informações para alimentar a nova plataforma para conhecer e assim fortalecer nossas atividades e o programa como um todo.</p>

          <p>
            Para qualquer dúvida ou informação, favor entrar em contato com a comissão através do e-mail
            <a
              href="mailto:divulgapetbrasil@gmail.com"
            >divulgapetbrasil@gmail.com</a>.
          </p>
          <p class="small">
            Este site é protegido por reCAPTCHA e Google. Verifique a
            <a
              href="https://policies.google.com/privacy"
            >política de privacidade</a> e os
            <a href="https://policies.google.com/terms">termos de serviço</a>.
          </p>
        </div>
      </div>
      <div class="row no-gutters justify-content-center mt-2">
        <div class="col-md-8">
          <form name="cadastraPET" id="cadastraPET" @submit.prevent="onSubmit">
            <div class="form-group">
              <label for="nome">Nome do PET</label>
              <input
                type="text"
                class="form-control"
                id="nome"
                aria-describedby="nomeHelp"
                placeholder="Ex: PET Bacharelado em Ciência da Computação"
                required
              />
              <small
                id="nomeHelp"
                class="form-text text-muted"
              >Nome completo do grupo como consta no edital de criação.</small>
            </div>

            <div class="form-group">
              <label for="email_pet">Email</label>
              <input
                type="text"
                class="form-control"
                id="email_pet"
                placeholder="Ex: petbcc@ufscar.br"
                @change="validaEmail()"
                required
              />
              <p class="text-right mt-2" v-if="this.pet_existente">Este email já está cadastrado <a :href="'/pets/' + this.pet_existente" target="_blank">aqui</a>!</p>
            </div>

            <div class="form-check my-2">
              <input
                type="checkbox"
                value="false"
                class="form-check-input"
                id="grupo_institucional"
              />
              <label for="grupo_institucional">Meu grupo é um <b>grupo institucional (GET/PETi)</b></label>
            </div>

            <div class="form-check my-2">
              <input
                type="checkbox"
                value="false"
                class="form-check-input"
                id="grupo_conexoes"
              />
              <label for="grupo_conexoes">Meu grupo é um <b>PET Conexões de Saberes</b></label>
            </div>

            <div class="form-group">
              <label for="universidade.estado">Estado</label>
              <select
                id="estado"
                class="form-control"
                @change="filtraUnis()"
              >
                <option selected value="" hidden disabled>Selecione seu estado</option>
                <option value="AC">Acre</option>
                <option value="AL">Alagoas</option>
                <option value="AP">Amapá</option>
                <option value="AM">Amazonas</option>
                <option value="BA">Bahia</option>
                <option value="CE">Ceará</option>
                <option value="DF">Distrito Federal</option>
                <option value="ES">Espírito Santo</option>
                <option value="GO">Goiás</option>
                <option value="MA">Maranhão</option>
                <option value="MG">Minas Gerais</option>
                <option value="MT">Mato Grosso</option>
                <option value="MS">Mato Grosso do Sul</option>
                <option value="PA">Pará</option>
                <option value="PB">Paraíba</option>
                <option value="PR">Paraná</option>
                <option value="PE">Pernambuco</option>
                <option value="PI">Piauí</option>
                <option value="RJ">Rio de Janeiro</option>
                <option value="RN">Rio Grande do Norte</option>
                <option value="RS">Rio Grande do Sul</option>
                <option value="RO">Rondônia</option>
                <option value="RR">Roraima</option>
                <option value="SC">Santa Catarina</option>
                <option value="SP">São Paulo</option>
                <option value="SE">Sergipe</option>
                <option value="TO">Tocantins</option>
              </select>
            </div>

            <div class="form-group">
              <label for="universidade">Instituição de Ensino Superior (IES)</label>
              <select
                class="form-control"
                id="universidade"
                aria-labelledby="uniHelp"
                @change="updateCampi();"
                v-model="pet_uni"
                required
              >
                <option v-for="uni in universidades" :key="uni.id" :value="uni">{{uni.nome}}</option>
              </select>
              <small id="uniHelp" class="form-text text-muted">
                Caso sua universidade ou campus ainda não estejam cadastrados,
                envie um email para <a href="mailto:petbcc@ufscar.br">petbcc@ufscar.br</a>
              </small>
            </div>

            <div class="form-group">
              <label for="campus">Campus</label>
              <select class="form-control" id="campus" v-model="pet_campus" required>
                <option v-for="campus in campi" :key="campus.id" :value="campus">{{campus.nome}}</option>
              </select>
            </div>

            <div class="form-group row mt-2">
              <label class="col-sm-2 col-form-label">Cidade</label>
              <label
                class="col-sm-10 col-form-label"
              >{{pet_campus.cidade ? pet_campus.cidade + " - " + pet_uni.estado : ""}}</label>
            </div>

            <div class="form-group">
              <label for="map">Coloque um ponto perto de onde seu PET fica:</label>
              <div id="map"></div>
              <p class="small">Pressione CTRL para usar o zoom</p>

              <div class="row no-gutters justify-content-between mt-3">
                <div class="col-md-5">
                  <label for="latidude">Latitude</label>
                  <input
                    id="latitude"
                    class="form-control"
                    type="text"
                    placeholder="Latitude"
                    disabled
                  />
                </div>
                <div class="col-md-5">
                  <label for="latidude">Longitude</label>
                  <input
                    id="longitude"
                    class="form-control"
                    type="text"
                    placeholder="Longitude"
                    disabled
                  />
                </div>
              </div>
            </div>

            <div class="form-group">
              <label for="ano_criacao">Ano de criação</label>
              <input
                type="number"
                class="form-control"
                id="ano_criacao"
                placeholder="Ex: 2009"
                required
              />
              <small
                id="anoHelp"
                class="form-text text-muted"
              >Ano no qual o edital da criação de seu grupo foi publicado como aprovado (apenas o ano).</small>
            </div>

            <div class="form-group">
              <label for="eixo">Eixo no qual seu PET se encaixa</label>
              <select class="form-control" id="eixo" required>
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
              <small
                id="eixoHelp"
                class="form-text text-muted"
              >Em caso de dúvidas, consulte o Edital em que seu grupo foi aprovado, ou se for o caso, a Portaria que diz respeito a união do Programa de Educação Tutorial e o Conexões de Saberes.</small>
            </div>

            <div class="form-group">
              <label for="tematica">Temática do PET</label>
              <input
                type="text"
                class="form-control"
                id="tematica"
                placeholder="Ex: Desenvolvimento de software"
              />
              <small id="eixoHelp" class="form-text text-muted">
                Alguns grupos possuem uma Temática, definida em seu edital de criação. Caso seu grupo não possua, deixe o campo
                <b>em branco</b>.
              </small>
            </div>

            <div class="form-group">
              <label for="logo">Logo</label>
              <input type="file" class="form-text" id="logo" ref="logo" />
              <small
                id="logoHelp"
                class="form-text text-muted"
              >Insira uma imagem com o logo do seu PET, preferencialmente transparente, caso seu grupo possua.</small>
            </div>

            <hr class="my-4" />

            <div class="form-group">
              <label for="site_pet">Site do seu PET</label>
              <input
                type="text"
                class="form-control"
                id="site_pet"
                aria-describedby="sitePetHelp"
                placeholder="Ex: https://petbcc.ufscar.br/"
              />
              <small id="sitePetHelp" class="form-text text-muted">
                Link para o site ou blog do seu PET. Caso seu grupo não possua, deixe o campo
                <b>em branco</b>.
              </small>
            </div>

            <div class="form-group">
              <label for="site_pet_ies">Site institucional do seu PET</label>
              <input
                type="text"
                class="form-control"
                id="site_pet_ies"
                aria-describedby="siteInstHelp"
                placeholder="Ex: http://icedf.ufam.edu.br/programas-academicos/pet"
              />
              <small id="siteInstHelp" class="form-text text-muted">
                Link para uma página de sua IES sobre seu PET. Caso seu grupo não possua, deixe o campo
                <b>em branco</b>.
              </small>
            </div>

            <div class="form-group">
              <label for="facebook">Facebook</label>
              <input
                type="text"
                class="form-control"
                id="facebook"
                aria-describedby="faceHelp"
                placeholder="Ex: https://www.facebook.com/petbcc/"
              />
              <small id="faceHelp" class="form-text text-muted">
                Link para uma
                <b>página</b> do Facebook sobre seu PET, caso possua. Não inclua perfis.
              </small>
            </div>

            <div class="form-group">
              <label for="instagram">Instagram</label>
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="instaPrepend">@</span>
                </div>
                <input
                  type="text"
                  class="form-control"
                  id="instagram"
                  aria-describedby="instaHelp"
                  placeholder="Ex: petbcc.ufscar"
                />
              </div>
              <small id="instaHelp" class="form-text text-muted">
                Link para um perfil no Instagram, caso seu PET possua. Não inclua o
                <b>@</b> no texto.
              </small>
            </div>

            <div class="form-group">
              <label for="twitter">Twitter</label>
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="twitterPrepend">@</span>
                </div>
                <input
                  type="text"
                  class="form-control"
                  id="twitter"
                  aria-describedby="twitterHelp"
                  placeholder="Ex: petbcc"
                />
              </div>
              <small id="twitterHelp" class="form-text text-muted">
                Link para um perfil no Twitter, caso seu PET possua. Não inclua o
                <b>@</b> no texto.
              </small>
            </div>

            <div class="form-group">
              <label for="youtube">Canal no YouTube</label>
              <input
                type="text"
                class="form-control"
                id="youtube"
                aria-describedby="ytHelp"
                placeholder="Ex: https://www.youtube.com/channel/UCyoSac6aP0aGWMDw0XnsnqA/"
              />
              <small
                id="ytHelp"
                class="form-text text-muted"
              >Link para um canal no YouTube, caso seu PET possua.</small>
            </div>

            <div class="form-group">
              <label for="outras_midias">Outras redes sociais</label>
              <input
                type="text"
                class="form-control"
                id="outras_midias"
                aria-describedby="outrosHelp"
                placeholder="Ex: LinkedIn: https://www.linkedin.com/company/pet-bcc-ufscar"
              />
              <small
                id="outrosHelp"
                class="form-text text-muted"
              >Caso seu grupo possua outras redes sociais que não estejam no formulário.</small>
            </div>

            <div class="form-group">
              <recaptcha @error="onError" @success="onSuccess" />
              <button type="submit" class="btn btn-primary">Enviar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="container" v-if="this.api_response.id">
      <div class="row no-gutters justify-content-center align-items-center sucesso">
        <div class="col-md-8 text-center">
          <h1>
            <font-awesome-icon class="mr-2" :icon="['fas', 'check-circle']" />Sucesso!
          </h1>
          <h5 class="mt-4">O grupo {{this.api_response.nome}} foi cadastrado!</h5>
          <h5 class="mt-4">
            Os dados estarão disponíveis <nuxt-link class="mr-1" :to="'/pets/' + this.api_response.id">neste link</nuxt-link>assim que forem verificados! (:
          </h5>
        </div>
      </div>
    </div>
    <div class="modal fade" id="modalErro" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">
              <font-awesome-icon class="mr-2" :icon="['fas', 'exclamation-triangle']" />Ocorreu um erro
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body text-center">
            <p>Verifique se seu PET já não está cadastrado e tente novamente mais tarde.</p>
            <p class="small">
               Erro: {{this.api_response.message}}<br />
              Precisa de ajuda?
              <br />Envie um email para
              <a href="mailto:petbcc@ufscar.br">petbcc@ufscar.br</a>
            </p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  head: {
    title: "Cadastro",
    link: [
      {
        rel: "stylesheet",
        href: `https://api.mapbox.com/mapbox-gl-js/v2.0.0/mapbox-gl.css`,
      },
    ],
  },
  data() {
    return {
      universidades: [],
      campi: [],
      pet_uni: [],
      pet_campus: [],
      pet_existente: null,
      api_response: {},
      map: {},
    };
  },
  methods: {
    validaEmail() {
      const email_form = document.getElementById("email_pet");

      axios
        .get(process.env.baseURL + `/pets?email_pet=${email_form.value}`)
        .then(res => {
          if (res.data[0]) {
            email_form.setCustomValidity("Email já cadastrado!");
            this.pet_existente = res.data[0].id;
          }
          else {
            email_form.setCustomValidity("");
            this.pet_existente = null;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    updateCampi() {
      this.pet_campus = [];
      axios
        .get(process.env.baseURL + "/campi?universidade.id=" + this.pet_uni.id + "&latitude_ne=0&_sort=nome:ASC")
        .then((res) => {
          this.campi = [...res.data];
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getCenter() {
      return [this.pet_campus.longitude, this.pet_campus.latitude];
    },
    async filtraUnis() {
      const estado = document.getElementById("estado").value;

      if (estado) {
        const universidades = await axios.get(
          process.env.baseURL + "/universidades?campi_gt=0&campi.latitude_ne=0&estado=" + estado + "&_sort=nome:ASC"
        );

        this.universidades = universidades.data;
      }
    },
    send(token) {
      const formElement = document.querySelector("form");
      const request = new XMLHttpRequest();
      const formData = new FormData();
      const formElements = formElement.elements;
      const data = {};
      const gambiarra = this;

      // percorre todos os elementos
      for (let i = 0; i < formElements.length; i++) {
        const currentElement = formElements[i];

        if (!["submit", "file"].includes(currentElement.type)) {
          if ((currentElement.id === "latitude" || currentElement.id === "longitude") && !currentElement.value) {
            data[currentElement.id] = this.pet_campus[currentElement.id] + (Math.random() * (0.001) - 0.0005);
          } else if (currentElement.id === "campus") {
            data[currentElement.id] = this.pet_campus.id;
          } else if (currentElement.id.includes("recaptcha")) {
            data["token"] = currentElement.value;
          } else if (currentElement.id === "grupo_institucional") {
            data[currentElement.id] = currentElement.checked ? "true" : "false";
          } else if (currentElement.id === "grupo_conexoes") {
            data[currentElement.id] = currentElement.checked ? "true" : "false";
          } else {
            data[currentElement.id] = currentElement.value;
          }
        } else if (currentElement.type === "file") {
          const file = currentElement.files[0];
          if (file) {
            formData.append(`files.${currentElement.id}`, file, file.name);
          }
        }
      }

      // salva o pet como rascunho
      data["published_at"] = null;

      request.onreadystatechange = function () {
        if (this.readyState == XMLHttpRequest.DONE) {
          // usando uma gambiarra porque 'this' eh definido apenas para o escopo interno
          // gambiarra recebe o 'this' de fora da funcao para acessar a showResponse()
          gambiarra.showResponse(JSON.parse(this.responseText));
        }
      };

      formData.append("data", JSON.stringify(data));
      request.open("POST", process.env.baseURL + `/pets`);
      request.send(formData);
    },
    showResponse(res) {
      this.api_response = res;
      if (res.statusCode) {
        $("#modalErro").modal("show");
      }
    },
    async onSubmit() {
      try {
        const token = await this.$recaptcha.getResponse();
        await this.$recaptcha.reset();
      } catch (error) {
        console.log("Login error: ", error);
      }
    },
    onError(error) {
      console.log("Error happened: ", error);
    },
    onSuccess(token) {
      this.send(token);
    },
  },
  mounted() {
    const mapboxgl = require("mapbox-gl");

    let map = this.map;
    let marker = new mapboxgl.Marker();
    const gambiarra = this;

    map = new mapboxgl.Map({
      accessToken: process.env.mbToken,
      container: "map", // <div id="map"></div>
      style: "mapbox://styles/mapbox/streets-v11?optimize=true",
      center: [-52.8448484, -15.028203],
      zoom: 3,
    });

    map.addControl(new mapboxgl.NavigationControl());

    map.on("load", function () {
      map.on("click", function (e) {
        let point = e.lngLat;
        document.getElementById("latitude").value = point["lat"];
        document.getElementById("longitude").value = point["lng"];
        marker.remove();
        marker.setLngLat([point["lng"], point["lat"]]).addTo(map);
      });

      map.on("wheel", (event) => {
        if (event.originalEvent.ctrlKey) {
          event.originalEvent.preventDefault();
          if (!map.scrollZoom._enabled) map.scrollZoom.enable();
        } else {
          if (map.scrollZoom._enabled) map.scrollZoom.disable();
        }
      });
    });

    document.getElementById("campus").addEventListener("change", function () {
      map.flyTo({
        center: gambiarra.getCenter(),
        zoom: 15,
        essential: true,
        speed: 3,
        curve: 2,
      });
    });

    if (process.client) {
      this.$recaptcha.init();
    }
  },
};
</script>

<style>
.intro-title {
  color: var(--accent);
  margin: 2rem 0 1rem 0;
  letter-spacing: 2px;
  font-weight: 600;
  text-align: center;
}

.form-control::-webkit-input-placeholder {
  color: #aaa;
}
.form-control:-moz-placeholder,
.form-control::-moz-placeholder,
.form-control::placeholder,
.form-control:-ms-input-placeholder {
  color: #aaa;
}

#map {
  width: 100%;
  height: 30rem;
}

.sucesso {
  min-height: 50vh;
}

.sucesso h1 {
  color: #333;
}

.fa-exclamation-triangle {
  color: #e00;
}

.fa-check-circle {
  color: #0a0;
}
</style>