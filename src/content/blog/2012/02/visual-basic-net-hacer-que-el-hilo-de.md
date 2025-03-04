---
title: "(Visual Basic .NET) Hacer que el hilo de una aplicación espere..."
description: "En Visual Basic a veces nos encontramos con la necesidad de hacer que un hilo espere durante unos segundos para que otro hilo realice su tarea..."
pubDate: 2012-02-26 03:04:00
author: Cristian Torres
#image: https://placeholdr.ai/086e9040-b513-4151-bf6d-0cc95871ff7b/300/200
image: /assets/086e9040-b513-4151-bf6d-0cc95871ff7b.png
---
En Visual Basic a veces nos encontramos con la necesidad de hacer que un hilo espere durante unos segundos para que otro hilo realice su tarea, esto en el caso de los semáforos, para eso necesitamos hacer que ese hilo "duerma" esto lo logramos mediante el uso del siguiente comando:

```vbnet
'...
Threading.Thread.Sleep(ByVal milliseconds As Integer)
'...
```

Donde *milliseconds* es la cantidad de milisegundos a esperar:<br/>
1000 -> 1 seg
