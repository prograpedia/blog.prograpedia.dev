---
title: "(Java) Clase para manipulación de archivos"
description: "Clase para manipulación de archivos en Java"
pubDate: 2011-05-26 08:19:00
author: "Cristian Torres"
---
```java
/** 
 * To change this template, choose Tools | Templates 
 * and open the template in the editor. 
 */ 

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.FileReader;
import java.io.IOException;
import java.io.PrintWriter;
import java.io.RandomAccessFile;

/**  *  * @author ALUMNOS  */
public class fileManagement {

    protected String filePath;
    protected PrintWriter writer;
    protected FileReader fReader;
    protected BufferedReader bReader;
    protected FileOutputStream fos;
    protected FileInputStream fis;
    protected RandomAccessFile ioFile;

    public fileManagement(String pathName) throws FileNotFoundException {
        this.setFilePath(pathName);
        writer = new PrintWriter(filePath);
        fReader = new FileReader(filePath);
        bReader = new BufferedReader(fReader);
        fos = new FileOutputStream(filePath);
        fis = new FileInputStream(filePath);
        ioFile = new RandomAccessFile(pathName, "rw");
    }

    public fileManagement(File f) throws FileNotFoundException {
        writer = new PrintWriter(f);
        fReader = new FileReader(f);
        bReader = new BufferedReader(fReader);
        fos = new FileOutputStream(f);
        fis = new FileInputStream(f);
        ioFile = new RandomAccessFile(f, "rw");
    }

    public void writeBytes(byte[] data, int off, int len) throws IOException {
        ioFile.seek(off);
        ioFile.write(data);
    }

    public byte[] readBytes(int off, int len) throws IOException {
        byte[] b = new byte[len];
        ioFile.seek(off);
        ioFile.read(b);
        return b;
    }

    public String readLine() throws IOException {
        return bReader.readLine();
    }

    public void writeLine(String data) throws IOException {
        writer.println(data);
    }

    public void setFilePath(String pathName) {
        this.filePath = pathName;
    }

    public String getFilePath() {
        return this.filePath;
    }
}
```
