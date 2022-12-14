<template>
  <div class="container-home">
    <div class="box-home">
      <div class="img-home">
        <me-fhoto/>
      </div>
      <div>
        <info-me/>
      </div>
    </div>
  </div>
</template>

<script>
import MeFhoto from '@/components/Home/MeFhoto.vue'
import InfoMe from '@/components/Home/InfoMe.vue'
// import HelloWorld from '../components/HelloWorld'

export default {
  name: 'HomeView',

  components: {
    MeFhoto,
    InfoMe
    // HelloWorld
  }
}
</script>

<style scoped>
.container-home{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
.box-home{
  display: flex;
  align-items: center;
  width: 60%;
  /* background-color: aqua; */
}

.img-home{
  width: 35%;
}
</style>
