/* create element */

const para = document.createElement("p");

/* create text */

const content = document.createTextNode("This is new");

/* append text to para */

para.appendChild(content);

/* grab were you want to put it */

const element = document.getElementById('div1');

/* append paragraph to were you want to  */

element.appendChild(para);