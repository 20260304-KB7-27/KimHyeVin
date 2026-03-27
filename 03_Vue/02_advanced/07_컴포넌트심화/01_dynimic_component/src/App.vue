<template>
  <h1>동적 컴포넌트</h1>
  <hr>
  <div>
    <h1>태평양 전쟁의 해전</h1>
    <ul>
      <li v-for="tab in tabs" :key="tab.id">
        <a @click="changeTab(tab.id)">
          {{ tab.label }}
        </a>
      </li>
    </ul>

    <KeepAlive include="CoralSeaTab">
      <component :is="currentTab"></component>
    </KeepAlive>
  </div>
</template>

<script setup>
import {ref, computed} from 'vue'
import CoralSeaTab from "@/components/CoralSeaTab.vue";
import LeyteGulfTab from "@/components/LeyteGulfSeaTab.vue";
import MidwayTab from "@/components/MidwaySeaTab.vue";
/*
* 동적 컴포넌트
*  - is 속성을 사용하여 런타임에 렌더링할 컴포넌트를 동적으로 바꿀 수 있다.
*  - tab UI/스텝 UI에서 사용
* */
// :is에 컴포넌트 객체를 전달
const tabComponents = {
  CoralSeaTab,
  LeyteGulfTab,
  MidwayTab,
}

const currentTab = computed(() => tabComponents[currentTabName.value]);

const tabs = ref([
  {id: "CoralSeaTab", label: "산호해 해전"},
  {id: "MidwayTab", label: "미드웨이 해전"},
  {id: "LeyteGulfTab", label: "레이테만 해전"},
]);

// 선택된 탭
const currentTabName = ref("CoralSeaTab");

// 클릭시 currentTabName 변경
function changeTab(tabId) {
  currentTabName.value = tabId;
}
</script>

<style scoped></style>
