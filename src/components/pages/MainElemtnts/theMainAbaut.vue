<template>
  <div class="theMainAbout">
    <div class="block text-center">
      <div class="block1">
        <img src="../../../assets/img/svg/x.png" class="img" />
        <h1>Качество</h1>
        <p>
          Мы считаем что быть лучшими - это не просто статус, это главное обязательство перед нашим
          клиентом
        </p>
      </div>
      <div class="block2">
        <img src="../../../assets/img/svg/lack.png" class="img" />
        <h1>Покрытие</h1>
        <p>
          Для покрытия и пропитки мебели применяются мы используемы продукцию лушчих мировых бредов
        </p>
      </div>
      <div class="block3">
        <img src="../../../assets/img/svg/fur.png" class="img" />
        <h1>Фурнитура</h1>
        <p>
          Внимание к детаталям и стремление совершенству движет нами к при выборе комплектующих
          элементов
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import routes from '@/router/routes.js'

export default {
  name: 'linksNavbar',
  data() {
    return {
      routes: routes
    }
  }
}
</script>

<style scoped>
.img {
  margin: 0px 0 15px;
  width: 80px;
  height: 80px;
}
p {
  padding: 8px;
}
h1 {
  font-size: 24px;
  font-weight: 600;
}

.block {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.block1,
.block2,
.block3 {
  background: white;
  box-shadow: 0 1px 3px rgba(32, 32, 32, 0.116); /* Тень с видимостью (альфа-канал равен 0.96) */
  transition: box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px 0;
}

@media (min-width: 768px) and (max-width: 1023px) {
  .block {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;
  }
  .block1,
  .block2,
  .block3 {
    margin: 15px auto;
  }
}

@media (max-width: 767px){
  .block {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;
  }
  .block1,
  .block2,
  .block3 {
    margin: 15px auto;
  }
}
</style>