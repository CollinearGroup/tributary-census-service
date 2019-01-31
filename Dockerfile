FROM node:8-alpine

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app

# Install app dependencies
RUN npm install

EXPOSE 3005

CMD ["npm", "start"]