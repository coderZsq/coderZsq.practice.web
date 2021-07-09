import { createStore } from 'vuex';
import { INCREMENT_N } from './mutation-types';

const store = createStore({
  state() {
    return {
      counter: 100,
      name: 'sq',
      age: 18,
      height: 1.88,
      books: [
        { name: '深入Vuejs', price: 200, count: 3 },
        { name: '深入Webpack', price: 240, count: 5 },
        { name: '深入React', price: 130, count: 1 },
        { name: '深入Node', price: 220, count: 2 },
      ],
      discount: 0.6,
    };
  },
  getters: {
    totalPrice(state, getters) {
      let totalPrice = 0;
      for (const book of state.books) {
        totalPrice += book.count * book.price;
      }
      return totalPrice * getters.currentDiscount;
    },
    currentDiscount(state) {
      return state.discount * 0.9;
    },
    totalPriceCountGreaterN(state, getters) {
      return function(n) {
        let totalPrice = 0;
        for (const book of state.books) {
          if (book.count > n) {
            totalPrice += book.count * book.price;
          }
        }
        return totalPrice * getters.currentDiscount;
      };
    },
    nameInfo(state) {
      return `name: ${state.name}`;
    },
    ageInfo(state) {
      return `age: ${state.age}`;
    },
    heightInfo(state) {
      return `height: ${state.height}`;
    },
  },
  mutations: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    // 10 -> payload
    // {n: 10, name: 'sq', age: 18} -> payload
    [INCREMENT_N](state, payload) {
      console.log(payload);
      state.counter += payload.n;
    },
  },
});

export default store;
