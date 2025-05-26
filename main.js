async function obtenerUsuarios() {
  const contenedor = document.getElementById("contenedor");
  const titulo = document.querySelector("#tituloEncabezado");

  const avatares = [
  "https://randomuser.me/api/portraits/men/11.jpg",
  "https://randomuser.me/api/portraits/women/22.jpg",
  "https://randomuser.me/api/portraits/men/33.jpg",
  "https://randomuser.me/api/portraits/women/44.jpg",
  "https://randomuser.me/api/portraits/men/55.jpg",
  "https://randomuser.me/api/portraits/women/66.jpg",
  "https://randomuser.me/api/portraits/men/77.jpg",
  "https://randomuser.me/api/portraits/women/88.jpg",
  "https://randomuser.me/api/portraits/men/99.jpg",
  "https://randomuser.me/api/portraits/women/10.jpg"
];


  try {
    // Mostrar loader temporal
    contenedor.innerHTML = `<p class="cargando">Cargando usuarios...</p>`;

    const respuesta = await fetch("https://jsonplaceholder.typicode.com/users");
    const usuarios = await respuesta.json();

    contenedor.innerHTML = ""; // Limpiar el loader

    usuarios.forEach((usuario, index) => {
      const card = crearTarjetaUsuario(usuario, avatares[index % avatares.length]);
      contenedor.appendChild(card);
    });

    console.log("Encabezado:", titulo?.textContent);

  } catch (error) {
    console.error("Error al cargar usuarios:", error);
    contenedor.innerHTML = `<p class="error">No se pudieron cargar los usuarios. Intenta de nuevo más tarde.</p>`;
  }
}

function crearTarjetaUsuario(usuario, avatarUrl) {
  const card = document.createElement("div");
  card.className = "card shadow p-4 m-3 text-center rounded";

  const img = document.createElement("img");
  img.src = avatarUrl;
  img.alt = `Avatar de ${usuario.name}`;
  img.className = "rounded-circle mb-3";
  img.style.width = "90px";

  const nombre = document.createElement("h4");
  nombre.className = "text-primary fw-bold";
  nombre.textContent = usuario.name;

  const datos = [
    { label: "Usuario", value: usuario.username },
    { label: "Email", value: usuario.email },
    { label: "Tel", value: usuario.phone },
    { label: "Ciudad", value: usuario.address.city }
  ];

  const datosHTML = datos.map(d => {
    const p = document.createElement("p");
    p.innerHTML = `<strong>${d.label}:</strong> ${d.value}`;
    return p;
  });

  const social = document.createElement("div");
  social.className = "d-flex justify-content-center gap-3 mt-2";
  social.innerHTML = `
    <i class="fab fa-facebook text-secondary"></i>
    <i class="fab fa-twitter text-secondary"></i>
    <i class="fab fa-instagram text-secondary"></i>
  `;

  card.append(img, nombre, ...datosHTML, social);
  return card;
}

obtenerUsuarios();
