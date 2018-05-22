var config = {
  apiKey: "AIzaSyAWu7Y2z3moF8Wo081MnhSFKmhUemQE7UQ",
  authDomain: "login-d9454.firebaseapp.com",
  databaseURL: "https://login-d9454.firebaseio.com",
  projectId: "login-d9454",
  storageBucket: "login-d9454.appspot.com",
  messagingSenderId: "258235232899"
  };
firebase.initializeApp(config);

var PersonalInfo = firebase.database().ref("PersonalInfo");

var submitInfo = function () {


  class User {
    constructor(firstName,lastName,age){
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      }
    }
    var firstName;
    var lastName;
    var age;
    var flag = 0;
    var name1;
    var i;
    var check;
    var count = 0 ;

    firstName = document.getElementById("infoFirstName").value;
    lastName = document.getElementById("infoLastName").value;
    age = document.getElementById("infoAge").value;
    var users  = PersonalInfo.child( firstName + lastName + age);
    var check = firstName + lastName + age;

    var user = new User(firstName,lastName,age);



    users.on("child_added",snap =>{

      name1 = snap.child("firstName").val();
      last = snap.child("lastName").val();
      Age = snap.child("age").val();

      firstName = document.getElementById("infoFirstName").value;
      lastName = document.getElementById("infoLastName").value;
      age = document.getElementById("infoAge").value;
      
      window.alert(name1);
      window.alert(last);
      window.alert(Age);
      window.alert(firstName);
      window.alert(lastName);
      window.alert(age);


        if((name1 === firstName) && (last === lastName) && (age === Age)){
          count += 1;
        }
        if(count === 0){
          window.alert("Thanks for signing up");
        }
            
        if(count === 1){
          window.alert('Oh,You already have an account.Please proceed to Log in.')
        }
        count += 1 ;

      

    });


    users.push({
      "firstName": firstName,
      "lastName" : lastName,
      "age"     : age
    });


};


$(window).load(function () {

  $("#infoForm").submit(submitInfo);

});
