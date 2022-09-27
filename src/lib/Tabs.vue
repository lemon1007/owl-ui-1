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

    const titles = defaults.map((tag: any) => {
      return tag.props.title;
    });
    return {defaults, titles};
  }
};
</script>

<template>
  <div>
    <div v-for="(t,index) in titles" :key="index">{{ t }}</div>
    <component v-for="(c,index) in defaults" :is="c" :key="index"/>
  </div>
</template>

<style lang="scss" scoped>
</style>