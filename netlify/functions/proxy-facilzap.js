// File: netlify/functions/proxy-facilzap.js
// Esta é uma Serverless Function que atua como um proxy seguro para a API FácilZap.

exports.handler = async function (event, context) {
    // Pega as credenciais das variáveis de ambiente configuradas no painel do Netlify.
    const { FACILZAP_API_TOKEN, FACILZAP_INSTANCE_ID } = process.env;

    // Valida se as variáveis de ambiente foram configuradas no Netlify.
    if (!FACILZAP_API_TOKEN || !FACILZAP_INSTANCE_ID) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'As credenciais da API não foram configuradas no servidor.' }),
        };
    }
    
    const { endpoint, method = 'GET', body = null } = JSON.parse(event.body);
    
    const FACILZAP_API_URL = `https://api.facilzap.com.br/v2/${FACILZAP_INSTANCE_ID}${endpoint}`;

    try {
        const response = await fetch(FACILZAP_API_URL, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${FACILZAP_API_TOKEN}`,
            },
            body: body ? JSON.stringify(body) : null,
        });

        if (!response.headers.get('content-type')?.includes('application/json')) {
             return {
                statusCode: response.status,
                body: await response.text(),
            };
        }
        
        const data = await response.json();

        return {
            statusCode: response.status,
            body: JSON.stringify(data),
        };

    } catch (error) {
        console.error('Erro no proxy para FácilZap:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Falha ao conectar com a API externa.' }),
        };
    }
};


