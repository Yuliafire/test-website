document.getElementById('myForm').addEventListener('submit', function(e) {
    const nameInput = document.getElementById('nameInput');
    const phoneInput = document.getElementById('phoneInput');
    const emailInput = document.getElementById('emailInput');

    const name = nameInput.value;
    const phone = phoneInput.value;
    const email = emailInput.value;

    const nameRegex = /^[a-zA-Z]+$/;
    const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!nameRegex.test(name)) {
        e.preventDefault();
        alert('Please enter a valid name');
        nameInput.focus();
        return;
    }

    if (!phoneRegex.test(phone)) {
        e.preventDefault();
        alert('Please enter a valid phone number');
        phoneInput.focus();
        return;
    }

    if (!emailRegex.test(email)) {
        e.preventDefault();
        alert('Please enter a valid email address');
        emailInput.focus();
        return;
    }

    // If all inputs are valid, the form will be submitted
});

