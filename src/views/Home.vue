<template>
  <div>
    <Promotion />
    <Hero />
  </div>
</template>

<script>
import Promotion from '@/components/Promotion.vue'
import Hero from '@/components/Hero.vue'

export default {
  name: 'Home',
  components: { Promotion, Hero }
}
</script>
