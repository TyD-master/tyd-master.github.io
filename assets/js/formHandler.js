// Configuración para enviar correos con EmailJS
document.getElementById("contactForm").addEventListener("submit", async function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const button = document.getElementById("submitButton");
    button.disabled = true; // Deshabilitar botón

    try {
        await emailjs.send("service_hhsv8n9", "template_x74gt77", {
            from_name: name,
            from_email: email,
            message: message
        }, "zixP6wAP3FNGDbxWX"); // Aquí se usa tu Public Key
        
        alert("¡Mensaje enviado con éxito!");
    } catch (error) {
        alert("Error al enviar el mensaje, intenta nuevamente.");
    } finally {
        button.disabled = false; // Volver a habilitar el botón
    }
});
