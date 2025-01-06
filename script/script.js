// Objeto com os preços de cada sabor
const flavorPrices = {
    // 75
    morango: 75,
    maracuja: 75,
    limao: 75,
    chocolate: 75,
    brigadeiro: 75,
    ninho: 75,
    bichoDePe: 75,
    laka: 75,
    beijinho: 75,
    doceDeLeiteComCoco: 75,
    doceDeLeiteSemCoco:75,
    //80
    brigadeiroComMorango: 80,
    cremeBelgaComMorango: 80,
    cremeBelgaComAbacaxi: 80,
    cremeBelgaComPessego: 80,
    brigadeiroDeNinhoComMorango: 80,
    brigadeiroDeNinhoComAbacaxi: 80,
    doceDeLeiteComMorango: 80,
    doceDeLeiteComAbacaxi: 80,
    brigadeiroLakaComMorango: 80,
    trufadoAlpinoMeioAmargo : 80,
    trufadoAlpinoAoLeite: 80,
    doisAmores: 80,
    CremeMocaComMorango: 80,
    //85
    brigadeiroDeNinhoComNutella: 85,
    brigadeiroDeNutella: 85,
    doceDeLeiteComNozes: 85,
    doceDeLeiteComAmeixa: 85,
    florestaNegra: 85,
    florestaBranca: 85,
    brigadeiroDeNozes: 85,
    trufadoBrancoLimao: 85,
    trufadoBrancoMaracuja: 85,
    trufadoChocolateComCereja: 85,
    trufadoChocolateComMorango: 85,

};

// Exibir o formulário de pedidos
function showOrderForm() {
    document.getElementById('home').style.display = 'none';
    document.getElementById('order').style.display = 'block';
}

// Calcular e exibir o preço
function calculatePrice() {
    const flavor = document.getElementById('flavor').value;
    const weight = parseFloat(document.getElementById('weight').value);

    // Preço base do sabor
    const pricePerKg = flavorPrices[flavor] || 50;

    // Calcular preço total
    const totalPrice = (pricePerKg) * weight;

    // Atualizar o preço exibido
    document.getElementById('price-value').innerText = totalPrice.toFixed(2);
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
    document.getElementById('confirmation').style.display = 'none';
    document.getElementById('thank-you').style.display = 'block';
}

// Atualizar preço em tempo real
document.getElementById('flavor').addEventListener('change', calculatePrice);
document.getElementById('shape').addEventListener('change', calculatePrice);
document.getElementById('weight').addEventListener('input', calculatePrice);