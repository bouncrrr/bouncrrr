document.getElementById('signup-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const consent = true; // Assuming the user implicitly gives consent by submitting the form

    fetch('https://paddle-cockroach-bouncrrr.onrender.com/api/email-signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, consent }),
    })
    .then(response => response.json().then(data => ({status: response.status, body: data})))
    .then(obj => {
        if (obj.status === 200) {
            alert('Thank you for signing up!');
        } else if (obj.status === 409) { 
            alert('This email is already signed up.');
        } else {
            alert('There was an issue with your signup. Please try again.');
        }
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Error submitting your email.');
    });
});
