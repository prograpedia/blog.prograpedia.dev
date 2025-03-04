---
title: "Conexión a bases de datos"
description: "Conexión a bases de datos con Visual Basic .NET"
pubDate: 2011-11-18 08:24:00
author: "Cristian Torres"
---
Se puede hacer de varias formas, encapsulando el código en funciones o escribiendolo cada vez que se utilice pero de manera general son:

Crear un objeto connection que corresponda al motor al que nos vayamos a conectar, ej: <i>SqlConnection</i>, <i>OleDbConnection</i>, etc. Este objeto debe instanciarse y de forma general asignar la propiedad ConnectionString, que es una cadena que contiene parametros para conectarse al motor, esta se establece al instanciar el objeto con un parámetro o una vez instanciado haciendo la asignacion.

Ej:
-Como conectar con sql

```vbnet title="Conexion.vb"
''...
Dim Conexion as New SqlClient.SqlConnection()
Dim Comando as New SqlClient.SqlCommand()

Public Sub Conecta()
     Try
         Conexion.ConnectionString = "Server=(local)\SQLEXPRESS; Database=NorthWind; Integrated Security=true"
         Conexion.Open()
     Catch ex as Exception
         MessageBox.Show("No se pudo conectar a la base de datos" & ex.Message)
     End Try
End Sub

Public Function hacerConsulta(ByVal Query as String) as SqlClient.SqlDataReader
     Conecta()
     Try
         Comando.CommandText = query
         Return Comando.ExecuteReader
     Catch ex as Exception
         MessageBox.Show("La consulta no se pudo realizar por algún motivo. Intente de nuevo.")
     Finally
         Desconecta()
     End Try
End Function

Public Sub Desconecta()
     Conexion.Close()
End Sub
''...
```

La diferencia entre <i>SQLClient </i>y <i>OleDb </i>reside en que <i>SQLClient </i>es el espacio de nombres que contiene las clases para realizar conexiones y ejecutar instrucciones sobre SQL Server y OleDb es el que contiene las clases para realizar lo anterior sobre una base de datos de Access.
