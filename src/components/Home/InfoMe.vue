<template>
  <div class="container-infome">
    <div class="text-infome"><span>{{ title }}</span></div>
    <div><h1>{{ name }}</h1></div>
    <div class="text-infome"><span>{{ description }}</span></div>
    <div class="button-list">
        <j-button :text="'Portafolio'" :color="'j-primary'" @click="goToProyects"/>
        <a :href="links.cv" target="_blank"><j-button :text="'CV'"/></a>
        <a :href="links.matriz" target="_blank"><j-button :text="'Matriz de Competencia'" :color="'j-success'"/></a>
    </div>
  </div>
</template>

<script>
import JButton from '@/utils/JButton.vue'
export default {
  components: { JButton },
  name: 'InfoMe',
  data () {
    return {
      name: 'Jhefferson Albornoz',
      title: 'Full Stack Developer',
      description: 'Soy un futuro Ing. de Software apacionado por la técnologia y el desarrollo sobretodo en la web. Tengo mas de 2 años de expreciencia trabajando con técnologias en JavaScript, TypeScript, PHP, SQL y NoSQL.',
      links: {
        cv: 'https://drive.google.com/file/d/10jvl9j93mpJHwBzczJ6A0EKeo0jIP8No/view?usp=sharing',
        matriz: 'https://docs.google.com/spreadsheets/d/1B7SrGV2oCiLBgbHzjBStTZS4oEXmF2dv/edit?usp=share_link&ouid=100265047572603070889&rtpof=true&sd=true'
      }
    }
  },
  methods: {
    goToProyects () {
      this.$router.push({ name: 'proyects' })
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Secular+One&display=swap');
.button-list{
    display: flex;
    padding: 10px 0px;
}
.container-infome{
    display:grid;
    margin-left: 50px;
}

span{
    font-size: 20px;
    color: rgba(255, 255, 255, 0.538);
}

h1{
    font-size: 50px;
    font-family: 'Secular One', sans-serif;
    color: #fff;
}

.text-infome{
    margin: 10px 0px;
}
</style>
