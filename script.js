// ==========================================
// BANCO DE DADOS DOS CENÁRIOS DE DEMONSTRAÇÃO
// ==========================================
const scenarios = {
    1: {
        greeting: "Olá, Seu Raimundo!",
        propName: "Sítio Boa Vista",
        meta: "48 hectares • Rio Verde - GO",
        status: "Em análise",
        statusClass: "badge-warning",
        pendenciaText: "Seu CAR está na fila. Toque para entender.",
        explainText: "<p><strong>Seu Raimundo</strong>, o seu cadastro deu entrada e agora o técnico da Secretaria de Meio Ambiente está analisando seus documentos.</p><p>Vou te manter informado de cada passo, mas por enquanto sua única tarefa é relaxar e esperar a nossa notificação!</p>",
        hasApp: false,
        timeline: [true, 'active', false, false],
        docCompromisso: { title: "Termo de Compromisso", status: "Não Exigido", class: "text-muted", icon: "remove_circle_outline" }
    },
    2: {
        greeting: "Olá, Seu Raimundo!",
        propName: "Sítio Boa Vista",
        meta: "48 hectares • Rio Verde - GO",
        status: "Em análise",
        statusClass: "badge-warning",
        pendenciaText: "Recomendação de APP pendente na propriedade",
        explainText: "<p><strong>Seu Raimundo</strong>, descobrimos que passa um córrego por uma parte da sua propriedade.</p><p>Pela regra do nosso Código Florestal, precisamos manter árvores nativas em volta de qualquer curso d'água para proteger a nascente. Isso se chama <strong>Área de Preservação Permanente (APP)</strong>.</p><p>No seu caso, precisamos reflorestar mais ou menos <strong>1,2 hectare</strong>. Vou te mostrar como fazer isso sem mistério!</p>",
        hasApp: true,
        timeline: [true, true, 'active', false],
        docCompromisso: { title: "Termo de Compromisso (PRADA)", status: "Aguardando Assinatura", class: "text-orange", icon: "hourglass_empty" }
    },
    3: {
        greeting: "Olá, Seu Raimundo!",
        propName: "Sítio Boa Vista",
        meta: "48 hectares • Rio Verde - GO",
        status: "Regularizado",
        statusClass: "badge-success",
        pendenciaText: "Parabéns! Imóvel 100% em dia com a legislação.",
        explainText: "<p><strong>Seu Raimundo</strong>, ótimas notícias! O analista validou seu PRADA e aprovou seu mapa.</p><p>Agora seu imóvel rural está completamente regularizado. Com isso, as portas dos bancos estão abertas para você pegar aquele <strong>Crédito Rural</strong> com os juros mais baixos do mercado!</p>",
        hasApp: false,
        timeline: [true, true, true, true],
        docCompromisso: { title: "Termo de Compromisso Firmado", status: "✔ Validado", class: "text-green", icon: "verified" }
    },
    4: {
        greeting: "Olá, Analista Luana Silva!",
        propName: "Painel de Gestão e Impacto",
        meta: "Visão do Órgão Ambiental Estadual",
        status: "Operação Eficiente",
        statusClass: "badge-success",
        pendenciaText: "Redução de 76% nas filas presenciais de dúvida",
        explainText: "<p><strong>Visão do Analista do Estado (Luana):</strong> Sem o Siscar+, o produtor recebia uma notificação contendo apenas leis frias (Ex: <i>'Infracionou Artigo 61-A'</i>) e parava o processo por medo.</p><p>Com o Siscar+ traduzindo os termos jurídicos, o agricultor entende o que fazer, planta as mudas por conta própria e acelera a fila de aprovação das agências estaduais automaticamente.</p>",
        hasApp: false,
        timeline: [true, true, true, true],
        docCompromisso: { title: "Métricas Globais", status: "Aprovado", class: "text-green", icon: "trending_up" }
    }
};

