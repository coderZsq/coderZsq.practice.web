<template>
  <div>
    <button @click="addNum">添加数字</button>
    <button @click="removeNum">删除数组</button>
    <button @click="shuffleNum">数字洗牌</button>

    <transition-group tag="p" name="sq">
      <span v-for="item in numbers" :key="item" class="item">
        {{ item }}
      </span>
    </transition-group>
  </div>
</template>

<script>
import _ from 'lodash';
export default {
  data() {
    return {
      numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      numCounter: 10,
    };
  },
  methods: {
    addNum() {
      // this.numbers.push(this.numCounter++);
      this.numbers.splice(this.randomIndex(), 0, this.numCounter++);
    },
    removeNum() {
      this.numbers.splice(this.randomIndex(), 1);
    },
    shuffleNum() {
      this.numbers = _.shuffle(this.numbers);
    },
    randomIndex() {
      return Math.floor(Math.random() * this.numbers.length);
    },
  },
};
</script>

<style scoped>
.item {
  margin-right: 10px;
  display: inline-block;
}

.sq-enter-from,
.sq-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.sq-enter-active,
.sq-leave-active {
  transition: all 1s ease;
}

.sq-leave-active {
  position: absolute;
}

.sq-move {
  transition: transform 1s ease;
}
</style>
