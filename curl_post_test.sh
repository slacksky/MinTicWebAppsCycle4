curl -X POST -H "Content-Type: application/json" \
    -d '{    "nombre": "Mario",
    "apellidos": "Sanchez Castro",
    "correo": "mario@correo.com",
    "telefono": "3145478787",
    "password": "jkajkajkajka"}' \
    http://localhost:3000/user


    curl -X POST -H "Content-Type: application/json" \
    -d '{    "contenido": "hola, este es un mensaje de prueba",
    "destino": "3128206865"}' \
    http://127.0.0.1:5000/