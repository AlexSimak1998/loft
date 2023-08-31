<template>
  <div class="goods">
    <h1 class="text-center font-bold">Каталог мебели</h1>
    <div class="goodsblocks mt-10">
      <div class="goodsblock" v-for="goods in goodsblock" :key="goods.title">
        <div class="goodsblock-content text-center">
          <div class="img" @click="goToGoodsCard(goods.route)">
            <img class="image" :src="goods.img" alt="Мебель" />
          </div>
          <p class="title">{{ goods.title }}</p>
        </div>
      </div>
    </div>
  </div>
  <MyFooter />
</template>

<style scoped>
h1 {
  font-size: 50px;
  margin-bottom: 30px;
}

.goodsblocks {
  display: grid;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
}

.img {
  border: 1px solid #ddd;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
  margin-bottom: 30px;
  cursor: pointer;
}

.img:hover {
  transform: scale(1.05);
}

.title {
  font-size: 18px;
  font-weight: bold;
}
.goods {
  box-sizing: border-box;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 0 100px 0;
  color: white;
}
.image {
  width: 100%;
  height: 350px;
  object-fit: cover;
}
@media screen and (max-width: 768px) {
  .goodsblocks {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
  .image {
    width: 100%;
    height: 300px;
  }

  h1 {
    font-size: 30px;
    margin-bottom: 30px;
  }

  .img {
    margin-bottom: 20px;
  }
}
@media (min-width: 768px) and (max-width: 1023px) {
  .goodsblocks {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  .image {
    width: 100%;
    height: 300px;
  }

  h1 {
    font-size: 30px;
    margin-bottom: 20px;
  }

  .img {
    margin-bottom: 40px;
  }
}
</style>

<script>
import MyFooter from '@/components/elements/myFooter.vue'

export default {
  components: {
    MyFooter
  },
  data() {
    return {
      goodsblock: [
        {
          img: 'https://259506.selcdn.ru/sites-static/site459985/6d4f75d4-a25b-4d8d-91be-81671914b867/6d4f75d4-a25b-4d8d-91be-81671914b867-804784.jpeg',
          title: 'Cтолы',
          id: 0,
          route: '/TheTables'
        },
        {
          img: 'https://cherdak-masterskaya.ru/wp-content/uploads/2022/06/img_8555.jpg.webp',
          title: 'Стулья',
          id: 1,
          route: '/TheChairs'
        },
        {
          img: 'https://259506.selcdn.ru/sites-static/site459985/558dcc91-77ae-4274-af51-b01ded192a3e/558dcc91-77ae-4274-af51-b01ded192a3e-804787.jpeg',
          title: 'Cтелажи',
          id: 2,
          route: '/TheShelving'
        },
        {
          img: 'https://ir.ozone.ru/s3/multimedia-p/c1000/6425570137.jpg',
          title: 'Обувницы',
          id: 3,
          route: '/TheShoe'
        },
        {
          img: 'https://art-puf.com.ua/_sh/20/2045.jpg',
          title: 'Полки на стены',
          id: 4,
          route: '/TheShelves'
        },
        {
          img: 'https://259506.selcdn.ru/sites-static/site459985/f82c98b2-a3d2-4de5-9b92-b852f519307d/f82c98b2-a3d2-4de5-9b92-b852f519307d-804785.jpeg',
          title: 'Тумбы-комоды',
          id: 5,
          route: '/TheChestofdrawers'
        },
        {
          img: 'https://colodu.club/uploads/posts/2022-10/1667231156_1-colodu-club-p-skameika-loft-svoimi-rukami-vkontakte-1.jpg',
          title: 'Лавки-скамьи',
          id: 6,
          route: '/TheBenches'
        },
        {
          img: 'https://259506.selcdn.ru/sites-static/site459985/9219b4f1-66bd-4707-bd21-d0edfb680c61/9219b4f1-66bd-4707-bd21-d0edfb680c61-804790.jpeg',
          title: 'Мебель для дома',
          id: 7,
          route: '/TheFurnitureforhome'
        },
        {
          img: 'https://cs6.livemaster.ru/storage/f8/29/d02097cea5b74b3ab394df38c4m6.jpg',
          title: 'Мебель для дачи',
          id: 7,
          route: '/TheSummercottagefurniture'
        },
        {
          img: 'https://259506.selcdn.ru/sites-static/site459985/5d614779-6458-4401-afca-6adae75bb548/5d614779-6458-4401-afca-6adae75bb548-804795.jpeg',
          title: 'Мебель для бизнеса',
          id: 8,
          route: '/GoodsBissnes'
        },
        {
          img: 'https://shkafkupeprosto.ru/States3/Loft/Loft-015.jpg',
          title: 'Мебель для кухни',
          id: 9,
          route: '/TheFurnitureforkitchen'
        },
        {
          img: 'https://259506.selcdn.ru/sites-static/site459985/f02faf6c-e63b-42c3-8a97-76a9419781f3/f02faf6c-e63b-42c3-8a97-76a9419781f3-804793.jpeg',
          title: 'Люстры',
          id: 10,
          route: '/TheChandeliers'
        }
      ]
    }
  },
  methods: {
    goToGoodsCard(route) {
      if (route && typeof route === 'string') {
        this.$router.push(route)
      } else {
        this.$router.push('/')
      }
    }
  }
}
</script>