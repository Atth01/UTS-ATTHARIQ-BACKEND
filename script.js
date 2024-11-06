// Login Functionality
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === 'admin123') {
        // Redirect to Dashboard
        window.location.href = 'dashboard.html';
    } else {
        // Display error message
        document.getElementById('errorMessage').textContent = 'Invalid username or password!';
    }
});
