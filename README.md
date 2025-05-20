# Projeto de Autenticação e Autorização com JWT

![Logo JWT](./img/image.png)

Uma implementação em Node.js de JWT (JSON Web Token) para autenticação segura e autorização baseada em roles.

## Visão Geral

JWT (JSON Web Token) é um padrão do mercado para transmitir informações de forma segura entre partes como um objeto JSON. Este projeto demonstra:

- Autenticação de usuários com geração de JWT
- Autorização baseada em roles (papéis)
- Rotas protegidas com diferentes níveis de acesso
- Armazenamento seguro de dados sensíveis

## 🚀 Funcionalidades

- Geração e validação segura de tokens
- Middlewares customizados para autenticação
- Controle de acesso baseado em roles
- Configuração por variáveis de ambiente
- Demonstração de atualização automática de token

## ⚙️ Como Funciona

1. **Autenticação**:

   - Usuário faz login com credenciais
   - Servidor valida e retorna um JWT contendo:
     - ID do usuário
     - Role (papel) do usuário
     - Tempo de expiração

2. **Autorização**:
   - Token é enviado no cabeçalho das requisições
   - Middlewares verificam:
     - Validade do token (autenticação)
     - Permissões do usuário (autorização)
