<script lang="ts">
import Tab from './Tab.vue';
import {computed} from 'vue';

export default {
  props: {
    selected: {
      type: String
    }
  },
  setup(props: any, context: any) {
    const defaults = context.slots.default();
    defaults.forEach((tag: any) => {
      if (tag.type !== Tab) {
        throw new Error('Tabs的子组件必须是Tab');
      }
    });

    const current = computed(() => {
      return defaults.find((tag: any) => tag.props.title === props.selected);
    });

    const titles = defaults.map((tag: any) => {
      return tag.props.title;
    });

    const select = (title: string) => {
      context.emit('update:selected', title);
    };
    return {defaults, titles, select, current};
  }
};
</script>

<template>
  <div class="owl-tabs">
    <div class="owl-tabs-nav">
      <div class="owl-tabs-nav-item"
           :class="{selected:title===selected}"
           @click="select(title)"
           v-for="(title,index) in titles"
           :key="index">
        {{ title }}
      </div>
    </div>
    <div class="owl-tabs-content">
      <component :is="current" :key="current.props.title"/>
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

      &:focus {
        outline: none;
        background: none;
      }
    }
  }

  &-content {
    padding: 8px 0;

    &-item {
      display: none;

      &.selected {
        display: block;
      }
    }
  }
}
</style>