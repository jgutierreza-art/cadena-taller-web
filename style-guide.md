# Guía de estilos · Cadena Taller

## 1. Concepto
Aspecto directo y práctico, como un taller: azul cobalto intenso, amarillo de señal y tipografía grande y pesada.
Un solo elemento protagonista: el titular y la bicicleta sobre el fondo azul del inicio.

## 2. Colores
| Nombre | HEX | Uso |
|---|---|---|
| Tinta | `#101B3B` | Texto principal, logotipo, pie de página |
| Cobalto | `#2341D9` | Fondo del inicio, botón principal, enlaces |
| Cobalto oscuro | `#1A31A8` | Hover del botón cobalto |
| Amarillo señal | `#FFC62E` | Botón de acción en el inicio, detalles, foco de teclado |
| Fondo | `#F4F6FA` | Fondo general de la página |
| Blanco | `#FFFFFF` | Secciones alternas, campos de formulario |
| Borde | `#D5DBE8` | Líneas divisorias |
| Texto suave | `#4A5578` | Descripciones y notas |
| Error | `#B3261E` | Mensajes de error del formulario |
| Éxito | `#1B7F4B` | Mensaje de confirmación |

Contrastes: Tinta sobre Fondo 15:1 · Blanco sobre Cobalto 7,5:1 · Tinta sobre Amarillo 11:1 (todos AA/AAA).

## 3. Tipografía
Familia única: **Inter** (alternativas: system-ui, Segoe UI, Arial). Se instala con la fuente del sistema o se enlaza desde Google Fonts.

| Elemento | Tamaño | Peso | Interlineado | Tracking |
|---|---|---|---|---|
| H1 | 40 a 72 px (`clamp(2.5rem, 7vw, 4.5rem)`) | 900 | 1.02 | -0.04em |
| H2 | 28 a 40 px | 800 | 1.1 | -0.03em |
| H3 | 18 px | 700 | 1.3 | -0.01em |
| Párrafo | 16 px | 400 | 1.6 | normal |
| Texto del inicio | 18 px | 400 | 1.6 | normal |
| Nota / etiqueta | 14 px | 600 | 1.6 | normal |
| Precio | 24 px | 900 | 1.1 | -0.02em |

Largo de línea máximo: 46 a 64 caracteres.

## 4. Espaciados (escala de 8 px)
| Token | Valor | Uso |
|---|---|---|
| `--e1` | 8 px | Separación mínima |
| `--e2` | 16 px | Entre campos, botones |
| `--e3` | 24 px | Entre elementos de una lista |
| `--e4` | 32 px | Entre título y contenido |
| `--e5` | 48 px | Espacio mayor |
| `--e6` | 80 px | Entre secciones |

Ancho máximo del contenido: 1120 px. Márgenes laterales mínimos: 16 px.

## 5. Bordes
Radio único: 6 px. Líneas de 1 px en `#D5DBE8`; líneas de 2 px en Tinta para abrir listas.

## 6. Componentes
- **Botón primario (amarillo):** fondo `#FFC62E`, texto Tinta, alto mínimo 48 px, padding 12 × 24 px, peso 700.
- **Botón cobalto:** fondo `#2341D9`, texto blanco; hover `#1A31A8`.
- **Botón con borde:** borde blanco 2 px sobre fondo azul; hover invierte colores.
- **Encabezado:** blanco, 72 px de alto, logotipo a la izquierda y navegación a la derecha; en móvil, botón de menú de 48 px.
- **Fila de servicio:** nombre, descripción, tiempo y precio en una línea (escritorio) o apilados (móvil).
- **Paso numerado:** círculo de 56 px, fondo Tinta, número amarillo. Se usa solo porque el proceso sigue un orden.
- **Pregunta frecuente:** elemento `details`, signo + / – en cobalto.
- **Campo de formulario:** alto mínimo 48 px, borde 2 px `#8F9BB8`, etiqueta visible encima, mensaje de error en rojo debajo.
- **Tarjeta de contacto:** fondo Tinta, título amarillo, iconos en blanco.
- **Pie de página:** fondo Tinta, logotipo blanco.

## 7. Iconos y logotipo
- Iconos SVG de 24 × 24 px, trazo de 2 px, esquinas redondeadas, color cobalto.
- Logotipo: rueda con eje amarillo + "Cadena" en Tinta y "Taller" en cobalto. Versión blanca para fondos oscuros.
- Espacio libre alrededor del logotipo: mínimo igual a la altura de la letra "C".

## 8. Puntos de quiebre
- Móvil: menos de 900 px (una columna, menú desplegable)
- Escritorio: 900 px o más (dos columnas, menú visible)

## 9. Accesibilidad
Foco de teclado visible (amarillo con anillo oscuro), enlace "Saltar al contenido", etiquetas en todos los campos, `alt` en imágenes informativas y vacío en decorativas, respeto a `prefers-reduced-motion`.
