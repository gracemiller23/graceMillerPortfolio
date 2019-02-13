
//tracking overall form validity before activating submit button
let firstNameValid = false;
let lastNameValid = false;
let emailValid = false;
let humanValid = false;
let messageValid = false;

//error messages to display
let nameError = "<p id='name-error'>Invalid entry! Names can only contain letters.</p>";
let nameErrorSent = false;
let emailError = "<p id='email-error'>Invalid entry! Email addresses must contain @ and a valid domain.</p>"
let emailErrorSent = false;
let humanError = "<p id='human-error'>Are you a robot? Try answering the human test question again.</p>";
let humanErrorSent = false;
let messageError = "<p id='message-error'>Invalid entry! Messages are required and can only contain letters, numbers, and punctuation.</p>"
let messageErrorSent = false;

//displays an error when input is invalid
function displayError(location, errorMessage) {
    $(location).css("border", "2px solid red");
    if (nameErrorSent == false && (location === "#first-name" || location === "#last-name")) {
        $("#contact-form").after(errorMessage);
        $("#name-error").css("visibility", "visible");
        nameErrorSent = true;
    } else if (location === "#email-id" && emailErrorSent == false) {
        $("#contact-form").after(errorMessage);
        $("#email-error").css("visibility", "visible");
        emailErrorSent = true;
    } else if (location === "#human-test" && humanErrorSent == false) {
        $("#contact-form").after(errorMessage);
        $("#human-error").css("visibility", "visible");
        humanErrorSent = true;
    } else if (location === "#comments-id" && messageErrorSent == false) {
        $("#contact-form").after(errorMessage);
        $("#message-error").css("visibility", "visible");
        messageErrorSent = true;
    }
}
//functions for validating input fields

//2nd step in validation for both types of name fields
function validateName(name, location) {
    let nameRE = /[\w\-'\s]+/;

    if (nameRE.test(name)) {
        if (location === "#first-name") {
            firstNameValid = true;
            $("#first-name").css("border", "1px solid black");
            if ($("#name-error")) {
                $("#name-error").css("visibility", "hidden");
            }

        } else {
            $("#last-name").css("border", "1px solid black");
            if ($("#name-error")) {
                $("#name-error").css("visibility", "hidden");
            }
            lastNameValid = true;
        }
        checkFormComplete();
    } else {

        displayError(location, nameError);
        
    }
}
//1st step in validating each name field
function validateFirstName() {

    let name = $(this).val().trim().toLowerCase();
    validateName(name, "#first-name");

};
function validateLastName() {

    let name = $(this).val().trim().toLowerCase();
    validateName(name, "#last-name");

};
//validate email addresses
function validateEmail() {
    let email = $(this).val().trim().toLowerCase();
    let emailRE = /.+\@.+\..+/;

    if (emailRE.test(email) && email !== "") {
        emailValid = true;
        $("#email-id").css("border", "1px solid black");
        if ($("#email-error")) {
            $("#email-error").css("visibility", "hidden");
        }
        checkFormComplete();
    } else {
        displayError("#email-id", emailError);
        emailValid=false;
        checkFormComplete();
    }
};
//ensure message box is not empty
function validateMessage() {
    let message = $(this).val().trim();

    if (message !== "") {
        messageValid = true;
        $("#comments-id").css("border", "1px solid black");
        $("#message-error").css("visibility", "hidden");
        checkFormComplete();
    } else {
        displayError("#comments-id", messageError);
        messageValid=false;
        checkFormComplete();
    }
}

function validateHuman() {
    let answer = $(this).val().trim();

    if (answer === "7") {
        humanValid = true;
        $("#human-test").css("border", "1px solid black");
        $("#human-error").css("visibility", "hidden");
        checkFormComplete();
    } else {
        displayError("#human-test", humanError);
        humanValid=false;
        checkFormComplete();
    }
}

//enable submit button when all inputs contain valid data
function checkFormComplete() {

    if (firstNameValid && lastNameValid && emailValid && messageValid && humanValid) {
        $("#contact-submit-btn").prop("disabled", false);
    } else {
        $("#contact-submit-btn").prop("disabled", true);
    }
}

///////////Function for sending contact form content to php file w/ ajax and handling success/failure
function sendContactForm() {
    let firstName = $("#first-name").val();
    let lastName = $("#last-name").val();
    let userEmail = $("#email-id").val();
    let userMessage = $("#comments-id").val();

    $.post("assets/php/contact.php", `first_name=${firstName}&last_name=${lastName}&email=${userEmail}&comments=${userMessage}`, function (result, status, xhr) {
        let errorMsg = "<h2>Something went wrong. Please try again.</h2>";
        let successMsg = "<h2>Thank you for reaching out!</h2><p>I will get back to you as soon as possible.</p>";

        if (status.toLowerCase() == "error".toLowerCase()) {
            $("#contact-result-msg").css("visibility", "visible").html(errorMsg);
        }
        else {
            $("#contact-result-msg").css("visibility", "visible").html(successMsg);
        }
    }).fail(function () {
        $("#contact-result-msg").css("visibility", "visible").html(errorMsg);
    });

}

$(document).ready(function () {
    //validate first name input

    $("#first-name").focusout(validateFirstName);

    //validate last name input
    $("#last-name").blur(validateLastName);

    //validate email input
    $("#email-id").blur(validateEmail);

    //validate human test input
    $("#human-test").blur(validateHuman);

    //validate message composition
    $("#comments-id").blur(validateMessage);



    ///End document ready function
});