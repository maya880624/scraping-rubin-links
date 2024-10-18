<img align="left" src = https://project.lsst.org/sites/default/files/Rubin-O-Logo_0.png width=250 style="padding: 10px"> 
<br><b>Introducción a DP0.3</b> <br>
Autoría: Bob Abel, Douglas Tucker y Melissa Graham<br>
Última verificación de ejecución: 2024-05-01 <br>
Versión de las Pipelines Científicas de LSST: Weekly 2024-16 <br>
Tamaño del contenedor (Container size): medium <br>
Nivel de aprendizaje: principiante<br>

**Descripción:** una vista general del contenido de los catálogos de objetos en movimiento de DP0.3.

**Habilidades:** utilizar el servicio TAP y ADQL para acceder a las tablas de DP0.3.

**Productos de Datos LSST:** TAP dp03_catalogs.

**Paquetes:** `lsst.rsp.get_tap_service`

**Créditos:** el conjunto de datos DP0.3 fue generado por miembros de los equipos de Pipelines del Sistema Solar y Puesta a Punto de Rubin --Rubin Solar System Pipelines and Commissioning teams-- con ayuda del grupo de la Colaboración Científica del Sistema Solar de LSST --LSST Solar System Science Collaboration--, en particular: Pedro Bernardinelli, Jake Kurlander, Joachim Moeyens, Samuel Cornwall, Ari Heinze, Steph Merritt, Lynne Jones, Siegfried Eggl, Meg Schwamb y Mario Jurić.

Mario Jurić brindó asistencia esencial en la etapa inicial de la creación de este notebook. Quienes construyeron este notebook además reconocen la ayuda de Leanne Guy, Pedro Bernardinelli, Sarah Greenstreet, Megan Schwamb, Brian Rogers, Niall McElroy y Jake Vanderplass, entre otras personas.

**Soporte:**
se pueden encontrar recursos y documentación relacionados con DP0 en <a href="https://dp0.lsst.io">dp0.lsst.io</a>. Las preguntas son bienvenidas como nuevos temas en la categoría <a href="https://community.lsst.org/c/support/dp0">Support - Data Preview 0</a> del foro de la comunidad de Rubin. El equipo de Rubin responderá a todas las preguntas publicadas allí.

## 1. Introducción

Este notebook muestra cómo acceder al conjunto de datos simulado de Vista Previa de Datos 0.3 (DP0.3 --Data Preview 0.3) en la Plataforma Científica de Rubin (RSP - Rubin Science Platform).

Para la simulación DP0.3, sólo se simularon objetos en movimiento y sólo fueron creados los cátalogos (no hay imágenes).
La simulación DP0.3 es *enteramente independiente y separada de* la simulación DP0.2.

DP0.3 es un catálogo híbrido que contiene objetos del Sistema Solar tanto reales como simulados (asteroides, objetos próximos a la Tierra, Troyanos, objetos transneptunianos, cometas e incluso una nave espacial simulada... pero ningún planeta principal ni la Luna).
Ver la <a href="https://dp0-3.lsst.io"> documentación de DP0.3</a> para más información acerca de cómo fue creado el catálogo híbrido.

En las Operaciones de Rubin --Rubin Operations--, estas tablas estarían cambiando constantemente, siendo actualizadas todos los días con los resultados de
las observaciones de la noche anterior.
Sin embargo, para DP0.3, se han simulado tanto un catálogo estático de 1 año como un catálogo estático de 10 años.

> **Aviso:** para reiterar, en DP0.3, hay tablas disponibles tanto para catálogos de 1 año como para catálogos de 10 años. Sin embargo, durante el resto de este notebook, a menos que se indique lo contrario, sólo consideraremos las tablas del catálogo de 10 años. Se recomienda explorar las tablas de los catálogos de 1 año por cuenta propia.

### 1.1. Importación de paquetes

Importar paquetes generales de python y las utilidades del servicio TAP de Rubin.


```python
import numpy as np
import matplotlib.pyplot as plt
from matplotlib import colormaps
import pandas as pd
from lsst.rsp import get_tap_service
```

## 2. Crear el cliente del servicio SSO TAP de Rubin

