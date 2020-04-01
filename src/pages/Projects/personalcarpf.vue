<template>
  <div class="container">
    <h1 class="mb-5">personal car pf</h1> 
    <a target="_blank" href="https://personalcarpf.com.br?utm_source=soulucas.com&utm_content=link_projeto&utm_medium=referral">https://personalcarpf.com.br</a>
    <p class="mt-5 mb-10">
      Projeto desenvolvido para <strong>Personal Car Pai & Filhos</strong> de Volta Redonda, Rio de Janeiro.
      <br>
      A plataforma foi criada em 2018 para agendamento online de contratação de serviços prestados pela empresa e apresentação de serviços oferecidos por parceiros.
    </p>
    <p class="text-center">
      <img v-lazy="'/projetos/personalcarpf/logo.svg'" alt="personalcarpf" class="project-logo">
      <a class="img-fluid" href="/projetos/personalcarpf/hero.png" rel="noopener noreferrer" target="_blank"><img v-lazy="'/projetos/personalcarpf/hero.png'" alt="personalcarpf"></a>
    </p>
    <h2 class="mt-10">
      Empresa
    </h2>
    <p>
        A Personal Car é uma empresa idealizada para oferecer soluções e comodidade aos seus clientes, com objetivo de atuar como uma empresa flexivel e parceira, buscando redirecionar o atendimento de acordo com as necessidades de cada cliente, tudo de forma exclusiva e eficiente.
    </p>
    <h2 class="mt-10">
      Plataforma
    </h2>
    <p class="mb-10">
      A mesma foi feita utilizando <strong>Laravel</strong> para melhorar o SEO e a estilização foi feita utilizando <strong>Bootstrap</strong>. <br>
      Em sua administração o cliente possui controle total de agendamentos e confirmações automatizadas por e-mail, e da exibição de serviços oferecidos.
    </p>
    <a class="img-fluid" href="/projetos/personalcarpf/fullscreen.png" rel="noopener noreferrer" target="_blank"><img v-lazy="'/projetos/personalcarpf/fullscreen.png'" alt="personalcarpf"></a>
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
  filter: invert(1);
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