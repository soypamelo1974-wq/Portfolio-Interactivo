const contenido = document.getElementById("contenido-dinamico");

document.getElementById("btn-sobre-mi").addEventListener("click", () => {
  contenido.innerHTML = `
    <h3>Sobre mí</h3>
    <p>
      AI Content Creator, AI & Marketing Consultant y UX Designer.
      Actualmente ampliando conocimientos en desarrollo web y JavaScript.
    </p>
  `;
});

document.getElementById("btn-certificados").addEventListener("click", () => {
  contenido.innerHTML = `
    <h3>Certificados</h3>
    <ul>
      <li>Google UX Design</li>
      <li>Desarrollo Web</li>
      <li>Fundamentos de Python</li>
    </ul>
  `;
});

document.getElementById("btn-proyectos").addEventListener("click", () => {
  contenido.innerHTML = `
    <h3>Proyectos</h3>
    <ul>
      <li>Portfolio Interactivo</li>
      <li>EcoTech Solutions</li>
      <li>Automatizaciones con n8n</li>
    </ul>
  `;
});

document.getElementById("btn-contacto").addEventListener("click", () => {
  contenido.innerHTML = `
    <h3>Contacto</h3>
    <p>📧 fabianaida@outlook.com</p>
    <p>💼 https://www.linkedin.com/in/fabi-aid-tango1953/
    <p>🐙https://github.com/soypamelo1974-wq 
  `;
});

document.getElementById("btn-pdf").addEventListener("click", () => {
  window.print();
});

document.getElementById("btn-videos").addEventListener("click", () => {
  document.getElementById("video-principal").scrollIntoView({
    behavior: "smooth",
    block: "center"
  });
});