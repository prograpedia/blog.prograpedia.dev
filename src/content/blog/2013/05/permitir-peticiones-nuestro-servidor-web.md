---
title: Permitir peticiones a nuestro servidor web
description: Aprende a permitir peticiones a tu servidor web para que puedas recibir datos de otros servidores.
pubDate: 2013-05-10 13:37:00
author: Cristian Torres
#image: https://placeholdr.ai/c7eca67d-854e-41a8-aef7-45a682274bd8/300/200
image: /assets/c7eca67d-854e-41a8-aef7-45a682274bd8.png
---
Para permitir peticiones a nuestro servidor web (ponerlo online) debemos agregar el ejecutable del servicio (httpd) a la lista de programas permitidos por el firewall de windows<br />

```bash showLineNumbers=false
$ netsh firewall add allowedprogram httpd.exe "Apache2.x Web Server" ENABLE
```

