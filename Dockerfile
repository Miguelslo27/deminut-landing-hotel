# Utiliza una imagen base de Node para construir el proyecto React
FROM node:14 AS build

# Establece el directorio de trabajo
WORKDIR /app

# Copia package.json y package-lock.json al directorio de trabajo
COPY package*.json ./

# Desactiva la verificación de clave del host para Git
RUN git config --global core.sshCommand 'ssh -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no'

# Instala las dependencias del proyecto
RUN npm ci || cat /root/.npm/_logs/*-debug.log

# Copia el resto del código fuente del proyecto
COPY . .

# Crea el build de producción
RUN npm run build

# Utiliza una imagen base de Nginx para servir el proyecto
FROM nginx:1.21.0

# Copia el build de producción al directorio de Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Copia la configuración personalizada de Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expone el puerto 80
EXPOSE 80

# Inicia Nginx
CMD ["nginx", "-g", "daemon off;"]
