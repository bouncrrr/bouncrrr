// email-signup.js content
document.getElementById('signup-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const consent = true; // Assuming the user implicitly gives consent by submitting the form, adjust as needed

    fetch('/api/email-signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, consent }),
    })
    .then(response => {
        if (response.ok) {
            alert('Thank you for signing up!');
        } else {
            alert('There was an issue with your signup. Please try again.');
        }
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Error submitting your email.');
    });
});