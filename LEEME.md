# FisioForti | Manual del Administrador y Entrega del Proyecto

¡Felicidades! Has completado el desarrollo del sitio web de aterrizaje (Landing Page) para **FisioForti**. Este sitio ha sido diseñado con los más altos estándares estéticos (diseño premium, responsivo y dinámico) y de rendimiento SEO Local para dominar las búsquedas en Aguascalientes y sus municipios aledaños.

Este documento sirve como manual técnico de entrega y guía práctica para que tú o tu cliente puedan administrar el sitio fácilmente en el futuro.

---

## 📂 Estructura del Proyecto

El proyecto está organizado de manera modular e independiente siguiendo las mejores prácticas de la industria:

```text
FisioForti/
├── index.html              <- Contenido, estructura y metadatos SEO.
├── style.css               <- Hoja de estilos (colores, fuentes, diseño visual).
├── main.js                 <- Lógica interactiva (menús, animaciones de scroll y Lottie).
├── LEEME.md                <- Este manual de usuario.
├── pages/                  <- Directorio vacío para futuras páginas secundarias.
└── assets/                 <- Recursos multimedia del sitio (en minúsculas).
    ├── images/             <- Logotipos y recursos visuales.
    │   └── icons/          <- Colección de iconos SVG opcionales.
    ├── lottie/             <- Animación interactiva Lottie (Marathon.json).
    ├── audio/              <- Carpeta para futuros archivos de audio.
    └── fonts/              <- Carpeta para futuras tipografías locales.
```

---

## 🚀 Guía de Despliegue en Internet (Hosting)

El proyecto es **estático y sumamente ligero**, lo que significa que no requiere bases de datos ni configuraciones de servidor complejas. Puede alojarse gratis o a un costo mínimo.

### Opción 1: Alojamiento Gratuito y Veloz (Netlify o Vercel)
Ideal para pruebas o para producción si no desean contratar hosting tradicional:
1. Entra a [Netlify](https://www.netlify.com/) o [Vercel](https://vercel.com/) y regístrate gratis.
2. Ve a la sección **"Deploy manually"** o arrastra la carpeta completa `FisioForti` a la zona de carga de tu navegador.
3. ¡Listo! En 5 segundos el sitio estará en línea con un subdominio gratuito (ej. `fisioforti.netlify.app`). Desde allí puedes asociar su dominio definitivo (`.com`).

### Opción 2: Hosting Tradicional (cPanel / Hostinger / GoDaddy)
Si el cliente compró un plan de hosting con cPanel o un gestor de archivos:
1. Comprime toda la carpeta del proyecto en un archivo `.zip`.
2. Entra al **Administrador de Archivos** de tu hosting en cPanel y ve a la carpeta raíz (usualmente `public_html`).
3. Sube el archivo `.zip` y haz clic derecho para **Extraer**.
4. Asegúrate de que `index.html` quede directamente dentro de la carpeta `public_html` (no en una subcarpeta interna) para que la web abra directamente al escribir el dominio en el navegador.

---

## 📝 Guía de Modificaciones Frecuentes

Para editar los datos del sitio, solo necesitas abrir el archivo `index.html` con cualquier editor de texto plano (como Bloc de Notas, VS Code o el editor integrado de tu panel de hosting) y buscar la información que deseas modificar.

### 1. Cambiar el Número de Teléfono
Busca la tarjeta de contacto de teléfono (alrededor de la línea **630**) y el enlace de llamada directa:
```html
<!-- Modifica el enlace de llamada ('tel:') y el texto visual para el usuario -->
<a href="tel:+524491935898">+52 449 193 5898</a>
```

> [!IMPORTANT]
> Si cambias el teléfono de la clínica, asegúrate de actualizarlo también en el script de datos estructurados de Google (JSON-LD) en el `<head>` del HTML (aproximadamente en la línea **42**):
> `"telephone": "+524491935898"`

---

### 2. Cambiar el Enlace de WhatsApp (Botón de Agendar)
Para cambiar el número de WhatsApp al que llegan los mensajes automáticos, busca los enlaces con la clase `nav-cta` o `btn-white` (alrededor de la línea **590** y **610**) y edita el número en el link:
```html
<!-- Reemplaza el número 524491935898 por el nuevo con su código de país al inicio (52 para México) -->
<a href="https://wa.me/524491935898?text=Buena%20tarde...
```

---

### 3. Editar los Horarios de Consulta
Busca el bloque de horarios en la sección de contacto (alrededor de la línea **640**):
```html
<p>
  <strong>Lunes a Viernes:</strong> 4:00 p.m. – 8:00 p.m.<br />
  <strong>Sábado:</strong> 8:00 a.m. – 3:00 p.m.<br />
  <strong>Domingo:</strong> Cerrado
</p>
```

> [!IMPORTANT]
> Recuerda cambiar los horarios también en el marcado SEO Schema JSON-LD (líneas **58 a 77**) para mantener la coherencia NAP que Google utiliza para rankear el negocio local en Maps.

---

### 4. Cambiar la Dirección Física
Busca la tarjeta de dirección en la sección de contacto (alrededor de la línea **620**) y edita el texto:
```html
<p>Av Gabriela Mistral 737,<br />Sta Anita IV, 20164 Aguascalientes, Ags.</p>
```

> [!WARNING]
> Si el negocio se muda, debes actualizar obligatoriamente las coordenadas geográficas (`latitude` y `longitude` en las líneas **54 y 55**) y la dirección física (`streetAddress` y `postalCode` en las líneas **69 a 50**) dentro del JSON-LD en la cabecera. De lo contrario, Google detectará una incoherencia y bajará la posición en los resultados locales de búsqueda.

---

## 🎨 Personalización Estética (CSS)
Toda la paleta de colores del sitio está centralizada en variables CSS (diseño por tokens) al inicio del archivo `style.css`. Si en el futuro deseas cambiar la identidad de marca (ej. usar un azul turquesa diferente o un gris de fondo distinto), solo necesitas modificar las variables `:root`:

```css
:root {
  --teal: #2fbfad;        /* Color principal turquesa */
  --teal-light: #4dd4c4;  /* Turquesa brillante */
  --teal-dark: #1a9e8e;   /* Turquesa oscuro de contraste */
  --navy: #1e3a5f;        /* Azul marino corporativo */
  --white: #ffffff;
}
```
Cualquier cambio aquí se reflejará automáticamente en todo el sitio web de inmediato, manteniendo la consistencia de diseño visual sin tener que editar línea por línea.
