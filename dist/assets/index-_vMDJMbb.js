(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function n(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(t){if(t.ep)return;t.ep=!0;const s=n(t);fetch(t.href,s)}})();const c=document.getElementById("app"),i=document.createElement("header");i.className="game-header";const d=document.createElement("div");d.className="logo";d.innerHTML="<span>GAME</span>ZONE";const l=document.createElement("nav");l.className="main-nav";const E=[{text:"Inicio",icon:"fa-home",href:"#",active:!0},{text:"Nuevos",icon:"fa-star",href:"#games-container"},{text:"Ofertas",icon:"fa-tag",href:"#offers-container",badge:"HOT"},{text:"Categorías",icon:"fa-list",href:"#categories",dropdown:["Acción","Aventura","Deportes","RPG","Estrategia","Shooters"]}],p=document.createElement("ul");p.className="nav-list";E.forEach(e=>{const a=document.createElement("li");a.className=e.active?"active":"";const n=document.createElement("a");if(n.href=e.href,n.innerHTML=`<i class="fas ${e.icon}"></i> ${e.text}`,e.badge){const o=document.createElement("span");o.className="menu-badge",o.textContent=e.badge,n.appendChild(o)}if(a.appendChild(n),e.dropdown){const o=document.createElement("div");o.className="dropdown-content",e.dropdown.forEach(t=>{const s=document.createElement("a");s.href=`#${t.toLowerCase()}`,s.textContent=t,o.appendChild(s)}),a.appendChild(o),a.addEventListener("mouseenter",()=>{o.style.display="block"}),a.addEventListener("mouseleave",()=>{o.style.display="none"})}p.appendChild(a)});l.appendChild(p);const u=document.createElement("div");u.className="cart";u.innerHTML=`
      <a href="#cart">
        <i class="fas fa-shopping-cart"></i>
        <span class="cart-counter">0</span>
      </a>
    `;const m=document.createElement("div");m.className="search-bar";m.innerHTML=`
      <input type="text" placeholder="Buscar juegos...">
      <button><i class="fas fa-search"></i></button>
    `;i.appendChild(d);i.appendChild(l);i.appendChild(m);i.appendChild(u);const b=document.createElement("main");b.innerHTML=`
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
    `;const f=document.createElement("footer");f.className="game-footer";f.innerHTML=`
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
    `;c.appendChild(i);const g=document.querySelector(".game-header");if(window.matchMedia("(max-width: 576px)").matches){let e=0;window.addEventListener("scroll",()=>{const a=window.pageYOffset||document.documentElement.scrollTop;a>e?g.classList.add("header-hidden"):g.classList.remove("header-hidden"),e=a<=0?0:a})}c.appendChild(b);document.querySelector(".btn").addEventListener("click",()=>{document.getElementById("games-container").scrollIntoView({behavior:"smooth"})});c.appendChild(f);const C=[{title:"Cyberpunk 2077",price:"$49.99",description:"Sumérgete en Night City, una metrópolis obsesionada con el poder, la moda y las modificaciones corporales.",image:"https://res.cloudinary.com/dqstycwjr/image/upload/v1750351014/Cyberpunk_2077_ndqrzj.png",genre:"RPG Futurista",features:["Mundo abierto","Personalización extrema","Historia no lineal"]},{title:"Elden Ring",price:"$59.99",description:"Un juego de fantasía épica donde explorarás las Tierras Intermedias. Creado por Hidetaka Miyazaki y George R.R. Martin, combina el combate desafiante de Souls con un vasto mundo abierto.",image:"https://res.cloudinary.com/dqstycwjr/image/upload/v1750345711/2_yb2ofv.png",genre:"Souls-like",features:["Mundo abierto","Combate desafiante","Jefes épicos"]},{title:"God of War",price:"$39.99",description:"Kratos y su hijo Atreus se embarcan en un viaje a través de los reinos nórdicos. Una historia emocionante sobre paternidad con un combate brutal y gráficos impresionantes.",image:"https://res.cloudinary.com/dqstycwjr/image/upload/v1750345711/3_rp8fbj.png",genre:"Aventura Épica",features:["Historia emocionante","Combate táctico","Mundo interconectado"]},{title:"Horizon Forbidden West",price:"$54.99",description:"Aloy explora el Oeste Prohibido, un territorio lleno de misterios y máquinas asombrosas. Un mundo abierto impresionante con una narrativa envolvente y combates dinámicos.",image:"https://res.cloudinary.com/dqstycwjr/image/upload/v1750345711/4_iqeqlu.png",genre:"Aventura",features:["Mundo abierto detallado","Combate estratégico","Historia profunda"]},{title:"The Legend of Zelda: Tears of the Kingdom",price:"$59.99",description:"Link explora los cielos y las profundidades de Hyrule en esta secuela de Breath of the Wild. Nuevas habilidades y un mundo expandido ofrecen infinitas posibilidades.",image:"https://res.cloudinary.com/dqstycwjr/image/upload/v1750345712/5_nkp1us.png",genre:"Aventura",features:["Exploración libre","Física interactiva","Creatividad ilimitada"]},{title:"Starfield",price:"$69.99",description:"El primer nuevo universo en 25 años de Bethesda Game Studios. Explora las estrellas y descubre los secretos de la galaxia en este RPG espacial épico.",image:"https://res.cloudinary.com/dqstycwjr/image/upload/v1750345712/6_sqmruh.png",genre:"RPG Espacial",features:["Más de 1000 planetas","Combate espacial","Historia profunda"]}],w=document.getElementById("games-container");C.forEach(e=>{const a=document.createElement("div");a.className="game-card",a.innerHTML=`
        <div class="card-inner">
          <div class="card-front">
            <div class="game-image" style="background-image: url('${e.image}')"></div>
            <div class="game-info">
              <h3>${e.title}</h3>
              <p class="price">${e.price}</p>
              <p class="genre">${e.genre}</p>
            </div>
          </div>
          <div class="card-back">
            <h3>${e.title}</h3>
            <p class="description">${e.description}</p>
            <ul class="features">
              ${e.features.map(n=>`<li><i class="fas fa-check-circle"></i> ${n}</li>`).join("")}
            </ul>
            <button class="btn-add">Añadir al carrito <i class="fas fa-cart-plus"></i></button>
          </div>
        </div>
      `,w.appendChild(a)});const x=[{title:"The Legend of Zelda: Echoes of Wisdom",price:"$59.99",description:"Explora una nueva aventura con Zelda como protagonista en esta entrega única para Nintendo Switch.",image:"https://res.cloudinary.com/dqstycwjr/image/upload/v1750350766/Zelda_u0e9jh.png",genre:"Aventura",features:["Modo historia","Exploración libre","Rompecabezas inteligentes"]},{title:"Donkey Kong Country Returns HD",price:"$49.99",description:"El clásico Donkey Kong regresa con gráficos en alta definición y nuevos niveles exclusivos.",image:"https://res.cloudinary.com/dqstycwjr/image/upload/v1750350211/Donkey_Kong_Country_Returns_HD_wqj243.png",genre:"Plataformas",features:["Cooperativo local","Niveles desafiantes","Ambientes selváticos"]},{title:"Resident Evil 3",price:"$39.99",description:"Revive el horror con gráficos renovados en esta versión para PlayStation 5 del clásico Resident Evil 3.",image:"https://res.cloudinary.com/dqstycwjr/image/upload/v1750350768/Resident_Evil_3_ibaveq.png",genre:"Terror y acción",features:["Gráficos 4K","Modo campaña","Némesis como jefe principal"]},{title:"Stellar Blade",price:"$69.99",description:"Acción intensa en un futuro distópico con una heroína letal en esta exclusiva de PlayStation 5.",image:"https://res.cloudinary.com/dqstycwjr/image/upload/v1750350204/Stellar_Blade_2_datys8.png",genre:"Acción y ciencia ficción",features:["Combate rápido","Escenarios futuristas","Narrativa cinematográfica"]},{title:"Astro Bot",price:"$59.99",description:"Vive una aventura vibrante y colorida con Astro Bot en una experiencia optimizada para PS5.",image:"https://res.cloudinary.com/dqstycwjr/image/upload/v1750350211/Astro_Bot_gwduij.png",genre:"Plataformas y aventura",features:["Uso del DualSense","Niveles creativos","Ideal para toda la familia"]},{title:"Super Mario Bros. Wonder",price:"$59.99",description:"Mario y sus amigos exploran un mundo lleno de sorpresas y transformaciones en esta nueva entrega para Nintendo Switch.",image:"https://res.cloudinary.com/dqstycwjr/image/upload/v1750350769/Super_Mario_Bros._Wonder_jdsx4k.png",genre:"Plataformas",features:["Modo cooperativo","Transformaciones únicas","Mundos dinámicos"]}],L=document.getElementById("offers-container");x.forEach((e,a)=>{const n=30+a*5,o=document.createElement("div");o.className="offer-item",o.innerHTML=`
        <div class="offer-badge">-${n}%</div>
        <div class="juegos-image" style="background-image: url('${e.image}')"></div>
        <div class="offer-details">
          <h3>${e.title}</h3>
          <div class="price-container">
            <span class="old-price">${e.price}</span>
            <span class="new-price">$${(parseFloat(e.price.slice(1))*(1-n/100)).toFixed(2)}</span>
          </div>
          <div class="platform-tags">
            <span>PS5</span>
            <span>XBOX</span>
            <span>PC</span>
          </div>
          <button class="offer-btn">Añadir al carrito</button>
        </div>
      `,L.appendChild(o)});window.addEventListener("scroll",()=>{const e=window.pageYOffset,a=document.querySelector(".parallax-bg");a&&(a.style.transform=`translateY(${e*.5}px)`)});const v=document.querySelector(".offer-scroller"),h=document.querySelector(".scroll-btn.left"),y=document.querySelector(".scroll-btn.right");h&&y&&(h.addEventListener("click",()=>{v.scrollBy({left:-300,behavior:"smooth"})}),y.addEventListener("click",()=>{v.scrollBy({left:300,behavior:"smooth"})}));
