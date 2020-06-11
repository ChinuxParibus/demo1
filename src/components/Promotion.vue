<template>
  <div class="promotion" style="margin-top: 3.5rem">
    <div class="container">
      {{ promotionMsg }} <a href="#">Haz click aquí y accede</a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Promotion',
  data () {
    return {
      promotionMsg: 'Mientras dure la pandemia del COVID-19 ponemos a disposición totalmente gratis asistensi SOS para consultas médicas por cualquier motivo.'
    }
  }
}
</script>
<style lang="sass" scoped>
@import "src/styles/index.sass"

.promotion
  padding: 1rem 0
  background-color: $main-color
  color: $highlight-color
</style>
