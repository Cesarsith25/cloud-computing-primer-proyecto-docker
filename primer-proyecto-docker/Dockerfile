# Última versión de Node.js (rama Current 26.x) sobre Alpine
FROM node:26-alpine

ENV NODE_ENV=production
WORKDIR /app

# Instalar dependencias primero para aprovechar la caché de capas
COPY src/package*.json ./
RUN npm install --omit=dev && npm cache clean --force

# Copiar el código fuente (node_modules excluido por .dockerignore)
COPY --chown=node:node src/ ./

# Ejecutar como usuario sin privilegios
USER node

EXPOSE 3000
CMD ["node", "index.js"]