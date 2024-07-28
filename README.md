# ccp-prueba-tecnica
Descripción
Esta es una aplicación de Next.js que implementa un sistema de login. Permite a los usuarios iniciar sesión utilizando sus credenciales y redirige a una página protegida. La aplicación ha sido diseñada con un estilo similar a la página de 'Cuidado con el Perro' y cuenta con un menú de navegación reutilizable y responsive.

***Instrucciones para Ejecutar

**Clona el repositorio:
git clone https://github.com/tu-usuario/prueba-tecnica-ccp.git
cd prueba-tecnica-ccp

**Instala las dependencias:
npm install

**Ejecuta la aplicación:
Copiar código
npm run dev

**Abre el navegador en http://localhost:3000/login.

*Enfoque
Next.js: Utilizado para crear páginas y manejar rutas.
React.js: Utilizado para crear componentes y manejar el estado.
Axios: Utilizado para hacer peticiones HTTP al endpoint de autenticación.
Local Storage: Utilizado para almacenar el token de autenticación.
Tailwind CSS: Utilizado para el diseño y la creación de una interfaz de usuario responsive.

*Características
**Página de Login:
El login está dividido en dos secciones.
La mitad izquierda contiene el formulario de inicio de sesión.
La mitad derecha tiene un mensaje de registro y un botón para crear una cuenta.
En pantallas de tamaño celular, las secciones se apilan verticalmente y se elimina el borde negro entre ellas.
El botón de iniciar sesión está deshabilitado hasta que se ingrese un usuario y una contraseña.

**Página de Dashboard:
Incluye un menú de navegación con botones para "Favoritos", "Carrito", y "Cerrar sesión".
El contenido del sidebar siempre está del lado derecho.
Utiliza un componente de navegación reutilizable.

**Componente de Navegación:
Contiene botones para "Favoritos", "Carrito", y un botón de sesión que cambia entre "Cerrar sesión" e "Iniciar sesión" basado en el estado de autenticación.
En pantallas de tamaño celular, el botón de cerrar sesión y un botón para desplegar el menú de navegación están visibles.
Usa localStorage para verificar si el usuario está autenticado y ajustar el estado del botón de sesión en consecuencia.

**Credenciales
Usuario: prueba-jr@hotmail.com
Contraseña: PruebaJR01

Contacto:
email: leo_rivera.f@hotmail.com
Celular: 55 2091 8542
