// Handle Password Reset Request
document.getElementById('password-reset-request-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('password-reset-email').value;
    fetch('https://paddle-cockroach-bouncrrr.onrender.com/api/forgot-password', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email: email})
    }).then(response => {
        if(response.ok) {
            alert('Please check your email to reset your password.');
        } else {
            alert('Failed to send password reset email. Please try again.');
        }
    }).catch(error => {
        console.error('Error:', error);
    });
});

// Handle New Password Submission
document.getElementById('password-reset-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const newPassword = document.getElementById('new-password').value;
    const confirmNewPassword = document.getElementById('confirm-new-password').value;
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');

    if(newPassword !== confirmNewPassword) {
        alert('Passwords do not match. Please try again.');
        return;
    }

    fetch(`https://paddle-cockroach-bouncrrr.onrender.com/api/reset-password/${token}`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({password: newPassword})
    }).then(response => {
        if(response.ok) {
            alert('Your password has been successfully reset.');
            window.location.href = 'login.html'; // Redirect to login page
        } else {
            alert('Failed to reset password. Please try again or contact support.');
        }
    }).catch(error => {
        console.error('Error:', error);
    });
});
