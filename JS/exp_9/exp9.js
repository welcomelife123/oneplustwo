function validate() {
        if (document.StudentRegistration.textnames.value == "") {
            alert("Please provide your Name!");
            document.StudentRegistration.textnames.focus();
            return false;
    }


    if (document.StudentRegistration.city.value == "") {
        alert("Please provide the name of the city !");
        document.StudentRegistration.city.focus();
        return false;
    }

    if (document.StudentRegistration.State.value == "") {
        alert("Please provide the name of the state!");
        document.StudentRegistration.State.focus();
        return false;
    }

    if (!(document.StudentRegistration.Gender.value != "Male" ||
        document.StudentRegistration.Gender.value != "Female" ||
        document.StudentRegistration.Gender.value != "female" ||
        document.StudentRegistration.Gender.value != "male")) {
        alert("Please provide valid gender!");
        document.StudentRegistration.Gender.focus();
        return false;
    }

    if (document.StudentRegistration.Address.value == "") {
        alert("Please provide your address!");
        document.StudentRegistration.Address.focus();
        return false;
    }



    var email = document.StudentRegistration.emailid.value;
    atpos = email.indexOf("@");
    dotpos1 = email.lastIndexOf(".com");
    dotpos2 = email.lastIndexOf(".in");

    if (email == "" || atpos < 1 || (dotpos1 == -1 && dotpos2 == -1)) {
        alert("Please enter correct email ID")
        document.StudentRegistration.emailid.focus();
        return false;
    }
    
    if (document.StudentRegistration.mobileno.value == "" ||
    isNaN(document.StudentRegistration.mobileno.value) ||
    document.StudentRegistration.mobileno.value.length != 10) {
        alert("Please provide a Mobile No in the format 123.");
        document.StudentRegistration.mobileno.focus();
        return false;
    }

    alert("Entered Details Updated Successfully !!!!")
    return (true);
}

function displayOutput(){
    if(!validate()){

        alert("Please enter your details correctly!");
        return;
    }
    var name=document.StudentRegistration.textnames.value;
    var email=document.StudentRegistration.emailid.value
    var  mobile=document.StudentRegistration.mobileno.value;
    var city=document.StudentRegistration.city.value;
    var state=document.StudentRegistration.State.value;
    var gender=document.StudentRegistration.Gender.value;
    var address=document.StudentRegistration.Address.value;


    document.getElementById("outName").innerHTML="Name: "+name;
    document.getElementById("outEmailId").innerHTML="Email Id:"+email;
    document.getElementById("outMobileno").innerHTML="Mobile No. :"+mobile;
    document.getElementById("outCity").innerHTML="City: "+city;
    document.getElementById("outState").innerHTML="State"+ state;
    document.getElementById("outGender").innerHTML="Gender:"+gender;
    document.getElementById("outAddress").innerHTML="Address: "+address;

}