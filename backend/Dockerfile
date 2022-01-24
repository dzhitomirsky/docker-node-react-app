FROM node:lts

RUN su node

RUN mkdir -p /backend 

WORKDIR /backend

ADD . /backend 

ENV HOST 0.0.0.0

ENV NODE_ENV $NODE_ENV

RUN npm install

CMD [ "npm", "start" ]