# 🥗 Mi Dieta Familiar — PWA

App para ver las porciones de la dieta familiar, instalable en el celular.

## 📁 Archivos
```
dieta-app/
├── index.html       ← App principal
├── manifest.json    ← Configuración PWA
├── sw.js            ← Service Worker (funciona sin internet)
└── icons/
    ├── icon-192.png
    └── icon-512.png
```

---

## 🚀 Cómo subir a GitHub Pages (paso a paso)

### 1. Crear repositorio
- Ve a https://github.com/new
- Nombre: `mi-dieta` (o el que quieras)
- Público ✅
- Clic en **Create repository**

### 2. Subir los archivos
**Opción A — Drag & drop (más fácil):**
1. En tu repositorio, clic en **"uploading an existing file"**
2. Arrastra TODOS los archivos (index.html, manifest.json, sw.js)
3. Arrastra la carpeta `icons/` con sus 2 PNGs
4. Clic **Commit changes**

**Opción B — GitHub Desktop:**
1. Descarga GitHub Desktop
2. Clona tu repo
3. Copia los archivos dentro
4. Commit + Push

### 3. Activar GitHub Pages
1. Ve a tu repo → **Settings** → **Pages**
2. Source: **Deploy from a branch**
3. Branch: **main** / carpeta: **/ (root)**
4. Clic **Save**
5. Espera 1-2 minutos → tu URL será:
   `https://TU-USUARIO.github.io/mi-dieta/`

---

## 📱 Instalar en el celular

### Android (Chrome):
1. Abre la URL en Chrome
2. Aparece banner "Agregar a pantalla de inicio" → toca **Instalar**
3. O: menú ⋮ → "Agregar a pantalla de inicio"

### iPhone (Safari):
1. Abre la URL en **Safari** (no Chrome)
2. Toca el botón compartir 📤
3. "Agregar a pantalla de inicio" → **Agregar**

---

## 💡 Cómo usar la app

1. **Inicio** → elige Déficit o Mantenimiento
2. **Selecciona el menú** (Semana 1, 2, 3...)
3. **Toca Mamá / Papá / Yo**
4. Se muestra la foto de su porción
5. Toca **"Subir foto"** para agregar/cambiar la imagen
6. En ⚙️ **Menús** puedes agregar o eliminar menús

### Las fotos se guardan localmente en el dispositivo.

---

## ➕ Agregar más menús
1. Ve a ⚙️ (Menús)
2. Selecciona categoría, escribe el nombre y emoji
3. Toca "Agregar menú"
