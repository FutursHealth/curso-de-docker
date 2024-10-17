# 💻 Bienvenido al curso de Docker, From Zero to Hero!
En este documento tendréis a vuestra disposición una serie de herramientas, enlaces de interés, comandos, así como los ejemplos que se irán mostrando durante el curso para que podáis ponerlo en práctica desde vuestros equipos.

## ✏️ Instala Docker:
### - Linux (recomendamos Ubuntu):
  [Install Docker Desktop for Linux](https://docs.docker.com/desktop/install/linux/)  
  [Install Docker Engine for Linux (console)](https://docs.docker.com/engine/install/)
### - MacOS:
  [Install Docker Desktop for MacOS](https://docs.docker.com/desktop/install/mac-install/)
### - Windows:
  [Install Docker Desktop for Windows](https://docs.docker.com/desktop/install/windows-install/)
### - Windows Server (recomendamos Docker CE):
  [Install Docker Engine for Windows Server](https://learn.microsoft.com/es-es/virtualization/windowscontainers/quick-start/set-up-environment?tabs=dockerce#windows-server-1)

  
## ✏️ Comandos mas frecuentes:
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
  
    
## 📗 Ejercicios prácticos:

### 1️⃣ Ejercicio:
