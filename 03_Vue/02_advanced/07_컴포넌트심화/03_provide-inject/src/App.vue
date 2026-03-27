<template>
  <!-- songs를 Props로 전달 -->
  <SongLlist :songs="songs"></SongLlist>
  <butto @click="addSong">새로운 곡 추가</butto>
</template>

<script setup>
import {provide, ref, computed} from 'vue';
import SongLlist from "@/components/SongLlist.vue";

const songs = ref([
  {id: 1, title: "Blueming", done: true},
  {id: 2, title: "Dynamite", done: true},
  {id: 3, title: "Lovesick Girls", done: false},
  {id: 4, title: "마리아(Maria)", done: false},
]);

// songs 추가
const addSong = () => {
  songs.value.push({id: 5, title: "새로운 노래", done: true});
}

// Provide
/* Provide('키', 데이터) : 정적 값
/* Provide('키', computed()) : 반응형을 유지한 데이터
* */
provide('icons', {
  checked: "far fa-check-circle",
  unchecked: "fas fa-circle",
})

//  확인필요
provide('doneCount', computed(() => songs.value.filter(song => !song.done)).length)

</script>

<style>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css");
</style>
