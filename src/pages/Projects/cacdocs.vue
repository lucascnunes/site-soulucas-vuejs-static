<template>
  <div class="container">
    <h1 class="mb-5">cacdocs</h1> 
    <a target="_blank" href="https://cacdocs.com.br?utm_source=soulucas.com.br&utm_content=link_projeto&utm_medium=referral">https://cacdocs.com.br</a>
    <p class="mt-5 mb-10">
      Projeto pessoal de geração de documentação para Colecionadores, Atiradores e Caçadores cadastrados no Exército Brasileiro e para iniciantes no esporte do tiro esportivo.
      <br>
      Pensando no entusiasta do tiro, quis atender a demanda pela transparência de informações e diminuição da burocracia.
      <br>
      A plataforma foi criada em 2019 e oferece a geração de documentações de 2 modos:
        <ul>
          <li>Passo a passo</li>
          <p>O sistema gerará a documentação solicitada pelo Exército utilizando da ficha de informações do usuário e documentos que exigam geração manual, como a Guia de Recolhimento da União(GRU), o mesmo exibirá um passo a passo de como emiti-lo.</p>
          <li>Completo</li>
          <p>O diferencial é que os documentos que exigem geração manual são feitos pelo <strong>cacdocs</strong> e disponibilizados na página de visualização do pedido para impressão.</p>
        </ul>
    </p>
    <p class="text-center">
      <img v-lazyload data-err="/error.png" data-src="/projetos/cacdocs/logo.svg" src="/projetos/cacdocs/logo.svg" alt="cacdocs" class="project-logo">
      <img v-gallery:cacdocs v-lazyload data-err="/error.png" data-src="/projetos/cacdocs/hero.png" src="/projetos/cacdocs/hero.png" alt="cacdocs">
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
      A mesma foi feita utilizando <strong>Laravel</strong> e para melhorar o SEO somente alguns componentes utilizam renderização com <strong>Vue</strong>. <br>
      A estilização foi feita utilizando <strong>Bootstrap</strong>. <br>
      Para pagamento é utilizado o pacote <strong><a href="https://github.com/artistas/laravel-pagseguro" rel="noopener noreferer">Artistas - Laravel-pagseguro</a></strong> disponível no GitHub, possibilitando assim o <strong>checkout transparente</strong> e <strong>geração de boletos</strong>.
    </p>
    <img v-gallery:cacdocs v-lazyload src="/projetos/cacdocs/fullscreen.png" data-err="/error.png" data-src="/projetos/cacdocs/fullscreen.png" alt="cacdocs">
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