<script setup>
defineProps(['filter'])
defineEmits(['update:filter'])
</script>

<template>
    <div class="filter shadow container">
        <form>
            <div class="field">
                <label for="filter">Filter Expenses</label>
                <select 
                    id="filter" 
                    :value="filter" 
                    @input="$emit('update:filter', $event.target.value)"
                >
                    <option value="" selected>-- Select --</option>
                    <option value="savings">Savings</option>
                    <option value="food">Food</option>
                    <option value="home">Home</option>
                    <option value="expenses">Expenses</option>
                    <option value="health">Health</option>
                    <option value="leisure">Leisure</option>
                    <option value="suscriptions">Suscriptions</option>
                    <option value="other">Other</option>
                </select>
            </div>
        </form>
    </div>
</template>

<style lang="scss" scoped>
.filter {
    margin-top: 10rem;
}
.filter .field {
    display: flex;
    align-items: center;
    gap: 2rem;
}
.filter label {
    font-size: 3rem;
    font-weight: 900;
    color: var(--gray-dark);
}
.filter select {
    flex: 1;
    padding: 1rem;
    border: none;
    border-radius: 1rem;
    background-color: var(--gray-light);
    text-align: center;
}
</style>