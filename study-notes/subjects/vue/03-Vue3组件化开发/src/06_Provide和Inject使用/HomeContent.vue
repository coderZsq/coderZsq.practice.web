<template>
  <div>HomeContent: {{ name }} - {{ age }} - {{ length.value }}</div>
</template>

<script>
export default {
  inject: ['name', 'age', 'length'],
};
</script>

<style scoped></style>
