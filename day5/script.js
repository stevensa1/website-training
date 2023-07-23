// JavaScript event handler
document.getElementById('submit-order').addEventListener('click', () => {
    var name = document.getElementById('name').value;
    var drink = document.getElementById('drink').value;

    alert(
        'Thank you, ' + name + '! Your order for ' + drink + ' has been placed.'
    );
});
