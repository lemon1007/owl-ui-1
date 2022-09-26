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
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
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
  <button class="owl-button"
          :class="classes"
          :disabled="disabled">
    <span v-if="loading" class="owl-loadingIndicator"></span>
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
  }

  &.owl-level-danger {
    background: red;
    color: white;
    border: red 1px solid;
  }

  &.owl-theme-button {
    &[disabled] {
      cursor: not-allowed;
      color: darkgray;
      border: 1px solid darkgray;
    }
  }

  &.owl-theme-link, &.owl-theme-text {
    &[disabled] {
      cursor: not-allowed;
      color: darkgray;
      border: none;
      background: none;
    }
  }

  > .owl-loadingIndicator {
    width: 10px;
    height: 10px;
    display: inline-block;
    margin-right: 4px;
    border-radius: 8px;
    border-color: #3ab4e8 #6de6fc #5ccdaf transparent;
    border-style: solid;
    border-width: 2px;
    animation: owl-spin 1s infinite linear;
  }
}

@keyframes owl-spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

</style>