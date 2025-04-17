# Use the official Node.js 18 image based on Alpine Linux
FROM node:18-alpine

# Set the working directory inside the container to /app
WORKDIR /app

# Copy the package.json file to the working directory
COPY package.json .

# Install PNPM and use as default package manager
RUN npm install -g pnpm@latest

# Install the dependencies specified in package.json
RUN pnpm install

# Set up pnpm global install location
ENV PNPM_HOME="/root/.pnpm-global"
ENV PATH="$PNPM_HOME:$PATH"

# Create the directory and configure it
RUN mkdir -p $PNPM_HOME && \
    pnpm config set global-bin-dir $PNPM_HOME && \
    pnpm add -g serve

# Copy all files from the current directory to the working directory in the container
COPY . .

# Build the application using the pnpm build script
RUN pnpm build

# Expose port 3000 to allow external access to the application
EXPOSE 3000

# Set the default command to serve the built application from the 'dist' directory
CMD [ "serve", "-s", "dist" ]
