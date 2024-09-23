document.addEventListener('DOMContentLoaded', function() {
    const forms = document.querySelectorAll('form');

    forms.forEach(form => {
        form.onsubmit = function(event) {
            event.preventDefault(); // Prevent default form submission

            const action = form.getAttribute('action');
            if (action) {
                // Redirect to the action URL
                window.location.href = action;
            }
        };
    });
});
