

#### Pages

- Layout
  - Bottom Navbar:
    - 👉 Iconos grandes, interacción final

- Onboarding
  - 🔥 carrusel, indicadores inferiores, flechas laterales

- Login
  - ERROR=BOOL
  - 👉 Formulario:
    - ✅ handle form
    - ✅ ver contraseña
    - ✅ login button disabled
    - [] checkbox recordar datos
  - 👉 Enviar formulario
    - [] Mensaje de error
    - [] inline loading
  - 🔥 acceso con Google (Passport)

- Forgot pass
  - ERROR=BOOL
  - 👉 Formulario
    - ✅ handle form
    - [] Envío email

- Reset pass
  - ERROR=BOOL
  - 👉 Formulario
    - ✅ handle form
    - 🔥 RegEx contraseña

- Register
  - ERROR=BOOL
  - 👉 Formulario
    - ✅ handle form
    - 🔥 RegEx contraseña
  - 👉 Enviar formulario
    - [] Mensaje de error
    - [] Envío email

- Home
  - 🔥 Link 
    - [] logged only
    - [] comprar subscripción
  - 🔥 Dashboard
    - filtrado por fechas
    - carrusel días seleccionable
    - resumen de estadísticas
    - ver detalles
  - 👉 Nuevo
    - Botton nueva entrada 
  - 🔥 History
    - Logged only
    - Tabla con entradas
    - ver detalles 
    - paginación

- New
  - 👉 Formulario
  - ver resultados

- History
  - 👉 Misma tabla de entradas
    - Logged in
    - Scroll, no paginación

- [ resultados ]
  - 🔥 Dashboard
    - completo con toda la información
  - 🔥 Acciones
    - tarjeta con acciones sugeridas

- Ranking
  - 🔥 Tabla
    - Inhabilitado si no está logeado
    - Filtrado por fechas
    - Filtrado por localización
    - Filtrado por amigos
    - Resultados en orden

- Profile
  - LOGGED=BOOL
  - 👉 tarjeta de usuario
    - [] mostrar si es PRO
  - 👉 Modal
    - ✅ Login
    - ✅ Registro
  - 👉 Suscripción

- Preferencias
  - 👉 modificar datos
    - Eliminar cuenta

- Suscripción
  - 🔥 Modelo de pago
    - Gratis, PRO
    - integrar con Stripe



#### BBDD

USER
image:
pro: bool
location: 

CALCULATOR
date:
entry:
self-calculated: 

SOLUTION


### States
- Skeleton - loading
- Spring - motion
- States - interaction 
- States - error / success


### Styling
- UI styling
  - ✅ layout
  - ✅ pages
  - ✅ components
  - ✅ elements

- UX routing
  - ✅ Auth
  - ✅ App
  - ✅ User

- Document
  - page title
  - Favicon

