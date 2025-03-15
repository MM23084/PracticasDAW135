document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe y recargue la página

    // Obtener los valores de los campos
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Mostrar mensaje en consola
    console.log(`Usuario: ${username}, Contraseña: ${password}`);

    // Mostrar mensaje en el HTML
    const messageElement = document.getElementById('message');
    messageElement.textContent = `Bienvenido, ${username}!`;

    // Mostrar una alerta
    alert(`Inicio de sesión exitoso para ${username}`);

    // Opcional: Redirigir a otra página (descomenta si lo necesitas)
    // window.location.href = 'bienvenida.html';
});