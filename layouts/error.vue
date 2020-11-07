<template>
  <div class="nuxt-error">
    <component :is="errorPage" :error="error" />
  </div>
</template>

<script>
import error404 from "@/components/error/404.vue";
import error500 from "@/components/error/500.vue";
import error502 from "@/components/error/502.vue";


export default {
  name: 'nuxt-error',
  layout: 'default', // optional
  props: {
    error: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    errorPage() {
      if (this.error.statusCode === 404) {
        return error404;
      }
      if (this.error.statusCode === 502){
        return error502;
      }      // catch everything else
      return error500;
    }
  }
};
</script>