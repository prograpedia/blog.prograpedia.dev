---
title: "(VB .Net) Módulo Conexión"
description: "Módulo de conexión para VB .Net"
pubDate: 2011-06-16 15:07:00
author: "Cristian Torres"
---
```vbnet 
Imports System.Data.SqlClient
Imports System.Data.OleDb
Imports MySql.Data.MySqlClient
Module Conexion
    Friend dbMySQLConn As MySqlConnection, dbSQLConn As SqlConnection
    Friend MySQLStrConn As String, SQLStrConn As String
    Public Sub ConectarSQL(Optional ByVal StrConn As String = "")
        If StrConn = "" Then
            StrConn = "Server = .\SQLEXPRESS; Integrated Security = True"
        End If
        dbSQLConn = New SqlConnection(StrConn)
        Try
            dbSQLConn.Open()
        Catch ex As Exception
            MessageBox.Show("Error al conectar: " & vbCrLf & ex.Message)
        End Try
    End Sub

    Public Sub ConectarMySQL(Optional ByVal StrConn As String = "")
        If StrConn = "" Then
            StrConn = "Server = localhost; User = root; port = 3306"
        End If
        dbMySQLConn = New MySqlConnection(StrConn)
        Try
            dbMySQLConn.Open()
        Catch ex As Exception
            MessageBox.Show("Error al conectar: " & vbCrLf & ex.Message)
        End Try
    End Sub

    Public Function ExecuteReaderSQL(ByVal query As String) As SqlDataReader
        Dim p As SqlCommand
        p = New SqlCommand(query)
        p.Connection = dbSQLConn
        Dim read As SqlDataReader = p.ExecuteReader()
        Return read
    End Function

    Public Function ExecuteReaderMySQL(ByVal query As String) As MySqlDataReader
        Dim p As MySqlCommand
        p = New MySqlCommand(query)
        p.Connection = dbMySQLConn
        Dim read As MySqlDataReader = p.ExecuteReader()
        Return read
    End Function

    Public Sub DesconectarSQL()
        dbSQLConn.Close()
    End Sub

    Public Sub DesconectarMySQL()
        dbMySQLConn.Close()
    End Sub
End Module
```
