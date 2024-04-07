document.getElementById('signup-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const consent = true; // Assuming the user implicitly gives consent by submitting the form, adjust as needed

    fetch('https://paddle-cockroach-bouncrrr.onrender.com/api/email-signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, consent }),
    })
    .then(response => {
        // Check for response.ok to handle HTTP status codes of 200-299
        if (!response.ok) {
            // If server response is not OK, we still try to parse it as JSON for error details
            return response.json().then(error => Promise.reject(error));
        }
        // Parse successful response to JSON.
        return response.json();
    })
    .then(data => {
        // Handle success
        console.log('Success:', data);
        alert('Thank you for signing up!');
    })
    .catch(error => {
        // Handle errors from server and network errors
        console.error('Error:', error);
        if (error.status === 409) {
            alert('This email is already signed up.');
        } else {
            alert('There was an issue with your signup. Please try again.');
        }
    });
});
