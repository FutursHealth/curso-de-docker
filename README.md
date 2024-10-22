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

  ### Trabajando con imágenes
  | Comando                                     | Descripción                                                                       |
  |-------------------------------------------- | --------------------------------------------------------------------------------- |
  |`$ docker image ls`                          |Lista todas las imágenes descargasdas en nuestro host                              |
  |`$ docker pull [IMAGE]:[TAG]`                |Descarga la imagen especificada de cualquier HUB de imágenes (públicas o privadas) |
  |`$ docker image rm [IMAGE]`                  |Elimina una imagen (siempre y cuando no esté siendo usada por un contenedor)       |
  |`$ docker rmi [IMAGE]:[TAG]`                 |Elimina una imagen local                                                           |
  |`$ docker build .`                           |Crea una imagen local                                                              |

> [!TIP]
> Las imágenes no son un sistema operativo completo. No incluyen el kernel ni los módulos del kernel (controladores).  
> El host proporciona el kernel, una gran diferencia en comparación con las máquinas virtuales.

  ### Trabajando con contenedores
  | Comando                                       | Descripción                                                                          |
  |--------                                       | -----------                                                                          |
  |`$ docker run [IMAGE]`                         |Crea y ejecuta un contenedor                                                          |
  |`$ docker container ls`  OR `$ docker ps`      |Lista los contenedores en ejecución                                                   |
  |`$ docker container ls -a` OR `$ docker ps -a` |Lista todos los contenedores                                                          |
  |`$ docker stop [CONTAINER]`                    |Detiene un contenedor                                                                 |
  |`$ docker rm [CONTAINER]`                      |Elimina un contenedor **detenido** (no se puede eliminar contenedores en ejecución)   |
  |`$ docker rm -f [CONTAINER]`                   |Elimina un contenedor en ejecución de manera forzada                                  |
  |`$ docker rm $(docker ps -a -f status=exited -f status=created -q)` |Elimina una lista de contenedores con los filtros que apliquemos |
  |`$ docker logs [CONTAINER]`                    |Muestra los logs de un contenedor                                                     |
  |`$ docker top [CONTAINER]`                     |Lista los procesos en ejecución de un contenedor                                      | 

  > [!TIP]
  > Los contenedores de Docker a menudo se comparan con máquinas virtuales, pero en realidad son solo procesos que se ejecutan en tu sistema operativo anfitrión. En Windows y Mac, Docker se ejecuta en una mini máquina virtual, por lo que para ver los procesos necesitarás conectarte directamente a ella. Sin embargo, en Linux puedes ejecutar "ps aux" y ver los procesos directamente.

  ### Trabajando con Docker Build
  | Comando                                       | Descripción                                                                       |
  |--------                                       | -----------                                                                       |
  |`$ docker build -t [IMAGE]:[TAG]`              |Construye una imagen y la etiqueta con un nombre y tag específicos                 |
  |`$ docker build -f /path/to/Dockerfile`        |Especifica un Dockerfile diferente al predeterminado (./Dockerfile)                |
  |`$ docker build --build-arg VAR=valor`         |Construye una imagen con variables de entorno especificadas en tiempo de ejecución |
  |`$ docker build --no-cache`                    |Construye una imagen sin usar la cache de las capas de instrucción del Dockerfile  |
  |`$ docker build --pull`                        |Intenta extraer una versión más reciente de la imagen base antes de construir      |

  ### Trabajando con Docker Run
  | Comando                                       | Descripción                                        |
  |--------                                       | -----------                                        |
  |`$ docker run [IMAGE] --name [NOMBRE]`         |Asigna un nombre especifico al contenedor           |
  |`$ docker run [IMAGE] -d`                      |Crea y ejecuta un contenedor en segundo plano       |
  |`$ docker run [IMAGE] -p [HOST]:[CONTENEDOR]`  |Mapea un puerto del host a un puerto del contenedor |
  |`$ docker run [IMAGE] -e "VAR=valor"`          |Establece una variable de entorno en el contenedor  |
  |`$ docker run [IMAGE] -it`                     |Crea y ejecuta un contenedor en modo interactivo    |  
    
