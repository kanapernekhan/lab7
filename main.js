let myTitle = document.getElementsByTagName('title')
let myTitle_arr = myTitle[0];
myTitle_arr.innerHTML = "Lab7";
let myHeading = document.getElementById("myHeading");
myHeading.innerHTML = "Lab7 Assignment";
myHeading.style.color = "blue"

let Line = document.createElement("hr")
document.body.appendChild(Line)

let h2 = document.createElement("h2")
    h2.innerHTML = "Task"
    h2.style.color = "red"
document.body.appendChild(h2)

let p1 = document.createElement("p")
    p1.innerHTML = "In this task you have to reproduce this HTML page as is using <strong>only</strong> JavaScript. The task will be evaluated on the basis of the following DOM manipulation techniques:" 
document.body.appendChild(p1)

let ul_1 = document.createElement("ul")
document.body.appendChild(ul_1);

li_1 = document.createElement ("li")
    li_1.innerHTML = "find elements in the DOM <strong> (5 points)</strong>;"
    li_1.classList.add("odd")
ul_1.appendChild(li_1)
li_2 = document.createElement ("li")
    li_2.innerHTML = "create/add/remove elements <strong> (5 points)</strong>;"
    li_2.classList.add("even")
ul_1.appendChild(li_2)
li_3 = document.createElement ("li")
    li_3.innerHTML = "change content of the elements <strong> (5 points)</strong>;"
    li_3.classList.add("odd")
ul_1.appendChild(li_3)
li_4 = document.createElement ("li")
    li_4.innerHTML = "change styles of the elements <strong> (5 points)</strong>;"
    li_4.classList.add("even")
ul_1.appendChild(li_4)
li_5 = document.createElement ("li")
    li_5.innerHTML = "change attributes of the elements <strong> (5 points)</strong>;"
    li_5.classList.add("odd")
ul_1.appendChild(li_5)
li_6 = document.createElement ("li")
    li_6.innerHTML = "change classes of the elements <strong> (5 points)</strong>."
    li_6.classList.add("even")
ul_1.appendChild(li_6)    
document.body.appendChild(ul_1)

let Line_2 = document.createElement("hr")
document.body.appendChild(Line_2)

let h3 = document.createElement("h2")
    h3.innerHTML = "Submission"
    h3.style.color = "red"
document.body.appendChild(h3)

let p3 = document.createElement("p");
    p3.innerHTML = "To submit your work, follow these instructions:"
document.body.appendChild(p3);

let ul_2 = document.createElement("ul")
document.body.appendChild(ul_2);

li_21 = document.createElement ("li")
    li_21.innerHTML = "Create a new repository on Github, named <strong> lab7 (1 point).</strong>"
    li_21.classList.add("odd")
ul_2.appendChild(li_21)

li_22 = document.createElement ("li")
    li_22.innerHTML = "Clone this repository to your local machine and work inside it."
    li_22.classList.add("even")
ul_2.appendChild(li_22)

li_23 = document.createElement ("li")
    li_23.innerHTML = "Create a new HTML file, called <strong> index.html</strong>, which has only one &lt;h1&gt; tag with &#34;Hello, World!&#34; message <strong>(1 point).</strong>"
    li_23.classList.add("odd")
ul_2.appendChild(li_23)

li_24 = document.createElement ("li")
    li_24.innerHTML = "Create a new JavaScript file, called <strong> main.js</strong>, which must contain your program (assignment) described above (<strong>1 point</strong>)."
    li_24.classList.add("even")
ul_2.appendChild(li_24)

li_25 = document.createElement ("li")
    li_25.innerHTML = "Link this <strong> main.js </strong> file to your <strong> index.html </strong> file (Note: place your script at the end of the <strong> body </strong> section)."
    li_25.classList.add("odd")
ul_2.appendChild(li_25)

li_26 = document.createElement ("li")
    li_26.innerHTML = "Write a JavaScript program in <strong> main.js </strong> to make your <strong> index.html </strong> look identical to this HTML file (<strong>5 points</strong>)."
    li_26.classList.add("even")
ul_2.appendChild(li_26)    

li_27 = document.createElement ("li")
    li_27.innerHTML = "After you finish your work, submit it to the Github (<strong>2 points</strong>)."
    li_27.classList.add("odd")
ul_2.appendChild(li_27)  

document.body.appendChild(ul_2)

let Line_3 = document.createElement("hr")
document.body.appendChild(Line_3);

let numberofOdd = document.getElementsByClassName("odd");
for (let i = 0; i < numberofOdd.length; i++){
    numberofOdd[i].style.color = 'green';
}
let numberofEven = document.getElementsByClassName("even");
for (let i = 0; i < numberofEven.length; i++){
    numberofEven[i].style.color = 'purple';
}