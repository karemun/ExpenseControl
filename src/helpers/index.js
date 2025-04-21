export const formatAmount = (amount) => {
    return Number(amount).toLocaleString('es-US', {
        style: 'currency',
        currency: 'USD'
    })
}

export const generateId = () => {
    return Date.now().toString(36) + Math.random().toString(36).substring(2)
}

export const formatDate = (date) => {
    return new Date(date).toLocaleDateString('es-ES', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    })
}
