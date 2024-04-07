// email-signup.js content
document.getElementById('signup-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    // Update the consent according to your form's actual consent mechanism
    const consent = true;

    fetch('https://paddle-cockroach-bouncrrr.onrender.com/api/email-signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, consent }),
    })
    .then(response => response.json()) // Assuming your backend sends a JSON response
    .then(data => {
        console.log('Success:', data);
        alert('Thank you for signing up!');
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('There was an issue with your signup. Please try again.');
    });
});