El conjunto de datos DP0.3 está disponible mediante el servicio de protocolo de acceso a datos tabulados (TAP --Table Access Protocol)
y puede ser accedido mediante sentencias ADQL (Astronomical Data Query Language --Lenguaje de consulta de datos astronómicos).

TAP provee un acceso estandarizado a los datos de catálogos para exploración, búsqueda y acceso. 
La <a href="http://www.ivoa.net/documents/TAP">documentación completa de TAP</a> es provista por la Alianza Internacional de Observatorios Virtuales (IVOA --International Virtual Observatory Alliance). 
ADQL es similar a SQL (Structured Query Language --lenguaje de consulta estructurado).
La <a href="http://www.ivoa.net/documents/latest/ADQL.html">documentación de ADQL</a> incluye más información sobre sintaxis y palabras clave.

Obtener una instancia del servicio SSO TAP, y corroborar que éste exista.

> **Aviso:** el servicio TAP de DP0.3 se llama `ssotap` (mientras que `tap` se utiliza para DP0.2).


```python
service = get_tap_service("ssotap")
assert service is not None
```

### 2.1. ¿Qué esquemas de `ssotap` están disponibles?

Crear una consulta ADQL para seleccionar todos (\*) los esquemas disponibles, y usar el servicio TAP para ejecutar la consulta.

Usar `to_table` para convertir a una tabla `astropy`, la cual visualizará los resultados de manera amigable.


```python
query = "SELECT * FROM tap_schema.schemas"
results = service.search(query).to_table()
results
```

### 2.2 ¿Qué tablas de DP0.3 están disponibles?

Hay cuatro tablas para la simulación de 1 año y la de 10 años:
`MPCORB`, `SSObject`, `SSSource` y `DiaSource`.

Se podrán encontrar las descripciones de las tablas y sus esquemas, más
información y consejos sobre acceso y consulta de las tablas de DP0.3 
(incluyendo qué columnas están <a href="https://dp0-3.lsst.io/data-products-dp0-3/table-access-and-queries.html#unpopulated-columns">actualmente vacías</a>),
en la <a href="https://dp0-3.lsst.io/data-products-dp0-3/index.html#dp0-3-data-products-definition-document-dpdd">documentación de las definiciones de los productos de datos de DP0.3</a>.

Este tutorial explorará las tablas individualmente, y la combinación de tablas 
será mostrada en un tutorial futuro (ver también <a href="https://dp0-3.lsst.io/data-products-dp0-3/table-access-and-queries.html#table-joins">este consejo sobre combinaciones de tablas en DP0.3</a>).

Seleccionar todas las tablas disponibles y mostrar información acerca de ellas.


```python
query = "SELECT * FROM tap_schema.tables " \
        "WHERE tap_schema.tables.schema_name LIKE 'dp03_catalogs%' " \
        "ORDER BY table_index ASC"
results = service.search(query).to_table()
results
```

## 3. La tabla `MPCORB`

Durante las Operaciones de Rubin, el Procesamiento del Sistema Solar ocurrirá durante el día, después de una noche de observación.
Asociará las detecciones de objetos en movimiento en imágenes diferenciales y reportará los descubrimientos
al <a href="https://minorplanetcenter.net">Centro de Planetas Menores</a> (MPC --Minor Planet Center),
como así también computará las propiedades derivadas (magnitudes, ajustes de curvas de fase, coordenadas en varios sistemas).

El MPC calculará los parámetros orbitales y esos resultados se enviarán de vuelta a Rubin, y serán almacenados
y puestos a disposición a la comunidad usuaria como la tabla `MPCORB`
(las otras propiedades derivadas son almacenadas en las otras tres tablas exploradas abajo).
La tabla `MPCORB` de DP0.3 es una simulación de cómo será este producto de datos después de 10 años de LSST. 

> **Aviso:** el MPC contiene todos los objetos en movimiento reportados en el Sistema Solar, y no se limita a aquellos detectados por LSST. De esta manera, la tabla `MPCORB` tendrá más filas que la tabla `SSObject`.

> **Aviso:** para DP0.3, el MPC no realizó ajustes y la tabla MPCORB contiene los elementos orbitales usados en la simulación (la tabla `MPCORB` es una tabla con valores de verdad).

