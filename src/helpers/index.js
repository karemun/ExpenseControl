export const formatAmount = (amount) => {
    return Number(amount).toLocaleString('es-US', {
        style: 'currency',
        currency: 'USD'
    })
}

export const generateId = () => {
    return Date.now().toString(36) + Math.random().toString(36).substring(2)
}