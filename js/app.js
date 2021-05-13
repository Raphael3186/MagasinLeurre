import { environment } from '/js/env.js';  

export class App {
    constructor(){
        this.pageContent = "";

        this.ArticleTag = null;
    
        
    }

    async Search(view) {
        this.pageContent = "";

        await fetch('/views/header.html')
            .then(res => res.text())
            .then(data => this.pageContent += data);

        await fetch(`/views/${view}.html`)
            .then(res => res.text())
            .then(data => this.pageContent += data);

        
        await fetch('/views/footer.html')
            .then(res => res.text())
            .then(data => this.pageContent += data);

    document.body.innerHTML = this.pageContent;

    this.init(view);
    }

    init(view) {
        this.ArticleTag = document.getElementById('produits')

        if (view === 'produits') {
            this.getProduits();
        }
    }

    getProduits(){

        fetch(environment.api)
            .then(res => res.json())
            .then(data => {
                if (data && data.produits){
                    for (let produit of data.produits){
                        this.createProduitsTag(produit);

                    }
                }
        });
    }

    createProduitsTag(produit) {
        const produitTag = document.createElement('section');

        produitTag.className = 'produits';
        produitTag.innerHTML =`
        <section class="accordion" id="produits">
            <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                ${produit.nom.toUpperCase()}
                </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                <p><strong>${produit.prix.toUpperCase()}</strong> ${produit.desciption.toUpperCase()}</p>
                <button type="button" class="btn btn-success btn-lg add-to-cart"> Ajouter au panier !</button>
                </div>
            </div>
            </div>
        </section>
    
        `;

        this.ArticleTag.appendChild(produitTag);
        return produitTag;
      


    }
}
