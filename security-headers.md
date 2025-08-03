# Headers de Segurança - Portfólio Fernando César

## Headers Implementados

### 1. **X-Content-Type-Options: nosniff**
- **Propósito**: Previne MIME type sniffing
- **Benefício**: Evita ataques de MIME confusion

### 2. **X-Frame-Options: DENY**
- **Propósito**: Previne clickjacking
- **Benefício**: Impede que o site seja carregado em iframes

### 3. **X-XSS-Protection: 1; mode=block**
- **Propósito**: Ativa proteção XSS do navegador
- **Benefício**: Bloqueia scripts maliciosos

### 4. **Referrer-Policy: strict-origin-when-cross-origin**
- **Propósito**: Controla informações de referrer
- **Benefício**: Protege privacidade em links externos

### 5. **Permissions-Policy: camera=(), microphone=(), geolocation=()**
- **Propósito**: Restringe permissões do navegador
- **Benefício**: Previne acesso não autorizado a recursos

### 6. **Content-Security-Policy**
- **Propósito**: Define fontes permitidas para recursos
- **Benefício**: Previne ataques de injeção de código

## Configuração para Servidores

### Apache (.htaccess)
```apache
# Security Headers
Header always set X-Content-Type-Options nosniff
Header always set X-Frame-Options DENY
Header always set X-XSS-Protection "1; mode=block"
Header always set Referrer-Policy "strict-origin-when-cross-origin"
Header always set Permissions-Policy "camera=(), microphone=(), geolocation=()"
Header always set Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' https://fernandocsar.com.br https://cdnjs.cloudflare.com; style-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com https://cdnjs.cloudflare.com; img-src 'self' data: https:; connect-src 'self' https://fernandocsar.com.br; frame-ancestors 'none';"

# HTTPS Redirect
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Remove Server Information
ServerTokens Prod
ServerSignature Off
```

### Nginx
```nginx
# Security Headers
add_header X-Content-Type-Options nosniff always;
add_header X-Frame-Options DENY always;
add_header X-XSS-Protection "1; mode=block" always;
add_header Referrer-Policy "strict-origin-when-cross-origin" always;
add_header Permissions-Policy "camera=(), microphone=(), geolocation=()" always;
add_header Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' https://fernandocsar.com.br https://cdnjs.cloudflare.com; style-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com https://cdnjs.cloudflare.com; img-src 'self' data: https:; connect-src 'self' https://fernandocsar.com.br; frame-ancestors 'none';" always;

# HTTPS Redirect
if ($scheme != "https") {
    return 301 https://$server_name$request_uri;
}

# Hide Server Information
server_tokens off;
```

## Boas Práticas Implementadas

### ✅ **Links Externos Seguros**
- Todos os links externos usam `rel="noreferrer noopener"`
- Links HTTP foram convertidos para HTTPS
- Font Awesome usa SRI (Subresource Integrity)

### ✅ **Scripts Seguros**
- Service Worker registrado com verificação de suporte
- Event listeners modernos em vez de onclick inline
- CSP configurado para permitir apenas fontes confiáveis

### ✅ **Recursos Externos**
- Google Fonts com crossorigin
- CDN com integridade verificada
- Imagens com src seguros

## Monitoramento de Segurança

### Ferramentas Recomendadas
- **Mozilla Observatory**: https://observatory.mozilla.org/
- **Security Headers**: https://securityheaders.com/
- **CSP Evaluator**: https://csp-evaluator.withgoogle.com/

### Headers para Verificar
```bash
curl -I https://fernandocsar.com.br
```

## Atualizações de Segurança

### Manutenção Regular
1. **Atualizar dependências** mensalmente
2. **Verificar headers** semanalmente
3. **Testar CSP** após mudanças
4. **Monitorar logs** de segurança 