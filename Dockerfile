# stage - 1 Building The react-app
FROM node AS builder

WORKDIR app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

# stage-2 Serving with nginx server
FROM nginx

# Copy the build files from the build stage into the Nginx container
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80 for the web server
EXPOSE 80

# Start Nginx when the container runs
CMD ["nginx", "-g", "daemon off;"]