<div style='center; padding: 10px;'  >

<h1>README BACK</h1>

<br>

## 👨‍💻 Equipo ( s13-23-n-react-back )

<br>

Este es el backend del proyecto SportPlay, una aplicación web desarrollada en Express con autenticación JSON Web Token (JWT) y una conexión tipo "pool" a la base de datos MySQL utilizando mysql2 para ahorrar tiempo en la creación y gestión de conexiones individuales


## Instalación de dependencias Back-End

<br>

1. Asegúrate de tener Node.js y npm instalado en tu sistema.
2. Clona este repositorio desde la rama 'dev-back':

```
git clone https://github.com/No-Country/s13-23-n-react-back/tree/dev-back
```
3. Asegúrate de encontrarte en la rama back-end:
```
git branch
```
  De no estar en la rama, posiciónate en ella:
```
git checkout back-end
```
4. Crea un archivo .env y solcita las claves necesarias para configurar el archivo, este es un ejemplo:
```
DATABASE_HOST = "HOST"
DATABASE_USER = "USER"
DATABASE_PASSWORD = "PASSWORD"
DATABASE_NAME = "DATABASE"
DATABASE_PORT = 31366
PORT = 3100
SECRET = "SECRET"

CLOUD_NAME = "NAME"
API_KEY = "API_KEY"
API_SECRET = "API_SECRET"
```
Asegúrate de ajustar los valores según tu entorno.
5. Instala las dependencias:
```
npm install
```

<br> 

### USO

Para iniciar el servidor, ejecuta el siguiente comando:
```
npm run dev
```
El servidor estará escuchando en el puerto especificado en el archivo '.env'.


<br> 

## 🛠️ Tecnologías utilizadas


![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Node](https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)
![Swagger](https://img.shields.io/badge/-Swagger-%23Clojure?style=for-the-badge&logo=swagger&logoColor=white)
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white) 
![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)

<br>

<br>

<div align='center'>
  <a href="https://www.nocountry.tech/" target="_blank">
    <img style='background-color:black;' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsukYB3HL90LSwYv_RIR2O2OlCV8Sbkx2eNHv8nRvOu8L16FxLQ0nPzY02wQ_BJOfQZw&usqp=CAU" width="200">
  </a>
</div>
