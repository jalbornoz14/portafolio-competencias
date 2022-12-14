<template>
  <div class="baner"><h1>{{ text }}</h1></div>
</template>

<script>
export default {
  name: 'JBaner',
  props: {
    text: {
      type: String,
      default: 'Baner'
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Secular+One&display=swap');
.baner {
  display: flex;
  justify-content: left;
  align-items: center;
  width: 100%;
  height: 30%;
  background-color: #252525;
  color: #e7fcfa;
}

h1 {
  margin-left: 10%;
  font-size: 50px;
  font-family: "Secular One", sans-serif;
}
</style>
