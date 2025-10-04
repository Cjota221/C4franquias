// File: js/admin.js
// Contém a lógica de frontend para o painel da matriz (admin).

import { supabaseClient as supabase } from './supabase.js';
import { sincronizarProdutos } from './facilzap.js';

document.addEventListener('DOMContentLoaded', () => {
    console.log("Painel da Matriz carregado.");

    carregarFranquias();
    gerenciarProdutos();
});

/**
 * Carrega e exibe a lista de franquias do banco de dados.
 */
async function carregarFranquias() {
    console.log("Carregando lista de franquias...");
    // Lógica para buscar franquias no Supabase e renderizar na página.
}

/**
 * Gerencia os produtos, permitindo sincronização e visualização.
 */
async function gerenciarProdutos() {
    console.log("Gerenciando produtos...");
    const produtosApi = await sincronizarProdutos();
    if (produtosApi) {
        console.log("Produtos da API para processar:", produtosApi);
        // Lógica para salvar/atualizar produtos no Supabase.
    }
}


