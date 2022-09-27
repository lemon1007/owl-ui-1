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
  <div class="owl-tabs">
    <div class="owl-tabs-nav">
      <div class="owl-tabs-nav-item" v-for="(t,index) in titles" :key="index">{{ t }}</div>
    </div>
    <div class="owl-tabs-content">
      <component class="owl-tabs-content-item"  v-for="(c,index) in defaults" :is="c" :key="index"/>
    </div>
  </div>
</template>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.owl-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;

    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;

      &:first-child {
        margin-left: 0;
      }

      &.selected {
        color: $blue;
      }
    }
  }

  &-content {
    padding: 8px 0;
  }
}
</style>