# Recolección de residuos

Este proyecto es un mono repositorio usando turbo, el cual se compone por una aplicación en React y otra en nestJS. Sigue estos pasos para configurarlo y ejecutarlo en tu máquina local.

## Prerequisitos

Antes de comenzar, asegúrate de tener los siguientes prerequisitos instalados:

- **Node.js** (que incluye `npm`): [Instalar Node.js](https://nodejs.org/)

Puedes verificar si ya tienes Node.js instalado ejecutando el siguiente comando en tu terminal:

```bash
node -v   # Deberías ver la versión de node
npm -v    # Deberías ver la versión de npm
```
- **Mysql** Se requiere instalar mysql y crear una base de datos con el nombre de elección.

## Instalación
- Primero copia el archivo .env.example y nombralo .env, ahí establece el nombre de la base de datos, el usuario y la contraseña

- Segundo ejecuta npm install en la terminal desde la raiz

## Ejecución
- Para ejecutar el proyecto escribe **npm run dev** en la terminal
    - react (front) estará en el puerto 5173
    - nestJs(back) estará en el puerto 3000
