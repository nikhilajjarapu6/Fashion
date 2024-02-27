document.addEventListener('DOMContentLoaded', function () {
    var bar = document.getElementById('bars');
    var hide = document.getElementById('hide');
    var asideBar = document.querySelector('.aside-bar');

    // Function to trigger aside bar on click 
    if (bar) {
        bar.addEventListener('click', function () {
            asideBar.classList.add('hover');
            setTimeout(function () {
                hide.style.display = 'inline';
            }, 300);
        });
    }

    // Function to close aside bar on click
    hide.addEventListener('click', function () {
        asideBar.classList.remove('hover');
        hide.style.display = 'none';
    });

    // Function to close aside bar on click outside
    document.addEventListener('click', function (event) {
        if (event.target !== bar) {
            asideBar.classList.remove('hover');
            hide.style.display = 'none';
        }
    });

    

    

    //function to active card during hiver on nav items
    var cards = document.querySelectorAll('.card');
    cards.forEach(function (card) {
        card.addEventListener('mouseover', function() {
            toggleItemsCard(card.getAttribute('data-value'));
        });
       
        card.addEventListener('click', function() {
        
            hideItemsCard(card.getAttribute('data-value'));
        });
    });


    //card appearing during hver
    function toggleItemsCard(cardvalue) {
        var itemscards = document.querySelectorAll('.items-card');
    
        itemscards.forEach(function (itemcard) {
            var list1Items = itemcard.querySelector('.list1');
            var list2Items = itemcard.querySelector('.list2');
    
            if (cardvalue === 'Women') {
                list1Items.innerHTML = `
                <li><a href="#">Western Wear</a></li>
                <li><a href="#">Accessories</a></li>
                <li><a href="#">Party Wear</a></li>
            `;
            list2Items.innerHTML = `
                <li><a href="#">Jeans</a></li>
                <li><a href="#">Indian Wear</a></li>
                <li><a href="#">Editor Choices</a></li>
            `;
        } else if (cardvalue === 'Kids') {
            list1Items.innerHTML = `
                <li><a href="#">Boy Wear</a></li>
                <li><a href="#">Girl Wear</a></li>
                <li><a href="#">5 years</a></li>
            `;
            list2Items.innerHTML = `
                <li><a href="#">Baby Care</a></li>
                <li><a href="#">Toys</a></li>
                <li><a href="#">Cartoon</a></li>
            `;
        } else {
            list1Items.innerHTML = `
                <li><a href="#">Western Wear</a></li>
                <li><a href="#">Ethinic Wear</a></li>
                <li><a href="#">Foot Wear</a></li>
            `;
            list2Items.innerHTML = `
                <li><a href="#">inner Wear</a></li>
                <li><a href="#">Grooming Wear</a></li>
                <li><a href="#">Accessories </a></li>
            `;
            }
           
        });
       
      
        itemscards.forEach(function (itemcard) {
            itemcard.style.display = 'inline-flex';
        });
    }

    //hiding card when click
    function hideItemsCard() {
        var itemscards = document.querySelectorAll('.items-card');
        itemscards.forEach(function (itemcard) {
            itemcard.style.display = 'none'; // Hide items card when mouse moves off the card
        });
    }


    //function for closing the card when click outside f the webpage
    var itemscards = document.querySelectorAll('.items-card');
    document.addEventListener('click', function () {
       
        itemscards.forEach(function (itemcard) {
            itemcard.style.display = 'none';
        });
    });

    
    


});























//code for loaoding of titles besidde element corresponding to the that element element
// var hoverItems = document.querySelectorAll('.list');
// hoverItems.forEach(function(item) {
//     item.addEventListener('mouseenter', function(event) {
//         var message = this.getAttribute('value');
//         showHoverMessage(message, event.clientX, event.clientY); //returns xy co ordeinates
//     });
//     item.addEventListener('mouseleave', function() {
//         hideHoverMessage();
//     });
// });


// function showHoverMessage(message,x,y) {
//     var hoverSpan = document.createElement('span');
//     hoverSpan.textContent = message;
//     hoverSpan.classList.add('hover-span');
//     hoverSpan.style.left = x + 'px';
//     hoverSpan.style.top = y + 'px';
//     document.body.appendChild(hoverSpan);
// }

// function hideHoverMessage() {
//     var hoverSpan = document.querySelector('.hover-span');
//     if (hoverSpan) {
//         hoverSpan.remove();
//     }
// }
