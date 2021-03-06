function getItems() {
    db.collection("items").get().then((querySnapshot) => {
        let items = [];
        querySnapshot.forEach((doc) => {
            items.push({
               id: doc.id,
               image: doc.data().image,
               name: doc.data().name,
               make: doc.data().make,
               rating: doc.data().rating,
               price: doc.data().price
            })
        });
        generateItems(items)
    });
}

function addToCart(item){
    console.log(item);
    let cartItem = db.collection("cart-items").doc(item.id);
    cartItem.get()
    .then(function(doc){
        if(doc.exists){
            cartItem.update({
                quantity:doc.data().quantity + 1
            })
        }
        else{
            cartItem.set({
                image: item.image,
                make: item.make,
                name: item.name,
                rating: item.rating,
                price: item.price,
                quantity: 1
            })
        }
    })
    
}


function generateItems(items){
    let itemsHTML= '';
    items.forEach((item) => {
        let doc =document.createElement("div");
        doc.classList.add("main-product", "mr-5", "mb-5", "w-80");
        doc.innerHTML = `
        <div class="product-image w-48 h-52 bg-white rounded-lg p-4">
            <!-- image -->
            <img class="w-full h-full object-contain" src="${item.image}" alt="">
        </div>
        <div class="product-name text-gray-600 font-bold mt-2 text-small">
            <!-- product name -->
            ${item.name}
        </div>
        <div class="product-make text-green-700 font-bold">
            <!-- product-make -->
            ${item.make}
        </div>
        <div class="product-rating text-yellow-500 my-1">
            <!-- rating -->
            ⭐⭐⭐⭐⭐  ${item.rating}
        </div>
        <div class="product-price font-bold text-gray-600 text-lg">
            <!-- price -->
            ₹ ${numeral(item.price).format('0,0.00')}
        </div>
        `

        let addToCartEl = document.createElement("div");
        addToCartEl.classList.add("add-to-cart", "h-8", "w-28", "bg-yellow-500", "flex", "items-center", "justify-center", "rounded", "text-white", "text-md", "cursor-pointer", "hover:bg-yellow-600");
        addToCartEl.innerText= "Add to cart";
        addToCartEl.addEventListener("click", function(){
            addToCart(item);
        })
        doc.appendChild(addToCartEl);
        document.querySelector(".main-section-products").appendChild(doc);

    })

    
}

getItems();