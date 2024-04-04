import {name, age } from "./person.js";
        
        let text = "my name is " + name + ", I am " + age + ".";

        document.getElementById('demo').innerHTML = text;

        const greetings = name => {
            console.log(`Hello, ${name}!`);
        }

        greetings("Chad");