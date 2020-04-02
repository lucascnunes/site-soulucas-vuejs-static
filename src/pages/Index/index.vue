<template>
  <div class="projects"  @mousemove="mousemove">
    <div class="scroll-downs" v-bind:class="mouseStopped ? '' : 'hide'">
      <h4 style="color: #fff; display:flex; justify-self:center;align-self:center; text-align:center;">Use o scroll para navegar</h4>
      <div class="mousey">
        <div class="scroller"></div>
      </div>
    </div>
    <div class="move-sideways" v-bind:class="mouseStopped ? '' : 'hide'">
      <div class="message">
        <i class="arrow left"></i> arraste para os lados para navegar <i class="arrow right"></i>
      </div>
    </div>
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
    var that = this
    return {
      mouseStopped: true,
      timeout: undefined,
      currentPage: null,
      opts: {
        start: 0,
        dir: 'h',
        duration: 500,
        movingFlag: false,
        beforeChange: function (current) {
          if(current != that.currentPage) {
            that.mousemove()
            that.currentPage = current
          }
        },
        afterChange: function () {
        },
      }
    }
  },
  mounted() {
    // this.listenScroll()
    this.currentPage = this.$refs.Projects.$fullpage.curIndex
  },
  destroyed() {
    // this.stopListening()
  },
  methods: {
    mousemove() {
      if(this.timeout !== undefined) {
        clearTimeout(this.timeout)
        this.mouseStopped = false
      }
      this.timeout = setTimeout(() => {
        this.mouseStopped = true
      }, 5000)
    },
    listenScroll() {
      window.addEventListener('wheel', () => {
        this.mousemove()
      })
    },
    stopListening() {
      window.removeEventListener('wheel', () => {
        this.mousemove()
      })
    }
  },
}
</script>

<style scoped>
.projects {
  position: absolute;
  width: 100%;
  height: 100vh;
  font-family: 'Montserrat', sans-serif;
  color: #fff;
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
  transition: opacity 2s;
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
.scroll-downs {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto 70px auto auto;
  z-index: 9999;
  width :24px;
  height: 45px;
  transition: opacity 0.2s;
}
.mousey {
  margin-left: 15px;
  width: 3px;
  padding: 10px 15px;
  height: 40px;
  border: 2px solid #fff;
  border-radius: 25px;
  opacity: 0.75;
  box-sizing: content-box;
}
.scroller {
  width: 3px;
  height: 6px;
  border-radius: 25%;
  background-color: #fff;
  animation-name: scroll;
  animation-duration: 2.2s;
  animation-timing-function: cubic-bezier(.15,.41,.69,.94);
  animation-iteration-count: infinite;
}
@keyframes scroll {
  0% { opacity: 0; }
  10% { transform: translateY(0); opacity: 1; }
  100% { transform: translateY(15px); opacity: 0;}
}
@media screen and (max-width: 600px) {
  .scroll-downs {
    display: none;
  }
}
.move-sideways {
  position: fixed;
  right: 0;
  bottom: 12%;
  left: 0;
  margin: auto;
  z-index: 9999;
  width: 100%;
  text-align: center;
  transition: opacity 2s;
}
.move-sideways .message {
  box-sizing: content-box;
  width: 100%;
}
@media screen and (min-width: 600px) {
  .move-sideways {
    display: none;
  }
}

.hide {
  opacity: 0;
}
</style>