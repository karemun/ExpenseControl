<script setup>
import { formatAmount, formatDate } from '../helpers';
import IconSaving from '../assets/img/icono_ahorro.svg'
import IconHouse from '../assets/img/icono_casa.svg'
import IconFood from '../assets/img/icono_comida.svg'
import IconExpenses from '../assets/img/icono_gastos.svg'
import IconLeisure from '../assets/img/icono_ocio.svg'
import IconHealth from '../assets/img/icono_salud.svg'
import IconSuscriptions from '../assets/img/icono_suscripciones.svg'

const dictionaryIcons = {
    savings : IconSaving,
    food : IconFood,
    home : IconHouse,
    expenses : IconExpenses,
    leisure : IconLeisure,
    health : IconHealth,
    suscriptions : IconSuscriptions
}

const props = defineProps({
    expense: {
        type: Object,
        required: true
    }
})
</script>
<template>
    <div class="expense shadow">
        <div class="content">
            <img 
                :src="dictionaryIcons[expense.category]" 
                alt="Expense Icon"
                class="icon"
            >
            <div class="details">
                <p class="category">{{ expense.category }}</p>
                <p class="name">{{ expense.name }}</p>
                <p class="date">
                    Fecha:
                    <span>{{ formatDate(expense.date) }}</span>
                </p>
            </div>
        </div>

        <p class="amount">{{ formatAmount(expense.amount) }}</p>
    </div>
</template>

<style scoped>
.expense {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
}
.content {
    display: flex;
    gap: 2rem;
    align-items: center;
}
.icon {
    width: 5rem;
}
.details p {
    margin: 0 0 1rem 0;
}
.category {
    color: var(--gray);
    font-size: 1.2rem;
    text-transform: uppercase;
    font-weight: 900;
}
.name {
    color: var(--gray-dark);
    font-size: 2.4rem;
    font-weight: 700;
    cursor: pointer;
}
.date {
    color: var(--gray-dark);
    font-size: 1.6rem;
    font-weight: 900;
}
.date span {
    font-weight: 400;
}
.amount {
    font-size: 3rem;
    font-weight: 900;
    margin: 0;
}
</style>