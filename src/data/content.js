// Conteúdo real da Nexus (mesma copy do site atual em /site).
// Números e depoimentos marcados como placeholder devem ser substituídos
// pelos dados reais quando disponíveis.

export const contactInfo = {
  whatsappNumber: '5585994378137',
  whatsappDisplay: '(85) 99437-8137',
  email: 'nexus.assessoriafinanceira@gmail.com',
  address: 'Rua Padre Antonio Pinto, 1771',
  city: 'Baturité - CE',
  instagram: 'https://www.instagram.com/nexus.consultoriadigital/',
}

export const services = [
  {
    id: 1,
    number: '01',
    icon: 'Calculator',
    title: 'Contabilidade Digital Completa',
    desc: 'Gestão contábil completa e inteligente. Cuidamos de toda a burocracia enquanto você foca no crescimento.',
    tags: ['Escrituração contábil e fiscal', 'Folha de pagamento e encargos', 'Consultoria contábil mensal'],
    badge: 'Essencial',
    anchor: 'contabilidade-digital',
  },
  {
    id: 2,
    number: '02',
    icon: 'Percent',
    title: 'Planejamento Tributário',
    desc: 'Análise estratégica para redução legal de impostos e otimização da sua carga fiscal.',
    tags: ['Análise completa da situação fiscal', 'Escolha do melhor regime tributário', 'Acompanhamento contínuo'],
    badge: null,
    anchor: 'planejamento-tributario',
  },
  {
    id: 3,
    number: '03',
    icon: 'Rocket',
    title: 'Abertura de Empresas',
    desc: 'Abertura completa da sua empresa de forma rápida e descomplicada, com registro em todos os órgãos.',
    tags: ['Consultoria de enquadramento', 'Obtenção de CNPJ e alvarás', 'Abertura em até 15 dias úteis'],
    badge: 'Rápido',
    anchor: 'abertura-empresas',
  },
  {
    id: 4,
    number: '04',
    icon: 'ShieldCheck',
    title: 'Certificado Digital',
    desc: 'Emissão de Certificados Digitais A1 para PJ e PF, essencial para assinatura segura de documentos.',
    tags: ['Certificado A1 para PJ e PF', 'Emissão rápida e segura', 'Suporte na instalação'],
    badge: null,
    anchor: 'certificado-digital',
  },
]

// Números de exemplo — substitua pelos números reais da Nexus
export const stats = [
  { num: 10, label: 'Anos de experiência', suffix: '+' },
  { num: 98, label: 'Satisfação dos clientes', suffix: '%' },
  { num: 48, label: 'Tempo médio de resposta', suffix: 'h' },
  { num: 100, label: 'Digital e sem burocracia', suffix: '%' },
]

export const storyChapters = [
  {
    num: '01',
    title: 'A Nexus nasceu para simplificar a vida fiscal e financeira das empresas.',
    p1: 'Percebemos que empresas precisam de mais do que apenas números organizados — elas precisam de clareza, segurança e crescimento previsível.',
    p2: 'Combinamos expertise em gestão tributária, abertura de empresas e certificados digitais com um acompanhamento próximo e transparente.',
    align: 'left',
  },
  {
    num: '02',
    title: 'O resultado? Empresas que não apenas cumprem suas obrigações, mas crescem continuamente.',
    p1: 'Aplicamos a Fórmula Nexus para simplificar a gestão dos negócios e otimizar tributos por meio de estratégias inteligentes — sempre com um atendimento próximo e humano.',
    p2: 'Nossa visão é ser referência em contabilidade estratégica, entregando resultados reais com redução de impostos e crescimento sustentável.',
    align: 'right',
  },
]

export const values = [
  {
    icon: 'Target',
    title: 'Missão',
    desc: 'Aplicar a Fórmula Nexus para simplificar a gestão dos negócios e otimizar tributos por meio de estratégias inteligentes - sempre com um atendimento próximo e humano.',
  },
  {
    icon: 'Eye',
    title: 'Visão',
    desc: 'Ser referência em contabilidade estratégica, entregando resultados reais com redução de impostos e crescimento sustentável.',
  },
  {
    icon: 'Heart',
    title: 'Valores',
    desc: 'Excelência no atendimento, ética e transparência, inovação e estratégia, foco em resultados e compromisso absoluto com o crescimento dos nossos clientes.',
  },
]

