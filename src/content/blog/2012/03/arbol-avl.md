---
title: "(Visual Basic .Net) Árbol AVL"
description: "Implementación de Árbol AVL en Visual Basic .NET"
pubDate: 2012-03-14 15:56:00
author: Cristian Torres
#image: https://placeholdr.ai/4b5262ce-81a1-4fee-8108-93689cd87f28/300/200
image: /assets/4b5262ce-81a1-4fee-8108-93689cd87f28.png
---

```vbnet
Public Class ArbolAVL
    Public raiz As Nodo

    Public Sub New()

    End Sub

    Public Sub inserta(ByRef padre As Nodo, ByVal valor As Integer)
        If padre Is Nothing Then
            padre = New Nodo
            padre.value = valor
        Else
            If padre.value > valor Then
                inserta(padre.izqda, valor)
            ElseIf padre.value < valor Then
                inserta(padre.drcha, valor)
            End If
        End If
    End Sub

    Public Sub elimina(ByVal valor As Integer)
        Actualizar(raiz)
        Dim e As Nodo = Nothing
        getNodo(raiz, valor, e)
        Debug.Print(raiz.ToString)
        If e.peso = 0 Then
            e = Nothing
        End If
        If e IsNot Nothing Then

            If e.izqda.peso > e.drcha.peso Then
                Dim p = Predecesor(e)
                Dim i = e.izqda
                Dim d = e.drcha
                cambio(e, p)
                i.drcha = p.izqda
                If p.value <> d.value Then
                    p.izqda = i
                End If
                p.drcha = d
            Else
                Dim s = Sucesor(e)
                Dim i = e.izqda
                Dim d = e.drcha
                cambio(e, s)
                d.izqda = s.drcha
                e.izqda = i
                If s.value <> d.value Then
                    e.drcha = d
                End If
            End If
        End If
    End Sub

    Public Sub cambio(ByRef a As Nodo, ByRef b As Nodo)
        a.izqda = b.izqda
        a.drcha = b.drcha
        a.value = b.value
    End Sub

    Public Sub getNodo(ByRef i As Nodo, ByVal valor As Integer, ByRef ret As Nodo)
        If i Is Nothing Then
            ret = Nothing
        Else
            If valor < i.value Then
                getNodo(i.izqda, valor, ret)
            ElseIf valor > i.value Then
                getNodo(i.drcha, valor, ret)
            ElseIf i.value = valor Then
                ret = i
            End If
        End If
    End Sub

    Public Sub Equilibrio(ByRef n As Nodo)
        'TODO 'Multihilos
        If n Is Nothing Then
            Exit Sub
        End If
        Actualizar(raiz)
        Dim height
        Select Case n.altura.X - n.altura.Y
            Case Is = -2
                height = Altura(n.drcha)
                If height.X > height.Y Then
                    RDD(n)
                Else
                    RSD(n)
                End If
            Case Is = 2
                height = Altura(n.izqda)
                If height.X > height.Y Then
                    RSI(n)
                Else
                    RDI(n)
                End If
            Case Is = -1, 1
                If n.izqda IsNot Nothing Then
                    Equilibrio(n.izqda)
                End If
                If n.drcha IsNot Nothing Then
                    Equilibrio(n.drcha)
                End If
        End Select
    End Sub

    Public Sub RSI(ByRef Pivote As Nodo)
        Dim k3 = Pivote.izqda.izqda, k1 = Pivote, k2 = Pivote.izqda
        k1.izqda = k2.drcha
        k2.drcha = k1
        Pivote = k2

        Debug.Print("RSI")
    End Sub

    Public Sub RDI(ByRef Pivote As Nodo)
        Dim k1 = Pivote.izqda.drcha, k2 = Pivote, k3 = Pivote.izqda
        k3.drcha = k1.izqda
        k2.izqda = k1.drcha
        k1.drcha = k2
        k1.izqda = k3
        Pivote = k1
        Debug.Print("RDI")
    End Sub

    Public Sub RSD(ByRef Pivote As Nodo)
        Dim k3 = Pivote.drcha.drcha, k1 = Pivote, k2 = Pivote.drcha
        k1.drcha = k2.izqda
        k2.izqda = k1
        Pivote = k2
        Debug.Print("RSD")
    End Sub

    Public Sub RDD(ByRef Pivote As Nodo)
        Dim k1 = Pivote.drcha.izqda, k2 = Pivote, k3 = Pivote.drcha
        k2.drcha = k1.izqda
        k3.izqda = k1.drcha
        k1.izqda = k2
        k1.drcha = k3
        Pivote = k1

        Debug.Print("RDD")
    End Sub

    Public Function Altura(ByRef N As Nodo) As Point
        If N Is Nothing Then
            Return New Point(-1, -1)
        End If
        Dim a As Point = Altura(N.izqda)
        Dim b As Point = Altura(N.drcha)
        Dim x As Integer = Math.Max(a.X, a.Y) + 1
        Dim y As Integer = Math.Max(b.X, b.Y) + 1
        Return New Point(x, y)
    End Function

    Public Function Predecesor(ByRef n As Nodo) As Nodo
        Return Mayor(n.izqda)
    End Function

    Public Function Sucesor(ByRef n As Nodo) As Nodo
        Return Menor(n.drcha)
    End Function

    Public Function Mayor(ByRef n As Nodo) As Nodo
        If n.drcha IsNot Nothing Then
            Return Mayor(n.drcha)
        Else
            Return n
        End If
    End Function

    Public Function Menor(ByRef n As Nodo) As Nodo
        If n.izqda IsNot Nothing Then
            Return Menor(n.izqda)
        Else
            Return n
        End If
    End Function

    Public Sub mayor(ByRef n As Nodo, ByRef ret As Nodo)
        If n.drcha Is Nothing Then
            ret = n
        Else
            Mayor(n.drcha, ret)
        End If
    End Sub

    Public Sub menor(ByRef n As Nodo, ByRef ret As Nodo)
        If n.izqda Is Nothing Then
            ret = n
        Else
            Menor(n.izqda, ret)
        End If
    End Sub

    Public Sub Predecesor(ByRef n As Nodo, ByRef ret As Nodo)
        Mayor(n.izqda, ret)
    End Sub

    Public Sub Sucesor(ByRef n As Nodo, ByRef ret As Nodo)
        Menor(n.drcha, ret)
    End Sub

    Public Sub GraficaArbol(ByRef n As Nodo, ByRef donde As PictureBox)
        Dim g As Graphics = donde.CreateGraphics
        g.Clear(Color.White)
        DibujaNodo(raiz, g, 0, 800, 0)
    End Sub

    Public Sub DibujaNodo(ByRef n As Nodo, ByRef g As Graphics, ByVal left%, ByVal width%, ByVal y%)
        If n IsNot Nothing Then
            Dim centro As Integer = left + (width / 2)
            DibujaNodo(n.izqda, g, left, width / 2, y + 80)
            DibujaNodo(n.drcha, g, centro, width / 2, y + 80)
            If n.izqda IsNot Nothing Then
                g.DrawLine(Pens.Black, centro + 20, y + 20, CInt(left + (width / 4)) + 20, y + 80)
            End If
            If n.drcha IsNot Nothing Then
                g.DrawLine(Pens.Black, centro + 20, y + 20, CInt(centro + (width / 4)) + 20, y + 80)
            End If
            g.FillEllipse(Brushes.Bisque, centro, y, 40, 40)
            g.DrawString(n.value, Form1.Font, Brushes.Black, centro, y + 10)
        End If
    End Sub

    Public Sub Actualizar(ByRef n As Nodo)
        If n IsNot Nothing Then
            n.altura = New Point(0, 0)
            n.peso = 0
            If n.drcha Is Nothing And n.izqda Is Nothing Then
                n.altura = New Point(0, 0)
                n.peso = 0
            Else
                If n.izqda IsNot Nothing Then
                    Actualizar(n.izqda)
                    n.altura.X = Math.Max(n.izqda.altura.X, n.izqda.altura.Y) + 1
                    n.peso += n.izqda.peso + 1
                End If
                If n.drcha IsNot Nothing Then
                    Actualizar(n.drcha)
                    n.altura.Y = Math.Max(n.drcha.altura.X, n.drcha.altura.Y) + 1
                    n.peso += n.drcha.peso + 1
                End If
            End If
        End If
    End Sub
End Class

Public Class Nodo
    Public izqda As Nodo, drcha As Nodo
    Public peso As Integer
    Public altura As Point
    Public value As Integer
End Class
```
