<template>
  <div class="proyects">
    <j-baner :text="'Proyectos'"/>
  </div>
</template>

<script>
import JBaner from '@/utils/JBaner.vue'

export default {
  components: { JBaner },
  name: 'ProyectsView'
}
</script>

<style>
.proyects{
  height: 100%;
}
</style>
