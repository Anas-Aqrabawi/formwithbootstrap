let personInfoForm = document.getElementById("PersonalInfo");
let allcards = document.getElementById("cards")
let mycard = document.getElementById("mycard");


personInfoForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let firstName = event.target.firstname;
    let lastName = event.target.lastname;
    let email = event.target.email;
    let phoneNumber = event.target.phonenumber;
    let dateOfBirth = event.target.dateofbirth;
    let gender = event.target.gender;
    let address = event.target.address;

    if (firstName != "" && lastName != "" && email != "" && phoneNumber != "" && dateOfBirth != "" && gender != "" && address != "") {
        CreateCard(firstName.value, lastName.value, email.value, phoneNumber.value, dateOfBirth.value, gender.value, address.value)

    }

})


const CreateCard = (FirstName, LastName, Email, PhoneNumber, DateOfBirth, Gender, Address) => {
    let ol = document.createElement("ol");
    let li_FirstName = document.createElement("li");
    let li_LastName = document.createElement("li");
    let li_Email = document.createElement("li");
    let li_PhoneNumber = document.createElement("li");
    let li_DateOfBirth = document.createElement("li");
    let li_Gender = document.createElement("li");
    let li_Address = document.createElement("li");

    li_FirstName.textContent = FirstName;
    li_LastName.textContent = LastName;
    li_Email.textContent = Email;
    li_PhoneNumber.textContent = PhoneNumber;
    li_DateOfBirth.textContent = DateOfBirth;
    li_Gender.textContent = Gender;
    li_Address.textContent = Address;


    ol.appendChild(li_FirstName);
    ol.appendChild(li_LastName);
    ol.appendChild(li_Email);
    ol.appendChild(li_PhoneNumber);
    ol.appendChild(li_DateOfBirth);
    ol.appendChild(li_Gender);
    ol.appendChild(li_Address);

    mycard.appendChild(ol);
    allcards.appendChild(mycard);

}