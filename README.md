<img src="docs/logo.png" alt="logo" width="300"/>


# Diário Oficial + IA ↦ Linguagem Simples

This project cleans and structures bureaucratic documents from the Official Gazette into accessible, easy-to-read tables, promoting transparency and participatory democracy through plain language principles.

Este projeto higieniza e estrutura documentos burocráticos do Diário Oficial em tabelas acessíveis e de fácil leitura, promovendo a transparência e a democracia participativa por meio dos princípios da linguagem simples.

## 🎯 Objetivo

Converter textos complexos e burocráticos do Diário Oficial em tabelas organizadas e higienizadas utilizando somente ferramentas gratuitas.

- **Quem**: Pessoa/empresa envolvida
- **Onde**: Local/endereço
- **Tipo**: Categoria do evento (notificação, licitação, decreto, etc.)
- **Nº**: Número do documento/processo
- **Valor**: Valores monetários envolvidos
- **Contexto**: Motivo/assunto em linguagem simples
- **Base Legal**: Fundamentação jurídica
- **Link**: Acesso ao documento oficial

## 📋 Regras de Higienização

Executa o [PROMPT](PROMPT.md) no Modelo Largo de Línguagem:

- ✅ Agrupamento por data
- ✅ Tabelas com colunas padronizadas
- ✅ Valores monetários em formato brasileiro
- ✅ Contexto em linguagem simples
- ✅ Links oficiais preservados
- ✅ Seções futuras separadas
- ✅ Eliminação de duplicatas e formalidades

## ⚙️ Configuração

### 3. Como Usar
1. Adicione arquivos PDF do Diário Oficial na pasta `diarios/`
2. Commit e push para o repositório
3. O GitHub Actions processará automaticamente:
   - Converte PDFs para markdown com [markitdown](https://github.com/microsoft/markitdown)
   - Processa o PROMPT com [OpenRouter](https://openrouter.ai/openai/gpt-oss-20b:free]gpt-oss-20b:free)
   - Publica no GitHub
4. Resultados ficam disponíveis [aqui](https://github.com/rafapolo/diarreia/tree/main/simplificados)

## 📁 Estrutura

```
.
├── diarios/                 # Input: Arquivos PDF do Diário Oficial
├── simplificados/           # Output: Documentos higienizados
├── PROMPT.md               # Regras de transformação
├── higieniza-diario.js     # Script de processamento com OpenRouter
└── .github/workflows/
    └── process-diario.yml # Automação GitHub Actions
```

## 🎨 Resultado de Exemplo

[Diário oficial](https://github.com/rafapolo/diarreia/blob/main/diarios/DIarioOficialNovaFriburgo_28072025.pdf) de Nova Friburgo higienizado em
[Markdown](https://github.com/rafapolo/diarreia/blob/main/simplificados/DIarioOficialNovaFriburgo_28072025.md) simples.

---

*Transformando documentos oficiais em informação acessível para todos* 🌱
