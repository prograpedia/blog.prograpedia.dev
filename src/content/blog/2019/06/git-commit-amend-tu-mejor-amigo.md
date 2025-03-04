---
title: "Git commit --amend: tu mejor amigo"
description: Aprende a corregir tus commits con git commit --amend.
pubDate: 2019-06-10 14:44:00
author: Cristian Torres
#image: https://placeholdr.ai/db588af2-ee6d-43e5-9343-b666e29e024b/300/200
image: /assets/db588af2-ee6d-43e5-9343-b666e29e024b.png
---
Cuando estamos iniciando un proyecto y lo mantenemos en git a veces no queremos tener tantos commits antes del primer release, por lo que, si queremos evitar esto, podemos ir haciendo modificaciones a nuestro código y cada vez que queramos actualizar nuestro primer commit llamar:<br />
```bash
git commit --amend --no-edit
```
Si ya lo hemos enviado al repositorio remoto<br />
```bash
git push -f
```
Nota: Usar esto en etapas avanzadas del proyecto después de haber realizado releases se debe realizar con sumo cuidado y solo en nuestra propia rama (Deberías tener una a estas alturas)
