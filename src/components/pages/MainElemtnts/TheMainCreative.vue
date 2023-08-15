<template>
  <div class="theCreative">
    <div class="theCreative1" v-for="CreativeTitle in theCreativeTitle" :key="CreativeTitle">
      <h1 class="font-bold">{{ CreativeTitle.num }}</h1>
      <h2 class="font-bold mb-6">{{ CreativeTitle.title }}</h2>
      <p>{{ CreativeTitle.lorem }}</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      theCreativeTitle: [
        {
          num: '01',
          title: 'Ундивидуальный подход',
          lorem:
            'Ваша творческая концепция и важные детали будут нашим приоритетом. Мы уделяем особое внимание деталям и качеству в каждом шаге процесса, чтобы обеспечить вас мебелью, которая полностью соответствует вашим ожиданиям и требованиям.'
        },
        {
          num: '02',
          title: 'Уникальный дизайн',
          lorem:
            'Мы представляем возможность заказа уникальных дизайнов мебели, которые созданы с помощью передовых технологий, включая нейросети. Это позволяет нам воплотить ваши самые смелые идеи в реальность, создавая мебель, которая уникальна.'
        }
      ]
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 70px;
}
h2 {
  font-size: 38px;
}
p {
  font-size: 15px;
}
.theCreative {
  padding: 50px 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
}
.theCreative1 {
  background: white;
  padding: 50px 20px;
  box-sizing: border-box;
}

@media (min-width: 768px) and (max-width: 1023px) {
  .theCreative {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
   .theCreative1 {
     padding: 14px;
  }
}

@media (max-width: 767px) {
 .theCreative {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    
  }
 .theCreative1 {
     padding: 14px;
  }
  h1 {
  font-size: 40px;
}
h2 {
  font-size: 30px;
}
p {
  font-size: 15px;
}
}
</style>