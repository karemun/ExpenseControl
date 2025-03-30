<script setup>
import { ref } from 'vue';
import Alert from './Alert.vue';

const budget = ref(0);
const error = ref("");

const emit = defineEmits(['define-budget']);

const defineBudget = () => {
    if(!budget.value) {
        error.value = "Invalid budget";

        setTimeout(() => {
            error.value = "";
        }, 3000);

        return;
    }
    emit('define-budget', budget.value);
}
</script>

<template>
    <form 
        class="budget"
        @submit.prevent="defineBudget"
    >
        <Alert v-if="error">
            {{ error }}
        </Alert>
        <div class="field">
            <label for="new-budget">Define Budget</label>
            <input 
                id="new-budget"
                type="number"
                class="new-budget"
                placeholder="Add your budget"
                min="0"
                v-model="budget"
            />
        </div>

        <input type="submit" value="Define Budget" />
    </form>
</template>

<style scoped>
.budget {
    width: 100%;
}
.field {
    display: grid;
    gap: 2rem;
}
.budget label {
    font-size: 2.2rem;
    text-align: center;
    color: var(--blue);
}
.budget input[type="number"] {
    background-color: var(--gray-light);
    border-radius: 1rem;
    padding: 1rem;
    border: none;
    font-size: 2.2rem;
    text-align: center;
}
.budget input[type="submit"] {
    background-color: var(--blue);
    border: none;
    width: 100%;
    text-align: center;
    color: var(--white);
    font-weight: 900;
    font-size: 2rem;
    padding: 1rem;
    margin-top: 2rem;
    transition: background-color .3s ease;
}
.budget input[type="submit"]:hover {
    background-color: #1048A4;
    cursor: pointer;
}
</style>