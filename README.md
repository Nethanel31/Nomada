# NÓMADA — agencia de viajes

Aplicación web responsive de demostración para descubrir destinos, consultar ubicaciones, organizar actividades y registrar solicitudes de cotización localmente. La dirección visual toma como referencia el tema oscuro teal de `DESIGN.md`.

Para una explicación del código y un guion de exposición, consulta [`EXPLICACION_PROYECTO.md`](./EXPLICACION_PROYECTO.md).
Para una explicación centrada en el funcionamiento de `app.js` y los cambios de ruta, consulta [`COMO_FUNCIONA_APP.md`](./COMO_FUNCIONA_APP.md).

## Ejecutar

No requiere compilación ni paquetes instalados. Para una vista rápida, abre `index.html` en el navegador. Para probar geolocalización y una experiencia más cercana a producción, inicia un servidor estático desde esta carpeta:

```powershell
python -m http.server 8000
```

Abre <http://localhost:8000>. También puedes usar la extensión Live Server de VS Code.

## Funciones implementadas

- Inicio editorial, navegación responsive y buscador de destinos.
- Catálogo con búsqueda, filtros por región y estilo, tarjetas y mapa interactivo.
- Fichas con información de destino, actividades, coordenadas de puntos de referencia y enlaces de navegación externa.
- Itinerario local: agregar, quitar y reordenar actividades, alternar lista/día/mapa, y advertir de horarios solapados.
- Solicitud de cotización validada en el navegador, con referencia de demostración y estado consultable localmente.
- Panel administrativo de demostración para revisar solicitudes, cambiar su estado y añadir/eliminar destinos.
- Favoritos e itinerario guardados en el almacenamiento local del navegador.
- Acción explícita para pedir ubicación al navegador; la posición se usa en memoria y no se persiste.
- Diseño adaptable, etiquetas y controles accesibles, foco visible y preferencia de movimiento reducido.
- Contenido en español; el idioma inglés y la internacionalización quedan pendientes.

## Datos e integraciones

El catálogo inicial, precios, actividades, fotografías y contenidos son ejemplos orientativos. Las coordenadas corresponden a puntos de interés conocidos y deben verificarse antes de un viaje real. Los mapas usan Leaflet y teselas de OpenStreetMap; requieren conexión a internet y atribución visible. Si no se descarga Leaflet, la página ofrece enlaces externos a OpenStreetMap.

La web **no** incluye servidor, base de datos, autenticación real, control de roles, inventario, disponibilidad, rutas calculadas, pagos ni correo. Las solicitudes, favoritos, destinos editados e itinerarios se guardan exclusivamente en `localStorage` del navegador utilizado. El panel «Administración demo» no está protegido y no debe recibir datos personales reales. Una solicitud local no se envía a la agencia ni implica una reserva.

## Para continuar a producción

1. Añadir backend y base de datos relacional con migraciones, validación en servidor, auditoría y autorización por roles.
2. Sustituir el almacenamiento local por API autenticada y limitar los datos personales.
3. Configurar proveedores de mapas/rutas según sus condiciones, credenciales restringidas y costes. OpenStreetMap aquí solo sirve el mapa base; no se usa para calcular rutas ni disponibilidad.
4. Integrar una pasarela de pago en entorno de pruebas y confirmar operaciones mediante backend/webhooks; nunca almacenar datos de tarjeta en esta aplicación.
5. Configurar correo transaccional y políticas de privacidad, cookies, cancelación y términos aplicables.
6. Revisar derechos de uso de imágenes, fuentes, contenidos, precios y datos de cada destino.

No hay claves privadas ni variables de entorno en esta versión estática.
