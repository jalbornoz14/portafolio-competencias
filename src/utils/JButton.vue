<template>
  <div>
    <button :class="color" @click="click">{{ text }}</button>
  </div>
</template>

<script>
export default {
  name: 'JButton',
  props: {
    text: {
      type: String,
      default: 'Button'
    },
    color: {
      type: String,
      default: 'j-default'
    }
  },
  methods: {
    click () {
      this.$emit('click')
    }
  }
}
</script>

<style scope>
/* Boton Primary */
.j-primary{
    border: 1px solid #1d4aef;
    color: #1d4aef;
}
.j-primary::before{
    background: #1d4aef;
}
.j-primary:hover {
  color: #e7fcfa;
}

/* Boton Default */
.j-default{
    border: 1px solid #ffffff;
    color: #e7fcfa;
}
.j-default::before{
    background: #ffffff;
}
.j-default:hover {
  color: #000;
}

/* Boton Success */
.j-success{
    border: 1px solid #00ff00;
    color: #00ff00;
}
.j-success::before{
    background: #00ff00;
}
.j-success:hover {
  color: #000;
}

/* Boton info */
.j-info{
    border: 1px solid #00ffff;
    color: #00ffff;
}
.j-info::before{
    background: #00ffff;
}
.j-info:hover {
  color: #000;
}

button {
  padding: 0.4em 1.5em;
  margin-right: 20px;
  position: relative;
  overflow: hidden;
  background-color: transparent;
  text-align: center;
  font-size: 16px;
  transition: 0.3s;
  z-index: 1;
  font-family: inherit;
  border-radius: 15px;
}

button::before {
  content: '';
  width: 0;
  height: 500%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(45deg);
  transition: 0.5s ease;
  display: block;
  z-index: -1;
}

button:hover::before {
  width: 150%;
}
</style>
