const productos = [
    {
        nombre: "Tostadas con queso y Tomate",
        precio: 10.90,
        imagen: "desayuno_01",
        categoria_id: 1,
        id: 1
    },
    {
        nombre: "Sandwich Club",
        precio: 12.90,
        imagen: "desayuno_02",
        categoria_id: 1,
        id: 2
    },
    {
        nombre: "Wraps de Pollo y Aguacate",
        precio: 10.90,
        imagen: "desayuno_03",
        categoria_id: 1,
        id: 3
    },
    {
        nombre: "Bol de Yogourt, Frutas y Cereales",
        precio: 9.50,
        imagen: "desayuno_04",
        categoria_id: 1,
        id: 4
    },
    {
        nombre: "Gofres con Sirope",
        precio: 7.90,
        imagen: "desayuno_05",
        categoria_id: 1,
        id: 5
    },
    {
        nombre: "Seleccion de Mini Croissants",
        precio: 12.90,
        imagen: "desayuno_06",
        categoria_id: 1,
        id: 6
    },
    {
        nombre: "Brocheta de Frutas",
        precio: 6.90,
        imagen: "desayuno_07",
        categoria_id: 1,
        id: 7
    },
    {
        nombre: "Café Capuccino",
        precio: 3.50,
        imagen: "desayuno_08",
        categoria_id: 1,
        id: 8
    },
    {
        nombre: "Zumo de Naranja Natural",
        precio: 3.90,
        imagen: "desayuno_09",
        categoria_id: 1,
        id: 9
    },
    {
        nombre: "Infusiones",
        precio: 3.00,
        imagen: "desayuno_10",
        categoria_id: 1,
        id: 10
    },
    {
        nombre: "Seleccion de Jamón Iberico",
        precio: 15.00,
        imagen: "comida_01",
        categoria_id: 2,
        id: 11
    },
    {
        nombre: "Ensalada de Atún",
        precio: 12.90,
        imagen: "comida_02",
        categoria_id: 2,
        id: 12
    },
    {
        nombre: "Ensalada de Tomate y Mozzarella",
        precio: 12.90,
        imagen: "comida_03",
        categoria_id: 2,
        id: 13
    },
    {
        nombre: "Penne Marinara",
        precio: 14.90,
        imagen: "comida_04",
        categoria_id: 2,
        id: 14
    },
    {
        nombre: "Spaghuetti Carbonara",
        precio: 15.90,
        imagen: "comida_05",
        categoria_id: 2,
        id: 15
    },
    {
        nombre: "Hamburguesa de Carne",
        precio: 15.90,
        imagen: "comida_06",
        categoria_id: 2,
        id: 16
    },
    {
        nombre: "Iberico con Espinacas y Salsa Tariyaki",
        precio: 19.90,
        imagen: "comida_07",
        categoria_id: 2,
        id: 17
    },
    {
        nombre: "Salmón con Verduras y Salsa Holandesa",
        precio: 19.90,
        imagen: "comida_08",
        categoria_id: 2,
        id: 18
    },
    {
        nombre: "Tiramisú",
        precio: 7.00,
        imagen: "comida_09",
        categoria_id: 2,
        id: 19
    },
    {
        nombre: "Tarta de Queso",
        precio: 7.00,
        imagen: "comida_10",
        categoria_id: 2,
        id: 20
    },
    {
        nombre: "Seleccion de Jamón Iberico",
        precio: 15.00,
        imagen: "comida_01",
        categoria_id: 3,
        id: 21
    },
    {
        nombre: "Ensalada de Atún",
        precio: 12.90,
        imagen: "comida_02",
        categoria_id: 3,
        id: 22
    },
    {
        nombre: "Ensalada de Tomate y Mozzarella",
        precio: 12.90,
        imagen: "comida_03",
        categoria_id: 3,
        id: 23
    },
    {
        nombre: "Penne Marinara",
        precio: 14.90,
        imagen: "comida_04",
        categoria_id: 3,
        id: 24
    },
    {
        nombre: "Spaghuetti Carbonara",
        precio: 15.90,
        imagen: "comida_05",
        categoria_id: 3,
        id: 25
    },
    {
        nombre: "Hamburguesa de Carne",
        precio: 15.90,
        imagen: "comida_06",
        categoria_id: 3,
        id: 26
    },
    {
        nombre: "Iberico con Espinacas y Salsa Tariyaki",
        precio: 19.90,
        imagen: "comida_07",
        categoria_id: 3,
        id: 27
    },
    {
        nombre: "Salmón con Verduras y Salsa Holandesa",
        precio: 19.90,
        imagen: "comida_08",
        categoria_id: 3,
        id: 28
    },
    {
        nombre: "Tiramisú",
        precio: 7.00,
        imagen: "comida_09",
        categoria_id: 3,
        id: 29
    },
    {
        nombre: "Tarta de Queso",
        precio: 7.00,
        imagen: "comida_10",
        categoria_id: 3,
        id: 30
    },
    {
        nombre: "Copa Vino Blanco Seco",
        precio: 3.90,
        imagen: "bar_01",
        categoria_id: 4,
        id: 31
    },
    {
        nombre: "Copa Vino Tinto Seco",
        precio: 3.90,
        imagen: "bar_02",
        categoria_id: 4,
        id: 32
    },
    {
        nombre: "Copa Vino Blanco Afrutado",
        precio: 3.90,
        imagen: "bar_03",
        categoria_id: 4,
        id: 33
    },
    {
        nombre: "Copa Vino Tinto Afrutado",
        precio: 3.90,
        imagen: "bar_04",
        categoria_id: 4,
        id: 34
    },
    {
        nombre: "Copa de Cava",
        precio: 4.90,
        imagen: "bar_05",
        categoria_id: 4,
        id: 35
    },
    {
        nombre: "Copa de Cerveza",
        precio: 3.90,
        imagen: "bar_06",
        categoria_id: 4,
        id: 36
    },
    {
        nombre: "Coca Cola",
        precio: 3.20,
        imagen: "bar_07",
        categoria_id: 4,
        id: 37
    },
    {
        nombre: "Sprite",
        precio: 3.20,
        imagen: "bar_08",
        categoria_id: 4,
        id: 38
    },
    {
        nombre: "Agua Natural",
        precio: 3.50,
        imagen: "bar_09",
        categoria_id: 4,
        id: 39
    },
    {
        nombre: "Agua con Gas",
        precio: 3.50,
        imagen: "bar_10",
        categoria_id: 4,
        id: 40
    } 
]

export {
    productos 
}