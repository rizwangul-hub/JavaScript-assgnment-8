//Assignment : 8 JavaScript
//Submitted By : Rizwan Ullah

//Object and nested object in JavaScript

//Task 1: Accrss emplyee information
const company={
    name: "Tech Solutions",
    employees: {
        employee1: {
            name: "Ali",
            role: "Developer",
            salary: 50000,
        },
        employee2 : {
            name: "Sara",
            role: "Designer",   
            salary: 70000,
      } }
}
console.log(company.employees.employee1.role); //Output: Developer
console.log(company.employees.employee2.salary); //Output: 70000

//.................................................................................

//Task 2: Update object property
const product={
    id: 101,
    name: "headphones", 
    price: 3500,
}
product.id=400
console.log(product.id); //Output: 400

//................................................................................

//Task 3: object with array
const student={
    name: "Ahmed",
    age: 20,
    subjects: ["Math", "Physics", "computer Science"],
}
console.log(student.subjects);
console.log(student.subjects[1]); //Output: Physics

//..................................................................................

//Task 4: Array of objects
const students = [
    { name: "Aisha", marks: 85 },
    { name: "Bilal", marks: 78 },
    { name: "Hina", marks: 92 },
];
console.log(students[0].name);
console.log(students[2].marks);

//..................................................................................

//Task 5: Nested object access
const user={
    username: "user123",
    profile: {
        email: "rizwan@example.com",
        adress : {
            city: "Karachi",
            zip: "75000",
        }
    }
}
console.log(user.profile.email); //Output: rizwan@example.com
console.log(user.profile.adress.city); //Output: Karachi

//.................................................................

//Task 6: Modify nested object property
const order={
    orderId: 555,
    delivery: {
        stutus: "Pending",
        day: 5,
    }
}
order.delivery.stutus="Delivered"
console.log(order);

//...............................................................

//Task 7: Object with array of objects

const cart={
    item:[
        {name: "shirt", price: 2000},
        {name: "shoes", price: 5000}
    ]
};
console.log(cart.item[1].price);
cart.item[0].price=2200;
console.log(cart);

//..............................................................

//Task 8: Add new property
const mobile={
    brand: "sumsing",
    model: "S21"
};
mobile.price=30000;
console.log(mobile);

//............................................................

//Task 9 : Loop through object Properties
const car={
     brand: "Toyota",
     model :"Corolla",
     year : 2022
}
for (let key in car){
    console.log(key +":" , car[key]);
}

//..................................................................

//Task 10 : Mini Real-world Object 

const menuiteme ={
    name: "Burger",
    price: 450,
    available : true
};
 console.log(menuiteme.name);
 console.log(menuiteme.price);
 console.log(menuiteme.available=false);
 console.log(menuiteme);

 //............................................................
  //End of Assignment 8 JavaScript
 
 
 
 




