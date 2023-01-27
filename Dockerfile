FROM node:14-alpine
WORKDIR /usr/src/app

COPY . /

RUN yarn

# COPY . /

COPY ./.cmd/docker-entrypoint.sh /docker-entrypoint.sh

RUN chmod +x /docker-entrypoint.sh

ENTRYPOINT ["/docker-entrypoint.sh"]
