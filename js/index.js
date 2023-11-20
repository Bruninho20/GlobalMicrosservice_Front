document.addEventListener("DOMContentLoaded", function () {
    fetch('http://localhost:8080/objetivos')
        .then(response => response.json())
        .then(data => {
            const tableBody = document.querySelector('.table tbody');

            data.forEach(item => {
                const row = document.createElement('tr');

                const idCell = document.createElement('th');
                idCell.textContent = item.id;
                row.appendChild(idCell);

                const objetivosCell = document.createElement('td');

                const globalParagraph = document.createElement('p');
                globalParagraph.textContent = item.objetivos.global !== null ? `Global: ${item.objetivos.global}` : 'Global: Nenhum valor';
                
                const brazilParagraph = document.createElement('p');
                brazilParagraph.textContent = item.objetivos.brazil !== null ? `Brazil: ${item.objetivos.brazil}` : 'Brazil: Nenhum valor';
                
                objetivosCell.appendChild(globalParagraph);
                objetivosCell.appendChild(brazilParagraph);
                
                row.appendChild(objetivosCell);
        
                const indicadoresCell = document.createElement('td');
                item.indicadores.forEach(indicador => {
                    const indicadorText = document.createElement('p');
                    indicadorText.textContent = `${indicador.id}: ${indicador.descricao}`;
                    indicadoresCell.appendChild(indicadorText);
                });
                row.appendChild(indicadoresCell);

                tableBody.appendChild(row);
            });
        })
        .catch(error => {
            console.error('Erro ao carregar os dados:', error);
        });
});
