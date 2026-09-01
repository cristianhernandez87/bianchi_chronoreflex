# ChronoReflex

Aplicación de escritorio de alta precisión diseñada para medir tiempos de reacción visual. Construida con tecnologías web (React) y optimizada para ser empaquetada como un ejecutable nativo de Windows (`.exe`) sin depender de un backend externo.

## Stack Tecnológico

* **Core:** React 18, TypeScript, Vite
* **Estado Global:** Zustand
* **Estilos:** Tailwind CSS (maquetación ágil) + SCSS (efectos visuales complejos y control de cascada)
* **Empaquetado Nativo (Próximamente):** Tauri (Rust)

## Arquitectura de Datos

El proyecto opera exclusivamente del lado del cliente. 
* **Memoria en Tiempo de Ejecución:** Zustand gestiona la máquina de estados del juego (`IDLE`, `WAITING`, `READY`, `EARLY_CLICK`) y el arreglo temporal de puntajes.
* **Persistencia Local:** Los resultados de las sesiones se persisten localmente en el sistema de archivos del usuario.
* **Exportación:** Incluye un módulo autónomo para transformar los registros JSON a formato CSV utilizando APIs nativas del sistema operativo.

## Configuración y Setup Local

Debido a configuraciones específicas en la resolución de binarios, la inicialización de Tailwind se realizó de forma manual en la raíz del proyecto.

### 1. Clonar e Instalar Dependencias
Asegúrate de estar en el directorio raíz del proyecto (`bianchi_chronoreflex`) e instala los paquetes:

```bash
npm install