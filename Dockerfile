# Use Node.js image
FROM node:18

# Create and set app directory
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the app
COPY . .

# Expose the app's port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
