---
title: "django-environ: Diccionarios anidados"
description: "Cómo manejar diccionarios anidados con django-environ"
pubDate: 2025-02-27
author: "Cristian Torres"
#image: https://placeholdr.ai/49e236bd-6b07-44f5-a868-a31e5bc3c315/300/200
image: /assets/49e236bd-6b07-44f5-a868-a31e5bc3c315.png
---

Hace poco estaba tratando de encontrar la forma de cargar una serie de
diccionarios anidados usando django-environ, al
estilo de la configuración para la base de datos en django.

Para ser más preciso intentaba cargar una serie de nombres, llaves y secretos
para buckets en S3.

```dotenv title=".env"
AWS_S3_BUCKETS='BUCKET1=name=bucket1;key_id=key_id1;secret=secret1,BUCKET2=name=bucket2;key_id=key_id2,secret=secret2'
```

El problema es que django-environ no puede realizar la carga de diccionarios
anidados, pero, sí puede cargar listas y "parsear" diccionarios anidados (1
nivel de anidación máximo), si juntamos esas dos capacidades podemos crear una
nueva definición de variables para este tipo.

Para cargar este nuevo tipo de valores necesitamos hacerlo en nuestro código de
la siguiente manera:

```python title="settings.py"
import environ
env = environ.Env()
env.read_env('path/to/.env')
...
AWS_S3_BUCKETS = {
    key: env.parse_value(value, {}) 
    for (key, value) in dict([
        dictionary.split("=", 1)  # 1
        for dictionary in env.list('AWS_S3_BUCKETS')
    ]).items()
}
...
```

El formato de cada diccionario anidado dentro de la variable en el archivo .env
sería el siguiente:

<div>
<span class="text-red-400">nested_dict1</span>=<span class="text-blue-400">subkey1_for_nested_dict1</span>=<span class="text-green-400">value</span>;<span class="text-blue-400">subkey2_for_nested_dict1</span>=<span class="text-green-400">value</span>
</div>

Y así lo podemos para cada diccionario anidado,
usando <strong class="text-orange-400">,</strong> como separador.

```dotenv title=".env"
AWS_S3_BUCKETS='BUCKET1=name=bucket1;key_id=key_id1;secret=secret1,BUCKET2=name=bucket2;key_id=key_id2;secret=secret2'
```

<br/>

> [!WARNING/ADVERTENCIA]
> Este código no es seguro, no lo uses en producción sin antes hacer las
> validaciones necesarias.
