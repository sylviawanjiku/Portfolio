# base image
FROM node:carbon

# set working directory
WORKDIR /usr/src/app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json
RUN npm install --silent
RUN npm install react-scripts@3.0.1 -g --silent

# install and cache app dependencies
COPY build /usr/src/app

# Install `serve` to run the application.
RUN npm install -g serve@11.2.0