<template>
  <div class="container">
    <h1 class="mb-5">clube de tiro cicuta</h1> 
    <a target="_blank" href="https://clubecicuta.com.br?utm_source=soulucas.com.br&utm_content=link_projeto&utm_medium=referral">https://clubecicuta.com.br</a>
    <p class="mt-5 mb-10">
      Projeto para o <strong>Clube de Tiro Cicuta</strong> de Barra Mansa, Rio de Janeiro.
      <br>
      A plataforma já se encontra em sua 4ª versão, lançada em 2017 e mantido o layout somente com atualizações em sua Área de atletas.
      <br>
      A mesma possui área de gerenciamento permitindo que a adminstração do clube faça:
        <ul>
          <li>Controle da ficha de associados</li>
          <li>Contabilidade de anuidades</li>
          <li>Agendamento de eventos</li>
          <li>Controle de eventos</li>
          <li>Emissão de declarações</li>
          <li>Validação de declarações online</li>
          <li>Listagem e exibição de modalidades</li>
          <li>FAQ</li>
          <li>Repositório de arquivos para download</li>
          <li>Exibição de corpo administrativo</li>
          <li>e mais..</li>
        </ul>
    </p>
    <p class="text-center">
      <img v-lazyload data-err="/error.png" data-src="/projetos/cicuta/logo.svg" src="/projetos/cicuta/logo.svg" alt="cicuta" class="project-logo">
      <img v-gallery:cicuta v-lazyload data-err="/error.png" data-src="/projetos/cicuta/hero.png" src="/projetos/cicuta/hero.png" alt="cicuta">
    </p>
    <h2 class="mt-10">
      Sobre o clube
    </h2>
    <p>
      O Clube Cicuta surgiu como uma sociedade composta aproximadamente de 30 associados, todos que tem permissão para o uso de arma de fogo são credenciados pelo exercito e passam por várias avaliações e qualificações para obtenção desta licença, estes sócios são formados principalmente por profissionais liberais, comerciantes e funcionários da indústria.
    </p>
    <h2 class="mt-10">
      Plataforma
    </h2>
    <p class="mb-10">
      A mesma foi feita utilizando <strong>Laravel</strong> para melhorar o SEO e a estilização foi feita utilizando <strong>Bootstrap</strong>. <br>
      Para pagamento de anuidades é utilizado o pacote da <strong><a href="https://dev.gerencianet.com.br/docs/gerar-boleto" rel="noopener noreferer">Gerencianet</a></strong> para geração de boletos, possibilitando assim que o próprio associado emita seu boleto de pagamento anual.
    </p>
    <img v-gallery:cicuta v-lazyload data-err="/error.png" data-src="/projetos/cicuta/fullscreen.png" src="/projetos/cicuta/fullscreen.png" alt="cicuta">
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
@media screen and (max-width: 600px) {
  .project-logo {
    width: 60% !important;
  }
}
p {
  line-height: 30px;
}
ul li {
  line-height: 30px;
}
</style>