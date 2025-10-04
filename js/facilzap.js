// File: js/facilzap.js
// Este arquivo conterá toda a lógica para interagir com a API FácilZap através de um proxy seguro.

// O endpoint do nosso proxy no Netlify. Todas as requisições passarão por aqui.
const PROXY_URL = '/.netlify/functions/proxy-facilzap';

/**
 * Função genérica para fazer requisições à API FácilZap via nosso proxy.
 * @param {string} endpoint - O endpoint da API que queremos acessar (ex: '/products').
 * @param {string} method - O método HTTP (GET, POST, etc.).
 * @param {object} body - O corpo da requisição (para POST, PUT, etc.).
 * @returns {Promise<any>} - A resposta da API.
 */
async function callApi(endpoint, method = 'GET', body = null) {
    try {
        const response = await fetch(PROXY_URL, {
            method: 'POST', // A chamada para a nossa função proxy é sempre POST
            headers: {
                'Content-Type': 'application/json',
            },
            // Enviamos os detalhes da requisição desejada no corpo
            body: JSON.stringify({ endpoint, method, body }),
        });

        const responseBody = await response.json();

        if (!response.ok) {
            throw new Error(responseBody.error || `Erro na API: ${response.statusText}`);
        }

        return responseBody;

    } catch (error) {
        console.error(`Erro ao chamar a API via proxy para o endpoint ${endpoint}:`, error);
        throw error; // Propaga o erro para a função que chamou
    }
}


/**
 * Função para buscar produtos da API FácilZap.
 */
export async function sincronizarProdutos() {
    console.log('Iniciando sincronização de produtos via proxy...');
    try {
        // Dados mockados para desenvolvimento (podem ser mantidos para testes iniciais)
        const mockProducts = [
            { id: 'fz1', name: 'Produto Digital A', price: 99.90 },
            { id: 'fz2', name: 'Produto Digital B', price: 149.90 },
            { id: 'fz3', name: 'Consultoria Online', price: 299.90 },
        ];
        console.log('Usando dados mockados para produtos.');
        return mockProducts;

    } catch (error) {
        console.error('Erro ao sincronizar produtos:', error);
        return null;
    }
}

/**
 * Função para enviar um novo pedido para a API FácilZap.
 * @param {object} orderDetails - Detalhes do pedido.
 */
export async function criarPedido(orderDetails) {
    console.log('Enviando pedido para FácilZap via proxy:', orderDetails);
    try {
        const result = await callApi('/orders', 'POST', orderDetails);
        console.log('Pedido criado com sucesso:', result);
        return result;
    } catch (error) {
        console.error('Falha ao criar pedido:', error);
        return null;
    }
}


