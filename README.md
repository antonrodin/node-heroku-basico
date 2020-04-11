# Aplicación basica, para subir a Heroku

Heroku es probablemente uno de los pocos sitios donde subir gratuitamente tu aplicación backend de una formama bastante facil y donde ademas dispones de bases de datos y otros servicios o addons.

## Consideraciones antes de subir una app a Heroku con MySQL

1. Tener el script "start" dentro de ___packaje.json___, heroku internamente arrancara la app con este script.

```
"scripts": {
    "start": "node index.js",
}
```

2. Utilizar las variables de entorno, en este caso utilizo el paquete ___dotenv___. (npm install dotenv) Se uzan tanto para la conexión a la base de datos como para el puerto.

__Puerto__, es importante ya que Heroku internamente utilizara un puerto que nos asignara automaticamente, es decir no lo podemos especificar como querramos.

```javascript
const PORT = process.env.PORT || 3000;
```

__MySQL__ Debemos usar variables de entorno ya que despues los podremos editar desde el panel de control de Heroku.

```javascript
database: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
}
```