document.getElementById('validateButton').addEventListener('submit', function() {
    let errors = [];
    if (username === "") {
        errors.push("Username is required.");
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email === "") {
        errors.push("Email is required.");
    } elseif (!emailPattern.test(email)) {
        errors.push("Please enter a valid email address.");
    }


    if (password === "") {
        errors.push("Password is required.");
    } elseif (password.length < 6) {
        errors.push("Password must be at least 6 characters long.");
    }

    errorMessages.innerHTML = "";
    if (errors.length > 0) {
        errors.forEach(function(error) {
            const errorElement = document.createElement('p');
            errorElement.textContent = error;
            errorElement.style.color = 'red';
            errorMessages.appendChild(errorElement);
        });
    } else {
        errorMessages.innerHTML = "<p style='color:green'>All inputs are valid!</p>";
    }
});
