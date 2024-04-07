// email-signup.js content
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
        if (!response.ok) {
            if (response.status === 409) {
                // If server response status is 409, it means email already exists
                return response.text().then(text => Promise.reject(new Error('This email is already signed up.')));
            } else {
                // For other non-ok responses, throw an error to be caught by the catch block
                return response.text().then(text => Promise.reject(new Error('There was an issue with your signup. Please try again.')));
            }
        }
        return response.json();
    })
    .then(data => {
        alert('Thank you for signing up!');
    })
    .catch(error => {
        console.error('Error:', error);
        alert(error.message);
    });
});
