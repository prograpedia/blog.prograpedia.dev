---
title: Módulo de conexión dinámica SQL Server
description: Módulo de conexión dinámica para SQL Server
pubDate: 2011-12-11 21:09:00
author: Cristian Torres
---
Este módulo nos permite conectarnos a una base de datos alojada en "MS Sql Server".<br />
Contiene 4 funciones, una para conectar a la base de datos, 1 para ejecutar sentencias y una que cierra la conexión.<br />
La función de ejecución de sentencias acepta como parámetro la sentencia en forma de <i>string</i>. Además, cuenta con una sobrecarga que permite enviar el <i>dataset</i> al que se volcar&aacute;n los datos que devuelva dicha sentencia.<br />
```vbnet
Imports System.Data.SqlClient
Imports System.Data.SqlClient
Module Conexion
    Friend dbSQLConn As SqlConnection, dbSQLComm As SqlCommand, dbSQLAdapter As SqlDataAdapter
    Public Sub ConectarSQL(Optional ByVal Server As String = "(local)\SQLEXPRESS", Optional ByVal DB As String = "master")
        dbSQLConn = New SqlConnection("Server=" &amp; Server &amp; ";Database=" &amp; DB &amp; ";Integrated Security=true")
        Try
            dbSQLConn.Open()
        Catch ex As Exception
            MessageBox.Show("Error al conectar: " &amp; vbCrLf &amp; ex.Message)
        End Try
    End Sub
    Public Function ExecuteSQL(ByVal Query As String) As SqlDataAdapter
        dbSQLComm = New SqlCommand(Query, dbSQLConn)
        dbSQLAdapter = New SqlDataAdapter(dbSQLComm)
        Return dbSQLAdapter
    End Function
    Public Function ExecuteSQL(ByVal Query As String, ByRef ds As DataSet) As Integer
        dbSQLComm = New SqlCommand(Query, dbSQLConn)
        dbSQLAdapter = New SqlDataAdapter(dbSQLComm)
        Dim build As New SqlClient.SqlCommandBuilder(dbSQLAdapter)
        dbSQLAdapter.UpdateCommand = build.GetUpdateCommand
        Return dbSQLAdapter.Update(ds)
    End Function
    Public Sub DesconectarSQL()
        dbSQLConn.Close()
    End Sub
End Module
```
