<template>
  <div class="counter-container">
    <button @click="decrementCounter">
      −
    </button>
    <span>{{ counter }}</span>
    <button @click="incrementCounter">
      +
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0
    };
  },
  methods: {
    incrementCounter() {
      this.counter++;
    },
    decrementCounter() {
      if (this.counter === 0)
        return;
      this.counter -= 1;
    }
  }
};
</script>

<style>
.counter-container {
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  background-color: rgb(51, 50, 50);
  color: #ffffff;
  width: 65px;
  gap: 5px;
  border-radius: 8px;
  font-size: large;
}
</style>