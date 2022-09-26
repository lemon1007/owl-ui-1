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
    <button :class="{checked:value}" @click="toggle">
      <span></span>
    </button>
  </div>
</template>

<style lang="scss" scoped>
$h: 22px;
$h2: $h - 4px;
button {
  height: $h;
  width: $h * 2;
  border: none;
  background: gray;
  border-radius: $h / 2;
  position: relative;

  span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background: white;
    border-radius: $h2 / 2;
    transition: left 250ms;
  }

  &.checked {
    background: #553704;

    > span {
      left: calc(100% - #{$h2} - 2px);
    }
  }
}


</style>