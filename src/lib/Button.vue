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
$border-color: #3ab4e8;
$color: #3ab4e8;
.owl-button {
  margin-top: 10px;
  margin-right: 10px;
  padding: 5px 10px;
  border: 1px solid darkgray;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: white;
  border-radius: 10px;

  &:hover {
    border: 1px solid $border-color;
    color: $color;
  }

  &:focus {
    border: 1px solid $border-color;
    color: $color;
  }
}
</style>