---
title: "Remover Comentarios de HTML con RegEx"
description: "Cómo remover comentarios de HTML con una expresión regular en JavaScript."
pubDate: 2016-03-29 20:06:00
author: Cristian Torres
#image: https://placeholdr.ai/4e6030b3-b2c6-4eae-8bc9-6145b2241e90/300/200
image: /assets/4e6030b3-b2c6-4eae-8bc9-6145b2241e90.png
---

Solamente tenemos que usar la expresión:<br />

```regexp
<!--((\n.*)+\n|[\s\w\n\"\-\.\=\/\,]+)-->
```

Y reemplazarla con un string vacío.

