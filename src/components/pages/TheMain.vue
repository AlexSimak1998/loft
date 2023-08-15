<template>
  <div class="main">
    <theMainHeader />
    <theMainAbaut />
    <TheMainDesign />
  </div>
  <TheMainDesignNew />
  <div class="main">
    <TheMainCreative />
  </div>
  <MyFooter />
</template>
<script>
import theMainHeader from '@/components/pages/MainElemtnts/TheMainHeader.vue'
import theMainAbaut from '@/components/pages/MainElemtnts/theMainAbaut.vue'
import TheMainDesign from '@/components/pages/MainElemtnts/TheMainDesign.vue'
import TheMainDesignNew from '@/components/pages/MainElemtnts/TheMainDesignNew.vue'
import TheMainCreative from '@/components/pages/MainElemtnts/TheMainCreative.vue'
import MyFooter from '@/components/elements/myFooter.vue'
export default {
  components: {
    theMainHeader,
    theMainAbaut,
    TheMainDesign,
    TheMainDesignNew,
    TheMainCreative,
    MyFooter
  }
}
</script>

<style>
.main {
  max-width: 1200px;
  margin: 0 auto;
}


@media (min-width: 768px) and (max-width: 1023px) {
.main {
  padding: 0 25px;
}
  }
</style>