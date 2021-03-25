// Selected the first p tag in my html document and changed the content to "I am the first paragraph"
var paragraph1 = document.querySelector('p');
paragraph1.innerText = "I am the first paragraph";

// Selected all h2 tags and changed the content to "We are h2 tags"
var allh2tags = document.querySelectorAll('h2');
for (var i = 0; i < allh2tags.length; i++) {
    allh2tags[i].innerText = "We are h2 tags";
}

// Selected the element with id="paragraph2" and changed the content to "I am the second paragraph"
var secondparagraph = document.getElementById("paragraph2");
secondparagraph.innerText = "I am the second paragraph";

// Selected elements that had a class of "heading1" and changed the content to "We are h1 tags"
var allh1tags = document.getElementsByClassName("heading1");
for (var i = 0; i < allh1tags.length; i++) {
    allh1tags[i].innerText = "We are h1 tags";
}

// Selected all li elements and changed the content of them lis to "We are things in a list"
var list = document.getElementsByTagName("li");
for (var i = 0; i < list.length; i++) {
    list[i].innerText = "We are things in a list";
}

// Selected a parent element with the id of "parent". Created a new h3 element inside the parent element and the content is "Hello I am a new element"
var newElement = document.createElement("h3");
var parentElement = document.getElementById("parent");
parentElement.append(newElement);
newElement.innerText = "Hello I am a new element";

// Created text node of "Hello there!" and assigneed it to an h5 element
var h5 = document.createElement("h5");
var text = document.createTextNode("Hello there!");
h5.appendChild(text);
document.body.appendChild(h5);

// Removed the last child element of the parent element "span"
var span = document.querySelector('span');
span.removeChild(span.lastElementChild);

// Added a class name of "links" to an a tag
var links = document.querySelector('a');
links.classList.add('links');

// Removed the class name of "paragraph4" from the p tag inside the article container
var paragraph4 = document.querySelector('article p');
paragraph4.classList.remove('paragraph4');

// I added a new class name of "new-class" to the p tag in the footer container. It is now toggled on or true
var p5 = document.querySelector('footer p');
var classStatus = p5.classList.toggle('new-class')