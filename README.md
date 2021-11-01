

#### Pages

- Layout
  - 👉 Bottom Navbar
    - Iconos grandes, interacción final

- Onboarding
  - 🔥 🔥 carrusel, indicadores inferiores, flechas laterales

- Login
  - ERROR=BOOL
  - 👉 Formulario
    - Entradas
      - ✅ handle form
      - ✅ ver contraseña
      - ✅ login button disabled
      - recordar mis datos
    - Enviar formulario
      - Mensaje de error
      - Loading
    - 🎁 acceso con Google (Passport)

- Forgot pass
  - ERROR=BOOL
  - 👉 Formulario
    - ✅ handle form
    - 🎁 Envío email MailJet

- Reset pass
  - ERROR=BOOL
    - ✅ handle form
    - 🎁 RegEx contraseña
    - 🎁 Envío email MailJet

- Register
  - ERROR=BOOL
  - 👉 Formulario
    - ✅ handle form
    - 🎁 RegEx contraseña
  - 👉 Enviar formulario
    - Mensaje de error

- Home
  - 👉 Link 
    - comprar subscripción
  - 🔥 🔥 Dashboard
    - filtrado por fechas
    - carrusel días seleccionable
    - resumen de estadísticas
    - ver detalles
  - 👉 Nuevo
    - Botton nueva entrada 
  - 🔥 🔥 History
    - Inhabilitado si no está logeado
    - Tabla con entradas
    - ver detalles 
    - paginación

- New
  - 👉 Formulario
  - ver resultados

- History
  - 👉 Misma tabla de entradas
    - 🎁 Inhabilitado si no está logueado
    - Scroll, no paginación

- [ resultados ]
  - 🔥 🔥 Dashboard
    - completo con toda la información
  - 🔥 🔥 Acciones
    - tarjeta con acciones sugeridas

- Ranking
  - 👉 Tabla
    - Inhabilitado si no está logeado
    - Filtrado por fechas
    - Filtrado por localización
    - Filtrado por amigos
    - Resultados en orden

- Profile
  - LOGGED=BOOL
  - 👉 tarjeta de usuario
    - mostrar si es PRO
  - 👉 Modal
    - 🎁 Login
    - 🎁 Registro
  - 👉 Suscripción

- Preferencias
  - 👉 modificar datos 

- Suscripción
  - 🔥 🔥 Modelo de pago
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

