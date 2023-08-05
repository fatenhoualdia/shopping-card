/*like buttons*/

var btn_like =document.getElementsByClassName('heart_btn')
for( let i=0;i<btn_like.length;i++){
    btn_like[i].addEventListener('click',function(event){
        var btn_clicked=event.target
        btn_clicked.classList.toggle("change_color")
    
    })
}


/*remove buttons*/ 


    var delete_item=document.getElementsByClassName("close")
    for (let i=0; i<delete_item.length ;i++) {
    var button=delete_item[i]
    button.addEventListener('click', function(event) {
        var buttonclicked=event.target
        buttonclicked.parentElement.parentElement.remove()
        updatetotal()
        var itemnbr=document.getElementsByClassName("total_item_number")
        for(let i=0;i<itemnbr.length;i++){
        var itemnumber=document.getElementsByClassName("total_item_number")[i].innerHTML        
        document.getElementsByClassName("total_item_number")[i].innerHTML=itemnumber-1}


    })
}



/*update total*/

function updatetotal(){
    var total=document.getElementsByClassName("total_price")
    var prices=document.getElementsByClassName("prix")
    var total_price=0
    for( let i=0;i<prices.length;i++){
        total_price+=Number(prices[i].innerHTML)
        document.getElementsByClassName('total_price')[0].innerHTML=total_price
    document.getElementsByClassName('priceshipping')[0].innerHTML=total_price+5
        
    }}
    

/*function updatetotal(){
    var cartitemscontainer=document.getElementsByClassName("cart")[0]
    var cartrows=cartitemscontainer.getElementsByClassName("main")
    var total=0
    for (var i=0; i<cartrows.length ;i++) {
        var cartrow=cartrows[i]
        var priceelement = cartrow.getElementsByClassName("prix")[0]
        var quantityelement=cartrow.getElementsByClassName("quantity")[0] 
        console.log(priceelement)
        console.log(quantityelement)
        var price = priceelement.innerText.replace('€',"")
        var quantity = quantityelement.innerHTML
        total=total+price
    }
document.getElementsByClassName('total_price')[0].innerHTML=total
document.getElementsByClassName('priceshipping')[0].innerHTML=total+5
}
var quantity1=document.getElementsByClassName('quantity')[0].innerText
/*

/* adding/reducing items*/

var add = document.getElementsByClassName("btn_plus");
for (let i = 0; i < add.length; i++) {
  add[i].addEventListener("click", function () {
    var btnClick = event.target;
    var val_qty = parseFloat(btnClick.previousElementSibling.innerHTML);
    val_qty++;
    btnClick.previousElementSibling.innerHTML = val_qty;
    var prix = (
        btnClick.parentElement.previousElementSibling.children[2].innerText.replace('€',"")
    );
    var result =prix*val_qty
    
    btnClick.parentElement.nextElementSibling.children[0].innerHTML=result.toFixed(2)
    updatetotal()
  });
}

var min = document.getElementsByClassName("btn_min");

for (let i = 0; i < min.length; i++) {
  min[i].addEventListener("click", function () {
    var btnClick = event.target;
    var val_qty = parseFloat(btnClick.nextElementSibling.innerHTML);
    val_qty--;
    var prix = (
        btnClick.parentElement.previousElementSibling.children[2].innerText.replace('€',"")
    );
    if (val_qty < 1){
        btnClick.nextElementSibling.innerHTML=1
        var result=prix
    
    }
    else {
        btnClick.nextElementSibling.innerHTML=val_qty
        var result =prix*val_qty
    }
    
    btnClick.parentElement.nextElementSibling.children[0].innerHTML=result.toFixed(2)
    updatetotal()
  })
};