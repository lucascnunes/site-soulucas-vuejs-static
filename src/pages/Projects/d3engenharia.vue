<template>
  <div class="container">
    <h1 class="mb-5">personal car pf</h1> 
    <a target="_blank" href="https://d3engenharia.com.br?utm_source=soulucas.com&utm_content=link_projeto&utm_medium=referral">https://d3engenharia.com.br</a>
    <p class="mt-5 mb-10">
      Projeto desenvolvido para <strong>D3 Engenharia</strong> um escritório de engenharia de Volta Redonda, Rio de Janeiro.
      <br>
      A plataforma foi criada em 2018 como site institucional para a empresa e apresentação de suas serviços realizados e oferecidos.
    </p>
    <p class="text-center">
      <img v-lazyload data-err="/error.png" data-src="/projetos/d3engenharia/logo.svg" src="/projetos/d3engenharia/logo.svg" alt="d3engenharia" class="project-logo">
      <img v-gallery:d3 v-lazyload data-err="/error.png" data-src="/projetos/d3engenharia/hero.png" src="/projetos/d3engenharia/hero.png" alt="d3engenharia">
    </p>
    <h2 class="mt-10">
      Empresa
    </h2>
    <p>
      A D3 Engenharia e Construções é uma empresa da região sul fluminense que atua nos seguimentos de edificações e energias com os serviços de Projetos, Reformas, Construções, Manutenções Industriais, Manutenções Residenciais, Sistemas de captação de energia solar, Administração de Obras, Planejamento, Legalização na Prefeitura e Projetos 3D.
    </p>
    <h2 class="mt-10">
      Plataforma
    </h2>
    <p class="mb-10">
      A mesma foi feita utilizando <strong>Laravel</strong> para melhorar o SEO e a estilização foi feita utilizando <strong>Bootstrap</strong>. <br>
      Em sua administração o cliente possui controle total da exibição de imagens dividos em obras realizadas e serviços oferecidos.
    </p>
    <img v-gallery:d3 v-lazyload data-err="/error.png" data-src="/projetos/d3engenharia/fullscreen.png" src="/projetos/d3engenharia/fullscreen.png" alt="d3engenharia">
  </div>
</template>

<style scoped>
.container {
  margin: 120px 40px;
  color: #fff;
  font-family: "Montserrat", sans-serif;
}
h1 {
  font-family: 'Pacifico', cursive;
  font-size: 50px;
  margin-bottom: 0;
}
@media screen and (max-width: 600px) {
  h1 {
    font-size: 30px;
  }
}
.container img:not(.project-logo) {
  width: 100%;
  height: auto;
  border-radius: 30px;
}
.project-logo {
  margin: 0 auto;
  width: 60%;
}
@media screen and (max-width: 600px) {
  .project-logo {
    width: 100%;
  }
}
p {
  line-height: 30px;
}
ul li {
  line-height: 30px;
}
</style>