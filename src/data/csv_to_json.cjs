/**
 * Script: CSV/Excel → aula_virtual.json
 * 
 * Convierte un archivo CSV (exportado desde Excel) al formato JSON
 * que usa el Aula Virtual del portafolio.
 * 
 * USO:
 *   node csv_to_json.js recursos_template.csv
 * 
 * El archivo CSV debe tener estas columnas:
 *   grupo, categoria, id, titulo, tipo, videoId, imagen, contenido, contentFile
 * 
 * Ejemplo de fila:
 *   civil3d,Puntos,pun1,Mi título,video,abc123,,Descripción corta,
 *   civil3d,Superficies,art1,Mi artículo,article,,,Resumen,articulos/mi-articulo.md
 */

const fs = require('fs');
const path = require('path');

// --- Configuración ---
const inputFile = process.argv[2] || 'recursos_template.csv';
const outputFile = path.join(__dirname, 'aula_virtual.json');

// --- Leer CSV ---
function parseCSV(text) {
    const lines = text.split('\n').filter(line => line.trim());
    const headers = parseCSVLine(lines[0]);
    const rows = [];

    for (let i = 1; i < lines.length; i++) {
        const values = parseCSVLine(lines[i]);
        const row = {};
        headers.forEach((h, idx) => {
            row[h.trim()] = (values[idx] || '').trim();
        });
        rows.push(row);
    }
    return rows;
}

// Maneja campos con comas entre comillas
function parseCSVLine(line) {
    const result = [];
    let current = '';
    let inQuotes = false;

    for (let i = 0; i < line.length; i++) {
        const char = line[i];
        if (char === '"') {
            if (inQuotes && line[i + 1] === '"') {
                current += '"';
                i++;
            } else {
                inQuotes = !inQuotes;
            }
        } else if (char === ',' && !inQuotes) {
            result.push(current);
            current = '';
        } else {
            current += char;
        }
    }
    result.push(current);
    return result;
}

// --- Convertir a estructura JSON ---
function convertToJSON(rows) {
    const structure = {
        civil3d: {},
        complementarios: {}
    };

    for (const row of rows) {
        const grupo = row.grupo;
        const categoria = row.categoria;

        if (!grupo || !categoria) continue;

        const target = grupo === 'civil3d' ? structure.civil3d : structure.complementarios;

        if (!target[categoria]) {
            target[categoria] = [];
        }

        const item = {
            id: row.id,
            title: row.titulo,
            type: row.tipo || 'text',
        };

        // Solo agregar campos con valor
        if (row.videoId) item.videoId = row.videoId;
        if (row.imagen) item.image = row.imagen;
        if (row.contenido) item.content = row.contenido;
        if (row.contentFile) item.contentFile = row.contentFile;

        target[categoria].push(item);
    }

    return structure;
}

// --- Ejecutar ---
try {
    console.log(`📄 Leyendo: ${inputFile}`);
    const csvText = fs.readFileSync(inputFile, 'utf-8');
    const rows = parseCSV(csvText);
    console.log(`   → ${rows.length} recursos encontrados`);

    const json = convertToJSON(rows);

    // Mostrar resumen
    const civil3dCount = Object.values(json.civil3d).reduce((sum, arr) => sum + arr.length, 0);
    const compCount = Object.values(json.complementarios).reduce((sum, arr) => sum + arr.length, 0);
    console.log(`   → Civil 3D: ${Object.keys(json.civil3d).length} categorías, ${civil3dCount} recursos`);
    console.log(`   → Complementarios: ${Object.keys(json.complementarios).length} categorías, ${compCount} recursos`);

    fs.writeFileSync(outputFile, JSON.stringify(json, null, 4), 'utf-8');
    console.log(`\n✅ Generado: ${outputFile}`);
} catch (err) {
    console.error(`\n❌ Error: ${err.message}`);
    process.exit(1);
}
