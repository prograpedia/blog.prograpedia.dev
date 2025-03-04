---
title: Eliminar registros duplicados de MySQL
description: Aprende a eliminar registros duplicados de una tabla en MySQL.
pubDate: 2014-07-17 14:52:00
author: Cristian Torres
#image: https://placeholdr.ai/f68ab24a-07b0-4429-8749-31a1a9a21dce/300/200
image: ./assets/f68ab24a-07b0-4429-8749-31a1a9a21dce.png
---
Para eliminar los registros duplicados de una tabla en MySQL se ejecuta el siguiente estamento:<br />

```sql
DELETE n1 FROM members0 n1, members0 n2 WHERE n1.id &lt; n2.id AND n1.full_name = n2.full_name AND n1.email = n2.email
```
