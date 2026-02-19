# Guía de Gestión de Contenido - TiQAL Portfolio

Esta guía detalla cómo actualizar el contenido de tu portafolio editando simples archivos de texto (JSON). No necesitas tocar el código de la web.

## 📂 Ubicación de los Archivos
Todos los datos se encuentran en la carpeta:
`f:\AntiGravity\2 Porfolio\src\data\`

| Archivo | Sección que controla |
| :--- | :--- |
| **`profile.json`** | Datos personales, Bio, Enlaces Sociales, Título. |
| **`projects.json`** | Lista de Proyectos en la página "Proyectos". |
| **`addin_tools.json`** | Herramientas mostradas en "Add-ins & Tools". |
| **`resources.json`** | Contenido de "Recursos Civil 3D". |
| **`resources_infraworks.json`** | Contenido de "Recursos Adicionales". |
| **`forum_posts.json`** | Posts destacados en "Foro Autodesk". |

---

## 1. Perfil Personal (`profile.json`)
Aquí editas tu información principal que aparece en el Inicio y el Pie de página.
```json
{
  "name": "TiQAL",
  "fullName": "Ticona Q. Alexander", // Nombre completo debajo del logo
  "title": "Tu Título Profesional",
  "bio": "Tu descripción corta...",
  "links": { ... } // Tus redes sociales
}
```

---

## 2. Agregar un Proyecto (`projects.json`)
Copia este bloque y pégalo dentro de los corchetes `[...]`. Asegúrate de poner una coma `,` si hay otro proyecto antes.

```json
{
    "id": 101, // ID único (puede ser número o texto)
    "title": "Diseño de Intercambio Vial",
    "category": "Vial", // Opciones: "Vial", "Topografía", "Desarrollo"
    "description": "Descripción breve para la tarjeta.",
    "image": "https://ejemplo.com/foto.jpg", // URL o ruta local
    "tags": ["Civil 3D", "Infraworks"],
    "link": "https://enlace-al-detalle.com"
}
```

---

## 3. Agregar una Herramienta / Add-in (`addin_tools.json`)
Ahora soporta contenido detallado para el mensaje emergente (modal).

```json
{
    "id": "tool-unique-id",
    "name": "Nombre del Plugin",
    "version": "v2.0",
    "description": "Descripción corta para la tarjeta.",
    "longDescription": "Descripción DETALLADA que aparece en la ventana emergente.",
    "features": [
        "Característica 1",
        "Característica 2"
    ],
    "downloadLink": "https://apps.autodesk.com/...", // Enlace a la App Store de Autodesk
    "demoLink": "#",
    "videoUrl": "https://www.youtube.com/embed/VIDEO_ID", // Tu video de YouTube (Embed)
    "image": "https://...", // Icono o imagen pequeña
    "screenshot": "https://..." // Captura pantalla (se usa si no hay video)
}
```

---

## 4. Recursos Civil 3D (`resources.json`)
El archivo está dividido por categorías exactas. Busca la categoría y agrega tu ítem en la lista `[]`.

**Para un Video de YouTube:**
```json
{
    "id": "vid-01",
    "title": "Título del Tutorial",
    "type": "video",
    "videoId": "ABC123xyz", // El ID que sale en la URL de YouTube después de 'v='
    "content": "Descripción opcional del video."
}
```

**Para un Artículo de Texto:**
```json
{
    "id": "art-01",
    "title": "Guía de Puntos",
    "type": "text",
    "content": "Texto largo del artículo...",
    "image": "https://..." // Opcional
}
```

Categorías disponibles:
*   General
*   Puntos (Puntos Cogo)
*   Superficies
*   Alineamientos
*   Perfiles
*   Ensamblajes
*   Corredores (Obra Lineal)
*   Secciones (Secciones Transversales)
*   SubassemblyComposer
*   Explanaciones
*   Dynamo
*   Otros

---

## 5. Recursos Adicionales (`resources_infraworks.json`)
Antes llamado "Recursos Infraworks". Funciona igual que la sección anterior.
Copia este bloque en la categoría que quieras (ej: "Infraworks", "GoogleEarth"):

```json
{
    "id": "add-01",
    "title": "Truco de Geolocalización",
    "type": "video", // o "text"
    "videoId": "XYZ123...",
    "content": "Descripción del truco."
}
```

Categorías disponibles:
*   General
*   Galeria
*   Infraworks
*   GoogleEarth
*   SASPlanet
*   Otros

---

## 6. Foro Autodesk (`forum_posts.json`)
Ahora incluye **Tags** para el filtrado.

```json
{
    "id": "post-01",
    "title": "Título del Post en el Foro",
    "topic": "Civil 3D / Superficies",
    "summary": "Resumen del problema y solución.",
    "link": "https://forums.autodesk.com/...", // Enlace directo al foro
    "isSolution": true, // true si es Solución Aceptada
    "date": "2024",
    "tags": ["#Civil3D", "#Superficies", "#TinSurface"] // Tus hashtags para filtrar
}
```

---

## 7. Comunidad Privada (`community_content.json`)
Esta sección tiene un "bloqueo" simple por contraseña.

### Cambiar la Contraseña
Para cambiar la clave de acceso, debes editar el archivo: `src/pages/Community.jsx`.
Busca la línea:
`const ACCESS_CODE = "CIVIL3D2025";` y cambia el texto entre comillas.

### Editar Contenido
En `src/data/community_content.json`:
*   **publicInfo**: Lo que ve todo el mundo (Título, descripción, próxima sesión).
*   **vipContent**: La lista de recursos que aparecen **después** de poner la clave.

```json
{
    "id": "vip-01",
    "title": "Masterclass Exclusiva",
    "type": "video", // o "download"
    "url": "https://...",
    "description": "..."
}
```

---

## ⚠️ Tips Importantes
1.  **Formato JSON**: Cuidado con las comas. El último ítem de una lista **NO** lleva coma al final.
2.  **Imágenes**: Puedes usar URLs de internet (Imgur, Unsplash) o poner tus imágenes en la carpeta `public/` y usarlas como `/nombre-archivo.jpg`.
3.  **Publicar**: Después de guardar los cambios en los archivos JSON, usa **GitHub Desktop** para hacer commit y push. La web se actualizará sola en unos minutos.
