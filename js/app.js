export class App {
    constructor(){
        this.pageContent = "";
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
    }
}