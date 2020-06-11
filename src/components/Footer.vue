<template>
  <footer class="footer">
    <div class="container grid">
      <div class="contact">
        <p v-for="(contacto, i) in contactList" :key="i">{{ contacto.pais }}: <span class="text-highlighted">{{ contacto.telefono }}</span></p>
        <div class="download">
          <button class="smooth">App Store</button>
          <button class="smooth">Google Play</button>
        </div>
      </div>
      <div class="sitemap flex">
        <div>
          <p class="text-highlighted">Mapa de sitio</p>
          <ul>
            <li v-for="(link, i) in sitemap" :key="i">
              <a href="#" class="smooth">{{ link }}</a>
            </li>
          </ul>
        </div>
        <div>
          <p class="text-highlighted">Información</p>
          <ul>
            <li v-for="(link, i) in information" :key="i">
              <a href="#" class="smooth">{{ link }}</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="divider flex flex-center">
        <hr style="width: 100%">
      </div>
      <div class="copyright flex flex-align-center">
        <span>&copy; 2020 <strong>Asistensi</strong> Global</span>
      </div>
      <div class="logo">
        <img src="logo-footer.svg" alt="">
      </div>
      <div class="social flex flex-align-center">
        <div class="flex social-icons">
          <a href="https://www.facebook.com/Asistensi-101600031451872" target="_blank" rel="noopener noreferrer" class="social-icon">
            <img src="/social/facebook.svg" alt="logo facebook">
          </a>
          <a href="https://www.linkedin.com/company/asistensi" target="_blank" rel="noopener noreferrer" class="social-icon">
            <img src="/social/linkedin.svg" alt="logo linked in">
          </a>
          <a href="https://twitter.com/asisten_si" target="_blank" rel="noopener noreferrer" class="social-icon">
            <img src="/social/twitter.svg" alt="logo twitter" class="w-20 c-p icon-hover m-r20 m-l20">
          </a>
          <a href="https://www.instagram.com/asisten.si/" target="_blank" rel="noopener noreferrer" class="social-icon">
            <img src="/social/instagram.svg" alt="logo instagram">
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'Footer',
  data () {
    return {
      contactList: [
        { pais: 'Estados Unidos', telefono: '+1 (305) 455.88.11' },
        { pais: 'Venezuela', telefono: '+58 (800) 836.36.37 / +58 (212) 822.12.60' },
        { pais: 'España', telefono: '+34 (911) 238.276' }
      ],
      sitemap: [
        '¿Quienes somos?',
        'Planes',
        'Beneficios',
        'Cotizar un plan',
        'Contacto'
      ],
      information: [
        'Preguntas Frecuentes',
        'Términos de uso',
        'Políticas de privacidad',
        'Políticas de cookies',
        'Aviso legal'
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
@import "src/styles/index.sass"

button
  background-color: lighten($main-color, 10%)
p
  line-height: 1.3rem

.footer
  background-color: $main-color
  color: white
  min-height: 50vh
  padding: 2.5rem 0

.grid
  grid-template-columns: 1fr auto 1fr
  grid-template-rows: 2fr 1fr auto

.divider
  grid-column: 1 / 5

span.text-highlighted
  font-weight: normal

ul
  list-style-type: none
  padding: 0

li
  margin: .6rem 0

a
  color: white !important
  display: inline-block
  width: 100%
  font-weight: normal !important

a:hover
  font-weight: bold !important

.contact
  grid-column: 1 / 3

.download
  margin-top: 2rem

.logo
  width: 128px
  height: 32px

.download button:last-child
  margin-left: 1rem

.sitemap div
  width: 50%

.social
  justify-content: flex-end

.social-icon
  margin-left: 2rem
</style>
