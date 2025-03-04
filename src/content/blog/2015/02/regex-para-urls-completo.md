---
title: Regex para URLs [Completa]
description: Aprende a crear expresiones regulares para validar y extraer información de URLs.
pubDate: 2015-02-03 14:43:00
author: Cristian Torres
#image: https://placeholdr.ai/7abb3c14-3a3d-4b50-a069-98a2f72508f7/300/200
image: /assets/7abb3c14-3a3d-4b50-a069-98a2f72508f7.png
---

Esta regex sirve para verificar urls completas con protocolo, subdominio, dominio, superdominio, ruta y
queryString<br />

<a href="http://regexr.com/3abih">Regexr Example</a><br />

```js
var urlRegex = /(\w+):\/\/(([\w]+)@|(\w+):(\w+)@|)((.*)\.|)([\w\-]+)\.((\w{3}\.\w{2})|(\w{3}))(:([0-9]+)|)\/(([\w\/\.]+|)(\?([\w\=\%\&]+)|)(\#(.*)|)|)/
```

Con los siguientes datos y sus respectivos indices:<br />
|Dato|Índice|
|---|---|
|Protocolo|$1|
|Usuario|$3 \| $4|
|Contraseña|$5|
|Subdominio|$7|
|Dominio|$8|
|Superdominio|$9|
|Puerto|$13|
|Ruta|$15|
|Cadena de Consulta|$16|
|Fragmento|$19|
