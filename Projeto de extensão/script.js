
// Dark mode
const toggle = document.getElementById('toggleDarkMode');

toggle.addEventListener('change', function() {
    document.body.classList.toggle('dark-mode', this.checked);
    document.querySelector('header').classList.toggle('dark-mode', this.checked);
    document.querySelectorAll('nav button').forEach(button => button.classList.toggle('dark-mode', this.checked));
    document.querySelector('#informacao').classList.toggle('dark-mode', this.checked);
    document.querySelector('footer').classList.toggle('dark-mode', this.checked);
});



document.getElementById('btnHistoria').addEventListener('click', function() {
    document.getElementById('informacao').innerHTML = `
        <div class="historia-container">
            <h2>História da Lagoa do Guapé</h2>
            <p>
                A <strong>Lagoa do Guapé</strong>, localizada em <strong>São Miguel Arcanjo, São Paulo</strong>, é um dos pontos mais icônicos da região. 
                Formada naturalmente ao longo dos anos, ela desempenha um papel essencial no <em>ecossistema local</em>, abrigando diversas espécies de <strong>fauna e flora</strong>.
            </p>
            <p>
                Historicamente, a área ao redor da lagoa foi marcada por <strong>atividades agrícolas</strong>, com destaque para o cultivo de uvas, que impulsionou o desenvolvimento da cidade.
                Com o tempo, a Lagoa do Guapé se tornou um local de lazer e <strong>turismo ecológico</strong>, atraindo visitantes para <em>passeios de barco, pesca e trilhas</em>.
            </p>
            <blockquote>"A Lagoa do Guapé não é apenas uma paisagem, mas um reflexo da história e cultura local."</blockquote>
            <p>
                Hoje, a lagoa representa um <strong>símbolo de equilíbrio</strong> entre a natureza e o desenvolvimento sustentável de São Miguel Arcanjo, sendo um local querido por moradores e turistas.
            </p>
        </div>
    `;
});


document.getElementById('btnAtracoes').addEventListener('click', function () {
    document.getElementById('informacao').innerHTML = `
        <div class="atracoes-container">
            <h2>Atrações na Lagoa</h2>
            <p>A Lagoa do Guapé possui diversas atrações para todas as idades. Você pode aproveitar:</p>
            <ul>
                <li>🌿 <b>Trilha para caminhada</b></li>
                <li>💪 <b>Academia ao ar livre</b></li>
                <li>🎠 <b>Parquinho para crianças</b></li>
                <li>🚣 <b>Esporte local: Caiaque Polo!</b></li>
            </ul>

            <h2>Caiaque Polo</h2>
            <p>O Caiaque Polo é um dos esportes mais praticados na Lagoa do Guapé. Veja algumas imagens:</p>
            
            <div class="atracoes-grid">
                <img src="imagens/cai1.jpg" alt="Caiaque polo" class="zoomable">
                <img src="imagens/cai.jpg" alt="Caiaque polo" class="zoomable">
                <img src="imagens/cai2.jpg" alt="Caiaque polo" class="zoomable">
            </div>

            <h2>Pórtico do parque</h2>
            <p>Um dos pontos mais fotografados da região!</p>

            <div class="atracoes-grid">
                <img src="imagens/letreiro.webp" alt="Letreiro da Lagoa" class="zoomable">
            </div>
        </div>

        <!-- Container para exibição da imagem em tela cheia -->
        <div id="fullscreen-container" class="fullscreen-container">
            <button id="close-fullscreen" class="close-fullscreen">&times;</button>
            <img id="fullscreen-image" src="" alt="Imagem ampliada">
        </div>
    `;

    // Img em tela cheia
    document.querySelectorAll('.zoomable').forEach(img => {
        img.addEventListener('click', function () {
            document.getElementById('fullscreen-image').src = this.src;
            document.getElementById('fullscreen-container').style.display = "flex";
        });
    });

    
    document.getElementById('close-fullscreen').addEventListener('click', function () {
        document.getElementById('fullscreen-container').style.display = "none";
    });

    
    document.getElementById('fullscreen-container').addEventListener('click', function (e) {
        if (e.target === this) {
            this.style.display = "none";
        }
    });
});

document.getElementById('btnImagens').addEventListener('click', function () {
    document.getElementById('informacao').innerHTML = `
        <h2>Imagens da Lagoa</h2>
        <div class="galeria-container">
            <img src="imagens/lagoa.jpg" alt="Imagem da Lagoa 1">
            <img src="imagens/lagoa2.jpg" alt="Imagem da Lagoa 2">
            <img src="imagens/guape3.jpg" alt="Imagem da Lagoa 3">
            <img src="imagens/guape4.jpg" alt="Imagem da Lagoa 4">
        </div>
        <p>Veja mais imagens incríveis da Lagoa Histórica!</p>
    `;

    // Lightbox
    document.querySelectorAll('.galeria-container img').forEach(img => {
        img.addEventListener('click', function () {
            const lightbox = document.getElementById('lightbox');
            const lightboxImg = document.getElementById('lightbox-img');
            lightboxImg.src = this.src;
            lightbox.classList.add('active');
        });
    });

    // fechar ao clicar no x
    document.getElementById('lightbox').addEventListener('click', function () {
        this.classList.remove('active');
    });
});

if (document.body.classList.contains('dark-mode')) {
    document.querySelector('.historia-container').classList.add('dark-mode');
}

