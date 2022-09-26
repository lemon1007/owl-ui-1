<script lang="ts">
import Dialog from '../../lib/Dialog.vue';
import Button from '../../lib/Button.vue';
import {ref} from 'vue';

export default {
  components: {Button, Dialog},
  setup() {
    const x = ref(false);
    const toggle = () => {
      x.value = !x.value;
    };
    return {x, toggle};
  }
};
</script>

<template>
  <div>Dialog示例</div>
  <h2>示例1</h2>
  <Button @click="toggle">toggle</Button>
  <Dialog :visible="x"/>
</template>

<style lang="scss" scoped>
</style>