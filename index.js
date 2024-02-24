// // DOM Manipulation

// // 1st is GetElementById------------------------------------------>>>>>
// // document.getElementById("ok");
// // let head = document.getElementById("ok");
// // console.log(head);
// // console.dir(head);

// // 2nd is GetElementByClass------------------------------------------>>>>>
// // document.getElementsByClassName(".hello");
// // let heads = document.getElementsByClassName("hello");
// // console.log(heads);
// // console.dir(heads);

// // 3rd is GetElementByTagName------------------------------------------>>>>>
// // let parahas = document.getElementsByTagName("p");
// // console.log(parahas);
// // console.dir(parahas);

// // QuerySelector (Return Nodes)
// // let Firstelements = document.querySelector(".hello"); /// return 1st Element
// // console.log(Firstelements);

// // // QuerySelectorAll
// // let Allelements = document.querySelectorAll(".hello"); /// return All Element
// // console.log(Allelements);

// // Propoerties
// //Tag Name
// // let dt = document.getElementById("ok");
// // console.log(dt);
// //dt.tagName You Will get The Tag Name Of This Element

// // Inner Text
// let tdt = document.getElementById("ok");
// console.log(tdt.innerText);

// // Inner HTML
// let dtt = document.getElementById("ok");
// console.log(dtt.innerHTML);

//  Text-Content
// let tdt = document.getElementById("ok");
// console.log((tdt.innerText = "Hello World"));
// console.log((tdt.innerHTML = <h2>Inner H2 Tag</h2>));

// Attribute (Use To Know About Attribute)
// let box = document.querySelector("#Box");
// console.log(box);

// Get Attribute
// let atr = box.getAttribute("id");
// console.log(atr);
// ------------------------------
// let atr = box.getAttribute("class");
// console.log(atr);

// Set Attribute (Use To Set Attribute)
// let box = document.querySelector("#Box");
// box.setAttribute("id", "NewId");
// // console.log(box.setAttribute("class", "newCass"));

// Style Attribute
// let box = document.querySelector("#Box");
// console.log(box);

// Insert Elements
// In This Scenrio We Create It
// let btn = document.createElement("button");
// btn.innerText = "Click Me";
// console.log(btn);

// // Append And Prepend
// // let div = document.querySelector("#Box");
// // console.log(div.prepend(btn));

// // After And Before
// let div = document.querySelector("p");
// console.log(div.after(btn));

// insert heading ("Tasking ")
// let heading = document.createElement("h1");
// heading.innerText = "Hello Am A New";
// console.log(heading);

// let s = document.querySelector("#Box");
// console.log(s.before(heading));

// Delete Elements
let para = document.querySelector("#p");
console.log(para);
para.remove();
