<template>
  <div>
    <show-message
      id="abc"
      class="sq"
      title="哈哈哈"
      content="我是哈哈哈哈"
      message-info=""
    ></show-message>
    <show-message title="呵呵呵" content="我是呵呵呵呵"></show-message>
    <show-message :title="title" :content="content"></show-message>
    <show-message
      :title="message.title"
      :content="message.content"
    ></show-message>
    <show-message v-bind="message"></show-message>

    <multi-root-element id="aaaa"></multi-root-element>
  </div>
</template>

<script>
import ShowMessage from './ShowMessage.vue';
import MultiRootElement from './MultiRootElement.vue';
export default {
  components: {
    ShowMessage,
    MultiRootElement,
  },
  data() {
    return {
      title: '嘻嘻嘻',
      content: '我是嘻嘻嘻嘻',
      message: {
        title: '嘿嘿嘿',
        content: '我是嘿嘿嘿',
      },
    };
  },
};
</script>

<style scoped></style>
