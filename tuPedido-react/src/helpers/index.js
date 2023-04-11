export const formatearDinero = cantidad => {
    return cantidad.toLocaleString('de-DE', { 
        style: 'currency', 
        currency: 'EUR'
    })
}