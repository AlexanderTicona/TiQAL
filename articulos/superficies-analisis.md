# Análisis de Superficies por Elevaciones y Pendientes

En AutoCAD Civil 3D, el análisis de superficies es una herramienta fundamental para visualizar y comprender las características del terreno. Este artículo explica paso a paso cómo realizar un análisis completo por **elevaciones** y **pendientes**, incluyendo cómo insertar las tablas de leyenda.

## ¿Qué es el Análisis de Superficies?

El análisis de superficies permite clasificar y colorear las áreas de una superficie TIN según rangos de:

- **Elevaciones** — Rangos de altitud (cotas) del terreno
- **Pendientes** — Inclinación del terreno, expresada en porcentaje o grados
- **Orientación (Aspect)** — Dirección hacia donde "mira" cada triángulo de la superficie

> 💡 **Tip**: El análisis por pendientes es especialmente útil para identificar zonas de corte/relleno críticas y evaluar la estabilidad de taludes en proyectos viales.

## Procedimiento para el Análisis por Elevaciones

### Paso 1: Seleccionar la Superficie

1. En el Espacio Modelo, haz clic sobre la superficie TIN que deseas analizar
2. Se activará la pestaña contextual **Tin Surface** en la cinta de opciones

### Paso 2: Configurar el Análisis

1. En la pestaña **Tin Surface**, ve al grupo **Analysis**
2. Selecciona el tipo de análisis: **Elevations**
3. Haz clic en el ícono de **Analysis Properties** (flecha inferior)

En el cuadro de diálogo de propiedades:

- Define el **número de rangos** (por defecto son 8)
- Puedes personalizar los **colores** de cada rango
- Los valores mínimo y máximo se toman automáticamente de la superficie

### Paso 3: Aplicar el Estilo de Análisis

Para que el análisis sea visible, necesitas cambiar el estilo de la superficie:

1. Clic derecho sobre la superficie → **Properties**
2. En la pestaña **Information**, cambia el **Style** a uno que muestre el análisis de elevaciones
3. Alternativamente, ve a **Surface Properties** → **Analysis** tab

> ⚠️ **Importante**: Si no cambias el estilo de la superficie, el análisis no será visible aunque lo hayas configurado.

## Análisis por Pendientes

El procedimiento es similar al de elevaciones, pero seleccionando **Slopes** en vez de **Elevations**:

1. Selecciona la superficie
2. Ve a **Analysis** → **Slopes**
3. Define los rangos de pendiente (ejemplo: 0-5%, 5-15%, 15-30%, >30%)
4. Aplica el estilo correspondiente

### Rangos recomendados para proyectos viales

| Rango de Pendiente | Clasificación | Color sugerido |
|---------------------|---------------|----------------|
| 0% - 5% | Plano | Verde |
| 5% - 15% | Moderado | Amarillo |
| 15% - 30% | Empinado | Naranja |
| 30% - 50% | Muy empinado | Rojo |
| > 50% | Crítico | Rojo oscuro |

## Insertar Tabla de Leyenda

Para insertar la leyenda del análisis en el dibujo:

1. Ve a la pestaña **Annotate** → **Add Tables**
2. Selecciona **Add Surface Legend Table**
3. Elige el tipo de tabla (Elevations o Slopes)
4. Selecciona la superficie
5. Haz clic en un punto del dibujo para insertar la tabla

La tabla mostrará automáticamente los colores, rangos y áreas de cada clasificación.

## Conclusión

El análisis de superficies es una herramienta poderosa para la toma de decisiones en proyectos de ingeniería civil. Dominar esta funcionalidad te permitirá:

- Identificar rápidamente zonas críticas
- Generar documentación visual clara para informes
- Optimizar el diseño de rasantes y taludes

---

*¿Tienes dudas sobre el análisis de superficies? Déjanos un mensaje en la sección de contacto.*
