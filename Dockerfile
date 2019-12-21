FROM node:6.12-alpine

COPY build build/

WORKDIR build

RUN yarn global add serve
RUN yarn global add flow

CMD serve -s .

EXPOSE 3000
