// File: js/auth.js
// Gerencia o login, logout e verificação de sessão de usuários.

import { supabaseClient as supabase } from './supabase.js';

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const logoutButton = document.getElementById('logout-button');

    // --- LÓGICA DE LOGIN ---
    if (loginForm) {
        loginForm.addEventListener('submit', async (event) => {
            event.preventDefault();

            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const errorMessage = document.getElementById('error-message');
            errorMessage.textContent = ''; // Limpa mensagens de erro anteriores

            try {
                const { data, error } = await supabase.auth.signInWithPassword({
                    email: email,
                    password: password,
                });

                if (error) {
                    throw error;
                }
                
                // Redirecionamento de exemplo. A lógica de roles (matriz vs. franqueada) deve ser implementada aqui.
                alert('Login bem-sucedido! Redirecionando...');
                window.location.href = '/franqueada.html';

            } catch (error) {
                console.error('Erro no login:', error.message);
                errorMessage.textContent = 'Email ou senha inválidos.';
            }
        });
    }

    // --- VERIFICAÇÃO DE SESSÃO NAS PÁGINAS PROTEGIDAS ---
    checkAuth();


    // --- LÓGICA DE LOGOUT ---
    if (logoutButton) {
        logoutButton.addEventListener('click', async () => {
            const { error } = await supabase.auth.signOut();
            if (error) {
                console.error('Erro ao sair:', error.message);
            } else {
                window.location.href = '/index.html';
            }
        });
    }
});

// Função para verificar se o usuário está logado em páginas protegidas
async function checkAuth() {
    const protectedPages = ['/admin.html', '/franqueada.html'];
    const currentPage = window.location.pathname;

    if (protectedPages.includes(currentPage)) {
        const { data: { session } } = await supabase.auth.getSession();
        if (!session) {
            // Se não houver sessão, redireciona para o login
            window.location.href = '/index.html';
        }
    }
}


