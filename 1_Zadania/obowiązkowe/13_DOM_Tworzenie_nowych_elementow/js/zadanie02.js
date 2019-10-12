document.addEventListener("DOMContentLoaded", function () {
    function addData(e){
        console.log('dupa');
        let id = document.querySelector('#orderId').value;
        let item = document.querySelector('#item').value;
        let quantity = document.querySelector('#quantity').value;
        const orders = document.querySelector('#orders');

        const tr = document.createElement('tr');

        let orderId = document.createElement('td');
        orderId.innerHTML = id;

        let orderItem = document.createElement('td');
        orderItem.innerHTML = item;

        let orderQuantity = document.createElement('td');
        orderQuantity.innerHTML = quantity;

        tr.appendChild(orderId);
        tr.appendChild(orderItem);
        tr.appendChild(orderQuantity);
        orders.appendChild(tr);

        id = document.querySelector('#orderId').value = '';
        item = document.querySelector('#item').value = '';
        quantity = document.querySelector('#quantity').value = '';

     }
     const buttons = document.querySelectorAll('#addBtn');

     for(let item of buttons){
         item.addEventListener('click',addData,false);
     }
});