<template>
  <div class="container emp-profile">
    <form method="post">
      <div class="row">
        <div class="col-md-4">
          <div class="profile-img">
            <img
              src="https://avatars2.githubusercontent.com/u/17068163?s=200&v=4"
              alt
            />
          </div>
        </div>
        <div class="col-md-6">
          <div class="profile-head">
            <h5>Nome do PET</h5>
            <h6>Universidade</h6>
            <h6> Campus </h6>
            <ul class="nav nav-tabs" id="myTab" role="tablist">
              <li class="nav-item">
                <a
                  class="nav-link active"
                  id="home-tab"
                  data-toggle="tab"
                  href="#home"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                >Dados</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          <div class="profile-work">
            <p>CONTATOS</p>
            <a href>E-mail</a>
            <br />
            <a href>Site do PET</a>
            <br />
            <a href>Site do PET na UFSCar</a>
  			<br />
            <a href>Instagram</a>
            <br />
            <a href>Facebook</a>
            <br />
            <a href>Twitter</a>
            <br />
            <a href>YouTube</a>
            <br />
            <a href>Outras redes</a>
            <br />
          </div>
        </div>
        <div class="col-md-8">
          <div class="tab-content profile-tab" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <div class="row">
                <div class="col-md-6">
                  <label>Cidade</label>
                </div>
                <div class="col-md-6">
                  <p>Rock Lee!!!</p>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <label>Estado</label>
                </div>
                <div class="col-md-6">
                  <p>Gaara!!!</p>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <label>Temática</label>
                </div>
                <div class="col-md-6">
                  <p>Linkin Park</p>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <label>Ano de criação</label>
                </div>
                <div class="col-md-6">
                  <p>Numb</p>
                </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<style scoped>
body {
  background: -webkit-linear-gradient(left, #3931af, #00c6ff);
}
.emp-profile {
  padding: 3%;
  margin-top: 3%;
  margin-bottom: 3%;
  border-radius: 0.5rem;
  background: #fff;
}
.profile-img {
  text-align: center;
}
.profile-img img {
  width: 70%;
  height: 100%;
}
.profile-img .file {
  position: relative;
  overflow: hidden;
  margin-top: -20%;
  width: 70%;
  border: none;
  border-radius: 0;
  font-size: 15px;
  background: #212529b8;
}
.profile-img .file input {
  position: absolute;
  opacity: 0;
  right: 0;
  top: 0;
}
.profile-head {
	margin-top: 30px;
}
.profile-head h5 {
  color: #333;
  font-size: 40px;
}
.profile-head h6 {
  color: #0062cc;
  font-size: 25px;
}
.profile-head .nav-tabs {
  margin-bottom: 25%;
}
.profile-head .nav-tabs .nav-link {
  font-weight: 600;
  border: none;
  margin-top: 50px;
  margin-bottom: -150px;
}
.profile-head .nav-tabs .nav-link.active {
  border: none;
  border-bottom: 2px solid #0062cc;
}
.profile-work {
  padding: 14%;
  margin-top: -15%;
}
.profile-work p {
  font-size: 12px;
  color: #818182;
  font-weight: 600;
  margin-top: 10%;
}
.profile-work a {
  text-decoration: none;
  color: #495057;
  font-weight: 600;
  font-size: 14px;
}
.profile-work ul {
  list-style: none;
}
.profile-tab label {
  font-weight: 600;
}
.profile-tab p {
  font-weight: 600;
  color: #0062cc;
}
</style>