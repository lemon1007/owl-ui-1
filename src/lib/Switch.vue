<script lang="ts">

export default {
  props: {
    value: Boolean
  },
  setup(props: any, context: any) {
    const toggle = () => {
      context.emit('update:value', !props.value);
    };
    return {toggle};
  }
};
</script>

<template>
  <div>
    <button :class="{'owl-checked':value}" @click="toggle" class="owl-switch">
      <span></span>
    </button>
  </div>
</template>

<style lang="scss">
$h: 22px;
$h2: $h - 4px;
.owl-switch {
  height: $h;
  width: $h * 2;
  border: none;
  background: gray;
  border-radius: $h / 2;
  position: relative;

  > span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background: white;
    border-radius: $h2 / 2;
    transition: left 250ms;
  }

  &.owl-checked {
    background: #553704;

    > span {
      left: calc(100% - #{$h2} - 2px);
    }
  }

  &:focus {
    outline: none;
  }

  &:active {
    > span {
      width: $h2 + 4px;
    }
  }

  &.owl-checked:active {
    > span {
      width: $h2 + 4px;
      margin-left: -4px;
    }
  }
}


</style>