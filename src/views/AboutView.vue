<template>
  <div class="about">
    <j-baner :text="'Sobre Mi'"/>
    <div class="content-about">
      <div class="info-me w-50">
        <div v-for="info in infoMe" :key="info.title">
          <h2>{{ info.title }}</h2>
          <p>{{ info.content }}</p>
        </div>
      </div>
      <div class="skills-me w-50">
        <div class="skills" v-for="skill in skillsMe" :key="skill.title">
          <v-img class="skills-img" :lazy-src="skill.icon" :src="skill.icon" alt="icon" max-width="80" max-height="80" ></v-img>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import JBaner from '@/utils/JBaner.vue'
export default {
  components: { JBaner },
  name: 'AboutView',
  data () {
    return {
      infoMe: [
        {
          title: 'Estudios',
          content: 'Estudie en el instituto SENATI la carrera técnica de Desarrollo de software por 3 años, llevé cursos de especialización en programacion Frone-End y Back-End, y actualmente estoy estudiando en la Universidad Privada Peruana Alemana la carrera de Ingenieria de Software.'
        },
        {
          title: 'Expreciencia',
          content: 'He trabajado en empresas de software por mas de 2 años y como FreeLancer por mas de 3 años, atualmente desarrollo mis habilidades en DJDisol S.A.C. una empresa de desarrollo de software. Y me gustaría seguir cresiendo en el mundo del desarrollo de software.'
        },
        {
          title: 'Proposito',
          content: 'Mi proposito es ser un desarrollador de software Full-Stack, con conocimientos en Front-End y Back-End, y con conocimientos en la creacion de aplicaciones moviles. Actualmente busco expandir mis conocimientos en el mundo web con JavaScript y en Flutter *Estudiandolo* para aplicaciones moviles.'
        }
      ],
      skillsMe: [
        {
          icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968267.png',
          title: 'HTML'
        },
        {
          icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968242.png',
          title: 'CSS'
        },
        {
          icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
          title: 'JavaScript'
        },
        {
          icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/800px-Bootstrap_logo.svg.png',
          title: 'Boostrap'
        },
        {
          icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/250px-Vue.js_Logo_2.svg.png',
          title: 'Vue'
        },
        {
          icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png',
          title: 'Node'
        },
        {
          icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968332.png',
          title: 'PHP'
        },
        {
          icon: 'https://docs.nestjs.com/assets/logo-small.svg',
          title: 'NestJS'
        },
        {
          icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png',
          title: 'Laravel'
        },
        {
          icon: 'https://d1.awsstatic.com/asset-repository/products/amazon-rds/1024px-MySQL.ff87215b43fd7292af172e2a5d9b844217262571.png',
          title: 'MySQL'
        },
        {
          icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/640px-Postgresql_elephant.svg.png',
          title: 'PostgresSQL'
        },
        {
          icon: 'https://miro.medium.com/max/512/1*doAg1_fMQKWFoub-6gwUiQ.png',
          title: 'MongoDB'
        },
        {
          icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/800px-GraphQL_Logo.svg.png',
          title: 'GraphQL'
        },
        {
          icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png',
          title: 'Python'
        },
        {
          icon: 'https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_flutter_icon_130599.png',
          title: 'Flutter'
        }
      ]
    }
  }
}
</script>

<style scoped>
.about{
  height: 80vh;
}
.content-about{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 2% 10%;
}
.w-50{
  width: 50%;
  margin: 1%;
}

.info-me h2{
  color: #fff;
}

.info-me p{
  color: rgba(255, 255, 255, 0.582);
}

.skills-me{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  justify-content: center;
  align-items: center;
  background-color: hsla(0, 0%, 100%, 0.527);
  border-radius: 15px;
  box-shadow: 10px 15px 1px rgba(255, 255, 255, 0.329);
}

.skills .skills-img{
  margin: 15px 20px;
}

</style>
