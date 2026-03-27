<template>
  <div>
    X : <input type="text" v-model.number="x">
    <br/>
    Y : <input type="text" v-model.number="y">
  </div>
  <div>결과: {{ result }}</div>
  <div>이전 결과: {{ result2 }}</div>
</template>

<!--
<script setup>
 - 간결한 컴포넌트를 위한 코드
 - 보일러플레이트 코드 감소-> 보일러플레이트? 매번 반복되는 기본코드/틀
 - 변수.함수를 템플릿에서 바로 사용 가능

-->
<script>
import {ref, watch} from "vue";

export default {
  name: "Calc5",
  setup() {
    const x = ref(10);
    const y = ref(10);
    const result = ref(20);
    const result2 = ref(0);

    // API 호출, 로깅, 감시대상이 아닌 다른 상태값을 변경하고 싶을때
    watch(x, (current, old) => {
      console.log(`${old} -> ${current}`);
      // 잘못되었다~
      result.value = x.value + y.value;
      result2.value = old + y.value;
    });
    watch(y, (current, old) => {
      console.log(`${old} -> ${current}`);
      result.value = x.value + y.value;
      result2.value = old + x.value;
    });
    return {x, y, result, result2};
  }
}
</script>

<style scoped>

</style>