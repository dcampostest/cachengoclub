# Stage 0, "build-stage", based on Node.js, to build and compile the frontend
FROM greenaj/node-frontend:12 as build-stage

WORKDIR /app

COPY package*.json /app/

RUN npm install
COPY ./ /app/
RUN npm run build
# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:1.16

COPY --from=build-stage /app/build/ /usr/share/nginx/html

COPY --from=build-stage /default.conf /etc/nginx/conf.d/default.conf
