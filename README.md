

<!-- Comentarios -->
17-nov-2021

# Convenciones
🎃 Jorge 
👹 Juan
🔥 Crítico
⬅️ Petición a BBDD

---
### PROYECTO
- Revisar Vercel y Heroku
- Refactorizar Scafolding del back

---
### PRODUCTO

# 🎃 [Jorge] LOGIN
### ui
### server
- 🔥 google (inicio de sesión y logout) || redirección a Front
- 🔥 gestionar GUARD para google


# 👹 [Juan]  ONBOARDING
### ui
- carrusel


# 🎃 [Jorge] CALCULADORA 
👉 Hablar con UX para Hacer al menos una vez por semana
### ui
- 🔥🔥🔥 añadir formulario con preguntas finales
### server
- 🔥 ⬅️ POST entrada en la BBDD calculadora


# 🎃 [Jorge] HOME 
# ui
- 🔥🔥🔥 tamaños de los elementos
  - histórico de entradas
  - card (comparativa de carbon)
  - entradas último daily (display fecha)
### server
- 🔥 ⬅️ GET BOOL daily entry -> display modal
- 🔥 ⬅️ GET acumulado vertical de huella de carbono (⬅️ query fecha, vertical)
- 🔥 ⬅️ GET resultados de último daily (⬅️ query por fecha )
- 🔥 ⬅️ GET diferencia acumulado entradas en el formulario

# [Pte asign] DAILY
### ui
- formulario checkbox
### server
- ⬅️ POST acciones diarias que bajan el impacto de la huella
- ⬅️ GET descuentos de usuario

# [Pte asign] ACCIONES
👉 Hablar con UX para funsionarlo con Daily
### ui
### server


# [Pte asign] LOGROS
👉 Hablar con UX para funsionarlo con Daily
### ui
### server


# 👹 [Juan] RANKING -  MAPA
### ui
- 🔥 integrar en la pantalla
### server
- 'Misma BBDD de RANKING - LISTADO' 
- 🔥 Google ubicación


# 🎃 [Jorge] RANKING - LISTADO
### ui
- integrar en la pantalla
### server
- 🔥 ⬅️ GET Obtener todos los usuarios ORDER huella de carbono 


# 🎃 [Jorge] RANKING - COMPARADOR
### ui
- diseños de pantalla
### server
- ⬅️ GET Obtener el usuario 1 || 2 
- 🔥 ⬅️ GET Obtener comparativa de huella de carbono entre usuario 1 || 2 (⬅️  query por fecha)


# 🎃 [Jorge] INICIATIVAS
### ui
- estilo visual final
### server
- ⬅️ GET obtener todas las iniciativas
- ⬅️ POST con la iniciativa e importe de donativo
- 🔥 integración stripe para el pago


# [Pte asign] PERFIL
### ui
- eliminar Modo oscuro
- eliminar Accesibilidad
- añadir enlaces de gestionar suscripción (o eliminar en últimas)
### server
- ⬅️ POST feedback de usuario
- ⬅️ GET FAQs de usuario
- 🔥 ⬅️ POST cerrar sesión (google, normal)




<!-- 

CALCULATOR: 
👉 Stepper:
- vertical: https://codesandbox.io/s/swtow
- horizontal: https://codesandbox.io/s/8v7m1?file=/src/Stepper.js
- Horizonatl: https://codesandbox.io/s/chakra-stepper-hook-bx8zf

 -->
