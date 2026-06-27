import { Project, TranslationSet } from './types';

export const TRANSLATIONS: Record<'ca' | 'es', TranslationSet> = {
  ca: {
    navProjects: 'Projectes',
    navStory: 'Trajectòria',
    navPhilosophy: 'Filosofia',
    navContact: 'Contacte',
    heroSubtitle: 'Arquitectura & Construcció',
    heroTagline: 'Rehabilitant el passat, dissenyant el futur. Espais atemporals fets de pedra, llum i matèria.',
    viewCaseStudy: 'Veure Projecte',
    categoryAll: 'Tots els Projectes',
    categoryArch: 'Arquitectura',
    categoryRehab: 'Rehabilitació',
    categoryRest: 'Restauració',
    philosophyTitle: 'Compromís amb la Matèria i el Patrimoni',
    philosophySubtitle: 'El diàleg constant entre el respecte històric i la innovació arquitectònica.',
    philosophyText1: 'A Ciurana Arquitectes & Constructors concebem cada projecte com una peça única de sastreria espacial. Combinem els coneixements tècnics de la construcció i la sensibilitat de la restauració de patrimoni per crear espais on el passat dialoga harmònicament amb les necessitats del present.',
    philosophyText2: 'Ens impliquem des del traç del primer esbós fins a la col·locació de l\'última pedra. Amb una forta arrel a les terres tarragonines, recuperem masies històriques, consolidem monuments d\'alt valor patrimonial i dissenyem habitatges contemporanis d\'alta eficiència energètica.',
    yearsExperience: 'Anys d\'Ofici',
    projectsCompleted: 'Projectes Executats',
    restoredHeritage: 'Monuments Recuperats',
    contactTitle: 'Iniciem un nou projecte',
    contactSubtitle: 'Teniu en ment una rehabilitació o un nou disseny? Parlem-ne sense cap compromís.',
    contactPhone: 'Telèfon',
    contactEmail: 'Correu Electrònic',
    contactFormName: 'Nom complet',
    contactFormEmail: 'Correu electrònic',
    contactFormType: 'Tipus de projecte',
    contactFormTypeArch: 'Projecte d\'Arquitectura Nova',
    contactFormTypeRehab: 'Rehabilitació de Masia / Edifici',
    contactFormTypeRest: 'Restauració de Patrimoni',
    contactFormTypeOther: 'Altres consultes',
    contactFormMsg: 'Expliqueu-nos el vostre projecte...',
    contactFormSend: 'Enviar Sol·licitud',
    contactFormSending: 'Enviant...',
    contactFormSuccess: 'Gràcies! Hem rebut la vostra sol·licitud correctament. Ens posarem en contacte aviat.',
    closeBtn: 'Tancar',
    locationLabel: 'Ubicació',
    yearLabel: 'Any de construcció',
    categoryLabel: 'Tipologia',
    scrollDown: 'Glissa cap avall'
  },
  es: {
    navProjects: 'Proyectos',
    navStory: 'Trayectoria',
    navPhilosophy: 'Filosofía',
    navContact: 'Contacto',
    heroSubtitle: 'Arquitectura & Construcción',
    heroTagline: 'Rehabilitando el pasado, diseñando el futuro. Espacios atemporales hechos de piedra, luz y materia.',
    viewCaseStudy: 'Ver Proyecto',
    categoryAll: 'Todos los Proyectos',
    categoryArch: 'Arquitectura',
    categoryRehab: 'Rehabilitación',
    categoryRest: 'Restauración',
    philosophyTitle: 'Compromiso con la Materia y el Patrimonio',
    philosophySubtitle: 'El diálogo constante entre el respeto histórico y la innovación arquitectónica.',
    philosophyText1: 'En Ciurana Arquitectes & Constructors concebimos cada proyecto como una pieza única de sastrería espacial. Combinamos los conocimientos técnicos de la construcción y la sensibilidad de la restauración de patrimonio para crear espacios donde el pasado dialoga armónicamente con las necesidades del presente.',
    philosophyText2: 'Nos implicamos desde el trazo del primer boceto hasta la colocación de la última piedra. Con una fuerte raíz en las comarcas tarraconenses, recuperamos masías históricas, consolidamos monumentos de alto valor patrimonial y diseñamos viviendas contemporáneas de alta eficiencia energética.',
    yearsExperience: 'Años de Oficio',
    projectsCompleted: 'Proyectos Ejecutados',
    restoredHeritage: 'Monumentos Recuperados',
    contactTitle: 'Iniciemos un nuevo proyecto',
    contactSubtitle: '¿Tiene en mente una rehabilitación o un nuevo diseño? Hablemos sin compromiso.',
    contactPhone: 'Teléfono',
    contactEmail: 'Correo Electrónico',
    contactFormName: 'Nombre completo',
    contactFormEmail: 'Correo electrónico',
    contactFormType: 'Tipo de proyecto',
    contactFormTypeArch: 'Proyecto de Arquitectura Nueva',
    contactFormTypeRehab: 'Rehabilitación de Masía / Edificio',
    contactFormTypeRest: 'Restauración de Patrimonio',
    contactFormTypeOther: 'Otras consultas',
    contactFormMsg: 'Cuéntenos su proyecto...',
    contactFormSend: 'Enviar Solicitud',
    contactFormSending: 'Enviando...',
    contactFormSuccess: '¡Gracias! Hemos recibido su solicitud correctamente. Nos pondremos en contacto pronto.',
    closeBtn: 'Cerrar',
    locationLabel: 'Ubicación',
    yearLabel: 'Año de construcción',
    categoryLabel: 'Tipología',
    scrollDown: 'Deslizar hacia abajo'
  }
};

