import './style.css'
const app = document.getElementById('app');

    // Crear header con logo y navegación
    const header = document.createElement('header');
    header.className = 'game-header';

    // Logo de la tienda
    const logo = document.createElement('div');
    logo.className = 'logo';
    logo.innerHTML = '<span>GAME</span>ZONE';

    // Menú principal
    const nav = document.createElement('nav');
    nav.className = 'main-nav';

    // Elementos del menú con iconos
    const menuItems = [
      { text: 'Inicio', icon: 'fa-home', href: '#', active: true },
      { text: 'Nuevos', icon: 'fa-star', href: '#new' },
      { text: 'Ofertas', icon: 'fa-tag', href: '#offers', badge: 'HOT' },
      { text: 'Categorías', icon: 'fa-list', href: '#categories', dropdown: [
        'Acción', 'Aventura', 'Deportes', 'RPG', 'Estrategia', 'Shooters'
      ]}
    ];

    // Crear elementos del menú
    const navList = document.createElement('ul');
    navList.className = 'nav-list';

    menuItems.forEach(item => {
      const listItem = document.createElement('li');
      listItem.className = item.active ? 'active' : '';
      
      const link = document.createElement('a');
      link.href = item.href;
      link.innerHTML = `<i class="fas ${item.icon}"></i> ${item.text}`;
      
      if(item.badge) {
        const badge = document.createElement('span');
        badge.className = 'menu-badge';
        badge.textContent = item.badge;
        link.appendChild(badge);
      }
      
      listItem.appendChild(link);
      
      if(item.dropdown) {
        const dropdown = document.createElement('div');
        dropdown.className = 'dropdown-content';
        
        item.dropdown.forEach(subItem => {
          const subLink = document.createElement('a');
          subLink.href = `#${subItem.toLowerCase()}`;
          subLink.textContent = subItem;
          dropdown.appendChild(subLink);
        });
        
        listItem.appendChild(dropdown);
        
        listItem.addEventListener('mouseenter', () => {
          dropdown.style.display = 'block';
        });
        
        listItem.addEventListener('mouseleave', () => {
          dropdown.style.display = 'none';
        });
      }
      
      navList.appendChild(listItem);
    });

    nav.appendChild(navList);

    // Carrito de compras
    const cart = document.createElement('div');
    cart.className = 'cart';
    cart.innerHTML = `
      <a href="#cart">
        <i class="fas fa-shopping-cart"></i>
        <span class="cart-counter">0</span>
      </a>
    `;

    // Barra de búsqueda
    const search = document.createElement('div');
    search.className = 'search-bar';
    search.innerHTML = `
      <input type="text" placeholder="Buscar juegos...">
      <button><i class="fas fa-search"></i></button>
    `;

    // Construir header
    header.appendChild(logo);
    header.appendChild(nav);
    header.appendChild(search);
    header.appendChild(cart);

    // Contenido principal con parallax
    const mainContent = document.createElement('main');
    mainContent.innerHTML = `
      <section class="hero-section">
        <div class="hero-content">
          <h1>Los mejores videojuegos al mejor precio</h1>
          <p>Descubre las últimas novedades y ofertas exclusivas</p>
          <button class="btn">Ver catálogo</button>
        </div>
      </section>

      <section class="games-section">
        <div class="parallax-bg"></div>
        <h2>Novedades Destacadas</h2>
        <div class="games-grid" id="games-container"></div>
      </section>

      <section class="offers-section">
        <div class="offers-header">
          <h2>Ofertas Especiales <span class="offer-tag">LIMITADO</span></h2>
          <div class="controls">
            <button class="scroll-btn left"><i class="fas fa-chevron-left"></i></button>
            <button class="scroll-btn right"><i class="fas fa-chevron-right"></i></button>
          </div>
        </div>
        <div class="offer-scroller" id="offers-container"></div>
      </section>
    `;

    // Crear footer
    const footer = document.createElement('footer');
    footer.className = 'game-footer';
    footer.innerHTML = `
      <div class="footer-content">
        <div class="footer-links">
          <a href="#">Términos del servicio</a>
          <a href="#">Política de privacidad</a>
          <a href="#">Contacto</a>
          <a href="#">Soporte</a>
        </div>
        <div class="footer-copyright">
          <span>© 2025 GameZone Inc. Entertainment Inc.</span>
          <span>Todos los derechos reservados.</span>
        </div>
      </div>
    `;

    // Agregar todo al DOM
    app.appendChild(header);
    app.appendChild(mainContent);
    app.appendChild(footer);

    // 6 Juegos con información detallada
    const games = [
      { 
        title: 'Cyberpunk 2077', 
        price: '$49.99',
        description: 'Sumérgete en Night City, una metrópolis obsesionada con el poder, la moda y las modificaciones corporales. Como V, un mercenario fuera de la ley, tendrás acceso a un arsenal mejorado y habilidades especiales.',
        image: 'https://res.cloudinary.com/dqstycwjr/image/upload/v1750351014/Cyberpunk_2077_ndqrzj.png',
        genre: 'RPG Futurista',
        features: ['Mundo abierto', 'Personalización extrema', 'Historia no lineal']
      },
      { 
        title: 'Elden Ring', 
        price: '$59.99',
        description: 'Un juego de fantasía épica donde explorarás las Tierras Intermedias. Creado por Hidetaka Miyazaki y George R.R. Martin, combina el combate desafiante de Souls con un vasto mundo abierto.',
        image: 'https://res.cloudinary.com/dqstycwjr/image/upload/v1750345711/2_yb2ofv.png',
        genre: 'Souls-like',
        features: ['Mundo abierto', 'Combate desafiante', 'Jefes épicos']
      },
      { 
        title: 'God of War', 
        price: '$39.99',
        description: 'Kratos y su hijo Atreus se embarcan en un viaje a través de los reinos nórdicos. Una historia emocionante sobre paternidad con un combate brutal y gráficos impresionantes.',
        image: 'https://res.cloudinary.com/dqstycwjr/image/upload/v1750345711/3_rp8fbj.png',
        genre: 'Aventura Épica',
        features: ['Historia emocionante', 'Combate táctico', 'Mundo interconectado']
      },
      { 
        title: 'Horizon Forbidden West', 
        price: '$54.99',
        description: 'Aloy explora el Oeste Prohibido, un territorio lleno de misterios y máquinas asombrosas. Un mundo abierto impresionante con una narrativa envolvente y combates dinámicos.',
        image: 'https://res.cloudinary.com/dqstycwjr/image/upload/v1750345711/4_iqeqlu.png',
        genre: 'Aventura',
        features: ['Mundo abierto detallado', 'Combate estratégico', 'Historia profunda']
      },
      { 
        title: 'The Legend of Zelda: Tears of the Kingdom', 
        price: '$59.99',
        description: 'Link explora los cielos y las profundidades de Hyrule en esta secuela de Breath of the Wild. Nuevas habilidades y un mundo expandido ofrecen infinitas posibilidades.',
        image: 'https://res.cloudinary.com/dqstycwjr/image/upload/v1750345712/5_nkp1us.png',
        genre: 'Aventura',
        features: ['Exploración libre', 'Física interactiva', 'Creatividad ilimitada']
      },
      { 
        title: 'Starfield', 
        price: '$69.99',
        description: 'El primer nuevo universo en 25 años de Bethesda Game Studios. Explora las estrellas y descubre los secretos de la galaxia en este RPG espacial épico.',
        image: 'https://res.cloudinary.com/dqstycwjr/image/upload/v1750345712/6_sqmruh.png',
        genre: 'RPG Espacial',
        features: ['Más de 1000 planetas', 'Combate espacial', 'Historia profunda']
      }
    ];

    // Crear las cards de juegos (sección principal)
    const gamesContainer = document.getElementById('games-container');
    games.forEach(game => {
      const gameCard = document.createElement('div');
      gameCard.className = 'game-card';
      gameCard.innerHTML = `
        <div class="card-inner">
          <div class="card-front">
            <div class="game-image" style="background-image: url('${game.image}')"></div>
            <div class="game-info">
              <h3>${game.title}</h3>
              <p class="price">${game.price}</p>
              <p class="genre">${game.genre}</p>
            </div>
          </div>
          <div class="card-back">
            <h3>${game.title}</h3>
            <p class="description">${game.description}</p>
            <ul class="features">
              ${game.features.map(feat => `<li><i class="fas fa-check-circle"></i> ${feat}</li>`).join('')}
            </ul>
            <button class="btn-add">Añadir al carrito <i class="fas fa-cart-plus"></i></button>
          </div>
        </div>
      `;
      gamesContainer.appendChild(gameCard);
    });

   const juegos = [
  {
    title: "The Legend of Zelda: Echoes of Wisdom",
    price: '$59.99',
    description: "Explora una nueva aventura con Zelda como protagonista en esta entrega única para Nintendo Switch.",
    image: 'https://res.cloudinary.com/dqstycwjr/image/upload/v1750350766/Zelda_u0e9jh.png',
    genre: "Aventura",
    features: ["Modo historia", "Exploración libre", "Rompecabezas inteligentes"]
  },
  {
    title: "Donkey Kong Country Returns HD",
    price: '$49.99',
    description: "El clásico Donkey Kong regresa con gráficos en alta definición y nuevos niveles exclusivos.",
    image: 'https://res.cloudinary.com/dqstycwjr/image/upload/v1750350211/Donkey_Kong_Country_Returns_HD_wqj243.png',
    genre: "Plataformas",
    features: ["Cooperativo local", "Niveles desafiantes", "Ambientes selváticos"]
  },
  {
    title: "Resident Evil 3",
    price: '$39.99',
    description: "Revive el horror con gráficos renovados en esta versión para PlayStation 5 del clásico Resident Evil 3.",
    image: 'https://res.cloudinary.com/dqstycwjr/image/upload/v1750350768/Resident_Evil_3_ibaveq.png',
    genre: "Terror y acción",
    features: ["Gráficos 4K", "Modo campaña", "Némesis como jefe principal"]
  },
  {
    title: "Stellar Blade",
    price: '$69.99',
    description: "Acción intensa en un futuro distópico con una heroína letal en esta exclusiva de PlayStation 5.",
    image: 'https://res.cloudinary.com/dqstycwjr/image/upload/v1750350204/Stellar_Blade_2_datys8.png',
    genre: "Acción y ciencia ficción",
    features: ["Combate rápido", "Escenarios futuristas", "Narrativa cinematográfica"]
  },
  {
    title: "Astro Bot",
    price: '$59.99',
    description: "Vive una aventura vibrante y colorida con Astro Bot en una experiencia optimizada para PS5.",
    image: 'https://res.cloudinary.com/dqstycwjr/image/upload/v1750350211/Astro_Bot_gwduij.png',
    genre: "Plataformas y aventura",
    features: ["Uso del DualSense", "Niveles creativos", "Ideal para toda la familia"]
  },
  {
    title: "Super Mario Bros. Wonder",
    price: '$59.99',
    description: "Mario y sus amigos exploran un mundo lleno de sorpresas y transformaciones en esta nueva entrega para Nintendo Switch.",
    image: 'https://res.cloudinary.com/dqstycwjr/image/upload/v1750350769/Super_Mario_Bros._Wonder_jdsx4k.png',
    genre: "Plataformas",
    features: ["Modo cooperativo", "Transformaciones únicas", "Mundos dinámicos"]
  }
];

    // Crear ofertas especiales (sección carrusel)
    const offersContainer = document.getElementById('offers-container');
    juegos.forEach((juegos, index) => {
      const discount = 30 + index * 5;
      const offerItem = document.createElement('div');
      offerItem.className = 'offer-item';
      offerItem.innerHTML = `
        <div class="offer-badge">-${discount}%</div>
        <div class="juegos-image" style="background-image: url('${juegos.image}')"></div>
        <div class="offer-details">
          <h3>${juegos.title}</h3>
          <div class="price-container">
            <span class="old-price">${juegos.price}</span>
            <span class="new-price">$${(parseFloat(juegos.price.slice(1)) * (1 - discount/100)).toFixed(2)}</span>
          </div>
          <div class="platform-tags">
            <span>PS5</span>
            <span>XBOX</span>
            <span>PC</span>
          </div>
          <button class="offer-btn">Añadir al carrito</button>
        </div>
      `;
      offersContainer.appendChild(offerItem);
    });

    // Efecto parallax para el fondo
    window.addEventListener('scroll', () => {
      const scrollPosition = window.pageYOffset;
      const parallaxBg = document.querySelector('.parallax-bg');
      if(parallaxBg) {
        parallaxBg.style.transform = `translateY(${scrollPosition * 0.5}px)`;
      }
    });

    // Funcionalidad del carrusel de ofertas
    const scroller = document.querySelector('.offer-scroller');
    const scrollLeftBtn = document.querySelector('.scroll-btn.left');
    const scrollRightBtn = document.querySelector('.scroll-btn.right');

    if(scrollLeftBtn && scrollRightBtn) {
      scrollLeftBtn.addEventListener('click', () => {
        scroller.scrollBy({ left: -300, behavior: 'smooth' });
      });

      scrollRightBtn.addEventListener('click', () => {
        scroller.scrollBy({ left: 300, behavior: 'smooth' });
      });
    }

    // Efecto para el contador del carrito
    setInterval(() => {
      const counter = document.querySelector('.cart-counter');
      if(counter) {
        const randomNum = Math.floor(Math.random() * 10);
        counter.textContent = randomNum;
        counter.style.animation = 'bounce 0.3s';
        setTimeout(() => counter.style.animation = '', 300);
      }
    }, 3000);