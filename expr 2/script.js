function validateForm() {
    let valid = true;

    // First Name Validation
    const firstName = document.getElementById('firstName').value;
    if (!/^[A-Za-z]{6,}$/.test(firstName)) {
        document.getElementById('firstNameError').innerText = 'First name must be at least 6 alphabets.';
        valid = false;
    } else {
        document.getElementById('firstNameError').innerText = '';
    }

    // Last Name Validation
    const lastName = document.getElementById('lastName').value;
    if (lastName === '') {
        document.getElementById('lastNameError').innerText = 'Last name cannot be empty.';
        valid = false;
    } else {
        document.getElementById('lastNameError').innerText = '';
    }

    // Password Validation
    const password = document.getElementById('password').value;
    if (password.length < 6) {
        document.getElementById('passwordError').innerText = 'Password must be at least 6 characters long.';
        valid = false;
    } else {
        document.getElementById('passwordError').innerText = '';
    }

    // Email Validation
    const email = document.getElementById('email').value;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').innerText = 'Invalid email format.';
        valid = false;
    } else {
        document.getElementById('emailError').innerText = '';
    }

    // Mobile Number Validation
    const mobile = document.getElementById('mobile').value;
    if (!/^[0-9]{10}$/.test(mobile)) {
        document.getElementById('mobileError').innerText = 'Mobile number must be 10 digits.';
        valid = false;
    } else {
        document.getElementById('mobileError').innerText = '';
    }

    // Address Validation
    const address = document.getElementById('address').value;
    if (address === '') {
        document.getElementById('addressError').innerText = 'Address cannot be empty.';
        valid = false;
    } else {
        document.getElementById('addressError').innerText = '';
    }

    return valid;
}
