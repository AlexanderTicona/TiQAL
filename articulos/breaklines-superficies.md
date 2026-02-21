# Líneas de Rotura (Breaklines) en Civil 3D

Las **Breaklines** o Líneas de Rotura son una de las herramientas más versátiles para el control de superficies en AutoCAD Civil 3D. Permiten corregir triangulaciones, definir bordes de caminos, canales, muros de contención y mucho más.

## ¿Para qué sirven las Breaklines?

Cuando creamos una superficie TIN a partir de puntos, la triangulación automática puede generar triángulos que no representan correctamente la realidad del terreno. Las **Breaklines** fuerzan a la superficie a seguir una línea específica, corrigiendo la triangulación.

### Usos comunes:

- **Corregir triangulaciones** incorrectas en la superficie
- **Definir bordes** de caminos, cunetas y canales
- **Crear desniveles** verticales (muros, escalones)
- **Representar quiebres** naturales del terreno (ríos, quebradas)
- **Definir superficies completas** solo con Breaklines (sin necesidad de puntos COGO)

> 💡 **Tip**: En muchos proyectos, las Breaklines son más importantes que los puntos mismos para obtener una superficie precisa.

## Tipos de Breaklines

Civil 3D ofrece **5 tipos** de Breaklines, cada uno con un propósito específico:

| Tipo | Origen | Uso típico |
|------|--------|------------|
| **Standard** | Puntos, líneas o polilíneas (2D/3D) | El más común. Fuerza la triangulación a seguir una polilínea con elevaciones |
| **Proximity** | Punto o línea con nombre | Conecta puntos cercanos a la superficie existente |
| **Wall** | Líneas 3D, polilíneas o figuras de levantamiento | Crea desniveles verticales (muros, paredes, escalones) |
| **From File** | Archivo externo (.flt) | Importa breaklines desde un archivo |
| **Non-destructive** | Contorno o boundary | Modifica la triangulación sin alterar los datos originales |

## Standard Breaklines (el más usado)

Es el tipo más frecuente. Se utiliza cuando tenemos una polilínea que representa un quiebre del terreno y queremos que la superficie respete esa línea.

### Procedimiento:

1. Dibuja una **polilínea 3D** o una polilínea con elevaciones que represente el quiebre
2. Selecciona la superficie en la que quieres agregar el breakline
3. Ve a **Surface** → **Add Data** → **Breaklines**
4. En el cuadro de diálogo **Add Breaklines**:
   - Asigna un nombre descriptivo (ej: "Borde de Camino")
   - Selecciona el tipo: **Standard**
5. Selecciona la polilínea en el dibujo
6. La superficie se recalcula respetando la nueva línea

> ⚠️ **Importante**: La polilínea debe tener **elevaciones asignadas**. Si usas una polilínea 2D (elevación 0), el breakline no tendrá efecto en la superficie.

## Wall Breaklines (para desniveles verticales)

Este tipo es especial porque permite crear **cambios bruscos de elevación** en la superficie, como muros, paredes o escalones.

### Ejemplo práctico: Modelo de Escalera

Imagina que necesitas representar una escalera o un muro de contención en tu superficie. Con **Wall Breaklines** puedes crear desniveles verticales que la triangulación normal no puede representar.

### Procedimiento:

1. Dibuja las **líneas 3D** o polilíneas que representen los bordes del muro
2. Cada línea debe tener la elevación correcta (cota superior e inferior del muro)
3. Agrega cada línea como **Wall Breakline** a la superficie
4. Civil 3D creará triángulos verticales entre las elevaciones

### Resultado:

La superficie mostrará un cambio abrupto de elevación, representando fielmente el muro o escalón en el terreno.

> 💡 **Tip**: Los Wall Breaklines son ideales para representar muros de gaviones, bordillos, y cualquier estructura que genere un cambio vertical en el terreno.

## Definir una Superficie solo con Breaklines

Un dato poco conocido es que **no necesitas puntos COGO** para crear una superficie. Puedes definir una superficie completamente con Breaklines:

1. Crea una **superficie vacía** (sin datos)
2. Agrega **Standard Breaklines** con polilíneas 3D
3. La superficie se generará únicamente a partir de las líneas de rotura

Esto es útil cuando:
- Tienes un diseño en polilíneas 3D y quieres generar la superficie a partir de ellas
- Necesitas una superficie de diseño basada en curvas de nivel dibujadas

## Buenas Prácticas

1. **Nombra tus breaklines** de forma descriptiva para identificarlos fácilmente
2. **Verifica las elevaciones** de las polilíneas antes de agregarlas
3. **Usa estilos de visualización** que muestren las triangulaciones para verificar el resultado
4. **Agrupa los breaklines** por tipo o zona del proyecto
5. **Documenta** qué breaklines se usaron y por qué, para referencia futura

## Conclusión

Las Breaklines son una herramienta fundamental que todo profesional de Civil 3D debe dominar. Desde la corrección básica de triangulaciones hasta la creación de modelos complejos con muros y escalones, las posibilidades son amplias.

Es fascinante esta parte de Breaklines por la variedad de elementos que podemos crear, y todos estos del tipo de superficie.

---

*Artículo basado en una solución compartida en el [Foro Oficial de Autodesk Civil 3D en Español](https://forums.autodesk.com/t5/civil-3d-foro-en-espanol/lineas-de-rotura/m-p/7858538).*
