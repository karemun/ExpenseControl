<template>
    <div class="alert">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.alert {
    padding: 1rem;
    font-weight: 900;
    text-transform: uppercase;
    font-size: 1.6rem;
    text-align: center;
    background-color: var(--white);
    border-left: .5rem solid #B91C1C;
    color: #B91C1C;
    margin-bottom: 2rem;
}
</style>