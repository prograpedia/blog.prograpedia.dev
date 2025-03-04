---
title: "(Java) Leer un archivo modo de texto"
description: "Leer un archivo modo de texto Java"
pubDate: 2012-01-26 14:36:00
author: "Cristian Torres"
---

```java
try {
    File f = new File("C:\\");
    FileReader fr = new FileReader(f);
    char[] cbuf = new char[(int)f.length()];
    fr.read(cbuf);
    String content = new String(cbuf);
} catch (IOException iOException) {
}
```
