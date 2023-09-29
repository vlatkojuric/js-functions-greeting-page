console.clear();

/*
Change the contents of this page depending on the current day and time.

- Write a function getGreeting that returns a different greeting depending on the current time:
  - 6 - 12: returns "Good Morning"
  - 13 - 18: returns "Good Afternoon"
  - 19 - 22: returns "Good Evening"
  - 23 - 5: returns "Good Night"

(HINT: you can get the current time: new Date().getHours() )

- Write a function getDayColor that returns a different color depending on the current weekday:
  - monday: "darkgray"
  - tuesday - friday: "lightblue"
  - saturday - sunday: "hotpink"

(HINT: you can get the current weekday: new Date().getDay() )

*/

const display = document.querySelector('[data-js="display"]');
const time = new Date().getHours();

function getGreeting() {
  if (time >= 6 && time <= 12) {
    return "Good morning";
  }
  if (time >= 13 && time <= 18) {
    return "Good afternoon";
  }
  if (time >= 19 && time <= 22) {
    return "Good evening";
  }
  if (time <= 23 && time <= 5) return "Good night";
} // THIS LINE OF CODE DID NOT EXECUTE BECAUSE 00 IS NOT GREATER THAN 23,YOU HAVE TO PUT TIME IS LESS THAN 23 TO WORK
// Code here
//- monday: "darkgray"
//- tuesday - friday: "lightblue"
//- saturday - sunday: "hotpink"

function getDayColor() {
  // Code here
  const weekDay = new Date().getDay();
  if (weekDay === 1) return "darkgray";
  if (weekDay === 2 || weekDay === 3 || weekDay === 4 || weekDay === 5)
    return "lightblue";
  return "hotpink";
}

display.textContent = getGreeting();
document.body.style.backgroundColor = getDayColor();
