FROM node:20-alpine

WORKDIR /srv/app
COPY dist /srv/app/dist
COPY node_modules /srv/app/node_modules

CMD ["node", "./dist"]
