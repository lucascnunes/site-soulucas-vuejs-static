<template>
  <div class="projects">
    <div class="fullpage-container">
      <div class="fullpage-wp" v-fullpage="opts" ref="Projects">
        <div class="page-7 page">
          <section class="part-1" v-animate="{value: 'fadeIn'}"></section>
          <div class="card noselect">
            <div>
              <p>be the hero</p>
              <router-link to="/projeto/omnistack">Visualizar</router-link>
            </div>
          </div>
        </div>
        <div class="page-1 page">
          <section class="part-1" v-animate="{value: 'fadeIn'}"></section>
          <div class="card noselect">
            <div>
              <p>cacdocs</p>
              <router-link to="/projeto/cacdocs">Visualizar</router-link>
            </div>
          </div>
        </div>
        <div class="page-2 page">
          <section class="part-1" v-animate="{value: 'fadeIn'}"></section>
          <div class="card noselect">
            <div>
              <p>clube de tiro cicuta</p>
              <router-link to="/projeto/cicuta">Visualizar</router-link>
            </div>
          </div>
        </div>
        <div class="page-3 page">
          <section class="part-1" v-animate="{value: 'fadeIn'}"></section>
          <div class="card noselect">
            <div>
              <p>buzz burgers</p>
              <router-link to="/projeto/buzzburgers">Visualizar</router-link>
            </div>
          </div>
        </div>
        <div class="page-4 page">
          <section class="part-1" v-animate="{value: 'fadeIn'}"></section>
          <div class="card noselect">
            <div>
              <p>mf engenharia</p>
              <router-link to="/projeto/mfengenhariaprojetos">Visualizar</router-link>
            </div>
          </div>
        </div>
        <div class="page-5 page">
          <section class="part-1" v-animate="{value: 'fadeIn'}"></section>
          <div class="card noselect">
            <div>
              <p>personal car</p>
              <router-link to="/projeto/personalcarpf">Visualizar</router-link>
            </div>
          </div>
        </div>
        <div class="page-6 page">
          <section class="part-1" v-animate="{value: 'fadeIn'}"></section>
          <div class="card noselect">
            <div>
              <p>d3 engenharia</p>
              <router-link to="/projeto/d3engenharia">Visualizar</router-link>
            </div>
          </div>
        </div>
        <!-- <div class="page-7 page">
          <div class="card noselect">
            <div>
              <img src="/emoji.cool.svg" width="80">
              <p>peça um orçamento</p>
              <router-link to="/contato">entre em contato</router-link>
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {
      opts: {
        start: 0,
        dir: 'h',
        duration: 50,
        overflow: 'hidden',
        beforeChange: function () {
        },
        afterChange: function () {
        }
      }
    }
  },
}
</script>

<style scoped>
.projects {
  position: absolute;
  width: 100%;
  height: 100vh;
}

.fullpage-container {
  position: relative;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
}
.page section {
  filter: brightness(0.4);
}
.page-1 .part-1 {
  background: url('/projetos/cacdocs/hero.png') no-repeat;
  background-position: center center;
  background-size: cover;
  min-height: 100vh;
}
.page-2 .part-1 {
  background: url('/projetos/cicuta/hero.png') no-repeat;
  background-position: center center;
  background-size: cover;
  min-height: 100vh;
}
.page-3 .part-1 {
  background: url('/projetos/buzzburgers/hero.png') no-repeat;
  background-position: center center;
  background-size: cover;
  min-height: 100vh;
}
.page-4 .part-1 {
  background: url('/projetos/mfengenhariaprojetos/hero.png') no-repeat;
  background-position: center center;
  background-size: cover;
  min-height: 100vh;
}
.page-5 .part-1 {
  background: url('/projetos/personalcarpf/hero.png') no-repeat;
  background-position: center center;
  background-size: cover;
  min-height: 100vh;
}
.page-6 .part-1 {
  background: url('/projetos/d3engenharia/hero.png') no-repeat;
  background-position: center center;
  background-size: cover;
  min-height: 100vh;
}
.page-7 .part-1 {
  background: url('/projetos/omnistack/hero.png') no-repeat;
  background-position: center center;
  background-size: cover;
  min-height: 100vh;
}
.page p {
  padding: 0;
  margin: 0;
}
@media screen and (max-width: 600px) {
  .page-1 .part-1 {
    background-position: -10em top !important;
  }
  .page-2 .part-1 {
    background-position: -2em top !important;
    filter: brightness(0.6);
  }
  .page-3 .part-1 {
    background-position: -2em top !important;
    filter: brightness(0.5);
  }
  .page-4 .part-1 {
    background-position: -12em top !important;
  }
  .page-5 .part-1 {
    background-position: -12em top !important;
  }
  .page-6 .part-1 {
    background-position: -40em -6em !important;
  }
  .page-7 .part-1 {
    background-position: -10em top !important;
  }
}
.card {
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.2s;
  z-index: 22;
}
.card p {
  font-size: 60px;
  font-weight: 600;
  text-transform: lowercase;
  font-family: 'Pacifico', cursive;
  color: #fff;
  text-shadow: 2px 0 0 #232323, -2px 0 0 #232323, 0 2px 0 #232323, 0 -2px 0 #232323, 1px 1px #232323, -1px -1px 0 #232323, 1px -1px 0 #232323, -1px 1px 0 #232323;
}
@media screen and (max-width: 600px) {
  .card p {
    font-size: 40px;
  }
}
.card a {
  font-size: 20px;
  font-weight: 600;
  text-transform: lowercase;
  font-family: 'Montserrat', sans-serif;
  color: #fff;
  text-decoration: none;
  padding-bottom: 10px;
  border-bottom: 1px solid #fff;
}
.card div {
  text-align: center;
}
.emoji {
  width: 40px;
}
</style>