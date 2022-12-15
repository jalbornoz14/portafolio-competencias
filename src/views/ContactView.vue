<template>
  <div class="contact">
    <j-baner :text="'Contactame'" />
    <div class="contect-contact">
      <div class="info-contact w-50">
        <h2>Informacion de Contacto</h2>
        <div class="contact-info">
          <div class="contact-item">
            <h3>Correo</h3>
            <p>jheffersonjhgg@gmail.com</p>
          </div>
          <div class="contact-item">
            <h3>Telefono</h3>
            <p>903119214</p>
          </div>
          <div class="contact-item">
            <h3>Dirección</h3>
            <p>Psj. Apurimac 192, Caja de Agua San Juan de Lurigancho</p>
          </div>
          <div class="contact-item">
            <h3> </h3>
            <p>Todo esta echo con 💙</p>
          </div>
        </div>
      </div>
      <div class="w-50">
        <v-text-field label="Nonbre" v-model="name" dark></v-text-field>
        <v-text-field label="Telefono" v-model="phone" dark></v-text-field>
        <v-text-field label="Correo" v-model="mail" dark></v-text-field>
        <v-textarea
          name="input-7-1"
          label="Mensaje"
          v-model="message"
          hint="Hint text"
          placeholder="Introduzca su mensaje"
          dark
        ></v-textarea>
        <j-button text="Enviar" color="j-success" @click="setMail()"/>
        <br>
        <span class="text-success" v-if="setEmail">Correo Enviado con exito</span>
      </div>
    </div>
  </div>
</template>
<script>
import JBaner from '@/utils/JBaner.vue'
import JButton from '@/utils/JButton.vue'

export default {
  components: { JBaner, JButton },
  name: 'ContactView',
  data () {
    return {
      name: '',
      phone: '',
      mail: '',
      message: '',
      setEmail: false
    }
  },
  methods: {
    setMail () {
      this.name = ''
      this.phone = ''
      this.mail = ''
      this.message = ''
      this.setEmail = true
    }
  }
}
</script>
<style scoped>
.contact {
  height: 80vh;
}

.text-success{
  color: #00ff00;
}

.contect-contact{
  display: flex;
  justify-content: center;
  align-items: start;
  height: 100%;
  padding: 2% 10%;
}

.info-contact h2 {
  color: #fff;
  margin-bottom: 20px;
}

.info-contact h3 {
  color: rgba(255, 255, 255, 0.815);
}
.info-contact p{
  color: rgba(255, 255, 255, 0.582);
}

.w-50{
  width: 50%;
  margin: 1%;
}

</style>
