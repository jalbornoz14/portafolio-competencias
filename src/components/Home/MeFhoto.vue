<template>
  <div class="container-img">
    <v-img
      lazy-src="./../../assets/me.jpeg"
      src="./../../assets/me.jpeg"
      class="img-me"
    ></v-img>
  </div>
</template>

<script>
export default {
  name: 'MeFhoto'
}
</script>

<style>
.container-img{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(55, 56, 53);
    border-radius: 50%;
    padding: 10px;
}
.img-me{
    border-radius: 50%;
}
</style>
