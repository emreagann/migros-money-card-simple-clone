class Migros {
    discountRate = 15;
    constructor(firstname, lastname, cardexistness, products) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.cardexistness = cardexistness;
        this.products = products;
    }
    hesapla() {
        let amountPayable = 0;
        if (this.checkProducts(this.products)) {
            if (this.cardexistness) {
                this.products.forEach((product) => {
                    amountPayable += (product.price * (100 - this.discountRate) / 100);
                })
            }
            else {
                this.products.forEach((product) => {
                    amountPayable += product.price;
                })
             }
        }
        else {
            alert("You should buy at least one product.")
        }
        return amountPayable;
    }
    checkProducts(products) {
        if (products != null && products.length > 0) {
            return true;
        }
        return false;
    }
    getName() {
        return this.firstname;
    }
    getSurname() {
        return this.lastname;
    }
}
