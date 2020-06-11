<template>
  <nav class="navbar">
    <div class="flex flex-align-stretch flex-between container">
      <div class="nav-logo">
        <img src="Asistensi_logotipo.svg" alt="Logo">
      </div>
      <div class="flex">
        <div class="nav-item" v-for="(link, i) in links" :key="i">
          <router-link :to="link.href" class="smooth"> {{ link.name }} </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      links: [
        { href: '/', name: 'Inicio' },
        { href: '', name: 'Planes' },
        { href: '', name: 'Beneficios' },
        { href: '', name: '¿Quiénes somos?' },
        { href: '', name: 'Preguntas frecuentes' },
        { href: '', name: 'Contacto' },
        { href: '', name: 'SOS' },
        { href: '', name: 'Iniciar Sesión' }
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
@import "src/styles/index.sass"

.navbar
  background-color: white
  box-shadow: 0 .01rem 0.075rem $font-main-color
  padding: .5rem 0
  height: 2.5rem
  width: 100vw
  position: fixed
  top: 0

.nav-item
  padding: .75rem .5rem

.nav-item a:hover, .nav-item:last-child a
  color: $main-color

.nav-item:last-child a:hover
  color: lighten($main-color, 10%)

.nav-logo
  height: 32px
  width: 128px
</style>
