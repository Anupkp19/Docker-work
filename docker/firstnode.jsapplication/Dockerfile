# Specify a base image
FROM node:alpine

# Set the working directory in the container
WORKDIR /app

# Install some dependencies
COPY ./package.json ./
RUN npm install
COPY ./ ./
# Copy the rest of the application code


# Expose a port if your Node.js application listens on a specific port
EXPOSE 8080

# Default command to start your application
CMD ["npm", "start"]
