<script setup>
import BaseCard from "@/components/example2/BaseCard.vue";
</script>

<template>
  <div class="card-row">
    <BaseCard>
      <template #header>공지사항</template>
      <ul>
        <li>✨3월24일 27회차 반장 선발!🎉</li>
        <li>✨3월25일 이전에 풀던 example 컴포넌트로 분리해서 만드는거 완성하세요 :)</li>
      </ul>
    </BaseCard>

    <BaseCard>
      <template #header>사용자 프로필</template>
      <p><strong>이름:</strong> 김혜빈</p>
      <p><strong>직무:</strong> 프론트개발자</p>
      <p><strong>경력:</strong> 3년</p>
      <template #footer>
        <button>취소</button>
        <button>저장</button>
      </template>
    </BaseCard>
  </div>
</template>

<style scoped>
.card-row {
  display: flex;
  gap: 20px
}
</style>
