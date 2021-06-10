<template>
  <div>
    <input v-model="value" />
    <input v-model="sq" />
  </div>
</template>

<script>
export default {
  props: {
    modelValue: String,
    title: String,
  },
  emits: ['update:modelValue', 'update:title'],
  computed: {
    value: {
      set(value) {
        this.$emit('update:modelValue', value);
      },
      get() {
        return this.modelValue;
      },
    },
    sq: {
      set(sq) {
        this.$emit('update:title', sq);
      },
      get() {
        return this.title;
      },
    },
  },
};
</script>

<style scoped></style>
