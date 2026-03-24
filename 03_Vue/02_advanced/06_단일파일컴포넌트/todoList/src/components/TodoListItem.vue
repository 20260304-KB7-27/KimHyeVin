<template>
    <li
        @click="toggleComplted(todoitem.id)"
        class="card-body d-flex justify-content-between align-items-center border p-2"
        :class="{ completed: todoitem.completed }"
    >
        <span
            :style="{
                textDecoration: todoitem.completed ? 'line-through' : 'none',
            }"
            >{{ todoitem.todo }} {{ todoitem.completed ? "(완료)" : "" }}
        </span>

        <!-- 삭제하기 -->
        <button
            @click="deleteTodo(todoitem.id)"
            class="btn btn-secondary btn-sm py-0"
            style="font-size: 11px"
        >
            삭제
        </button>
    </li>
</template>

<script setup>
const props = defineProps({
    todoitem: Object,
});

const emit = defineEmits(["toggle", "delete"]);

const toggleComplted = (id) => {
    emit("toggle", id);
};

const deleteTodo = (id) => {
    emit("delete", id);
};
</script>

<style lang="scss" scoped></style>
