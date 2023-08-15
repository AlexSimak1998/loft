<template>
  <div class="modal" v-if="showModal" @click="closeModal()">
    <div class="modal-content" @click.stop>
      <div class="formHeader">
        <h2 class="text-center">Заказать звонок</h2>
      </div>
      <form action="form" class="mt-3" id="tg">
        <label for="name">Введите имя</label>
        <input type="text" id="name" name="name" v-model="name" @input="Uper" />
        <label for="phone">Введите номер</label>
        <input type="tel" id="phone" name="phone" @keypress="onlyNumbers" v-model="phoneNumber" />
      </form>
      <div class="flex sent justify-between">
        <button class="close-btn" @click="closeModal">Отмена</button>
        <button class="self-btn" name="sumbmit" @click="SubmitPerson()">Отправить</button>
      </div>
    </div>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  props: {
    showModal: Boolean
  },
  data() {
    return {
      name: '',
      phoneNumber: '+7'
    }
  },
  computed: {
    formattedPhoneNumber() {
      const numberWithoutPlus = this.phoneNumber.slice(1)
      const formattedNumber = numberWithoutPlus.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')
      return `${formattedNumber}`
    }
  },
  methods: {
    closeModal(event) {
      if (event.target.classList.contains('modal') || event.target) {
        this.$emit('update:showModal', false)
      }
    },
    Uper() {
      this.name = this.name.charAt(0).toUpperCase() + this.name.slice(1)
    },
    onlyNumbers(event) {
      const keyCode = event.keyCode || event.which
      const keyValue = String.fromCharCode(keyCode)
      const isNumber = /^[0-9]+$/.test(keyValue)
      const isValidLength = this.phoneNumber.length <= 11

      if (!isNumber || !isValidLength) {
        event.preventDefault()
      }
    },
    async SubmitPerson() {
      try {
        const botToken = '6640792497:AAG8-vyU4d06Ye-5UbARHCCOslQ4emxYDjc'
        const chatId = '-1001950026447'
        const message = `Новая заявка с сайта:\nИмя: ${
          this.name
        }\nНомер: + ${this.formattedPhoneNumber.replace(/ /g, '')}`

        const response = await axios.get(
          `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(
            message
          )}`
        )

        if (response.status === 200) {
          console.log('Сообщение успешно отправлено в Телеграм.')
          this.name = ''
          this.phoneNumber = '+7'
        } else {
          console.error('Ошибка при отправке сообщения в Телеграм.')
        }
      } catch (error) {
        console.error('Произошла ошибка:', error)
      }
    }
  }
}
</script>
<style >
.modal {
  font-weight: 400;
}
.sent {
  padding: 100px 35px 0;
}

label {
  margin: 20px 0 7px;
}
.formHeader {
  width: 100%;
  background: rgb(206, 174, 160);
  padding: 20px 0;
}
form {
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 0 40px;
}
input {
  border-radius: 10px;
  padding: 5px 15px;
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.116);
  transition: box-shadow 0.3s ease;
}
input:focus {
  outline: none;
}
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 50;
}

.modal-content {
  color: black;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  max-width: 400px;
  max-height: 400px;
  background: rgb(247, 247, 247);
  padding-bottom: 15px;
}

.close-btn {
  margin-top: 10px;
  cursor: pointer;
}
</style>