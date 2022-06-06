    // Task 1: Introduction

    //console.log('Hello, ES6, This is Jaspreet');





    // ---------------------------------------------
    // Task 2: Variables (let) and Scoping

    // var name =  'Jaspreet';
    // console.log(name);
    // var name = 'Singh'
    // console.log(name)
    // name = 'Jaspreet Singh'
    // console.log(name)

    // let myCourse = 'BCA';
    // console.log(myCourse);
    // myCourse = 'BCA+MCA';
    // console.log(myCourse);

    // function myName (){
    //     var name = 'Jaspreet S'
    //     console.log('inside' + name)
    // }
    // myName();
    // console.log('outside'+name)


    // Task 2: Execise 1: Fix the code to print 15

    // var age = 15;

    // for (let age = 1; age <= 10; age++) {
    //     console.log(age); 
    // }

    // console.log(age); // Should print 15 instead of 10

    // Task 2: Execise 2: Fix the code to print Jack Russell Terrier

    // let myDog = "Jack Russell Terrier";
    // var shortLeggies = true;

    // if (shortLeggies) {
    //     let myDog = "Welsh Corgie";
    //     console.log(myDog);
    // } else {
    //     let myDog = "Border Collie";
    //     console.log(myDog); 
    // } 

    // console.log(myDog); // Jack Russell Terrier







    // ---------------------------------------------
    // Task 3: Variables (const) and Immutability

    // const paintings = [
    //     'The starry night',
    //     'The night cafe'
    // ];
    // paintings.push('Irises')
    // console.log(paintings)


    // const paintingInformation = {
    //     name: "Starry night",
    //     painter: "Van Gogh",
    //     location: {
    //         museum: "MoMA",
    //         city: "New York City"
    //     }
    // }
    // Object.freeze(paintingInformation); //below changes can be modified, it only freeze first level

    // paintingInformation.year = 1998;
    // paintingInformation.name = "The" + paintingInformation.name;
    // paintingInformation.location.country = "USA";
    // console.log(paintingInformation)



    // TASK 3: Exercise: Refactor the code to use let/const

    // const painter = {
    //     name: "Van Gogh",
    //     nationality: "Dutch",
    //     paintings: ["The Starry Night", "Irises", "Almond Blossoms"]
    // };
    // Object.freeze(painter)
    // Object.freeze(painter.paintings)
    // painter.birthDate = "March 30, 1853";

    // painter.paintings.push("Something");

    // console.log(painter); // Should print { name: 'Van Gogh', nationality: 'Dutch', paintings: [ 'The Starry Night', 'Irises', 'Almond Blossoms' ] }





    // ---------------------------------------------
    // TASK 4: Destructuring

    // const recipe = {
    //     name: 'red Lentil dahl',
    //     timeInMinutes: 30,
    //     ingredients: ['red lentils', 'cumin', 'tumeric']
    // }

    // const {name: myName, ingredients: myIngredients}  = recipe;
    // console.log(recipe, myName, myIngredients)



    // Task 4: Exercise: Extract data with destructuring

    // const ingredients = {
    //     tea: 'black',
    //     milk: 'soy',
    //     sweetener: 'honey',
    //     spices: ['ginger', 'cardamom', 'cinnamon', 'nutmeg']
    // }

    // Destructure the parameters
    // function prepareChai({tea, milk, sweetener, spices}) {
        // const tea = ingredients.tea;
        // const spices = ingredients.spices;
        // const milk = ingredients.milk;
        // const sweetener = ingredients.sweetener;

    //     console.log("Mix the " + tea + " tea " +
    //         "with the " + spices + " in a small pot. " + 
    //         "Add a cup of water and bring to boil. Boil for 2-3 min. " +
    //         "Add " + milk + " milk and " + sweetener + ". " + 
    //         "Simmer for 3 min. Serve masala chai hot or warm!");
    // }

    // prepareChai(ingredients);

    // const spices = ["cardomom", "tumric", "cumin"];
    // const [spice1, ...restOfTheSpeices] =spices
    // console.log(spice1, restOfTheSpeices)



    // ---------------------------------------------
    // TASK 5: Strings and Interpolation


    // const language = "English"
    // console.log(language.includes("g"))
    // console.log(language.includes("Eng"))
    // console.log(language.includes("sH"))
    // console.log(language.repeat(3))

    // console.log(`I speak 
    // some languages such as 
    // ${language === "English" ? "british English" : "none"}`)


    // TASK 5: Exercise: Refactor the code to use the ES6 String utility methods

    // const country = "Bulgaria";
    // const city = "Sofia";

    // if (country.includes("Blug")) {
    //     console.log("The country starts with Bulg");
    // }

    // if (city.startsWith("So")) {
    //     console.log("The name starts with So");
    // }

    // if (city.endsWith("a")) {
    //     console.log("The name ends with a");
    // }

    // console.log(
    //     `The capital of ${country}
    //     is the city of ${city}`
    // );









    // ---------------------------------------------
    // TASK 6: Arrow functions

//     const numbers =[1,2,3,4,5,6]
//     let doubleNumber = numbers.map(
//         number => {
//             return number *2;
//         }
//     )
// console.log(doubleNumber)



    // TASK 6: Exercise: Filter out only the prime numbers from the array
    // const isPrime = number => number%2 === 0
    // const primeNumbers = [1, 2, 3, 4, 5, 6].filter(isPrime);

    // console.log(primeNumbers);







    // ---------------------------------------------
    // TASK 7: Arrow functions and this

    function Dog(){
        this.age =0;
        setInterval(() =>{
            this.age += 1;
            console.log(this.age)

        }, 1000)
    }
    // const puppy = new Dog()

    const isOdd = (... args) => {
        console.log(args)
        return args[0] % 2 === 1
    };
    console.log(isOdd(1))




    // Task 7: Exercise

    function Translator() {
       this.phrase = "good day";
       this.englishBulgarianDictionary = {
           good: "добър",
           day: "ден"
       }
    }

    Translator.prototype.getBulgarianPhrase = function() {
       return this.phrase
           .split(" ")
           .map((word) =>  this.englishBulgarianDictionary[word])
           .join(" ");
    }
    
    const translator = new Translator();
    console.log(translator.getBulgarianPhrase());
