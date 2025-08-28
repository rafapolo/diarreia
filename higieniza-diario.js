const axios = require('axios');
const fs = require('fs');
const path = require('path');

async function processDocument() {
    try {
        // Read the prompt template
        const promptContent = fs.readFileSync('PROMPT.md', 'utf8');

        // Read the latest markdown file from simplificados/
        let documentContent = '';
        const simplificadosDir = 'simplificados';

        if (fs.existsSync(simplificadosDir)) {
            const files = fs.readdirSync(simplificadosDir)
                .filter(file => file.endsWith('.md'))
                .map(file => ({
                    name: file,
                    path: path.join(simplificadosDir, file),
                    mtime: fs.statSync(path.join(simplificadosDir, file)).mtime
                }))
                .sort((a, b) => b.mtime - a.mtime);

            if (files.length > 0) {
                documentContent = fs.readFileSync(files[0].path, 'utf8');
                console.log(`📖 Processando arquivo: ${files[0].name}`);
            }
        }

        // Fallback to document.txt if no markdown files found
        if (!documentContent && fs.existsSync('document.txt')) {
            documentContent = fs.readFileSync('document.txt', 'utf8');
            console.log('📖 Processando documento: document.txt (fallback)');
        }

        // Combine prompt with document content
        const fullPrompt = `${promptContent}\n\nEntrada:\n${documentContent}`;

        // OpenRouter API call
        const response = await axios.post('https://openrouter.ai/api/v1/chat/completions', {
            model: 'openai/gpt-oss-20b:free',
            messages: [{
                role: 'user',
                content: fullPrompt
            }]
        }, {
            headers: {
                'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
                'Content-Type': 'application/json'
            }
        });

        // Extract the processed content
        const processedContent = response.data.choices[0].message.content;

        // Ensure docs directory exists
        if (!fs.existsSync('docs')) {
            fs.mkdirSync('docs', { recursive: true });
        }

        // Write the processed content to docs/processed.md
        fs.writeFileSync('docs/processed.md', processedContent, 'utf8');

        const timestamp = new Date().toLocaleString('pt-BR');

        console.log('✅ Documento processado com sucesso!');
        console.log(`📄 Arquivo gerado: docs/processed.md`);
        console.log(`🕒 Timestamp: ${timestamp}`);

    } catch (error) {
        console.error('❌ Erro ao processar documento:', error.message);

        if (error.response) {
            console.error('Status:', error.response.status);
            console.error('Data:', error.response.data);
        }

        // Create fallback content if API fails
        const fallbackContent = `# Erro no Processamento

Não foi possível processar o documento automaticamente.

**Erro:** ${error.message}

**Data:** ${new Date().toLocaleString('pt-BR')}

Por favor, verifique:
1. Se a chave da API OpenRouter está configurada corretamente
2. Se o arquivo \`document.txt\` existe e tem conteúdo válido
3. Se há créditos suficientes na conta OpenRouter

---
`;

        // Ensure docs directory exists
        if (!fs.existsSync('docs')) {
            fs.mkdirSync('docs', { recursive: true });
        }

        fs.writeFileSync('docs/processed.md', fallbackContent, 'utf8');

        process.exit(1);
    }
}

// Run the processing
processDocument();
