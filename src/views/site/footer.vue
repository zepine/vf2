<template>
  <v-footer app color="primary" dark absolute>
    <v-col class="text-right">
      © {{ new Date().getFullYear() + " " + ftr }}
    </v-col>
  </v-footer>
</template>

<script>
export default {
  props: ['ftr']
}
</script>
