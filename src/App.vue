<template>
  <div id="app">
    <navigation/>
    <transition-page>
      <router-view></router-view>
    </transition-page>
    <footer v-bind:style="position"><span>{{ new Date().getFullYear() }} © Todos os direitos reservados.</span> <a v-if="$route.name.includes(showOnRoutes)" href="#" v-scroll-to="'#navigation'"><i class="arrow up"></i></a></footer>
  </div>
</template>

<script>
import navigation from './components/navigation'
import TransitionPage from './components/Transition';

export default {
  name: 'App',
  components: {
    navigation,
    TransitionPage
  },
  data() {
    return {
      showOnRoutes: ['Projects']
    }
  },
  computed: {
    position() {
      if (this.$route.name === 'Index') return { 'position': 'fixed', 'z-index': 99 }
      else return { "position": 'relative', "z-index": 1, 'margin-bottom': '30px' }

    }
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;800&display=swap');
@import url('https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css');
@import url('https://cdnjs.cloudflare.com/ajax/libs/hamburgers/1.1.3/hamburgers.min.css');
html {
  margin: 0;
  padding: 0;
}
body {
  margin: 0;
  padding: 0;
  background-color: #232323;
  overflow-x: hidden;
}
.logo {
  font-family: 'Pacifico', cursive;
  font-size: 33px;
  text-transform: lowercase;
  text-shadow: 2px 0 0 #232323, -2px 0 0 #232323, 0 2px 0 #232323, 0 -2px 0 #232323, 1px 1px #232323, -1px -1px 0 #232323, 1px -1px 0 #232323, -1px 1px 0 #232323;
  color: #fff;
}
.noselect {
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Opera and Firefox */
}
img {
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Opera and Firefox */
}
footer {
  width: 92%;
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 40px;;
  bottom: 2em;
}
footer span {
  color: #fff;
  font-size: 10px;
  font-family: "Montserrat", sans-serif;
}
footer a {
  font-size: 20px;
  color: #fff;
  text-transform: lowercase;
  text-decoration: none;
  padding: 10px;
}
@media screen and (max-width: 600px) {
  footer {
    width: 80%;
    bottom: 3.5%;
  }
}
.text-center {
  text-align: center;
}
i {
  border: solid #fff;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
}
.arrow {
  mix-blend-mode: difference;
}

.right {
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
}

.left {
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
}

.up {
  transform: rotate(-135deg);
  -webkit-transform: rotate(-135deg);
}

.down {
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
}
.m-10 {
  margin: 5em !important;
}
.mt-10 {
  margin-top: 5em !important;
}
.mb-10 {
  margin-bottom: 5em !important;
}
.mt-5 {
  margin-top: 2.5em !important;
}
.mb-5 {
  margin-bottom: 2.5em !important;
}
a:not(.img-fluid) {
  color: #fff;
  text-decoration: none;
  border-bottom: 1px solid #fff;
  padding-bottom: 3px;;
}

@media screen and (max-width: 600px) {
  .container {
    margin: 120px 30px;
  }
}
@media screen and (max-width: 1024px) {
  .float-right {
    display: flex !important;
    flex-direction: column;
    justify-items: center;
    align-content: center;
    align-items: center;
    float: none !important;
  }
}
</style>