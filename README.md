# DiarreIA: Diário Oficial + IA ↦ Linguagem Simples

🚽 Limpando a cagada burocrática
💼 Higienizando o Diário Oficial

🗂️ **Transformando burocracia em clareza**

Este projeto automatiza a conversão do Diário Oficial brasileiros em tabelas estruturadas e de fácil leitura, seguindo os princípios da linguagem simples.

A disponibilização do Diário Oficial em formato estruturado e acessível é fundamental para fortalecer a transparência pública e a democracia participativa.

## 🎯 Objetivo

Converter textos complexos e burocráticos do Diário Oficial em tabelas organizadas por data, com informações claras sobre:

- **Quem**: Pessoa/empresa envolvida
- **Onde**: Local/endereço
- **Tipo**: Categoria do evento (notificação, licitação, decreto, etc.)
- **Nº**: Número do documento/processo
- **Valor**: Valores monetários envolvidos
- **Contexto**: Motivo/assunto em linguagem simples
- **Base Legal**: Fundamentação jurídica
- **Link**: Acesso ao documento oficial

## 🚀 Como funciona

1. **Input**: Arquivos PDF na pasta `diarios/`
2. **Conversão**: Markitdown converte PDFs para markdown na pasta `simplificados/`
3. **Processamento**: OpenRouter API (GPT free model) extrai e estrutura as informações
4. **Output**: Tabelas Markdown organizadas por data
5. **Publicação**: GitHub Pages exibe o resultado automaticamente

## 📋 Regras de Processamento

Baseado no arquivo `PROMPT.md`:

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
   - Converte PDFs para markdown (pasta `simplificados/`)
   - Processa com OpenRouter API (gratuito)
   - Publica no GitHub Pages (gratuito)
4. Resultado estará disponível no GitHub Pages

## 📁 Estrutura

```
.
├── diarios/                 # Input: arquivos PDF do Diário Oficial
├── simplificados/           # Markdown convertido dos PDFs
├── PROMPT.md               # Regras de transformação
├── higieniza-diario.js     # Script de processamento OpenRouter
├── docs/
│   └── processed.md       # Output: resultado processado
└── .github/workflows/
    └── process-diario.yml # Automação GitHub Actions
```

## 🎨 Exemplo de Resultado

### 28/07/2025

| Quem | Onde | Tipo | Nº | Valor (R$) | Contexto | Base Legal | Link |
|---|---|---|---|---|---|---|---|
| WW PADUA VEICULOS | Alberto Braune | Licitação | 90.060 | 93.800,00 | Aquisição de veículo Polo Track | Lei 14.133/2021 | [Link](http://www.pmnf.rj.gov.br/) |

---

*Transformando documentos oficiais em informação acessível para todos* 🌱
