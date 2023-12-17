const firebaseConfig = {
    apiKey: "AIzaSyB6XoW1tH-51Gb754wOHeUZ25WrUSq5Mwk",
    authDomain: "login-653b9.firebaseapp.com",
    projectId: "login-653b9",
    storageBucket: "login-653b9.appspot.com",
    messagingSenderId: "398914146458",
    appId: "1:398914146458:web:abe6d758870bac89bbcf23"
}


// Initialize Firebase
const app = initializeApp(firebaseConfig);

//  Initialize VARIABLES
const auth = firebase.auth()
const database = firebase.database()

//Set up our registration fuction
function submit (){

    // get all our input fields
    username = document.getElementById('username').value
    Name = document.getElementById('Name').value
    email = document.getElementById('email').value
    password = document.getElementById('password').value

}

//validate input fields
if (validate_email(email) == false || validate_password(password) == false){
    alert('Email or Password is not valid!!')
    return
    //dont run the code
}


if (validate_name(Name) == false || validate_username(username) == false) {
    alert('Name or Username is not valid!!')
    return
    //dont run the code
}


auth.createUserWithEmailAndPassword(email, password)
.then(function(){

    // Declare user variable
    var user = auth.currentUser

    //Add this user to firebase database
    var database_ref = database.ref()

    //Create User data
    var user_data = {
        email : email,
        Name : Name,
        username : username,
        last_login : date.now()
    }

    //Push to firebase Database
    database_ref.child('users/' + user.uid).set(user_data)

    // Done
    alert('User Registered')

})
.catch(function(error){
    //Firebase will use this to alert of its error
    var error_code = error.code
    var error_message = error.message

    alert(erroe_message)
})


function validate_email(email){
    expression = /^[^@]+@\w+(\.\w+)+\w$/
    if (expression.test(email) == true){
        //email is good
        return true
    } else{
            //email is not good
            return false    
        }
    }


    function validate_password(password){
        // Fire base only accepts more than 6 letters
        if (password < 6){
            return false
        } else{
            return true
        }
    }


    function validate_field(field){
        if (field == null ){
            return false
        } else {
            return true
        }
    }