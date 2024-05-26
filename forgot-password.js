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
            alert('please check your email to reset your password.');
        } else {
            alert('failed to send password reset email. please try again.');
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
        alert('passwords do not match. please try again.');
        return;
    }

    fetch(`https://paddle-cockroach-bouncrrr.onrender.com/api/reset-password/${token}`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({password: newPassword})
    }).then(response => {
        if(response.ok) {
            alert('your password has been successfully reset.');
            window.location.href = 'login.html'; // Redirect to login page
        } else {
            alert('failed to reset password. please try again or contact support.');
        }
    }).catch(error => {
        console.error('Error:', error);
    });
});
