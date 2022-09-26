<script lang="ts">
import Dialog from '../../lib/Dialog.vue';
import Button from '../../lib/Button.vue';
import {openDialog} from '../../lib/openDialog';
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
      return true;
    };
    // 示例2
    const showDialog = () => {
      openDialog({
        title: '标题',
        content: '这里是一句话传dialog的正文',
        ok() {
          console.log('ok');
        },
        cancel() {
          console.log('cancel');
        }
      });
    };
    return {visible, toggle, ok, cancel, showDialog};
  }
};
</script>

<template>
  <div>Dialog示例</div>
  <h2>示例1</h2>
  <Button @click="toggle">toggle</Button>
  <Dialog v-model:visible="visible"
          :closeOnClickOverlay="true"
          :ok="ok"
          :cancel="cancel">
    <template v-slot:title>
      <span>这是标题</span>
    </template>
    <template v-slot:content>
      <p>这里是context的内容</p>
    </template>
  </Dialog>

  <h2>示例2</h2>
  <Button @click="showDialog">show</Button>
</template>

<style lang="scss" scoped>
h2 {
  margin-top: 20px;
}
</style>