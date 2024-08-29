FROM node:alpine

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN npm install -g @angular/cli --force

RUN npm install --force

EXPOSE 4200

RUN ng build

CMD ["http-server", "dist/pd-front", "-p", "4200", "-a", "0.0.0.0" ]



# CMD ["ng", "serve", "--host", "0.0.0.0"]


# # Stage 1: Build the Angular application
# FROM node:16-alpine as build

# # Set the working directory in the container
# WORKDIR /app

# # Copy package.json and package-lock.json to work directory
# COPY package*.json /app/

# # Install all dependencies
# RUN npm install --force

# # Copy the rest of the application code
# COPY . /app

# # Build the Angular application in production mode
# RUN npm run build

# # Stage 2: Serve the application with Nginx
# FROM nginx:alpine

# # Copy the built app from the previous stage
# COPY --from=build /app/dist/pd-front /usr/share/nginx/html

# # Expose port 80
# EXPOSE 80

# # Start Nginx and keep it running
# CMD ["nginx", "-g", "daemon off;"]