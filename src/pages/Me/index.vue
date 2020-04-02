<template>
  <div class="container noselect">
    <div class="wrapper">
      <div class="chat" style="flex-grow: 2">
        <div class="user animated fadeInDown">
          <img src="../../assets/eu.jpeg" alt="Eu">
          <span class="status animated fadeInUp delay-1s"><span class="status-bola"></span><span class="status-texto">disponível</span></span>
        </div>
        <div class="baloes">
          <div class="balao animated fadeInLeft delay-1s">
            Olá! Aqui é o Lucas falando,
          </div>
          <div class="balao animated fadeInLeft delay-2s">
            Moro em <strong>Volta Redonda</strong>, Rio de Janeiro, sou <strong>dentista</strong> e possuo um <router-link to="/consultorio">consultório particular</router-link>.
          </div>
          <div class="balao animated fadeInLeft delay-3s">
            Tenho 31 anos e sou autodidata no mundo da programação, comecei com programação em 2008 e hoje em dia me considero um programador full stack 
          </div>
          <div class="balao animated fadeInLeft delay-4s">
            Veja em meu <a href="https://github.com/lucascnunes" rel="noopener noreferrer" target="_blank">GitHub</a> meus últimos projetos e abaixo a stack que utilizo atualmente:
          </div>
        </div>
        <div class="icones animated fadeIn delay-5s">
          <img class="icone animated fadeIn delay-6s" src="/icones/laravel.png" alt="Laravel" title="Laravel">
          <img class="icone animated fadeIn delay-7s" src="/icones/vue.png" alt="Vue" title="Vue">
          <img class="icone animated fadeIn delay-8s" src="/icones/node.png" alt="Node" title="Node">
          <img class="icone animated fadeIn delay-9s" src="/icones/express.png" alt="Express" title="Express">
          <img class="icone animated fadeIn delay-10s" src="/icones/react.png" alt="React" title="React">
          <img class="icone animated fadeIn delay-11s" src="/icones/adonis.jpeg" alt="Adonis" title="Adonis">
        </div>
      </div>
      <div class="chat">
        <div class="baloes">
          <div class="balao animated fadeInRight delay-12s">
            Se quiser falar comigo utilize uma das opções abaixo ou me envie um <a href="mailto:contato@soulucas.com.br">e-mail</a>, lhe responderei o mais rápido possível.
            <!-- pelo formulário na página <router-link to="/contato">contato</router-link> -->
          </div>
          <div class="links animated fadeInUp delay-13s">
            <a href="https://github.com/lucascnunes" rel="noopener noreferrer" target="_blank" class="link">GitHub</a>
            <a href="https://www.linkedin.com/in/lucaspnunes/" rel="noopener noreferrer" target="_blank" class="link">LinkedIn</a>
            <a href="https://www.facebook.com/lucas.parreira.nunes" rel="noopener noreferrer" target="_blank" class="link">Facebook</a>
            <a href="https://api.whatsapp.com/send?1=pt_BR&phone=+5524988367933&text=Ol%C3%A1%20Lucas,%20gostaria%20de%20um%20orçamento%20para%20meu%20site" rel="noopener noreferrer" target="_blank" class="link">Whatsapp</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin: 80px 30px;
  margin-bottom: 70px;
}
.wrapper {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  position: relative;
}
img {
  width: 80px;
  border-radius: 50%;
}
.chat {
  flex-direction: column;
  display: flex;
  flex-wrap: wrap;
}
.user {
  margin-top: 30px;
  position: relative;
}
.user .status {
  position: absolute;
  bottom: 0px;
  left: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.user .status-bola {
  border: 4px solid #232323;
  position: absolute;
  min-width: 20px;
  height: 20px;
  border-radius: 50%;
  background: chartreuse;
}
.user .status-texto {
  font-family: "Montserrat", sans-serif;
  color: #fff;
  margin-left: 30px;
}
.baloes {
  display: flex;
  width: auto;
  align-items: flex-start;
  flex-direction: column;
}
.baloes .balao {
  display: inline-block;
  font-family: "Montserrat", sans-serif;
  background: rgba(134, 45, 207, 0.815);
  color: #fff;
  border: 2px solid #232323;
  border-radius: 13px;
  padding: 10px 20px;
  font-size: 15px;
  font-weight: 500;
  line-height: 28px;
}
.baloes .balao:nth-child(1),
.baloes .balao:nth-child(2),
.baloes .balao:nth-child(3) {
  border-bottom-left-radius: 2px;
}
.baloes .balao:nth-child(2),
.baloes .balao:nth-child(3),
.baloes .balao:nth-child(4) {
  border-top-left-radius: 2px;
}
.baloes .balao:nth-child(1) {
  margin-top: 20px;
}
.baloes .balao:nth-child(1),
.baloes .balao:nth-child(3) {
  max-width: 450px;
}
.baloes .balao:nth-child(4) {
  max-width: 380px;
}
.baloes .balao:nth-child(2) {
  max-width: 350px;
}
.baloes .balao:only-child {
  border-radius: 13px;
}
.icones {
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  max-width: 500px;
  background-color: white;
  padding: 10px;
  flex-wrap: wrap;
  border-radius: 30px;
}
.icones .icone {
  width: 90px;
  border-radius: 10px;
}
.icones .icone:nth-child(1), .icones .icone:nth-child(2) {
  width: 50px;
}
.icones .icone:nth-child(2) {
  margin-left: 10px;
}
.delay-6s {
  animation-duration: 3s;
  animation-delay: 6s;
  animation-iteration-count:initial;
}
.delay-7s {
  animation-duration: 3s;
  animation-delay: 7s;
  animation-iteration-count:initial;
}
.delay-8s {
  animation-duration: 3s;
  animation-delay: 8s;
  animation-iteration-count:initial;
}
.delay-9s {
  animation-duration: 3s;
  animation-delay: 9s;
  animation-iteration-count:initial;
}
.delay-10s {
  animation-duration: 3s;
  animation-delay: 10s;
  animation-iteration-count:initial;
}
.delay-11s {
  animation-duration: 3s;
  animation-delay: 11s;
  animation-iteration-count:initial;
}
.delay-12s {
  animation-duration: 3s;
  animation-delay: 12s;
  animation-iteration-count:initial;
}
.delay-13s {
  animation-duration: 3s;
  animation-delay: 13s;
  animation-iteration-count:initial;
}
.links {
  font-family: "Montserrat", sans-serif;
  margin-top: 30px;
  display: flex;
  max-width: 300px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  justify-items: center;
  margin-bottom: 50px;
}
.links .link {
  margin-right: 10px;
}
</style>