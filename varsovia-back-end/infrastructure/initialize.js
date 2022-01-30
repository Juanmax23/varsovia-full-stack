const Product = require('../models/product')


function execute(current) {
    
  products.forEach(element => {
    Product.create(element)
  });
}


let products = [
    {
      "name": "Chaleco",
      "description": "para verano o invierno",
      "price": 1000,
      "stock": 5,
      "offer": null,
      "category": "Ropa",
      "img": "images/chaelco-blanco-3.jpg"
    },
    {
      "name": "Cintos",
      "description": "lo nuevo para el verano",
      "price": 750,
      "stock": 3,
      "offer": null,
      "category": "Accesorios",
      "img": "images/cintos-3.jpg"
    },
    {
      "name": "Chaleco",
      "description": "ponete facha",
      "price": 500,
      "stock": 100,
      "offer": null,
      "category": "Descuentos",
      "img": "images/chaleco-blanco-1.jpg"
    },
    {
      "name": "Chaleco vernao",
      "description": "..",
      "price": 650,
      "stock": 10,
      "offer": null,
      "category": "Ropa",
      "img": "../images/chaleco-verano.jpg"
    },
    {
      "name": "Mochila",
      "description": "pocos en stock",
      "price": 750,
      "stock": 23,
      "offer": null,
      "category": "Descuentos",
      "img": "images/mochila-cuero-blanco.jpg"
    },
    {
      "name": "Chaleco Negro",
      "description": "juega con una camisa",
      "price": 600,
      "stock": 10,
      "offer": null,
      "category": "Fiesta",
      "img": "images/chaleco-fiesta-negro.jpg"
    },
    {
      "name": "Mochila",
      "description": "fachera y con Accesorios ",
      "price": 750,
      "stock": 3,
      "offer": null,
      "category": "Accesorios",
      "img": "images/mochila-cuero-rojo.jpg"
    },
    {
      "name": "Cintos",
      "description": "aprovechalos",
      "price": 500,
      "stock": 3,
      "offer": null,
      "category": "Accesorios",
      "img": "images/cintos-1.jpg"
    },
    {
      "name": "Cintos",
      "description": "lo nuevo para el verano",
      "price": 550,
      "stock": 3,
      "offer": null,
      "category": "Accesorios",
      "img": "images/cintos-2.jpg"
    },
    {
      "name": "Chaleco",
      "description": "lo nuevo para el verano",
      "price": 750,
      "stock": 3,
      "offer": null,
      "category": "Fiesta",
      "img": "images/chaleco-fiesta-2.jpg"
    },
    {
      "name": "Mochila",
      "description": "lo nuevo para el verano",
      "price": 900,
      "stock": 3,
      "offer": null,
      "category": "Accesorios",
      "img": "images/mochila-cuero-negro.jpg"
    },
    {
      "name": "Chaleco",
      "description": "lo nuevo para el verano",
      "price": 750,
      "stock": 3,
      "offer": null,
      "category": "Nuevo",
      "img": "images/chaleco-blanco-2.jpg"
    },
    {
      "name": "Chalecos fiesta",
      "description": "lo nuevo para el verano",
      "price": 750,
      "stock": 3,
      "offer": null,
      "category": "Fiesta",
      "img": "images/chaleco-fiesta-1.jpg"
    },
    {
      "name": "Lentes",
      "description": "lo nuevo para el verano",
      "price": 500,
      "stock": 3,
      "offer": null,
      "category": "Accesorios",
      "img": "images/lentes de sol-1.jpg"
    },
    {
      "name": "Matera de cuero",
      "description": "lo nuevo para el verano",
      "price": 800,
      "stock": 3,
      "offer": null,
      "category": "Accesorios",
      "img": "images/matera-cuero-1.jpg"
    },
    {
      "name": "Mochilas",
      "description": "de cuero",
      "price": 750,
      "stock": 3,
      "offer": null,
      "category": "Accesorios",
      "img": "images/mochila-cuero-negro-2.jpg"
    },
    {
      "name": "Accesorios",
      "description": "si se te caen los lentes",
      "price": 350,
      "stock": 3,
      "offer": null,
      "category": "Accesorios",
      "img": "images/porta-lentes.jpg"
    },
    {
      "name": "Accesorios",
      "description": "collares",
      "price": 350,
      "stock": 3,
      "offer": null,
      "category": "Accesorios",
      "img": "images/acsesorios.jpg"
    },
    {
      "name": "Polera",
      "description": "fiesta",
      "price": 750,
      "stock": 3,
      "offer": null,
      "category": "Fiesta",
      "img": "images/polera-fiesta-2.jpg"
    },
    {
      "name": "Conjunto_varsovia",
      "description": "deportivo",
      "price": 1980,
      "stock": 3,
      "offer": null,
      "category": "Nuevo",
      "img": "images/conjunto-varsovia21.jpg"
    },
    {
      "name": "Polera",
      "description": "bien calentita",
      "price": 750,
      "stock": 4,
      "offer": null,
      "category": "Ropa",
      "img": "images/polera-blanca.jpg"
    },
    {
      "name": "Polera",
      "description": "ideal para fiesta",
      "price": 750,
      "stock": 3,
      "offer": null,
      "category": "Fiesta",
      "img": "images/polera-fiesta.jpg"
    },
    {
      "name": "Chaleco",
      "description": "..",
      "price": 750,
      "stock": 3,
      "offer": null,
      "category": "Fiesta",
      "img": "images/chaleco-bell-3.jpg"
    }
  ];
  

module.exports = execute;
