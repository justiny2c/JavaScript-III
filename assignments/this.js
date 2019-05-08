// The for principles of "this";
// * in your own words. explain the four principle for the "this" keyword below.

// * 1. Window/Global Object Binding: 
//         Refers to the value of "this" within the Object window -- meaning Object("value"){}

// * 2. Implicit Binding: 
//         When dot notation is used to invoke a function within an Object -- i.e. Object.function

// * 3. New Binding: 
//         Allows you to call to new values of "this" within Object constructor and function when creating a new variable to call the Object

// * 4. Explicit Binding: 
//         Explicitly calling values to the key(s) within a constructor function

// * write out a code example of each explanation above
// 

// Principle 1
// code example for Window Binding
function whatsUp(pronoun){
    this.noun = pronoun;
    this.adjective = "smart"
    console.log(`What's up, ${this.adjective} ${this.noun}`)
  }
  
  whatsUp("dude")
  whatsUp("man")
  
  // Principle 2
  // code example for Implicit Binding
  
  const what = {
    whatWeSay: "WHAT?!",
    whoWeSay: function(name) {
      console.log(`${this.whatWeSay} ${name}`)
    }
  };
  
  what.whoWeSay("Steve");
  
  // Principle 3
  // code example for New Binding
  
  // --using whatsUp constructor from Principle 1--
  
  const bob = new whatsUp("Bob")
  const jamie = new whatsUp("James")
  
  // Principle 4
  // code example for Explicit Binding
  
  const newPerson = {
    noun: "guuuurl",
    greeting: "Well hay there..."
  }
  
  function okayHi (hello){
    return `${this.greeting} ${this.noun}`
  }
  
  console.log(okayHi.call(newPerson))