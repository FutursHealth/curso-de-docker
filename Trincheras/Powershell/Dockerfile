# Curso "Docker, From Zero to Hero"

# Dockerfile para ejecutar una consola de PowerShell en la versión especificada

# Especifica la imagen base de PowerShell
# Puedes cambiar ARG VERSION para utilizar una versión específica de PowerShell
ARG VERSION=lts-buster-slim
FROM mcr.microsoft.com/powershell:$VERSION

# Añadir metadatos para identificar la imagen
LABEL maintainer="devops@futurshealth.com" \
      version="1.0" \
      description="Contenedor para ejecutar una consola de PowerShell en una versión específica."

# Establecer un directorio de trabajo
WORKDIR /app

# Crear un usuario no root para mejorar la seguridad
RUN adduser --disabled-password --gecos "" pwshuser

# Cambiar al usuario no root
USER pwshuser

# Define el punto de entrada para que la consola de PowerShell esté disponible al iniciar el contenedor
ENTRYPOINT [ "pwsh" ]

# Añadir un healthcheck para comprobar que PowerShell está ejecutándose correctamente
HEALTHCHECK CMD ["pwsh", "-c", "echo 'PowerShell is running'"]