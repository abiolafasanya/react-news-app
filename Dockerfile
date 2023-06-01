# Base Image
FROM node:alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install Dependencies
RUN npm install

# Copy app files
COPY . .

# Build for production
RUN npm run build

# Expose port 3000
EXPOSE 3000

# Start server
CMD ["npm", "run", "dev"]
