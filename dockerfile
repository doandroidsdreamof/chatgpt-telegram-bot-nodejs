FROM python:3
WORKDIR /src
COPY . .
RUN npm lint
