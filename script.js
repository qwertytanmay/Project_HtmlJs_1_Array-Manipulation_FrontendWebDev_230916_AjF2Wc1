let arr = [
  { id: 1, name: "john", age: 18, profession: "developer", salary: 1000 },
  { id: 2, name: "jack", age: 20, profession: "developer", salary: 1100 },
  { id: 3, name: "karen", age: 19, profession: "admin", salary: 900 },
];
console.log(arr);



/* // 1. Print all developers from the array whose salary is above the average salary of the array.
function PrintHighEarningDevelopers() {
  //Write your code here , just console.log
  let totalSalary = 0;
  arr.forEach((element) => {
    totalSalary += element;
  });
  let avgSalary = totalSalary / arr.length;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].salary > avgSalary) {
      console.log(arr[i].name);
    }
  }
}

// 2. Using a recursive function, add a new data object to the array until the user says 'no' via a prompt.
function recursiveAddData() {
  //Write your code here, just console.log
}

// 3. Remove the youngest and oldest person from the array.
function removeYoungestAndOldest() {
  //Write your code here, just console.log
}

// 4. Merge two arrays (use a dummy array for demonstration) such that the resulting array has no duplicate professions.
function mergeAndFilterProfessions() {
  //Write your code here, just console.log
}

// 5. Find the person with the highest salary and reduce their salary by 10% as tax.
function applyTax() {
  //Write your code here, just console.log
}

// 6. Check if every person in the array is a developer.
function isEveryoneDeveloper() {
  //Write your code here, just console.log
}

// 7. Swap the professions of the first and last person in the array.
function swapProfessions() {
  //Write your code here, just console.log
}

// 8. Using the `map` method, add a new property to each person called 'experience' with a default value of 1 year.
function addExperienceProperty() {
  //Write your code here, just console.log
}

// 9. Group persons by profession and count them. E.g., {developer: 2, admin: 1}.
function groupByProfession() {
  //Write your code here, just console.log
}

// 10. Find the person who has a name with the longest length and capitalize their profession.
function capitalizeLongestNamedPersonProfession() {
  //Write your code here, just console.log
}

// 11. Create a function that shuffles the array in a random order.
function shuffleArray() {
  //Write your code here, just console.log
}

// 12. Create a function that rotates the array to the right by n steps, where n is provided as an argument.
function rotateArray(n) {
  //Write your code here, just console.log
}

// 13. Create a function that finds the person with the closest age to a given number.
function findClosestAge(age) {
  //Write your code here, just console.log
}

// 14. Create a function that checks if there's any repeated name in the array.
function hasRepeatedNames() {
  //Write your code here, just console.log
}
 */

//------------------------------------------------------------------------------------------------------------------------

//1✅. Print all developers
function PrintDeveloper() {
  //added
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i].name);
  }
}

// 2✅. Using a recursive function, add a new data object to the array until the user says 'no' via a prompt.
function addData() {
  //Write your code here, just console.log

  //Collect details from promt
  const id = parseInt(prompt("Enter new Id:"));
  const name = prompt("Enter the name:");
  const age = parseInt(prompt("Enter the age:"));
  const profession = prompt("Enter the profession:");
  const salary = parseInt(prompt("Enter the salary:"));

  //Create a new object with collected data
  let newDataObject = {
    id: id,
    name: name,
    age: age,
    profession: profession,
    salary: salary,
  };

  //Add this object to tha array given
  arr.push(newDataObject);

  // Log the updated array
  console.log("new data object added successfully");
  console.log(arr);
}

// 3✅. Remove admin from the array.
function removeAdmin() {
  //Write your code here, just console.log

  // Use the filter method to create a new array without admin objects
  arr = arr.filter(item => item.profession !== "admin");

  // log the new array
  console.log(arr);
}

//4✅. Concatenate Array (`concatenateArray` function): Combine two arrays (create a dummy array as an example) and log the result.
function concatenateArray(){
  let arr2 = [{ id: 4, name: "Pawan", age: 25, profession: "admin", salary: 950 },];
  let res = arr.concat(arr2);
  console.log(res);
}

//5✅. Average Age (`averageAge` function): Compute and log the average age of all people in the array.
function averageAge(){
  let totalAge = 0;
  arr.forEach(element => {
    totalAge += element.age;
  });
  console.log(totalAge / arr.length);
}

//6✅. Age Check (`checkAgeAbove25` function): Validate if there's at least one person in the array who's older than 25.
function checkAgeAbove25(){
  let flag = false;
  //Use the some method to check if any object has age greater than 25
  if(arr.some(item => item.age > 25)){
    flag = true;
  }
  // log the result
  if(flag){
    console.log("Yes! There is at least one person older than 25.");
  }else{
    console.log("No! There is no person older than 25.");
  }
}

//7✅. Unique Professions (`uniqueProfessions` function): Log all distinct professions present in the array.
function uniqueProfessions(){
  let distinctProfessions = [];

  // Check if the profession is not already in the distinctProfessions array
  arr.forEach(e => {
    if(!distinctProfessions.includes(e.profession)){
      distinctProfessions.push(e.profession)
    }
  });

  //log the result
  console.log(distinctProfessions);
}

//8✅. Sort by Age (`sortByAge` function): Organize the array by age in ascending order.
function sortByAge(){
  arr.sort((a,b) => a.age - b.age);

  // log the result
  console.log(arr);
}

//9✅. Update Profession (`updateJohnsProfession` function): Adjust 'john's profession to 'manager'.
function updateJohnsProfession(){
  arr.forEach(item => {
    if(item.name == "john"){
      item.profession = "manager";
    }
  })
  console.log(arr);
}

//10✅. Profession Count (`getTotalProfessions` function): Calculate and print the total number of developers and admins in the array.
function getTotalProfessions() {
  const professionCounts = arr.reduce((acc, item) => {
    if (item.profession === "developer") {
      acc.developer++;
    } else if (item.profession === "admin") {
      acc.admin++;
    }
    return acc;
  }, { developer: 0, admin: 0 });

  console.log("Total number of developers:", professionCounts.developer);
  console.log("Total number of admins:", professionCounts.admin);
  console.log("Total number of developers + admins:", professionCounts.admin + professionCounts.developer);
}

