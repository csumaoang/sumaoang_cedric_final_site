# Build stage
FROM node:18-alpine as build

# Set working directory
WORKDIR /sumaoang_cedric_final_site

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source files
COPY . .

# Build app
RUN npm run build

# Production stage
FROM nginx:alpine

# Copy custom nginx config
COPY nginx.conf /etc/nginx/nginx.conf

# Copy built assets from builder stage
COPY --from=build /sumaoang_cedric_final_site/build /usr/share/nginx/html

# Ensure correct permissions
RUN chown -R nginx:nginx /usr/share/nginx/html && \
    chmod -R 755 /usr/share/nginx/html

EXPOSE 5575

CMD ["nginx", "-g", "daemon off;"]