<template>
  <div> class="contadoes">
    <app-contador v-for="c in 5" :key="c"/>
  </div>
</template>
<script>
import Contador from "@/Contador";
export default {
  components: {
    'app-contador': Contador
  }
}
</script>

<style>

</style>