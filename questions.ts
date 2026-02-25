export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number; // index of the correct answer
  category: string;
}

export const questions: Question[] = [
  // ================================================================
  // CATEGORIA 1: PERFIL E CONDUTA DO AGENTE (10 questões)
  // ================================================================
  {
    id: 1,
    question: "Qual deve ser o perfil ideal de um agente da PRF no França RP?",
    options: [
      "Agressivo e intimidador com todos os civis",
      "Profissional, ético, respeitoso e comprometido com a segurança e a qualidade do RP",
      "Alguém que busca apenas ação e tiroteios",
      "Uma pessoa que impõe medo na população",
    ],
    correctAnswer: 1,
    category: "Perfil e Conduta",
  },
  {
    id: 2,
    question: "Um agente da PRF recém-aprovado deve ter qual postura nos primeiros dias?",
    options: [
      "Agir por conta própria para mostrar serviço",
      "Humildade, disposição para aprender, acompanhar superiores e seguir ordens",
      "Sair fazendo abordagens sozinho sem supervisão",
      "Pedir logo uma patente alta",
    ],
    correctAnswer: 1,
    category: "Perfil e Conduta",
  },
  {
    id: 3,
    question: "Qual é a postura esperada de um agente da PRF ao entrar em serviço?",
    options: [
      "Ir direto para a rua sem se preparar",
      "Vestir a farda completa, equipar-se, verificar viatura, comunicar QAP pelo rádio e aguardar designação",
      "Pegar qualquer carro e sair dirigindo",
      "Ficar no celular esperando algo acontecer",
    ],
    correctAnswer: 1,
    category: "Perfil e Conduta",
  },
  {
    id: 4,
    question: "Um agente da PRF pode fazer piadas e brincadeiras com civis durante uma abordagem?",
    options: [
      "Sim, para quebrar o gelo",
      "Não, deve manter postura profissional e séria durante procedimentos operacionais",
      "Sim, se o civil for engraçado",
      "Sim, sempre que quiser",
    ],
    correctAnswer: 1,
    category: "Perfil e Conduta",
  },
  {
    id: 5,
    question: "Qual deve ser a aparência de um agente da PRF em serviço?",
    options: [
      "Qualquer roupa que quiser",
      "Farda padrão da corporação, sem modificações pessoais não autorizadas",
      "Pode usar acessórios de personagem como máscaras e chapéus",
      "Roupa casual com colete por cima",
    ],
    correctAnswer: 1,
    category: "Perfil e Conduta",
  },
  {
    id: 6,
    question: "Um agente da PRF fora de serviço presencia um crime grave. O que fazer?",
    options: [
      "Ignorar completamente pois está de folga",
      "Comunicar pelo rádio/telefone aos colegas em serviço e, se seguro, prestar assistência básica sem se expor",
      "Intervir sozinho com violência",
      "Gravar e postar no Discord",
    ],
    correctAnswer: 1,
    category: "Perfil e Conduta",
  },
  {
    id: 7,
    question: "É permitido a um agente da PRF ter envolvimento com atividades criminosas no RP?",
    options: [
      "Sim, desde que ninguém descubra",
      "Sim, faz parte do roleplay",
      "Não, é totalmente proibido — o agente deve ser íntegro em e fora de serviço",
      "Apenas com autorização do comando",
    ],
    correctAnswer: 2,
    category: "Perfil e Conduta",
  },
  {
    id: 8,
    question: "Como o agente da PRF deve tratar TODOS os civis durante interações?",
    options: [
      "Com superioridade e arrogância",
      "Com educação, respeito e cordialidade, independente da situação",
      "Depende da aparência do civil",
      "Com indiferença",
    ],
    correctAnswer: 1,
    category: "Perfil e Conduta",
  },
  {
    id: 9,
    question: "O agente pode divulgar informações sigilosas de operações para civis ou amigos?",
    options: [
      "Sim, para amigos de confiança",
      "Não, informações operacionais são sigilosas e devem permanecer dentro da corporação",
      "Sim, se postar no Discord privado",
      "Sim, apenas para a namorada(o) no RP",
    ],
    correctAnswer: 1,
    category: "Perfil e Conduta",
  },
  {
    id: 10,
    question: "Qual é a consequência de um agente que tem muitas reclamações de abuso por parte de civis?",
    options: [
      "Nenhuma, civis sempre reclamam",
      "Investigação interna (corregedoria), podendo resultar em advertência, suspensão ou exoneração",
      "Promoção por ser rigoroso",
      "Apenas uma conversa informal",
    ],
    correctAnswer: 1,
    category: "Perfil e Conduta",
  },

  // ================================================================
  // CATEGORIA 2: ÉTICA E DISCIPLINA (10 questões)
  // ================================================================
  {
    id: 11,
    question: "O que é ética profissional para um agente da PRF?",
    options: [
      "Fazer o que for mais conveniente na hora",
      "Conjunto de valores morais que guiam a conduta: honestidade, justiça, imparcialidade e respeito",
      "Apenas seguir ordens sem questionar",
      "Ser o mais temido da cidade",
    ],
    correctAnswer: 1,
    category: "Ética e Disciplina",
  },
  {
    id: 12,
    question: "Um civil oferece dinheiro para ser liberado de uma multa. O que o agente deve fazer?",
    options: [
      "Aceitar discretamente",
      "Recusar firmemente, informar que tentativa de suborno é crime e registrar a ocorrência",
      "Aceitar e fingir que nada aconteceu",
      "Pedir um valor maior",
    ],
    correctAnswer: 1,
    category: "Ética e Disciplina",
  },
  {
    id: 13,
    question: "O agente descobre que um colega está praticando corrupção. Qual a atitude correta?",
    options: [
      "Ignorar por lealdade ao colega",
      "Participar junto",
      "Reportar ao superior hierárquico ou à corregedoria imediatamente",
      "Ameaçar o colega para parar",
    ],
    correctAnswer: 2,
    category: "Ética e Disciplina",
  },
  {
    id: 14,
    question: "É permitido ao agente usar a viatura da PRF para fins pessoais?",
    options: [
      "Sim, quando estiver em serviço",
      "Não, viaturas são exclusivamente para uso operacional da corporação",
      "Sim, para ir almoçar",
      "Sim, se ninguém ver",
    ],
    correctAnswer: 1,
    category: "Ética e Disciplina",
  },
  {
    id: 15,
    question: "O que é imparcialidade na atuação da PRF?",
    options: [
      "Tratar bem apenas quem merece",
      "Aplicar a lei de forma igual para todos, sem favorecimentos ou discriminação",
      "Ser mais rígido com quem não gosta",
      "Dar vantagens para amigos",
    ],
    correctAnswer: 1,
    category: "Ética e Disciplina",
  },
  {
    id: 16,
    question: "Um agente pode prender alguém por 'antipatia pessoal' sem motivo legal?",
    options: [
      "Sim, o agente tem autoridade",
      "Não, toda ação policial deve ter fundamento legal — prisão sem motivo é abuso de autoridade",
      "Sim, se desconfiar da pessoa",
      "Sim, se a pessoa for mal educada",
    ],
    correctAnswer: 1,
    category: "Ética e Disciplina",
  },
  {
    id: 17,
    question: "Qual a importância da hierarquia dentro da PRF?",
    options: [
      "Não tem importância nenhuma",
      "Garante organização, disciplina, cadeia de comando e eficiência operacional",
      "Serve apenas para definir quem ganha mais",
      "É só burocracia desnecessária",
    ],
    correctAnswer: 1,
    category: "Ética e Disciplina",
  },
  {
    id: 18,
    question: "O agente recebe uma ordem de um superior que ele considera inadequada. O que fazer?",
    options: [
      "Ignorar completamente a ordem",
      "Cumprir a ordem e depois, se necessário, questionar respeitosamente ao superior ou reportar ao comando",
      "Xingar o superior publicamente",
      "Recusar e ir embora",
    ],
    correctAnswer: 1,
    category: "Ética e Disciplina",
  },
  {
    id: 19,
    question: "É aceitável que o agente da PRF faça 'justiça com as próprias mãos'?",
    options: [
      "Sim, policiais têm esse direito",
      "Sim, quando a justiça é lenta",
      "Não, toda ação deve seguir os procedimentos legais e os protocolos da corporação",
      "Depende da gravidade do crime",
    ],
    correctAnswer: 2,
    category: "Ética e Disciplina",
  },
  {
    id: 20,
    question: "O que a corregedoria faz dentro da PRF?",
    options: [
      "Organiza festas da corporação",
      "Investiga e fiscaliza a conduta dos agentes, aplicando punições quando necessário",
      "Distribui promoções",
      "Cuida das viaturas",
    ],
    correctAnswer: 1,
    category: "Ética e Disciplina",
  },

  // ================================================================
  // CATEGORIA 3: LEGISLAÇÃO DE TRÂNSITO (10 questões)
  // ================================================================
  {
    id: 21,
    question: "Qual é o limite de velocidade em vias urbanas sem sinalização específica?",
    options: ["40 km/h", "60 km/h", "80 km/h", "50 km/h"],
    correctAnswer: 1,
    category: "Legislação de Trânsito",
  },
  {
    id: 22,
    question: "Qual documento é obrigatório para conduzir um veículo na cidade?",
    options: [
      "Apenas o RG",
      "CNH (Carteira Nacional de Habilitação)",
      "Certidão de nascimento",
      "Carteira de trabalho",
    ],
    correctAnswer: 1,
    category: "Legislação de Trânsito",
  },
  {
    id: 23,
    question: "Em uma blitz da PRF, o cidadão deve:",
    options: [
      "Fugir do local",
      "Ignorar a ordem de parada",
      "Parar o veículo e apresentar os documentos solicitados",
      "Acelerar e tentar desviar",
    ],
    correctAnswer: 2,
    category: "Legislação de Trânsito",
  },
  {
    id: 24,
    question: "Qual é a penalidade para dirigir sem CNH na cidade?",
    options: [
      "Nenhuma penalidade",
      "Apenas uma advertência verbal",
      "Apreensão do veículo e multa",
      "Apenas multa",
    ],
    correctAnswer: 2,
    category: "Legislação de Trânsito",
  },
  {
    id: 25,
    question: "O que significa a sigla PRF?",
    options: [
      "Polícia Regional Federal",
      "Polícia Rodoviária Federal",
      "Patrulha Rodoviária Fiscal",
      "Proteção Rodoviária Federal",
    ],
    correctAnswer: 1,
    category: "Legislação de Trânsito",
  },
  {
    id: 26,
    question: "Ao constatar que um veículo possui placa clonada, o agente da PRF deve:",
    options: [
      "Ignorar e liberar o motorista",
      "Apreender o veículo, reter documentos e encaminhar à delegacia",
      "Dar apenas uma advertência",
      "Deixar o motorista ir e anotar a placa",
    ],
    correctAnswer: 1,
    category: "Legislação de Trânsito",
  },
  {
    id: 27,
    question: "Qual é a consequência para um motorista que fura uma blitz da PRF?",
    options: [
      "Nenhuma, é direito do cidadão",
      "Evasão de fiscalização — pode resultar em perseguição, multa e detenção",
      "Apenas uma multa leve",
      "O agente deve ignorar",
    ],
    correctAnswer: 1,
    category: "Legislação de Trânsito",
  },
  {
    id: 28,
    question: "Um veículo trafegando na contramão deve:",
    options: [
      "Ser ignorado se não houver outros carros",
      "Ser abordado, multado e o condutor notificado pela infração gravíssima",
      "Receber apenas uma advertência verbal",
      "Ser escoltado até sair da via",
    ],
    correctAnswer: 1,
    category: "Legislação de Trânsito",
  },
  {
    id: 29,
    question: "Em caso de acidente de trânsito, qual é a primeira ação do agente da PRF?",
    options: [
      "Aplicar multa imediatamente",
      "Sinalizar o local, prestar socorro às vítimas e acionar o SAMU se necessário",
      "Tirar fotos para o relatório e ir embora",
      "Aguardar outros órgãos chegarem",
    ],
    correctAnswer: 1,
    category: "Legislação de Trânsito",
  },
  {
    id: 30,
    question: "Um motorista embriagado é parado em uma blitz. O procedimento correto é:",
    options: [
      "Dar uma advertência verbal e liberar",
      "Aplicar multa, apreender o veículo, conduzir o infrator à delegacia e registrar a ocorrência",
      "Apenas tomar a chave do carro",
      "Pedir para outra pessoa dirigir",
    ],
    correctAnswer: 1,
    category: "Legislação de Trânsito",
  },

  // ================================================================
  // CATEGORIA 4: PROCEDIMENTOS DE ABORDAGEM (10 questões)
  // ================================================================
  {
    id: 31,
    question: "Qual o passo a passo correto de uma abordagem veicular de rotina?",
    options: [
      "Parar ao lado, gritar e mandar sair do carro",
      "Sinalizar com luzes/sirene, posicionar viatura, aproximar-se com cautela, identificar-se, solicitar documentos educadamente",
      "Bloquear o carro na frente e sacar a arma",
      "Apenas buzinar e mandar parar",
    ],
    correctAnswer: 1,
    category: "Abordagem e Patrulha",
  },
  {
    id: 32,
    question: "Durante uma abordagem, onde o agente deve manter as mãos?",
    options: [
      "Nos bolsos, relaxado",
      "Próximo ao coldre/equipamento, em posição de prontidão, mas sem sacar a arma sem necessidade",
      "Cruzadas atrás das costas",
      "Segurando o celular",
    ],
    correctAnswer: 1,
    category: "Abordagem e Patrulha",
  },
  {
    id: 33,
    question: "Ao abordar um veículo com vidros escuros, o agente deve:",
    options: [
      "Ignorar os vidros escuros",
      "Solicitar que todos os vidros sejam abaixados, manter distância de segurança e ter cautela redobrada",
      "Quebrar o vidro para ver dentro",
      "Atirar preventivamente",
    ],
    correctAnswer: 1,
    category: "Abordagem e Patrulha",
  },
  {
    id: 34,
    question: "Qual é a posição correta da viatura durante uma abordagem em rodovia?",
    options: [
      "Parar ao lado do veículo abordado",
      "Posicionar a viatura atrás e levemente deslocada para proteção, com luzes acionadas",
      "Parar na frente do veículo bloqueando a passagem",
      "Estacionar do outro lado da rodovia",
    ],
    correctAnswer: 1,
    category: "Abordagem e Patrulha",
  },
  {
    id: 35,
    question: "Ao abordar um suspeito armado e perigoso, qual a conduta correta?",
    options: [
      "Abordar sozinho para mostrar coragem",
      "Solicitar apoio pelo rádio, manter distância segura, usar cobertura, dar voz de comando firme e clara",
      "Atirar primeiro sem aviso",
      "Conversar calmamente pedindo a arma",
    ],
    correctAnswer: 1,
    category: "Abordagem e Patrulha",
  },
  {
    id: 36,
    question: "Durante uma abordagem, o suspeito tenta fugir a pé. O que fazer?",
    options: [
      "Atirar nas costas imediatamente",
      "Iniciar perseguição a pé, comunicar pelo rádio a direção da fuga, solicitar apoio e manter contato visual",
      "Deixar fugir, não vale a pena",
      "Atropelar com a viatura",
    ],
    correctAnswer: 1,
    category: "Abordagem e Patrulha",
  },
  {
    id: 37,
    question: "Quantos agentes devem participar, idealmente, de uma abordagem veicular?",
    options: [
      "Apenas 1 agente",
      "No mínimo 2 agentes — um faz a abordagem e outro cobre/dá segurança",
      "Quanto mais melhor, sem limite",
      "Depende do humor do agente",
    ],
    correctAnswer: 1,
    category: "Abordagem e Patrulha",
  },
  {
    id: 38,
    question: "Ao realizar uma revista pessoal (busca), o agente deve:",
    options: [
      "Revistar de qualquer jeito, rápido",
      "Informar o motivo da revista, ser profissional, respeitar a integridade do revistado e realizar com técnica adequada",
      "Apenas perguntar se está armado",
      "Mandar o civil se revistar sozinho",
    ],
    correctAnswer: 1,
    category: "Abordagem e Patrulha",
  },
  {
    id: 39,
    question: "O uso de algemas é permitido quando:",
    options: [
      "Sempre que quiser intimidar",
      "Apenas em casos de resistência, fundado receio de fuga ou perigo à integridade física",
      "Nunca é permitido",
      "Em toda e qualquer abordagem",
    ],
    correctAnswer: 1,
    category: "Abordagem e Patrulha",
  },
  {
    id: 40,
    question: "Após uma abordagem bem-sucedida com apreensão de material ilícito, o agente deve:",
    options: [
      "Jogar o material fora",
      "Preservar o material apreendido, registrar tudo, conduzir à delegacia e elaborar relatório detalhado",
      "Ficar com o material como troféu",
      "Devolver ao suspeito com advertência",
    ],
    correctAnswer: 1,
    category: "Abordagem e Patrulha",
  },

  // ================================================================
  // CATEGORIA 5: PERSEGUIÇÃO E USO DA FORÇA (10 questões)
  // ================================================================
  {
    id: 41,
    question: "Durante uma perseguição veicular, qual a conduta correta do agente da PRF?",
    options: [
      "Atirar nos pneus do veículo imediatamente",
      "Usar sirene e luzes, comunicar pelo rádio, seguir protocolos de segurança e não colocar civis em risco",
      "Desistir da perseguição automaticamente",
      "Ultrapassar todos os limites de velocidade sem cuidado",
    ],
    correctAnswer: 1,
    category: "Perseguição e Uso da Força",
  },
  {
    id: 42,
    question: "Quando a PRF pode iniciar uma perseguição veicular?",
    options: [
      "Sempre que um carro parecer suspeito",
      "Quando o veículo desobedece ordem de parada e há indícios de crime ou infração grave",
      "Apenas por diversão",
      "Quando o agente está entediado",
    ],
    correctAnswer: 1,
    category: "Perseguição e Uso da Força",
  },
  {
    id: 43,
    question: "Quando pode um agente da PRF usar força letal (arma de fogo)?",
    options: [
      "Sempre que quiser intimidar",
      "Em qualquer perseguição veicular",
      "Apenas em legítima defesa ou para proteger a vida de terceiros quando não houver alternativa",
      "Quando o suspeito desobedecer uma ordem verbal",
    ],
    correctAnswer: 2,
    category: "Perseguição e Uso da Força",
  },
  {
    id: 44,
    question: "O que é 'uso progressivo da força'?",
    options: [
      "Usar sempre a força máxima desde o início",
      "Escalonar a resposta: presença → verbalização → controle de mãos → spray/taser → força letal, conforme a resistência do suspeito",
      "Bater primeiro e perguntar depois",
      "Nunca usar força em nenhuma situação",
    ],
    correctAnswer: 1,
    category: "Perseguição e Uso da Força",
  },
  {
    id: 45,
    question: "A perseguição está colocando civis inocentes em risco extremo. O que fazer?",
    options: [
      "Continuar a qualquer custo",
      "Avaliar a situação — se o risco a terceiros for maior que a necessidade da prisão, cessar a perseguição e buscar alternativas",
      "Acelerar mais para acabar logo",
      "Ignorar os civis no caminho",
    ],
    correctAnswer: 1,
    category: "Perseguição e Uso da Força",
  },
  {
    id: 46,
    question: "Após efetuar disparos em uma ocorrência, o agente deve:",
    options: [
      "Fugir do local",
      "Comunicar imediatamente ao comando, prestar socorro se houver feridos e elaborar relatório detalhado",
      "Esconder que atirou",
      "Continuar o serviço normalmente sem reportar",
    ],
    correctAnswer: 1,
    category: "Perseguição e Uso da Força",
  },
  {
    id: 47,
    question: "O que é PIT maneuver (técnica de interceptação tática)?",
    options: [
      "Bater na traseira do veículo em alta velocidade",
      "Manobra controlada para fazer o veículo em fuga girar e parar, usada apenas quando autorizado e em condições seguras",
      "Jogar a viatura contra o suspeito de frente",
      "Atirar nos pneus do carro",
    ],
    correctAnswer: 1,
    category: "Perseguição e Uso da Força",
  },
  {
    id: 48,
    question: "O agente pode atirar em um suspeito desarmado que está fugindo a pé?",
    options: [
      "Sim, para evitar a fuga",
      "Não, disparos contra suspeito desarmado em fuga são uso desproporcional da força",
      "Sim, se estiver muito cansado de correr",
      "Sim, qualquer fuga justifica o disparo",
    ],
    correctAnswer: 1,
    category: "Perseguição e Uso da Força",
  },
  {
    id: 49,
    question: "Em uma situação de refém, o agente da PRF deve:",
    options: [
      "Invadir o local imediatamente atirando",
      "Isolar a área, solicitar negociador, manter comunicação com o comando e aguardar equipe especializada",
      "Negociar sozinho gritando de fora",
      "Ir embora e deixar para outra corporação resolver",
    ],
    correctAnswer: 1,
    category: "Perseguição e Uso da Força",
  },
  {
    id: 50,
    question: "Qual é o princípio da proporcionalidade no uso da força?",
    options: [
      "Usar sempre a força máxima disponível",
      "A força utilizada deve ser proporcional à ameaça — não se pode usar força excessiva para situações leves",
      "Toda situação requer arma de fogo",
      "Não existe esse princípio",
    ],
    correctAnswer: 1,
    category: "Perseguição e Uso da Força",
  },

  // ================================================================
  // CATEGORIA 6: CÓDIGOS DE RÁDIO E COMUNICAÇÃO (10 questões)
  // ================================================================
  {
    id: 51,
    question: "O que significa a sigla QAP no rádio?",
    options: [
      "Estou saindo de serviço",
      "Estou na escuta / Estou disponível",
      "Preciso de ajuda",
      "Estou em perseguição",
    ],
    correctAnswer: 1,
    category: "Códigos de Rádio",
  },
  {
    id: 52,
    question: "Qual o código de rádio para solicitar apoio/reforço urgente?",
    options: [
      "Código 7 — Hora do lanche",
      "QAP — Estou na escuta",
      "QRR — Solicito apoio/reforço urgente",
      "QSL — Entendido",
    ],
    correctAnswer: 2,
    category: "Códigos de Rádio",
  },
  {
    id: 53,
    question: "O que significa 'QSL' na comunicação via rádio?",
    options: [
      "Solicito reforço",
      "Câmbio final",
      "Entendido / Copiado",
      "Estou em perigo",
    ],
    correctAnswer: 2,
    category: "Códigos de Rádio",
  },
  {
    id: 54,
    question: "O que significa 'QTH' na comunicação policial?",
    options: [
      "Qual é sua localização / Endereço",
      "Quantas horas de serviço",
      "Quero trocar de viatura",
      "Estou indisponível",
    ],
    correctAnswer: 0,
    category: "Códigos de Rádio",
  },
  {
    id: 55,
    question: "O que significa 'Código 0' (zero) na comunicação policial?",
    options: [
      "Hora do almoço",
      "Situação de emergência máxima / Agente em perigo de vida",
      "Final de turno",
      "Trânsito livre",
    ],
    correctAnswer: 1,
    category: "Códigos de Rádio",
  },
  {
    id: 56,
    question: "O que significa 'QRV' na comunicação via rádio?",
    options: [
      "Estou ocupado",
      "Pronto para receber / À disposição",
      "Retornando à base",
      "Veículo avariado",
    ],
    correctAnswer: 1,
    category: "Códigos de Rádio",
  },
  {
    id: 57,
    question: "Qual é o procedimento correto ao usar o rádio para reportar uma ocorrência?",
    options: [
      "Falar rápido e sem pausas para não perder tempo",
      "Identificar-se, informar QTH (localização), descrever a ocorrência de forma clara e objetiva",
      "Gritar no rádio para todos ouvirem",
      "Enviar apenas mensagem de texto no chat",
    ],
    correctAnswer: 1,
    category: "Códigos de Rádio",
  },
  {
    id: 58,
    question: "O que significa 'QRX' na comunicação via rádio?",
    options: [
      "Solicito escolta",
      "Aguarde / Espere um momento",
      "Estou em perseguição",
      "Preciso de ambulância",
    ],
    correctAnswer: 1,
    category: "Códigos de Rádio",
  },
  {
    id: 59,
    question: "Ao realizar uma abordagem, o agente deve se identificar dizendo:",
    options: [
      "Não precisa se identificar",
      "\"PRF! Pare o veículo e mantenha as mãos onde eu possa ver!\"",
      "\"Sai do carro agora!\"",
      "\"Polícia! Me dá tudo!\"",
    ],
    correctAnswer: 1,
    category: "Códigos de Rádio",
  },
  {
    id: 60,
    question: "Qual a importância de usar a frequência correta do rádio?",
    options: [
      "Não tem importância, qualquer frequência serve",
      "Evita interferência com outras corporações, mantém comunicação organizada e garante sigilo operacional",
      "Apenas para enfeitar o RP",
      "Serve só para o comando ouvir",
    ],
    correctAnswer: 1,
    category: "Códigos de Rádio",
  },

  // ================================================================
  // CATEGORIA 7: SITUAÇÕES PRÁTICAS DO DIA A DIA (10 questões)
  // ================================================================
  {
    id: 61,
    question: "Você está em patrulha e avista um veículo em alta velocidade costurando no trânsito. O que fazer?",
    options: [
      "Ignorar e continuar a rota",
      "Acionar luzes e sirene, iniciar acompanhamento, sinalizar para parar e realizar abordagem com segurança",
      "Atirar nos pneus imediatamente",
      "Competir de velocidade com o veículo",
    ],
    correctAnswer: 1,
    category: "Situações Práticas",
  },
  {
    id: 62,
    question: "Um civil se aproxima da viatura pedindo ajuda — diz que foi roubado. O que fazer?",
    options: [
      "Ignorar, não é função da PRF",
      "Ouvir o relato com atenção, coletar informações (descrição do suspeito, local, direção da fuga), comunicar pelo rádio e prestar assistência",
      "Mandar ir à delegacia sozinho",
      "Dizer que está ocupado",
    ],
    correctAnswer: 1,
    category: "Situações Práticas",
  },
  {
    id: 63,
    question: "Durante uma blitz, você encontra um veículo com documentação irregular mas o condutor é educado. Como agir?",
    options: [
      "Liberar porque foi educado",
      "Aplicar os procedimentos legais normalmente — a lei é igual para todos, independente da atitude do condutor",
      "Dar uma advertência verbal apenas",
      "Ignorar e deixar passar",
    ],
    correctAnswer: 1,
    category: "Situações Práticas",
  },
  {
    id: 64,
    question: "Você e seu parceiro discordam sobre como proceder em uma ocorrência. O que fazer?",
    options: [
      "Brigar na frente dos civis",
      "Discutir profissionalmente em particular, e se não houver consenso, consultar o superior pelo rádio",
      "Cada um faz do seu jeito",
      "Ignorar o parceiro e agir sozinho",
    ],
    correctAnswer: 1,
    category: "Situações Práticas",
  },
  {
    id: 65,
    question: "Um grupo de civis está fazendo um 'racha' (corrida ilegal) na rodovia. Qual a ação correta?",
    options: [
      "Assistir e torcer",
      "Comunicar pelo rádio, montar bloqueio seguro, abordar os envolvidos, apreender veículos e conduzir à delegacia",
      "Participar da corrida com a viatura",
      "Dar apenas uma advertência verbal e liberar",
    ],
    correctAnswer: 1,
    category: "Situações Práticas",
  },
  {
    id: 66,
    question: "Você encontra um veículo abandonado na beira da rodovia. O que fazer?",
    options: [
      "Ignorar completamente",
      "Verificar a situação do veículo, checar se há ocupantes/feridos, consultar a placa no sistema, sinalizar e guinchar se necessário",
      "Empurrar para fora da pista sozinho",
      "Usar como viatura reserva",
    ],
    correctAnswer: 1,
    category: "Situações Práticas",
  },
  {
    id: 67,
    question: "Um caminhão está transportando carga visivelmente acima do peso permitido. O que fazer?",
    options: [
      "Ignorar se o motorista parecer simpático",
      "Abordar o veículo, fiscalizar a documentação da carga, aplicar multa por excesso de peso e reter até regularização",
      "Deixar passar se estiver com pressa",
      "Apenas anotar a placa e não fazer nada",
    ],
    correctAnswer: 1,
    category: "Situações Práticas",
  },
  {
    id: 68,
    question: "Você está sozinho e avista uma situação de sequestro em andamento. O que fazer?",
    options: [
      "Intervir sozinho imediatamente",
      "Comunicar IMEDIATAMENTE pelo rádio com todas as informações (QTH, veículo, direção, número de suspeitos), acompanhar à distância segura e aguardar reforço",
      "Ir embora para não se arriscar",
      "Atirar no veículo dos sequestradores",
    ],
    correctAnswer: 1,
    category: "Situações Práticas",
  },
  {
    id: 69,
    question: "Um civil começa a filmar sua abordagem com o celular. Qual a reação correta?",
    options: [
      "Mandar parar de filmar imediatamente",
      "Agir naturalmente — o civil tem direito de filmar ações policiais em espaço público; mantenha a conduta profissional",
      "Tomar o celular do civil",
      "Prender o civil por desacato",
    ],
    correctAnswer: 1,
    category: "Situações Práticas",
  },
  {
    id: 70,
    question: "Você está em patrulha e seu rádio para de funcionar. O que fazer?",
    options: [
      "Continuar patrulhando normalmente sem comunicação",
      "Retornar à base imediatamente para resolver o problema — operar sem comunicação é extremamente perigoso",
      "Usar o celular pessoal para tudo",
      "Ignorar e torcer para nada acontecer",
    ],
    correctAnswer: 1,
    category: "Situações Práticas",
  },

  // ================================================================
  // CATEGORIA 8: REGRAS DO RP E DO SERVIDOR (10 questões)
  // ================================================================
  {
    id: 71,
    question: "Qual a importância do roleplay (RP) para um agente da PRF no FiveM?",
    options: [
      "Não tem importância nenhuma",
      "Interpretar o personagem de forma realista, coerente e imersiva para todos",
      "Apenas seguir ordens sem pensar",
      "Fazer o que quiser na cidade",
    ],
    correctAnswer: 1,
    category: "Regras do RP",
  },
  {
    id: 72,
    question: "O que é 'VDM' (Vehicle Deathmatch) no contexto do FiveM?",
    options: [
      "Corrida de veículos organizada",
      "Usar veículos como arma para atropelar outros jogadores sem motivo RP",
      "Dirigir em alta velocidade",
      "Usar carros da polícia fora de serviço",
    ],
    correctAnswer: 1,
    category: "Regras do RP",
  },
  {
    id: 73,
    question: "O que é 'RDM' (Random Deathmatch) e por que é proibido?",
    options: [
      "É permitido, faz parte do jogo",
      "Matar outros jogadores aleatoriamente sem motivo RP — quebra a imersão",
      "Morrer muitas vezes no jogo",
      "Fazer roleplay de combate organizado",
    ],
    correctAnswer: 1,
    category: "Regras do RP",
  },
  {
    id: 74,
    question: "O que é 'metagaming' e por que um agente da PRF deve evitar?",
    options: [
      "Usar informações obtidas fora do RP (Discord, stream, OOC) dentro do jogo — quebra completamente a imersão",
      "Jogar em alto nível competitivo",
      "Usar o chat da cidade para se comunicar",
      "Fazer relatórios detalhados",
    ],
    correctAnswer: 0,
    category: "Regras do RP",
  },
  {
    id: 75,
    question: "O que é 'powergaming' no RP?",
    options: [
      "Ser um policial muito bom",
      "Fazer ações impossíveis ou forçar situações que o outro jogador não pode reagir ou contestar",
      "Subir de patente rapidamente",
      "Usar equipamentos avançados da corporação",
    ],
    correctAnswer: 1,
    category: "Regras do RP",
  },
  {
    id: 76,
    question: "No França RP, o que é 'anti-jogo'?",
    options: [
      "Jogar de forma competitiva",
      "Ações que quebram a imersão do RP, desrespeitam as regras do servidor ou prejudicam a experiência dos outros jogadores",
      "Fazer muitas prisões num dia",
      "Usar veículos rápidos na perseguição",
    ],
    correctAnswer: 1,
    category: "Regras do RP",
  },
  {
    id: 77,
    question: "O que é 'FailRP' e dê um exemplo envolvendo a PRF:",
    options: [
      "FailRP não existe",
      "Agir de forma irreal que quebraria a imersão — ex: um agente da PRF pulando de um prédio alto e agindo como se nada tivesse acontecido",
      "Fazer muitas ocorrências no dia",
      "Não conseguir prender o suspeito",
    ],
    correctAnswer: 1,
    category: "Regras do RP",
  },
  {
    id: 78,
    question: "O agente pode usar veículo particular durante o serviço na PRF?",
    options: [
      "Sim, qualquer veículo",
      "Não, deve utilizar apenas viaturas autorizadas da corporação durante o serviço",
      "Sim, desde que coloque um giroflex",
      "Sim, se o carro for bonito",
    ],
    correctAnswer: 1,
    category: "Regras do RP",
  },
  {
    id: 79,
    question: "O que é 'Combat Logging' e por que é grave?",
    options: [
      "Sair do jogo (deslogar) durante uma situação de RP para evitar consequências — é anti-jogo grave",
      "Combater muito no jogo",
      "Fazer login durante uma ação policial",
      "É uma técnica de combate permitida",
    ],
    correctAnswer: 0,
    category: "Regras do RP",
  },
  {
    id: 80,
    question: "No FiveM, o que acontece se um agente da PRF for flagrado quebrando regras graves do servidor?",
    options: [
      "Nada, policiais são protegidos",
      "Pode receber advertência, suspensão, exoneração da corporação e até banimento do servidor",
      "Apenas uma conversa informal",
      "É promovido por ser criativo",
    ],
    correctAnswer: 1,
    category: "Regras do RP",
  },

  // ================================================================
  // CATEGORIA 9: OPERAÇÕES E TRABALHO EM EQUIPE (10 questões)
  // ================================================================
  {
    id: 81,
    question: "Em uma operação conjunta com outra corporação (PM, BOPE), a PRF deve:",
    options: [
      "Agir por conta própria ignorando as outras forças",
      "Coordenar as ações, respeitar as atribuições de cada corporação e manter comunicação constante",
      "Deixar tudo para a outra corporação",
      "Competir para ver quem prende primeiro",
    ],
    correctAnswer: 1,
    category: "Operações e Equipe",
  },
  {
    id: 82,
    question: "Qual é a função da PRF em uma operação de cerco e bloqueio?",
    options: [
      "Ficar assistindo de longe",
      "Posicionar viaturas em pontos estratégicos, bloquear rotas de fuga e fiscalizar veículos suspeitos",
      "Fazer barulho com a sirene apenas",
      "Deixar tudo para o BOPE",
    ],
    correctAnswer: 1,
    category: "Operações e Equipe",
  },
  {
    id: 83,
    question: "O que é uma 'batida policial' ou cerco tático?",
    options: [
      "Uma festa na delegacia",
      "Operação coordenada para cercar e prender suspeitos em uma área específica com planejamento prévio",
      "Bater em suspeitos durante interrogatório",
      "Corrida entre viaturas da corporação",
    ],
    correctAnswer: 1,
    category: "Operações e Equipe",
  },
  {
    id: 84,
    question: "Como deve ser o trabalho entre parceiros de viatura?",
    options: [
      "Cada um faz o que quer, não precisa combinar",
      "Comunicação constante, coordenação de funções (motorista/atirador-observador), confiança mútua e cobertura",
      "O mais graduado faz tudo sozinho",
      "Discutir quem é melhor o tempo todo",
    ],
    correctAnswer: 1,
    category: "Operações e Equipe",
  },
  {
    id: 85,
    question: "Antes de uma operação planejada, o que deve ser feito?",
    options: [
      "Sair direto para a ação sem preparação",
      "Briefing com toda equipe: definir objetivos, funções, rotas, frequência de rádio e plano de contingência",
      "Cada agente decide o que vai fazer na hora",
      "Apenas verificar se tem munição",
    ],
    correctAnswer: 1,
    category: "Operações e Equipe",
  },
  {
    id: 86,
    question: "O agente deve sair sozinho para atender uma ocorrência de alto risco?",
    options: [
      "Sim, para resolver rápido",
      "Não, ocorrências de alto risco exigem apoio — deve aguardar reforço e agir em equipe",
      "Sim, para mostrar bravura",
      "Depende do humor",
    ],
    correctAnswer: 1,
    category: "Operações e Equipe",
  },
  {
    id: 87,
    question: "O que é 'cobertura' em uma ação policial?",
    options: [
      "Esconder-se e não participar",
      "Quando um agente protege o outro durante uma abordagem ou ação, vigiando possíveis ameaças",
      "Cobrir o rosto com máscara",
      "Usar um cobertor à prova de balas",
    ],
    correctAnswer: 1,
    category: "Operações e Equipe",
  },
  {
    id: 88,
    question: "Após uma grande operação, o que deve ser feito?",
    options: [
      "Ir direto para casa descansar",
      "Debriefing (reunião pós-ação): analisar o que deu certo, o que pode melhorar e elaborar relatório completo",
      "Comemorar no chat",
      "Nada de especial",
    ],
    correctAnswer: 1,
    category: "Operações e Equipe",
  },
  {
    id: 89,
    question: "Qual a atribuição principal da PRF em relação às outras polícias?",
    options: [
      "Fazer o mesmo trabalho que todas as outras",
      "Patrulhamento rodoviário, fiscalização de trânsito, combate ao crime em rodovias e apoio às demais forças quando solicitado",
      "Investigação de crimes complexos",
      "Apenas escolta de autoridades",
    ],
    correctAnswer: 1,
    category: "Operações e Equipe",
  },
  {
    id: 90,
    question: "Durante uma escolta de veículo importante, qual a formação correta?",
    options: [
      "Todos atrás do veículo escoltado",
      "Viatura à frente abrindo caminho, veículo escoltado no meio e viatura atrás fechando, com comunicação constante",
      "Apenas uma viatura ao lado",
      "Não precisa de formação específica",
    ],
    correctAnswer: 1,
    category: "Operações e Equipe",
  },

  // ================================================================
  // CATEGORIA 10: CONHECIMENTOS ESPECÍFICOS E HIERARQUIA (10 questões)
  // ================================================================
  {
    id: 91,
    question: "Qual é a hierarquia correta na PRF (do menor para o maior)?",
    options: [
      "Inspetor > Agente > Delegado",
      "Agente > Inspetor > Superintendente",
      "Soldado > Cabo > Sargento",
      "Delegado > Agente > Estagiário",
    ],
    correctAnswer: 1,
    category: "Conhecimentos Específicos",
  },
  {
    id: 92,
    question: "O que deve conter em um relatório de ocorrência da PRF?",
    options: [
      "Apenas o nome do suspeito",
      "Data, hora, local, agentes envolvidos, descrição detalhada dos fatos, providências tomadas e desfecho",
      "Apenas uma foto do local",
      "Nada, relatórios não são necessários",
    ],
    correctAnswer: 1,
    category: "Conhecimentos Específicos",
  },
  {
    id: 93,
    question: "Qual é o principal dever de um agente da PRF no FiveM?",
    options: [
      "Perseguir e atirar em todos os criminosos",
      "Garantir a segurança nas vias, fiscalizar o trânsito, manter a ordem e proporcionar roleplay de qualidade",
      "Ficar parado na base esperando chamados o dia todo",
      "Competir com facções criminosas",
    ],
    correctAnswer: 1,
    category: "Conhecimentos Específicos",
  },
  {
    id: 94,
    question: "Qual equipamento é OBRIGATÓRIO para um agente da PRF em serviço?",
    options: [
      "Apenas a arma",
      "Farda completa da corporação, colete balístico, rádio comunicador, arma regulamentar e identificação funcional",
      "Roupa à paisana",
      "Apenas o colete",
    ],
    correctAnswer: 1,
    category: "Conhecimentos Específicos",
  },
  {
    id: 95,
    question: "Em uma cena de crime na rodovia, qual é a função primária da PRF?",
    options: [
      "Investigar o crime em detalhes por conta própria",
      "Isolar e preservar a área, garantir a segurança do local e acionar os órgãos competentes (Perícia, Delegacia)",
      "Recolher todas as evidências sozinho",
      "Interrogar todos os suspeitos imediatamente",
    ],
    correctAnswer: 1,
    category: "Conhecimentos Específicos",
  },
  {
    id: 96,
    question: "Ao prender um suspeito, o agente da PRF deve informar:",
    options: [
      "Nada, apenas levar para a delegacia",
      "O motivo da prisão e os direitos do detido (direito a advogado e de permanecer em silêncio)",
      "Que ele será liberado logo para acalmá-lo",
      "Ameaçar o suspeito para que confesse",
    ],
    correctAnswer: 1,
    category: "Conhecimentos Específicos",
  },
  {
    id: 97,
    question: "O que é 'Boletim de Ocorrência' (BO) e quando deve ser feito?",
    options: [
      "Um documento desnecessário",
      "Documento oficial que registra uma ocorrência policial — deve ser feito em toda ação que envolva crime, apreensão ou incidente relevante",
      "Apenas quando o superior mandar",
      "Só quando há mortos",
    ],
    correctAnswer: 1,
    category: "Conhecimentos Específicos",
  },
  {
    id: 98,
    question: "A PRF pode realizar fiscalização de documentos em:",
    options: [
      "Apenas em rodovias federais no mundo real",
      "Qualquer via pública conforme a necessidade operacional no servidor",
      "Apenas dentro de delegacias",
      "Apenas com mandado judicial",
    ],
    correctAnswer: 1,
    category: "Conhecimentos Específicos",
  },
  {
    id: 99,
    question: "O que um agente deve fazer ao final de cada turno/serviço?",
    options: [
      "Sair correndo para casa",
      "Registrar atividades realizadas, entregar viatura em condições, comunicar QRU (fim de serviço) e fazer relatórios pendentes",
      "Deixar tudo para o próximo turno",
      "Nada de especial",
    ],
    correctAnswer: 1,
    category: "Conhecimentos Específicos",
  },
  {
    id: 100,
    question: "Qual é a missão final e mais importante de todo agente da PRF no França RP?",
    options: [
      "Ter a maior quantidade de prisões possível",
      "Servir e proteger a população, garantir a segurança nas vias, agir com ética e proporcionar uma experiência de RP memorável para todos",
      "Ser o mais temido do servidor",
      "Subir de patente o mais rápido possível",
    ],
    correctAnswer: 1,
    category: "Conhecimentos Específicos",
  },
];

export const PASSING_SCORE = 70; // percentage to pass
export const MIN_CORRECT = Math.ceil((questions.length * PASSING_SCORE) / 100);
