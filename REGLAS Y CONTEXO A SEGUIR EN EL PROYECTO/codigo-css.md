1. 🧩 Formato del código
1.1 Orientación y simplicidad
Orientación, debe estar el codigo hacia abajo
El codigo siempre debe ser lo mas fácil de leer posible, no hagas cosas que son un porro o super complicadas de entender si hay otra cosa que es mas simple y sencilla.
1.2 Uso de llaves
/* comentario del siguiente bloque de codigo /
 .selector {
   propiedad: valor; / comentario refiriéndose a la linea */
   propiedad: valor;
   propiedad: valor;
 }
1.3 Orden de propiedades
[ej: posición → caja → tipografía → visual]
1.4 Uso de comentarios
[Cuándo y cómo]

2. ⚙️ Buenas prácticas
2.1 Evitar !important
Sí
2.2 Uso de variables CSS
:root {
   --color-principal: #5D101E;
 }

3. 📱 Responsive
3.1 Breakpoints
Móvil: Max-width 768px
Tablet: Max-width 1024px
3.2 Media queries
Móvil: Max-width 768px
Tablet: Max-width 1024px
@media (min-width: [ ]) {
   /* estilos */
 }

4. 🗂️ Organización de estilos
4.1 Orden dentro de cada archivo
Variables
Reset / base
Tipografía
Estilos compartidos generales
Segmentación por comentarios de los estilos de cada sección con su respectivo codigo en cada segmento

💡 Tip: Cuando lo pegues en Google Docs, si el código se descoloca:
Selecciónalo
Pon fuente monoespaciada (ej: Courier New)
Ajusta sangría manual si hace falta
