Sistema de Rastreamento e Gestão de Frotas
Este projeto é uma aplicação web desenvolvida em React para uma empresa de rastreamento, monitoramento e gestão de frotas.
O objetivo é apresentar soluções tecnológicas para controle, segurança e otimização de veículos em tempo real.




Como funciona


O sistema segue um fluxo simples:


Diagnóstico


Análise da necessidade do cliente


Instalação


Implementação dos rastreadores nos veículos


Configuração


Personalização da plataforma


Monitoramento


Acompanhamento 24/7 com suporte



🛠️ Tecnologias utilizadas


⚛️ React


🔀 React Router DOM


🎨 CSS (estilização personalizada)


⭐ Font Awesome (ícones)


📱 Integração com WhatsApp (widget)



Objetivo do projeto

Este sistema foi desenvolvido para:


Melhorar a gestão de frotas


Aumentar a segurança dos veículos


Otimizar custos operacionais


Oferecer uma solução tecnológica e intuitiva



Contato
A aplicação possui integração com:


Página de contato


Botão de ação (CTA)


Widget do WhatsApp para comunicação rápida



Como rodar o projeto
# Clone o repositóriogit clone <url-do-repo># Acesse a pastacd nome-do-projeto# Instale as dependênciasnpm install# Rode o projetonpm start

💡 Observações

Vou fazer o backend em python


Vou fazer o banco de dados ainda...

---

# 🚀 Guia de Deploy em Produção

Frontend hospedado na **GoDaddy** (arquivos estáticos) e backend + banco MySQL hospedados na **Railway**.

```
geraxtech.com.br        →  GoDaddy (front - HTML/CSS/JS estáticos)
api.geraxtech.com.br    →  Railway (backend FastAPI + MySQL)
```

## Pré-requisitos antes de subir

- [ ] Código no GitHub (branch `main` atualizada)
- [ ] Senha real do e-mail `Contato@geraxtech.com.br` em mãos
- [ ] Cartão de crédito do cliente para a Railway
- [ ] Acesso ao painel da GoDaddy (DNS)

---

## 1. Backend na Railway

### 1.1. Criar projeto

1. Entrar em https://railway.com → "New Project" → "Deploy from GitHub repo"
2. Selecionar o repositório do projeto
3. Em "Root Directory", colocar: `backend`
4. A Railway detecta o `Procfile` e `requirements.txt` automaticamente e faz o primeiro build

### 1.2. Adicionar MySQL

1. No projeto Railway → "New" → "Database" → "Add MySQL"
2. Esperar provisionar (~30 segundos)
3. Clicar no serviço MySQL → aba "Variables" → copiar os valores `MYSQLHOST`, `MYSQLUSER`, `MYSQLPASSWORD`, `MYSQLDATABASE`, `MYSQLPORT`

### 1.3. Criar a tabela `contatos`

1. No serviço MySQL → "Data" → "Query"
2. Colar e executar:

```sql
CREATE TABLE contatos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100),
  email VARCHAR(100),
  telefone VARCHAR(20),
  empresa VARCHAR(100),
  cnpj VARCHAR(18),
  mensagem TEXT,
  data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 1.4. Configurar variáveis de ambiente do backend

No serviço do backend → aba "Variables" → adicionar **uma a uma**:

| Variável | Valor |
|---|---|
| `DB_HOST` | `${{MySQL.MYSQLHOST}}` |
| `DB_USER` | `${{MySQL.MYSQLUSER}}` |
| `DB_PASSWORD` | `${{MySQL.MYSQLPASSWORD}}` |
| `DB_NAME` | `${{MySQL.MYSQLDATABASE}}` |
| `CORS_ORIGINS` | `https://geraxtech.com.br,https://www.geraxtech.com.br` |
| `EXPORT_TOKEN` | (gerar valor longo aleatório - veja abaixo) |
| `EMAIL_HOST` | `smtps.uhserver.com` |
| `EMAIL_PORTA` | `465` |
| `EMAIL_REMETENTE` | `Contato@geraxtech.com.br` |
| `EMAIL_SENHA` | (senha real do e-mail) |
| `EMAIL_DESTINO` | `Contato@geraxtech.com.br` |

