FROM node:13

EXPOSE 8051
ENV PORT=8051
ENV REQUIRE_HTTPS=false

USER node
RUN mkdir -p /home/node/codenames
WORKDIR /home/node/codenames

COPY --chown=node * ./
COPY --chown=node server/ ./server/
COPY --chown=node public/ ./public/

RUN npm install

CMD npm start
