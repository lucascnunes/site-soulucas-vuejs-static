<template>
  <div>
    <div class="container">
      <form class="json">
        <div class="comentario">// preencha os campos abaixo para enviar sua mensagem</div>
        <div class="aspas">{</div>
          <div class="interior">
            <div class="campo">
              <label for="name" class="key">"nome":</label> "<input placeholder="seu nome" id="name" type="text">"
            </div>
            <div class="campo">
              <label for="name" class="key">"email":</label> "<input placeholder="seu e-mail" id="email" type="text">"
            </div>
            <div class="campo">
              <label for="name" class="key">"mensagem":</label> "<textarea cols="20" rows="6" placeholder="sua mensagem" id="message" />"
            </div>
          </div>
        <div class="aspas">}</div>
        <button class="botao" type="submit">Enviar mensagem</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin: 80px 40px;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.comentario {
  color: #dcdcdc;
  opacity: 0.6;
  font-size: 20px;
}
.json {
  color: rgb(131, 62, 241);
  padding-top: 40px;
  line-height: 2;
  font-family: "Montserrat", sans-serif;
  font-size: 25px;
}
.interior {
  margin-left: 50px;
}
.json .interior .campo {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content:space-between;
  margin-top: 20px;
}
.json .interior .key {
  margin-right: 20px;
}
.json .interior .campo input {
  font-size: 25px;
  background: transparent;
  color: rgb(129, 200, 233);
  padding-bottom: 5px;
  border: 0;
  border-bottom: 2px solid rgb(129, 200, 233);
  height: 40px;
  text-align: center;
}

.json .interior .campo textarea {
  font-size: 25px;
  background: transparent;
  color: rgb(129, 200, 233);
  padding-bottom: 5px;
  border: 0;
  border-bottom: 2px solid rgb(129, 200, 233);
  text-align: center;
}
.json button {
  margin-top: 20px;
  width: 100%;
  font-size: 20px;
  border-radius: 9px;
  background-color: rgb(131, 62, 241);
  color: #fff;
  font-weight: bold;
  padding: 20px 30px;
  border: 0;
}

@media screen and (max-width: 600px) {
  .json {
    transform: scale(0.6);
    padding-top: 0px;
  }
  .container {
    margin: 0 40px;
  }
  .json button {
    font-size: 25px;
  }
}
</style>