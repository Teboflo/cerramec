document.getElementById('whatsappForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const numeroTelefono = "593994914872";

    const nombre = document.getElementById('nombre').value.trim();
    const celular = document.getElementById('celular').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    const textoMensaje =
        `*NUEVA SOLICITUD DE COTIZACIÓN - CERRAMEC*\n\n` +
        `*Nombre:* ${nombre}\n` +
        `*Celular:* ${celular}\n` +
        `*Correo:* ${correo}\n\n` +
        `*Detalle del Proyecto:*\n${mensaje}`;

    // 4. Codificación del texto para URL
    const mensajeCodificado = encodeURIComponent(textoMensaje);
    const urlWhatsapp = `https://api.whatsapp.com/send?phone=${numeroTelefono}&text=${mensajeCodificado}`;

    // 5. Redirección a WhatsApp en pestaña nueva
    window.open(urlWhatsapp, '_blank');
});