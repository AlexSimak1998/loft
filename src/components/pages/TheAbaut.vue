<template>
  <div class="abaut">
    <div class="abautBlock1">
      <TheSliderLeft />
    </div>
    <div class="abautBlock2 text-center">
      <h1 class="text-center font-bold">О нас</h1>
      <p class="mt-10 mb-10">
        Мы уделяем особое внимание пожеланиям и потребностям каждого клиента. Каждая наша работа
        начинается с беседы и прослушивания ваших идей, чтобы создать мебель, которая идеально
        соответствует вашему стилю и пространству. Наши мастера - это истинные профессионалы своего
        дела. Они обладают богатым опытом работы с различными материалами и техниками, чтобы
        создавать качественные и долговечные изделия. Мы придерживаемся принципов экологической
        ответственности и стремимся использовать экологически чистые материалы в процессе создания
        мебели. Мы гордимся тем, что наши изделия безопасны для здоровья и окружающей среды.
      </p>
      <my-button class="btn">Связаться </my-button>
    </div>
  </div>
  <div class="abautMain text-center">
    <h1 class="font-bold mb-10">Дом и квартира</h1>
    <p class="mt-10 mb-10">
      Средний дом создается для одной семьи. Если вы думаете, что покупка дома в Паттайе, возможно,
      больше вам подходит, поговорите с нами, чтобы узнать больше о каждом из доступных вариантов и
      форм собственности. Последний тип - это дом на плоту, построенный недалеко от берега или реки.
    </p>
    <div class="abautMainBlock">
      <div class="abautMainBlock1"></div>
      <div class="abautMainBlock2"></div>
    </div>
  </div>
      <MyFooter />
</template>

<style scoped>
.abautMain p {
text-align: center;
}
.abautMain {
  max-width: 1200px;
  margin: 0 auto ;
  color: white;
}

.abautMainBlock{
  display: grid;
  grid-template-columns: repeat(2,1fr);
  gap: 40px;
}
.abautMainBlock1 {
  background: url(https://img.freepik.com/free-photo/handyman-occupation-craftsmanship-carpentry-concept_53876-23060.jpg?w=740&t=st=1690531778~exp=1690532378~hmac=b3ef41c367a27a1694fff07c87b8cf91b6c7252bed5e39a1d934a2e7704aeec8);
  background-size: cover;
  height: 600px;
}
.abautMainBlock2 {
  background: url(https://img.freepik.com/free-photo/craftsman-making-his-new-project-in-workshop_1163-3131.jpg?w=360&t=st=1690539353~exp=1690539953~hmac=8df9feef001da93ae29f832776a24f06ca4d99dae8bf3204318acdd176e57115);
  background-size: cover;
  height: 600px;
}
.abautMain {
  height: auto;
  padding: 50px 0;
}
h1 {
  font-size: 40px;
}
.btn {
  margin:0 auto;
}
.abaut {
  display: grid;
  grid-template-columns:35%  65%;
  background: white;
  max-width: 1200px;
  margin: 0 auto;
    border-radius:25px ;
  
}
.abautBlock2 {
  letter-spacing: 2px;
  padding: 25px;
}

@media (min-width: 768px) and (max-width: 1023px) {
  .abaut {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
  .abautBlock1{
    margin: 0 auto;
  }
.abautMainBlock{
  display: grid;
  grid-template-columns: repeat(1,1fr);
  gap: 40px;
}
.abautMain{
    padding: 25px;
}
  }

@media (max-width: 767px) {
  .abaut {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
  .abautBlock1{
    margin: 0 auto;
  }
.abautMainBlock{
  display: grid;
  grid-template-columns: repeat(1,1fr);
}
.abautMain{
    padding: 25px 0;
}

.abautBlock2 {
  padding: 15px 5px;
  font-size: 12px;
}
h1 {
  font-size: 30px;
}

.abautMainBlock1 {
  height: 400px;
}
.abautMainBlock2 {
  height: 400px;
}
  }
</style>
<script>
import TheSliderLeft from '@/components/pages/TheMainElements/TheSliderLeft.vue'
import MyFooter from '@/components/elements/myFooter.vue'
export default {
  components: {
    TheSliderLeft,
    MyFooter
  }
}
</script>