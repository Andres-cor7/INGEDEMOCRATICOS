# INGEDEMOCRATICOS 🗳️✨
> **Rediseñando la democracia.** Una plataforma móvil disruptiva que transforma la consulta política aburrida en un feed interactivo y dinámico al estilo *Reels/Swipe*, garantizando el anonimato democrático total.

Este proyecto está desarrollado con **React Native** y **Expo Go**, optimizado para ofrecer animaciones nativas fluidas y un almacenamiento local robusto y seguro sin necesidad de servidores externos.

---

## 🛠️ Requisitos Previos

Antes de comenzar, asegúrate de tener instalado lo siguiente en tu equipo de desarrollo:

1. **Node.js** (Versión LTS recomendada) -> [Descargar Node.js](https://nodejs.org/)
2. **Git** -> [Descargar Git](https://git-scm.com/)
3. **Expo Go** (App en tu celular) -> Descárgala desde la App Store (iOS) o Google Play Store (Android).

---

## 🚀 Guía de Instalación Paso a Paso

Sigue estos comandos en tu terminal para clonar, instalar las dependencias y ejecutar el proyecto localmente.

### 1. Clonar el repositorio y entrar al directorio
```bash
git clone [https://github.com/Aercg/INGEDEMOCRATICOS.git](https://github.com/Aercg/INGEDEMOCRATICOS.git)
cd INGEDEMOCRATICOS
```
#Instalar dependencias base del paquete de Node
npm install

# Instalar dependencias nativas y de gestión de gestos compatibles con Expo
npx expo install react-native-gesture-handler react-native-reanimated

# Instalar la librería del Swiper para la mecánica de las tarjetas (Tinder/Reels style)
npm install react-native-deck-swiper
# Iniciar el entorno de Expo
npx expo start