// ==========================================
// CENTRAL DE RESPOSTAS DA CISCA (MOCK DE IA EXPANDIDO - DESAFIO 3)
// ==========================================
const ciscaKnowledge = {
    // --- FOCO: SIMPLIFICAÇÃO, COMUNICAÇÃO VIRAL E EXEMPLOS CONCRETOS ---
    "app": "APP é a Área de Preservação Permanente. Pense nela como os 'cílios do rio': se você arranca os cílios, a terra cai no olho d'água e ele seca! É a mata que protege as margens de rios, córregos e nascentes. Manter essa vegetação em pé evita o assoreamento (barranco caindo) e garante água limpa para o seu gado e sua lavoura o ano inteiro.",
    
    "reserva legal": "A Reserva Legal (RL) é uma fatia de mata nativa dentro da sua terra que não pode ser desmatada, mas pode gerar dinheiro com manejo sustentável (como coletar frutos ou manejar madeira autorizada). Em Goiás (Cerrado) e na maior parte do Brasil, ela é de 20%. Mas atenção: se a sua terra fica na Amazônia Legal, essa fatia pode subir para 35% (Cerrado na Amazônia) ou 80% (Floresta).",
    
    "car": "O CAR (Cadastro Ambiental Rural) não é um imposto, é o 'RG Ambiental' da sua propriedade! É um registro eletrônico obrigatório para todo imóvel rural. Sem ele, sua terra fica 'indocumentada' para o meio ambiente, impedindo você de vender a produção para grandes frigoríficos ou cooperativas e travando a sua herança/sucessão familiar.",
    
    "sicar": "O SICAR é o grande 'computador central' do governo federal em Brasília que unifica os CARs de todos os estados. Quando você envia o desenho da sua fazenda, o SICAR cruza os dados com fotos de satélite automáticas para ver se o seu mapa não está invadindo a terra do vizinho ou se tem desmatamento recente.",

    "lei": "A lei principal é o Novo Código Florestal (Lei nº 12.651/2012). O Siscar+ serve justamente para traduzir esse textão de advogado para a linguagem prática da roça: em vez de decorar artigos, a gente te mostra onde cercar e como plantar!",

    // --- FOCO: INCENTIVOS, CRÉDITO E EDUCAÇÃO ---
    "credito rural": "Estar em dia com o CAR é a chave que abre o cofre do banco! Bancos e cooperativas exigem o CAR regularizado (ou com o PRA ativo) para liberar custeio, Pronaf e linhas de investimento. Produtor regularizado consegue o 'Crédito Verde': juros mais baixos, prazos maiores e aprovação em metade do tempo.",
    
    "incentivo": "Quem cuida da terra ganha! Além de crédito mais barato, proprietários regularizados têm direito a incentivos como o Pagamento por Serviços Ambientais (PSA) — onde você pode receber dinheiro direto para manter a floresta em pé —, isenção de impostos sobre insumos de reflorestamento e prioridade em programas de assistência técnica (Emater).",

    // --- FOCO: CIÊNCIA DE DADOS E INTERPRETAÇÃO AUTOMÁTICA DA LEGISLAÇÃO ---
    "analise": "O Siscar+ usa inteligência e ciência de dados para ler o mapa do seu imóvel. Nossa ferramenta cruza automaticamente as coordenadas geográficas da sua propriedade com a base de dados histórica do satélite MapBiomas. O sistema calcula sozinho o tamanho exato da sua APP com base na largura do rio e diz se a sua vegetação foi retirada antes ou depois de julho de 2008, aplicando a regra exata da lei sem você precisar calcular nada.",
    
    "imagem": "Análise por imagem de satélite! O sistema do Siscar+ interpreta imagens com resolução de até 3 metros para identificar regeneração natural. Se a floresta estiver crescendo sozinha na sua APP, nossa IA detecta e avisa o Analista do Estado, poupando você de gastar milhares de reais plantando mudas onde a natureza trabalha de graça.",

    // --- FOCO: DIFERENCIAÇÃO DE PÚBLICOS (PEQUENO VS GRANDE) ---
    "modulo fiscal": "Módulo Fiscal é uma medida em hectares que muda conforme o município (em Rio Verde - GO, 1 módulo equivale a 30 hectares). Ele define seus direitos legítimos:\n• ATÉ 4 MÓDULOS (Pequena Propriedade): Você tem regras muito mais suaves! O Código Florestal anistia a recomposição total se a sua APP for antiga, permitindo faixas menores de recuperação (regrinha da escadinha) para não tirar sua área de plantio.\n• MAIS DE 4 MÓDULOS (Média/Grande): Exige recomposição integral dos passivos, mas abre portas para o mercado de Crédito de Carbono e Cotas de Reserva Ambiental (CRA).",

    "pequeno produtor": "Se a sua terra tem até 4 módulos fiscais, a lei te protege! Você tem direito a apoio gratuito do Estado para fazer o desenho do mapa, dispensa de recomposição obrigatória em áreas consolidadas antigas e regras facilitadas para o PRADA. O Siscar+ foi feito sob medida para garantir que o pequeno agricultor não seja punido por não entender o juridiquês.",

    // --- FOCO: SUPORTE AO ANALISTA E PROCESSOS ---
    "analista": "Ferramenta de Apoio à Luana (Analista do Estado): O Siscar+ reduz o retrabalho do órgão ambiental. Em vez de emitir notificações complexas que assustam o produtor e travam a fila, o sistema gera automaticamente um painel visual explicativo para o proprietário. Isso reduz em até 76% as dúvidas presenciais nos balcões da Secretaria de Meio Ambiente, fazendo com que os processos andem muito mais rápido.",
    
    "pendencia": "Não entre em pânico! Uma pendência no Siscar+ não é uma multa, é só um pedido de correção. Geralmente acontece quando o desenho do seu mapa ficou em cima da linha do vizinho (sobreposição) ou o satélite viu um rio que não estava desenhado. A Cisca te mostra exatamente onde corrigir no mapa e como enviar a foto de comprovação pelo celular.",

    "prada": "O PRADA é o Projeto de Recomposição de Áreas Degradadas e Alteradas. É o seu plano de ação para regularizar o imóvel. O Siscar+ automatiza isso: nossa IA propõe o método mais barato para o seu bolso (Ex: apenas cercar a área para regeneração natural, ao invés de comprar milhares de mudas caras).",
    
    "pra": "O PRA é o Programa de Regularização Ambiental. Se você teve algum desmatamento antigo (antes de 22 de julho de 2008), o PRA é a sua anistia! Ao aderir ao programa e assinar o Termo de Compromisso, todas as multas daquele período ficam congeladas e são canceladas assim que você terminar de recuperar a sua área.",

    // --- FOCO: MULTIPLICADORES E COMUNICAÇÃO AMPLA ---
    "multiplicador": "Quer ser uma liderança na sua região? O Siscar+ conta com o programa 'Cisca nas Comunidades', uma plataforma de formação para presidentes de sindicatos rurais, técnicos de cooperativas e lideranças locais. Eles recebem treinamento direto no app para se tornarem multiplicadores, ajudando a espalhar a regularização ambiental e o acesso ao crédito nas comunidades mais distantes.",

    "ajuda": "Estou aqui para descomplicar o Código Florestal usando tecnologia! Me pergunte sobre:\n• Leis e Termos: 'APP', 'Reserva Legal', 'CAR', 'SICAR', 'PRADA' ou 'PRA'\n• Inteligência do App: 'Análise automática', 'Imagem de Satélite' ou 'Incentivos'\n• Seus Direitos: 'Pequeno produtor', 'Módulo Fiscal' ou 'Crédito Rural'\n• Ajuda ao Órgão: 'Suporte ao Analista' ou 'Multiplicadores'."
};

