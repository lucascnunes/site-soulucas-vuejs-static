<template>
  <div class="container">
    <div class="error animated fadeIn">
      <h1 class="animated fadeInDown">404</h1>
      <div class="baloes">
        <div class="balao animated fadeInLeft delay-1s">
          A página que está tentando acessar não existe
        </div>
      </div>
      <router-link class="botao animated fadeInUp delay-2s" to="/">Voltar</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageNotFound'
}
</script>


<style scoped>
.container {
  margin: 80px 40px;
  color: #fff;
  font-family: "Montserrat", sans-serif;
  text-align: center;
}
h1 {
  font-size: 150px;
  margin: 0;
  padding: 0;
  font-family: 'Pacifico', cursive;
}
.baloes {
  display: flex;
  width: auto;
  align-items: flex-start;
  flex-direction: row;
  justify-content: center;
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
.container .botao {
  background: white;
  color: #232323;
  border-radius: 9px;
  padding: 6px 20px;
  text-decoration: none;
  transition: 0.2s;
}
.container .botao:hover {
  filter: opacity(0.8);
}
</style>