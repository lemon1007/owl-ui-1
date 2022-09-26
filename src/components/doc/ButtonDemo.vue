<script lang="ts">
import Button from '../../lib/Button.vue';

export default {
  components: {Button},
  setup() {}
};
</script>

<template>
  <div>Button示例</div>
  <h2>示例theme</h2>
  <Button>你好</Button>
  <Button theme="button">你好</Button>
  <Button theme="link">你好</Button>
  <Button theme="text">你好</Button>

  <h2>示例size</h2>
  <div>
    <Button size="small">你好</Button>
    <Button>你好</Button>
    <Button size="big">你好</Button>
  </div>

  <div>
    <Button size="small" theme="link">你好</Button>
    <Button theme="link">你好</Button>
    <Button size="big" theme="link">你好</Button>
  </div>

  <div>
    <Button size="small" theme="text">你好</Button>
    <Button theme="text">你好</Button>
    <Button size="big" theme="text">你好</Button>
  </div>

  <h2>示例level</h2>
  <Button level="normal">你好</Button>
  <Button level="main">你好</Button>
  <Button level="danger">你好</Button>

</template>

<style lang="scss" scoped>
h2 {
  margin-top: 20px;
}
</style>