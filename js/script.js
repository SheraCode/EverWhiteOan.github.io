const checkOut = document.getElementById('checkout-form');


checkOut.addEventListener("submit", function(e) {
    e.preventDefault();

    const url = e.target.action;
    const formData = new FormData(checkOut);

    fetch(url, {
        method : "POST",
        body : formData,
        mode : "no-cors",
    }).then(()=> {
        //url thank you
        window.location.href= "tampilanthankyou.html";
    }).catch((e) =>alert('Error occured'));
});