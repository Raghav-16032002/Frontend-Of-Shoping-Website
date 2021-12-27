function completeShopping(){
    db.collection("cart-items").onSnapshot((snapshot) => {
        let cartItems =[];
        snapshot.docs.forEach((doc) => {
            cartItems.push({
                id: doc.id
            })
        })
        complete(cartItems)
    })
}

function complete(items){
    items.forEach((item)=>{
        db.collection("cart-items").doc(item.id).delete();
    })
}

document.querySelector(".complete-order-button").addEventListener("click", function(){
    completeShopping();
    alert('Thank You for with us.....')
})

