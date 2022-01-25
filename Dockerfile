FROM node:current-alpine3.15

RUN mkdir index

COPY . .

RUN cd /frontend && npm ci && npm run build

RUN cp /frontend/dist /backend/public

RUN cd /backend && npm ci && npm run build

ENV PORT=8080
ENV ENVIRONMENT=PROD

EXPOSE 8080

WORKDIR /backend

CMD ["npm", "run", "start"]
