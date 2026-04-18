# Práctica: Mi primer componente en Angular

## Descripción

Este proyecto fue desarrollado como parte de una práctica de Dise;o Front End para aprender el uso de **componentes en Angular**.  
El objetivo principal fue crear un componente reutilizable que muestre una tarjeta de presentación personalizable, utilizando propiedades de entrada (`@Input`), manejo de eventos (`(click)`), e interpolación de datos (`{{ }}`).

El componente permite mostrar información como nombre, edad y una imagen, además de incluir un contador de "likes" que se actualiza al presionar un botón.



## Tecnologías utilizadas

- [Angular CLI](https://github.com/angular/angular-cli) version 21.2.6.
- TypeScript
- HTML
- CSS
- Angular CLI
- Node.js


## Funcionalidades implementadas

- Componente de tarjeta personalizable
- Recepción de datos mediante `@Input`
- Contador de "likes"
- Estilos personalizados con CSS
- Diseño responsive con múltiples tarjetas
- Uso de imágenes en cada tarjeta
- Layout en columnas
- Fondo con gradiente

---

## Estructura del componente

El componente principal creado fue:
```tarjeta/
tarjeta.ts
tarjeta.html
tarjeta.css
```

Este componente se utiliza dentro del componente principal de la aplicación.


## Ejecución del proyecto

Para ejecutar el proyecto localmente:

```bash
npm install
ng serve
```
Luego abrir en el navegador:
```
http://localhost:4200
```

# Evidencias
A continuación se muestran capturas de pantalla del funcionamiento del sistema.

![Tarjetas](/public/assets/evidence/evidencia1.jpg)
![Dar Like](/public/assets/evidence/evidencia2.jpg)
![Contador de Likes](/public/assets/evidence/evidencia3.jpg)