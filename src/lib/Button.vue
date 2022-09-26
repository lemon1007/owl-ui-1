<script lang="ts">
import {computed} from 'vue';

export default {
  props: {
    theme: {
      type: String,
      default: 'button'
    },
    size: {
      type: String,
      default: 'normal'
    },
    level: {
      type: String,
      default: 'normal'
    }
  },
  setup(props: any, context: any) {
    const {theme, size, level} = props;
    const classes = computed(() => {
      return {
        [`owl-theme-${theme}`]: theme,
        [`owl-size-${size}`]: size,
        [`owl-level-${level}`]: level,
      };
    });
    return {classes};
  }
};
</script>

<template>
  <button class="owl-button" :class="classes">
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

  &.owl-theme-button {
    &:hover {
      border: 1px solid $border-color;
      color: $color;
    }

    //&:focus {
    //  border: 1px solid $border-color;
    //  color: $color;
    //}
  }

  &.owl-theme-link {
    background: none;
    border: none;
    color: $color;

    &:hover {
      color: #6de6fc;
    }
  }

  &.owl-theme-text {
    border: none;
    background: none;

    &:hover {
      background: white;
    }
  }

  &.owl-size-big {
    font-size: 24px;
    padding: 5px 20px;
  }

  &.owl-size-small {
    font-size: 12px;
  }

  &.owl-level-main {
    color: white;
    border: #3ab4e8 1px solid;
    background: $color;

    &:hover {
      color: white;
      border: #3ab4e8 1px solid;
      background: $color;
    }
  }

  &.owl-level-danger {
    background: red;
    color: white;
    border: red 1px solid;

    &:hover {
      background: red;
      color: white;
      border: red 1px solid;
    }
  }
}

</style>