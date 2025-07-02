# 🐶 Dog Gallery - React + Zustand + Dog API

Este proyecto es una galería interactiva de razas de perros con imágenes aleatorias, desarrollado en **React** usando **Zustand** para el manejo de estado global y consumo de la API externa [Dog CEO](https://dog.ceo/dog-api/).

---




## 🚀 Funcionalidades

✅ **Listado de Razas:**  
Se obtiene el listado de todas las razas disponibles desde la API.  

✅ **Imágenes Aleatorias:**  
Cada raza se acompaña de una imagen aleatoria consumida de la API.  

✅ **Filtro por Raza:**  
Barra de búsqueda para filtrar las razas de perros en tiempo real.  

✅ **Sistema de Favoritos:**  
Puedes marcar razas como favoritas, las cuales se almacenan en el estado global mediante Zustand.  

✅ **Notificaciones (Toast):**  
Al añadir o eliminar favoritos se muestra un toast de confirmación.

---

## 🛠️ Tecnologías Utilizadas

- ⚛️ **React** - Librería principal de la interfaz  
- 🐻 **Zustand** - Estado global simple y eficiente  
- 🎨 **Tailwind CSS** - Estilizado rápido y responsive (opcional)  
- 🌐 **Dog API** - API pública para obtener razas e imágenes  
- 🍞 **React-Toastify** - Notificaciones elegantes  

---

## 📂 Estructura del Proyecto

src/
├── components/
│ ├── CardList.jsx # Listado de tarjetas por raza
│ ├── Card.jsx # Componente individual de raza e imagen
│ ├── SearchBar.jsx # Barra de búsqueda
│ └── Favorites.jsx # Lista de favoritos
├── store/
│ └── useDogStore.js # Zustand para estado global
├── services/
│ ├── fetchBreeds.js # Servicio para obtener razas
│ └── fetchImageByBreed.js # Servicio para obtener imágenes
├── App.jsx # Componente principal
└── main.jsx # Punto de entrada de la app

yaml
Copiar código

---

## 🔧 Instalación y Ejecución

1. Clona el repositorio:  
   ```bash
   git clone https://github.com/tu-usuario/dog-gallery.git
   cd dog-gallery
Instala las dependencias:

bash
Copiar código
npm install
Ejecuta el proyecto:

bash
Copiar código
npm run dev
🌐 Deploy
Puedes acceder al proyecto desplegado aquí:
🔗 [https://tudominio.vercel.app (Reemplaza por tu link real)](https://papibata3-dogs-page-2y29.vercel.app/)

🎥 Video Explicativo
Puedes ver una demostración funcional aquí:
🔗 [https://youtu.be/tu-video (Reemplaza por tu link real)](https://youtu.be/hssr-wOq5yM)

🎯 Conclusión
Este proyecto demuestra el uso de buenas prácticas en React, organización modular, consumo de APIs externas, manejo de estado global con Zustand y una interfaz amigable.

¡Que el código te acompañe! ⚛️✨🐾

yaml
Copiar código

---

## ✅ **¿Quieres que te lo genere como archivo `.md` listo para descargar?**

Si me confirmas, te lo preparo en un archivo para que lo descargues de inmediato. ¿Quieres que lo haga? 😄



