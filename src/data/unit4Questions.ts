import { SVTQuestion } from '../types';

export const unit4Groups: SVTQuestion[][] = [
  // Group 1: Gestion et Valorisation des Ordures Ménagères
  [
    {
      id: 'u4-g1-q1',
      type: 'qcm',
      title: 'Le tri sélectif des déchets',
      instruction: 'Quel est l\'objectif prioritaire et immédiat du tri sélectif des ordures ménagères ?',
      explanation: 'Le tri à la source (ou tri sélectif) sépare les déchets recyclables des non-recyclables, améliorant la rentabilité et le rendement des processus ultérieurs de recyclage ou de valorisation.',
      explanationAr: 'يتمثل الهدف المباشر لعملية الفرز الانتقائي (Tri sélectif) في فصل النفايات قبل تجميعها من أجل تسهيل إعادة تدويرها وتثمينها.',
      options: [
        'Brûler tous les déchets au même endroit.',
        'Faciliter et optimiser l\'échantillonnage et le recyclage des matières valorisables.',
        'Accélérer la production naturelle de lixiviats.',
        'Éliminer le plastique par jet direct.'
      ],
      correctIndices: [1],
      allowMultiple: false
    },
    {
      id: 'u4-g1-q2',
      type: 'qcm',
      title: 'Le compostage aérobie',
      instruction: 'Comment s\'explique la formation de compost à partir de déchets humides sous conditions d\'aérobiose ?',
      explanation: 'Le compostage est la biodégradation aérobie (en présence d\'O2) des déchets organiques humides par des micro-organismes (bactéries et champignons), produisant un engrais organique stabilisé : le compost.',
      explanationAr: 'التسميد العضوي (Compostage) هو تفكيك هوائي (وجود الأكسجين) للمواد العضوية الرطبة بواسطة المتعضيات المجهرية لتنتج سماداً عضوياً مفيداً للتربة.',
      options: [
        'Par la compression forte sans bactérie.',
        'Par la dégradation aérobie de la matière organique par des bactéries et micro-organismes pour générer de l\'engrais.',
        'Par une réaction de fusion atomique.',
        'Par évaporation complète de l\'eau.'
      ],
      correctIndices: [1],
      allowMultiple: false
    },
    {
      id: 'u4-g1-q3',
      type: 'qcm',
      title: 'La Méthanisation (Digestion anaérobie)',
      instruction: 'Quels sont les deux produits majeurs formés lors de la méthanisation anaérobie des déchets organiques ?',
      explanation: 'La méthanisation est la fermentation anaérobie (sans O2) de la biomasse humide par des bactéries méthanogènes. Elle produit du biogaz riche en méthane CH4 (valorisation énergétique) et un résidu solide (le digestat, fertilisant).',
      explanationAr: 'إنتاج الميثان (Méthanisation) هو تفكique لاهوائي (غياب الأكسجين) يولد غازاً حيوياً غنياً بالميثان CH4 (طاقي)، وحثالة صلبة مغذية (Digestat).',
      options: [
        'Du compost et de la vapeur d\'eau sèche.',
        'Du biogaz combustible riche en méthane (CH4) et un digestat solide.',
        'Uniquement du dioxyde de soufre gazeux.',
        'Un complexe ophiolitique.'
      ],
      correctIndices: [1],
      allowMultiple: false
    },
    {
      id: 'u4-g1-q4',
      type: 'dropdown',
      title: 'Le problème écologique des lixiviats',
      instruction: 'Complétez l\'analyse toxique des jus de décharge.',
      explanation: 'Le lixiviat est le liquide toxique qui filtre à travers les déchets d\'une décharge. Il est très polluant pour les nappes phréatiques.',
      explanationAr: 'عصارة النفايات (Lixiviat) هي سائل سام ينتج عن ترشيح المياه عبر النفايات، ويهدد بشكل خطير المياه الجوفية والأوساط المائية.',
      textWithPlaceholders: 'La filtration d\'eau de pluie à travers les ordures produit un résidu liquide noir hautement toxique appelé [drop-0]. Ce liquide est chargé en métaux lourds et en [drop-1], et s\'il s\'infiltre, il provoque une pollution irréversible des [drop-2] sous la terre.',
      dropdowns: {
        'drop-0': {
          id: 'drop-0',
          options: ['lixiviat (jus de décharge)', 'compost fluide', 'biogaz liquide'],
          correctValue: 'lixiviat (jus de décharge)'
        },
        'drop-1': {
          id: 'drop-1',
          options: ['bactéries pathogènes', 'protons sains', 'myosine active'],
          correctValue: 'bactéries pathogènes'
        },
        'drop-2': {
          id: 'drop-2',
          options: ['nappes phréatiques', 'couches d\'ozone', 'parois cellulaires'],
          correctValue: 'nappes phréatiques'
        }
      }
    },
    {
      id: 'u4-g1-q5',
      type: 'matching',
      title: 'Filières de traitement des déchets',
      instruction: 'Reliez chaque méthode industrielle d\'élimination à sa définition physique ou chimique.',
      explanation: 'Les ordures peuvent être compostées, brûlées pour l\'énergie (incinération) ou enfouies de manière sécurisée.',
      explanationAr: 'تتلم طرق معالجة النفايات عبر التسميد، أو الحرق لإنتاج الطاقة (Incinération)، أو الطمر المراقب.',
      leftItems: [
        { id: 'l1', text: 'Incinération thermique' },
        { id: 'l2', text: 'Enfouissement technique' },
        { id: 'l3', text: 'Recyclage de matière' },
        { id: 'l4', text: 'Tri optique moderne' }
      ],
      rightItems: [
        { id: 'r1', text: 'Technique consistant à stocker à long terme les déchets ultimes non combustibles en alvéoles scellées.' },
        { id: 'r2', text: 'Combustion contrôlée des déchets à haute température, récupérant l\'énergie calorifique en électricité.' },
        { id: 'r3', text: 'Refonte ou traitement physique pour transformer un déchet (ex: bouteille de plastique) en nouvelle matière première.' },
        { id: 'r4', text: 'Utilisation de scanners laser automatiques dans les usines pour trier les plastiques par famille (PET, PEHD).' }
      ],
      correctPairs: {
        'l1': 'r2',
        'l2': 'r1',
        'l3': 'r3',
        'l4': 'r4'
      }
    },
    {
      id: 'u4-g1-q6',
      type: 'qcm',
      title: 'Valorisation matière vs valorisation énergétique',
      instruction: 'Parmi les techniques de valorisation, laquelle représente une stricte valorisation énergétique ?',
      explanation: 'La production de méthane (méthanisation) et l\'extraction de la chaleur d\'incinération constituent des valorisations énergétiques, transformant l\'énergie chimique en combustible ou électricité.',
      explanationAr: 'يمثل كُل من إنتاج الميثان الحرق بالحرارة تثميناً طاقياً (Valorisation énergétique) للنفايات.',
      options: [
        'Le compostage humide de la biomasse.',
        'La refonte des bouteilles de verre brisées.',
        'La méthanisation produisant du biogaz combustible.',
        'Le retour direct du papier journal.'
      ],
      correctIndices: [2],
      allowMultiple: false
    },
    {
      id: 'u4-g1-q7',
      type: 'qcm',
      title: 'Composition d\'une décharge non contrôlée',
      instruction: 'Quels risques écologiques majeurs génère une décharge sauvage "non contrôlée" ?',
      explanation: 'Les décharges sauvages sans barrières d\'étanchéité libèrent des lixiviats hautement toxiques qui polluent les nappes, ainsi que du méthane non capté s\'envolant vers l\'atmosphère (fort gaz à effet de serre).',
      explanationAr: 'تسبب المطاريح العشوائية تسرب عصارة النفايات إلى المياه الجوفية، مع تصاعد غاز الميثان المسبب للاحتباس الحراري دون احتواء أو تثمين.',
      options: [
        'Aucun risque car les micro-organismes mangent tout.',
        'Préchauffage direct de l\'air ambiant.',
        'Pollution généralisée de l\'eau (lixiviat) et émission non contrôlée de méthane CH4 à fort impact climatique.',
        'La transformation des roches en granite.'
      ],
      correctIndices: [2],
      allowMultiple: false
    },
    {
      id: 'u4-g1-q8',
      type: 'qcm',
      title: 'Le rôle de la méthanogénèse',
      instruction: 'Qu\'est-ce que la méthanogénèse ?',
      explanation: 'C\'est l\'ultime étape biologique de la méthanisation, assurée par des bactéries archées anaérobies de type Methanobacterium, qui convertissent l\'acide acétique, l\'hydrogène et le CO2 en méthane pure CH4.',
      explanationAr: 'الميثانوتروفا أو الميثانوجينيسيس هي مرحلة بيولوجية تتم عبر بكتيريا لاهوائية تحول الأحماض والغازات إلى غاز الميثان CH4.',
      options: [
        'La dissolution thermique du soufre.',
        'Le processus de libération de l\'oxygène.',
        'La synthèse métabolique de méthane par des bactéries anaérobies strictes.',
        'L\'extraction sélective de l\'uranium.'
      ],
      correctIndices: [2],
      allowMultiple: false
    },
    {
      id: 'u4-g1-q9',
      type: 'table',
      title: 'Taux biodégradation matières courantes',
      instruction: 'Distinguez le comportement écologique du papier vis-à-vis des matières synthétiques.',
      explanation: 'Les matières organiques naturelles (comme le papier de cellulose) se dégradent en quelques semaines, tandis que le plastique et le verre résistent des centaines d\'années.',
      explanationAr: 'تتحلل المواد العضوية الطبيعية (كالورق) خلال أسابيع قليلة، بينما تقاوم المواد البلاستيكية والزجاج البيئة لعدة قرون.',
      columns: [
        { id: 'biodegR', label: 'Matière Biodégradable Rapide' },
        { id: 'biodegL', label: 'Matière Non-Biodégradable Rémanente' }
      ],
      rows: [
        {
          id: 'row-1',
          statement: 'Déchets de cellulose solide (papiers, cartons neutres).',
          expectedChoices: { 'biodegR': true, 'biodegL': false }
        },
        {
          id: 'row-2',
          statement: 'Bouteilles et objets en polyéthylène (matière plastique déchargée).',
          expectedChoices: { 'biodegR': false, 'biodegL': true }
        },
        {
          id: 'row-3',
          statement: 'Contenants et éclats de silicate de verre neutre.',
          expectedChoices: { 'biodegR': false, 'biodegL': true }
        }
      ]
    },
    {
      id: 'u4-g1-q10',
      type: 'qcm',
      title: 'Concept de développement durable',
      instruction: 'Que vise le développement durable via la règle des "3R" dans la gestion moderne des ordures sauvages ?',
      explanation: 'Le concept d\'économie circulaire et de développement durable applique la règle des "3R" : Réduire la production à la source, Réutiliser les contenants, et Recycler les détritus restants.',
      explanationAr: 'يطبق التنمية المستدامة قانون الركائز الثلاث (3R): تقليص النفايات (Réduire)، إعادة استعمال المواد (Réutiliser)، وإعادة تدويرها (Recycler).',
      options: [
        'Remplir, Raser, Recommencer.',
        'Réduire à la source, Réutiliser les objets, et Recycler les matières.',
        'Radiation, Refroidissement, Recharge.',
        'Rien faire et Regarder la nature.'
      ],
      correctIndices: [1],
      allowMultiple: false
    }
  ],

  // Group 2: Pollution Atmosphérique et Changement Climatique
  [
    {
      id: 'u4-g2-q1',
      type: 'qcm',
      title: 'L\'effet de serre naturel',
      instruction: 'Quel est l\'effet de serre naturel sur la température de la Terre sans activité humaine indésirable ?',
      explanation: 'L\'effet de serre naturel maintient la température moyenne de la Terre à +15°C. Sans lui, les infrarouges s\'échapperaient, et la température moyenne chuterait à -18°C.',
      explanationAr: 'الاحتباس الحراري الطبيعي يحافظ على درجة حرارة الأرض في حدود +15°C، وبدونه ستنخفض إلى -18°C.',
      options: [
        'Il provoquerait l\'évaporation totale des océans.',
        'Il stabilise la température moyenne de l\'air à environ +15°C (au lieu de -18°C), rendant la vie active possible.',
        'Il détruit l\'oxygène vital.',
        'Il provoque des pluies acides systématiques.'
      ],
      correctIndices: [1],
      allowMultiple: false
    },
    {
      id: 'u4-g2-q2',
      type: 'qcm',
      title: 'Gaz à effet de serre anthropiques majeurs',
      instruction: 'Quels sont les deux principaux gaz émanant directement des activités humaines (anthropiques) qui accentuent l\'effet de serre ?',
      explanation: 'Le dioxyde de carbone (CO2), provenant de la combustion des énergies fossiles, et le méthane (CH4), issu de l\'élevage bovin et des décharges de déchets, sont les principaux GES amplifiés par l\'homme.',
      explanationAr: 'يعتبر ثنائي أكسيد الكربون CO2 (احتراق الوقود الأحفوري) والميثان CH4 (تربية المواشي والمطامير) أهم الغازات الدفيئة المسببة للاحتباس الحراري المتزايد.',
      options: [
        'L\'Oxygène et l\'Azote gazeux libres.',
        'Le Dioxyde de carbone (CO2) et le Méthane (CH4).',
        'Le Gaz néon et l\'Hélium.',
        'La vapeur d\'eau uniquement.'
      ],
      correctIndices: [1],
      allowMultiple: false
    },
    {
      id: 'u4-g2-q3',
      type: 'qcm',
      title: 'Le trou dans la couche d\'Ozone (CFC)',
      instruction: 'Quels gaz chimiques sont directement responsables de la destruction de la couche d\'ozone stratosphérique ?',
      explanation: 'Les chlorofluorocarbures (CFC) libèrent des atomes de chlore sous l\'effet des UV, détruisant l\'ozone (O3) de la haute atmosphère qui filtre les UV nocifs.',
      explanationAr: 'الغازات الكلوروفلوروكربونات (CFC) هي المسببة لتدمير طبقة الأوزون (O3) التي تحمي الأرض من الأشعة فوق البنفسجية الضارة.',
      options: [
        'Le dioxyde de carbone CO2.',
        'Les Chlorofluorocarbures (CFC).',
        'Les oxydes de phosphore.',
        'Le biogaz liquide.'
      ],
      correctIndices: [1],
      allowMultiple: false
    },
    {
      id: 'u4-g2-q4',
      type: 'qcm',
      title: 'L\'origine des Pluies Acides',
      instruction: 'Quels polluants gazeux industriels transforment l\'eau des nuages en pluies acides dommageables ?',
      explanation: 'Les émissions de dioxyde de soufre (SO2) et d\'oxydes d\'azote (NOx) réagissent avec l\'eau atmosphérique pour former de l\'acide sulfurique et de l\'acide nitrique, acidifiant les torrents et dépérissant les forêts.',
      explanationAr: 'تتسبب انبعاثات ثنائي أكسيد الكبريت SO2 وأكسيد النيتروجين NOx في تشكل حمض الكبريتيك وحمض النتريك المسببين لظاهرة الأمطار الحمضية.',
      options: [
        'Les rejets de vapeur d\'eau pure.',
        'Le dioxyde de carbone CO2 uniquement.',
        'Les oxydes de soufre (SO2) et d\'azote (NOx).',
        'L\'accumulation de lixiviat.'
      ],
      correctIndices: [2],
      allowMultiple: false
    },
    {
      id: 'u4-g2-q5',
      type: 'dropdown',
      title: 'Mécanisme physique du forçage radiatif',
      instruction: 'Complétez l\'analyse du rayonnement énergétique de l\'effet de serre.',
      explanation: 'La Terre absorbe le rayonnement solaire et réémet de l\'énergie sous forme de rayonnement infrarouge de grande longueur d\'onde, piégé par les GES.',
      explanationAr: 'تمتص الأرض أشعة الشمس وتعيد طرح طاقة حرارية على شكل أشعة تحت حمراء (Infrarouge) ذات طول موجة كبير، تعمل الغازات الدفيئة على التقاطها وحبسها.',
      textWithPlaceholders: 'La surface terrestre reçoit l\'énergie solaire à ondes courtes. Elle réémet vers l\'espace de la chaleur sous forme de rayons [drop-0]. Les gaz de l\'atmosphère absorbent ces rayons et les renvoient vers la surface, provoquant la hausse globale des [drop-1] de l\'[drop-2].',
      dropdowns: {
        'drop-0': {
          id: 'drop-0',
          options: ['ultraviolets (UV)', 'infrarouges (IR)', 'rayons gamma'],
          correctValue: 'infrarouges (IR)'
        },
        'drop-1': {
          id: 'drop-1',
          options: ['températures', 'concentrations de chlore', 'pluies'],
          correctValue: 'températures'
        },
        'drop-2': {
          id: 'drop-2',
          options: ['atmosphère', 'paroi cellulaire', 'matrice'],
          correctValue: 'atmosphère'
        }
      }
    },
    {
      id: 'u4-g2-q6',
      type: 'qcm',
      title: 'Le smog photochimique',
      instruction: 'De quoi est composé le brouillard de pollution urbain appelé "Smog photochimique" visible au-dessus des mégalopoles ?',
      explanation: 'Le smog est un mélange d\'ozone troposphérique (toxique au sol), de particules fines (PM2.5) et d\'oxydes d\'azote, catalysé par le rayonnement solaire intense.',
      explanationAr: 'الضباب الدخاني (Smog photochimique) هو ضباب ملوث يحتوي على الأوزون السطحي القريب من الأرض والجسيمات الدقيقة بفعل التفاعل مع أشعة الشمس وفضلات السيارات.',
      options: [
        'De vapeur d\'eau saine.',
        'D\'un cocktail d\'ozone de basse couche (troposphérique), d\'oxydes d\'azote et de poussières fines.',
        'Une coulée de lixiviats fluides.',
        'Une nuée de spores de champignons.'
      ],
      correctIndices: [1],
      allowMultiple: false
    },
    {
      id: 'u4-g2-q7',
      type: 'matching',
      title: 'Phénomènes atmosphériques globaux',
      instruction: 'Associez chaque déséquilibre atmosphérique à sa conséquence directe sur l\'écosystème terrestre.',
      explanation: 'Les pluies acides tuent les arbres, le trou dans la couche d\'ozone laisse passer les UV agressifs, l\'augmentation du CO2 modifie le climat global.',
      explanationAr: 'تسبب الأمطار الحمضية موت الغابات وتآكل البنايات، ويسهل ثقب الأوزون مرور الأشعة فوق البنفسجية المسببة لسرطان الجلد.',
      leftItems: [
        { id: 'l1', text: 'Excès de CO2 et CH4' },
        { id: 'l2', text: 'Pluies acides (SO2/NOx)' },
        { id: 'l3', text: 'Trou couche d\'ozone (CFC)' },
        { id: 'l4', text: 'Smog photochimique' }
      ],
      rightItems: [
        { id: 'r1', text: 'Haise des lésions cutanées (cancer de la peau) et altération de la photosynthèse végétale dues aux UV non filtrés.' },
        { id: 'r2', text: 'Acidification des sols forestiers provoquant le dépérissement des arbres et la dissolution des nutriments.' },
        { id: 'r3', text: 'Réchauffement climatique mondial, fonte des calottes glaciaires et hausse du niveau marin.' },
        { id: 'r4', text: 'Irritations respiratoires chroniques et troubles cardiovasculaires chez les citadins des grandes villes.' }
      ],
      correctPairs: {
        'l1': 'r3',
        'l2': 'r2',
        'l3': 'r1',
        'l4': 'r4'
      }
    },
    {
      id: 'u4-g2-q8',
      type: 'qcm',
      title: 'Effet de l\'acidification mondiale des océans',
      instruction: 'Quel est l\'effet secondaire de la hausse du taux de CO2 gazeux dans l\'eau des mers ?',
      explanation: 'Le CO2 atmosphérique en excès se dissout dans les océans, formant de l\'acide carbonique. Cette acidification dissout le calcaire des récifs coralliens et détruit les coquilles des mollusques calcaires.',
      explanationAr: 'يؤدي ذوبان CO2 الزائد في المحيطات إلى زيادة حموضة المياه (Acidification)، مما يذيب هياكل كربونات الكالسيوم للشعب المرجانية والقواقع المائية.',
      options: [
        'Le dessalement rapide des eaux.',
        'L\'élévation de l\'acide phosphorique.',
        'La baisse du pH marin (acidification), qui dissout les coquilles calcaires et décime les coraux.',
        'La libération massive d\'helium volatil.'
      ],
      correctIndices: [2],
      allowMultiple: false
    },
    {
      id: 'u4-g2-q9',
      type: 'table',
      title: 'Impacts climatiques des gaz atmosphériques',
      instruction: 'Cochez l\'impact associé à chacun des gaz de la liste.',
      explanation: 'Les CFC détruisent spécifiquement l\'ozone stratosphérique. Le CO2 agit comme le principal contributeur du forçage radiatif du réchauffement climatique.',
      explanationAr: 'تريد مركبات CFC تدمير جزيئات أوزون الغلاف العلوي. بينما يعمل غاز CO2 كعامل مسبب لارتفاع حرارة المناخ.',
      columns: [
        { id: 'impClim', label: 'Réchauffement global (GES)' },
        { id: 'impOzo', label: 'Destruction de la couche d\'Ozone' }
      ],
      rows: [
        {
          id: 'row-1',
          statement: 'Infiltration atmosphérique de Chlorofluorocarbures (CFC).',
          expectedChoices: { 'impClim': false, 'impOzo': true }
        },
        {
          id: 'row-2',
          statement: 'Augmentation des niveaux de DIOXYDE de carbone par combustion pétrolière.',
          expectedChoices: { 'impClim': true, 'impOzo': false }
        },
        {
          id: 'row-3',
          statement: 'Pénétration de Méthane volatil d\'origine agricole.',
          expectedChoices: { 'impClim': true, 'impOzo': false }
        }
      ]
    },
    {
      id: 'u4-g2-q10',
      type: 'qcm',
      title: 'Le protocole de Kyoto et de Montréal',
      instruction: 'Quel fut l\'accord historique mondial engagé pour chasser les CFC et restaurer l\'ozone ?',
      explanation: 'Le Protocole de Montréal (1987) a scellé l\'interdiction mondiale de la production des CFC, tandis que le Protocole de Kyoto (1997) visait la réduction des émissions de gaz à effet de serre.',
      explanationAr: 'أقر بروتوكول مونتريال (1987) المنع التدريجي الشامل لغازات CFC لحماية الأوزون، واستهدف بروتوكول كيوتو (1997) الحد من الغازات الدفيئة.',
      options: [
        'L\'accord de subduction de l\'Himalaya.',
        'Le protocole de Paris uniquement.',
        'Le Protocole de Montréal pour éliminer les CFC, et le Protocole de Kyoto pour réduire les GES.',
        'La loi de Mendel sur les drosophiles.'
      ],
      correctIndices: [2],
      allowMultiple: false
    }
  ],

  // Group 3: Pollution Hydrique et Eutrophisation
  [
    {
      id: 'u4-g3-q1',
      type: 'qcm',
      title: 'Facteurs de déclenchement de l\'eutrophisation',
      instruction: 'Quelle anomalie chimique initiale déclenche le processus d\'eutrophisation dans les eaux stagnantes ?',
      explanation: 'L\'eutrophisation est initiée par l\'accumulation anormale d\'éléments nutritifs minéraux, principalement les nitrates et phosphates issus des engrais agricoles solides et des eaux usées.',
      explanationAr: 'ينتج التخاصب (Eutrophisation) بصفة مباشرة عن التدفق المفرط والمكثف للنيترات والفوسفات من الأسمدة الفلاحية والمياه العادمة في المياه الراكدة.',
      options: [
        'Le réchauffement direct de l\'eau par une usine.',
        'Le déversement d\'acide cytocholique.',
        'L\'excès de nitrates (NO3-) et de phosphates (PO43-) dans des eaux calmes ou stagnation.',
        'L\'oxygénation artificielle provoquée.'
      ],
      correctIndices: [2],
      allowMultiple: false
    },
    {
      id: 'u4-g3-q2',
      type: 'qcm',
      title: 'Étapes initiales : Prolifération des algues',
      instruction: 'Quel événement survient directement après l\'élévation de concentration azotée et phosphorée ?',
      explanation: 'L\'abondance de nutriments provoque une multiplication explosive d\'algues vertes unicellulaires de surface, créant un tapis vert opaque bloquant la photosynthèse en profondeur et captant la lumière.',
      explanationAr: 'تسبب وفرة المغذيات تكاثراً هائلاً وسريعاً للطحالب الخضراء السطحية، مما يشكل بساطاً يخفي الضوء عن المياه العميقة ويمنع التركيب الضوئي.',
      options: [
        'La mort instantanée des poissons.',
        'La prolifération explosive d\'algues vertes et de cyanobactéries en surface, rendant l\'eau opaque.',
        'La décimisation des nitrates.',
        'Le gel complet des cours d\'eau.'
      ],
      correctIndices: [1],
      allowMultiple: false
    },
    {
      id: 'u4-g3-q3',
      type: 'qcm',
      title: 'La mort de la végétation profonde',
      instruction: 'Pourquoi les plantes aquatiques du fond des lacs meurent-elles rapidement dans un écosystème eutrophe ?',
      explanation: 'Le tapis d\'algues superficielles empêche la lumière solaire d\'atteindre les profondeurs. Sans lumière, la photosynthèse s\'arrête, entraînant le dépérissement des plantes profondes.',
      explanationAr: 'تحجب الطحالب السطحية أشعة الشمس، مما يوقف التركيب الضوئي للنباتات المائية العميقة فتذبل وتموت.',
      options: [
        'Elles sont empoisonnées directement par les nitrates.',
        'À cause du manque drastique de lumière (absence de pénétration des rayons solaires), bloquant toute photosynthèse.',
        'Elles manquent de sel minéral.',
        'La congélation du fond du lac.'
      ],
      correctIndices: [1],
      allowMultiple: false
    },
    {
      id: 'u4-g3-q4',
      type: 'qcm',
      title: 'Consommation d\'oxygène par décomposition',
      instruction: 'Qu\'est-ce qui cause l\'asphyxie complète (anoxie) de l\'eau du lac ?',
      explanation: 'Des bactéries aérobies prolifèrent pour biodégrader les plantes et algues mortes accumulées au fond. Ces décomposeurs consomment (pompent) tout l\'oxygène dissous, asphyxiant la faune aquatique.',
      explanationAr: 'تتكاثر البكتيريا الهوائية لتفكيك جثث النباتات والطحالب الميتة. وتستهلك هذه البكتيريا كل الأكسجين المذاب في الماء، مما يسبب اختناق الأسماك.',
      options: [
        'La prolifération des poissons eux-mêmes.',
        'La consommation massive de dioxygène de l\'eau (O2) par les bactéries aérobies décomposeurs de biomasse morte.',
        'La dissolution thermique directe de l\'azote gazeux.',
        'L\'évaporation de l\'oxygène sous l\'effet du soleil.'
      ],
      correctIndices: [1],
      allowMultiple: false
    },
    {
      id: 'u4-g3-q5',
      type: 'dropdown',
      title: 'L\'indicateur de qualité DBO5',
      instruction: 'Sélectionnez les termes de la métrologie des eaux polluées.',
      explanation: 'La Demande Biochimique en Oxygène (DBO5) mesure le dioxygène consommé par les bactéries en 5 jours pour décomposer les matières organiques. Plus elle est élevée, plus l\'eau est polluée.',
      explanationAr: 'يقيس مؤشر الطلب البيوكيميائي للأكسجين خلال 5 أيام (DBO5) كمية الأوكسجين المستهلكة من طرف البكتيريا لتفكيك المادة العضوية، ويدل ارتفاعه على تلوث كبير للماء.',
      textWithPlaceholders: 'Le critère [drop-0] représente la demande biochimique en oxygène durant 5 jours. Un taux de DBO5 élevé traduit une forte concentration de [drop-1] biodégradable dans l\'eau, indiquant un niveau de qualité [drop-2] de la rivière.',
      dropdowns: {
        'drop-0': {
          id: 'drop-0',
          options: ['DBO5', 'DCO', 'pH'],
          correctValue: 'DBO5'
        },
        'drop-1': {
          id: 'drop-1',
          options: ['matières organiques', 'dioxygène sain', 'cristaux de sel'],
          correctValue: 'matières organiques'
        },
        'drop-2': {
          id: 'drop-2',
          options: ['très satisfaisante', 'médiocre et hautement pollué', 'stérile radioactive'],
          correctValue: 'médiocre et hautement pollué'
        }
      }
    },
    {
      id: 'u4-g3-q6',
      type: 'qcm',
      title: 'La Demande Chimique en Oxygène (DCO)',
      instruction: 'Que mesure spécifiquement l\'indicateur DCO pour évaluer la pollution des effluents urbains ?',
      explanation: 'La Demande Chimique en Oxygène (DCO) mesure la quantité de dioxygène nécessaire pour oxyder chimiquement (à l\'aide d\'un oxydant fort de laboratoire) toutes les substances réductrices (organiques et inorganiques) contenues dans l\'eau.',
      explanationAr: 'يقيس مؤشر الطلب الكيميائي للأكسجين (DCO) كمية الأكسجين اللازمة لإكسدة جميع المواد العضوية وغير العضوية كيميائياً في مختبر المياه.',
      options: [
        'Le nombre de parasites dans un millilitre d\'eau.',
        'La quantité de dioxygène requise pour détruire ou oxyder chimiquement l\'ensemble des substances de l\'eau.',
        'La quantité de calcium d\'une rivière calcifiée.',
        'La pression exercée par le fond du lac.'
      ],
      correctIndices: [1],
      allowMultiple: false
    },
    {
      id: 'u4-g3-q7',
      type: 'qcm',
      title: 'Classification des eaux d\'après le pH',
      instruction: 'Parmi les valeurs suivantes de pH d\'un lac ou torrent forestier, laquelle caractérise un impact aigu de pluies acides ?',
      explanation: 'Un pH inférieur à 5 est le signe d\'une acidification aiguë par les pluies acides (SO2/NOx), entraînant la disparition des crustacés, insectes et poissons.',
      explanationAr: 'يدل انخفاض PH المياه إلى أقل من 5 على حموضة حادة ناتجة عن الأمطار الحمضية، مما يتسبب في موت الكائنات المائية.',
      options: [
        'pH = 7 (Neutre)',
        'pH = 8.5 (Basique sain)',
        'pH = 4.5 (Fortement acide et toxique)',
        'pH = 12'
      ],
      correctIndices: [2],
      allowMultiple: false
    },
    {
      id: 'u4-g3-q8',
      type: 'matching',
      title: 'Indices biotique et qualité de l\'eau',
      instruction: 'Faites correspondre chaque classe ou polluants aux effets biotiques associés.',
      explanation: 'La présence de macro-invertébrés sensibles atteste de la bonne qualité de l\'eau (indice biotique élevé).',
      explanationAr: 'يدل وجود لافقاريات حساسة للتلوث (مثل يرقات ذباب مايو) على جودة جيدة وممتازة للماء (Indice biotique مرتفع).',
      leftItems: [
        { id: 'l1', text: 'Larves sensibles (Plécoptères)' },
        { id: 'l2', text: 'Vers saprobies (Tubifex)' },
        { id: 'l3', text: 'Métaux lourds (Mercure/Plomb)' },
        { id: 'l4', text: 'Indice Biotique Global (IBGN)' }
      ],
      rightItems: [
        { id: 'r1', text: 'Se multiplient massivement dans les sédiments des eaux très chargées en matières organiques fécales ou industrielles.' },
        { id: 'r2', text: 'Substances toxiques cumulatives non biodégradables qui contaminent la chaîne trophique (bioaccumulation).' },
        { id: 'r3', text: 'Ne survivent que dans des cours d\'eau parfaitement oxygénés à température et débit adéquats.' },
        { id: 'r4', text: 'Note standard évaluée d\'après la faune invertébrée benthique pour diagnostiquer la santé écologique de l\'eau.' }
      ],
      correctPairs: {
        'l1': 'r3',
        'l2': 'r1',
        'l3': 'r2',
        'l4': 'r4'
      }
    },
    {
      id: 'u4-g3-q9',
      type: 'table',
      title: 'DCO et DBO5 comme diagnostics de santé',
      instruction: 'Précisez l\'interprétation des couples théoriques pour la potabilité.',
      explanation: 'Une eau saine présente des valeurs minimes de DBO5 (<3 mg/L) et DCO (<10 mg/L). Des valeurs haussières indiquent des effluents d\'égouts hautement pollués.',
      explanationAr: 'تتميز المياه الصالحة للشرب والقيم بـ DBO5 و DCO ضعيفين جداً، وتدل القيم العالية على التلوث بالمياه العادمة.',
      columns: [
        { id: 'eSaine', label: 'Eau Saine / non polluée' },
        { id: 'ePol', label: 'Eau d\'Effluent très polluée' }
      ],
      rows: [
        {
          id: 'row-1',
          statement: 'Valeur de DCO supérieure à 120 milligrammes par litre d\'eau.',
          expectedChoices: { 'eSaine': false, 'ePol': true }
        },
        {
          id: 'row-2',
          statement: 'Valeur de DBO5 inférieure à 2 milligrammes de dioxygène par litre.',
          expectedChoices: { 'eSaine': true, 'ePol': false }
        },
        {
          id: 'row-3',
          statement: 'Taux élevé d\'oxygène dissous résidant proche de la saturation maximum.',
          expectedChoices: { 'eSaine': true, 'ePol': false }
        }
      ]
    },
    {
      id: 'u4-g3-q10',
      type: 'qcm',
      title: 'Épuration des eaux usées (Station STEP)',
      instruction: 'Quelle étape des stations d\'épuration (STEP) permet d\'éliminer la pollution organique en exploitant des micro-organismes ?',
      explanation: 'C\'est le traitement biologique (souvent par boues activées ou lits bactériens) qui utilise des bactéries aérobies pour détruire les polluants organiques dissous.',
      explanationAr: 'تعتمد المعالجة البيولوجية (Traitement biologique) في محطات تصفية المياه العادمة (STEP) على استخدام البكتيريا الهوائية لتفكيك المادة العضوية المذابة.',
      options: [
        'Le dégrillage initial des solides.',
        'La filtration mécanique des sables.',
        'La décantation finale physique.',
        'Le traitement biologique secondaire par boues activées aérobies.'
      ],
      correctIndices: [3],
      allowMultiple: false
    }
  ],

  // Group 4: Énergie Nucléaire et Déchets Radioactifs
  [
    {
      id: 'u4-g4-q1',
      type: 'qcm',
      title: 'Définition d\'un isotope radioactif',
      instruction: 'Qu\'est-ce qu\'un isotope instable radioactif ?',
      explanation: 'Un isotope radioactif possède un noyau instable à cause d\'un excès de neutrons ou de protons. Il se désintègre spontanément en émettant des rayonnements sous forme d\'énergie.',
      explanationAr: 'النظير المشع هو نواة ذرة غير مستقرة بسبب فرط عدد النيترونات أو البروتونات، تتفتت تلقائياً مصدرة إشعاعات طاقية.',
      options: [
        'Un atome de carbone stable.',
        'Un noyau instable qui se désintègre pour acquérir la stabilité en émettant des rayonnements énergétiques.',
        'Une molécule de lixiviat.',
        'Un muscle contracté.'
      ],
      correctIndices: [1],
      allowMultiple: false
    },
    {
      id: 'u4-g4-q2',
      type: 'qcm',
      title: 'La demi-vie (Période radioactive)',
      instruction: 'Définissez avec exactitude la notion de Demi-vie (T ou t1/2) en physique nucléaire et écotoxicologie.',
      explanation: 'La demi-vie (ou période radioactive) est la durée requise pour la désintégration spontanée de la moitié (50%) des noyaux radioactifs présents à l\'origine dans un échantillon.',
      explanationAr: 'عمر النصف (t1/2) هو المدة الزمنية اللازمة لتفتت ونقص نصف نوى العينة المشعة الأولية.',
      options: [
        'La durée totale de vie de l\'atome.',
        'Le temps requis pour diviser par deux la température du réacteur.',
        'La durée au bout de laquelle la moitié des noyaux radioactifs d\'un échantillon se désintègrent naturellement.',
        'La moitié de la vie d\'une cellule diploïde.'
      ],
      correctIndices: [2],
      allowMultiple: false
    },
    {
      id: 'u4-g4-q3',
      type: 'qcm',
      title: 'Les différents rayonnements (Alpha, Bêta, Gamma)',
      instruction: 'Quel est le rayonnement d\'ondes électromagnétiques le plus pénétrant, dangereux et capable de traverser le corps humain ?',
      explanation: 'Le rayonnement Gamma (γ) est une onde électromagnétique de haute énergie extrêmement pénétrante, capable de traverser le plomb et altérant l\'ADN. Les rayons Alpha (α) et Bêta (β) sont des flux de particules peu pénétrants.',
      explanationAr: 'إشعاع غاما (γ) موجة كهرومغناطيسية ذات طاقة عالية وقدرة اختراق هائلة تخترق الرصاص، بينما تعتبر جسيمات ألفا وبيتا ضعيفة الاختراق.',
      options: [
        'Le rayonnement Alpha (noyaux d\'Hélium).',
        'Le rayonnement Bêta (flux d\'électrons/positrons).',
        'Le rayonnement Gamma (γ) de nature électromagnétique hautement énergétique.',
        'Le rayonnement infrarouge.'
      ],
      correctIndices: [2],
      allowMultiple: false
    },
    {
      id: 'u4-g4-q4',
      type: 'dropdown',
      title: 'Dangers sur l\'ADN et mutations',
      instruction: 'Complétez l\'analyse toxicologique de l\'irradiation des tissus.',
      explanation: 'Les radiations ionisantes arrachent des électrons, brisent les brins d\'ADN, provoquant des mutations aléatoires pouvant déclencher des cancers ou des malformations.',
      explanationAr: 'تسبب الإشعاعات المؤينة تكسيراً في جزيئات ADN وخلق طفرات جينية غير طبيعية قد تؤدي للسرطان والتشوهات الخلقية.',
      textWithPlaceholders: 'Les rayonnements ionisants pénètrent dans les cellules et provoquent des altérations de l\'[drop-0] par cassures de liaisons chimiques. Ces altérations constituent des [drop-1] génétiques qui dans les cellules somatiques favorisent l\'apparition de [drop-2] (multiplication anarchique).',
      dropdowns: {
        'drop-0': {
          id: 'drop-0',
          options: ['ADN double brin', 'myofibrille simple', 'membrane externe'],
          correctValue: 'ADN double brin'
        },
        'drop-1': {
          id: 'drop-1',
          options: ['mutations', 'divisions régulières', 'réplications saines'],
          correctValue: 'mutations'
        },
        'drop-2': {
          id: 'drop-2',
          options: ['cancers', 'parois squelettiques', 'mitochondries saines'],
          correctValue: 'cancers'
        }
      }
    },
    {
      id: 'u4-g4-q5',
      type: 'matching',
      title: 'Le stockage des déchets nucléaires',
      instruction: 'Reliez chaque classe de déchets nucléaires standardisés à son mode d\'entreposage réglementaire prescrit.',
      explanation: 'Les déchets à haute activité (HA) à vie longue sont stockés en couches géologiques profondes stables.',
      explanationAr: 'تخزن النفايات ذات النشاط الإشعاعي المرتفع وعمر النصف الطويل (HA) في طبقات جيولوجية عميقة ومستقرة لمنع تسرب الإشعاعات.',
      leftItems: [
        { id: 'l1', text: 'Déchets de classe A (FA-VC)' },
        { id: 'l2', text: 'Déchets de classe C (HA-VL)' },
        { id: 'l3', text: 'Vitrification solide' },
        { id: 'l4', text: 'Barrière d\'argile de bentonite' }
      ],
      rightItems: [
        { id: 'r1', text: 'Matériau naturel étanche utilisé pour sceller les galeries d\'entreposage profond se gonflant à l\'eau.' },
        { id: 'r2', text: 'Faible activité radioactive et à vie courte, stockés en surface dans des colis de béton scellés.' },
        { id: 'r3', text: 'Forte activité thermique et à vie longue (milliers d\'années), nécessitant un confinement géologique profond à 500 m.' },
        { id: 'r4', text: 'Technique d\'immobilisation chimique des isotopes dans une matrice de verre de silice indissoluble.' }
      ],
      correctPairs: {
        'l1': 'r2',
        'l2': 'r3',
        'l3': 'r4',
        'l4': 'r1'
      }
    },
    {
      id: 'u4-g4-q6',
      type: 'qcm',
      title: 'Fission vs Fusion nucléaire',
      instruction: 'Qu\'est-ce que le processus de fission industrielle exploitée dans les réacteurs civils ?',
      explanation: 'La fission consiste à projeter un neutron sur un noyau lourd instable (comme l\'Uranium 235), provoquant sa rupture en deux noyaux plus légers avec forte libération d\'énergie thermique et de neutrons.',
      explanationAr: 'الانشطار النووي (Fission) هو ضرب نواة ثقيلة (كاليورانيوم 235) بنيترون لتنشطر لنواتين خفيفتين محررة طاقة حرارية هائلة.',
      options: [
        'L\'assemblage de deux noyaux d\'hydrogène.',
        'L\'explosion chimique de l\'azote.',
        'La cassure d\'un noyau lourd instable sous l\'impact d\'un neutron pour former des noyaux plus légers de fission.',
        'La fusion des chloroplastes.'
      ],
      correctIndices: [2],
      allowMultiple: false
    },
    {
      id: 'u4-g4-q7',
      type: 'qcm',
      title: 'Tchernobyl et Fukushima',
      instruction: 'Quel est l\'impact immédiat de la fusion accidentelle du cœur d\'un réacteur nucléaire sur l\'environnement ?',
      explanation: 'Une fusion accidentelle détruit les confinements, dispersant massivement des nuages d\'isotopes radioactifs volatiles (Iode 131, Césium 137) emportés par le vent, contaminant les écosystèmes et exposant les populations.',
      explanationAr: 'تسبب حوادث الانفجارات النووية تسرباً كثيفاً وسريعاً لغبار العناصر المشعة (كاليود والسيليوم) في الهواء والماء والتربة.',
      options: [
        'L\'apparition instantanée de pluies acides vertes.',
        'La dispersion incontrôlée de radioisotopes volatils hautement polluants transportés par les vents et la pluie.',
        'La solidification du magma profond.',
        'La neutralisation mondiale de l\'effet de serre.'
      ],
      correctIndices: [1],
      allowMultiple: false
    },
    {
      id: 'u4-g4-q8',
      type: 'qcm',
      title: 'L\'uranium-235',
      instruction: 'Pourquoi l\'Uranium-235 est-il indispensable au fonctionnement des centrales ?',
      explanation: 'L\'Uranium-235 est le seul isotope naturel de l\'uranium qui soit fissile (sa collision avec un neutron déclenche une fission auto-entretenue en chaîne).',
      explanationAr: 'يعتبر اليورانيوم 235 النظير الطبيعي القابل للانشطار النووي داخل محطات إنتاج الكهرباء.',
      options: [
        'Car il est liquide à température ambiante.',
        'Car c\'est un atome d\'hydrogène fusible.',
        'Car c\'est un noyau fissile capable de propager une réaction en chaîne thermique.',
        'Car il mange l\'acide carbonique.'
      ],
      correctIndices: [2],
      allowMultiple: false
    },
    {
      id: 'u4-g4-q9',
      type: 'table',
      title: 'Stockage provisoire vs définitif',
      instruction: 'Aidez la commission nucléaire à valider les zones selon l\'activité de décomposition.',
      explanation: 'Les piscines de refroidissement stabilisent temporairement le combustible usé à fort dégagement thermique. Le stockage à 500m sous terre abrite les déchets vitrifiés définitifs.',
      explanationAr: 'تستعمل أحواض التبريد لتخزين مؤقت للوقود المستعمل المرتفع الحرارة، بينما يستعمل طمر 550 متر تحت الرصف لتخزين نهائي للنفايات الطويلة العمر.',
      columns: [
        { id: 'stocProv', label: 'Espace de Stockage Provisoire' },
        { id: 'stocDefi', label: 'Espace de Stockage Définitif VL' }
      ],
      rows: [
        {
          id: 'row-1',
          statement: 'Piscines d\'eau mitoyennes au cœur du réacteur nucléaire absorbant le flux de chaleur résiduelle.',
          expectedChoices: { 'stocProv': true, 'stocDefi': false }
        },
        {
          id: 'row-2',
          statement: 'Couche géologique stable profonde au cœur d\'une formation argileuse imperméable hermétique.',
          expectedChoices: { 'stocProv': false, 'stocDefi': true }
        },
        {
          id: 'row-3',
          statement: 'Bâtiment d\'entreposage ventilé des colis en surface pour décroissance initiale de 50 ans.',
          expectedChoices: { 'stocProv': true, 'stocDefi': false }
        }
      ]
    },
    {
      id: 'u4-g4-q10',
      type: 'qcm',
      title: 'L\'unité sievert (Sv)',
      instruction: 'Que mesure scientifiquement l\'unité Sievert (Sv) d\'exposition radiative ?',
      explanation: 'Le Sievert (Sv) (et le millisievert mSv) mesure l\'impact biologique néfaste (la dose équivalente) d\'un rayonnement radioactif absorbé sur les tissus vivants.',
      explanationAr: 'تقاس جرعة الإشعاع الممتص والمسبب لضرر بيولوجي على الأنسجة الحية بوحدة السيفرت (Sv).',
      options: [
        'Le nombre de neutrons circulant par seconde.',
        'Le poids de l\'Uranium résiduel.',
        'La dose équivalente mesurant l\'effet biologique des radiations sur l\'organisme humain.',
        'La vitesse du vent atmosphérique.'
      ],
      correctIndices: [2],
      allowMultiple: false
    }
  ],

  // Group 5: Choix Écologiques, Énergies Renouvelables et Santé
  [
    {
      id: 'u4-g5-q1',
      type: 'qcm',
      title: 'L\'empreinte carbone',
      instruction: 'Qu\'évalue l\'empreinte carbone individuelle ou industrielle ?',
      explanation: 'L\'empreinte carbone évalue la quantité totale de gaz à effet de serre (exprimée en équivalent CO2) émise directement ou indirectement par une activité humaine.',
      explanationAr: 'تقيم البصمة الكربونية (Empreinte carbone) إجمالي الغازات الدفيئة المطروحة من طرف كائن أو مؤسسة مقاسة بمكافئ CO2.',
      options: [
        'Le charbon restant au fond des mines.',
        'L\'accumulation de poussières de carbone sur les poumons.',
        'L\'émission totale de gaz à effet de serre (GES) quantifiée en équivalent CO2 sur une année.',
        'La vitesse de photosynthèse végétale.'
      ],
      correctIndices: [2],
      allowMultiple: false
    },
    {
      id: 'u4-g5-q2',
      type: 'qcm',
      title: 'Énergie solaire photovoltaïque',
      instruction: 'Comment fonctionne une cellule solaire photovoltaïque d\'une centrale comme Noor-Ouarzazate au Maroc ?',
      explanation: 'Les cellules solaires photovoltaïques convertissent l\'énergie lumineuse des photons solaires directement en électricité de tension grâce à des matériaux semi-conducteurs (comme le silicium).',
      explanationAr: 'تحول الخلايا الفوتوفولطية (مركب نور بورزازات بالمغرب) أشعة الشمس واللقاطات الضوئية مباشرة إلى طاقة كهربائية عبر ألواح السيليسيوم.',
      options: [
        'En brûlant l\'hydrogène sous l\'eau.',
        'En convertissant l\'énergie lumineuse des photons directement en électricité continue grâce à un semi-conducteur (silicium).',
        'En créant des réactions de fission atomique d\'uranium.',
        'En compressant l\'effet de serre.'
      ],
      correctIndices: [1],
      allowMultiple: false
    },
    {
      id: 'u4-g5-q3',
      type: 'qcm',
      title: 'Énergie Éolienne',
      instruction: 'Quelle conversion d\'énergie réalise un aérogénérateur (éolienne) ?',
      explanation: 'L\'éolienne convertit l\'énergie cinétique du vent en énergie mécanique de rotation, actionnant un alternateur qui produit de l\'énergie électrique renouvelable.',
      explanationAr: 'تحول العنافة الريحية (Éolienne) الطاقة الحركية للرياح إلى طاقة ميكانيكية دورانية ثم كهربائية بواسطة منوب.',
      options: [
        'Thermique en atomique.',
        'Cinétique cinétique en chimique.',
        'L\'énergie cinétique du vent en énergie mécanique puis électrique propre.',
        'La photosynthèse en contraction.'
      ],
      correctIndices: [2],
      allowMultiple: false
    },
    {
      id: 'u4-g5-q4',
      type: 'qcm',
      title: 'La biomasse comme combustible',
      instruction: 'Pourquoi dit-on que la combustion de biomasse comme le bois est neutre en émission nette de CO2 si elle en rejette ?',
      explanation: 'La combustion de biomasse est considérée neutre car le CO2 rejeté correspond exactement à la quantité de CO2 absorbée par la plante durant sa photosynthèse active au cours de sa vie.',
      explanationAr: 'تعتبر الطاقة الحيوية (الخشب والكتلة الحية) محايدة كربونياً لأن كمية CO2 المطروحة عند الحرق عادلتها النباتات مسبقاً بعملية التركيب الضوئي.',
      options: [
        'Car elle ne dégage aucun gaz de combustion.',
        'Car le CO2 émis provient du carbone nouvellement absorbé par photosynthèse, préservant le cycle fermé du carbone.',
        'Car le bois absorbe de l\'uranium au sol.',
        'On ne le dit jamais.'
      ],
      correctIndices: [1],
      allowMultiple: false
    },
    {
      id: 'u4-g5-q5',
      type: 'dropdown',
      title: 'Transition vers l\'économie circulaire',
      instruction: 'Complétez la définition de notre modèle de production moderne.',
      explanation: 'L\'économie linéaire "produire, consommer, jeter" est remplacée par l\'économie circulaire "conception, recyclage, réutilisation" visant un objectif zéro déchet ultime.',
      explanationAr: 'يتم استبدال الاقتصاد الخطي (Linear) المعتمد على "الإنتاج، الاستهلاك، الرمي" بنمط الاقتصاد الدائري (Circulaire) المعتمد على تدوير وتثمين الموارد لصفر نفايات.',
      textWithPlaceholders: 'La transition écologique vise à remplacer l\'économie linéaire traditionnelle par l\'économie [drop-0]. Ce modèle prône la durabilité, le surcyclage des résidus et le [drop-1] réduisant l\'extraction de [drop-2] fossiles épuisables.',
      dropdowns: {
        'drop-0': {
          id: 'drop-0',
          options: ['circulaire fermée', 'de fission rapide', 'dégradable'],
          correctValue: 'circulaire fermée'
        },
        'drop-1': {
          id: 'drop-1',
          options: ['recyclage', 'tri manuel obligatoire', 'brûlage'],
          correctValue: 'recyclage'
        },
        'drop-2': {
          id: 'drop-2',
          options: ['matières premières', 'lixiviats', 'protons'],
          correctValue: 'matières premières'
        }
      }
    },
    {
      id: 'u4-g5-q6',
      type: 'qcm',
      title: 'La valorisation par pyrolyse',
      instruction: 'Expliquez ce qu\'est le traitement thermique par Pyrolyse des résidus synthétiques.',
      explanation: 'La pyrolyse est la décomposition thermique de matières organiques sèches (comme le plastique ou les vieux pneus) sous de très hautes températures en l\'absence stricte d\'oxygène, produisant du gaz de synthèse combustible ou de l\'huile.',
      explanationAr: 'التفكك الحراري (Pyrolyse) هو تعريض المواد العضوية (كالبلاستيك) لحرارة مفرطة في غياب الأكسجين لإنتاج زيوت غازات صناعية طاقية.',
      options: [
        'Une dissolution complète dans un bain d\'acide fort.',
        'La dégradation thermique forcée de solides hautement dégradés à haute température en l\'absence stricte d\'O2.',
        'Un broyage mécanique simple.',
        'Le dessalement par membranes.'
      ],
      correctIndices: [1],
      allowMultiple: false
    },
    {
      id: 'u4-g5-q7',
      type: 'qcm',
      title: 'Le bioéthanol',
      instruction: 'Comment est produit de façon écologique le biocarburant "Bioéthanol" ajouté à nos carburants verts ?',
      explanation: 'Le bioéthanol est issu de la fermentation alcoolique anaérobie des glucides (sucres et amidon) des réserves de canne à sucre ou betteraves par des levures sélectionnées, suivi d\'une distillation.',
      explanationAr: 'ينتج البيوإيثانول (Bioéthanol) عن تخمر كحولي لسكريات ونشويات النباتات (شريط قصب السكر أو الذرة) المقطر بعد ذلك.',
      options: [
        'Par fracturation du pétrole brut.',
        'Par fermentation alcoolique anaérobie de substrats agricoles riches en sucres (canne à sucre, maïs, betterave) suivie de distillation.',
        'Par compactage thermodynamique.',
        'Par fusion du biogaz.'
      ],
      correctIndices: [1],
      allowMultiple: false
    },
    {
      id: 'u4-g5-q8',
      type: 'matching',
      title: 'Santé respiratoire et polluants urbains',
      instruction: 'Associez chaque maladie respiratoire ou agent polluant urbain à sa définition clinique.',
      explanation: 'L\'amiante provoque des pathologies graves de la plèvre (mésothéliome). Les particules fines altèrent les alvéoles.',
      explanationAr: 'يسبب غبار الأميانت (Amiante) تليفات سرطانية حادة في غشاء الجنب (ميسوثيليوم الرئة). وتتغلغل الدقائق المعلقة في شعيبات الهواء.',
      leftItems: [
        { id: 'l1', text: 'Amiante (Fibres minérales)' },
        { id: 'l2', text: 'Particules PM2.5' },
        { id: 'l3', text: 'Ozone troposphérique' },
        { id: 'l4', text: 'Monoxyde de carbone (CO)' }
      ],
      rightItems: [
        { id: 'r1', text: 'Dégagé par les mauvaises combustions des chauffe-eaux, se fixant à l\'hémoglobine provoquant l\'asphyxie rapide.' },
        { id: 'r2', text: 'Micro-fibres cancérigènes inhalées détruisant l\'élasticité pulmonaire provoquant le cancer de la plèvre (Mésothéliome).' },
        { id: 'r3', text: 'Micropoussières invisibles s\'immisçant profondément au cœur des cavités alvéolaires de la barrière sanguine.' },
        { id: 'r4', text: 'Gaz hautement irritant se formant au niveau du sol en été provoquant de l\'asthme oculaire et respiratoire.' }
      ],
      correctPairs: {
        'l1': 'r2',
        'l2': 'r3',
        'l3': 'r4',
        'l4': 'r1'
      }
    },
    {
      id: 'u4-g5-q9',
      type: 'table',
      title: 'Sources d\'énergie : Renouvelable vs Fossile',
      instruction: 'Classez les différentes sources d\'énergie disponibles.',
      explanation: 'L\'énergie nucléaire à base d\'Uranium et l\'énergie pétrolière sont non-renouvelables et émettrices ou polluantes, tandis que l\'hydroélectricité exploitée par les barrages hydrauliques est entièrement propre et renouvelable.',
      explanationAr: 'تعتبر الطاقة المائية الناتجة عن السدود طاقة نظيفة ومتجددة، بينما يعتبر الفحم والبترول طاقة أحفورية قابلة للنفاد ومحملة بـ CO2.',
      columns: [
        { id: 'enRen', label: 'Énergie Renouvelable (Propre)' },
        { id: 'enFos', label: 'Énergie de source Fossile/Épuisable' }
      ],
      rows: [
        {
          id: 'row-1',
          statement: 'Hydroélectricité motrice tirée du mouvement de l\'eau des barrages de retenue hydrauliques.',
          expectedChoices: { 'enRen': true, 'enFos': false }
        },
        {
          id: 'row-2',
          statement: 'Houille minérale solide (Charbon de terre brûlé dans les centrales thermiques classiques).',
          expectedChoices: { 'enRen': false, 'enFos': true }
        },
        {
          id: 'row-3',
          statement: 'Énergie géothermique captant les gradients de chaleur interne de la lithosphère.',
          expectedChoices: { 'enRen': true, 'enFos': false }
        }
      ]
    },
    {
      id: 'u4-g5-q10',
      type: 'qcm',
      title: 'Effet de la bioaccumulation',
      instruction: 'Qu\'étudie la bioaccumulation des polluants chimiques (mercure, dioxine) le long de la pyramide d\'un écosystème ?',
      explanation: 'La bioaccumulation correspond à l\'accumulation progressive de métaux lourds à des concentrations croissantes en montant chaque échelon de la chaîne alimentaire : les grands prédateurs du sommet présentent la charge toxique maximale.',
      explanationAr: 'يعبر التراكم البيولوجي (Bioaccumulation) عن زيادة تركيز المواد السامة (الزئبق والرصاص) تدريجياً عبر الانتقال من حلقة غذائية لحلقة أعلى.',
      options: [
        'La dépollution naturelle des rivières.',
        'La concentration croissante de contaminants indégradables le long de la structure trophique (les prédateurs du sommet accumulant les doses critiques).',
        'Le recyclage des briques de verre.',
        'La construction du sarcomère musculaire.'
      ],
      correctIndices: [1],
      allowMultiple: false
    }
  ]
];
