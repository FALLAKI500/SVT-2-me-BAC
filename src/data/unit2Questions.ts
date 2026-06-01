import { SVTQuestion } from '../types';

export const unit2Groups: SVTQuestion[][] = [
  // Group 1: Structure et réplication de l'ADN
  [
    {
      id: 'u2-g1-q1',
      type: 'qcm',
      title: 'Composition d\'un nucléotide d\'ADN',
      instruction: 'Quels sont les trois constituants indispensables d\'un nucléotide d\'ADN ?',
      explanation: 'Un nucléotide d\'ADN est obligatoirement composé d\'un acide phosphorique, d\'un sucre à 5 carbones (le désoxyribose) et d\'une base azotée (Adenine, Thymine, Cytosine ou Guanine).',
      explanationAr: 'يتكون نيكليوتيد ADN من حمض فوسفوري، ومن سكر خماسي الكربون (ريبوز ناقص أكسجين)، وقاعدة أزوتية (أدينين أو ثيمين أو سيتوزين أو غوانين).',
      options: [
        'Un acide phosphorique, du ribose et de l\'Uracile.',
        'Un acide phosphorique, du désoxyribose et une base azotée parmi (A, T, C, G).',
        'Un acide glycolique, du fructose et de l\'adénine.',
        'Deux acides phosphoriques et une adénosine.'
      ],
      correctIndices: [1],
      allowMultiple: false
    },
    {
      id: 'u2-g1-q2',
      type: 'qcm',
      title: 'Liaisons hydrogène entre bases',
      instruction: 'Identifiez le nombre exact de liaisons hydrogène qui unissent les bases complémentaires de l\'ADN.',
      explanation: 'Dans la structure en double hélice, l\'Adénine (A) se lie toujours à la Thymine (T) par deux liaisons hydrogène, tandis que la Guanine (G) s\'associe à la Cytosine (C) par trois liaisons hydrogène.',
      explanationAr: 'ترتبط القاعدة أَدينين A بالثيمين T عبر رابطتي هيدروجين، وترتبط الغوانين G بالسيتوزين C بثلاث روابط هيدروجينية.',
      options: [
        'A et T par 3 liaisons; G et C par 2 liaisons.',
        'A et T par 2 liaisons; G et C par 3 liaisons.',
        'A et T par 1 liaison; G et C par 4 liaisons.',
        'A et G par 2 liaisons; T et C par 3 liaisons.'
      ],
      correctIndices: [1],
      allowMultiple: false
    },
    {
      id: 'u2-g1-q3',
      type: 'qcm',
      title: 'L\'expérience de Meselson et Stahl',
      instruction: 'Qu\'a démontré scientifiquement la célèbre expérience de Meselson et Stahl en 1858 ?',
      explanation: 'En utilisant des isotopes de l\'azote (N14 et N15), Meselson et Stahl ont prouvé que la réplication de l\'ADN s\'effectuait selon un modèle semi-conservatif.',
      explanationAr: 'باستعمال نظائر الآزوت N14 و N15، أثبتت تجربة ميزلسون وستال أن مضاعفة ADN تتم بطريقة نصف محافظة.',
      options: [
        'Que l\'ADN possède une forme hélicoïdale monocaténaire.',
        'Que la réplication de l\'ADN se fait selon le mode semi-conservatif.',
        'Que les protéines contiennent l\'information génétique.',
        'Que la mitose conserve le cytoplasme.'
      ],
      correctIndices: [1],
      allowMultiple: false
    },
    {
      id: 'u2-g1-q4',
      type: 'dropdown',
      title: 'Processus enzymatique de réplication',
      instruction: 'Sélectionnez les enzymes majeures requises pour la réplication.',
      explanation: 'L\'hélicase ouvre la double hélice, et l\'ADN Polymérase ajoute de nouveaux nucléotides complémentaires.',
      explanationAr: 'يقوم أنزيم Helicase بفتح لولب ADN المضاعف، بينما يعمل أنزيم ADN Polymérase على دمج نيكليوتيدات جديدة متكاملة.',
      textWithPlaceholders: 'Au départ, l\'enzyme [drop-0] sépare les deux brins d\'ADN en rompant les liaisons H. Ensuite, l\'[drop-1] synthétise les brins néo-formés complémentaires dans le sens de [drop-2].',
      dropdowns: {
        'drop-0': {
          id: 'drop-0',
          options: ['hélicase', 'ARN polymérase', 'ligase'],
          correctValue: 'hélicase'
        },
        'drop-1': {
          id: 'drop-1',
          options: ['ADN polymérase', 'transcriptase inverse', 'ribosome'],
          correctValue: 'ADN polymérase'
        },
        'drop-2': {
          id: 'drop-2',
          options: ['3\' vers 5\'', '5\' vers 3\'', 'C-terminal vers N-terminal'],
          correctValue: '5\' vers 3\''
        }
      }
    },
    {
      id: 'u2-g1-q5',
      type: 'matching',
      title: 'Acteurs de la fourche de réplication',
      instruction: 'Associez chaque terme de la réplication de l\'ADN à sa définition ou particularité moléculaire.',
      explanation: 'Le brin avancé est continu, le brin retardé s\'assemble par fragments d\'Okazaki.',
      explanationAr: 'يتم تركيب السلسلة الرائدة بشكل مستمر، بينما يتم تركيب السلسلة المتأخرة على شكل قطع أوكازاكي.',
      leftItems: [
        { id: 'l1', text: 'Fragments d\'Okazaki' },
        { id: 'l2', text: 'L\'œil de réplication' },
        { id: 'l3', text: 'Brin avancé (Direct)' },
        { id: 'l4', text: 'ADN Ligase' }
      ],
      rightItems: [
        { id: 'r1', text: 'Synthèse continue de l\'ADN s\'effectuant dans la même direction que la progression de la fourche.' },
        { id: 'r2', text: 'Petits fragments d\'ADN synthétisés de façon discontinue sur le brin retardé.' },
        { id: 'r3', text: 'Structure formée par l\'ouverture locale des deux brins d\'ADN facilitant les polymérisations.' },
        { id: 'r4', text: 'Enzyme qui assure la soudure des liaisons covalentes entre les fragments d\'ADN discontinus.' }
      ],
      correctPairs: {
        'l1': 'r2',
        'l2': 'r3',
        'l3': 'r1',
        'l4': 'r4'
      }
    },
    {
      id: 'u2-g1-q6',
      type: 'qcm',
      title: 'Antiparallélisme de l\'ADN',
      instruction: 'Qu\'indique la mention "Brins antiparallèles" de la molécule d\'ADN ?',
      explanation: 'L\'ADN possède deux brins orientés en sens opposés : l\'un va de l\'extrémité 5\' vers 3\', et son partenaire complémentaire va de 3\' vers 5\'.',
      explanationAr: 'يتكون جزيء ADN من خيطين متعاكسي التوازي: خيط يتجه من النهاية 5\' نحو 3\'، ويتجه الخيط المقابل له والمتكامل معه من 3\' نحو 5\'.',
      options: [
        'Les brins croisent leur trajectoire hélicoïdale périodiquement.',
        'L\'orientation d\'un brin est 5\' vers 3\' et son brin complémentaire est orienté 3\' vers 5\'.',
        'Les acides aminés sont reliés par leur amine.',
        'Un brin est formé d\'ARN et l\'autre d\'ADN.'
      ],
      correctIndices: [1],
      allowMultiple: false
    },
    {
      id: 'u2-g1-q7',
      type: 'qcm',
      title: 'Règle de Chargaff',
      instruction: 'Quelle relation statistique parmi les suivantes vérifie la règle de Chargaff pour l\'ADN double brin ?',
      explanation: 'Du fait de la complémentarité stricte entre les bases, le rapport (A+G) / (T+C) est toujours égal à 1 (Le nombre de purines égale le nombre de pyrimidines).',
      explanationAr: 'بسبب التكامل الصارم بين القواعد، فإن نسبة (A+G)/(T+C) تساوي دائماً 1 (عدد القواعد البيورينية يساوي عدد البيريميدينية).',
      options: [
        '(A+T)/(C+G) = 1',
        '(A+G)/(T+C) = 1',
        'A/G = T/C',
        'A+C = T+G = 1'
      ],
      correctIndices: [1],
      allowMultiple: false
    },
    {
      id: 'u2-g1-q8',
      type: 'qcm',
      title: 'Importance biologique de la réplication',
      instruction: 'Quel est le rôle fondamental de la réplication semi-conservative dans l\'hérédité ?',
      explanation: 'La réplication copie fidèlement l\'ADN, garantissant que chaque cellule fille reçoit une copie rigoureusement identique du génome d\'origine lors de la mitose.',
      explanationAr: 'تعمل مضاعفة ADN على نسخ المعلومات الوراثية بدقة، مما يضمن تلقي كل خلية بينت جزيء ADN مطابق للخلية الأم خلال الانقسام غير المباشر.',
      options: [
        'Varier l\'information génétique à chaque division.',
        'Transmettre uniquement l\'ARN aux descendants.',
        'Conserver l\'information génétique à l\'identique de génération cellulaire en génération.',
        'Éjecter l\'ADN défectueux.'
      ],
      correctIndices: [2],
      allowMultiple: false
    },
    {
      id: 'u2-g1-q9',
      type: 'table',
      title: 'Complémentarité des bases',
      instruction: 'Cochez la base qui s\'apparie de façon exclusive à chaque base proposée.',
      explanation: 'L\'appariement des bases azotées de l\'ADN se fait entre A et T, ainsi qu\'entre C et G.',
      explanationAr: 'يتم اقتران القواعد الأزوتية في ADN بين الأدينين A والثيمين T، وكذلك بين السيتوزين C والغوانين G.',
      columns: [
        { id: 'baseT', label: 'Thymine (T)' },
        { id: 'baseG', label: 'Guanine (G)' }
      ],
      rows: [
        {
          id: 'row-1',
          statement: 'Appariement avec l\'Adénine (A).',
          expectedChoices: { 'baseT': true, 'baseG': false }
        },
        {
          id: 'row-2',
          statement: 'Appariement avec la Cytosine (C).',
          expectedChoices: { 'baseT': false, 'baseG': true }
        }
      ]
    },
    {
      id: 'u2-g1-q10',
      type: 'qcm',
      title: 'Nucléoplasme et réactifs libres',
      instruction: 'Sous quelle forme sont incorporés les nouveaux maillons de l\'ADN par la polymérase ?',
      explanation: 'Ce sont des désoxyribonucléosides triphosphates (dATP, dTTP, dCTP, dGTP) qui fournissent l\'énergie nécessaire à leur propre liaison covalente.',
      explanationAr: 'يتم دمج النيكليوتيدات الجديدة على شكل نيكليوزيدات ثلاثية الفوسفات (dATP، dTTP...) والتي توفر طاقة الربط التساهمي.',
      options: [
        'Des acides aminés libres.',
        'Des nucléosides monophosphates.',
        'Des désoxyribonucléosides triphosphates libres.',
        'La phosphocréatine.'
      ],
      correctIndices: [2],
      allowMultiple: false
    }
  ],

  // Group 2: Cycle cellulaire et Mitose
  [
    {
      id: 'u2-g2-q1',
      type: 'qcm',
      title: 'Les étapes de l\'Interphase',
      instruction: 'Dans quel ordre chronologique exact s\'enchaînent les trois phases de l\'Interphase ?',
      explanation: 'L\'interphase se compose de l\'intervalle initial de croissance G1, de la phase de réplication de l\'ADN S, puis de la phase programmée de préparation cellulaire G2.',
      explanationAr: 'تتكون الطور البيني من مرحلة النمو الأولى G1، ومرحلة مضاعفة حمض ADN S، ومرحلة النمو الثانية والتهيؤ للانقسام G2.',
      options: [
        'S → G1 → G2',
        'G1 → G2 → S',
        'G1 → S → G2',
        'Prophase → Métaphase → Anaphase'
      ],
      correctIndices: [2],
      allowMultiple: false
    },
    {
      id: 'u2-g2-q2',
      type: 'qcm',
      title: 'La condensation maximale des chromosomes',
      instruction: 'Au cours de quelle phase de la mitose les chromosomes atteignent-ils leur condensation maximale ?',
      explanation: 'La condensation maximale de la chromatine en structures chromosomiques de premier ordre survient durant la métaphase, formant la plaque équatoriale.',
      explanationAr: 'يصل تكثف الصبغيات إلى ذروته خلال الطور الاستوائي للإنقسام غير المباشر، حيث تتشكل الصفيحة الاستوائية.',
      options: [
        'La prophase',
        'La métaphase',
        'L\'anaphase',
        'La télophase'
      ],
      correctIndices: [1],
      allowMultiple: false
    },
    {
      id: 'u2-g2-q3',
      type: 'qcm',
      title: 'Séparation du matériel génétique (Anaphase)',
      instruction: 'Quel mécanisme cytosquelettique clé survient spécifiquement à la phase d\'Anaphase ?',
      explanation: 'L\'anaphase se caractérise par la rupture (clivage) de chaque centromère, séparant les deux chromatides sœurs qui migrent individuellement vers les pôles opposés de la cellule.',
      explanationAr: 'يتميز الطور الصعودي بانقسام الجزء المركزي لكل صبغي، مما يؤدي إلى انفصال الصبيغيات الشقيقة وهجرتها الفردية نحو قطبي الخلية.',
      options: [
        'Le doublement de la quantité d\'ADN de la cellule.',
        'Le clivage des centromères et ségrégation polaire des chromatides sœurs.',
        'La décondensation totale des filaments d\'histones.',
        'La synthèse de l\'enveloppe nucléaire.'
      ],
      correctIndices: [1],
      allowMultiple: false
    },
    {
      id: 'u2-g2-q4',
      type: 'qcm',
      title: 'Cytocinèse : Animale vs Végétale',
      instruction: 'Comment s\'enchaîne la cytocinèse (séparation cytoplasmique) d\'une cellule végétale par rapport au règne animal ?',
      explanation: 'Dans la cellule végétale, à cause de la paroi squelettique rigide, la cytocinèse s\'effectue par élaboration d\'un nouveau disque cellulosique (le phragmoplaste) centripète, tandis qu\'elle s\'effectue par étranglement équatorial centripète chez les animaux.',
      explanationAr: 'في الخلايا النباتية، بسبب جدار السليلوز الصلب، يتم انقسام السيتوبلازم عن طريق بناء جدار خلوي جديد من المركز نحو المحيط، بينما يتم عبر اختناق استوائي في الخلايا الحيوانية.',
      options: [
        'Par simple étranglement du cytosquelette d\'actine.',
        'Par formation d\'une nouvelle membrane pectocellulosique interne centripète de fusion.',
        'Par division nucléaire externe.',
        'Par fusion directe de deux chloroplastes.'
      ],
      correctIndices: [1],
      allowMultiple: false
    },
    {
      id: 'u2-g2-q5',
      type: 'dropdown',
      title: 'Quantification de l\'ADN au fil du cycle',
      instruction: 'Complétez l\'analyse théorique de la quantité d\'ADN (notée Q).',
      explanation: 'Le taux d\'ADN est égal à Q en phase G1, passe à 2Q durant la phase de copie S, demeure à 2Q en G2 puis retombe de 2Q à Q en fin de télophase mitotique.',
      explanationAr: 'تساوي كمية ADN القيمة Q في الطور G1، وتتضاعف لتصل إلى 2Q خلال المرحلة S، وتستقر في 2Q في G2، ثم تنخفض مجدداً من 2Q إلى Q في نهاية الإنقسام.',
      textWithPlaceholders: 'En phase G1 du cycle, la cellule possède une quantité d\'ADN égale à [drop-0]. À l\'issue de la phase S, cette valeur s\'élève à [drop-1] par doublement. La cellule conserve ce taux stable en phase G2 avant de la diviser de moitié en [drop-2] mitotique.',
      dropdowns: {
        'drop-0': {
          id: 'drop-0',
          options: ['Q', '2Q', '4Q'],
          correctValue: 'Q'
        },
        'drop-1': {
          id: 'drop-1',
          options: ['Q', '2Q', '4Q'],
          correctValue: '2Q'
        },
        'drop-2': {
          id: 'drop-2',
          options: ['anaphase', 'télophase', 'métaphase'],
          correctValue: 'télophase'
        }
      }
    },
    {
      id: 'u2-g2-q6',
      type: 'qcm',
      title: 'Rôle fondamental du fuseau mitotique',
      instruction: 'Quel élément cellulaire assemble et oriente les fuseaux mitotiques de division ?',
      explanation: 'Le fuseau mitotique achromatique, constitué de microtubules polaires et kinétochoriens, est dirigé par les centrosomes (astère chez les animaux, calotte polaire chez les végétaux).',
      explanationAr: 'يتكون مغزل الانقسام اللاشخصي من نبيبات دقيقة، وتوجهه نجيمات قطبية لدى الخلايا الحيوانية وقلنسوات قطبية لدى النباتات.',
      options: [
        'L\'enveloppe nucléaire.',
        'La membrane cytoplasmique externe.',
        'Les asters (centrosomes) ou calottes polaires organiques.',
        'Les ribosomes libres.'
      ],
      correctIndices: [2],
      allowMultiple: false
    },
    {
      id: 'u2-g2-q7',
      type: 'matching',
      title: 'Événements moléculaires des 4 phases',
      instruction: 'Faites correspondre chaque phase de la mitose à l\'événement physique majeur associé.',
      explanation: 'Prophase (condensation), Métaphase (plaque), Anaphase (séparation), Télophase (re-formation du noyau).',
      explanationAr: 'التمهيدية (تكثف)، الاستوائية (صفيحة)، الانفصالية (هجرة الصبيغيات)، النهائية (إعادة تشكل النواة).',
      leftItems: [
        { id: 'l1', text: 'Prophase' },
        { id: 'l2', text: 'Métaphase' },
        { id: 'l3', text: 'Anaphase' },
        { id: 'l4', text: 'Télophase' }
      ],
      rightItems: [
        { id: 'r1', text: 'Séparation physique des chromatides sœurs et double migration polaire.' },
        { id: 'r2', text: 'Condensation forte de la chromatine, disparition progressive de la membrane du noyau.' },
        { id: 'r3', text: 'Décondensation des chromosomes, assemblage de deux noyaux identiques autonomes.' },
        { id: 'r4', text: 'Alignement parfait des centromères des chromosomes sur le plan de la plaque équatoriale.' }
      ],
      correctPairs: {
        'l1': 'r2',
        'l2': 'r4',
        'l3': 'r1',
        'l4': 'r3'
      }
    },
    {
      id: 'u2-g2-q8',
      type: 'qcm',
      title: 'Les nucléosomes',
      instruction: 'De quoi sont formés les nucléosomes constituant le premier niveau d\'actionnement de la condensation ?',
      explanation: 'Un nucléosome est constitué d\'un complexe de protéines basiques appelées histones, autour desquelles est enroulé le filament d\'ADN double brin.',
      explanationAr: 'يتكون النيكليوزوم من مركب من البروتينات القاعدية تسمى الهيستونات، يلتف حولها خيط ADN.',
      options: [
        'De ribosomes et d\'ARNm.',
        'D\'un enroulement d\'ADN double brin autour de protéines basiques appelées histones.',
        'De l\'association d\'acides aminés libres et d\'ions calcium.',
        'De microtubules d\'actine uniquement.'
      ],
      correctIndices: [1],
      allowMultiple: false
    },
    {
      id: 'u2-g2-q9',
      type: 'table',
      title: 'Variations structurales : Mitose vs Interphase',
      instruction: 'Attribuez chaque configuration nucléaire à sa phase dominante.',
      explanation: 'Durant la mitose, la cellule possède des chromosomes distincts condensés et pas d\'enveloppe. Pendant l\'interphase, elle présente un noyau structuré et une chromatine décondensée.',
      explanationAr: 'خلال الانقسام، تتوفر الخلية على صبغيات متكثفة وواضحة مع غياب الغشاء النووي. أما خلال الطور البيني فتتميز بنواة واضحة وصبغين غير متكثف.',
      columns: [
        { id: 'colMit', label: 'Configuration Mitotique' },
        { id: 'colInt', label: 'Configuration Interphasique' }
      ],
      rows: [
        {
          id: 'row-1',
          statement: 'Matériel génétique se présentant sous forme de chromatine diffuse et floue.',
          expectedChoices: { 'colMit': false, 'colInt': true }
        },
        {
          id: 'row-2',
          statement: 'Synthèse active d\'ADN nucléaire (Réplication de l\'information).',
          expectedChoices: { 'colMit': false, 'colInt': true }
        },
        {
          id: 'row-3',
          statement: 'Individualisation de chromosomes distincts aux bras courts de condensation.',
          expectedChoices: { 'colMit': true, 'colInt': false }
        }
      ]
    },
    {
      id: 'u2-g2-q10',
      type: 'qcm',
      title: 'Bilan ploïdie de la mitose',
      instruction: 'Quel est le statut génomique des deux cellules formées par mitose équationnelle d\'une cellule diploïde (2n) ?',
      explanation: 'La mitose est une division hautement conservatrice : elle donne naissance à 2 cellules filles diploïdes (2n) identiques à la cellule mère diploïde de départ.',
      explanationAr: 'الانقسام غير المباشر انقسام حافظ لعدد الصبغيات: ينتج خليتين بنتين ثنائيتي الصيغة الصبغية (2n) مماثلتين تماماً للخلية الأم ثنائية الصيغة الصبغية (2n).',
      options: [
        'Deux cellules filles haploïdes (n).',
        'Une cellule diploïde (2n) et une haploïde (n).',
        'Deux cellules filles identiques diploïdes (2n).',
        'Quatre cellules filles haploïdes (n).'
      ],
      correctIndices: [2],
      allowMultiple: false
    }
  ],

  // Group 3: Transcription de l'ADN en ARNm
  [
    {
      id: 'u2-g3-q1',
      type: 'qcm',
      title: 'L\'enzyme de la transcription',
      instruction: 'Quelle enzyme synthétise l\'ARNm à partir de la matrice d\'ADN ?',
      explanation: 'L\'ARN Polymérase est l\'unique enzyme responsable de la transcription génomique, ouvrant l\'ADN et incorporant des ribonucléotides libres.',
      explanationAr: 'أنزيم ARN Polymérase هو الأنزيم المسؤول عن تركيب جزيء ARNm انطلاقاً من المنسوخ من ADN.',
      options: [
        'L\'ADN polymérase I',
        'L\'Hélicase cytoplasmique',
        'L\'ARN polymérase',
        'La Peptidyl transférase'
      ],
      correctIndices: [2],
      allowMultiple: false
    },
    {
      id: 'u2-g3-q2',
      type: 'qcm',
      title: 'La complémentarité ARN/ADN',
      instruction: 'Quelle base azotée remplace la Thymine lors de la synthèse de l\'ARN ?',
      explanation: 'Dans l\'ARN, la Thymine (T) est absente. Elle est remplacée par l\'Uracile (U), qui s\'apparie de façon exclusive à l\'Adénine (A) du brin complémentaire.',
      explanationAr: 'في جزيء ARN، تغيب القاعدة ثيمين T ويحل محلها اليوراسيل U، والذي يقترن بالأدينين A.',
      options: [
        'L\'Adénine',
        'La Guanine',
        'L\'Uracile',
        'La Cytosine'
      ],
      correctIndices: [2],
      allowMultiple: false
    },
    {
      id: 'u2-g3-q3',
      type: 'qcm',
      title: 'Sélection du brin transcrit',
      instruction: 'À partir de quel brin de l\'ADN est synthétisée la molécule d\'ARNm ?',
      explanation: 'L\'ARNm est copié à partir du brin transcrit (ou brin matrice) qui s\'oriente en direction 3\' vers 5\', permettant une synthèse de l\'ARNm dans le sens classique 5\' vers 3\'.',
      explanationAr: 'يتم نسخ جزيء ARNm انطلاقاً من السلسلة المنسوخة (أو الماتريس) الموجهة من 3\' نحو 5\'.',
      options: [
        'À partir du brin non transcrit de façon aléatoire.',
        'À partir du brin transcrit orienté 3\' vers 5\'.',
        'À partir des deux brins d\'ADN simultanément.',
        'À partir des microsites ribosomiques.'
      ],
      correctIndices: [1],
      allowMultiple: false
    },
    {
      id: 'u2-g3-q4',
      type: 'qcm',
      title: 'Le sens de la transcription',
      instruction: 'Dans quel sens s\'effectue l\'allongement moléculaire du brin d\'ARNm ?',
      explanation: 'L\'ARN polymérase ajoute des ribonucléosides uniquement à l\'extrémité 3\' du polymère en formation, assurant un allongement dans le sens strict 5\' vers 3\'.',
      explanationAr: 'تضيف ARN polymérase النيكليوتيدات في النهاية 3\' للبوليمير قيد التركيب، مما يضمن الاستطالة في الاتجاه 5\' نحو 3\'.',
      options: [
        '3\' vers 5\' uniquement',
        '5\' vers 3\' uniquement',
        'De manière bidirectionnelle',
        'Du pôle N-terminal vers C-terminal'
      ],
      correctIndices: [1],
      allowMultiple: false
    },
    {
      id: 'u2-g3-q5',
      type: 'dropdown',
      title: 'Maturation de l\'ARNm (Épissage)',
      instruction: 'Complétez l\'analyse de la transition pré-ARNm vers ARNm mature chez les eucaryotes.',
      explanation: 'Le pré-ARNm transcrit contient des exons (géniques codants) et des introns (intermédiaires non-codants). L\'épissage élimine les introns et recolle les exons.',
      explanationAr: 'يحتوي pré-ARNm على قطع مجهزة للترجمة تسمى exons وقطع غير مجهزة تسمى introns. وتزيل عملية Epissage (الدلالة) القطع introns وتربط exons فيما بينها.',
      textWithPlaceholders: 'Chez les eucaryotes, la transcription produit d\'abord un pré-ARNm. L\'épissage élimine sélectivement les segments non-codants appelés [drop-0] et raccorde les segments codants appelés [drop-1] pour former l\'[drop-2] mûr.',
      dropdowns: {
        'drop-0': {
          id: 'drop-0',
          options: ['introns', 'exons', 'plasmides'],
          correctValue: 'introns'
        },
        'drop-1': {
          id: 'drop-1',
          options: ['exons', 'introns', 'enzymes'],
          correctValue: 'exons'
        },
        'drop-2': {
          id: 'drop-2',
          options: ['ARNm mature', 'pré-ARNc', 'histone mûr'],
          correctValue: 'ARNm mature'
        }
      }
    },
    {
      id: 'u2-g3-q6',
      type: 'qcm',
      title: 'Lieu de la Transcription chez les eucaryotes',
      instruction: 'Dans quel secteur spatial de la cellule eucaryote se produit l\'épissage et la transcription ?',
      explanation: 'La transcription et la maturation (l\'épissage) se font exclusivement à l\'intérieur du noyau cellulaire chez les eucaryotes.',
      explanationAr: 'تتم عمليتي النسخ والEpissage داخل النواة فقط لدى الخلايا حقيقيات النوى.',
      options: [
        'Dans le cytoplasme uniquement.',
        'Dans l\'appareil de Golgi.',
        'À l\'intérieur du noyau cellulaire.',
        'Dans l\'espace intermembranaire.'
      ],
      correctIndices: [2],
      allowMultiple: false
    },
    {
      id: 'u2-g3-q7',
      type: 'qcm',
      title: 'Composition chimique de l\'ARN',
      instruction: 'En quoi le sucre de l\'ARN se distingue-t-il chimiquement du sucre de l\'ADN ?',
      explanation: 'L\'ARN contient du ribose (possédant un groupe hydroxyle -OH sur le carbone 2\'), tandis que l\'ADN contient du désoxyribose (un hydrogène -H remplaçant le groupe -OH en position 2\').',
      explanationAr: 'يحتوي سكر الريبوز في ARN على مجموعة هيدروكسيل -OH على الكربون 2\'، بينما يتوفر ريبوز ناقص أكسجين في ADN على هيدروجين فقط.',
      options: [
        'L\'ARN possède du glucose plus lourd.',
        'L\'ARN contient du ribose non désoxygéné (avec un groupe -OH en position 2\').',
        'L\'ARN possède du fructose à la place.',
        'Il n\'y a aucune différence chimique de sucre.'
      ],
      correctIndices: [1],
      allowMultiple: false
    },
    {
      id: 'u2-g3-q8',
      type: 'matching',
      title: 'Phases de la transcription',
      instruction: 'Reliez chaque phase de la synthèse d\'ARN à son action enzymatique correspondante.',
      explanation: 'La transcription comprend l\'initiation par liaison promoteur, l\'élongation du brin, et la terminaison au terminateur.',
      explanationAr: 'تتكون عملية النسخ من البداية عبر الارتباط بالمحفز، والاستطالة، والنهاية عند الوصول لإشارة النهاية.',
      leftItems: [
        { id: 'l1', text: 'Promoteur (Site)' },
        { id: 'l2', text: 'Élongation' },
        { id: 'l3', text: 'Terminaison' },
        { id: 'l4', text: 'Épissage alternatif' }
      ],
      rightItems: [
        { id: 'r1', text: 'L\'ARN polymérase poursuit la synthèse d\'ARNm le long de la matrice de l\'ADN.' },
        { id: 'r2', text: 'L\'enzyme rencontre un signal de fin de gène, libérant le pré-ARNm et se détachant.' },
        { id: 'r3', text: 'Séquence spécifique sur l\'ADN reconnue par l\'ARN polymérase pour débuter le travail.' },
        { id: 'r4', text: 'Mécanisme permettant de fabriquer des protéines différentes à partir d\'un seul pré-ARNm.' }
      ],
      correctPairs: {
        'l1': 'r3',
        'l2': 'r1',
        'l3': 'r2',
        'l4': 'r4'
      }
    },
    {
      id: 'u2-g3-q9',
      type: 'table',
      title: 'Caractéristiques comparées : ADN vs ARNm',
      instruction: 'Vérifiez la véracité des affirmations de structure.',
      explanation: 'L\'ADN est une structure bicaténaire double brin contenant la thymine. L\'ARNm est monocaténaire simple brin et contient de l\'uracile.',
      explanationAr: 'يتكون ADN من لولب مضاعف ويحتوي على الثيمين، بينما يتكون ARNm من خيط مفرد ويحتوي على اليوراسيل.',
      columns: [
        { id: 'dnaS', label: 'Spécifique à l\'ADN' },
        { id: 'rnaS', label: 'Spécifique à l\'ARNm' }
      ],
      rows: [
        {
          id: 'row-1',
          statement: 'Possède une masse moléculaire élevée sous structure bicaténaire en double hélice.',
          expectedChoices: { 'dnaS': true, 'rnaS': false }
        },
        {
          id: 'row-2',
          statement: 'Peut migrer hors du noyau à travers les pores nucléaires vers le cytosol.',
          expectedChoices: { 'dnaS': false, 'rnaS': true }
        },
        {
          id: 'row-3',
          statement: 'Se compose d\'acides aminés hydroxylés.',
          expectedChoices: { 'dnaS': false, 'rnaS': false }
        }
      ]
    },
    {
      id: 'u2-g3-q10',
      type: 'qcm',
      title: 'Expression différentielle du génome',
      instruction: 'Pourquoi deux cellules du même organisme (ex: neurone et cellule musculaire) fabriquent-elles des ARNm différents ?',
      explanation: 'Toutes les cellules d\'un individu possèdent les mêmes gènes, mais l\'expression génique est contrôlée : seuls certains gènes sont transcrits (activés) dans chaque type cellulaire.',
      explanationAr: 'تتوفر جميع خلايا كائن حي على نفس المورثات، لكن التعبير الجيني متحكم فيه: يتم نسخ مورثات معينة فقط في كل صنف خلوي.',
      options: [
        'Car elles ne contiennent pas le même ADN d\'origine.',
        'Car l\'expression des gènes est régulée sélectivement (transcription différentielle).',
        'Car les neurones détruisent l\'ADN non utilisé.',
        'Car les muscles n\'ont pas besoin de ribosomes.'
      ],
      correctIndices: [1],
      allowMultiple: false
    }
  ],

  // Group 4: Traduction de l'ARNm en Protéine
  [
    {
      id: 'u2-g4-q1',
      type: 'qcm',
      title: 'L\'organite de la traduction',
      instruction: 'Quel organite cytoplasmique effectue la synthèse de la chaîne polypeptidique à partir d\'ARNm ?',
      explanation: 'Les ribosomes sont les usines macromoléculaires chargées de la traduction cytoplasmique de l\'ARNm en chaînes ordonnées d\'acides aminés.',
      explanationAr: 'الريبوزومات هي العضيات المسؤولة عن ترجمة جezيئات ARNm إلى أحماض أمينية في السيتوبلازم.',
      options: [
        'La mitochondrie',
        'Le lysosome',
        'Le ribosome',
        'Le centriole'
      ],
      correctIndices: [2],
      allowMultiple: false
    },
    {
      id: 'u2-g4-q2',
      type: 'qcm',
      title: 'Le codon d\'initiation',
      instruction: 'Quel est le premier codon traduit au démarrage de presque toutes les protéines et son acide aminé correspondant ?',
      explanation: 'Le codon d\'initiation est toujours AUG sur l\'ARNm, codant pour l\'incorporation initiale de la Méthionine.',
      explanationAr: 'وحدة البدء هي دائماً الثلاثية AUG على جزيء ARNm، والتي ترمز لدمج حمض الميثيونين كأول حمض أميني.',
      options: [
        'Codon UAA codant pour de la leucine',
        'Codon AUC codant pour l\'alanine',
        'Codon AUG codant pour la Méthionine',
        'Codon UAG codant pour la valine'
      ],
      correctIndices: [2],
      allowMultiple: false
    },
    {
      id: 'u2-g4-q3',
      type: 'qcm',
      title: 'Les codons Stop (Sans signification)',
      instruction: 'Cochez la liste exacte des trois codons d\'arrêt (codons stop) provoquant la fin de la traduction.',
      explanation: 'Il existe trois codons d\'arrêt (synonyme de fin de traduction) ne codant pour aucun acide aminé : UAA, UAG et UGA.',
      explanationAr: 'هناك ثلاث وحدات رمزية للتوقف (codons stop) لا ترمز لأي حمض أميني وهي: UAA و UAG و UGA.',
      options: [
        'AUG, GUA, CGU',
        'UAA, UAG, UGA',
        'AAA, CAU, GCA',
        'UUA, CUA, GGA'
      ],
      correctIndices: [1],
      allowMultiple: false
    },
    {
      id: 'u2-g4-q4',
      type: 'dropdown',
      title: 'Les étapes de la Traduction',
      instruction: 'Complétez l\'ordre logique du déroulement de la traduction ribosomique.',
      explanation: 'La traduction se découpe en initiation (assemblage), élongation (liaisons peptiduques) et terminaison (libération de la protéine de structure).',
      explanationAr: 'تتكون الترجمة من ثلاث مراحل: البداية (تجمع الريبوزوم)، الاستطالة (تركيب الروابط البيبتيدية)، والنهاية (تحرير البروتين الجديد).',
      textWithPlaceholders: 'Le mécanisme commence par la phase d\'[drop-0] au codon AUG. La phase de croissance s\'appelle l\'[drop-1] lors de laquelle le ribosome glisse de codon en codon. On atteint enfin la [drop-2] en croisant un codon stop.',
      dropdowns: {
        'drop-0': {
          id: 'drop-0',
          options: ['initiation', 'élongation', 'décondensation'],
          correctValue: 'initiation'
        },
        'drop-1': {
          id: 'drop-1',
          options: ['élongation', 'liaison', 'mutagenèse'],
          correctValue: 'élongation'
        },
        'drop-2': {
          id: 'drop-2',
          options: ['terminaison', 'réplication', 'maturation'],
          correctValue: 'terminaison'
        }
      }
    },
    {
      id: 'u2-g4-q5',
      type: 'matching',
      title: 'Le dictionnaire de décodage',
      instruction: 'Associez chaque entité biochimique à sa fonction d\'intermédiation lors de la traduction.',
      explanation: 'L\'ARNt apporte les acides aminés, l\'anticodon s\'apparie au codon de l\'ARNm.',
      explanationAr: 'ينقل ARNt الأحماض الأمينية، ويتطابق مضاد الوحدة الرمزية (anticodon) مع الوحدة الرمزية لـ ARNm.',
      leftItems: [
        { id: 'l1', text: 'ARN de transfert (ARNt)' },
        { id: 'l2', text: 'Anticodon' },
        { id: 'l3', text: 'Le code génétique' },
        { id: 'l4', text: 'Liaison peptidique' }
      ],
      rightItems: [
        { id: 'r1', text: 'Lien covalent unissant l\'amine d\'un acide aminé au carboxyle de son prédécesseur.' },
        { id: 'r2', text: 'Molécule adaptatrice transportant l\'acide aminé et lisant le code sur le ribosome.' },
        { id: 'r3', text: 'Séquence de trois nucléotides de l\'ARNt complémentaire d\'un codon de l\'ARNm.' },
        { id: 'r4', text: 'Table de correspondance universelle liant les 64 codons possibles aux 20 acides aminés.' }
      ],
      correctPairs: {
        'l1': 'r2',
        'l2': 'r3',
        'l3': 'r4',
        'l4': 'r1'
      }
    },
    {
      id: 'u2-g4-q6',
      type: 'qcm',
      title: 'Propriétés du code génétique - Redondance',
      instruction: 'Qu\'indique l\'expression "Le code génétique est redondant (ou dégénéré)" ?',
      explanation: 'Plusieurs codons différents peuvent coder pour le même acide aminé (puisqu\'il y a 61 codons codants pour seulement 20 acides aminés).',
      explanationAr: 'الرمز الوراثي بـه تكرار (مفصص): يمكن لعدة وحدات رمزية مختلفة أن ترمز لنفس الحمض الأميني (توجد 61 وحدة رمزية مشفرة مقابل 20 حمض أميني فقط).',
      options: [
        'Chaque codon code pour une multitude d\'acides aminés.',
        'Plusieurs codons distincts codent pour le même acide aminé.',
        'Il change d\'un organisme vivant à un autre.',
        'Il ne code que pour le glucose.'
      ],
      correctIndices: [1],
      allowMultiple: false
    },
    {
      id: 'u2-g4-q7',
      type: 'qcm',
      title: 'Propriété d\'universalité',
      instruction: 'Que signifie l\'universalité du code génétique ?',
      explanation: 'Il est identique chez la quasi-totalité des êtres vivants (animaux, végétaux, bactéries), preuve moléculaire de l\'unicité du vivant.',
      explanationAr: 'الرمز الوراثي كوني: هو نفسه لدى جميع الكائنات الحية تقريباً، مما يثبت وحدة أصل الكائنات الحية.',
      options: [
        'Il s\'applique uniquement aux mammifères.',
        'La traduction se fait n\'importe où.',
        'Il est identique chez la quasi-totalité des êtres vivants de la biosphère.',
        'Il est réplicable à l\'infini sans perte.'
      ],
      correctIndices: [2],
      allowMultiple: false
    },
    {
      id: 'u2-g4-q8',
      type: 'qcm',
      title: 'Le polysome',
      instruction: 'Quelle est la fonction biologique d\'une structure en Polysome dans le cytoplasme ?',
      explanation: 'Un polysome est une structure formée d\'un groupe de plusieurs ribosomes traduisant simultanément le même ARNm, démultipliant la vitesse de synthèse d\'une même protéine.',
      explanationAr: 'متعدد الريبوزوم (Polysome) عبارة عن خيط ARNm واحد مرتبط بالعديد من الريبوزومات التي تترجمه في وقت واحد، مما يرفع وثيرة إنتاج نفس البروتين.',
      options: [
        'C\'est un ribosome détruit.',
        'C\'est l\'assemblage de plusieurs molécules d\'ADN.',
        'C\'est un ensemble de ribosomes traduisant en même temps le même ARNm.',
        'Un organite de dégradation des acides lactiques.'
      ],
      correctIndices: [2],
      allowMultiple: false
    },
    {
      id: 'u2-g4-q9',
      type: 'table',
      title: 'Rôles des sites ribosomiques A et P',
      instruction: 'Distinguez les fonctions des deux principaux sites de liaison au tRNA de l\'unité ribosomique.',
      explanation: 'Le site P accueille le tRNA portant la chaîne en cours, tandis que le site A accueille le nouveau tRNA chargé de l\'acide aminé suivant.',
      explanationAr: 'يستقبل الموقع P الحمض الغاملي tRNA الحامل لأول حمض أو بيبتيد، بينما يستقبل الموقع A الحمض الجديد tRNA الحامل للحمض الأميني التالي.',
      columns: [
        { id: 'siteP', label: 'Site Peptidyl (P)' },
        { id: 'siteA', label: 'Site Aminoacyl (A)' }
      ],
      rows: [
        {
          id: 'row-1',
          statement: 'Lieu d\'accueil initial du premier tRNA contenant Initiateur (tRNA-Met).',
          expectedChoices: { 'siteP': true, 'siteA': false }
        },
        {
          id: 'row-2',
          statement: 'Lieu d\'entrée du nouveau tRNA apportant l\'acide aminé désigné par le codon suivant.',
          expectedChoices: { 'siteP': false, 'siteA': true }
        },
        {
          id: 'row-3',
          statement: 'Site de translocation recevant la chaîne peptidique greffée à l\'issue de la liaison.',
          expectedChoices: { 'siteP': true, 'siteA': false }
        }
      ]
    },
    {
      id: 'u2-g4-q10',
      type: 'qcm',
      title: 'Rôle de l\'ATP dans la traduction',
      instruction: 'À quoi sert l\'énergie chimique de l\'ATP et du GTP lors de la traduction ?',
      explanation: 'L\'ATP sert à charger (activer) l\'acide aminé sur son tRNA spécifique (consommation d\'ATP), et le GTP fournit l\'énergie pour le glissement (translocation) du ribosome.',
      explanationAr: 'يستعمل ATP لتنشيط وربط الأحماض الأمينية بـ ARNt الخاص بها، في حين يستعمل GTP لتوفير طاقة انتقال الريبوزوم.',
      options: [
        'Il sert à débobiner les histones.',
        'Il sert à phosphoryler l\'ARNm.',
        'Il sert à charger l\'acide aminé sur son tRNA (ATP) et à propulser la translocation (GTP).',
        'Il dissout le ribosome au codon d\'arrêt.'
      ],
      correctIndices: [2],
      allowMultiple: false
    }
  ],

  // Group 5: Mutations, Génétique et Relation Gène-Protéine-Caractère
  [
    {
      id: 'u2-g5-q1',
      type: 'qcm',
      title: 'La définition d\'un Gène',
      instruction: 'Donnez la définition moderne et moléculaire d\'un gène.',
      explanation: 'Un gène est un fragment d\'ADN (séquence ordonnée de nucléotides) contenant l\'information codée nécessaire à la synthèse d\'une protéine spécifique.',
      explanationAr: 'المورثة عبارة عن قطعة من ADN (سلسلة مرتبة من النيكليوتيدات) تحتوي على الخبر الوراثي المشفر والضروري لتركيب بروتين معين.',
      options: [
        'C\'est une protéine du noyau.',
        'C\'est un fragment d\'ADN contenant les indications de synthèse d\'un polypeptide.',
        'C\'est un déchet de digestion.',
        'Un organite de reproduction.'
      ],
      correctIndices: [1],
      allowMultiple: false
    },
    {
      id: 'u2-g5-q2',
      type: 'qcm',
      title: 'La définition d\'une Mutation',
      instruction: 'Qu\'est-ce qu\'une mutation génétique ?',
      explanation: 'Une mutation est une modification survenue de façon aléatoire et permanente dans la séquence nucléotidique de l\'ADN d\'un gène.',
      explanationAr: 'الطفرة عبارة عن تغير غير متوقع، عشوائي، ومستمر يحدث في تسلسل نيكليوتيدات مورثة معينة.',
      options: [
        'Le déplacement d\'un ribosome.',
        'Une altération permanente et fortuite de la séquence d\'ADN.',
        'La destruction de l\'ARNm.',
        'Le passage direct en mitose.'
      ],
      correctIndices: [1],
      allowMultiple: false
    },
    {
      id: 'u2-g5-q3',
      type: 'qcm',
      title: 'La mutation par substitution',
      instruction: 'Décrivez le mécanisme d\'une mutation par substitution.',
      explanation: 'La mutation par substitution remplace un seul nucléotide (ou paire de nucléotides) par un autre, sans modifier la longueur totale du gène.',
      explanationAr: 'تحدث طفرة الاستبدال عند تعويض نيكليوتيد واحد (أو زوج من النيكليوتيدات) بآخر، دون تغيير في العدد الإجمالي لنيكليوتيدات المورثة.',
      options: [
        'Le retrait d\'un nucléotide.',
        'Le remplacement d\'un nucléotide par un autre.',
        'L\'ajout d\'un nucléotide additionnel.',
        'Le dédoublement complet du gène.'
      ],
      correctIndices: [1],
      allowMultiple: false
    },
    {
      id: 'u2-g5-q4',
      type: 'qcm',
      title: 'Mutations décalantes (Indels)',
      instruction: 'Quels types de mutations entraînent de fait une modification complète du cadre de lecture (frameshift) lors de la traduction ?',
      explanation: 'L\'ajout (insertion) ou le retrait (délétion) d\'un nucléotide décale tout le cadre de lecture du ribosome à partir du site muté, changeant tous les acides aminés suivants.',
      explanationAr: 'تؤدي طفرتا الإضافة (insertion) أو الحذف (deletion) إلى تغيير كامل في إطار القراءة (décalage de lecture) ابتداءً من موقع الطفرة.',
      options: [
        'La mutation de substitution silencieuse.',
        'Les mutations d\'addition (insertion) ou de délétion d\'un seul nucléotide.',
        'La mutation par inversion équatoriale.',
        'Toutes les mutations mitochondriales.'
      ],
      correctIndices: [1],
      allowMultiple: false
    },
    {
      id: 'u2-g5-q5',
      type: 'dropdown',
      title: 'Effet des mutations non-sens',
      instruction: 'Sélectionnez les impacts moléculaires des mutations non-sens.',
      explanation: 'Une mutation est dite non-sens lorsqu\'elle crée accidentellement un codon stop prématuré, ce qui tronque la protéine et la rend généralement non fonctionnelle.',
      explanationAr: 'تعتبر الطفرة غير المعبرة (non-sens) طفرة تؤدي إلى ظهور وحدة رمزية للتوقف عن الترجمة (codon stop) في غير مكانها الأصلي، مما ينتج عنه بروتين مبتور وغير فعال.',
      textWithPlaceholders: 'Une mutation est dite [drop-0] si la substitution d\'un nucléotide forme prématurément un [drop-1]. Cela provoque l\'arrêt brutal de la synthèse, générant une protéine [drop-2] inefficace.',
      dropdowns: {
        'drop-0': {
          id: 'drop-0',
          options: ['silencieuse', 'non-sens', 'faux-sens'],
          correctValue: 'non-sens'
        },
        'drop-1': {
          id: 'drop-1',
          options: ['codon d\'arrêt (Stop)', 'codon d\'initiation', 'exon'],
          correctValue: 'codon d\'arrêt (Stop)'
        },
        'drop-2': {
          id: 'drop-2',
          options: ['tronquée (plus courte)', 'démesurément longue', 'normale'],
          correctValue: 'tronquée (plus courte)'
        }
      }
    },
    {
      id: 'u2-g5-q6',
      type: 'qcm',
      title: 'Mutation silencieuse',
      instruction: 'Pourquoi une mutation silencieuse ne change-t-elle pas la structure de la protéine ?',
      explanation: 'Grâce à la redondance du code génétique, le codon muté code toujours pour le même acide aminé. La protéine finale est donc strictement identique.',
      explanationAr: 'بفضل تكرار الرمز الوراثي، ترمز الوحدة الرمزية الجديدة الطافرة لنفس الحمض الأميني الأصلي، وبالتالي يظل البروتين الناتج سليماً تماماً.',
      options: [
        'Car elle n\'est pas transcrite par la cellule.',
        'Le codon muté désigne toujours le même acide aminé (redondance).',
        'L\'ARN polymérase répare l\'erreur directement.',
        'Elle n\'arrive que sur l\'ARN.'
      ],
      correctIndices: [1],
      allowMultiple: false
    },
    {
      id: 'u2-g5-q7',
      type: 'qcm',
      title: 'Relation Gène-Protéine-Caractère',
      instruction: 'Expliquez comment l\'ADN régit les caractéristiques apparentes (phénotype) d\'un être vivant.',
      explanation: 'Un gène commande la séquence d\'une protéine spécifique (relation gène-protéine). Cette protéine (ex: enzyme ou récepteur) conditionne l\'expression physique ou métabolique d\'un caractère précis de l\'organisme (relation protéine-caractère).',
      explanationAr: 'تتحكم المورثة في ترتيب أحماض بروتين معين (علاقة مورثة-بروتين)، ويتحكم بدور هذا البروتين في إبراز مظهر خارجي أو صفة معينة (علاقة بروتين-صفة).',
      options: [
        'Les caractères fabriquent les gènes par rétroaction.',
        'Chaque gène produit des caractères physiques visibles sans intermédiaire.',
        'Un fragment de gène commande une protéine, et l\'action de cette protéine détermine directement le caractère.',
        'Les gènes sont sécrétés par les caractères de l\'environnement.'
      ],
      correctIndices: [2],
      allowMultiple: false
    },
    {
      id: 'u2-g5-q8',
      type: 'matching',
      title: 'Exemples de mutation et d\'anomale',
      instruction: 'Reliez chaque maladie génétique nationale célèbre à son anomalie moléculaire explicative.',
      explanation: 'L\'albinisme dérive d\'une absence de mélanine, la drépanocytose d\'une mutation substituant un acide aminé de l\'hémoglobine.',
      explanationAr: 'ينتج المهق (Albinisme) عن طفرة تمنع تركيب خضاب الميلانين، وينتج مرض فقر الدم المنجلي عن طفرة استبدال في خضاب الهيموغلوبين.',
      leftItems: [
        { id: 'l1', text: 'Drépanocytose (Anémie falciforme)' },
        { id: 'l2', text: 'Albinisme' },
        { id: 'l3', text: 'Mutation faux-sens' },
        { id: 'l4', text: 'Agents mutagènes' }
      ],
      rightItems: [
        { id: 'r1', text: 'Substitution entraînant le codage d\'un acide aminé différent de l\'original.' },
        { id: 'r2', text: 'Substances ou facteurs (UV, radioactivité) haussant la fréquence de survenue de mutations.' },
        { id: 'r3', text: 'Mutation ponctuelle modifiant un acide aminé de l\'hémoglobine, déformant les globules rouges.' },
        { id: 'r4', text: 'Mutation inactivant l\'enzyme tyrosinase, bloquant la synthèse de mélanine pigmentaire.' }
      ],
      correctPairs: {
        'l1': 'r3',
        'l2': 'r4',
        'l3': 'r1',
        'l4': 'r2'
      }
    },
    {
      id: 'u2-g5-q9',
      type: 'table',
      title: 'Niveaux d\'expression du Phénotype',
      instruction: 'Notez le niveau d\'observation clinique correspondant pour les anomalies phénologiques.',
      explanation: 'La déformation de l\'hémoglobine HbS est le niveau moléculaire, la drépanocytose des globules rouges est le niveau cellulaire, les symptômes cardiovasculaires le niveau macroscopique.',
      explanationAr: 'يعتبر تشكل خضاب HbS مستوى جزيئي، والخلية منجلية الشكل مستوى خلوي، والأعراض العامة لجسم الإنسان مستوى عيانياً (Macroscopique).',
      columns: [
        { id: 'colMol', label: 'Phénotype Moléculaire' },
        { id: 'colCel', label: 'Phénotype Cellulaire' }
      ],
      rows: [
        {
          id: 'row-1',
          statement: 'Synthèse d\'une chaîne polypeptidique d\'hémoglobine HbS anormale.',
          expectedChoices: { 'colMol': true, 'colCel': false }
        },
        {
          id: 'row-2',
          statement: 'Globules rouges prenant une apparence anormale de faucilles rigides.',
          expectedChoices: { 'colMol': false, 'colCel': true }
        },
        {
          id: 'row-3',
          statement: 'Arrêt de l\'activité catalytique de la tyrosinase dans les mélanocytes.',
          expectedChoices: { 'colMol': true, 'colCel': false }
        }
      ]
    },
    {
      id: 'u2-g5-q10',
      type: 'qcm',
      title: 'La réversibilité des mutations',
      instruction: 'Qu\'indique l\'existence d\'une cellule de réparation de l\'ADN ?',
      explanation: 'La cellule possède des enzymes (les ADN ligases, endonucléases de réparation...) capables de corriger les erreurs de réplication ou les dommages causés par les UV.',
      explanationAr: 'تتوفر الخلايا على أنزيمات قادرة على إصلاح أضرار ADN الناتجة عن أخطاء المضاعفة أو الأشعة فوق البنفسجية.',
      options: [
        'Que toutes les mutations sont inéluctables et mortelles.',
        'Que les lésions de l\'ADN peuvent être stabilisées et corrigées par un système enzymatique de réparation.',
        'Que la traduction s\'autocorrige sans énergie.',
        'Que la cellule mitotique reconstruit son propre ADN.'
      ],
      correctIndices: [1],
      allowMultiple: false
    }
  ]
];
