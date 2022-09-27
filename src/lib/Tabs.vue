<script lang="ts">
import Tab from './Tab.vue';

export default {
  setup(props: any, context: any) {
    const defaults = context.slots.default();
    defaults.forEach((tag: any) => {
      if (tag.type !== Tab) {
        throw new Error('Tabs的子组件必须是Tab');
      }
    });
    return {defaults};
  }
};
</script>

<template>
  <div>Tabs组价</div>
</template>

<style lang="scss" scoped>
</style>