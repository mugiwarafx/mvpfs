FROM node:16

WORKDIR /usr/src/app

COPY --chown=node:node . .

RUN npm ci 

ENV DEBUG=playground:*
ENV SECRET='c5bf0ed68eef4ece49035c6e05e09acdcf6737b8'

USER node

EXPOSE 5000

CMD npm start
