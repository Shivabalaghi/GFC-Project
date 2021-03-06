// Code that gets result tags from the other page//
let result = localStorage.getItem('results');
 console.log(result);

// Converting result string into Array

resultArr = result.split(",");
console.log(resultArr);


//Code for the cards//
let hiltonBrighton = {
    cardTitle:'Hilton Brighton',
    text: "Set on the vibrant Brighton seafront, Hilton Brighton Metropole perfectly captures the character of this much-loved city while retaining Victorian elegance and charm. From our stylish dining venues to the modern health club facilities, we provide the perfect base from which to explore Brighton's culture and diversity. Even with contemporary touches throughout the hotel, the heritage and character of our 125 year history shines brightly through.",
    image: 'https://www3.hilton.com/resources/media/hi/BSHMETW/en_US/img/shared/full_page_image_gallery/main/HL_extnight1_1270x560_FitToBoxSmallDimension_Center.jpg',
    button: 'https://www3.hilton.com/en/hotels/united-kingdom/hilton-brighton-metropole-BSHMETW/index.html',
    tags:['beach','drinking', 'relaxing'],
}

let polurrianHotel = {
    cardTitle:'Polurrian Hotel',
    text: "Catch a contemporary Cornish retreat in a spectacular clifftop setting – Experience the best of Cornwall",
    image: 'https://www.polurrianhotel.com/uploads/images/our-hotel/_1140/luxury-family-hotels-polurrian-bay-cornwall-hotel-3.jpg',
    button: 'https://www.polurrianhotel.com/',
    tags: ['beach', 'drinking']
}

let penallyAbbey = {
    cardTitle:'Penally Abbey',
    text: "A cosy hotel overlooking the magical Pembrokeshire coast",
    image: 'https://www.penally-abbey.com/media/penally-abbey-hotel-facebook-bannerpenally-abbey-copy.jpg',
    button: 'https://www.penally-abbey.com/',
    tags: ['beach', 'relaxing']
}

let cumberlandLodge = {
        cardTitle:'Cumberland Lodge',
        text: "Set in the heart of Queen Elizabeth's grounds, this beautiful location offers to sitmulate the mind through empowering conversation",
        image: 'https://www.cumberlandlodge.ac.uk/sites/default/files/public/styles/landscape_for_node_content/public/basic_page/CL%20Aerial%20Shot%202.jpg?itok=2MNBEtrj&c=9c0c4bc44dfd0b47f23ef25f6db4edc3',
        button: 'https://www.cumberlandlodge.ac.uk/',
        tags: ['countryside', 'relaxing']    
}

let clivedenHouse = {
    cardTitle:'Cliveden House',
    text: "Multi-award winning hotel sitting across hundreds of acres of idyllic National Trust parkland",
    image: 'https://www.clivedenhouse.co.uk/media/5317/parterre-autumn-straightened.jpg?anchor=center&mode=crop&width=850&height=720&rnd=132204532460000000',
    button: 'https://www.clivedenhouse.co.uk/',
    tags: ['countryside', 'drinking']    
}

// Turn Objects into Array
const cardArr = [hiltonBrighton, polurrianHotel, penallyAbbey, cumberlandLodge, clivedenHouse];
let cardsHere = document.getElementById('cardsHere')


//Code to get the card infos//

function createCard(display){
    let newDiv = document.createElement('div');
    let str = `<div class="card" style="width: 18rem;">
 <img class="card-img-top" src="${display["image"]}" alt="Card image cap">
 <div class="card-body">
   <h5 class="card-title">${display["cardTitle"]}</h5>
   <p class="card-text">${display["text"]}</p>
   <a href="${display["button"]}" class="btn btn-primary">Go to page!</a>
 </div>
</div>` 

    newDiv.innerHTML=str;
    return newDiv;
};

// Function to check for array equality
function arrCompare(arr1, arr2) {
    if (arr1.length !== arr2.length){
        return false;
    } 
    var length = arr1.length
    for (var i = 0; i < length; i++){
        if (arr1.includes(arr2[i]) === false){
            return false;
        }
    }; 
    return true
};



//Loop to add cards to DOM

for (i of cardArr){
    
    if (result.length === 0){
        cardsHere.appendChild(createCard(i));
    } else {
        if (arrCompare(resultArr, i['tags']) === true){
            console.log(i);
            cardsHere.appendChild(createCard(i));
        }; 
    }

    // if(resultArr === i['tags']){
    //     console.log(i);
    //     cardsHere.appendChild(createCard(i));
    // }; 
};



