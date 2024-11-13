const scriptURL = 'https://script.google.com/macros/s/AKfycbxQXUdw02IAeHTgCepwjwDh0IUAmS5baF4IJbuOhH7bDQjyfoHiyERPYcyxfZ86UkQ_ig/exec';

        function submitForm() {
            const name = document.getElementById('name').value;
            const size = document.querySelector('input[name="size"]:checked').value;
            const payment = document.getElementById('payment').value;

            if (name && size && payment) {
                fetch(scriptURL, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                    body: new URLSearchParams({ 'name': name, 'size': size, 'payment': payment })
                })
                .then(response => response.json())
                .then(data => {
                    if (data.status === 'success') {
                        alert('Pedido enviado com sucesso!');
                    } else {
                        alert('Falha ao enviar o pedido.');
                    }
                })
                .catch(error => console.error('Erro:', error));
            } else {
                alert("Por favor, preencha todos os campos.");
            }
        }
