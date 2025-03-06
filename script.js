document.getElementById('btn').addEventListener('click', function() {
    const circuloContainer = document.getElementById('circulo-container');
    // Criar o círculo
    const circulo = document.createElement('div');
    circulo.classList.add('circulo');
    circulo.textContent = 'Oi,seja bem vindo!';
    // Adicionar o círculo ao container
    circuloContainer.innerHTML = ''; // Limpar qualquer conteúdo anterior
    circuloContainer.appendChild(circulo);
    // Exibir o círculo
    circuloContainer.style.display = 'block';
    });