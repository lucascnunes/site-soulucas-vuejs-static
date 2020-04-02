<template>
  <div class="container noselect">
    <div class="wrapper">
      <div class="chat" style="flex-grow: 2">
        <div class="user animated fadeInDown">
          <img src="../../assets/eu.jpeg" alt="Eu">
          <span class="status animated fadeInUp delay-1s"><span class="status-bola" v-bind:style="statusEscolhido"></span><span class="status-texto">{{ statusEscolhido.mensagem }}</span></span>
        </div>
        <div class="baloes">
          <div class="balao animated fadeInLeft delay-1s">
            Dr Lucas falando!
          </div>
          <div class="balao animated fadeInLeft delay-2s">
            Está precisando de atendimento odontológico ?! <br>
            Somos especializados em estética e reabilitação oral. <br>
            Marque uma consulta através do telefone <a href="tel:552433463514" class="telefone">(24) 3346-3514</a>
          </div>
          <div class="balao animated fadeInLeft delay-3s">
            Estamos em <strong>Volta Redonda</strong>, Rio de Janeiro. <br> Para nos encontrar vou lhe enviar um mapa:
          </div>
          <iframe class="animated fadeInLeft delay-4s" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d651.6189669878589!2d-44.109954447141334!3d-22.499923527887283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9e99035dbed095%3A0x40af65a639bb9e04!2sAv.%20S%C3%A1vio%20Cota%20de%20Almeida%20Gama%2C%202214%20-%20Retiro%2C%20Volta%20Redonda%20-%20RJ%2C%2027281-422!5e0!3m2!1spt-BR!2sbr!4v1585784664962!5m2!1spt-BR!2sbr" frameborder="0" style="border:2px solid #232323; width: 100%;max-width: 450px;border-top-right-radius: 13px;border-bottom-right-radius:13px;margin-left:1px;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
          <div class="balao animated fadeInLeft delay-5s">
            Estaremos lhe esperando para oferecer o melhor atendimento odontológico que você merece.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    const status = [
        {
          "background": 'chartreuse',
          mensagem: 'aguardando paciente'
        },
        {
          "background": 'goldenrod',
          mensagem: 'atendendo um paciente'
        },
        {
          "background": 'red',
          mensagem: 'fazendo cirurgia'
        },
        {
          "background": 'goldenrod',
          mensagem: 'fazendo orçamento'
        },
        {
          "background": 'chartreuse',
          mensagem: 'parada para lanche'
        },
      ];
    return {
      statusEscolhido: status[Math.floor(Math.random() * status.length)]
    }
  },
}
</script>


<style scoped>
.container {
  margin: 80px 30px;
  margin-bottom: 70px;
}
.wrapper {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  position: relative;
  justify-content: center;
  align-content: center;
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
  background: rgba(45, 102, 207, 0.815);
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
.baloes .balao:nth-child(5) {
  border-top-left-radius: 2px;
}
.baloes .balao:nth-child(1) {
  margin-top: 20px;
}
.baloes .balao:nth-child(1),
.baloes .balao:nth-child(3) {
  max-width: 450px;
}
.baloes .balao:nth-child(5) {
  max-width: 380px;
}
.baloes .balao:nth-child(2) {
  max-width: 480px;
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
.telefone {
  font-size: 22px;
}
</style>