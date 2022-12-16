<template>
  <v-app>
    <v-app-bar fixed app dark class="app-bar-dev">
      <v-toolbar-title >
        <v-img
          lazy-src="./assets/upal.png"
          max-width="300"
          src="./assets/upal.png"
          class="img-logo"
        ></v-img>
      </v-toolbar-title>

      <v-spacer> </v-spacer>

      <v-btn text to="/"> Inicio </v-btn>
      <v-btn text to="/about"> Sobre Mi </v-btn>
      <v-btn text to="/proyects"> Proyecto </v-btn>
      <v-btn text to="/contact"> Contactame </v-btn>
      <v-btn text to="/upal"> UPAL </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
    <v-footer>
      <v-col
        class="text-left"
        cols="9"
      >
        <a href="https://github.com/jalbornoz14" target="_blank">GitHub</a>
        <a href="https://github.com/jalbornoz14" target="_blank">Instagram</a>
        <a href="https://github.com/jalbornoz14" target="_blank">Youtube</a>
      </v-col>
      <v-col
        class="text-right copyrigth"
        cols="3"
      >
        <p>© 2022 - Jhefferson Albornoz Vara</p>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    //
  })
}
</script>

<style>
html {
  overflow-y: hidden;
}
main{
  background-color: #222222 !important;
  width: 100%;
  overflow: auto;
}
footer{
  background-color: #222222 !important;
}
.app-bar-dev {
  background-color: #222222 !important;
}
.img-logo{
  margin-left: 40%;
}

a{
  color: #fff !important;
  text-decoration: none;
  margin-right: 15px;
}

.copyrigth{
  color: #fff !important;
}
</style>
