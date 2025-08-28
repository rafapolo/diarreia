#!/bin/bash

# Process PDF with OpenRouter API
# This script extracts text from PDF and processes it with OpenRouter

set -e

# Extract text from PDF
PDF_FILE=$(find . -name "*.pdf" -type f | head -1)
if [ -z "$PDF_FILE" ]; then
  echo "No PDF file found"
  exit 1
fi

echo "Processing PDF: $PDF_FILE"
pdftotext "$PDF_FILE" extracted_text.txt

# Read prompt from PROMPT.md
PROMPT=$(cat PROMPT.md)
INPUT=$(cat extracted_text.txt)

# Create request body
BODY=$(jq -n --arg prompt "$PROMPT" --arg input "$INPUT" \
  '{
    "model": "openai/gpt-oss-20b:free",
    "messages": [
      {
        "role": "user",
        "content": ($prompt + "\n\nEntrada:\n" + $input)
      }
    ]
  }')

# Call OpenRouter API
mkdir -p higienizados
BASENAME=$(basename "$PDF_FILE" .pdf)
OUTPUT_FILE="higienizados/${BASENAME}_higienizado.md"

curl -s -L \
  -H "Authorization: Bearer $OPENROUTER_API_KEY" \
  -H "Content-Type: application/json" \
  https://openrouter.ai/api/v1/chat/completions \
  -d "$BODY" \
| jq -r '.choices[0].message.content' > "$OUTPUT_FILE"

echo "✅ Processed: $OUTPUT_FILE"