<template>
  <ul>
    <SongListItem v-for="s in songs" :key="s.id" :song="s"></SongListItem>
  </ul>

  <div>체크된 곡 수: {{ doneCount }}</div>
</template>

<script setup>
import {defineProps, inject} from "vue";
import SongListItem from "@/components/SongListItem.vue";

const props = defineProps(['songs'])
// 반응형 값 computed을 전달 받음
const doneCount = inject("doneCount");
</script>

<style scoped>

</style>