let activeScenario = 1;

// NAVEGAÇÃO DE TELAS PRINCIPAIS
function changeScreen(screenId) {
    document.querySelectorAll('.app-screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
}

function performLogin() {
    changeScreen('screen-login');
    document.getElementById('screen-login').classList.remove('active');
    document.getElementById('app-core').classList.remove('hidden');
    switchSubScreen('sub-dashboard');
}

// NAVEGAÇÃO ENTRE ABAS DA INTERFACE (SUB-SCREENS)
function switchSubScreen(subId) {
    document.querySelectorAll('.sub-screen').forEach(s => s.classList.remove('active'));
    document.getElementById(subId).classList.add('active');
    
    // Controle do botão Voltar Superior
    const backBtn = document.getElementById('btn-global-back');
    if (subId === 'sub-dashboard') {
        backBtn.classList.add('hidden');
    } else {
        backBtn.classList.remove('hidden');
    }

    // Atualiza estado visual da barra inferior
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    if(subId === 'sub-dashboard') document.getElementById('nav-dash').classList.add('active');
    if(subId === 'sub-timeline') document.getElementById('nav-time').classList.add('active');
    if(subId === 'sub-chat') {
        document.getElementById('nav-chat').classList.add('active');
        initChatWindow();
    }
    if(subId === 'sub-perfil') document.getElementById('nav-perf').classList.add('active');
}

function goBackToDashboard() {
    switchSubScreen('sub-dashboard');
}

// GERENCIADOR DE CENÁRIOS DO HACKATHON
function selectScenario(num) {
    activeScenario = num;
    document.querySelectorAll('.demo-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(`demo-c${num}`).classList.add('active');

    const data = scenarios[num];
    
    // Atualização de elementos dinâmicos baseados no JSON do Cenário
    document.getElementById('dash-greeting').innerText = data.greeting;
    document.getElementById('dash-prop-name').innerText = data.propName;
    document.getElementById('dash-prop-meta').innerHTML = `<span class="material-icons text-small">place</span> ${data.meta}`;
    
    const badge = document.getElementById('dash-status-badge');
    badge.innerText = data.status;
    badge.className = `badge ${data.statusClass}`;

    document.getElementById('dash-pendencia-text').innerText = data.pendenciaText;
    document.getElementById('explique-text-container').innerHTML = data.explainText;

    // Ajuste do Mapa Dinâmico
    const river = document.getElementById('map-river-line');
    const zone = document.getElementById('map-app-zone');
    const tagApp = document.getElementById('map-tag-app');
    const btnActionReg = document.getElementById('btn-action-regularizar');

    if (data.hasApp) {
        river.style.display = "block"; zone.style.display = "block"; tagApp.style.display = "block"; btnActionReg.style.display = "block";
    } else {
        river.style.display = "none"; zone.style.display = "none"; tagApp.style.display = "none"; btnActionReg.style.display = "none";
    }

    // Atualização da Linha do Tempo
    data.timeline.forEach((state, index) => {
        const nodes = [document.getElementById('tl-node-analise'), document.getElementById('tl-node-pendencia'), document.getElementById('tl-node-concluido')];
        const target = nodes[index - 1];
        if (target) {
            target.className = "tl-item";
            if (state === true) target.classList.add('done');
            if (state === 'active') target.classList.add('active');
        }
    });

    // Atualização do Card de Documento Dinâmico
    document.getElementById('doc-compromisso-title').innerText = data.docCompromisso.title;
    const docStatus = document.getElementById('doc-compromisso-status');
    docStatus.innerText = data.docCompromisso.status;
    docStatus.className = data.docCompromisso.class;
    document.getElementById('doc-compromisso-icon').className = `material-icons ${data.docCompromisso.class}`;
    document.getElementById('doc-compromisso-icon').innerText = data.docCompromisso.icon;

    // Disparar Notificação Toast para feedback ao Avaliador
    triggerNotification(`Modo Cenário ${num} Carregado`, `Exibindo a jornada de: ${data.greeting.replace('Olá, ','')}`);
}

// INTERATIVIDADE DO CHAT DA CISCA (SIMULAÇÃO INTELIGENTE DE IA)
let isChatReady = false;
function initChatWindow() {
    if (isChatReady) return;
    const box = document.getElementById('chat-messages-box');
    box.innerHTML = '';
    insertMessage("🐔 Cisca", "Olá! Sou a Cisca. Estou aqui para traduzir qualquer complicação da lei ambiental. Sobre o que você deseja conversar?", "received");
    isChatReady = true;
}

function insertMessage(sender, text, side) {
    const box = document.getElementById('chat-messages-box');
    const d = document.createElement('div');
    d.className = `msg ${side}`;
    d.innerHTML = `<strong>${sender}</strong><p>${text}</p>`;
    box.appendChild(d);
    box.scrollTop = box.scrollHeight;
}

function submitChatMessage() {
    const input = document.getElementById('chat-input');
    const val = input.value.trim();
    if (!val) return;

    insertMessage("Você", val, "sent");
    input.value = '';

    // Efeito de Carregamento da IA da Cisca
    const box = document.getElementById('chat-messages-box');
    const loading = document.createElement('div');
    loading.className = "typing";
    loading.id = "cisca-typing";
    loading.innerHTML = "<span></span><span></span><span></span>";
    box.appendChild(loading);
    box.scrollTop = box.scrollHeight;

    setTimeout(() => {
        const l = document.getElementById('cisca-typing');
        if (l) l.remove();

        let reply = "";
        const lower = val.toLowerCase();

        // Procura por palavras-chave no dicionário expandido
        for (const k in ciscaKnowledge) {
            if (lower.includes(k)) {
                reply = ciscaKnowledge[k];
                break;
            }
        }

        if (!reply) {
            reply = "Essa funcionalidade de IA ainda está em evolução no protótipo do Siscar+. Na versão completa do produto, nossa Inteligência Artificial lerá o Código Florestal e os Manuais Oficiais do SICAR para te responder com total certeza técnica!";
        }

        insertMessage("🐔 Cisca", reply, "received");
    }, 1200);
}

function sendQuickMessage(txt) {
    document.getElementById('chat-input').value = txt;
    submitChatMessage();
}

function openChatContext(topic) {
    switchSubScreen('sub-chat');
    sendQuickMessage(topic);
}

// MODAL DIDÁTICO
function triggerModal(title, text) {
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-body').innerText = text;
    document.getElementById('custom-modal').classList.remove('hidden');
}

function closeModal() {
    document.getElementById('custom-modal').classList.add('hidden');
}

// GESTÃO DE TOAST NOTIFICATION
function triggerNotification(title = "Alerta Siscar+", msg = "Seu cadastro possui updates.") {
    document.getElementById('toast-title').innerText = title;
    document.getElementById('toast-body').innerText = msg;
    const t = document.getElementById('custom-toast');
    t.classList.remove('hidden');
    setTimeout(() => t.classList.add('hidden'), 4000);
}

function handleToastNavigation() {
    document.getElementById('custom-toast').classList.add('hidden');
    switchSubScreen('sub-explique');
}

// Inicialização amigável de Listeners e Estado Inicial
document.addEventListener("DOMContentLoaded", () => {
    // 1. FAZER A SPLASH SCREEN AVANÇAR COM UM CLIQUE EM QUALQUER LUGAR DELA
    // Mapeia tanto por ID quanto pela primeira tela ativa encontrada (conforme a imagem_eec777.png)
    const splashScreen = document.getElementById('screen-splash') || document.querySelector('.app-screen.active');
    
    if (splashScreen) {
        splashScreen.style.cursor = 'pointer'; 
        splashScreen.addEventListener('click', (e) => {
            // Impede que clique nos botões laterais do Hackathon de mudar cenários dispare o login acidentalmente
            if (!e.target.closest('.demo-btn')) {
                performLogin();
            }
        });
    }

    // Monitora tecla Enter no campo do Chat de forma segura após o DOM carregar
    const chatInput = document.getElementById('chat-input');
    if(chatInput) {
        chatInput.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') submitChatMessage();
        });
    }
    
    // Roda o cenário inicial padrão
    selectScenario(1);
});
