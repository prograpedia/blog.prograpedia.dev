---
title: "Reparar problemas de dependencias en Ubuntu/Debian"
description: "Cómo reparar problemas de dependencias en Ubuntu/Debian"
pubDate: 2012-10-04 16:29:00
author: "Cristian Torres"
---
Cuando tengamos un problema con alguno de nuestros paquetes que no se puede configurar podemos hacer esta pequeña maniobra.<br />

En la consola:
```bash
cd /var/cache/apt/archives
rm *
dpkg --force-depends --install *
```