## 📗 Ejercicio 1: Empezando con Docker
En este ejercicio práctico aprenderás a clonar un repositorio, crear una imagen Docker a partir de un **Dockerfile**, construir y ejecutar un contenedor en Docker. Al finalizar, podrás acceder al frontend de la aplicación desde tu navegador.

### 1. Clonar un repositorio Git

Lo primero que haremos es clonar un repositorio que contiene un proyecto básico de Docker. Utilizaremos Git para descargar los archivos a tu máquina local.  
En caso de **no tener Git instalado** descárgate el archivo **Dockerfile** de [aquí mismo]('.Ejercicio 1/Dockerfile') y salta al 2º paso.

#### Instrucciones:

1. Abre una terminal (Linux/Mac) o PowerShell (Windows).
2. Ejecuta el siguiente comando para clonar el repositorio:

    ```bash
    git clone https://github.com/FutursHealth/curso-de-docker
    ```

Esto descargará los archivos del proyecto en tu directorio actual.

### 2. Inspeccionar el Dockerfile

Una vez clonado el repositorio, es importante entender cómo está estructurado el archivo **Dockerfile**. Este archivo contiene las instrucciones necesarias para construir una imagen Docker.

#### ¿Qué es el Dockerfile?

El **Dockerfile** es un archivo de texto que define los pasos necesarios para crear una imagen. Incluye la base de la imagen, los archivos necesarios, los comandos a ejecutar, entre otros.

#### Tarea:

- Abre el archivo `Dockerfile` ubicado dentro de la carpeta Ejercicio 1 del directorio clonado.
- Lee cada línea e identifica:
  - Qué imagen base está utilizando.
  - Qué puertos se exponen.
  - Los comandos `COPY`, `RUN`, `WORKDIR` y `CMD`

### 3. Construir la imagen Docker

Ahora que entendemos el **Dockerfile**, vamos a construir la imagen de Docker a partir de este archivo.

#### Instrucciones:

1. Navega al directorio donde clonaste el proyecto:

    ```bash
    cd /ruta/del/proyecto/Ejercicio 1/
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
    docker run -d -p 8089:3000 welcome-to-docker
    ```
  >[!NOTE]
  >- `-d` ejecuta el contenedor en segundo plano (modo "detached").
  >- `-p 8089:3000` mapea el puerto 8089 de tu máquina local al puerto 3000 del contenedor.

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

### 🎉 ¡Felicidades! 🎉

Has completado el ejercicio 1 de Docker. Ahora sabes cómo clonar un proyecto, construir una imagen Docker y ejecutar un contenedor.

## 📗 Ejercicio 2: CMD vs ENTRYPOINT
En este ejercicio práctico aprenderás la diferencia que existe entre los comandos CMD y ENTRYPOINT que ejecutan el contenedor. 

### 1. Clonar un repositorio Git

Lo primero que haremos en este ejercicio es clonar el repositorio que contiene un Dockerfile muy básico de Docker y un script en bash para mostrar las diferencias.
En caso de **no tener Git instalado** descárgate el archivo Dockerfile del repositorio de carpetas más arriba y salta al paso 2.

#### Instrucciones:

1. Abre una terminal (Linux/Mac) o PowerShell (Windows).
2. Ejecuta el siguiente comando para clonar el repositorio:

    ```bash
    git clone https://github.com/FutursHealth/curso-de-docker
    ```

Esto descargará los archivos del proyecto en tu directorio actual.

### 2. Inspeccionar archivos

Una vez tengamos en el repositorio podemos inspeccionar lo que hay dentro del archivo Dockerfile y del script. Es importante fijarse bien en el orden de las instrucciones que hay en el Dockerfile.

#### Tarea

- Abre una terminal de Powershell y accede a la ruta donde tengas ubicada la carpeta **Ejercicio 2**
- Muestra por pantalla el contenido del archivo `Dockerfile` ubicado dentro de la carpeta Ejercicio 2 con el comando `cat .\Dockerfile`
- Lee cada línea e identifica:
  - Qué imagen base está utilizando.
  - Los comandos `COPY`, `ENTRYPOINT` y `CMD`
