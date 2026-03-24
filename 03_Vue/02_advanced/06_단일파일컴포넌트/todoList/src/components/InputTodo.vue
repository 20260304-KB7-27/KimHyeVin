<template>
    <div class="d-flex mb-3">
        <input
            type="text"
            class="form-control"
            v-model.trim="todo"
            @keyup.enter.exact="addTodo"
            @keyup.ctrl.enter.exact="addTodo"
        />
        <button @click="addTodo" class="btn btn-primary flex-shrink-0">
            추가
        </button>
    </div>
</template>

<script setup>
import { ref } from "vue";

const todo = ref("");

const emit = defineEmits(["add"]);

// create todo
const addTodo = (e) => {
    if (todo.value === "") return;

    emit("add", {
        id: new Date().getTime(),
        todo: todo.value,
        completed: e?.ctrlKey ? true : false,
    });

    todo.value = "";
};
</script>

<style lang="scss" scoped></style>
