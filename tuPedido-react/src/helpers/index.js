// Esta función toma una cantidad numérica y devuelve una cadena de texto con la 
// cantidad formateada en euros.

// Por ejemplo, si la cantidad es 1000, la función devolverá "1.000,00 €".
export const formatearDinero = cantidad => {
    return cantidad.toLocaleString('de-DE', { 
        style: 'currency', 
        currency: 'EUR'
    })
}