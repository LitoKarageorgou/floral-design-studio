// Variables
const contactForm = document.forms['contact-form'];
const fullname = contactForm.fullname;
const email = contactForm.email;
const phone = contactForm.phone;
const userLocation = contactForm.location;
const message = contactForm.message;
const referral = contactForm.referral;
const modal = document.getElementById('thankYouModal');
const closeButton = modal.querySelector('.close-button');

// Functions

// Full name validation
function validateFullname() {
    const fullname = contactForm.fullname.value.trim();
    const errorMessage = document.getElementById('full-name-error');

    // Check if fullname is empty
    if (fullname === "") {
        errorMessage.textContent = "Full name is a required field.";
        errorMessage.classList.remove('hidden');
        return false;
    }

    // Check length requirements
    if (fullname.length < 3 || fullname.length > 50) {
        errorMessage.textContent = "Full name must be between 3 and 50 characters long.";
        errorMessage.classList.remove('hidden');
        return false;
    }

    // Check if fullname contains only letters and spaces
    const lettersAndSpacesPattern = /^[a-zA-Z\u0370-\u03FF\s]+$/;
    if (!lettersAndSpacesPattern.test(fullname)) {
        errorMessage.textContent = "Full name must contain only letters and spaces.";
        errorMessage.classList.remove('hidden');
        return false;
    }

    // Check if fullname contains at least two words
    const words = fullname.split(' ');
    if (words.length < 2) {
        errorMessage.textContent = "Full name must contain at least two words.";
        errorMessage.classList.remove('hidden');
        return false;
    }

    // Hide the error message after validation
    errorMessage.classList.add('hidden');
    return true;
}

// Email validation
function validateEmail() {
    const email = contactForm.email.value.trim();
    const errorMessage = document.getElementById('email-error');

    // Check if email is empty
    if (email === "") {
        errorMessage.textContent = "Email address is a required field.";
        errorMessage.classList.remove('hidden');
        return false;
    }

    // Check if email is valid
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        errorMessage.textContent = "Email address must be a valid email address (e.g., name@example.com)";
        errorMessage.classList.remove('hidden');
        return false;
    }

    // Hide the error message after validation
    errorMessage.classList.add('hidden');
    return true;
}

// Phone number validation
function validatePhone() {
    const phone = contactForm.phone.value.trim();
    const errorMessage = document.getElementById('phone-error');

    // Check if phone is empty
    if (phone === "") {
        errorMessage.textContent = "Phone number is a required field.";
        errorMessage.classList.remove('hidden');
        return false;
    }

    // Check if phone is valid
    const phonePattern = /^(0030|\+30)\s?\d{10}$/;
    if (!phonePattern.test(phone)) {
        errorMessage.textContent = "Phone number must start with 0030 or +30, followed by 10 digits.";
        errorMessage.classList.remove('hidden');
        return false;
    }

    // Hide the error message after validation
    errorMessage.classList.add('hidden');
    return true;
}

// Location validation
function validateLocation() {
    const location = contactForm.location.value.trim();
    const errorMessage = document.getElementById('location-error');

    // Check if location is empty
    if (location === "") {
        errorMessage.textContent = "Location is a required field.";
        errorMessage.classList.remove('hidden');
        return false;
    }

    // Check if location is between 5 and 100 characters
    if (location.length < 5 || location.length > 100) {
        errorMessage.textContent = "Location must be between 5 and 100 characters long.";
        errorMessage.classList.remove('hidden');
        return false;
    }

    // Hide the error message after validation
    errorMessage.classList.add('hidden');
    return true;
}

// Referral validation
function validateReferral() {
    const referral = contactForm.referral.value.trim();
    const errorMessage = document.getElementById('referral-error');

    // Check if referral is empty
    if (referral === "") {
        errorMessage.textContent = "Referral is a required field.";
        errorMessage.classList.remove('hidden');
        return false;
    }

    // Hide the error message after validation
    errorMessage.classList.add('hidden');
    return true;
}

// Date validation
function validateDate() {
    const date = contactForm.date.value.trim();
    const errorMessage = document.getElementById('date-error');

    // Check if date is empty
    if (date === "") {
        errorMessage.textContent = "Date is a required field.";
        errorMessage.classList.remove('hidden');
        return false;
    }

    // Check if date is within the valid range using regex
    const datePattern = /^(2025-(0[4-9]|1[0-2])|202[6-9]-(0[1-9]|1[0-2])|20[3-6][0-9]-(0[1-9]|1[0-2])|207[0-5]-(0[1-9]|1[0-2]))-(0[1-9]|[12][0-9]|3[01])$/;
    if (!datePattern.test(date)) {
        errorMessage.textContent = "Date must be between April 2025 and December 2075.";
        errorMessage.classList.remove('hidden');
        return false;
    }

    // Hide the error message after validation
    errorMessage.classList.add('hidden');
    return true;
}

// Message validation
function validateMessage() {
    const message = contactForm.message.value.trim();
    const errorMessage = document.getElementById('message-error');

    // Check if message is empty
    if (message === "") {
        errorMessage.textContent = "Message is a required field.";
        errorMessage.classList.remove('hidden');
        return false;
    }

    // Check if message is at most 500 characters
    if (message.length > 500) {
        errorMessage.textContent = "Message must be at most 500 characters long.";
        errorMessage.classList.remove('hidden');
        return false;
    }

    // Hide the error message after validation
    errorMessage.classList.add('hidden');
    return true;
}

// Show modal
function showModal() {
    modal.style.display = 'block';
}

// Event Listeners

// Array of input fields with their validation functions and error messages
const inputFields = [
    { element: fullname, validate: validateFullname, errorId: 'full-name-error' },
    { element: email, validate: validateEmail, errorId: 'email-error' },
    { element: phone, validate: validatePhone, errorId: 'phone-error' },
    { element: userLocation, validate: validateLocation, errorId: 'location-error' },
    { element: referral, validate: validateReferral, errorId: 'referral-error' },
    { element: date, validate: validateDate, errorId: 'date-error' }, // New input field
    { element: message, validate: validateMessage, errorId: 'message-error' },
];

// Input field event listeners
inputFields.forEach(inputField => {
    inputField.element.addEventListener('blur', inputField.validate);
    inputField.element.addEventListener('focus', () => {
        const errorMessage = document.getElementById(inputField.errorId);
        errorMessage.classList.add('hidden');
    });
});

// Close modal event listener and reload page
closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
    location.reload();
});

// Form submission event listener
contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const isFullnameValid = validateFullname();
    const isEmailValid = validateEmail();
    const isPhoneValid = validatePhone();
    const isDateValid = validateDate();
    const isLocationValid = validateLocation();
    const isMessageValid = validateMessage();
    const isReferralValid = validateReferral();

    if (isFullnameValid && isEmailValid  && isPhoneValid && isDateValid && isLocationValid && isMessageValid && isReferralValid && isDateValid) {
        console.log(`
            Fullname: ${fullname.value},
            Email: ${email.value},
            Phone: ${phone.value},
            Date: ${date.value},
            Location: ${userLocation.value},
            Message: ${message.value},
            Referral: ${referral.value}
        `);

        showModal();
    }
});

