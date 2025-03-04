---
title: "(Visual Basic .NET) Hacer que el hilo de una aplicación espere..."
description: "En Visual Basic a veces nos encontramos con la necesidad de hacer que un hilo espere durante unos segundos para que otro hilo realice su tarea, esto en el caso de los semaforos, para eso necesitamos hacer que ese hilo 'duerma' esto lo logramos mediante el uso del siguiente comando..."
pubDate: 2012-02-26 03:04:00
author: Cristian Torres
---
En Visual Basic a veces nos encontramos con la necesidad de hacer que un hilo espere durante unos segundos para que otro hilo realice su tarea, esto en el caso de los semáforos, para eso necesitamos hacer que ese hilo "duerma" esto lo logramos mediante el uso del siguiente comando:

```vbnet
'...
Threading.Thread.Sleep(ByVal milliseconds As Integer)
'...
```

Donde *milliseconds* es la cantidad de milisegundos a esperar:<br/>
1000 -> 1 seg
