<script setup>
import { computed } from 'vue';
import CircleProgress from 'vue3-circle-progress'
import 'vue3-circle-progress/dist/circle-progress.css'
import { formatAmount } from '../helpers';

defineEmits(['reset-app'])

const props = defineProps({
    budget: {
        type: Number,
        required: true,
    },
    available: {
        type: Number,
        required: true,
    },
    spent: {
        type: Number,
        required: true,
    }
})

const percent = computed(() => {
    return parseInt(((props.budget - props.available) / props.budget) * 100);
})
</script>

<template>
    <div class="two-columns">
        <div class="container-graphic">
            <p class="percent">{{ percent }}%</p>
            
            <CircleProgress 
                :percent="percent"
                :size="250"
                :border-width="30"
                :border-bg-width="30"
                fill-color="#3B82F6"
                empty-color="#E1E1E1"
            />
        </div>

        <div class="container-budget">
            <button 
                type="button"
                class="reset-app"
                @click="$emit('reset-app')"
            >
                Reset App
            </button>

            <p>
                <span>Budget:</span>
                {{ formatAmount(budget) }}
            </p>
            <p>
                <span>Available:</span>
                {{ formatAmount(available) }}
            </p>
            <p>
                <span>Spent:</span>
                {{ formatAmount(spent) }}
            </p>
        </div>
    </div>
</template>

<style scoped>
    .container-graphic {
        position: relative;
    }
    .percent {
        position: absolute;
        margin: auto;
        top: calc(50% - 1.5rem);
        left: 0;
        right: 0;
        z-index: 100;
        text-align: center;
        font-size: 3rem;
        font-weight: 900;
        color: var(--gray-dark);
    }
    .two-columns {
        display: flex;
        flex-direction: column;
    }
    .two-columns > :first-child {
        margin-bottom: 3rem;
    }

    @media (min-width: 768px) {
        .two-columns {
            flex-direction: row;
            gap: 4rem;
            align-items: center;
        }
        .two-columns > :first-child {
            margin-bottom: 0;
        }
    }

    .reset-app {
        background-color: #DB2777;
        border: none;
        padding: 1rem;
        width: 100%;
        color: var(--white);
        font-weight: 900;
        text-transform: uppercase;
        border-radius: 1rem;
        transition-property: background-color;
        transition-duration: 300ms;
    }
    .reset-app:hover {
        cursor: pointer;
        background-color: #C11D67;
    }
    .container-budget {
        width: 100%;
    }
    .container-budget p {
        font-size: 2.4rem;
        text-align: center;
        color: var(--gray-dark);
    }
    .container-budget span {
        font-weight: 900;
        color: var(--blue);
    }

    @media (min-width: 768px) {
        .container-budget p {
            text-align: left;
        }
    }
</style>