export const PROJECTS: Project[] = [
  {
    id: 'sant-antoni-valls',
    title: 'Carrer de Sant Antoni 4',
    location: 'Valls (Alt Camp)',
    category: 'architecture',
    image: '/src/assets/images/valls_sant_antoni_1782580417388.jpg',
    year: '2024',
    description: {
      ca: 'Habitatge plurifamiliar integrat en el nucli històric de Valls. Dissenyat fusionant la pedra tradicional de l\'entorn amb línies contemporànies de ferro i vidre.',
      es: 'Vivienda plurifamiliar integrada en el núcleo histórico de Valls. Diseñado fusionando la piedra tradicional del entorno con líneas contemporáneas de hierro y vidrio.'
    },
    story: {
      ca: 'Aquest projecte neix del repte d\'integrar una edificació completament nova i d\'altes prestacions tècniques en un dels carrers més emblemàtics de Valls. El disseny utilitza elements de la tipologia de construcció local, redefinint-los amb tancaments d\'acer i grans obertures que banyen d\'interior natural l\'escala i les estances.',
      es: 'Este proyecto nace del reto de integrar una edificación completamente nueva y de altas prestaciones técnicas en una de las calles más emblemáticas de Valls. El diseño utiliza elementos de la tipología de construcción local, redefiniéndolos con cerramientos de acero y grandes aperturas que bañan de luz natural la escalera y las estancias.'
    },
    specs: [
      { label: { ca: 'Superfície', es: 'Superficie' }, value: '420 m²' },
      { label: { ca: 'Materials', es: 'Materiales' }, value: 'Pedra de calç, estructura de formigó vist, tancaments rústics corten' },
      { label: { ca: 'Eficiència', es: 'Eficiencia' }, value: 'Classe A (Aerotèrmia + Plaques Solars)' }
    ],
    keyFeatures: {
      ca: ['Estructura de formigó texturitzat en taula de fusta', 'Façana ventilada de pedra natural', 'Climatització de baix consum per terra radiant'],
      es: ['Estructura de hormigón texturizado en tabla de madera', 'Fachada ventilada de piedra natural', 'Climatización de bajo consumo por suelo radiante']
    }
  },
  {
    id: 'major-22-mora',
    title: 'Carrer Major 22',
    location: 'Móra la Nova (Ribera d\'Ebre)',
    category: 'architecture',
    image: '/src/assets/images/mora_la_nova_project_1782580430881.jpg',
    year: '2023',
    description: {
      ca: 'Habitatge unifamiliar d\'estil minimalista, amb una gran presència de formigó polit i fusta d\'iroko. Connexió fluida entre l\'interior i el pati interior.',
      es: 'Vivienda unifamiliar de estilo minimalista, con una gran presencia de hormigón pulido y madera de iroko. Conexión fluida entre el interior y el patio interior.'
    },
    story: {
      ca: 'Ubicat al cor de Móra la Nova, l\'edifici resol la tipologia de parcel·la profunda mitjançant un gran pati central que actua com a pulmó lumínic. Es tracta d\'un habitatge que celebra la sinceritat constructiva: el formigó, el ferro i la fusta s\'exposen en el seu estat més natural, evitant revestiments innecessaris.',
      es: 'Ubicado en el corazón de Móra la Nova, el edificio resuelve la tipología de parcela profunda mediante un gran patio central que actúa como pulmón lumínico. Se trata de una vivienda que celebra la sinceridad constructiva: el hormigón, el hierro y la madera se exponen en su estado más natural, evitando revestimientos innecesarios.'
    },
    specs: [
      { label: { ca: 'Superfície', es: 'Superficie' }, value: '280 m²' },
      { label: { ca: 'Fusta', es: 'Madera' }, value: 'Iroko natural tractat amb olis ecològics' },
      { label: { ca: 'Pati Central', es: 'Patio Central' }, value: 'Jardí zen amb olivera centenària i sistema de drenatge biològic' }
    ],
    keyFeatures: {
      ca: ['Obertures de vidre lliscant de terra a sostre', 'Sòls de microciment continu d\'alta resistència', 'Recuperació d\'aigües pluvials per a reg i serveis'],
      es: ['Aperturas de vidrio deslizante de suelo a techo', 'Suelos de microcemento continuo de alta resistencia', 'Recuperación de aguas pluviales para riego y servicios']
    }
  },
  {
    id: 'mas-capcir-tivissa',
    title: 'Mas de Capçir',
    location: 'Tivissa (Ribera d\'Ebre)',
    category: 'rehabilitation',
    image: '/src/assets/images/tivissa_mas_capcir_1782580447634.jpg',
    year: '2022',
    description: {
      ca: 'Rehabilitació integral d\'una masia històrica del segle XVIII. Consolidació estructural de pedra rústica integrada amb espais interiors de luxe modern.',
      es: 'Rehabilitación integral de una masía histórica del siglo XVIII. Consolidación estructural de piedra rústica integrada con espacios interiores de lujo moderno.'
    },
    story: {
      ca: 'El Mas de Capçir és un testimoni de la rica història agrícola de Tivissa. El nostre repte va consistir en la consolidació de les voltes de pedra col·lapsades i el rejuntat amb morter de calç tradicional, integrant simultàniament serveis residencials d\'alta gamma, incloent una piscina desbordant que s\'aboca visualment cap a les muntanyes.',
      es: 'El Mas de Capçir es un testimonio de la rica historia agrícola de Tivissa. Nuestro reto consistió en la consolidación de las bóvedas de piedra colapsadas y el rejuntado con mortero de cal de tradición milenaria, integrando simultáneamente servicios residenciales de alta gama, incluyendo una piscina desbordante con vistas a las montañas.'
    },
    specs: [
      { label: { ca: 'Conservació', es: 'Conservación' }, value: 'Recuperació del 92% de la pedra original' },
      { label: { ca: 'Morter', es: 'Mortero' }, value: 'Calç hidràulica natural transpirable i sorres locals' },
      { label: { ca: 'Aïllament', es: 'Aislamiento' }, value: 'Suro natural expandit del bosc de Tivissa' }
    ],
    keyFeatures: {
      ca: ['Restauració de volta catalana tradicional', 'Piscina desbordant en pedra volcànica grisa', 'Sistema d\'autoconsum solar aïllat amb bateries de liti'],
      es: ['Restauración de bóveda catalana tradicional', 'Piscina desbordante en piedra volcánica gris', 'Sistema de autoconsumo solar aislado con baterías de litio']
    }
  },
  {
    id: 'esglesia-aitona',
    title: 'Església d\'Aitona',
    location: 'Aitona (Segrià)',
    category: 'restoration',
    image: '/src/assets/images/aitona_esglesia_1782580460287.jpg',
    year: '2021',
    description: {
      ca: 'Consolidació estructural de la nau principal i restauració de la portalada barroca. Intervenció d\'alta precisió en elements ornamentals de pedra de pedrera.',
      es: 'Consolidación estructural de la nave principal y restauración de la portada barroca. Intervención de alta precisión en elementos ornamentales de piedra de cantera.'
    },
    story: {
      ca: 'L\'Església d\'Aitona presentava greus patologies estructurals a causa del pas del temps i filtracions històriques. Sota un estricte criteri arqueològic, vam consolidar els arcs torals mitjançant tirants d\'acer inoxidable imperceptibles i vam restaurar la delicada portalada exterior, netejant i sanejant la valuosa pedra arenisca.',
      es: 'La Església d\'Aitona presentaba graves patologías estructurales debido al paso del tiempo y filtraciones históricas. Bajo un estricto criterio arqueológico, consolidamos los arcos torales mediante tirantes de acero inoxidable imperceptibles y restauramos la delicada portada exterior, limpiando y saneando la valiosa piedra arenisca.'
    },
    specs: [
      { label: { ca: 'Categoria Patrimoni', es: 'Categoría Patrimonio' }, value: 'Bé Cultural d\'Interès Local (BCIL)' },
      { label: { ca: 'Tècnica de Neteja', es: 'Técnica de Limpieza' }, value: 'Micro-projecció de silicat d\'alumini i làser d\'alta precisió' },
      { label: { ca: 'Reforços', es: 'Refuerzos' }, value: 'Injeccions de resines de consolidació i tirants d\'acer quirúrgic' }
    ],
    keyFeatures: {
      ca: ['Estudi fotogramètric en 3D del monument abans d\'actuar', 'Rejuntat artesanal que preserva el color i textura medieval', 'Disseny d\'il·luminació monumental LED integrada i amagada'],
      es: ['Estudio fotogramétrico en 3D del monumento antes de actuar', 'Rejuntado artesanal que preserva el color y textura medieval', 'Diseño de iluminación monumental LED integrada y oculta']
    }
  },
  {
    id: 'major-59-mora',
    title: 'Carrer Major 59',
    location: 'Móra la Nova (Ribera d\'Ebre)',
    category: 'architecture',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200',
    year: '2022',
    description: {
      ca: 'Habitatge plurifamiliar cantoner que destaca per les seves gelosies de ceràmica artesanal, les quals gestionen la incidència tèrmica solar.',
      es: 'Vivienda plurifamiliar esquinera que destaca por sus celosías de cerámica artesanal, las cuales gestionan la incidencia térmica solar.'
    },
    story: {
      ca: 'A la cantonada del Carrer Major 59 es va proposar un bloc de tres habitatges que reinterpreta l\'ús de la ceràmica tradicional catalana. Una façana de gelosia d\'argila cuita fita amb el carrer principal, oferint privadesa a les àmplies balconades rústiques i creant un joc poètic d\'ombres i llum a les zones de dia dels apartaments.',
      es: 'En la esquina de Carrer Major 59 se propuso un bloque de tres viviendas que reinterpreta el uso de la cerámica tradicional catalana. Una fachada de celosía de arcilla cocida linda con la calle principal, ofreciendo privacidad a las amplias balconadas rústicas y creando un juego poético de sombras y luz en las zonas de día.'
    },
    specs: [
      { label: { ca: 'Edificació', es: 'Edificación' }, value: '3 plantes + àtic' },
      { label: { ca: 'Material Façana', es: 'Material Fachada' }, value: 'Gelosia d\'argila cuita feta a mà en teuleria local' },
      { label: { ca: 'Climatització', es: 'Climatización' }, value: 'Ventilació creuada natural assistida mecànicament' }
    ],
    keyFeatures: {
      ca: ['Gelosies mòbils orientables segons l\'estació de l\'any', 'Terrasses superiors amb vistes panoràmiques del riu Ebre', 'Sòls de terratzo rústic polits in situ'],
      es: ['Celosías móviles orientables según la estación del año', 'Terrazas superiores con vistas panorámicas del río Ebro', 'Suelos de terrazo rústico pulidos in situ']
    }
  },
  {
    id: 'comarques-catalanes-15',
    title: 'Comarques Catalanes 15',
    location: 'Móra d\'Ebre (Ribera d\'Ebre)',
    category: 'architecture',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1200',
    year: '2020',
    description: {
      ca: 'Edifici d\'oficines corporatives i estudi. Un volum racional de formigó arquitectònic amb un gran voladís que projecta ombra protectora.',
      es: 'Edificio de oficinas corporativas y estudio. Un volumen racional de hormigón arquitectónico con un gran voladizo que proyecta sombra protectora.'
    },
    story: {
      ca: 'L\'edifici de Comarques Catalanes 15 es planteja com una fita geomètrica en l\'avinguda d\'accés a Móra d\'Ebre. L\'estratègia volumètrica utilitza un espectacular voladís de 6 metres que no només dona caràcter institucional a l\'accés, sinó que protegeix els espais de treball de la forta radiació d\'estiu.',
      es: 'El edificio de Comarques Catalanes 15 se plantea como un hito geométrico en la avenida de acceso a Móra d\'Ebre. La estrategia volumétrica utiliza un espectacular voladizo de 6 metros que no solo otorga carácter institucional al acceso, sino que protege los espacios de trabajo de la fuerte radiación estival.'
    },
    specs: [
      { label: { ca: 'Voladís', es: 'Voladizo' }, value: '6 metres d\'acer estructural encastat' },
      { label: { ca: 'Tancaments', es: 'Cerramientos' }, value: 'Vidre doble estructural amb cambra d\'argó de baixíssima emissivitat' },
      { label: { ca: 'Il·luminació', es: 'Iluminación' }, value: 'Sistemes automatitzats de control lumínic Dali' }
    ],
    keyFeatures: {
      ca: ['Disseny lliure de pilars interns gràcies a bigues de gran llum', 'Acústica interior controlada mitjançant fusta perforada de faig', 'Façana lliure de manteniment de formigó blanc amb autoprotecció de titani'],
      es: ['Diseño libre de pilares internos gracias a vigas de gran luz', 'Acústica interior controlada mediante madera perforada de haya', 'Fachada libre de mantenimiento de hormigón blanco con autoprotección de titanio']
    }
  },
  {
    id: 'mas-pessol',
    title: 'Mas de Pessol',
    location: 'Catalunya',
    category: 'rehabilitation',
    image: 'https://images.unsplash.com/photo-1546548970-71785318a17b?auto=format&fit=crop&q=80&w=1200',
    year: '2019',
    description: {
      ca: 'Recuperació d\'un antic celler rústic de pedra i bigues de fusta per convertir-lo en residència familiar autosuficient i respectuosa amb l\'entorn.',
      es: 'Recuperación de una antigua bodega rústica de piedra y vigas de madera para convertirla en residencia familiar autosuficiente y respetuosa con el entorno.'
    },
    story: {
      ca: 'Al Mas de Pessol, el celler històric d\'una masia semi-enrunada es va convertir en el cor de l\'habitatge. Vam realitzar un delicat treball de sanejament i consolidació de les parets de tapial i pedra rústica, utilitzant només aïllaments transpirables i pintures de silicat per mantenir una atmosfera interior sana i completament ecològica.',
      es: 'En el Mas de Pessol, la bodega histórica de una masía semi-derruida se convirtió en el corazón de la vivienda. Realizamos un delicado trabajo de saneamiento y consolidación de las paredes de tapial y piedra rústica, utilizando únicamente aislamientos transpirables y pinturas de silicato para mantener una atmósfera interior sana y totalmente ecológica.'
    },
    specs: [
      { label: { ca: 'Estat Previ', es: 'Estado Previo' }, value: 'Estructures col·lapsades, sense sostre' },
      { label: { ca: 'Aïllant', es: 'Aislante' }, value: 'Fibres naturals de cànem i calç' },
      { label: { ca: 'Aigua', es: 'Agua' }, value: 'Pou propi regenerat amb filtres de sorra i raigs UV' }
    ],
    keyFeatures: {
      ca: ['Bigues de fusta laminada d\'avet amb certificat d\'explotació sostenible', 'Xemeneia central de ferro forjat dissenyada exclusivament per al saló', 'Paviment de fang cuit artesanal extret de terres argiloses de l\'Ebre'],
      es: ['Vigas de madera laminada de abeto con certificado de explotación sostenible', 'Chimenea central de hierro forjado diseñada exclusivamente para el salón', 'Pavimento de barro cocido artesanal extraído de tierras arcillosas del Ebro']
    }
  },
  {
    id: 'torre-griminella',
    title: 'Torre de la Griminella',
    location: 'Martorell (Baix Llobregat)',
    category: 'restoration',
    image: 'https://images.unsplash.com/photo-1508849789987-4e5333c12b78?auto=format&fit=crop&q=80&w=1200',
    year: '2018',
    description: {
      ca: 'Restauració i consolidació de les restes medievals d\'una torre de guaita. Estabilització de carreus rústics i instal·lació d\'una passarel·la mirador d\'acer.',
      es: 'Restauración y consolidación de los restos medievales de una torre de vigía. Estabilización de sillares rústicos e instalación de una pasarela mirador de acero.'
    },
    story: {
      ca: 'A Martorell, la històrica Torre de la Griminella requeria d\'una consolidació d\'urgència pels seus esquerdes i pèrdua de material estructural. El nostre equip va realitzar el cosit d\'esquerdes estructurals amb barres de titani amagades, el sanejat general del perímetre i vam construir una delicada passarel·la interior d\'acer que permet ascendir com a mirador sense tocar l\'estructura de pedra medieval.',
      es: 'En Martorell, la histórica Torre de la Griminella requería de una consolidación de urgencia por sus grietas y pérdida de material estructural. Nuestro equipo realizó el cosido de grietas estructurales con barras de titanio ocultas, el saneado general del perímetro y construyó una delicada pasarela interior de acero que permite ascender como mirador sin tocar la estructura de piedra medieval.'
    },
    specs: [
      { label: { ca: 'Època històrica', es: 'Época histórica' }, value: 'Segle XI, d\'origen militar defensiu' },
      { label: { ca: 'Cosit de Murs', es: 'Cosido de Muros' }, value: 'Cosinys de titani pretensats inyectats amb beurada de calç silícia' },
      { label: { ca: 'Passarel·la', es: 'Pasarela' }, value: 'Acer autopatinable resistent a la intempèrie de Martorell' }
    ],
    keyFeatures: {
      ca: ['Aixecament mitjançant escàner làser 3D d\'extrema precisió', 'Passarel·la de guaita amb terra de reixat per garantir la transparència visual', 'Il·luminació de balisa lineal per indicar la sendera d\'accés històrica'],
      es: ['Levantamiento mediante escáner láser 3D de extrema precisión', 'Pasarela de vigía con suelo de rejilla para garantizar la transparencia visual', 'Iluminación de baliza lineal para indicar el sendero de acceso histórico']
    }
  }
];
