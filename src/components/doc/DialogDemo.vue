<script lang="ts">
import Dialog from '../../lib/Dialog.vue';
import Button from '../../lib/Button.vue';
import {ref} from 'vue';

export default {
  components: {Button, Dialog},
  setup() {
    const visible = ref(false);
    const toggle = () => {
      visible.value = !visible.value;
    };
    const ok = () => {
      // return false无法关闭，return true可以关闭
      return true;
    };
    const cancel = () => {
      // return false无法关闭，return true可以关闭
      return;
    };
    return {visible, toggle, ok, cancel};
  }
};
</script>

<template>
  <div>Dialog示例</div>
  <h2>示例1</h2>
  <Button @click="toggle">toggle</Button>
  <Dialog v-model:visible="visible"
          :closeOnClickOverlay="false"
          :ok="ok"
          :cancel="cancel"/>
</template>

<style lang="scss" scoped>
</style>