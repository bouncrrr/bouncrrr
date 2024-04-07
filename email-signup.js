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
        if (response.ok) {
            alert('thank you for signing up!');
        } else {
            alert('there was an issue with your signup. please try again');
        }
    })
    .catch((error) => {
        console.error('error:', error);
        alert('error submitting your email');
    });
});
