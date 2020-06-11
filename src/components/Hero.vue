<template>
  <section class="section">
    <div class="flex container">
      <article class="article flex flex-column flex-justify-center">
        <div class="cta-container">
          <p class="text-highlighted">Cuídalos sin importar las distancias</p>
          <h1 class="h1-size">¡Proteger a tu familia en tu país <span class="text-highlighted">nunca</span> fue tan fácil!</h1>
          <p>
          Ahora puedes hacerlo con <span class="text-highlighted">asistensi</span>, el mejor seguro para emergencias médicas y atención médica inmediata, con cobertura de hasta <strong>USD.10.000</strong>, por patología por año, desde tan sólo <strong>USD.15</strong> al mes. Obtén ya tu cotización de la forma más fácil y cuida a tus seres queridos desde la distancia. ¡Afílialos ya al único seguro 100% online e inmediato!
          </p>
        </div>
        <div class="flex flex-around" style="margin-top: 1rem">
          <router-link to="/flights" tag="button" class="smooth cta-active">¡Quiero Cotizar!</router-link>
          <router-link to="/flights" tag="button" class="smooth" style="margin-left: 1rem">¡Afiliarse ahora!</router-link>
        </div>
      </article>
      <article class="article banner-container"></article>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero'
}
</script>

<style lang="sass" scoped>
.section
  margin: 0
  padding: 0
  min-height: 100vh

.article
  margin: 0
  padding: 0
  min-height: 100vh
  min-width: 50vw

.cta-container
  width: 50%

.banner-container
  position: absolute
  right: 0
  z-index: -1
  background-image: url('../assets/banner-3.png')
  background-repeat: no-repeat
  background-position: right
  background-size: contain
  background-clip: padding-box

.h1-size > .text-highlighted
  font-weight: normal
</style>
