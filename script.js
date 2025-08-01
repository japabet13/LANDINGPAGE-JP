document.addEventListener('DOMContentLoaded', () => {

    /**
     * INICIALIZA O CHAT FAKE
     */
    function initializeFakeChat() {
        const chatContainer = document.getElementById('chat-messages-container');
        const userInput = document.getElementById('user-chat-input');
        const sendButton = document.getElementById('send-chat-button');
        const viewerCountElement = document.querySelector('.viewer-count');
        if (!chatContainer || !userInput || !sendButton || !viewerCountElement) return;

        function updateViewerCount() {
            const randomViewers = Math.floor(Math.random() * (1300 - 1200 + 1)) + 1200;
            viewerCountElement.textContent = `${randomViewers.toLocaleString('pt-BR')} assistindo`;
        }
        setInterval(updateViewerCount, 3500);

        const messages = [
            { user: "José", text: "É bom mesmo? Tô pensando em entrar, mas tô com dúvidas." }, { user: "Maria", text: "Olha, eu fiz a consultoria gratuita antes, me explicaram tudo certinho. Aí sim eu entrei! Valeu a pena." }, { user: "Carla", text: "Tenho medo de não conseguir, parece complicado." }, { user: "Pedro", text: "No começo também achei, mas a mentoria do Japão é passo a passo. No segundo dia eu já tava fazendo tudo sozinho." }, { user: "Fernando", text: "Isso não é mais um desses golpes da internet, né?" }, { user: "Ana", text: "Cara, eu tava com o mesmo pé atrás. Mas vi que o software (Surentrix) é real e a consultoria grátis não te obriga a nada. Foi o que me deu confiança." }, { user: "Beatriz", text: "Precisa de muito dinheiro pra começar?" }, { user: "Lucas", text: "Que nada! Comecei com R$ 200 só pra testar. Já dobrei o valor em uma semana com a IA." }, { user: "Ricardo", text: "E se eu não tiver tempo? Trabalho o dia todo." }, { user: "Julia", text: "Eu também! Faço pelo celular nos intervalos. A IA de arbitragem faz quase tudo, você só gerencia." }, { user: "Maria", text: "Pessoal, amei a mentoria, agregou muito! Já fiz R$ 5.000 só em casa..." }, { user: "Gustavo", text: "Nossa, gente demais aqui kkkkk" }, { user: "Anderson", text: "Eu comecei com R$ 300 pra testar, já tô em R$ 1.500 com uma semana... Surpreso." }, { user: "Farley", text: "A IA realmente é boa, viu? Tô de cara aqui." }, { user: "Ana", text: "Obrigada, Japão! Sou dona de casa e consegui minha renda, nunca vou esquecer disso. R$ 3.500 em um mês já!" }, { user: "Marcelo", text: "Uau, parabéns!" }, { user: "Tiago", text: "Relatório do mês usando o Surentrix: R$ 12.800. Software absurdo pra gestão." }, { user: "Sofia", text: "Caramba, preciso aprender a usar todas as funções dele!" }, { user: "Laura", text: "Consegui pagar a fatura do cartão só com o lucro de 3 dias usando a IA. Que alívio!" }, { user: "Bruno", text: "Sensacional!" }, { user: "Luana", text: "Como faço para colocar a entrada no scanner?" }, { user: "Gustavo", text: "Na mentoria tem uma aula só sobre isso, a 5. É bem fácil." }, { user: "Arnaldo", text: "É difícil, galera?" }, { user: "Gustavo", text: "Não é não, mano, primeiro dia já tô lucrando." }, { user: "Marcos", text: "Quanto é bom pra investir?" }, { user: "Rafael", text: "Aconselham começar com pouco pra pegar o jeito. Uns R$ 300 a R$ 500 tá ótimo." }, { user: "Marcelo", text: "Dá pra fazer do celular?" }, { user: "Gustavo", text: "Dá sim, man, só opero por celular também." }, { user: "Vanessa", text: "O software Surentrix tem app ou é só no navegador?" }, { user: "Eduardo", text: "Roda liso no navegador do celular. Não precisa instalar nada." }, { user: "Rangel", text: "Gente, quem entrou hoje? Manda um 'oi' aqui." }, { user: "Fernanda", text: "Oii" }, { user: "Cleber", text: "Opa" }, { user: "Cláudia", text: "Gostei demais do vídeo e da entrada grátis, já deu pra ter uma noção." }, { user: "Vitor", text: "Também achei! A consultoria grátis abriu minha mente." }, { user: "Mariana", text: "Alguém aqui do RJ? A comunidade é forte!" }, { user: "Felipe", text: "Eu! Bora marcar um café pra falar de arbitragem kkk" }, { user: "Letícia", text: "Pessoal, qual a melhor estratégia que vocês usaram da mentoria?" }, { user: "João", text: "A de escanteios asiáticos, sem dúvida. Lucro certo." }, { user: "Camila", text: "O suporte responde rápido?" }, { user: "Diego", text: "Sim, me responderam em menos de 10 minutos pelo WhatsApp." }, { user: "Roberto", text: "A IA de arbitragem funciona 24h?" }, { user: "Simone", text: "Sim! As melhores oportunidades aparecem de madrugada, inclusive." }
        ];

        let messageIndex = 0;

        function addBotMessage() {
            if (messageIndex >= messages.length) messageIndex = 0;
            const messageData = messages[messageIndex];
            const messageElement = document.createElement('div');
            messageElement.classList.add('chat-message');
            messageElement.innerHTML = `<span class="initial-circle">${messageData.user.charAt(0)}</span><div class="message-content"><strong class="user-name">${messageData.user}</strong><span class="message-text">${messageData.text}</span></div>`;
            chatContainer.appendChild(messageElement);
            chatContainer.scrollTop = chatContainer.scrollHeight;
            if (chatContainer.children.length > 10) chatContainer.removeChild(chatContainer.firstChild);
            messageIndex++;
        }

        function addUserMessage(text) {
            const messageElement = document.createElement('div');
            messageElement.classList.add('chat-message');
            messageElement.innerHTML = `<span class="initial-circle">V</span><div class="message-content"><strong class="user-name">Você</strong><span class="message-text">${text}</span></div>`;
            chatContainer.appendChild(messageElement);
            chatContainer.scrollTop = chatContainer.scrollHeight;
        }

        function handleSend() {
            const text = userInput.value.trim();
            if (text !== '') {
                addUserMessage(text);
                userInput.value = '';
                setTimeout(addBotMessage, 1000);
            }
        }
        
        for(let i = 0; i < 10; i++) addBotMessage();
        sendButton.addEventListener('click', handleSend);
        userInput.addEventListener('keydown', (event) => { if (event.key === 'Enter') handleSend(); });
        setInterval(addBotMessage, 3000);
    }
    
    /**
     * CONTROLE DO PLAYER DE VÍDEO
     */
    function initializeVideoPlayer() {
        const overlay = document.getElementById('video-overlay');
        const videoContainer = document.getElementById('video-container');
        const clickGuard = document.getElementById('video-click-guard');
        const interactiveDemoSection = document.getElementById('interactive-demo-section');


        if (!overlay || !videoContainer || !clickGuard || !interactiveDemoSection) {
            console.error('Elementos do vídeo ou da demonstração não encontrados.');
            return;
        }

        function loadInitialVideo() {
            const initialIframe = document.createElement('iframe');
            initialIframe.setAttribute('src', 'https://iframe.mediadelivery.net/embed/471287/ef51040e-8048-40d4-a5bb-67093cca1ad9?autoplay=true&loop=true&muted=true&preload=true&responsive=true');
            initialIframe.setAttribute('loading', 'lazy');
            initialIframe.setAttribute('allow', 'accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;');
            initialIframe.setAttribute('allowfullscreen', 'true');
            videoContainer.appendChild(initialIframe);
        }

        loadInitialVideo();

        overlay.addEventListener('click', () => {
            if(typeof fbq === 'function') {
                fbq('track', 'ViewContent');
            }
            
            overlay.classList.add('hidden');
            clickGuard.classList.remove('hidden');
            videoContainer.innerHTML = '';

            const mainIframe = document.createElement('iframe');
            mainIframe.setAttribute('src', 'https://iframe.mediadelivery.net/embed/471287/ef51040e-8048-40d4-a5bb-67093cca1ad9?autoplay=true&loop=false&muted=false&preload=true&responsive=true');
            mainIframe.setAttribute('loading', 'lazy');
            mainIframe.setAttribute('allow', 'accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;');
            mainIframe.setAttribute('allowfullscreen', 'true');
            videoContainer.appendChild(mainIframe);

            setTimeout(() => {
                interactiveDemoSection.style.display = 'block';
                void interactiveDemoSection.offsetWidth; 
                interactiveDemoSection.classList.add('is-visible');
            }, 200000);

        }, { once: true });
    }

    /**
     * INICIALIZA DEMONSTRAÇÃO INTERATIVA
     */
    function initializeInteractiveDemo() {
        const copyButton = document.getElementById('copy-entry-button');
        const entryTextElement = document.getElementById('entry-text');
        const scannerInput = document.getElementById('scanner-input');
        const analyzeButton = document.getElementById('analyze-button');
        const scannerSection = document.getElementById('entry-scanner');
        const resultSection = document.getElementById('analysis-result');
        const hypothesisCards = document.querySelectorAll('.hypothesis-card');
        const popupOverlay = document.getElementById('prize-popup-overlay');
        const prizeCounter = document.getElementById('prize-counter');
        const closePopupButton = document.querySelector('.popup-close');
        const popupCtaButton = document.getElementById('popup-cta-button');
        const videoCtaButton = document.getElementById('video-cta-button');
        const buttonText = videoCtaButton.querySelector('.button-text');
        const pasteButton = document.getElementById('paste-entry-button');

        if(videoCtaButton) {
            videoCtaButton.classList.add('disabled');
        }

        copyButton.addEventListener('click', () => {
            const textToCopy = entryTextElement.innerText;
            
            const textArea = document.createElement("textarea");
            textArea.value = textToCopy;
            textArea.style.position = "fixed";
            textArea.style.left = "-9999px";
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            try {
                document.execCommand('copy');
                copyButton.textContent = 'Copiado!';
            } catch (err) {
                console.error('Fallback: Oops, unable to copy', err);
                copyButton.textContent = 'Erro ao copiar';
            }
            document.body.removeChild(textArea);

            setTimeout(() => { copyButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5"/><path d="m5 12 7-7 7 7"/></svg> Copiar Entrada`; }, 2000);
        });
        
        pasteButton.addEventListener('click', () => {
            const textToPaste = entryTextElement.innerText;
            scannerInput.value = textToPaste;
        });

        analyzeButton.addEventListener('click', () => {
            if (scannerInput.value.trim() !== '') {
                scannerSection.style.display = 'none';
                resultSection.style.display = 'block';
            }
        });

        function animateCounter(element, start, end, duration) {
            let startTimestamp = null;
            const step = (timestamp) => {
                if (!startTimestamp) startTimestamp = timestamp;
                const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                const current = Math.floor(progress * (end - start) + start);
                element.textContent = `R$ ${current.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                }
            };
            window.requestAnimationFrame(step);
        }

        hypothesisCards.forEach(card => {
            card.addEventListener('click', () => {
                popupOverlay.style.display = 'flex';
                animateCounter(prizeCounter, 0, 6240, 1500);

                // Inicia o timer de 10 segundos para habilitar o botão
                setTimeout(() => {
                    if (videoCtaButton) {
                        videoCtaButton.classList.remove('disabled');
                        videoCtaButton.classList.add('unlocked-pulse');
                        const lockIcon = videoCtaButton.querySelector('.lock-icon');
                        const whatsappIcon = videoCtaButton.querySelector('.whatsapp-icon');
                        if (lockIcon) lockIcon.style.display = 'none';
                        if (whatsappIcon) whatsappIcon.style.display = 'inline-block';
                        if (buttonText) buttonText.textContent = 'FALAR COM ESPECIALISTA';
                    }
                }, 10000); // 10 segundos
            });
        });

        closePopupButton.addEventListener('click', () => {
            popupOverlay.style.display = 'none';
        });
        popupOverlay.addEventListener('click', (e) => {
            if (e.target === popupOverlay) {
                popupOverlay.style.display = 'none';
            }
        });

        if (popupCtaButton) {
            popupCtaButton.addEventListener('click', () => {
                if(typeof fbq === 'function') {
                    fbq('track', 'Contact');
                }
            });
        }
        
        if (videoCtaButton) {
            videoCtaButton.addEventListener('click', (event) => {
                if (videoCtaButton.classList.contains('disabled')) {
                    event.preventDefault();
                    return;
                }
                if(typeof fbq === 'function') {
                    fbq('track', 'Contact');
                }
            });
        }
    }

    /**
     * INICIALIZA O CONTADOR REGRESSIVO
     */
    function initializeCountdown() {
        const countdownElement = document.getElementById("countdown");
        if (!countdownElement) { return; }
        const countdownDurationMinutes = 7;
        let timeInSeconds = countdownDurationMinutes * 60;
        const interval = setInterval(() => {
            const minutes = Math.floor(timeInSeconds / 60);
            let seconds = timeInSeconds % 60;
            const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            countdownElement.innerHTML = formattedTime;
            timeInSeconds--;
            if (timeInSeconds < 0) {
                clearInterval(interval);
                countdownElement.innerHTML = "00:00";
                const headerText = document.querySelector('#main-header .header-full-text');
                if(headerText) { headerText.textContent = "OFERTA ENCERRADA"; }
            }
        }, 1000);
    }

    /**
     * INICIALIZA ANIMAÇÕES DE SCROLL
     */
    function initializeScrollAnimations() {
        const sections = document.querySelectorAll('.fade-in-section');
        if (sections.length === 0) return;
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        sections.forEach(section => { 
            if(section.id !== 'interactive-demo-section') {
                observer.observe(section); 
            }
        });
    }

    /**
     * INICIALIZA POPUPS DE PROVA SOCIAL
     */
    function initializeSocialProof() {
        const container = document.getElementById('social-proof-container');
        if (!container) return;

        const notifications = [
            { name: 'Thiago', text: '"uma semana e 1670 reais e ja vou viajar com essa grana."' },
            { name: 'Maria', text: '"amei a mentoria, já fiz 5000 só em casa..."' },
            { name: 'Lucas', text: '"uma semana e já dobrei meu investimento inicial."' },
            { name: 'Ana', text: '"consegui minha renda extra como dona de casa, 3500 no mês!"' },
            { name: 'Jorge', text: '"acabei de entrar e já estou ansioso para começar!"' }
        ];

        function showPopup() {
            const randomNotification = notifications[Math.floor(Math.random() * notifications.length)];
            
            const popup = document.createElement('div');
            popup.classList.add('social-proof-popup');
            popup.innerHTML = `<strong>${randomNotification.name}</strong> - ${randomNotification.text}`;
            container.appendChild(popup);

            setTimeout(() => {
                popup.remove();
            }, 5000); // Popup fica visível por 5s
        }

        // Mostra um popup a cada 7 segundos
        setInterval(showPopup, 7000);
    }

    // Inicia as funções
    initializeFakeChat();
    initializeVideoPlayer();
    initializeInteractiveDemo();
    initializeCountdown();
    initializeScrollAnimations();
    initializeSocialProof();
});
