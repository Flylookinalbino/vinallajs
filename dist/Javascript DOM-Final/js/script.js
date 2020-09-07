var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form Submit event
form.addEventListener('submit', addItem);

// Delete Event
itemList.addEventListener('click', removeItem);

// Filter Event
filter.addEventListener('keyup', filterItems);

// Function Add Item
function addItem(e){
    e.preventDefault();

    // Get Input Value
    var newItem = document.getElementById('item');

    // Extract Class List from list item
    var listItem = document.querySelector('.listItem').classList.value;
    var buttonClass =document.querySelector('.buttonItem').classList.value
    
    // Create an Element
    var li = document.createElement('li');
    var button = document.createElement('button')

    // Add Class to newElement
    li.className = listItem;
    button.className = buttonClass;
    
    // Add TextNode
    li.appendChild(document.createTextNode(newItem.value));
    button.appendChild(document.createTextNode('X'));

    // Append itemList
    itemList.appendChild(li);
    itemList.appendChild(button);

    newItem.value = '';
};

// Function Remove Item
function removeItem(e){
    if(e.target.classList.contains('buttonItem')){
        if(confirm('Are you sure you want to delete List Item?')){
            itemList.removeChild(e.target.previousElementSibling);
            itemList.removeChild(e.target);
        }
    }
};

// Function Filter Items
function filterItems(e){
    // Get input value and make input value lowercase
    var text = e.target.value.toLowerCase();

    // Get itemList
    var items = itemList.querySelectorAll('li');

    // Loop Through items
    for(var i = 0; i < items.length; i++){
        // Find maching characters in the item string
        if(items[i].textContent.toLowerCase().indexOf(text) != -1){
            items[i].style.display = 'block';
            items[i].nextElementSibling.style.display = 'block';
        }else{
            items[i].style.display = 'none';
            items[i].nextElementSibling.style.display = 'none';
        }
    };
};