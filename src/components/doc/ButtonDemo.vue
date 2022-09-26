<script lang="ts">
import Button from '../../lib/Button.vue';

export default {
  components: {Button},
  setup() {}
};
</script>

<template>
  <div>Button示例</div>
  <h2>示例Theme</h2>
  <Button theme="button">你好</Button>
  <Button theme="link">你好</Button>
  <Button theme="text">你好</Button>

  <h2>示例Size</h2>
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

  <h2>示例Level</h2>
  <Button level="normal">normal</Button>
  <Button level="main">main</Button>
  <Button level="danger">danger</Button>

  <h2>示例Disable</h2>
  <Button :disabled="true" theme="button">禁用按钮</Button>
  <Button :disabled="true" theme="link">禁用链接按钮</Button>
  <Button :disabled="true" theme="text">禁用文本按钮</Button>

  <h2>示例Loading</h2>
  <Button loading>加载中</Button>
  <Button>加载完毕</Button>

</template>

<style lang="scss" scoped>
h2 {
  margin-top: 20px;
}
</style>