// Diferenciais exibidos na Home
export const homeDifferentials = [
  {
    num: '01',
    title: 'Visão Estratégica',
    desc: 'Cada decisão fiscal é pensada para sustentar o crescimento do seu negócio, não só para cumprir obrigações.',
  },
  {
    num: '02',
    title: 'Estratégia Proativa',
    desc: 'Acompanhamento constante e ajustes de rota antes que os problemas apareçam, com relatórios claros a cada etapa.',
  },
  {
    num: '03',
    title: 'Compromisso com Resultado',
    desc: 'Metas objetivas, comunicação direta e um time que trata o seu negócio com o mesmo cuidado que trata o próprio.',
  },
]

// Diferenciais exibidos em Sobre Nós ("A Distinção Nexus")
export const aboutDifferentials = [
  {
    num: '01',
    title: 'Expertise Combinada',
    desc: 'Especialistas dedicados que dominam contabilidade estratégica e planejamento tributário, sem burocracia desnecessária.',
  },
  {
    num: '02',
    title: 'Atendimento Próximo',
    desc: 'Sem robôs, sem burocracia excessiva — você fala direto com quem entende do seu negócio.',
  },
  {
    num: '03',
    title: 'Resultados Mensuráveis',
    desc: 'Relatórios claros e acompanhamento constante para que cada real investido tenha retorno visível.',
  },
]

export const processSteps = [
  { title: 'Diagnóstico Inicial', tagline: 'Entendemos sua situação antes de agir', desc: 'Levantamento de documentos e análise completa da sua situação fiscal e contábil atual.', duration: 'Etapa 1' },
  { title: 'Planejamento Tributário', tagline: 'A estratégia certa para o seu regime', desc: 'Identificamos oportunidades de economia e definimos o enquadramento tributário mais vantajoso.', duration: 'Etapa 2' },
  { title: 'Abertura ou Migração', tagline: 'Toda a burocracia por nossa conta', desc: 'Cuidamos de CNPJ, alvarás e certificados para você começar — ou regularizar — com segurança.', duration: 'Etapa 3' },
  { title: 'Rotina Contábil', tagline: 'Sua contabilidade em dia, todo mês', desc: 'Escrituração, guias e folha de pagamento organizadas com precisão e pontualidade.', duration: 'Etapa 4' },
  { title: 'Acompanhamento Contínuo', tagline: 'Relatórios claros, ajustes constantes', desc: 'Consultoria mensal e relatórios transparentes para acompanhar cada resultado.', duration: 'Etapa 5' },
]

// Depoimentos de exemplo — substitua pelos depoimentos reais dos seus clientes
export const testimonials = [
  { quote: 'A Nexus organizou toda a nossa contabilidade e hoje temos clareza total sobre a saúde financeira do negócio.', author: 'Nome do Cliente', company: 'Empresário(a) — substitua por um depoimento real' },
  { quote: 'O acompanhamento é próximo e o planejamento tributário realmente funciona. Sentimos a diferença já nos primeiros meses.', author: 'Nome do Cliente', company: 'Empresário(a) — substitua por um depoimento real' },
  { quote: 'Ter uma contabilidade que realmente explica e orienta economizou nosso tempo e nosso dinheiro. Recomendo a Nexus de olhos fechados.', author: 'Nome do Cliente', company: 'Empresário(a) — substitua por um depoimento real' },
]

export const faqs = [
  { q: 'Em quanto tempo vejo resultados reais?', a: 'Contabilidade estratégica: implementação completa em 5-7 dias úteis. Planejamento tributário: primeiras economias identificadas em até 15 dias.' },
  { q: 'Qual o investimento para começar?', a: 'Soluções sob medida a partir de R$ 397/mês. Criamos pacotes personalizados de contabilidade estratégica para maximizar seus resultados.' },
  { q: 'Como vou acompanhar meu crescimento?', a: 'Relatórios mensais completos com métricas reais: impostos economizados, obrigações em dia e saúde financeira do negócio. Transparência total em cada etapa.' },
  { q: 'Posso contratar os serviços separadamente?', a: 'Sim! Cada serviço funciona de forma independente, e você monta o pacote de acordo com a necessidade da sua empresa.' },
]

export const serviceOptions = [
  { value: 'contabilidade-digital', label: 'Contabilidade Digital' },
  { value: 'planejamento-tributario', label: 'Planejamento Tributário' },
  { value: 'abertura', label: 'Abertura e Legalização de Empresa' },
  { value: 'certificado', label: 'Certificado Digital' },
]
