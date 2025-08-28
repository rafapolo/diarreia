# Diário Oficial + IA ↦ Linguagem Simples

Este projeto higieniza documentos burocráticos do Diário Oficial, transformando-os em tabelas estruturadas e de fácil leitura, seguindo os princípios da linguagem simples.

A disponibilização do Diário Oficial em formato estruturado e acessível é fundamental para fortalecer a transparência pública e a democracia participativa.

## 🎯 Objetivo

Converter textos complexos e burocráticos do Diário Oficial em tabelas organizadas e higienizadas utilizando só ferramentas gratuitas.

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
├── simplificados/           # Output: Documento higienizado automaticamente
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
