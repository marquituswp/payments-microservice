# Payments MicroService

```
docker compose up -d
```

## Dev

1. Clonar el repositorio
2. Instalar las dependencias
3. Crear un archivo `.env` a partir del archivo `.env.example`
4. Levantar la base de datos con `docker compose up -d`
5. Levantar el servidor de NATS con `docker run -d --name nats-main -p 4222:4222 -p 8222:8222 nats`
6. Levantar el proyecto con `pnpm run start:dev`

## PROD

Ejecutar

```
docker build -f dockerfile.prod -t payments-ms .
```
