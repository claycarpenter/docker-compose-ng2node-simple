FROM node:7.2.0
MAINTAINER claycarpenter@gmail.com

# Prep app dir
RUN mkdir -p /app
WORKDIR /app

# Copy app into app dir
COPY . ./

EXPOSE 3000

CMD $(npm bin)/json-server db.json --port 3000
