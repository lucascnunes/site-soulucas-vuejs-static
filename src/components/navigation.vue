<template>
<div id="navigation">
  <div class="topHeader" :style="headerColor">
    <div>
      <header class="noselect" v-bind:style="fixedOnMenuOpen">
        <div class="logo">soulucas.</div>
        <div class="menuDisplay">
          <router-link :style="menuColor" to="/">Projetos</router-link>
          <router-link :style="menuColor" to="/sobre">Eu</router-link>
          <!-- <router-link :style="menuColor" to="/contato">Contato</router-link> -->
        </div>
        <div class="menuMobile">
          <button @click="handleMenu" class="hamburger hamburger--collapse" v-bind:class="isMenuOpen ? ' is-active' : ''" type="button">
            <span class="hamburger-box">
              <span class="hamburger-inner"></span>
            </span>
          </button>
        </div>
      </header>
    </div>
  </div>
  <div class="overlay" v-bind:style="styleMenuOpen">
    <div class="overlay-content">
      <router-link v-on:click.native="closeMenu" :style="menuColor" to="/">Projetos</router-link>
      <router-link v-on:click.native="closeMenu" :style="menuColor" to="/sobre">Eu</router-link>
      <!-- <router-link v-on:click.native="closeMenu" :style="menuColor" to="/contato">Contato</router-link> -->
      <div class="links mt-5">
        <a href="https://github.com/lucascnunes" rel="noopener noreferrer" target="_blank" class="link">GitHub</a>
        <a href="https://www.linkedin.com/in/lucaspnunes/" rel="noopener noreferrer" target="_blank" class="link">LinkedIn</a>
        <a href="https://www.facebook.com/lucas.parreira.nunes" rel="noopener noreferrer" target="_blank" class="link">Facebook</a>
        <a href="https://api.whatsapp.com/send?1=pt_BR&phone=+5524988367933&text=Ol%C3%A1%20Lucas,%20gostaria%20de%20um%20orçamento%20para%20meu%20site" rel="noopener noreferrer" target="_blank" class="link">Whatsapp</a>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    }
  },
  methods: {
    handleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
    closeMenu() {
      this.isMenuOpen = false
    }
  },
  computed: {
    headerColor() {
      if (this.$route.name) {
        return {
          "background-color": "transparent",
        }
      } else {
        return {
          "background-color": "#fff",
        }
      }
    },
    menuColor() {
      if (this.$route.name) {
        return {
          "color": "#fff",
        }
      } else {
        return {
          "color": "#232323",
        }
      }
    },
    styleMenuOpen() {
      return this.isMenuOpen ? { width: 100+'%' }  : {}
    },
    fixedOnMenuOpen() {
      return this.isMenuOpen ? { display: 'fixed', overflow: 'hidden' }  : {}
    }
  },  
}
</script>

<style scoped>
  .topHeader {
    padding: 10px;
    top: 0;
    left: 0;
    position: absolute;
    z-index: 999;
    width: 100%;
  }
  header {
    margin: 0 40px 10px;
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
  }
  header .logo {
    flex: 11;
  }
  .menuDisplay {
    display: flex;
    flex: 2;
    flex-direction: row;
    justify-content: space-around;
  }
  .menuDisplay a {
    text-decoration: none;
    font-family: 'Montserrat', sans-serif;
    font-size: 13px;
    padding-top: 5px;
    padding-bottom: 5px;
    border-bottom: 1px #fff solid;
  }
@media screen and (max-width: 600px) {
  .menuDisplay {
    display: none;
  }
} 
  .menuMobile {
    display: none;
  }
  .hamburger-box .hamburger-inner,
  .hamburger-box .hamburger-inner:before, 
  .hamburger-box .hamburger-inner:after {
    background-color: #fff;
  }

  .hamburger.is-active .hamburger-inner,
  .hamburger.is-active .hamburger-inner:after,
  .hamburger.is-active .hamburger-inner:before {
    background-color: #fff;
  }

@media screen and (max-width: 600px) {
  .menuMobile {
    display: inline;
  }
}

/* The Overlay (background) */
.overlay {
  /* Height & width depends on how you want to reveal the overlay (see JS below) */   
  height: 100vh;
  width: 0;
  position: fixed; /* Stay in place */
  z-index: 99; /* Sit on top */
  right: 0;
  top: 0;
  background-color: rgb(0,0,0); /* Black fallback color */
  overflow: hidden; 
  transition: 0.5s; /* 0.5 second transition effect to slide in or slide down the overlay (height or width, depending on reveal) */
}

/* Position the content inside the overlay */
.overlay-content {
  position: relative;
  top: 25%; /* 25% from the top */
  width: 100%; /* 100% width */
  text-align: center; /* Centered text/links */
}

/* The navigation links inside the overlay */
.overlay a {
  font-family: 'Montserrat', sans-serif;
  padding: 8px;
  text-decoration: none;
  font-size: 36px;
  color: #818181;
  display: block; /* Display block instead of inline */
  transition: 0.3s; /* Transition effects on hover (color) */
}

/* When you mouse over the navigation links, change their color */
.overlay a:hover, .overlay a:focus {
  color: #f1f1f1;
}
.overlay a {
  border-bottom: 0;
}

</style>