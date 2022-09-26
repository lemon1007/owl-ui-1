<script lang="ts">
import Button from '../../lib/Button.vue';

export default {
  components: {Button},
  setup() {
    const onClick = () => {
      console.log('hi');
    };
    return {onClick};
  }
};
</script>

<template>
  <div>Button示例</div>
  <h2>示例1</h2>
  <Button @click="onClick"
          @focus="onClick"
          @mouseover="onClick"
          size="'small">
    点击我
  </Button>
</template>

<style lang="scss" scoped>
</style>