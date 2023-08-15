<template>
  <div class="footer">
    <div class="flex footerBlock">
      <div class="footerBlock1 text-center">
        <h1>Свяжитесь с нами</h1>
        <form action="form" class="mt-3" id="tg">
          <label for="name">Введите имя</label>
          <input type="text" id="name" name="name" v-model="name" @input="Uper" />
          <label for="phone">Введите номер</label>
          <input type="tel" id="phone" name="phone" @keypress="onlyNumbers" v-model="phoneNumber" />
        </form>
        <div class="b">
          <button  name="sumbmit" @click="SubmitPersonTwo()">Отправить</button>
        </div>
      </div>
      <div>
        <iframe
          class="footerBlock2"
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d53869.204810532145!2d41.431738553112076!3d44.79809504714361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDTCsDQ3JzE3LjMiTiA0McKwMjgnMzIuOSJF!5e0!3m2!1sru!2sru!4v1690529143059!5m2!1sru!2sru"
          width="100%"
          height="100%"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
    <div class="footerItems">
      <div class="footerItems1">
        <h3 class="mb-4">Контакты</h3>
        <div class="mail flex items-center">
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="currentColor"
              class="bi bi-phone"
              viewBox="0 0 16 16"
            >
              <path
                d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"
              />
              <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
            </svg>
          </p>
          <p class="pl-3" @click="tel()">+7 902 408 97 53</p>
        </div>
        <div class="mail flex items-center">
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="currentColor"
              class="bi bi-whatsapp"
              viewBox="0 0 16 16"
            >
              <path
                d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"
              />
            </svg>
          </p>
          <p class="pl-3" @click="whatsapp()">+7 902 408 97 53</p>
        </div>
        <div class="mail flex items-center">
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="currentColor"
              class="bi bi-telegram"
              viewBox="0 0 16 16"
            >
              <path
                d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"
              />
            </svg>
          </p>
          <p class="pl-3" @click="telegram()">@LoftMichyrinsky</p>
        </div>
        <div class="mail flex items-center">
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="currentColor"
              class="bi bi-envelope"
              viewBox="0 0 16 16"
            >
              <path
                d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"
              />
            </svg>
          </p>
          <p class="pl-3" @click="gmail()">Provincia.Yug@gmail.com</p>
        </div>
        <div class="mail flex items-center">
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="currentColor"
              class="bi bi-instagram"
              viewBox="0 0 16 16"
            >
              <path
                d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
              />
            </svg>
          </p>
          <p class="pl-3" @click="insta()">@Loft.Michyrinsky</p>
        </div>
        <div class="mail flex items-center">
          <p>
            <img src="@/assets/img/svg/free-icon-vk-2111828.svg" alt="" />
          </p>
          <p class="pl-3" @click="vk()">@loftmichyrinsky</p>
        </div>
      </div>
      <div class="footerItems2 flex justify-center items-center">
        <img src="@/assets/img/logo.png" class="logo" />
      </div>
      <div class="footerItems3">
        <h3>Приглашаем к сотрудничеству</h3>
        <ul>
          <li>Мебельные салоны</li>
          <li>Интернет магазины</li>
          <li>Дизайнеров</li>
        </ul>
        <my-button @click="showModal = true" class="b"> Связаться </my-button>
        <modal v-model:showModal="showModal"></modal>
      </div>
    </div>
  </div>
</template>

<style scoped>
.b {
  margin: 50px 0 0;
  display: flex;
  justify-content: center;
}

.b button {
  color: white;
  background: rgb(206,174,160);
  font-size: 16px;
  font-weight: 600;
  width: 180px;
  height: 50px;
  border-radius:20px ;
}
.b button:hover {
  color: rgb(95, 95, 95);
  transition: color 0.3s ease;
}
li {
  margin: 15px 0;
  font-size: 18px;
}
.footerItems1 p {
  cursor: pointer;
}
.footerItems1 p:hover {
  color: rgb(185, 185, 185);
}
.logo {
  width: 250px;
  height: 250px;
}
h3 {
  font-size: 23px;
  font-weight: bold;
}
.footerItems {
  text-align: center;
  font-size: 12px;
  max-width: 1200px;
  margin: 150px auto 0;
  color: white;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2px;
}
h1 {
  font-size: 40px;
}
p {
  letter-spacing: 2px;
  margin: 10px 0;
  color: white;
  font-size: 16px;
}
input {
  color: black;
  height: 40px;
}
.footerBlock {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  max-width: 1200px;
  margin: 0 auto;
  gap: 30px;
}
.footerBlock1 {
  border: 1px solid white;
  padding: 30px;
  color: white;
  border-radius: 25px;
}
.footerBlock2 {
  border-radius: 25px;
}
.footer {
  padding-bottom: 50px;
  background: rgb(38, 35, 36);
}
@media (min-width: 768px) and (max-width: 1023px) {
  .footerBlock {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }

  .footerItems {
    text-align: center;

    color: white;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 25px;
    margin: 50px auto 0;
  }

  .footerBlock1 {
    padding: 10px;
  }
  .mail {
    display: flex;
    justify-content: center;
  }
}

@media (max-width: 767px) {
  .footerBlock {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }

  .footerItems {
    text-align: center;
    color: white;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 25px;
    margin: 50px auto 0;
  }

  .footerBlock1 {
    padding: 10px;
  }
  .mail {
    display: flex;
    justify-content: center;
  }
  form {
    padding: 0px;
  }
}
</style>

<script>
import Modal from '@/components/elements/MyModal.vue'
import axios from 'axios'
export default {
  components: {
    Modal
  },
  data() {
    return {
      showModal: false,
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
    telegram() {
      window.location.href = 'https://t.me/LoftMichyrinsky'
    },
    whatsapp() {
      window.location.href = 'https://wa.me/9024089753'
    },
    insta() {
      window.location.href = 'https://instagram.com/loft.michyrinsky?igshid=ZDc4ODBmNjlmNQ=='
    },
    vk() {
      window.location.href = 'https://vk.com/loftmichyrinskystore'
    },
    tel() {
      window.location.href = 'tel:+79024089753'
    },
    gmail() {
      window.location.href = 'mailto:Provincia.Yug@gmail.com'
    },
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
    async SubmitPersonTwo() {
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
    },
    removeForm() {
      this.name = ''
      this.phoneNumber = '+7'
    }
  }
}
</script>
