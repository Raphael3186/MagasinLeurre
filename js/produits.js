let Cuillière = {
    Nom = "Cuillière",
    Prix = "5.60€",
    Description = "Ce produit est parfait pour la pêche de la truite en rivière mais peut également être utilisé sur la pêche du carnasier",

}

let LeurreSouple = {
    Nom = "Leurre Souple",
    Prix = "8.00€",
    Description = "Ce produit est utilisé pour la pêche du carnasier notament le sandre,brochet et pêche en rivière",
}

let Crankbaits = {
    Nom = "Crankbaits",
    Prix = "11.00€",
    Description = "Ce produits est utilisé généralement l'été lorsque l'eau est chaude pour la pêche de tous les carnasiers",
}

let Chatterbaits = {
    Nom = "Chatterbaits",
    Prix = "12.00€",
    Description = "Ce produits est particulièrement appressié par les bochets utilisable à n'importe quel saison",
}

let products = [];

products.push(Cuillière,LeurreSouple,Crankbaits,Chatterbaits);

console.log(products[1].Prix);