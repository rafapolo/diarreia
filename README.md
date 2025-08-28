# Diário Oficial - Linguagem Simples

🗂️ **Transformando burocracia em clareza**

Este projeto automatiza a conversão do Diário Oficial de Nova Friburgo em tabelas estruturadas e de fácil leitura, seguindo os princípios da linguagem simples.

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

1. **Input**: Arquivo `document.txt` com conteúdo do Diário Oficial
2. **Processamento**: OpenRouter API (GPT free model) extrai e estrutura as informações
3. **Output**: Tabelas Markdown organizadas por data
4. **Publicação**: GitHub Pages exibe o resultado automaticamente

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

### 1. API Key OpenRouter
1. Acesse [OpenRouter.ai](https://openrouter.ai/)
2. Crie uma conta gratuita
3. Obtenha sua API Key
4. No GitHub, vá em **Settings** → **Secrets and Variables** → **Actions**
5. Adicione um novo secret: `OPENROUTER_API_KEY` com sua chave

### 2. GitHub Pages
1. Vá em **Settings** → **Pages**
2. Source: **GitHub Actions**
3. O site será publicado automaticamente em: `https://[seu-usuario].github.io/[nome-do-repo]/`

### 3. Como Usar
1. Adicione o texto do Diário Oficial no arquivo `document.txt`
2. Commit e push para o repositório
3. O GitHub Actions processará automaticamente
4. Resultado estará disponível no GitHub Pages

## 📁 Estrutura

```
.
├── document.txt              # Input: texto do Diário Oficial
├── PROMPT.md                # Regras de transformação
├── process-document.js      # Script de processamento OpenRouter
├── docs/
│   ├── index.html          # Interface web
│   └── processed.md        # Output: resultado processado
└── .github/workflows/
    └── process-diario.yml  # Automação GitHub Actions
```

## 🎨 Exemplo de Resultado

### 28/07/2025

| Quem | Onde | Tipo | Nº | Valor (R$) | Contexto | Base Legal | Link |
|---|---|---|---|---|---|---|---|
| WW PADUA VEICULOS | Alberto Braune | Licitação | 90.060 | 93.800,00 | Aquisição de veículo Polo Track | Lei 14.133/2021 | [Link](http://www.pmnf.rj.gov.br/) |

---

*Transformando documentos oficiais em informação acessível para todos* 🌱
