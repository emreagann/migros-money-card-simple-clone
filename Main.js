let message =
`
Welcome to Migros.
Do you have any Migros Card ?
1 - Yes
2 - No 
`;
const products = [
    {
        productName: "Milk",
        price:42
    },
    {
        productName: "Diaper",
        price:200
    },
    {
        productName: "Ground Beef",
        price:470
    }
]
let result = confirm(message);
let amountPayable; 
if (result) {
    let name = prompt("Enter your name")
    let surname = prompt("Enter your surname")
    const customer = new Musteri(name, surname, result, products);
    amountPayable = customer.hesapla();
    alert(
        `Customer Information : ${customer.getName()} ${customer.getSurname()}
         Payable Amount: ${amountPayable }
    `);
}
else {
    const customer = new Musteri(null, null, result, products);
    amountPayable = customer.hesapla();
    alert(`Payable Amount: ${amountPayable}`);
}