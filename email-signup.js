document.getElementById('signup-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const consent = true;

    fetch('https://paddle-cockroach-bouncrrr.onrender.com/api/email-signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, consent }),
    })
    .then(response => response.json().then(data => ({
        ok: response.ok,
        status: response.status,
        body: data,
    })))
    .then(({ ok, status, body }) => {
        if (ok) {
            alert(body.message || 'thank you for signing up!');
        } else {
            if (status === 409) {
                alert('this email is already signed up');
            } else {
                throw new Error(body.error || 'there was an issue with your signup. please try again');
            }
        }
    })
    .catch(error => {
        console.error('error:', error);
        alert(error.message);
    });
});
