<template>
  <div class="proyects">
    <j-baner :text="'Proyectos'"/>
    <div class="content-proyects">
      <div class="w-50 line-separator">
        <h2>Competnecias Generales</h2>
        <div class="compe-general">
          <div class="compe" v-for="compe in compe.general" :key="compe.title">
            <h3>{{ compe.title }}</h3>
            <div class="img-compe">
              <v-img class="img" :lazy-src="compe.img" :src="compe.img" width="320" height="200"></v-img>
              <div class="text-span"><span>{{compe.description}}</span></div>
            </div>
            <div class="buttons-link">
              <j-button text="GitHub" color="j-primary" v-if="compe.links.github !== ''"/>
              <a :href="compe.links.web" target="_blank"> <j-button text="Link" v-if="compe.links.web !== ''" /> </a>
              <!-- <j-button text="Ver" color="j-info"/> -->
            </div>
          </div>
        </div>
      </div>
      <div class="w-50">
        <h2>Comptencias Especificas</h2>
        <div class="compe-general">
          <div class="compe" v-for="compe in compe.espesific" :key="compe.title">
            <h3>{{ compe.title }}</h3>
            <div class="img-compe">
              <v-img class="img" :lazy-src="compe.img" :src="compe.img" width="320" height="200"></v-img>
              <div class="text-span"><span>{{compe.description}}</span></div>
            </div>
            <div class="buttons-link">
              <a :href="compe.links.github" target="_blank"> <j-button text="GitHub" color="j-primary" v-if="compe.links.github !== ''"/> </a>
              <a :href="compe.links.web" target="_blank"> <j-button text="Link" v-if="compe.links.web !== ''" /> </a>
              <!-- <j-button text="Ver" color="j-info"/> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import JBaner from '@/utils/JBaner.vue'
import JButton from '@/utils/JButton.vue'

// data
import General from '@/data/compe-general.data'
import Specific from '@/data/compe-specific.data'

export default {
  components: { JBaner, JButton },
  name: 'ProyectsView',
  data () {
    return {
      compe: {
        general: General,
        espesific: Specific
      }
    }
  }
}
</script>

<style>
.proyects{
  height: 80vh;
}

.content-proyects{
  display: flex;
  justify-content: center;
  align-items: start;
  width: 100%;
  padding: 2% 10%;
}

.text-span{
  padding: 10px;
  color: rgba(255, 255, 255, 0.582);
}

.compe-general{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
}

.img-compe{
  display: flex;
  padding: 10px 20px 10px 0px;
}

.compe{
  margin-top: 30px;
}

.img-compe .img{
  width: 100%;
  height: 100%;
  border-radius: 15px;
}

.w-50{
  width: 50%;
  margin: 1%;
}

.line-separator{
  padding-right: 20px;
  border-right: 1px solid rgb(255, 255, 255);
}

h2 {
  color: #fff;
}

h3 {
  color: rgba(255, 255, 255, 0.5);
}

.buttons-link{
  display: flex;
  justify-content: left;
  align-items: center;
}
</style>
