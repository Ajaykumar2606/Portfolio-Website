document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the form from submitting

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Display a success message
    alert(`Thank you, ${name}! Your message has been sent.`);

    // Clear the form
    document.getElementById('contact-form').reset();
});