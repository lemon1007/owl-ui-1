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
  <button class="owl-button" :class="`owl-theme-${theme}`">
    <slot/>
  </button>
</template>

<style lang="scss">
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
  border-radius: 7px;
}

.owl-theme-button {
  &:hover {
    border: 1px solid $border-color;
    color: $color;
  }

  &:focus {
    border: 1px solid $border-color;
    color: $color;
  }
}

.owl-theme-link {
  background: none;
  border: none;
  color: $color;

  &:hover {
    color: #6de6fc;
  }
}

.owl-theme-text {
  border: none;
  background: none;

  &:hover {
    background: white;
  }
}
</style>