Para más información acerca de los planes de Rubin para el Procesamiento del Sistema Solar, ver la Sección 3.2.2 del
<a href="https://docushare.lsstcorp.org/docushare/dsweb/Get/LSE-163/LSE-163_DataProductsDefinitionDocumentDPDD.pdf">Documento de Definición de Productos de Datos</a> (Data Products Definitions Document, DPDD).
Es importante tener en cuenta que todavía existen diferencias entre la Tabla 4 del DPDD, que contiene el esquema anticipado para las tablas de
objetos en movimiento, y los esquemas de tablas de DP0.3.

### 3.1. Tamaño

Usar el servicio TAP para contar el número de filas en la tabla `MPCORB`.


```python
results = service.search("SELECT COUNT(*) FROM dp03_catalogs_10yr.MPCORB")
results.to_table()
```

Hay 14.5 millones de filas en la tabla `MPCORB`.

### 3.2. Columnas

Usar el servicio TAP para consultar sobre información de las columnas de `MPCORB`.

Imprimir los resultados como una tabla de `pandas`.


```python
results = service.search("SELECT column_name, datatype, description, "
                         "       unit from TAP_SCHEMA.columns "
                         "WHERE table_name = 'dp03_catalogs_10yr.MPCORB'")
results.to_table().to_pandas()
```

En algunos casos, las descripciones de las columnas se cortan en la tabla anterior. 

Ejecutar lo siguiente para ver, por ejemplo, la descripción completa para la columna `mpcDesignation`.


```python
results['description'][10]
```

### 3.3. Obtener un subconjunto al azar

Para obtener un subconjunto de filas al azar, hacer uso del hecho de que `ssObjectId` es un entero sin signo de tipo long unsigned integer de 64-bits asignado aleatoriamente.
Ya que ADQL interpreta al tipo long unsigned integer de 64-bits como un entero _con signo_ de 63-bits,
estos varían desde un valor entero negativo muy grande hasta un valor entero positivo muy grande.
Esto será arreglado en el futuro para que todos los identificadores sean números positivos. 

> **Aviso:** por el uso de `ssObjectId`, la siguiente consulta devuelve un subconjunto de filas al azar de `MPCORB` *que están asociadas con una fila en la tabla `SSObject`*. En otras palabras, esto limita la consulta a sólo obtener objetos en movimiento desde la tabla `MPCORB` que han sido detectados por LSST.

Primero, averiguar el rango completo de los valores de `ssObjectId` usando las funciones `MIN` y `MAX` de ADQL.


```python
results = service.search("SELECT min(ssObjectId), max(ssObjectId)"
                         "FROM dp03_catalogs_10yr.MPCORB")
results.to_table()
```

Definir un rango de búsqueda para `ssObjectId` que devuelva no más del 1% de todos los objetos en `MPCORB`. Esto lo haremos estimando un nuevo mínimo `ssObjectId` que esté 1% *por debajo* del máximo `ssObjectId` para todo el rango de los valores de `ssObjectId`.

> **Aviso:** ya que el *rango* de `ssObjectId` (-9223370383071521539 --> +9223370875126069107) es mucho más grande que el número de *filas* en la tabla `MPCORB` (14600302), no esperamos obtener con este método *exactamente* el 1% de las filas de `MPCORB`, pero deberíamos obtener aproximadamente el 1%, siempre y cuando los valores de `ssObjectId` estén distribuidos de manera razonablemente uniforme sobre su extenso rango.


```python
min_val = int(results[0].get('min1'))
max_val = int(results[0].get('max2'))
print('Rango completo: ', min_val, max_val)

min_val = int(max_val - 0.01*(max_val-min_val))
print('Rango de búsqueda: ', min_val, max_val)
```

Ejecutar la busqueda y obtener todas (\*) las columnas de la tabla `MPCORB`.

Guardar los resultados en `df` como un marco de datos de `pandas` (_dataframe_).


```python
results = service.search("SELECT * FROM dp03_catalogs_10yr.MPCORB "
                         "WHERE ssObjectId BETWEEN 9038903462544093184 "
                         "AND 9223370875126069107")
df = results.to_table().to_pandas()
```

