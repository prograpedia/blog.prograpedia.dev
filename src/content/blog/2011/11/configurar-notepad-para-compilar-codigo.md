---
title: "Configurar Notepad++ para compilar código java"
description: "Configurar Notepad++ para compilar código java utilizando un archivo por lotes"
pubDate: 2011-11-22 09:57:00
author: "Cristian Torres"
#image: https://placeholdr.ai/9708e138-db71-4239-8cc3-3f09a91db085/300/200
image: /assets/9708e138-db71-4239-8cc3-3f09a91db085.png
---

A mucha gente le encanta la simplicidad y utilidad de este bloc de notas
avanzado. Una de sus utilidades es la de
ejecutar comandos externos, de manera que aprovechando esta función podemos
compilar y ejecutar nuestros programas en
java, veamos como se hace:

1. Creamos un archivo por lotes `compilar_java.bat` con el siguiente contenido:

> [!TIP]
El archivo por lotes debe estar en la misma carpeta donde se encuentra el
archivo que vamos a compilar.

<br/> 

```bash title="compilar_java.bat"
echo off
PATH="c:\Program Files\Java\jdk1.6.0_07\bin"
TITLE COMPILANDO %1
CLS
echo Generando la clase...
javac %1
echo Ejecutando la clase:
echo .
echo .
java %2
pause
```
<br/>

> [!IMPORTANT/IMPORTANTE]
La variable PATH debemos cambiarla por nuestro compilador de java instalado
en nuestro sistema.

2. Vamos a notepad++, damos al menu ejecutar y escribimos **_$(NPP_DIRECTORY)_**
y damos a ejecutar. Esta operación nos abrirá la carpeta desde la cual se
ejecuta el programa, es ahí donde debemos guardar el archivo
`compilar_java.bat`.

3. Una vez guardado el archivo por lotes vamos de nuevo al menu 'ejecutar' e
ingresamos el siguiente texto:

```bash
$(NPP_DIRECTORY)\compilar_java.bat $(FILE_NAME) $(NAME_PART)
```
