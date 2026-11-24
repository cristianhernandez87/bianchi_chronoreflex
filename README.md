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



<iframe width="560" height="315" src="https://www.youtube.com/embed/9kTGtMZTkOQ?si=wLtHAONx9kcR9vvn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/SJnYumiUoL0?si=NK6k2xcYBxfvekc7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/Ynu0iXCTotk?si=9o1mh4ONFMgN2_LK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/XUD06MTvEEg?si=KUixr0Zf3hhSB3H8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/Z_VZbPbfBBc?si=ksT1rTdl3YbInMYm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/tPxNx41Jr78?si=DqTP_RshP1bxHTMM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/fWk9nLYk1BU?si=MSKcpyEOyhyOdJIU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/DMlBM0frG6E?si=tHVz4nxFB2YKVLlA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/DMlBM0frG6E?si=z8kEqT1ex4iBQXQ7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/S-HLVBraS0k?si=at8RI2HDBnU7gHy2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/VGzXTcZutMk?si=unhOQT1ICtlO6Wdy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
