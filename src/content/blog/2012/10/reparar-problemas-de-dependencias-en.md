---
title: "Reparar problemas de dependencias en Ubuntu/Debian"
description: "Cómo reparar problemas de dependencias en Ubuntu/Debian"
pubDate: 2012-10-04 16:29:00
author: "Cristian Torres"
#image: https://placeholdr.ai/caf5b26e-7341-40d0-9c4d-9125651f63ed/300/200
image: /assets/caf5b26e-7341-40d0-9c4d-9125651f63ed.png
---

Cuando tengamos un problema con alguno de nuestros paquetes que no se puede
configurar podemos hacer esta pequeña
maniobra.<br />

En la consola:

```bash
cd /var/cache/apt/archives
rm *
dpkg --force-depends --install *
```
