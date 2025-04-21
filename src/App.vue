<script setup>
import { ref, reactive } from 'vue'
import Budget from './components/Budget.vue'
import BudgetControl from './components/BudgetControl.vue'
import Modal from './components/Modal.vue'
import Expense from './components/Expense.vue'
import { generateId } from './helpers'
import iconNewExpense from './assets/img/nuevo-gasto.svg'

const modal = reactive({
  show: false,
  animate: false
})
const budget = ref(0)
const available = ref(0)
const expense = reactive({
  id: null,
  name: '',
  amount: '',
  category: '',
  date: Date.now(),
})
const expenses = ref([])

const defineBudget = (amount) => {
  budget.value = amount
  available.value = amount
}

const showModal = () => {
  modal.show = true

  setTimeout(() => {
    modal.animate = true
  })
}

const closeModal = () => {
  modal.animate = false

  setTimeout(() => {
    modal.show = false
  }, 300)
}

const saveExpense = () => {
  expenses.value.push({
    ...expense,
    id: generateId()
  })

  closeModal()
  Object.assign(expense, {
    name: '',
    amount: '',
    category: '',
    id: null,
    date: Date.now(),
  })
}
</script>

<template>
  <div
    :class="{fixed: modal.show}"
  >
    <header>
      <h1>Expense Control</h1>

      <div class="container-header container shadow">
        <Budget
          v-if="budget === 0"
          @define-budget="defineBudget"
        />

        <BudgetControl
          v-else
          :budget="budget"
          :available="available"
        />
      </div>
    </header>

    <main v-if="budget > 0">
      <div class="container list-expenses">
        <h2>{{ expenses.length > 0 ? 'Expenses' : 'No expenses yet' }}</h2>

        <Expense
          v-for="expense in expenses"
          :key="expense.id"
          :expense="expense"
        />
      </div>

      <div class="add-expense">
        <img 
          :src="iconNewExpense" 
          alt="New expense icon"
          @click="showModal"
        />
      </div>

      <Modal
        v-if="modal.show"
        :modal="modal"
        v-model:name="expense.name"
        v-model:amount="expense.amount"
        v-model:category="expense.category"
        @close-modal="closeModal"
        @save-expense="saveExpense"
      />
    </main>
  </div>
</template>

<style lang="scss">
  :root {
    --blue: #3b82f6;
    --white: #fff;
    --gray-light: #F5F5F5;
    --gray: #94A3B8;
    --gray-dark: #64748b;
    --black: #000;
  }
  html {
    font-size: 62.5%;
    box-sizing: border-box;
  }
  *,
  *::before,
  *:after {
    box-sizing: inherit;
  }
  body {
    font-size: 1.6rem;
    font-family: 'Lato', sans-serif;
    background-color: var(--gray-light);
  }
  h1 {
    font-size: 4rem;
  }
  h2 {
    font-size: 3rem;
  }
  .fixed {
    overflow: hidden;
    height: 100vh;
  }
  header {
    background-color: var(--blue);
  }
  header h1 {
    padding: 3rem 0;
    margin: 0;
    text-align: center;
    color: var(--white);
  }
  .container {
    width: 90%;
    max-width: 80rem;
    margin: 0 auto;
  }
  .container-header {
    margin-top: -5rem;
    transform: translateY(5rem);
    padding: 5rem;
  }
  .shadow {
    box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
    background-color: var(--white);
    border-radius: 1.2rem;
    padding: 5rem;
  }
  .add-expense {
    position: fixed;
    bottom: 5rem;
    right: 5rem;
  }
  .add-expense img {
    width: 5rem;
    cursor: pointer;
  }
  .list-expenses {
    margin-top: 10rem;
  }
  .list-expenses h2 {
    font-weight: 900;
    color: var(--gray-dark);
  }
</style>
