FROM node:16

WORKDIR /usr/src/app

COPY --chown=node:node . .

RUN npm ci 

ENV DEBUG=playground:*

USER node

EXPOSE 5000

CMD npm start