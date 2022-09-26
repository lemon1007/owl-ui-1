<script lang="ts">
export default {
  props: {
    theme: {
      type: String,
      default: 'button'
    }
  },
};
</script>

<template>
  <button class="owl-button" :class="`theme-${theme}`">
    <slot/>
  </button>
</template>

<style lang="scss" scoped>
</style>