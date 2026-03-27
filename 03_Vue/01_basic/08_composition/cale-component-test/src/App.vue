<template>
  <div>
    <h1>Calc1</h1>
    <Calc/>
  </div>
  <div>
    <h1>Calc2</h1>
    <Calc2/>
  </div>
  <div>
    <h1>Calc3</h1>
    <Calc3/>
  </div>
  <div>
    <h1>Calc4(computed)</h1>
    <Calc4/>
  </div>
  <div>
    <h1>Calc5(watch)</h1>
    <Calc5/>
  </div>
</template>

<script setup>
import Calc from "@/components/Calc.vue";
import Calc2 from "@/components/Calc2.vue";
import Calc3 from "@/components/Calc3.vue";
import Calc4 from "@/components/Calc4.vue";
import Calc5 from "@/components/Calc5.vue";
</script>

<style scoped></style>
