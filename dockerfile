# Usar una imagen oficial de Node.js
FROM node:16

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar archivos del proyecto
COPY package.json package-lock.json ./
RUN npm install

# Copiar el código fuente
COPY . .

# Exponer el puerto
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["node", "index.js"]
