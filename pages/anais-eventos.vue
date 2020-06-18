<template>
  <div class="container-fluid mb-4">
    <div v-html="$md.render(anaisEventos.conteudo)"></div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  asyncData ({ params }) {
    return axios.get(`http://localhost:1337/anais-eventos`)
      .then((res) => {
        return { anaisEventos: res.data }
      })
  },
}
</script>