// JavaScript event handler
document
    .getElementById('orderForm')
    .addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from submitting

        // Get form values
        var name = document.getElementById('name').value;
        var drink = document.getElementById('drink').value;

        // Display order confirmation message
        alert(
            'Thank you, ' +
                name +
                '! Your order for ' +
                drink +
                ' has been placed.'
        );
    });
