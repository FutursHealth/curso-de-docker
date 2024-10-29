# 💻 Bienvenido/a al curso de Docker, From Zero to Hero!
En este documento tendréis a vuestra disposición una serie de herramientas, enlaces de interés, comandos, así como los ejemplos que se irán mostrando durante el curso para que podáis ponerlo en práctica desde vuestros equipos.

# 💡 Antes de empezar ...  
A continuación os indicamos una serie de herramientas que recomendamos tener instaladas antes de comenzar el curso. La única que es estrictamente necesaria sería la de instalar Docker, aún así, si dicho requisito fuera también imposible, ponte en contacto con nosotros para que te busquemos alternativas:  

## ✏️ Instalar Docker  
### - Linux (recomendamos Ubuntu)  
  [Install Docker Desktop for Linux](https://docs.docker.com/desktop/install/linux/)  
  [Install Docker Engine for Linux (console)](https://docs.docker.com/engine/install/)  
### - MacOS  
  [Install Docker Desktop for MacOS](https://docs.docker.com/desktop/install/mac-install/)  
### - Windows  
  [Install WSL2](https://learn.microsoft.com/es-es/windows/wsl/setup/environment)  
  [Install Docker Desktop for Windows](https://docs.docker.com/desktop/install/windows-install/)  
### - Windows Server (recomendamos Docker CE)  
  [Install Docker Engine for Windows Server](https://learn.microsoft.com/es-es/virtualization/windowscontainers/quick-start/set-up-environment?tabs=dockerce#windows-server-1)  

## ✏️ Instalar Git  
Además de Docker, también recomendamos la instalación de Git para la descarga de los repositorios que iremos ofreciendo durante el curso, aunque este no es un requisito indispensable para el seguimiento del mismo.  
[Install Git for Windows & WSL2 subsystems](https://learn.microsoft.com/es-es/windows/wsl/tutorials/wsl-git#installing-git)  

## ✏️ Instalar un editor de código  
Otra herramienta que recomendamos para el curso es un editor de código, aunque al igual que Git, tampoco es necesario para el seguimiento del mismo. Nosotros recomendamos VSCode de Microsoft o Notepad++  
[Install VSCode for Windows, Mac & Linux](https://code.visualstudio.com/download)  
[Install Notepad++ for Windows](https://notepad-plus-plus.org/downloads/)  

  
# 🔖 CLI Reference
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
    

# 📚 Ejercicios  
A continuación os proponemos una serie de ejercicios que se irán resolviendo durante la clase. En ellos podrás poner en práctica todos los conceptos teóricos vistos durante la misma, así como repasar todos los comandos y pasos que se realizarán para resolver cada uno de ellos.  
Para ello será necesario clonarse o bajarse el repositorio que compartimos para este curso en [GitHub](https://github.com/FutursHealth/curso-de-docker)  

### Clonar un repositorio Git

Para clonar el repositorio de este curso, utilizaremos Git para descargar los archivos a tu máquina local. Si no tienes instalado Git en tu equipo y quieres hacerlo, [lo explicamos al inicio de este documento](https://github.com/FutursHealth/curso-de-docker/edit/main/README.md#%EF%B8%8F-instala-git).
En caso de **no tener Git instalado** también puedes descargarte el repositorio directamente [desde este link](https://github.com/FutursHealth/curso-de-docker/archive/refs/heads/main.zip) y descomprimirlo en la ruta que desees, por ejemplo `C:/Curso_Docker/`.  

**Instrucciones:** 

1. Si has instalado o tienes instalado Git en tu máquina, abre una terminal (Linux/Mac) o PowerShell (Windows).  
2. Ves hasta la ruta donde desees descargar los archivos.  
3. Ejecuta el siguiente comando para clonar el repositorio:  
    ```bash
    git clone https://github.com/FutursHealth/curso-de-docker
    ```

  Esto descargará los archivos del proyecto en tu directorio actual.

## 📗 Ejercicio 1: Empezando con Docker
En este ejercicio práctico aprenderás a clonar un repositorio, crear una imagen Docker a partir de un **Dockerfile**, construir y ejecutar un contenedor en Docker. Al finalizar, podrás acceder al frontend de la aplicación desde tu navegador.

**1. Inspeccionar el Dockerfile**  
  Una vez clonado el repositorio, es importante entender cómo está estructurado el archivo **Dockerfile**. Este archivo contiene las instrucciones necesarias para construir una imagen Docker.

  > [!IMPORTANT]
  > El **Dockerfile** es un archivo de texto que define los pasos necesarios para crear una imagen. Incluye la base de la imagen, los archivos necesarios, los comandos a ejecutar, entre otros. 

  **Tarea:**  
  - Abre el archivo `Dockerfile` ubicado dentro de la carpeta Ejercicio 1 del directorio clonado.
  - Lee cada línea e identifica:
    - Qué imagen base está utilizando.
    - Qué puertos se exponen.
    - Los comandos `COPY`, `RUN`, `WORKDIR` y `CMD`

**2. Construir la imagen Docker**  
  Ahora que entendemos el **Dockerfile**, vamos a construir la imagen de Docker a partir de este archivo.  
  
  **Instrucciones:**  
  - Navega al directorio donde clonaste el proyecto:  
    ```bash
    cd /ruta/del/proyecto/Ejercicio_1/
    ```  
  - Construye la imagen utilizando el siguiente comando:  
    ```bash
    docker build -t welcome-to-docker .
    ```  
  > [!NOTE]
  > - `-t` etiqueta la imagen con el nombre `welcome-to-docker`.
  > - El `.` indica que Docker debe buscar el **Dockerfile** en el directorio actual.  

**3. Ejecutar el contenedor**  
  Una vez que la imagen está construida, vamos a ejecutar un contenedor basado en esta imagen.  
  
  **Instrucciones:**  
  - Asegúrate de tener **Docker Desktop** corriendo en tu máquina.  
  - Ejecuta el siguiente comando para iniciar el contenedor en el puerto **8089**:  
    ```bash
    docker run -d -p 8089:3000 welcome-to-docker
    ```  
  > [!NOTE]
  > - `-d` ejecuta el contenedor en segundo plano (modo "detached").  
  > - `-p 8089:3000` mapea el puerto 8089 de tu máquina local al puerto 3000 del contenedor.  

**4. Acceder a la aplicación**  
  Ahora que el contenedor está corriendo, puedes acceder a la aplicación web.  

  **Instrucciones:**  
  - Abre tu navegador y navega a:
    ```bash
    http://localhost:8089
    ```  
  Deberías ver el frontend de la aplicación que se encuentra corriendo dentro del contenedor.

**5. Finalizar el contenedor**  
  Una vez hayas terminado de trabajar con la aplicación, es importante detener y eliminar el contenedor.  

  **Instrucciones:**  
  - Para listar todos los contenedores en ejecución, usa el siguiente comando:  
    ```bash
    docker ps
    ```  
  - Para detener el contenedor, copia el **CONTAINER ID** de la lista que te devolvió el comando anterior y ejecuta:  
    ```bash
    docker stop <CONTAINER_ID>
    ```  
  - Para eliminar el contenedor:  
    ```bash
    docker rm <CONTAINER_ID>
    ```

**🎉 ¡Felicidades! 🎉**

Has completado el ejercicio 1 de Docker. Ahora sabes cómo clonar un proyecto, construir una imagen Docker y ejecutar un contenedor.

## 📗 Ejercicio 2: CMD vs ENTRYPOINT
En este ejercicio práctico aprenderás la diferencia que existe entre los comandos CMD y ENTRYPOINT que ejecutan el contenedor. 

**1. Inspeccionar archivos**  
  Una vez tengamos en el repositorio podemos inspeccionar lo que hay dentro del archivo Dockerfile y del script. Es importante fijarse bien en el orden de las instrucciones que hay en el Dockerfile.  

  **Tarea**  
  - Abre una terminal de Powershell y accede a la ruta donde tengas ubicada la carpeta **Ejercicio 2**
  - Muestra por pantalla el contenido del archivo `Dockerfile` ubicado dentro de la carpeta Ejercicio 2 con el comando `cat .\Dockerfile`
  - Lee cada línea e identifica:
    - Qué imagen base está utilizando.
    - Los comandos `COPY`, `ENTRYPOINT` y `CMD`
  - Muestra por pantalla el contenido del archivo `script.sh` ubicado dentro de la carpeta Ejercicio 2 con el comando `cat .\script.sh`
  - Prueba el script ejecutando el siguiente comando `bash ./script.sh "linea de comandos"` y observa el resultado en la terminal

**2. Construir la imagen Docker**  
  Ahora que entendemos el Dockerfile y el script, vamos a construir la imagen de Docker a partir de este archivo  

  **Instrucciones**
  - Navega al directorio donde clonaste el proyecto:  
    ```bash
    cd /ruta/del/proyecto/Ejericio_2/
    ```  
  - Construye la imagen utilizando el siguiente comando:  
    ```bash
    docker build -t ejercicio2:v1 .
    ```
  > [!NOTE]
  > - `-t` etiqueta la imagen con el nombre `ejercicio2`.  
  > - El `:v1` etiqueta a la imagen con la version 'v1'.  
  > - El `.` indica que Docker debe buscar el **Dockerfile** en el directorio actual.  

**3. Ejecutar el contenedor**  
  Una vez que la imagen está construida, vamos a ejecutar un contenedor basado en esta imagen de diferentes maneras y observaremos las diferencias.  

  **Instrucciones:**  
  - Asegúrate de tener **Docker Desktop** corriendo en tu máquina.  
  - Ejecuta el siguiente comando para iniciar el contenedor:  
    ```bash
    docker run ejercicio2:v1
    ```  
  - Observa el resultado en la terminal  
  - Ejecuta ahora el siguiente comando para iniciar un nuevo contenedor:  
    ```bash
    docker run ejercicio2:v1 'linea de comandos'
    ```  
  - Observa de nuevo la terminal para ver el nuevo resultado.  

**4. Cambiar el Dockerfile**  
  Editaremos ahora el Dockerfile del Ejercicio 2 de tal forma que el comando ENTRYPOINT esté después del CMD.

  **Tarea**  
  Ejecuta cualquier editor de texto y abre el archivo Dockerfile de la carpeta Ejercicio2 y cambia el texto para que se quede de la siguiente forma:
  ```Dockerfile
  FROM ubuntu
  COPY script.sh /usr/local/bin/script.sh
  CMD ["CMD Dockerfile"]
  ENTRYPOINT ["/usr/local/bin/script.sh"]
  ```  
**5. Construir nueva imagen Docker**  
  Ahora que hemos cambiado el orden de los comandos construiremos una nueva imagen para ver el resultado del ENTRYPOINT  

  **Instrucciones**  
  - Navega al directorio donde clonaste el proyecto:  
    ```bash
    cd /ruta/del/proyecto/Ejericio2/
    ```  
  - Construye la imagen utilizando el siguiente comando:  
    ```bash
    docker build -t ejercicio2:v2 .
    ```
  > [!NOTE]
  > - `-t` etiqueta la imagen con el nombre `ejercicio2`.
  > - El `:v2` etiqueta a la imagen con la version 'v2'.
  > - El `.` indica que Docker debe buscar el **Dockerfile** en el directorio actual.

**6. Ejecuta un nuevo contenedor**  
  Una vez que la imagen está construida, vamos a ejecutar un contenedor basado en esta imagen versión 2 de diferentes maneras y observaremos las diferencias.  

  **Instrucciones:**  
  - Asegúrate de tener **Docker Desktop** corriendo en tu máquina.  
  - Ejecuta el siguiente comando para iniciar el contenedor:  
    ```bash
    docker run ejercicio2:v2
    ```
  - Observa el resultado en la terminal  
  - Ejecuta ahora el siguiente comando para iniciar un nuevo contenedor:  
    ```bash
    docker run ejercicio2:v2 'linea de comandos'
    ```  
  - Observa de nuevo la terminal para ver el nuevo resultado.  

**🎉 ¡Felicidades! 🎉**  

Has completado el ejercicio 2 de Docker. Ahora sabes la diferencia entre los comandos CMD y ENTRYPOINT.  

## 📗 Ejercicio 3: Subir una imagen a Docker Hub  
  En este ejercicio práctico aprenderás como subir una imagen a un repositorio. Existen repositorios públicos y privados. En este ejercicio usaremos el repositorio público de Docker Hub


#### ¿Qué es un repositorio de imágenes?

Un repositorio de imágenes de Docker es un lugar en la nube o en un servidor donde se guardan imágenes de Docker. El repositorio permite que otras personas o equipos descarguen estas imágenes y las utilicen en sus propios proyectos, facilitando la distribución y reutilización de aplicaciones en distintos entornos sin tener que configurarlas desde cero.
El ejemplo más común de repositorio de imágenes es Docker Hub, que es una plataforma pública donde se almacenan muchas imágenes de aplicaciones listas para usar. Hay otros repositorios que también son muy conocidos y usados como **Azure Container Registry** de Microsoft, **Amazon Elastic Container Registry** de AWS o **Google Container Registry** de Google Cloud.

### 1. Comprobar imágenes locales

Lo primero que haremos será comprobar qué imágenes tenemos ya *cocinadas* o *descargadas* localmente.

#### Instrucciones

1. Usa el comando para listar las imágenes de Docker
  `docker images`
2. Puedes inspeccionar una imagen en concreto para ver más detalles sobre las capas, uso de memoria, etc.
  `docker inspect <ID_image>`

### 2. Identificarnos en el registro

Para poder subir imágenes a un repositorio, tenemos que estar identificados previamente en el registro. Para ello vamos a registrarnos en Docker Hub.

#### Instrucciones

1. Registrate con tu usuario y contraseña en Docker Hub
  ```powershell
  docker login docker.io
  ```
2. Accede usando tu usuario y contraseña.

### 3. Etiquetar la imagen

Para poder subir la imagen al repositorio, primero tenemos que etiquetar la imágen correctamente, siguiendo la convención establecida por el registro al que queremos subir la imagen. En nuestro caso usaremos la nomenclatura establecida para Docker Hub.

#### Instrucciones

1. Etiquetamos la imagen con el siguiente comando:
```powershell
docker tag <image_ID> cursodockerfuturs/<Nombre_Participante>
```

### 4. Subir la imagen

Por último, una vez tenemos la imagen cocinada, estamos identificados en el registro y hemos taggeado la imagen correctamente, ya podemos subir la imagen al repositorio de Docker Hub.

#### Instrucciones

1. Subimos la imagen al repositorio con el siguiente comando:
```powershell
docker push cursodockerfuturs/<Nombre_Participante>:tag
```

### 🎉 ¡Felicidades! 🎉

Has completado el ejercicio 3 de Docker. Ahora sabes como subir una imagen al registro público de Docker Hub.

## 📗 Ejercicio 4: Ejecutar una imagen de Docker Hub

En este ejercicio práctico aprenderás a descargar y ejecutar una imagen de un repositorio en un servidor externo. SImulando así la entrega de imágenes de aplicaciones con versiones específicas y su uso fuera del servidor local.

>[!NOTE]
 > Es importante tener una cuenta en Docker Hub para poder usar el servidor externo que nos proporciona la plataforma de Docker para realizar las pruebas y demos.

### 1. Acceder al servidor externo

Lo primero que haremos será acceder a la URL https://labs.play-with-docker.com/. Este laboratorio proporcionado por Docker nos permitirá conectarnos a un servidor externo y realizar el ejercicio.

### 2. Descargar la imagen

Como previamente, en el ejercicio anterior, hemos subido las imágenes a un repositorio público, ya están accesibles por todo el mundo para su descarga.
Descargaremos la imagen del compañero que queramos en nuestro servidor externo.

#### Instrucciones:

1. Descargar la imagen con el siguiente comando  
```bash
docker pull cursodockerfuturs/<Nombre_Participante>
```

### 3. Ejecutar el contenedor

Ya hemos realizado este paso en ejercicios anteriores. Vamos a ejecutar un contenedor de la imagen que hayamos elegido por el puerto 8000

#### Instrucciones:

1. Ejecutar el contenedor por el puerto 8000  
```bash
docker run -d -d 8000:3000 <Nombre_Imagen>
```

### 4. Acceder a la aplicación

Exploraremos el puerto 8000 del servidor externo para acceder a la aplicación web.

#### Instrucciones:

Tendremos que permitir las ventanas emergentes (pop ups) para poder abrir una pestaña nueva con el servidor en el puerto 8000.

### 🎉 ¡Felicidades! 🎉

Has completado el ejercicio 4 de Docker. Ahora sabes como descargar una imagen del registro público de Docker Hub y usarla en servidores externos.

# 💥 Entrando en trincheras:  
En este apartado, queremos compartir algunos casos de éxito que hemos puesto en uso en FutuRS e incluso algunos de ellos también en nuestro día a día en el ámbito personal. Para ello, compartimos con vosotros algunas de las soluciones Docker de utilidad que hemos tanto desarrollado internamente como descargado de otras fuentes.

### 1. Vaultwarden (gestor de contraseñas)
Vaultwarden es una implementación ligera y de código abierto del popular gestor de contraseñas Bitwarden. Es ideal para usuarios que desean tener un control total sobre sus datos y no depender de servicios en la nube. Con Docker, es fácil implementar y mantener este tipo de herramientas en un entorno local o en el servidor.
#### Pasos a seguir:
1. **Buscar la imagen en Docker Hub (también se puede buscar directamente en la web de Docker Hub)**  
   ```bash
   docker search vaultwarden/server
   ```  
2. **Descargar la imagen de VaultWarden**  
   ```bash
   docker pull vaultwarden/server:latest
   ```  
3. **Ejecutar el contenedor de VaultWarden**  
   ```bash
   docker run -d --name vaultwarden -v /vw-data/:/data/ -p 8080:80 vaultwarden/server:latest
   ```  
   - **-d:** Ejecuta el contenedor en segundo plano (detached).  
   - **--name vaulwarden:** Asigna un nombre al contenedor para identificarlo fácilmente.
   - **-v /vw-data/:/data/:** Este comando se utiliza para montar volúmenes de datos persistentes, siendo /vw-data/ una ruta local del sistema host y /data/ la ruta dentro del contenedor.
   - **-p 8080:80:** Asigna el puerto 80 del contenedor al puerto 8080 de tu sistema local. Esto te permitirá acceder a Vaultwarden en <http://localhost:8080>.  
4. **Verifica que Vaultwarden está en ejecución**  
   ```bash
   docker ps
   ```  
5. **Acceder a servicio VaultWarden**  
   Abre tu navegador web y dirígete a <http://localhost:8080>. Deberías ver la interfaz de Vaultwarden lista para ser configurada.
  **+INFO:** <https://hub.docker.com/r/vaultwarden/server>  

### 2. CLI de Powershell multiversión
### 3. Servicio ligero de SQL Server
### 4. Crear entorno de desarrollo con Deno (JavaScript runtime)
### 5. BONUS EXTRA: Servicio de libros Calibre  
Calibre es una herramienta de gestión de libros electrónicos que permite organizar, convertir y visualizar tus e-books. Aquí, utilizaremos Docker para ejecutar el servidor de Calibre, lo que nos permitirá administrar nuestra colección de libros electrónicos desde cualquier dispositivo de la red.
1. **Buscar la imagen en Docker Hub (también se puede buscar directamente en la web de Docker Hub)**  
  ```bash
  docker search calibre
  ```
2. **Descargar la imagen de Calibre**  
  ```bash
  docker pull linuxserver/calibre:latest
  ```
3. **Ejecutar el contenedor de Calibre**  
  ```bash
  docker run -d --name calibre -p 8081:8080 -v /calibre-config/:/config/ -v /calibre/books/:/books/ linuxserver/calibre:latest
  ```
4. **Verifica que Calibre está en ejecución**  
  ```bash
  docker ps
  ```
5. **Acceder a servicio de Calibre**
   Abre tu navegador web y dirígete a <http://localhost:8081>. Deberías ver la interfaz de Calibre lista para ser configurada.  
7. **Dado los recursos consumidos por este servicio, paramos el contenedor**  
  ```bash
  docker stop <CONTAINER_ID>
  ```
  **+INFO:** <https://github.com/linuxserver/docker-calibre>  

>[!TIP]
 > En el siguiente curso de "Docker, From Zero to Hero like a Boss" profundizaremos mucho mas en la configuración de flags como es el caso de los volúmenes visto en los ejemplos anteriores.

# 📁 Recursos adicionales

- [Documentación oficial de Docker](https://docs.docker.com/get-started/)
- [Dockerfile reference](https://docs.docker.com/engine/reference/builder/)
