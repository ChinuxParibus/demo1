<template>
  <div id="app">
    <Navbar />
      <router-view/>
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default {
  components: { Navbar, Footer }
}
</script>

<style lang="sass">
@import "src/styles/normalize.sass"
@import "src/styles/index.sass"
</style>
