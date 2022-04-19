// let navItems = document.getElementsByClassName("nav-list-items");
// console.log(navItems);
// console.log(navItems[0]);
// navItems[0].textContent = "Homes";
// navItems[0].style.fontWeight = "bold";
// navItems[0].style.backgroundColor = "black";

// let li = document.getElementsByTagName("li");
// console.log(li);
// console.log(li[0]);
// li[0].textContent = "Homes";
// li[0].style.fontWeight = "bold";
// li[0].style.backgroundColor = "black";

// let header = document.querySelector(".header");
// header.style.borderBottom = "solid 10px #ccc";

// let buttonSignUp = document
//   .getElementById("buttonid")
//   .addEventListener("click", buttonClick);

// function buttonClick(e) {
//   document.querySelector(".header h1").style.color = `#ccc`;
//   document.querySelector(".navbar .logo").textContent = "IMPROVEDFlexbox";
//   console.log("button clicked");
//   console.log(e.target);
//   console.log(e.target.id);
//   console.log(e.target.className);
//   console.log(e.clientX, e.clientY);
//   console.log(e.offsetX, e.offsetY);
//   console.log(e.shiftKey);
// }

// let anotherButton = document.getElementById("buttonid");
// anotherButton.addEventListener("mouseup", runEvent);

// function runEvent(e) {
//   console.log(`EVENT TYPE: ${e.type}`);
// }

let form = document.getElementById("addformid");
let itemList = document.getElementById("ulid");
let searchid = document.getElementById("searchid");

//form submit event
form.addEventListener("submit", addItem);

//delete event
itemList.addEventListener("click", removeItem);

//filter event
searchid.addEventListener("keyup", filterItem);

//add item
function addItem(eve) {
  eve.preventDefault();

  // get input value
  let newItem = document.getElementById("inputid").value;

  // create new li event
  let li = document.createElement("li");

  // add class
  li.className = "lic";

  //add text node with input value
  li.appendChild(document.createTextNode(newItem));

  // create delete button element
  let deleteBtn = document.createElement("button");
  deleteBtn.className = "deletebuttonc";
  // append text node
  deleteBtn.appendChild(document.createTextNode("X"));

  //Append button to li
  li.appendChild(deleteBtn);
  // append li to list
  itemList.appendChild(li);
}

function removeItem(eve) {
  if (eve.target.classList.contains("deletebuttonc")) {
    if (confirm("Are you sure?")) {
      let li = eve.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

function filterItem(eve) {
  // convert to lower case
  let text = eve.target.value.toLowerCase();
  // get list
  let items = itemList.getElementsByTagName("li");
  // convert to array
  Array.from(items).forEach(function (item) {
    let itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
