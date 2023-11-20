const botaoBuscar = document.getElementById('buscarButton');
const codigoInput = document.getElementById('codigoInput');
const tabelaDados = document.getElementById('tabelaDados');

botaoBuscar.addEventListener('click', () => {
    const codigo = codigoInput.value;

    fetch(`http://localhost:8080/indicador/${codigo}`)
        .then(response => response.json())
        .then(data => {
            tabelaDados.innerHTML = '';

            data.forEach(item => {
                const row = document.createElement('tr');

                const anoCell = document.createElement('td');
                anoCell.textContent = item.ano;
                row.appendChild(anoCell);

                const consumoCell = document.createElement('td');
                consumoCell.textContent = item.consumo;
                row.appendChild(consumoCell);

                tabelaDados.appendChild(row);
            });
        })
        .catch(error => {
            console.error('Erro ao carregar os dados:', error);
        });
});
