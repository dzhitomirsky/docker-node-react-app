FROM node:lts

RUN su node

RUN mkdir -p /frontend 

WORKDIR /frontend

ADD . /frontend 

ENV HOST 0.0.0.0

ENV NODE_ENV $NODE_ENV

RUN npm install

CMD [ "npm", "start" ]