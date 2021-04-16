<template>
<div>
  <span>{{sum(1, 2)}}</span>
  <button @click="getMessage">test</button>
  <span>{{msg}}</span>
</div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Service from "./services/service";

export default defineComponent({
  name: "App",
  setup(props, context) {
    const msg = ref("Hello from vue client!");
    function sum(a: number, b: number) {
      return a + b;
    }
    async function getMessage() {
      msg.value = await Service.getMessage(); 
    }
    return { sum, getMessage, msg };
  }
});
</script>

<style lang="less">
</style>
