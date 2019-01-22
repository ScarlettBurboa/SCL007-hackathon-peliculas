# Personas heridas por medio de transporte en EE.UU.

![ImagenPrincipal](https://www.sumel.cl/firma/Principal.jpg) 

## Definición del producto

Tema elegido: "Personas heridas por medio de transporte en EE.UU."
Esta base de datos nos muestra el número de personas heridas en accidentes de transporte, en Estados Unidos, desde 1960 hasta 2016.
La información original está en inglés, por lo que realizamos el proyecto en ese idioma.
¿Quién es el principal usuario de nuestro producto? Es el Área de Prevención de Accidentes, del Departamento de Transportes de Estados Unidos.
¿Cuáles es el objetivo del usuario en relación con el producto? ¿Cuándo utilizan o utilizarían el producto? Nuestro usuario necesita ver estadísticas de accidentes ocurridos desde el año 1960 hasta el 2016. Esta información, podrá analizarla, y utilizarla, para realizar un plan de prevención de accidentes.
¿Cuáles son los datos más relevantes que quieren ver en la interfaz y por qué? Los datos más relevantes que quiere ver el usuario, son las tasas anuales de los accidentes, separados en año, categoría y tipo de accidente, porque necesita tener en orden la información que analizará para realizar el plan de prevención de accidentes.

## ¿Cómo crees que el producto resuelve el problema que tiene el usuario?

Al ser una base de datos con una gran cantidad de información que el usuario debe consultar constantemente, existe la posibilidad que manipule mal el contenido, generando errores en la información. Para evitar esto, presentamos la página solo con opciones a seleccionar, que despliegan solo la información solicitada. El usuario no debe ingresar textos, ni buscar archivos, ni acudir a enlaces externos, ni realizar cálculos estadísticos; con esto, reducimos los tiempos de búsqueda de la información, permitiendo que reciba solo los datos requeridos.
Al recibir la información de manera ordenada, el usuario podrá realizar su análisis sin mayor dificultad.

## Desarrollo del proyecto

- Trabajamos con sprints, planificando las tareas que debíamos hacer. !(https://github.com/ScarlettBurboa/scl-2018-12-bc-core-data-lovers/issues/6) 
- La planificación de este proyecto, la registramos en Issues de GitHub. !(https://github.com/ScarlettBurboa/scl-2018-12-bc-core-data-lovers/issues) 
- Para los requerimientos mínimos de la aplicación, definimos una lista de tareas por hacer y así desarrollar el proyecto  !(https://github.com/ScarlettBurboa/scl-2018-12-bc-core-data-lovers/issues/1)
- Definimos la Historia de Usuario, planteando nuestro cliente, sus objetivos y necesidades !(https://github.com/ScarlettBurboa/scl-2018-12-bc-core-data-lovers/issues/2)
- El proceso de diseño, lo realizamos con prototipos de baja fidelidad, donde fuimos iterando propuestas, hasta llegar a una final, que desarrollamos en el presente proyecto. En el siguiente link !(https://github.com/ScarlettBurboa/scl-2018-12-bc-core-data-lovers/issues/4) adjuntamos la realización de los sketches creados.
- A través de Figma, realizamos el prototipo de alta fidelidad, logrando una propuesta visual más concreta. Esta presentación la realizamos en dos páginas !(https://www.figma.com/file/aeHRT0J2frLsU98D4hxaAOIA/Prototipo-Alta-Fidelidad)
- En paralelo al desarrollo de los prototipos, realizamos diagramas de flujo, para definir cuáles eran los pasos que debía seguir el usuario, al momento de ingresar a la página. Estos diagramas los fuimos profundizando, a medida que avanzamos con el proyecto!(https://github.com/ScarlettBurboa/scl-2018-12-bc-core-data-lovers/issues/3)
- Al ser una temática más estructurada, predominando la información numérica, presentamos una propuesta visual atractiva, sin perder la seriedad del asunto. Los colores, fuentes utilizadas, están basadas en la guía de estilo, asignada a nuestro proyecto. Además, nos orientamos, a nivel gráfico, con la web del Departamento de Transporte de Estados Unidos !(https://www.transportation.gov/)
- Utilizamos el editor de texto Visual Estudio Code para armar toda la página. En la estructura HTML realizamos la distribución y configuración del contenido en cuanto a textos, enlaces de imágenes. En el contenido de JavaScript, junto con el manejo de la data, realizamos variables que nos permiten realizar cálculos relacionados a suma, promedio, mediana, para que el usuario reciba de manera exacta la información que solicita, según sus requerimientos. Esto se cumple a través del método de filtrado, y se despliega a través de un listado. En CSS está toda la configuración de estilo de la página, definimos color, tamaño de las fuentes, ubicación de imágenes; en sí, ordenar visualmente la página para darle relación con el contenido de la información.

## Problemas detectados a través de tests de usabilidad

- La información no es corta, debido que está contenida en un base de datos con información de años de investigación.
- Calificamos como problema de usabilidad menor, puesto que arreglarlo tiene baja prioridad, lo relacionado con ayuda y documentación, porque la página solo despliega información específica ya existente en una base de datos, por lo que no dispone de un apartado de preguntas frecuentes, tampoco utiliza ejemplos, ni documentación de ayuda.
