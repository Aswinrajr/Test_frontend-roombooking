
# FROM node:alpine3.18 as build


# ARG VITE_APP_NODE_ENV
# ARG VITE_SERVER_URL_ROUTE
# ARG VITE_SERVER_ADMIN_ROUTE
# ARG VITE_SERVER_PROVIDER_ROUTE


# ENV VITE_APP_NODE_ENV =$VITE_APP_NODE_ENV
# ENV VITE_SERVER_URL_ROUTE=$VITE_SERVER_URL_ROUTE
# ENV VITE_SERVER_ADMIN_ROUTE = $VITE_SERVER_ADMIN_ROUTE
# ENV VITE_SERVER_PROVIDER_ROUTE=$VITE_SERVER_PROVIDER_ROUTE


# WORKDIR /app


# COPY package.json package-lock.json ./


# RUN npm install


# COPY . .


# RUN npm run build

# FROM nginx:1.23-alpine


# WORKDIR /usr/share/nginx/html


# RUN rm -rf ./*


# COPY --from=build /app/dist .


# EXPOSE 80


# ENTRYPOINT ["nginx", "-g", "daemon off;"]
