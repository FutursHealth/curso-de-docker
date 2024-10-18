# 💻 Bienvenido/a al curso de Docker, From Zero to Hero!
En este documento tendréis a vuestra disposición una serie de herramientas, enlaces de interés, comandos, así como los ejemplos que se irán mostrando durante el curso para que podáis ponerlo en práctica desde vuestros equipos.

## ✏️ Instala Docker:
### - Linux (recomendamos Ubuntu):  
  [Install Docker Desktop for Linux](https://docs.docker.com/desktop/install/linux/)  
  [Install Docker Engine for Linux (console)](https://docs.docker.com/engine/install/)  
### - MacOS:  
  [Install Docker Desktop for MacOS](https://docs.docker.com/desktop/install/mac-install/)  
### - Windows:  
  [Install WSL2](https://learn.microsoft.com/es-es/windows/wsl/setup/environment)  
  [Install Docker Desktop for Windows](https://docs.docker.com/desktop/install/windows-install/)  
### - Windows Server (recomendamos Docker CE):  
  [Install Docker Engine for Windows Server](https://learn.microsoft.com/es-es/virtualization/windowscontainers/quick-start/set-up-environment?tabs=dockerce#windows-server-1)  

## ✏️ Instala Git:  
Además de Docker, también recomendamos la instalación de Git para la descarga de los repositorios que iremos ofreciendo durante el curso, aunque este no es un requisito indispensable para el seguimiento del mismo.  
[Install Git for Windows & WSL2 subsystems](https://learn.microsoft.com/es-es/windows/wsl/tutorials/wsl-git#installing-git)  

## ✏️ Instala un editor de código:  
Otra herramienta que recomendamos para el curso es un editor de código, aunque al igual que Git, tampoco es necesario para el seguimiento del mismo. Nosotros recomendamos VSCode de Microsoft o Notepad++  
[Install VSCode for Windows, Mac & Linux](https://code.visualstudio.com/download)  
[Install Notepad++ for Windows](https://notepad-plus-plus.org/downloads/)  



  
## 🔖 Comandos mas frecuentes:
  ### Docker Commands, Help & Tips
  | Comando              | Descripción                                      |
  |--------              | -----------                                      |
  |`$ docker`            |Ver comandos de docker                            |
  |`$ docker version`    |Docker version info                               |
  |`$ docker info`       |Mostrar información como nº de contenedores, etc. |

  ### Trabajando con contenedores
  | Comando                                     | Descripción                                      |
  |--------                                     | -----------                                      |
  |`$ docker container run -it -p 80:80 nginx`  |Crea y ejecuta un contenedor en modo interactivo  |
  |`$ docker container run -d -p 80:80 nginx`   |Crea y ejecuta un contenedor en segundo plano     |
  |`$ docker container run -d -p 80:80 --name nginx-server nginx`  |Nombrar un contenedor          |
  |`$ docker container ls`  OR `$ docker ps`    |Listar todos los contenedores en ejecución        |
  |`$ docker container ls -a` OR `$ docker ps -a` |Listar todos los contenedores (en ejecución o parados) |
  |`$ docker container stop [ID]`               |Parar un contenedor                               |
  |`$ docker stop $(docker ps -aq)`             |Parar todos los contenedores en ejecución         |
  |`$ docker container rm [ID]`                 |Eliminar un contenedor (no se pueden eliminar contenedores en ejecución |
  |`$ docker container rm -f [ID]`              |Eliminar un contenedor en ejecución de forma forzada |
  |`$ docker rm $(docker ps -aq)`               |Eliminar todos los contendores que no están en ejecución |
  |`$ docker container logs [NAME]`             |Obtener los logs de un contenedor                 |
  |`$ docker container top [NAME]`              |Listar los procesos en ejecución de un contenedor |  

  > [!TIP]
  > Los contenedores de Docker a menudo se comparan con máquinas virtuales, pero en realidad son solo procesos que se ejecutan en tu sistema operativo anfitrión. En Windows y Mac, Docker se ejecuta en una mini máquina virtual, por lo que para ver los procesos necesitarás conectarte directamente a ella. Sin embargo, en Linux puedes ejecutar "ps aux" y ver los procesos directamente.

  ### Trabajando con imágenes
  | Comando                                     | Descripción                                      |
  |--------                                     | -----------                                      |
  |`$ docker image ls`                          |Lista todas las imágenes subidas a nuestro host   |
  |`$ docker pull [IMAGE]`                      |Descarga la imagen especificada de cualquier HUB de imágenes (públicas o privadas)|
  |`$ docker image rm [IMAGE]`                  |Elimina una imagen (siempre y cuando no esté siendo usada por un contenedor)|
  |`$ docker rmi $(docker images -a -q`         |Elimina todas las imágenes                        |

> [!TIP]
> Las imágenes no son un sistema operativo completo. No incluyen el kernel ni los módulos del kernel (controladores).  
> El host proporciona el kernel, una gran diferencia en comparación con las máquinas virtuales.
  
    
## 📗 Ejercicio 1: Empezando con Docker
En este ejercicio práctico aprenderás a clonar un repositorio, crear una imagen Docker a partir de un **Dockerfile**, construir y ejecutar un contenedor en Docker. Al finalizar, podrás acceder al frontend de la aplicación desde tu navegador.

### 1. Clonar un repositorio Git

Lo primero que haremos es clonar un repositorio que contiene un proyecto básico de Docker. Utilizaremos Git para descargar los archivos a tu máquina local.  
En caso de **no tener Git instalado** descárgate el archivo **Dockerfile** de [aquí mismo](./Dockerfile) y salta al 2º paso.

#### Instrucciones:

1. Abre una terminal (Linux/Mac) o PowerShell (Windows).
2. Ejecuta el siguiente comando para clonar el repositorio:

    ```bash
    git clone https://github.com/docker/welcome-to-docker
    ```

Esto descargará los archivos del proyecto en tu directorio actual.

### 2. Inspeccionar el Dockerfile

Una vez clonado el repositorio, es importante entender cómo está estructurado el archivo **Dockerfile**. Este archivo contiene las instrucciones necesarias para construir una imagen Docker.

#### ¿Qué es el Dockerfile?

El **Dockerfile** es un archivo de texto que define los pasos necesarios para crear una imagen. Incluye la base de la imagen, los archivos necesarios, los comandos a ejecutar, entre otros.

#### Tarea:

- Abre el archivo `Dockerfile` ubicado dentro del directorio clonado.
- Lee cada línea e identifica:
  - Qué imagen base está utilizando.
  - Qué puertos se exponen.
  - Los comandos `COPY`, `RUN`, etc.

### 3. Construir la imagen Docker

Ahora que entendemos el **Dockerfile**, vamos a construir la imagen de Docker a partir de este archivo.

#### Instrucciones:

1. Navega al directorio donde clonaste el proyecto:

    ```bash
    cd /ruta/del/proyecto/welcome-to-docker/
    ```

2. Construye la imagen utilizando el siguiente comando:

    ```bash
    docker build -t welcome-to-docker .
    ```
  >[!NOTE]
  > - `-t` etiqueta la imagen con el nombre `welcome-to-docker`.
  > - El `.` indica que Docker debe buscar el **Dockerfile** en el directorio actual.

### 4. Ejecutar el contenedor
Una vez que la imagen está construida, vamos a ejecutar un contenedor basado en esta imagen.

#### Instrucciones:
1. Asegúrate de tener **Docker Desktop** corriendo en tu máquina.
2. Ejecuta el siguiente comando para iniciar el contenedor en el puerto **8089**:
    ```bash
    docker run -d -p 8089:80 welcome-to-docker
    ```
  >[!NOTE]
  >- `-d` ejecuta el contenedor en segundo plano (modo "detached").
  >- `-p 8089:80` mapea el puerto 8089 de tu máquina local al puerto 80 del contenedor.

### 5. Acceder a la aplicación
Ahora que el contenedor está corriendo, puedes acceder a la aplicación web.

#### Instrucciones:
1. Abre tu navegador y navega a:
    ```
    http://localhost:8089
    ```
Deberías ver el frontend de la aplicación que se encuentra corriendo dentro del contenedor.

### 6. Finalizar el contenedor
Una vez hayas terminado de trabajar con la aplicación, es importante detener y eliminar el contenedor.

#### Instrucciones:
1. Para listar todos los contenedores en ejecución, usa el siguiente comando:
    ```bash
    docker ps
    ```
2. Para detener el contenedor, copia el **CONTAINER ID** de la lista que te devolvió el comando anterior y ejecuta:
    ```bash
    docker stop <CONTAINER_ID>
    ```
3. Para eliminar el contenedor:

    ```bash
    docker rm <CONTAINER_ID>
    ```

#### 🎉 ¡Felicidades! 🎉

Has completado el ejercicio 1 de Docker. Ahora sabes cómo clonar un proyecto, construir una imagen Docker y ejecutar un contenedor.

#### Recursos adicionales

- [Documentación oficial de Docker](https://docs.docker.com/get-started/)
- [Dockerfile reference](https://docs.docker.com/engine/reference/builder/)


