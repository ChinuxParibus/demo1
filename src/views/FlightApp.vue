<template>
  <section class="container" style="margin-top: 3.5rem">
    <h1>This is an about page</h1>
    <pre><code>{{ flights }}</code></pre>
  </section>
</template>

<script>
import store from '@/store/index'

export default {
  name: 'FlightApp',
  computed: {
    flights () {
      return store.state.flights
    }
  },
  created () {
    store.dispatch('fetchFlights', this)
  }
}
</script>
