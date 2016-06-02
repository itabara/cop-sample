FROM alpine:3.3

# Update
RUN apk add --update bash
RUN apk add nodejs>6.2.0-r0
RUN apk add --update git

# Install app dependencies
COPY /src/package.json /src/cop-api/package.json
RUN cd /src/cop-api/ ; npm install

# Bundle app source
COPY /src/. /src/cop-api
WORKDIR "/src/cop-api"

EXPOSE 3000 9000 8080

CMD ["npm", "start"]
