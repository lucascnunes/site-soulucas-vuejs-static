<template>
  <div class="container">
    <h1 class="mb-5" style="color: #fff">buzzburgers</h1> 
    <a target="_blank" href="https://buzzburgers.com.br?utm_source=soulucas.com.br&utm_content=link_projeto&utm_medium=referral">https://buzzburgers.com.br</a>
    <p class="mt-5 mb-10">
      Projeto desenvolvido para <strong>BUZZ BURGERS</strong> uma hamburgueria senssacional de Angra dos Reis, Rio de Janeiro.
      <br>
      A plataforma foi criada em 2018 como site promocional e institucional e oferece o controle do cardápio virtual com cadastro de promoções, e exibição de informações da hamburgueria.
    </p>
    <p class="text-center">
      <img v-lazyload data-err="/error.png" data-src="/projetos/buzzburgers/logo.png" src="/projetos/buzzburgers/logo.png" alt="buzzburgers" class="project-logo"/>
      <img v-gallery:buzz v-lazyload data-err="/error.png" data-src="/projetos/buzzburgers/hero.png" src="/projetos/buzzburgers/hero.png" alt="buzzburgers"/>
    </p>
    <h2 class="mt-10">
      Missão
    </h2>
    <p>
      Combinar experiência na geração de documentações para o Exército Brasileiro com a agilidade do mundo digital para gerar documentações rápidas e disponibilizando-as para imprimir aonde estiver, com as dicas e informações atualizadas que o CAC e o novato no esporte do tiro precisam.
    </p>
    <h2 class="mt-10">
      Plataforma
    </h2>
    <p class="mb-10">
      A mesma foi feita utilizando <strong>Laravel</strong> para melhorar o SEO e a estilização foi feita utilizando <strong>Bootstrap</strong>. <br>
      Não foi feito sistema de pedido de lanches pois a empresa utiliza aplicativo de terceiros para o mesmo.
    </p>
    <img v-gallery:buzz v-lazyload data-err="/error.png" data-src="/projetos/buzzburgers/fullscreen.png" src="/projetos/buzzburgers/fullscreen.png" alt="buzzburgers"/>
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
.container img {
  width: 100%;
  height: auto;
  border-radius: 30px;
}
.project-logo {
  margin: 0 auto;
  width: 30% !important;
}
p {
  line-height: 30px;
}
ul li {
  line-height: 30px;
}
</style>