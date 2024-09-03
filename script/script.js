// script.js

// Exibir o formulário de pedidos
function showOrderForm() {
    document.getElementById('home').style.display = 'none';
    document.getElementById('order').style.display = 'block';
}

// Calcular e exibir o preço
function calculatePrice() {
    const flavor = document.getElementById('flavor').value;
    const shape = document.getElementById('shape').value;
    const weight = document.getElementById('weight').value;

    // Preço base por quilo
    let pricePerKg = 50;

    // Aumentar preço se for sabor de morango
    if (flavor === 'morango') {
        pricePerKg += 10;
    }

    // Aumentar preço se o formato for quadrado
    if (shape === 'quadrado') {
        pricePerKg += 20;
    }

    const totalPrice = pricePerKg * weight;
    document.getElementById('price-value').innerText = totalPrice;
}

// Finalizar pedido e exibir página de confirmação
function finalizeOrder() {
    const flavor = document.getElementById('flavor').value;
    const shape = document.getElementById('shape').value;
    const weight = document.getElementById('weight').value;
    const decoration = document.getElementById('decoration').value;
    const price = document.getElementById('price-value').innerText;

    const summary = `
        <p><strong>Sabor:</strong> ${flavor}</p>
        <p><strong>Formato:</strong> ${shape}</p>
        <p><strong>Quantidade:</strong> ${weight} kg</p>
        <p><strong>Decoração:</strong> ${decoration}</p>
        <p><strong>Preço:</strong> R$ ${price}</p>
    `;
    document.getElementById('order-summary').innerHTML = summary;

    document.getElementById('order').style.display = 'none';
    document.getElementById('confirmation').style.display = 'block';
}

// Enviar pedido
function submitOrder() {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;

    // Aqui você pode adicionar lógica para enviar os dados para o servidor

    document.getElementById('confirmation').style.display = 'none';
    document.getElementById('thank-you').style.display = 'block';
}

// Atualizar preço em tempo real
document.getElementById('flavor').addEventListener('change', calculatePrice);
document.getElementById('shape').addEventListener('change', calculatePrice);
document.getElementById('weight').addEventListener('input', calculatePrice);