- Muestra por pantalla el contenido del archivo `script.sh` ubicado dentro de la carpeta Ejercicio 2 con el comando `cat .\script.sh`
- Prueba el script ejecutando el siguiente comando `bash ./script.sh "linea de comandos"` y observa el resultado en la terminal

### 3. Construir la imagen Docker

Ahora que entendemos el Dockerfile y el script, vamos a construir la imagen de Docker a partir de este archivo

#### Instrucciones
1. Navega al directorio donde clonaste el proyecto:

    ```bash
    cd /ruta/del/proyecto/Ejericio2/
    ```

2. Construye la imagen utilizando el siguiente comando:

    ```bash
    docker build -t ejercicio2:v1 .
    ```
  >[!NOTE]
  > - `-t` etiqueta la imagen con el nombre `ejercicio2`.
  > - El `:v1` etiqueta a la imagen con la version 'v1'.
  > - El `.` indica que Docker debe buscar el **Dockerfile** en el directorio actual.

### 4. Ejecutar el contenedor

Una vez que la imagen está construida, vamos a ejecutar un contenedor basado en esta imagen de diferentes maneras y observaremos las diferencias.

#### Instrucciones:
1. Asegúrate de tener **Docker Desktop** corriendo en tu máquina.
2. Ejecuta el siguiente comando para iniciar el contenedor:
    ```bash
    docker run ejercicio2:v1
    ```
3. Observa el resultado en la terminal
4. Ejecuta ahora el siguiente comando para iniciar un nuevo contenedor:
    ```bash
    docker run ejercicio2:v1 'linea de comandos'
    ```
5. Observa de nuevo la terminal para ver el nuevo resultado.

### 5. Cambiar el Dockerfile

Editaremos ahora el Dockerfile del Ejercicio 2 de tal forma que el comando ENTRYPOINT esté después del CMD.

#### Tarea

Ejecuta cualquier editor de texto y abre el archivo Dockerfile de la carpeta Ejercicio2 y cambia el texto para que se quede de la siguiente forma:
```Dockerfile
FROM ubuntu
COPY script.sh /usr/local/bin/script.sh
CMD ["CMD Dockerfile"]
ENTRYPOINT ["/usr/local/bin/script.sh"]
```
### 6. Construir nueva imagen Docker

Ahora que hemos cambiado el orden de los comandos construiremos una nueva imagen para ver el resultado del ENTRYPOINT

#### Instrucciones
1. Navega al directorio donde clonaste el proyecto:

    ```bash
    cd /ruta/del/proyecto/Ejericio2/
    ```

2. Construye la imagen utilizando el siguiente comando:

    ```bash
    docker build -t ejercicio2:v2 .
    ```
  >[!NOTE]
  > - `-t` etiqueta la imagen con el nombre `ejercicio2`.
  > - El `:v2` etiqueta a la imagen con la version 'v2'.
  > - El `.` indica que Docker debe buscar el **Dockerfile** en el directorio actual.

### 7. Ejecuta un nuevo contenedor

Una vez que la imagen está construida, vamos a ejecutar un contenedor basado en esta imagen versión 2 de diferentes maneras y observaremos las diferencias.

#### Instrucciones:
1. Asegúrate de tener **Docker Desktop** corriendo en tu máquina.
2. Ejecuta el siguiente comando para iniciar el contenedor:
    ```bash
    docker run ejercicio2:v2
    ```
3. Observa el resultado en la terminal
4. Ejecuta ahora el siguiente comando para iniciar un nuevo contenedor:
    ```bash
    docker run ejercicio2:v2 'linea de comandos'
    ```
5. Observa de nuevo la terminal para ver el nuevo resultado.

### 🎉 ¡Felicidades! 🎉

Has completado el ejercicio 2 de Docker. Ahora sabes la diferencia entre los comandos CMD y ENTRYPOINT.

## 📁 Recursos adicionales

- [Documentación oficial de Docker](https://docs.docker.com/get-started/)
- [Dockerfile reference](https://docs.docker.com/engine/reference/builder/)