Mostrar el dataframe resultante. Notar que es truncado automáticamente tanto en las columnas como en las filas
(busca los "..." a mitad de camino hacia abajo y a mitad de camino a través de la tabla).


```python
df
```

Como se puede ver, se obtuvieron 144,472 filas, las cuales -- _como se esperaba_ -- son casi (pero no exactamente) el 1% de las 14,462,388 filas en la tabla `MPCORB`.

> **Aviso:** hay numerosas columnas que actualmente contienen valores `NaN` (not a number -- no es un número).
> Para los datos simulados de DP0.3 estas columnas podrían ser reemplazadas en el futuro cercano
> y para las divulgaciones de datos reales no habrá ninguna columna con todos sus valores en `NaN`.
> Si se desea, se pueden quitar todas las columnas con `NaN` haciendo, e.g. `df.dropna(axis=1, how='all', inplace=True)`.
> De todas formas, la mejor práctica es entender las columnas y obtener sólo lo que se vaya a utilizar.

**Opcional:** usar la función `info` del dataframe de `pandas` para aprender más acerca de los valores en las columnas obtenidas.
Descomentar la siguiente celda de código (eliminar el símbolo #) y ejecutar la celda para ver la información sobre `df`.


```python
# df.info()
```

**Opcional:** usar la función `describe` de `pandas` para mostrar estadísticas de las 
columnas numéricas en el dataframe (conteo, media, desviación estándar, etc.).


```python
# df.describe()
```

### 3.4. Graficar histogramas de columnas seleccionadas

Wikipedia provee una guía adecuada de <a href="https://es.wikipedia.org/wiki/Elementos_orbitales">elementos orbitales para principiantes</a>.

Para una referencia rápida, abajo se muestran distribuciones para cinco elementos orbitales clave
y la magnitud absoluta $H$ (ver la Sección 4.4 para una descripción de $H$).


```python
fig, ax = plt.subplots(2, 3, figsize=(10, 6), sharey=False)
ax[0, 0].hist(df['e'], bins=100, log=True)
ax[0, 0].set_xlabel('Excentricidad')
ax[0, 0].set_ylabel('log(Número)')
ax[0, 1].hist(df['incl'], bins=100, log=True)
ax[0, 1].set_xlabel('Inclinación (deg)')
ax[0, 1].set_ylabel('log(Número)')
ax[0, 2].hist(df['mpcH'], bins=100, log=True)
ax[0, 2].set_xlabel('Magnitud Absoluta, H (mag)')
ax[0, 2].set_ylabel('log(Número)')
ax[1, 0].hist(df['node'], bins=50)
ax[1, 0].set_xlabel('Longitud del Nodo Ascendente (deg)')
ax[1, 0].set_ylabel('Número')
ax[1, 0].set_ylim(0,3500)
ax[1, 1].hist(df['peri'], bins=50)
ax[1, 1].set_xlabel('Argumento del Perihelio (deg)')
ax[1, 1].set_ylabel('Número')
ax[1, 1].set_ylim(0,3500)
ax[1, 2].hist(df['q'], bins=100, log=True)
ax[1, 2].set_xlabel('Distancia al Perihelio (au)')
ax[1, 2].set_ylabel('log(Número)')
fig.suptitle('Histogramas de Elementos Orbitales Clave')
fig.tight_layout()
plt.show()
```

## 4. La tabla `SSObject`

Durante las Operaciones de Rubin, el Procesamiento de Datos Inmediatos (Prompt Processing) se realizará durante la noche, detectando fuentes en imágenes diferenciales (a las cuales llamaremos DIASources --fuentes resultantes del Análisis de Imágenes Diferenciales o fuentes DIA--, ver Sección 6, tabla `DiaSource`) y asociándolas a transitorios y variables estáticos en el cielo (llamados DIAObjects de la tabla `DIAObject`, no incluidos en DP0.3).

El Procesamiento del Sistema Solar que ocurre durante el día, luego de una noche de observación,
vincula las detecciones de objetos en movimiento `DiaSource` con objetos `SSObject` (Objeto del Sistema Solar).
Mientras que la tabla `MPCORB` contiene los elementos orbitales para esos objetos en movimiento,
los objetos de `SSObject` contienen las propiedades medidas por Rubin como ajustes de curvas de fase y magnitudes absolutas.

> **Aviso:** no se inyectaron artefactos ni fuentes de imágenes diferenciales espurias en los catálogos de DP0.3.

> **Aviso:** aunque hay columnas para ellas, no se simularon datos para las bandas _u_ o _Y_ en DP0.3. A menos que se indique lo contrario, ignoraremos los datos de las bandas _u_ o _Y_ para el resto de este notebook.


### 4.1. Tamaño

Usar la función de conteo de ADQL para devolver el tamaño.


```python
results = service.search("SELECT COUNT(*) from dp03_catalogs_10yr.SSObject")
results.to_table().to_pandas()
```

El conjunto de datos DP0.3 contiene 4.4 millones de objetos del sistema solar detectados por Rubin.

Esto es menos que los 14.5 millones de objetos en el catálogo `MPCORB`.
Se deja como ejercicio en la Sección 7 determinar las características de
esos objetos de la tabla `MPCORB` que faltan en la tabla `SSObject`.

### 4.2. Columnas

**Opcional:** mostrar una lista de nombres de columnas, tipos de datos, descripciones y unidades.


```python
# results = service.search("SELECT column_name, datatype, description, "
#                          "unit from TAP_SCHEMA.columns "
#                          "WHERE table_name = 'dp03_catalogs_10yr.SSObject'")
# results.to_table().to_pandas()
```

### 4.3. Obtener un subconjunto al azar

Usar básicamente la misma consulta que se utilizo para la tabla `MPCORB`, arriba.


```python
results = service.search("SELECT * FROM dp03_catalogs_10yr.ssObject "
                         "WHERE ssObjectId BETWEEN 9038903462544093184 "
                         "AND 9223370875126069107")
df = results.to_table().to_pandas()
```


```python
df
```

Hay 44611 filas.

**Opcional:** usar las funciones `info` o `describe` sobre el dataframe de `pandas` para aprender más sobre los resultados obtenidos.


```python
# df.info()
```


```python
# df.describe()
```

### 4.4. Graficar un diagrama color-color

En el dataframe mostrado arriba, pareciera que para varios objetos de `SSObject` los ajustes de las curvas de fase para obtener magnitudes absolutas no fueron exitosos, ya que las columnas `<banda>_H` (donde `<banda>` es una banda u, g, r, i, z o y) tienen valores `NaN`. (Recordar en particular que no se simularon datos para las bandas _u_ o _y_ en DP0.3).

Antes de calcular y graficar los colores, quitar todas las filas para las cuales los ajustes de las curvas de fase no fueron exitosos para las bandas _g_, _r_, _i_, y/o _z_.


```python
df.dropna(subset=['g_H', 'r_H', 'i_H', 'z_H'], inplace=True)
df.reset_index(inplace=True)
print('Número de filas después de eliminar filas: %d' % len(df))
```

Para objetos del Sistema Solar, las magnitudes absolutas se definen como la magnitud de un objeto a 1 ua del Sol y a 1 ua
del observador, y en un ángulo de fase (el ángulo Sol-objeto-Tierra) de 0 grados.

Las magnitudes absolutas se obtienen corrigiendo por distancia, ajustando una función a la relación entre
la magnitud absoluta y la fase y evaluando la función en una fase de 0 grados.

El proceso de ajuste de las curvas de fase será abordado en otro tutorial.

Calcular los colores en los filtros de Rubin para los objetos `SSObject` que tienen magnitudes absolutas.


```python
df['gr'] = df['g_H'] - df['r_H']
df['ri'] = df['r_H'] - df['i_H']
df['iz'] = df['i_H'] - df['z_H']
```

Graficar diagramas color-color como histogramas bi-dimensionales (mapas de calor -- heatmaps).


```python
fig, ax = plt.subplots(1, 2, figsize=(8, 3))

h = ax[0].hist2d(df['gr'], df['ri'],
                 bins=(np.arange(-0.5, 1.5, 0.01),
                       np.arange(-0.5, 0.75, 0.01)),
                 norm='log')
ax[0].set_xlabel('g - r')
ax[0].set_ylabel('r - i')
ax[0].grid()
plt.colorbar(h[3])

h = ax[1].hist2d(df['ri'], df['iz'],
                 bins=(np.arange(-0.5, 0.75, 0.01),
                       np.arange(-0.75, 0.5, 0.01)),
                 norm='log')
ax[1].set_xlabel('r - i')
ax[1].set_ylabel('i - z')
ax[1].grid()
plt.colorbar(h[3])

fig.suptitle('Diagramas Color-Color para el catálogo SSObject')
fig.tight_layout()
plt.show()
```

Hay dos colores usados en la simulación - pero este no es el caso para los objetos reales del Sistema Solar. Estos gráficos se verán muy diferentes en el futuro, cuando estén hechos con datos reales de Rubin.

## 5. La tabla `SSSource`

Como se describe arriba, el Procesamiento del Sistema Solar vincula las fuentes de `DiaSource` (detecciones en las
imágenes diferenciales individuales) con objetos móviles en los objetos de `SSObject`.

La tabla `SSSource` (Fuentes del Sistema Solar) contiene las coordenadas 2-d (cielo) y las distancias y velocidades 3-d
para cada objeto de `SSObject` al momento de cada observación de LSST de ese objeto `SSObject`.
Las tablas `SSSource`y `DiaSource` son 1:1, ya que cada una contiene datos *por observación*,
mientras que `SSObject` contiene datos *por objeto*.

### 5.1. Tamaño

Puede tomar hasta un minuto obtener el tamaño del catálogo `SSSource`.


```python
results = service.search("SELECT COUNT(*) from dp03_catalogs_10yr.SSSource")
results.to_table().to_pandas()
```

**_¡Esta tabla contiene más de 653 millones de fuentes!_**

### 5.2. Columnas

**Opcional:** imprimir la información de las columnas para la tabla `SSSource`.


```python
# results = service.search("SELECT column_name, datatype, description, "
#                          "unit from TAP_SCHEMA.columns "
#                          "WHERE table_name = 'dp03_catalogs_10yr.SSSource'")
# results.to_table().to_pandas()
```

### 5.3. Obtener datos de un objeto de `SSObject`

Es posible obtener los datos de `SSSource` para un conjunto de objetos de `SSObject`.
Por ejemplo, para obtener todas las fuentes de `SSSource` para los objetos de `SSObject` obtenidos en la Sección 4,
usar una consulta como:

```
SELECT * FROM dp03_catalogs_10yr.SSSource
WHERE ssObjectId BETWEEN 9038903462544093184 AND 9223370875126069107
```

Sin embargo, la mejor manera de mostrar los datos en la tabla `SSSource` es mirar sólo un objeto de `SSObject`,
y el que tiene un `ssObjectId` = `6793512588511170680` es una opción divertida.

Obtener las coordenadas X e Y heliocéntricas (centradas en el sol) y topocéntricas (centradas en el observatorio).


```python
results = service.search("SELECT heliocentricX, heliocentricY, "
                         "topocentricX, topocentricY, ssObjectId "
                         "FROM dp03_catalogs_10yr.SSSource "
                         "WHERE ssObjectId = 6793512588511170680")
df_xy = results.to_table().to_pandas()
print('Retrieved ', len(df_xy), ' rows.')
```

**Opcional:** mostrar la tabla en su totalidad o utilizar las funciones `info` o `describe`.


```python
# df_xy
```


```python
# df_xy.info()
```


```python
# df_xy.describe()
```

### 5.3. Graficar las posiciones de un objeto de `SSObject`

Graficar las posiciones del objeto seleccionado de la tabla `SSObject` en el momento de cada 
observación de LSST utilizando las coordenadas X e Y heliocéntricas (centradas en el Sol; estrella naranja)
y las coordenadas topocéntricas (centradas en el observatorio; círculo azul).
Esto puede considerarse una proyección de la órbita en el plano del Sistema Solar.

Notar cómo los puntos no están espaciados regularmente.
Esto es debido a que hay un punto por observación realizada por el LSST al objeto
y algunos años éste recibe más o menos observaciones.

Observar cómo los puntos aparecen en una elipse alrededor del Sol con coordenadas heliocéntricas (izquierda).
Esto se debe a que el objeto seleccionado está en el cinturón principal de asteroides y lo suficientemente cerca del Sol como
para completar al menos una órbita durante los 10 años de estudio del LSST.
Si el objeto seleccionado hubiese estado en el Sistema Solar exterior, o si este tutorial estuviera utilizando
el conjunto de datos de 1 año, el gráfico a continuación mostraría un arco en lugar de una elipse.

El gráfico de las coordenadas topocéntricas (derecha) no se ve elíptico porque 
el movimiento de la Tierra respecto al objeto durante los 10 años del LSST
está reflejado en los datos. 
Para las coordenadas topocéntricas, la rotación de la Tierra también contribuye,
pero es un efecto mucho menor en la escala de estos gráficos.


```python
fig, ax = plt.subplots(1, 2, figsize=(8, 4))
ax[0].grid()
ax[0].plot(df_xy['heliocentricX'], df_xy['heliocentricY'],
           'o', ms=4, mew=0, color='black')
ax[0].plot(0, 0, '*', ms=15, color='darkorange')
ax[0].set_xlabel('X heliocéntrico (au)')
ax[0].set_ylabel('Y heliocéntrico (au)')
ax[0].set_title('Coordenadas Heliocéntricas')
ax[1].grid()
ax[1].plot(df_xy['topocentricX'], df_xy['topocentricY'],
           'o', ms=4, mew=0, color='black')
ax[1].plot(0, 0, 'o', ms=15, color='dodgerblue')
ax[1].set_xlabel('X topocéntrico (au)')
ax[1].set_ylabel('Y topocéntrico (au)')
ax[1].set_title('Coordenadas Topocéntricas')
fig.suptitle('Trayectoria XY de 6793512588511170680')
fig.tight_layout()
plt.show()
```

## 6. El catálogo `DiaSource`

Por último, pero definitivamente no menos importante, la tabla `DiaSource` - la cual en realidad es la primera en ser generada
por el pipeline del Procesamiento de Datos Inmediatos.
Esta tabla va a contener mediciones para todas las fuentes detectadas con una relación señal/ruido de al menos 5 
en una imagen diferencial, incluyendo fuentes en movimiento y estáticas en el cielo (static-sky).

Sin embargo, para la simulación DP0.3 la tabla `DiaSource` contiene *sólo objetos en movimiento*, y no objetos transitorios con posición fija en el cielo (ni defectos del detector).

Para DP0.3 la tabla simulada `DiaSource` contiene sólo un subconjunto de las columnas que tendrá la tabla `DiaSource` real; ver Tabla 1 del
<a href="https://docushare.lsstcorp.org/docushare/dsweb/Get/LSE-163/LSE-163_DataProductsDefinitionDocumentDPDD.pdf">Documento de Definición de Productos de Datos</a> de Rubin.
Más aún, la tabla `DiaSource` contiene unas pocas columnas con valores de verdad extras, tales como  `raTrue`, `decTrue`, `magTrue`.

Para DP0.3 no se simularon variaciones fotométricas debidas a, e.g., la rotación de cuerpos no esféricos, colisiones o eventos de desgasificación.
Toda la evolución en magnitudes aparentes con el tiempo son debidas a la curva de fase, la cual es explorada
en otro tutorial.

### 6.1. Tamaño

**Opcional:** obtener el tamaño de la tabla `DiaSource` (es 1:1 con la tabla `SSSource`, por lo que tienen el mismo tamaño).


```python
# results = service.search("SELECT COUNT(*) from dp03_catalogs_10yr.DiaSource")
# results.to_table().to_pandas()
```

### 6.2. Columnas

**Opcional:** imprimir la información de las columnas.


```python
# results = service.search("SELECT column_name, datatype, description, "
#                          "unit from TAP_SCHEMA.columns "
#                          "WHERE table_name = 'dp03_catalogs_10yr.DiaSource'")
# results.to_table().to_pandas()
```

### 6.3. Obtener datos para un objeto de `SSObject`

Parecido a lo que hicimos con los datos de `SSSource` en la Sección 5, es posible obtener los datos de `DiaSource` para un conjunto de objetos `SSObject`. Por ejemplo, para obtener todas las fuentes en `DiaSource` para los objetos de `SSObject` que se obtuvieron en la Sección 4,
usar una consulta como:

```
SELECT * FROM dp03_catalogs_10yr.DiaSource
WHERE ssObjectId BETWEEN 9038903462544093184 AND 9223370875126069107
```

Sin embargo, como vimos para los datos de las fuentes de `SSSource` en la Sección 5, la mejor forma de mostrar los datos en la tabla `DiaSource` es mirar sólo un objeto de `SSObject`.
Aquí, como en la Sección 5, usaremos el que tiene un `ssObjectId` = `6793512588511170680`.

Obtener la ascensión recta, declinación y el <a href="https://es.wikipedia.org/wiki/Tiempo_At%C3%B3mico_Internacional">TAI</a> (Tiempo Atómico Internacional) correctos en el punto medio de exposición (MJD) de la observación.


```python
results = service.search("SELECT ra, dec, midpointMjdTai "
                         "FROM dp03_catalogs_10yr.DiaSource "
                         "WHERE ssObjectId = 6793512588511170680")
df = results.to_table().to_pandas()

df
```

### 6.4. Graficar datos sobre transitorios para un objeto de `SSObject`

Aquí, graficaremos las coordenadas ecuatoriales para todas las observaciones, coloreadas por la MJD de la observación.

Este gráfico muestra la posición del objeto en el cielo, visto desde la Tierra.
Recordar de los gráficos de la Sección 5 que este objeto está aproximadamente a sólo unas 2 ua del Sol,
por lo que se encuentra en el borde interno del Cinturón Principal de Asteroides.
La paralaje de la órbita terrestre contribuye a cómo se ve este gráfico.


```python
cmap = colormaps['viridis']
fig, ax = plt.subplots(1, 1, figsize=(12, 3))
im = ax.scatter(df['ra'], df['dec'], c=df['midpointMjdTai'], cmap=cmap)
ax.set_xlabel('ra (deg)')
ax.set_ylabel('dec (deg)')
fig.suptitle("Trayectoria de un objeto SSObject en coordenadas ecuatoriales a lo largo de 10 años")
fig.subplots_adjust(right=0.8)
cbar_ax = fig.add_axes([0.85, 0.15, 0.02, 0.7])
fig.colorbar(im, cax=cbar_ax, label='TAI')
ax.grid(True)
```

El uso de la magnitud y el filtro de los datos obtenidos de la tabla `DiaSource` es dejado como
ejercicio en la Sección 7.

## 7. Ejercicios

**1. Calcular el semieje mayor para un subconjunto de objetos.**

El elemento orbital del semieje mayor ($a$) no está pre-computado en la tabla `MPCORB`
debido a que se puede obtener a partir de la elipticidad de la órbita ($e$) y de la distancia al perihelio ($q$)
con $a = q/(1-e)$.

Copiar la consulta de la Sección 3.3 y modificarla para obtener sólo $e$ y $q$ para un subconjunto de objetos.
Luego agregar una columna a la tabla resultante para el semieje mayor y graficar la excentricidad
versus el semieje mayor.

Pistas:
 1. Restringir la consulta a objetos con excentricidades entre 0 y 1.
 2. `df['a'] = df['q'] / (1.0 - df['e'])`

**2. ¿Cómo cambia la magnitud de un objeto de la tabla SSObject con el tiempo?**

En la Sección 6.4, no se obtuvieron ni la magnitud ni el filtro para todas las detecciones del objeto de `SSObject` en
la tabla `DiaSource`; modificar la consulta para obtener `mag` y `band`,
y graficar la magnitud como función del tiempo para el filtro de tu elección
(recordar: no habrá magnitudes en las bandas *u* o *y*).
Notar que la única causa simulada de los cambios fotométricos en los objetos de DP0.3 es la distancia a la Tierra y la curva de fase.
La corrección por distancia y las aplicaciones de curvas de fase, se abordan en otro tutorial.
