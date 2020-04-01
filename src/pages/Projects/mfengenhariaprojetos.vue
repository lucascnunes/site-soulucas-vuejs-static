<template>
  <div class="container">
    <h1 class="mb-5">mf engenharia projetos</h1> 
    <a target="_blank" href="https://mfengenhariaprojetos.com?utm_source=soulucas.com&utm_content=link_projeto&utm_medium=referral">https://mfengenhariaprojetos.com</a>
    <p class="mt-5 mb-10">
      Projeto desenvolvido para <strong>MF Engenharia Projetos</strong> um escritório de engenharia de Volta Redonda, Rio de Janeiro.
      <br>
      Foi requistado pelo cliente um novo layout e exibição de fotografias de obras realizadas e com isso em 2018 foi desenvolvido um novo site institucional para divulgação da empresa e apresentação dos serviços oferecidos pela mesma, com fotografias e vídeo.
    </p>
    <p class="text-center">
      <img v-lazy="'/projetos/mfengenhariaprojetos/logo.svg'" alt="mfengenhariaprojetos" class="project-logo">
      <a class="img-fluid" href="/projetos/mfengenhariaprojetos/hero.png" rel="noopener noreferrer" target="_blank"><img v-lazy="'/projetos/mfengenhariaprojetos/hero.png'" alt="mfengenhariaprojetos"></a>
    </p>
    <h2 class="mt-10">
      Empresa
    </h2>
    <p>
      Fundada em 1999 a MF Engenharia Projetos especializada em projetos de estruturas em concreto armado, metálica e mista que tenham estabilidade preconizadas pela norma técnica e custo desejado pelo investidor focados em otimizar os custos com fácil manutenção e sem transtornos para um projeto completo também elaboramos projetos de instalações elétricas, sanitárias, hidráulicas, de dados e telefonia.
    </p>
    <h2 class="mt-10">
      Plataforma
    </h2>
    <p class="mb-10">
      A mesma foi feita utilizando <strong>Laravel</strong> para melhorar o SEO e a estilização foi feita utilizando <strong>Bootstrap</strong>. <br>
      Em sua administração o cliente possui controle total da exibição de imagens dividos em obras realizadas e serviços oferecidos.
    </p>
    <a class="img-fluid" href="/projetos/mfengenhariaprojetos/fullscreen.png" rel="noopener noreferrer" target="_blank"><img v-lazy="'/projetos/mfengenhariaprojetos/fullscreen.png'" alt="mfengenhariaprojetos"></a>
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
}
p {
  line-height: 30px;
}
ul li {
  line-height: 30px;
}
</style>