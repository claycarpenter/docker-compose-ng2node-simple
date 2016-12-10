FROM node:7.2.0
MAINTAINER claycarpenter@gmail.com

# Prep app directory
RUN mkdir -p /app
WORKDIR /app

# Copy app into app directory
COPY . ./

EXPOSE 8080

CMD npm start
