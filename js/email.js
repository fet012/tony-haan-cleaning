document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const submitBtn = document.getElementById('submitBtn');
    const btnText = document.getElementById('btnText');
    const btnSpinner = document.getElementById('btnSpinner');
    const formMessage = document.getElementById('formMessage');
    
    // Show loading state
    btnText.textContent = 'Wird gesendet...';
    btnSpinner.classList.remove('d-none');
    submitBtn.disabled = true;
    formMessage.classList.add('d-none');
    
    // Create form data
    const formData = new URLSearchParams();
    formData.append('name', document.getElementById('name').value);
    formData.append('email', document.getElementById('email').value);
    formData.append('phone', document.getElementById('phone').value);
    formData.append('subject', document.getElementById('subject').value);
    formData.append('message', document.getElementById('message').value);
    
    // Send to PHP file
    fetch('send-message.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network error: ' + response.status);
        }
        return response.json();
    })
    .then(data => {
        if (data.success) {
            formMessage.textContent = data.message || 'Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet.';
            formMessage.classList.remove('alert-danger', 'd-none');
            formMessage.classList.add('alert-success');
            this.reset();
        } else {
            throw new Error(data.message || 'Ein Fehler ist aufgetreten');
        }
    })
    .catch(error => {
        formMessage.textContent = error.message || 'Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es später erneut.';
        formMessage.classList.remove('alert-success', 'd-none');
        formMessage.classList.add('alert-danger');
    })
    .finally(() => {
        btnText.textContent = 'NACHRICHT SENDEN';
        btnSpinner.classList.add('d-none');
        submitBtn.disabled = false;
    });
});


service_rm0unxw
template_0cgtjno
EGPU9gXFGib7U38cs