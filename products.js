
let discounts = [
    { amount: "1", price: 55 },
    { amount: "2", price: 52.50 },
    { amount: "3", price: 50 },
    { amount: "4", price: 47.50 },
    { amount: "5+", price: 45 },
    //{ amount: "60 > 200", price: 41 },
    //{ amount: "200 > 250", price: 36 },
    //{ amount: "250 >", price: 32 }
]

let products = [
    { name: 'Acelga (kg)', amount: 0, url: 'images/acelga.jpg', type: 'veggie' },
    // { name: 'Achicoria (500g)', amount: 0, url: 'images/achicoria.jpg', type: 'veggie' },
    { name: 'Aji Vinagre (1/2 kg)', amount: 0, url: 'images/ajivinagre.jpg', type: 'veggie' },
    { name: 'Ajo (x3)', amount: 0, url: 'images/ajo.jpg', type: 'veggie' },
    // { name: 'Albahaca (x2)', amount: 0, url: 'images/albahaca.jpg', type: 'veggie' },
    { name: 'Anco (kg)', amount: 0, url: 'images/anco.jpg', type: 'veggie' },
    // { name: 'Apio (kg)', amount: 0, url: 'images/apio.jpg', type: 'veggie' },
    { name: 'Banana (kg)', amount: 0, url: 'images/banana.jpg', type: 'fruit', price: 55 },
    // { name: 'Brocoli (kg)', amount: 0, url: 'images/brocoli.jpg', type: 'veggie' },
    { name: 'Berenjena (kg)', amount: 0, url: 'images/berenjena.jpg', type: 'veggie' },
    // { name: 'Caboutie (kg)', amount: 0, url: 'images/caboutie.jpg', type: 'veggie' },
    { name: 'Cebolla (kg)', amount: 0, url: 'images/cebolla.jpg', type: 'veggie' },
    // { name: 'Cilantro (kg)', amount: 0, url: 'images/cilantro.jpg', type: 'veggie' },
    // { name: 'Ciruela (kg)', amount: 0, url: 'images/ciruela.jpg', type: 'fruit', price: 70 },
    // { name: 'Champiñon (150g)', amount: 0, url: 'images/champi.jpg', type: 'veggie' },
    // { name: 'Choclo x 3', amount: 0, url: 'images/choclo.jpg', type: 'veggie' },
    // { name: 'Durazno (kg)', amount: 0, url: 'images/durazno.jpg', type: 'fruit', price: 70 },
    // { name: 'Espinaca (500g)', amount: 0, url: 'images/espinaca.jpg', type: 'veggie' },
    // { name: 'Hinojo (kg)', amount: 0, url: 'images/hinojo.jpg', type: 'veggie' },
    { name: 'Garbanzo (1/2kg)', amount: 0, url: 'images/garbanzo.jpg', type: 'veggie' },
    // { name: 'Kale Morado (500g)', amount: 0, url: 'images/kalemorado.jpg', type: 'veggie' },
    { name: 'Kale (500g)', amount: 0, url: 'images/kale.jpg', type: 'veggie' },
    { name: 'Lechuga Crespa(1/2kg)', amount: 0, url: 'images/lechugamantecosa.jpg', type: 'veggie' },
    // { name: 'Lechuga Mantecosa (1/2kg)', amount: 0, url: 'images/lechugacrespa.jpg', type: 'veggie' },
    { name: 'Lenteja (1/2kg)', amount: 0, url: 'images/lenteja.jpg', type: 'veggie' },
    // { name: 'Lima (1/2 kg)', amount: 0, url: 'images/lima.jpg', type: 'veggie' },
    { name: 'Limon (kg)', amount: 0, url: 'images/limon.jpg', type: 'fruit', price: 70 },
    { name: 'Melon (kg)', amount: 0, url: 'images/melon.jpg', type: 'fruit', price: 80 },
    // { name: 'Mango (kg)', amount: 0, url: 'images/mango.jpg', type: 'fruit', price: 80 },
    { name: 'Manzana (kg)', amount: 0, url: 'images/manzana.jpg', type: 'fruit', price: 60 },
    // { name: 'Maracuya (kg)', amount: 0, url: 'images/maracuya.jpg', type: 'fruit', price: 100 },
    // { name: 'Morron (kg)', amount: 0, url: 'images/morron.jpg', type: 'veggie' },
    { name: 'Morron Rojo(kg)', amount: 0, url: 'images/morronrojo.jpg', type: 'veggie' },
    // { name: 'Nabo (kg)', amount: 0, url: 'images/nabo.jpg', type: 'veggie' },
    // { name: 'Pack Choi (kg)', amount: 0, url: 'images/packchoi.jpg', type: 'veggie' },
    { name: 'Palta (x2)', amount: 0, url: 'images/palta.jpg', type: 'fruit', price: 50 },
    { name: 'Papa (kg)', amount: 0, url: 'images/papa.jpg', type: 'veggie' },
    // { name: 'Papa Colorada (kg)', amount: 0, url: 'images/papacolorada.jpg', type: 'veggie' },
    { name: 'Poroto Adzuki (1/2kg)', amount: 0, url: 'images/poroto.jpg', type: 'veggie' },
    // { name: 'Pelon (kg)', amount: 0, url: 'images/pelon.jpg', type: 'fruit', price: 75 },
    { name: 'Pepino (kg)', amount: 0, url: 'images/pepino.jpg', type: 'veggie' },
    // { name: 'Pera (kg)', amount: 0, url: 'images/pera.jpg', type: 'fruit', price: 70 },
    // { name: 'Perejil (400g)', amount: 0, url: 'images/perejil.jpg', type: 'veggie' },
    // { name: 'Puerro (PAQ)', amount: 0, url: 'images/puerro.jpg', type: 'veggie' },
    // { name: 'Rabanito (500g)', amount: 0, url: 'images/rabanito.jpg', type: 'veggie' },
    // { name: 'Radicheta (500g)', amount: 0, url: 'images/radicheta.jpg', type: 'veggie' },
    // { name: 'Repollo (kg)', amount: 0, url: 'images/repollo.jpg', type: 'veggie' },
    { name: 'Remolacha (kg)', amount: 0, url: 'images/remolacha.jpg', type: 'veggie' },
    // { name: 'Rucula (500g)', amount: 0, url: 'images/rucula.jpg', type: 'veggie' },
    { name: 'Sandia (kg)', amount: 0, url: 'images/watermelon.jpg', type: 'fruit', price: 70 },
    // { name: 'Tomate (kg)', amount: 0, url: 'images/tomato.jpg', type: 'veggie' },
    // { name: 'Tomate Cherry (500g)', amount: 0, url: 'images/tomatecherry.jpg', type: 'veggie' },
    // { name: 'Uva (kg)', amount: 0, url: 'images/uva.jpg', type: 'fruit', price: 100 },
    // { name: 'Verdeo (500g)', amount: 0, url: 'images/verdeo.jpg', type: 'veggie' },
    // { name: 'Zanahoria (kg)', amount: 0, url: 'images/zanahoria.jpg', type: 'veggie' },
    { name: 'Zapallito (kg)', amount: 0, url: 'images/zapallito.jpg', type: 'veggie' },
    // { name: 'Zuchinni (kg)', amount: 0, url: 'images/zuchinni.jpg', type: 'veggie' },
    { name: 'Arroz Organico (kg)', amount: 0, url: 'images/arrozorganico.jpg', type: 'meal', price: 100 },
    { name: 'Barrita de cereal vegana x3', amount: 0, url: 'images/barritacereal.jpg', type: 'meal', price: 100 },
    // { name: 'Budin banana y frutos rojos', amount: 0, url: 'images/budinbananafrutosrojos.jpg', type: 'meal', price: 90 },
    // { name: 'Budin banana y pera', amount: 0, url: 'images/budinbananapera.jpg', type: 'meal', price: 90 },
    // { name: 'Budin cacao amargo y frutos secos', amount: 0, url: 'images/cacaoamargo.jpg', type: 'meal', price: 90 },
    { name: 'Berenjenas al Escabeche (440 grs)', amount: 0, url: 'images/berenjenasescabeche.jpg', type: 'meal', price: 120 },
    // { name: 'Chucrut (400 cm2)', amount: 0, url: 'images/chucrut.jpg', type: 'meal', price: 100 },
    // { name: 'Granola', amount: 0, url: 'images/granola.jpg', type: 'meal', price: 75 },
    { name: 'Hamburguesas veganas de lenteja y berenjena (x3)', amount: 0, url: 'images/hamburguesaquinoa.jpg', type: 'meal', price: 100 },
    { name: 'Hamburguesas veganas de porotos adzuki y quinoa (x3)', amount: 0, url: 'images/hamburguesaquinoa.jpg', type: 'meal', price: 100 },
    { name: 'Hamburguesas veganas de garbanzo y calabaza (x3)', amount: 0, url: 'images/hamburguesaquinoa.jpg', type: 'meal', price: 100 },
    { name: 'Falafels de Garbanzos (x3)', amount: 0, url: 'images/falafelgarbanzo.jpg', type: 'meal', price: 100 },
    // { name: 'Helado banana y mango vegano (200cc)', amount: 0, url: 'images/heladomangobananavegano.jpg', type: 'meal', price: 60 },
    { name: 'Huevos (x12)', amount: 0, url: 'images/huevos.jpg', type: 'meal', price: 90 },
    { name: 'Maple Huevos (x30)', amount: 0, url: 'images/huevos.jpg', type: 'meal', price: 225 },
    { name: 'Huevos (x6)', amount: 0, url: 'images/huevos.jpg', type: 'meal', price: 50 },
    // { name: 'Mermelada de ciruela (400cc)', amount: 0, url: 'images/mermelada.jpg', type: 'meal', price: 120 },
    { name: 'Miel Pura (500g)', amount: 0, url: 'images/mielpura.jpg', type: 'meal', price: 120 },
    { name: 'Milanesas de berenjenas (x6)', amount: 0, url: 'images/milanesaberenjena.jpg', type: 'meal', price: 150 },
    { name: 'Morrones verdes en almibar (830g)', amount: 0, url: 'images/morronverdealmibar.jpg', type: 'meal', price: 130 },
    // { name: 'Tarta de berenjena', amount: 0, url: 'images/tartavariedad.jpg', type: 'meal', price: 110 },
    { name: 'Tarta de zapallito y puerro', amount: 0, url: 'images/tartavariedad.jpg', type: 'meal', price: 110 },
    { name: 'Tarta de Acelga', amount: 0, url: 'images/tartakalechampi.jpg', type: 'meal', price: 110 }
    // { name: 'Tortilla vegana', amount: 0, url: 'images/tortillavegana.jpg', type: 'meal', price: 90 }
]

products = products.sort()

//Scroll top on pageload
window.addEventListener('scroll', function (evt) {

    var distance_from_top = document.documentElement.scrollTop

    if (distance_from_top === 0) {
        document.getElementsByClassName("search")[0].classList.remove("fixed");
    }

    if (distance_from_top > 0) {
        document.getElementsByClassName("search")[0].classList.add("fixed");
    }

});