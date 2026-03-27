<template>
  <!--
   Teleport
    - 컴포넌트 계층: app 자식으로 남아있음
    - 실제 DOM 랜더링 위치: to 속성에 정의한 요소 안으로 이동
  -->

  <Teleport to="#modal">
    <Modal v-if="isModal"></Modal>
  </Teleport>
  <div>
    <h2>Teleport Test</h2>
    <hr/>
    <button @cllick="openModal">모달열기</button>
  </div>
</template>

<script setup>
import {provide, ref, computed} from 'vue';
import SongLlist from "@/components/SongLlist.vue";
import Modal from '@/components/Modal.vue';

const isModal = ref(false);

function openModal() {
  isModal.value = true;
}
</script>

<style>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css");
</style>
