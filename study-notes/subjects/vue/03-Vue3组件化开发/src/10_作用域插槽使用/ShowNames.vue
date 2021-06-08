<template>
  <div>
    <template v-for="(item, index) in names" :key="item">
      <slot :item="item" :index="index"></slot>

      <slot name="sq"></slot>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    names: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style scoped></style>
