// File: js/loja.js
// Lógica para gerar dinamicamente a loja pública de uma franqueada.

import { supabaseClient as supabase } from './supabase.js';

document.addEventListener('DOMContentLoaded', () => {
    gerarLojaPublica();
});

/**
 * Busca os dados da franquia e seus produtos ativos para montar a página.
 */
async function gerarLojaPublica() {
    const productListContainer = document.getElementById('product-list');
    productListContainer.innerHTML = ''; // Limpa o conteúdo inicial

    try {
        // Dados mockados para o exemplo:
        const mockProdutosAtivos = [
            { name: 'Produto Digital A', price: '99,90' },
            { name: 'Consultoria Online', price: '299,90' },
        ];

        if (mockProdutosAtivos.length === 0) {
            productListContainer.innerHTML = '<p class="text-gray-500">Nenhum produto disponível no momento.</p>';
            return;
        }

        // Renderizar os produtos no HTML.
        mockProdutosAtivos.forEach(produto => {
            const productCard = `
                <div class="bg-white border border-gray-200 rounded-lg shadow-md p-4 flex flex-col items-center text-center">
                    <div class="w-full h-40 bg-gray-200 rounded-md mb-4 flex items-center justify-center">
                        <span class="text-gray-500">Imagem do Produto</span>
                    </div>
                    <h3 class="text-lg font-semibold text-gray-800">${produto.name}</h3>
                    <p class="text-xl font-bold text-blue-600 mt-2">R$ ${produto.price}</p>
                    <button class="mt-4 w-full bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition">Comprar</button>
                </div>
            `;
            productListContainer.innerHTML += productCard;
        });

    } catch (error) {
        console.error('Erro ao gerar a loja pública:', error);
        productListContainer.innerHTML = '<p class="text-red-500">Ocorreu um erro ao carregar os produtos.</p>';
    }
}


