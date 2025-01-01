# Stage 1: Build
FROM node:18-alpine 

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy source code
COPY . .

# Expose port
EXPOSE 5001

# Start the server
CMD ["npm", "start"]

