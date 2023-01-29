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
  props: {
    startValue: Number,
    minValue: Number
  },
  data() {
    return {
      counter: this.startValue ?? 0
    };
  },
  methods: {
    incrementCounter() {
      this.counter++;
      this.$emit('onCounterChanged', this.counter)
    },
    decrementCounter() {
      if (this.counter === this.minValue) {
        this.$emit('onCounterChanged', this.minValue)
        return;
      }
      this.counter -= 1;
      this.$emit('onCounterChanged', this.counter)
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