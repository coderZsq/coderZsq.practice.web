<template>
  <div>
    <my-slot-cpn>
      <button>我是按钮</button>
    </my-slot-cpn>

    <my-slot-cpn>
      我是普通的文本
    </my-slot-cpn>

    <my-slot-cpn>
      <my-button />
    </my-slot-cpn>

    <my-slot-cpn></my-slot-cpn>

    <!-- 插入了很多的内容 -->
    <my-slot-cpn>
      <h2>哈哈哈</h2>
      <button>我是按钮</button>
      <strong>我是strong</strong>
    </my-slot-cpn>
  </div>
</template>

<script>
import MySlotCpn from './MySlotCpn.vue';
import MyButton from './MyButton.vue';
export default {
  components: {
    MySlotCpn,
    MyButton,
  },
};
</script>

<style scoped></style>
