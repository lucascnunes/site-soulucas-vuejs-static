<template>
  <div class="container">
    <h1 class="mb-5">be the hero</h1>
    <a target="_blank" href="https://github.com/lucascnunes/be-the-hero-omnistack-11?utm_source=soulucas.com.br&utm_content=link_projeto&utm_medium=referral">https://github.com/lucascnunes/be-the-hero-omnistack-11</a>
    <p class="mt-5 mb-10">A aplicação em Be The Hero foi feita durante a <strong>11ª Semana Omnistack da Rocketseat</strong> nos dias 23/03/2020 à 27/03/2020. <br>
    A mesma visa conectar pessoas que desejam fazer contribuições monetárias a ONG's (Organizações não governamentais) que precisam de ajuda. <br>
    Durante a semana de aula foram desenvolvidos o backend em Node/Express, frontend da aplicação web em React e a aplicação mobile em React-native.</p>
    <img v-lazy="'/projetos/omnistack/logo.svg'" alt="Be the hero" class="fluid-img mb-10">
    <a class="img-fluid" href="/projetos/omnistack/figma.png" rel="noopener noreferrer" target="_blank"><img v-lazy="'/projetos/omnistack/figma.png'" alt="Be the hero - Figma"></a>
    <div class="legenda">Layout criado no Figma e fornecido pela Rocketseat</div>
    <div class="float-right m-10 text-center">
      <video width="300" height="600" controls>
          <source :src="'/projetos/omnistack/emulador.webm'" type="video/webm">
          Your browser does not support the video tag.
      </video><br>
    <span class="legenda">Captura de tela do emulador</span>
    </div>
    <p class="mt-10">O backend foi feito para servir o frontend com uma REST API permitindo o cadastro e autenticação da ONG através de um ID.<br>
    Com isso a ONG poderia adicionar e remover casos solicitando ajuda financeira para os mesmos. <br>
    O aplicativo mobile focou a utilização de usuários visitantes que procuram casos publicados pelas ONGs para ajudar monetariamente.</p>
    <hr class="mt-10" style="width: 50%">
    <h2 class="mt-5">Modificações</h2>
    <p>Com o intúito de aprender o máximo possível durante essa semana eu adicionei algumas modificações trazendo a aplicação para o mais próximo do idealizado (veja o figma) e implementando funções que levariam a aplicação para o "nível" de produção.</p>
    <ul class="mb-5">
      <li>Adicionei autenticação com email/senha, com JWT armazenando em cookie httpOnly;</li>
      <li>Adicionei as funcionalidades de edição de conta, remoção da conta, edição de casos, envio de e-mail de confirmação de cadastro, paginação dos casos no perfil da ong, entre muitas outras;</li>
      <li>Do frontend criado juntamente com a aula em <strong>React</strong> também fiz um frontend em <strong>Vue</strong>;</li>
      <li>O restante das mudanças e como clonar a aplicação e roda-la em sua máquina você pode pegar em meu <a href="https://github.com/lucascnunes/be-the-hero-omnistack-11" target="_blank" rel="noopener noreferrer">GitHub</a>.</li>
    </ul>
    <a class="img-fluid" href="/projetos/omnistack/logon.png" rel="noopener noreferrer" target="_blank"><img v-lazy="'/projetos/omnistack/logon.png'" alt="Be the hero - screen"></a>
    <a class="img-fluid" href="/projetos/omnistack/register.png" rel="noopener noreferrer" target="_blank"><img v-lazy="'/projetos/omnistack/register.png'" alt="Be the hero - screen"></a>
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
.container .legenda {
  text-align: center;
  font-size: 12px;
}
.float-right {
  float:right;
}
.img-fluid{
  width: 20%;
  height: auto;
}
p {
  line-height: 30px;
}
ul li {
  line-height: 30px;
}
</style>