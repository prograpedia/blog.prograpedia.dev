---
title: Remover Comentarios de HTML con RegEx
description: Cómo remover comentarios de HTML con una expresión regular en JavaScript.
pubDate: 2016-03-29 20:06:00
author: Cristian Torres
---
Solamente tenemos que usar la expresión:<br />
```regexp
<!--((\n.*)+\n|[\s\w\n\"\-\.\=\/\,]+)-->
```
Y reemplazarla con un string vacío.

