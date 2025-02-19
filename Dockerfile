# Use the official Node.js 18 image based on Alpine Linux
FROM node:18-alpine

# Set the working directory inside the container to /app
WORKDIR /app

# Copy the package.json file to the working directory
COPY package.json .

# Install the dependencies specified in package.json
RUN npm install

# Install the 'serve' package globally to serve the built application
# This will be used to serve the application
RUN npm i -g serve

# Copy all files from the current directory to the working directory in the container
COPY . .

# Build the application using the npm build script
RUN npm run build

# Expose port 3000 to allow external access to the application
EXPOSE 3000

# Set the default command to serve the built application from the 'dist' directory
CMD [ "serve", "-s", "dist" ]
