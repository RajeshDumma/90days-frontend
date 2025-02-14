const products = [
    {
        name : "OLEVS Chronograph",
        brand : "Multicolor",
        caseThickness :"11 Millimetres",
        countryOfOrigin :"Hong Kong",
        image : "https://m.media-amazon.com/images/I/61ZspiGgbRL._SX679_.jpg"
    },
    {
        name : "Casio Stainless Steel Men",
        brand : "Silver",
        caseThickness :"18 Millimetres",
        countryOfOrigin :"India",
        image : "https://m.media-amazon.com/images/I/61ybeKQto8L._SY879_.jpg"
    },
    {
        name : "Titan Karishma Analog",
        brand : "Silver",
        caseThickness :"18 Millimetres",
        CountryOfOrigin :"India",
        image : "https://m.media-amazon.com/images/I/51ykbSj-eoL._SX679_.jpg"
    },
    {
        name : "OLEVS Chronograph",
        brand : "Multicolor",
        caseThickness :"11 Millimetres",
        countryOfOrigin :"Hong Kong",
        image : "https://m.media-amazon.com/images/I/61ZspiGgbRL._SX679_.jpg"
        
    }
];

let productContainer = document.getElementById("product");

const cards = products.map(product => {
    return `
    <div class="card" style="width: 18rem">
  <img src="${product.image}" class="card-img-top" alt="${product.name}">
  <div class="card-body">
    <h5 class="card-title">${product.name}</h5>
     <h6 class="card-title mb-2 text-muted">${product.brand}</h6>
    <p class="card-text">Case Thickness: ${product.caseThickness}</p>
    <p class="card-text">Country of Origin: ${product.countryOfOrigin}</p>

    <a href="#" class="btn btn-primary">Buy Now</a>
  </div>
</div>
    `;
});

productContainer.innerHTML = cards.join("");