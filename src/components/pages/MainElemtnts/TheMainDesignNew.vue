<template>
  <div class="mainDesignNew">
    <h1 class="font-bold">Новые идеи в жизнь</h1>
    <p>
      Лофт-стиль олицетворяет собой дерзкое и оригинальное сочетание промышленности, минимализма и
      уюта. Чтобы внести свежесть в этот уже знакомый стиль. Играя с традиционной эстетикой
      лофтового стиля, можно создать совершенно уникальные и современные интерьерные решения.
      Воплощая новые идеи в жизнь, вы не только придадите вашему пространству свежий вид, но и
      создадите уникальную атмосферу, оставаясь верными корням промышленного дизайна
    </p>
  </div>
</template>


<style scoped>
p {
  padding: 30px 0px;
}
h1 {
  font-size: 50px;
}
.mainDesignNew {
  padding: 100px 0;
  text-align: center;
  background: white;
}

@media (min-width: 768px) and (max-width: 1023px) {
  .mainDesign {
    padding: 0;
  }

  p {
    padding: 10px 25px;
  }
  h1 {
    font-size: 40px;
  }
}
@media (max-width: 767px) {
 .mainDesignNew{
  padding: 50px 0;
 }

  p {
    padding: 10px 0px;
    font-size: 12px;
  }
  h1 {
    font-size: 25px;
  }
}
</style>