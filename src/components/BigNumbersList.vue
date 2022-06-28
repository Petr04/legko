<template>
  <ol ref="ol">
    <slot />
  </ol>
</template>

<style scoped>
ol {
  counter-reset: counter;
  padding: 0 !important;
}
</style>

<script>
export default {
  props: ['color'],
  mounted() {
    this.$refs.ol.style.setProperty('--color', this.color);
  },
};
</script>