> **Gerar `EXPORT_TOKEN`**: rodar no PowerShell `[guid]::NewGuid().ToString("N") + [guid]::NewGuid().ToString("N")` ou usar https://www.random.org/strings/?num=1&len=64&digits=on&upperalpha=on&loweralpha=on&unique=on&format=html

> A sintaxe `${{MySQL.MYSQLHOST}}` faz o backend referenciar as variáveis do MySQL automaticamente. Não precisa copiar o valor manualmente.

### 1.5. Configurar domínio customizado

1. No serviço do backend → aba "Settings" → "Networking" → "Custom Domain"
2. Adicionar: `api.geraxtech.com.br`
3. A Railway mostra um valor `CNAME` para apontar (anotar)

### 1.6. Testar

Acesse `https://<seu-app>.up.railway.app/` (URL temporária da Railway).
Resposta esperada: `{"status":"ok","service":"geraxtech-backend"}`

---

## 2. Frontend na GoDaddy

### 2.1. Atualizar URL da API

Em [`.env.production`](.env.production):

```
VITE_API_URL=https://api.geraxtech.com.br
```

### 2.2. Build de produção

```powershell
npm install
npm run build
```

Isso gera a pasta `dist/` com todos os arquivos estáticos.

### 2.3. Subir os arquivos

1. Logar no painel da GoDaddy → "Hospedagem" → "cPanel"
2. Abrir "File Manager" → entrar em `public_html/`
3. **Apagar** o conteúdo padrão (geralmente um `index.html` vazio)
4. Fazer upload de **todo o conteúdo** da pasta `dist/` (não a pasta em si, o conteúdo dela)
5. Confirmar que o `index.html` está em `public_html/index.html`

### 2.4. Configurar redirect SPA (importante!)

Como o site usa React Router, é preciso redirecionar todas as rotas para `index.html`. No File Manager, criar arquivo `.htaccess` em `public_html/`:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

Sem isso, refresh em qualquer página interna (`/contato`, `/sobre`) dá erro 404.

---

## 3. DNS

No painel DNS da GoDaddy:

| Tipo | Nome | Valor | TTL |
|---|---|---|---|
| `A` | `@` | (IP da hospedagem GoDaddy - já vem) | 1 hora |
| `CNAME` | `www` | `geraxtech.com.br` | 1 hora |
| `CNAME` | `api` | (CNAME que a Railway forneceu) | 1 hora |

⚠️ DNS pode levar **15 minutos a 24 horas** para propagar. Fazer com pelo menos 1 dia de antecedência.

---

## 4. Como acessar a planilha de contatos em produção

Como o filesystem da Railway é efêmero, o `contatos.xlsx` local não existe em produção. Em vez disso, baixe sob demanda direto do banco:

```
https://api.geraxtech.com.br/contatos/exportar?token=SEU_EXPORT_TOKEN
```

(O token é o mesmo valor que você definiu em `EXPORT_TOKEN` no Railway). Abrir essa URL no navegador faz o download de um Excel atualizado.

⚠️ **Não compartilhe esse link** — quem tiver ele consegue baixar todos os contatos.

---

## 5. Checklist final antes de ir ao ar

- [ ] Backend respondendo `{"status":"ok"}` em `https://api.geraxtech.com.br/`
- [ ] Front carrega em `https://geraxtech.com.br`
- [ ] Refresh em `/contato` não dá 404
- [ ] Formulário envia com sucesso
- [ ] E-mail chega em `Contato@geraxtech.com.br`
- [ ] Cliente recebe e-mail de confirmação
- [ ] Contato aparece no MySQL (verificar via Railway "Data")
- [ ] Exportação Excel funciona com o token

---

## 6. Rodando localmente (não muda nada)

```powershell
# Backend
cd backend
.\venv\Scripts\activate
python -m uvicorn src.main:app --reload

# Front (em outra janela)
npm run dev
```

Os arquivos `Procfile`, `runtime.txt` e `railway.json` são lidos **apenas** pela Railway durante o deploy. Localmente são ignorados.
