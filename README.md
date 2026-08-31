# ⚡ Magis AI Academy — Landing Page

Landing page moderna y de alto rendimiento para **Magis AI Academy**, una plataforma de talleres intensivos de Inteligencia Artificial para el 2026.

[![Vercel Deployment](https://img.shields.io/badge/Deploy-Vercel-black?logo=vercel)](https://magis-io.ai)

---

## 🚀 Características Principales

- **Diseño Premium**: Interfaz oscura con acentos azul cobalto, optimizada para conversión.
- **Formulario Inteligente**: Captura de leads con validación en tiempo real (Nombre, Email, WhatsApp).
- **Stack Moderno**: HTML5 semántico, Tailwind CSS 3 (CDN), Lucide Icons.
- **Serverless Backend**: Funciones de Node.js desplegadas en Vercel para el registro de usuarios.
- **Almacenamiento**: Integración nativa con **Vercel Postgres**.

---

## 🏗️ Estructura del Proyecto

```text
Fast Mode/
├── api/
│   └── register.js      # Serverless Function (POST → Vercel Postgres)
├── assets/
│   └── img/             # Directorio de imágenes (Hero, Instructores)
├── index.html           # Landing page principal
├── vercel.json           # Configuración de redirecciones de Vercel
├── package.json          # Dependencias (Vercel Postgres)
├── DEPLOYMENT.md        # Guía paso a paso para el despliegue
└── README.md            # Documentación del proyecto
```

---

## 🛠️ Configuración y Despliegue

Para desplegar este proyecto en tu propio dominio:

1. **Subir a GitHub**: Sube los archivos a tu repositorio.
2. **Conectar a Vercel**: Importa el repositorio en el dashboard de Vercel.
3. **Activar Postgres**:
   - Ve a la pestaña **Storage**.
   - Crea una base de datos **Postgres**.
   - Conéctala al proyecto para inyectar las variables de entorno (`POSTGRES_URL`).
4. **Dominio Personalizado**: Agrega tu subdominio (ej: `academy.magis-io.ai`) en la configuración de dominios de Vercel.

Para una guía detallada, consulta [DEPLOYMENT.md](./DEPLOYMENT.md).

---

## 📄 Licencia

© 2026 Magis AI Academy. Todos los derechos reservados.
