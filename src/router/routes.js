import TheMain from '@/components/pages/TheMain.vue';
import TheAbaut from '@/components/pages/TheAbaut.vue';
import TheGoods from '@/components/pages/TheGoods.vue';
import TheContacts from '@/components/pages/TheContacts.vue';
import TheTables from '@/components/pages/MainElemtnts/Goods/TheTables.vue';
import GoodsBissnes from '@/components/pages/MainElemtnts/Goods/GoodsBissnes.vue';
import TheForHome from "../components/pages/MainElemtnts/Goods/TheFofHome.vue"
import TheChairs from "../components/pages/MainElemtnts/Goods/TheChairs.vue"
import TheRacks from "../components/pages/MainElemtnts/Goods/TheRacks.vue"
import TheShoe from "../components/pages/MainElemtnts/Goods/TheShoe.vue"
import TheShelves from "../components/pages/MainElemtnts/Goods/TheShelves.vue"
import TheChestofdrawers from "../components/pages/MainElemtnts/Goods/TheChestofdrawers.vue"
import TheBenches from "../components/pages/MainElemtnts/Goods/TheBenches.vue"
import TheFurnitureforhome from "../components/pages/MainElemtnts/Goods/TheFurnitureforhome.vue"
import TheSummercottagefurniture from "../components/pages/MainElemtnts/Goods/TheSummercottagefurniture.vue"
import TheFurnitureforkitchen from "../components/pages/MainElemtnts/Goods/TheFurnitureforkitchen.vue"
import TheChandeliers from "../components/pages/MainElemtnts/Goods/TheChandeliers.vue"


export default {
    main: {
        name: 'Главная',
        path: '/',
        component: TheMain,
    },
    about: {
        path: '/about',
        component: TheAbaut,
        name: 'О нас'
    },
    goods: {
        path: '/goods',
        component: TheGoods,
        name: 'Товары'
    },
    contacts: {
        path: '/contacts',
        component: TheContacts,
        name: 'Контакты',
    },
    TheTables: {
        path: '/TheTables',
        component: TheTables,
        name: 'Столы',
        hidden: true,
    },
    GoodsBissnes: {
        path: '/GoodsBissnes',
        component: GoodsBissnes,
        name: 'Бизнеc',
        hidden: true,
    },
    TheForHome: {
        path: '/TheForHome',
        component: TheForHome,
        name: 'Домидача',
        hidden: true,
    },
    TheChairs: {
        path: '/TheChairs',
        component: TheChairs,
        name: 'Стулья',
        hidden: true,
    },
    TheRacks: {
        path: '/TheRacks',
        component: TheRacks,
        name: 'Стелажи',
        hidden: true,
    },
    TheShoe: {
        path: '/TheShoe',
        component: TheShoe,
        name: 'Обувницы',
        hidden: true,
    },
    TheShelves: {
        path: '/TheShelves',
        component: TheShelves,
        name: 'Полки на стены ',
        hidden: true,
    },
    TheChestofdrawers: {
        path: '/TheChestofdrawers',
        component: TheChestofdrawers,
        name: 'Тумбы-комоды',
        hidden: true,
    },
    TheBenches: {
        path: '/TheBenches',
        component: TheBenches,
        name: 'Лавки-скамьи',
        hidden: true,
    },
    TheFurnitureforhome: {
        path: '/TheFurnitureforhome',
        component: TheFurnitureforhome,
        name: 'Мебель для дома',
        hidden: true,
    },
    TheSummercottagefurniture: {
        path: '/TheSummercottagefurniture',
        component: TheSummercottagefurniture,
        name: 'Мебель для дачи',
        hidden: true,
    },
    TheFurnitureforkitchen: {
        path: '/TheFurnitureforkitchen',
        component: TheFurnitureforkitchen,
        name: 'Мебель для кухни',
        hidden: true,
    },
    TheChandeliers: {
        path: '/TheChandeliers',
        component: TheChandeliers,
        name: 'Люстры',
        hidden: true,
    },
    
};
