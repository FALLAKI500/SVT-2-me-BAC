import { SVTModule } from '../types';

export const staticModules: SVTModule[] = [
  {
    id: 'unite-1',
    title: 'Consommation de la matière organique et flux d\'énergie',
    titleAr: 'استهلاك المادة العضوية وتدفق الطاقة',
    description: 'ATP, glycolyse, mitochondrie, cycle de Krebs, respiration et fermentation cellulaire, contraction musculaire.',
    color: 'from-emerald-600 to-green-700',
    questions: [
      {
        id: 'u1-q1',
        type: 'qcm',
        title: 'Bilan énergétique de la glycolyse',
        instruction: 'Choisissez la bonne réponse concernant les étapes de la glycolyse dans l\'hyaloplasme.',
        explanation: 'La glycolyse est une étape commune à la respiration et à la fermentation. Elle se déroule dans l\'hyaloplasme et produit 2 ATP et 2 NADH,H+ à partir d\'une molécule de glucose.',
        explanationAr: 'انحلال الكليكوز مرحلة مشتركة بين التنفس والتخمر، تتم في الجبلة الشفافة وتنتج جزيئتي ATP وجزيئتي NADH,H+ من جزيء كليكوز واحد.',
        options: [
          'Elle produit 36 ATP et 2 acides pyruviques.',
          'Elle se déroule dans la matrice de la mitochondrie.',
          'Elle produit 2 ATP et 2 NADH,H+ par molécule de glucose.',
          'Elle nécessite obligatoirement la présence d\'oxygène.'
        ],
        correctIndices: [2],
        allowMultiple: false
      },
      {
        id: 'u1-q2',
        type: 'dropdown',
        title: 'Rôles des compartiments mitochondriaux',
        instruction: 'Complétez le texte descriptif ci-dessous à l\'aide des listes déroulantes.',
        explanation: 'Le cycle de Krebs a lieu dans la matrice chez les eucaryotes, tandis que la phosphorylation de l\'ADP en ATP au niveau des sphères pédonculées s\'effectue à travers la membrane interne.',
        explanationAr: 'تتم دورة كريبس داخل الماتريس، بينما تتم فسفرة ADP إلى ATP على مستوى الكرات ذات الشمراخ عبر الغشاء الداخلي للميتوكوندري.',
        textWithPlaceholders: 'La respiration se déroule en partie dans la mitochondrie. La décarbonisation de l\'acide pyruvique se produit dans la [drop-0], tandis que les réactions de la chaîne respiratoire et la synthèse d\'ATP via les [drop-1] se produisent au niveau de la [drop-2].',
        dropdowns: {
          'drop-0': {
            id: 'drop-0',
            options: ['matrice mitochondriale', 'membrane externe', 'crête mitochondriale'],
            correctValue: 'matrice mitochondriale'
          },
          'drop-1': {
            id: 'drop-1',
            options: ['pores nucléaires', 'sphères pédonculées', 'canaux calciques'],
            correctValue: 'sphères pédonculées'
          },
          'drop-2': {
            id: 'drop-2',
            options: ['membrane interne', 'membrane externe', 'matrice'],
            correctValue: 'membrane interne'
          }
        }
      },
      {
        id: 'u1-q3',
        type: 'matching',
        title: 'Couplage énergétique de la contraction musculaire',
        instruction: 'Reliez chaque terme de la contraction musculaire à sa description ou son rôle exact (Ajwiba Mrbota).',
        explanation: 'Les filaments fins d\'actine et épais de myosine glissent grâce à l\'hydrolyse d\'ATP déclenchée par l\'arrivée du Ca2+ libéré par le réticulum sarcoplasmique.',
        explanationAr: 'تنزلق خييطات الأكتين الدقيقة والميوزين السميكة بفضل حلمأة ATP المحفزة بوصول أيونات الكالسيوم Ca2+ المحررة من الشبكة الساركوبلاسمية.',
        leftItems: [
          { id: 'l1', text: 'Actine' },
          { id: 'l2', text: 'Myosine' },
          { id: 'l3', text: 'Calcium (Ca2+)' },
          { id: 'l4', text: 'Réticulum Sarcoplasmique' }
        ],
        rightItems: [
          { id: 'r1', text: 'Se lie à la troponine pour libérer les sites de fixation.' },
          { id: 'r2', text: 'Filaments fins constitués également de troponine et tropomyosine.' },
          { id: 'r3', text: 'Filaments épais possédant des têtes avec activité ATPasique.' },
          { id: 'r4', text: 'Organite de stockage et de libération rapide des ions Ca2+.' }
        ],
        correctPairs: {
          'l1': 'r2',
          'l2': 'r3',
          'l3': 'r1',
          'l4': 'r4'
        }
      },
      {
        id: 'u1-q4',
        type: 'table',
        title: 'Comparaison entre Respiration et Fermentation',
        instruction: 'Complétez le tableau comparatif en cochant la ou les métabolismes correspondants pour chaque propriété.',
        explanation: 'La respiration est un processus complet d\'oxydation aérobique (rendement élevé: 36 ou 38 ATP), tandis que la fermentation est une oxydation incomplète anaérobique (rendement faible: 2 ATP) produisant un résidu organique riche en énergie.',
        explanationAr: 'التنفس ظاهرة هدم كلي وهوائي (مردودية عالية: 36 أو 38 ATP)، في حين أن التخمر هدم جزئي لاهوائي (مردودية ضعيفة: 2 ATP) ينتج عنه حثالة عضوية غنية بالطاقة.',
        columns: [
          { id: 'resp', label: 'Respiration Cellulaire' },
          { id: 'ferm', label: 'Fermentation (Lactique/Alcoolique)' }
        ],
        rows: [
          {
            id: 'row-1',
            statement: 'Nécessite impérativement le dioxygène (O2) comme accepteur final.',
            expectedChoices: { 'resp': true, 'ferm': false }
          },
          {
            id: 'row-2',
            statement: 'Se déroule entièrement dans l\'hyaloplasme.',
            expectedChoices: { 'resp': false, 'ferm': true }
          },
          {
            id: 'row-3',
            statement: 'Produit un résidu organique (acide lactique ou éthanol) encore riche en énergie.',
            expectedChoices: { 'resp': false, 'ferm': true }
          },
          {
            id: 'row-4',
            statement: 'Présente une oxydation complète du glucose avec production importante de 36 à 38 ATP.',
            expectedChoices: { 'resp': true, 'ferm': false }
          }
        ]
      }
    ]
  },
  {
    id: 'unite-2',
    title: 'Nature et expression du matériel génétique',
    titleAr: 'طبيعة وآلية تعبير المادة الوراثية',
    description: 'Structure de l\'ADN, mitose, cycle cellulaire, réplication semi-conservative, transcription de l\'ARNm et traduction des protéines.',
    color: 'from-blue-600 to-indigo-700',
    questions: [
      {
        id: 'u2-q1',
        type: 'qcm',
        title: 'La mitose et la conservation de l\'information génétique',
        instruction: 'Cochez la proposition correcte concernant le déroulement des phases de la mitose.',
        explanation: 'Au cours de l\'anaphase, les chromatides sœurs se séparent par rupture du centromère et migrent vers les pôles opposés de la cellule, garantissant une répartition équitable de l\'ADN.',
        explanationAr: 'خلال طور الصعود، تنفصل الصبيغيات الشقيقة بعد انقسام الجزء المركزي وتهاجر نحو قطبي الخلية المتقابلين، مما يضمن توزيعاً متساوياً للحمض النووي ADN.',
        options: [
          'La réplication de l\'ADN s\'effectue pendant la métaphase de la mitose.',
          'La prophase est caractérisée par la formation de l\'enveloppe nucléaire.',
          'Pendant l\'anaphase, il y a séparation des chromatides sœurs par rupture du centromère.',
          'La télophase se termine par la disparition totale des chromosomes.'
        ],
        correctIndices: [2],
        allowMultiple: false
      },
      {
        id: 'u2-q2',
        type: 'dropdown',
        title: 'La Bio-synthèse des Protéines (Dogme central)',
        instruction: 'Sélectionnez les termes appropriés pour résumer l\'expression génique.',
        explanation: 'La transcription a lieu dans le noyau (chez les eucaryotes) par l\'ARN polymérase, et la traduction se déroule dans le cytoplasme au niveau des ribosomes.',
        explanationAr: 'تتم عملية النسخ في النواة بواسطة أنزيم ARN polymérase، وتتم عملية الترجمة في السيتوبلازم على مستوى الريبوزومات.',
        textWithPlaceholders: 'Le flux d\'information s\'organise ainsi : l\'organisme transcrit l\'ADN en ARNm grâce à l\'enzyme [drop-0] dans le [drop-1]. Cet ARNm est ensuite traduit dans le cytoplasme par les [drop-2] qui assemblent des [drop-3] selon le code génétique.',
        dropdowns: {
          'drop-0': {
            id: 'drop-0',
            options: ['ADN Polymérase', 'ARN Polymérase', 'Hélicase'],
            correctValue: 'ARN Polymérase'
          },
          'drop-1': {
            id: 'drop-1',
            options: ['Noyau', 'Cytoplasme', 'Réticulum'],
            correctValue: 'Noyau'
          },
          'drop-2': {
            id: 'drop-2',
            options: ['Ribosomes', 'Mitochondries', 'Centrosomes'],
            correctValue: 'Ribosomes'
          },
          'drop-3': {
            id: 'drop-3',
            options: ['nucléotides', 'lipides', 'acides aminés'],
            correctValue: 'acides aminés'
          }
        }
      },
      {
        id: 'u2-q3',
        type: 'matching',
        title: 'Complémentarité et réplication de l\'ADN',
        instruction: 'Associez chaque élément du processus de réplication et de codage à son partenaire ou sa fonction correspondante.',
        explanation: 'L\'Adénine se lie à la Thymine par 2 liaisons hydrogène, la Guanine à la Cytosine par 3 liaisons. L\'ADN Polymérase synthétise de façon semi-conservative.',
        explanationAr: 'ترتبط الأدينين بالثيمين برابطتي هيدروجين، والغوانين بالسيتوزين بثلاث روابط. يركب أنزيم ADN Polymérase اللولب الجديد بطريقة نصف محافظة.',
        leftItems: [
          { id: 'l1', text: 'Adénine (A)' },
          { id: 'l2', text: 'ADN Polymérase' },
          { id: 'l3', text: 'Hélicase' },
          { id: 'l4', text: 'Uracile (U)' }
        ],
        rightItems: [
          { id: 'r1', text: 'Enzyme qui sépare les deux brins d\'ADN en rompant les liaisons hydrogène.' },
          { id: 'r2', text: 'S\'associe spécifiquement à la Thymine (T) dans la molécule d\'ADN.' },
          { id: 'r3', text: 'Enzyme de polymérisation des nucléotides dans le sens 5\' vers 3\'.' },
          { id: 'r4', text: 'Base azotée spécifique de l\'ARN remplaçant la Thymine.' }
        ],
        correctPairs: {
          'l1': 'r2',
          'l2': 'r3',
          'l3': 'r1',
          'l4': 'r4'
        }
      },
      {
        id: 'u2-q4',
        type: 'table',
        title: 'Comparaison ADN vs ARN',
        instruction: 'Classez les caractéristiques structurales fondamentales des acides nucléiques.',
        explanation: 'L\'ADN possède un désoxyribose, la thymine et a une structure double brin. L\'ARN possède un ribose, l\'uracile et est généralement simple brin.',
        explanationAr: 'يحتوي ADN على سكر ريبوز ناقص أكسجين، وثيمين وله بنية لولب مضاعف. يحتوي ARN على ريبوز، ويوراسيل وهو لولب مفرد.',
        columns: [
          { id: 'adn', label: 'Acide Désoxyribonucléique (ADN)' },
          { id: 'arn', label: 'Acide Ribonucléique (ARN)' }
        ],
        rows: [
          {
            id: 'row-1',
            statement: 'Constitué d\'un sucre de type Désoxyribose.',
            expectedChoices: { 'adn': true, 'arn': false }
          },
          {
            id: 'row-2',
            statement: 'Renferme de l\'Uracile à la place de la Thymine.',
            expectedChoices: { 'adn': false, 'arn': true }
          },
          {
            id: 'row-3',
            statement: 'Prend généralement la forme d\'un simple brin (monocaténaire).',
            expectedChoices: { 'adn': false, 'arn': true }
          },
          {
            id: 'row-4',
            statement: 'Structure hélicoïdale en double brin (bicaténaire).',
            expectedChoices: { 'adn': true, 'arn': false }
          }
        ]
      }
    ]
  },
  {
    id: 'unite-3',
    title: 'Transfert de l\'information génétique par reproduction sexuée',
    titleAr: 'انتقال الخبر الوراثي عبر التوالد الجنسي والقوانين الإحصائية',
    description: 'La méiose (mécanismes de brassage chromosomique), la fécondation, et les lois statistiques de Mendel.',
    color: 'from-teal-600 to-emerald-700',
    questions: [
      {
        id: 'u3-q1',
        type: 'qcm',
        title: 'Méiose et brassage génétique',
        instruction: 'Choisissez l\'affirmation exacte concernant le brassage intra-chromosomique.',
        explanation: 'Le brassage intra-chromosomique (crossing-over) a lieu lors de la prophase I de la méiose, où des échanges de segments se produisent entre chromatides non-sœurs de chromosomes homologues.',
        explanationAr: 'يتم التخليط ضمصبغي (العبور الصبغي Crossing-over) خلال التمهيدية I من الانقسام الاختزالي، حيث يحدث تبادل قطع صبغية بين الصبيغيات غير الشقيقة للصبغيات المتماثلة.',
        options: [
          'Il a lieu lors de l\'anaphase II de la méiose.',
          'Il s\'agit de la séparation aléatoire des chromosomes paternels et maternels.',
          'Il se produit en Prophase I par croisement (crossing-over) entre chromosomes homologues.',
          'Il ne concerne que les chromosomes sexuels (gonosomes).'
        ],
        correctIndices: [2],
        allowMultiple: false
      },
      {
        id: 'u3-q2',
        type: 'dropdown',
        title: 'Bilan de la Méiose',
        instruction: 'Complétez le résumé décrivant les deux divisions successives de la méiose.',
        explanation: 'La méiose comprend une division réductionnelle (séparation des chromosomes homologues) et une division équationnelle (séparation des chromatides).',
        explanationAr: 'يتكون الانقسام الاختزالي من انقسام منصف (انفصال الصبغيات المتماثلة) وانقسام تعادلي (انفصال الصبيغيات).',
        textWithPlaceholders: 'La méiose permet de passer d\'une cellule mère diploïde (2n) à quatre cellules filles [drop-0] (n). La première division, dite [drop-1], sépare les [drop-2], tandis que la deuxième division, dite [drop-3], sépare les chromatides sœurs.',
        dropdowns: {
          'drop-0': {
            id: 'drop-0',
            options: ['haploïdes', 'tétraploïdes', 'diploïdes'],
            correctValue: 'haploïdes'
          },
          'drop-1': {
            id: 'drop-1',
            options: ['réductionnelle', 'équationnelle', 'mitotique'],
            correctValue: 'réductionnelle'
          },
          'drop-2': {
            id: 'drop-2',
            options: ['chromatinides', 'chromosomes homologues', 'filaments fins d\'actine'],
            correctValue: 'chromosomes homologues'
          },
          'drop-3': {
            id: 'drop-3',
            options: ['réductionnelle', 'équationnelle', 'conservatrice'],
            correctValue: 'équationnelle'
          }
        }
      },
      {
        id: 'u3-q3',
        type: 'matching',
        title: 'Génétique Mendelienne : Vocabulaire clé',
        instruction: 'Mariez chaque concept formel de génétique à sa définition scientifique correcte.',
        explanation: 'Un phénotype est l\'ensemble des caractères visibles, un génotype est l\'allèle possédé, homozygote signifie posséder deux allèles identiques et hétérozygote deux allèles différents.',
        explanationAr: 'المظهر الخارجي هو الصفة الملاحظة، والنمط الوراثي هو الأليلات المحمولة، متشابه الاقتران يعني توفر أليلين متطابقين ومختلف الاقتران أليلين مختلفين.',
        leftItems: [
          { id: 'l1', text: 'Homozygote' },
          { id: 'l2', text: 'Hétérozygote' },
          { id: 'l3', text: 'Génotype' },
          { id: 'l4', text: 'Phénotype' }
        ],
        rightItems: [
          { id: 'r1', text: 'Individu possédant deux allèles différents pour un même gène.' },
          { id: 'r2', text: 'Représentation de l\'ensemble des gènes ou allèles d\'un individu, ex: [A//a].' },
          { id: 'r3', text: 'Expression observable d\'un caractère héréditaire, notée souvent entre crochets, ex: [A].' },
          { id: 'r4', text: 'Individu « de race pure » possédant deux allèles identiques pour un gène.' }
        ],
        correctPairs: {
          'l1': 'r4',
          'l2': 'r1',
          'l3': 'r2',
          'l4': 'r3'
        }
      },
      {
        id: 'u3-q4',
        type: 'table',
        title: 'Crosstests de validation des lois de Mendel',
        instruction: 'Identifiez les types de descendance attendus lors d\'un croisement de monohybridisme.',
        explanation: 'Le croisement retour (backcross) d\'un hétérozygote F1 avec un parent double récessif donne un rapport de 1:1 pour les phénotypes. Le croisement F1 x F1 donne un rapport classique de 3/4 : 1/4 si la dominance est complète.',
        explanationAr: 'التزاوج الراجع لـ F1 هجين مع أب ثنائي التنحي يعطي نسبة 50% لكل مظهر خارجي. بينما تزاوج F1 فيما بينها يعطي نسبة 3/4 و 1/4 في حالة سيادة تامة.',
        columns: [
          { id: 'bc', label: 'Testcross / Backcross hétérozygote x récessif (1 gène)' },
          { id: 'f1f1', label: 'Autofécondation F1 x F1 avec dominance complète (1 gène)' }
        ],
        rows: [
          {
            id: 'row-1',
            statement: 'Permet d\'obtenir des proportions théoriques phénotypiques de 50% - 50% (ou 1/2 : 1/2).',
            expectedChoices: { 'bc': true, 'f1f1': false }
          },
          {
            id: 'row-2',
            statement: 'La descendance montre une répartition statistique de 75% du phénotype dominant et 25% du récessif.',
            expectedChoices: { 'bc': false, 'f1f1': true }
          },
          {
            id: 'row-3',
            statement: 'Permet de déterminer si un individu au phénotype dominant est homozygote ou hétérozygote.',
            expectedChoices: { 'bc': true, 'f1f1': false }
          },
          {
            id: 'row-4',
            statement: 'Obtention d\'une génération homogène d\'individus tous de phénotype dominant.',
            expectedChoices: { 'bc': false, 'f1f1': false }
          }
        ]
      }
    ]
  },
  {
    id: 'unite-4',
    title: 'Utilisation des matières organiques et inorganiques',
    titleAr: 'استعمال المواد العضوية وغير العضوية والملوثات',
    description: 'Gestion des ordures ménagères (compost, méthanation), pollutions (effet de serre, eutrophisation), radioactivité et gestion des déchets nucléaires.',
    color: 'from-green-600 to-teal-800',
    questions: [
      {
        id: 'u4-q1',
        type: 'qcm',
        title: 'Le phénomène de l\'Eutrophisation',
        instruction: 'Cochez l\'explication exacte sur le mécanisme d\'eutrophisation des lacs.',
        explanation: 'L\'eutrophisation résulte de l\'apport excessif d\'engrais (nitrates et phosphates) dans les eaux stagnantes, provoquant une prolifération d\'algues en surface, bloquant la lumière et consommant tout l\'oxygène dissous, créant une zone morte par asphyxie.',
        explanationAr: 'ينتج التخاصب عن التدفق المفرط للأسمدة (النيترات والفوسفات) في المياه الراكدة، مما يؤدي إلى تكاثر الطحالب على السطح، وحجب الضوء، واستهلاك الأكسجين المذاب، مما يسبب اختناق وموت الكائنات المائية.',
        options: [
          'C\'est une purification naturelle des cours d\'eau par les plantes hydrophytes.',
          'C\'est une asphyxie aquatique causée par la prolifération d\'algues suite à un excès de nitrates et phosphates.',
          'C\'est l\'élévation de la température marine globale liée à l\'effet de serre.',
          'C\'est la formation de précipitations acides par dissolution du CO2 dans l\'eau des nuages.'
        ],
        correctIndices: [1],
        allowMultiple: false
      },
      {
        id: 'u4-q2',
        type: 'dropdown',
        title: 'Valorisation des Ordures Ménagères',
        instruction: 'Sélectionnez les techniques appropriées de gestion écologiques des déchets.',
        explanation: 'Le compostage produit du compost (engrais organique en aérobiose) alors que la fermentation méthanique (en anaérobiose) produit du biogaz (méthane CH4) utilisable comme énergie.',
        explanationAr: 'ينتج عن التسميد العضوي سماد عضوي في وسط هوائي، بينما ينتج عن إنتاج الميثان في وسط لاهوائي غاز حيوي (الميثان CH4) يستعمل للطاقة.',
        textWithPlaceholders: 'Le traitement écologique des ordures comprend le [drop-0], qui permet la dégradation aérobie des déchets humides en engrais organique, et la [drop-1], qui produit du [drop-2] en milieu strictement anaérobie.',
        dropdowns: {
          'drop-0': {
            id: 'drop-0',
            options: ['recyclage mécanique', 'compostage', 'incinération thermique'],
            correctValue: 'compostage'
          },
          'drop-1': {
            id: 'drop-1',
            options: ['méthanation', 'filtration', 'calcination'],
            correctValue: 'méthanation'
          },
          'drop-2': {
            id: 'drop-2',
            options: ['dioxyde de carbone', 'biogaz (méthane CH4)', 'soufre libre'],
            correctValue: 'biogaz (méthane CH4)'
          }
        }
      },
      {
        id: 'u4-q3',
        type: 'matching',
        title: 'Radioactivité et décomposition nucléaire',
        instruction: 'Reliez chaque terme lié à la radioactivité et l\'énergie nucléaire à sa signification exacte.',
        explanation: 'La demi-vie (période radioactive) est le temps nécessaire pour que la moitié des noyaux instables d\'un échantillon se désintègrent. Le rayonnement gamma est extrêmement pénétrant.',
        explanationAr: 'عمر النصف هو المدة اللازمة لتفتت نصف نوى عينة مشعة. أشعة غاما ذات قدرة هائلة على الاختراق.',
        leftItems: [
          { id: 'l1', text: 'Demi-vie' },
          { id: 'l2', text: 'Rayonnement Gamma (γ)' },
          { id: 'l3', text: 'Rayonnement Alpha (α)' },
          { id: 'l4', text: 'Fusion Nucléaire' }
        ],
        rightItems: [
          { id: 'r1', text: 'Flux de noyaux d\'hélium, peu pénétrant, arrêté par une feuille de papier.' },
          { id: 'r2', text: 'Onde électromagnétique de forte énergie, hautement pénétrante et dangereuse.' },
          { id: 'r3', text: 'Temps requis pour la désintégration naturelle de la moitié des noyaux radioactifs.' },
          { id: 'r4', text: 'Réunion de deux noyaux légers pour former un noyau plus lourd en libérant une énergie colossale.' }
        ],
        correctPairs: {
          'l1': 'r3',
          'l2': 'r2',
          'l3': 'r1',
          'l4': 'r4'
        }
      },
      {
        id: 'u4-q4',
        type: 'table',
        title: 'Pollution Atmosphérique vs Pollution Hydrique',
        instruction: 'Classez les différents indicateurs et agents responsables de ces deux types de pollutions.',
        explanation: 'La DBO5 (Demande Biochimique en Oxygène) et la dCO (Demande Chimique en Oxygène) sont de stricts critères d\'évaluation de la pollution des cours d\'eau. Le SO2 et NOx provoquent des pluies acides.',
        explanationAr: 'تعتبر DBO5 و DCO معايير لقياس نسبة تلوث المياه العذبة. بينما ثنائي أكسيد الكبريت وأكسيد النيتروجين يسببان الأمطار الحمضية.',
        columns: [
          { id: 'air', label: 'Pollution de l\'Air (Atmosphérique)' },
          { id: 'eau', label: 'Pollution de l\'Eau (Hydrique)' }
        ],
        rows: [
          {
            id: 'row-1',
            statement: 'Mesurée grâce à la Demande Biochimique en Oxygène sur 5 jours (DBO5).',
            expectedChoices: { 'air': false, 'eau': true }
          },
          {
            id: 'row-2',
            statement: 'Comprend le rejet de Gaz à Effet de Serre (GES) comme le dioxyde de carbone et le méthane.',
            expectedChoices: { 'air': true, 'eau': false }
          },
          {
            id: 'row-3',
            statement: 'Favorisée par l\'infiltration des lixiviats (jus de décharge contenant des métaux lourds).',
            expectedChoices: { 'air': false, 'eau': true }
          },
          {
            id: 'row-4',
            statement: 'Contient des oxydes d\'azote (NOx) et de soufre (SO2) à l\'origine des pluies acides.',
            expectedChoices: { 'air': true, 'eau': false }
          }
        ]
      }
    ]
  },
  {
    id: 'unite-5',
    title: 'Phénomènes géologiques accompagnant la formation des montagnes',
    titleAr: 'الظواهر الجيولوجية المصاحبة لنشوء سلاسل الجبال وعلاقتها بتكتونية الصفائح',
    description: 'Sédimentation, tectonique des plaques, chaînes de subduction, d\'obduction et de collision, métamorphisme de contact et régional, granitisation.',
    color: 'from-orange-600 to-amber-800',
    questions: [
      {
        id: 'u5-q1',
        type: 'qcm',
        title: 'Sédiments et structures caractéristiques de la Subduction',
        instruction: 'Choisissez la proposition exacte décrivant les indices géologiques d\'une zone de subduction.',
        explanation: 'La subduction se caractérise par la présence d\'un prisme d\'accrétion sédimentaire, d\'une fosse océanique profonde, d\'un volcanisme andésitique explosif et d\'une distribution oblique des foyers de séismes selon le plan de Benioff.',
        explanationAr: 'تتميز منطقة الطمر بوجود موشور تضخم رسوبي، خندق محيطي عميق، بركانية أنديزيتية انفجارية، وتوزيع مائل لبؤر الزلازل حسب مخطط بينيوف.',
        options: [
          'La présence d\'un complexe ophiolitique chevauchant la croûte continentale.',
          'Un volcanisme effusif basaltique de type alcalin.',
          'La présence d\'un prisme d\'accrétion et un alignement oblique des séismes (Plan de Benioff).',
          'La formation exclusive de roches plutoniques de type gabbro sans aucun métamorphisme.'
        ],
        correctIndices: [2],
        allowMultiple: false
      },
      {
        id: 'u5-q2',
        type: 'dropdown',
        title: 'Métamorphisme Régional vs de Contact',
        instruction: 'Complétez l\'analyse des types de métamorphisme.',
        explanation: 'Le métamorphisme régional ou dynamique est lié à des pressions fortes sous l\'effet de la tectonique, tandis que le métamorphisme thermique de contact résulte de l\'intrusion d\'un magma chaud granulé.',
        explanationAr: 'التحول الدينامي (الإقليمي) ناتج عن ارتفاع الضغط والحرارة بفعل التقارب التكتوني، في حين ينتج تحول التماس عن حرارة الصهارة الصاعدة.',
        textWithPlaceholders: 'Le métamorphisme de [drop-0] est induit par de fortes variations de température dues à une intrusion magmatique, formant une [drop-1]. En revanche, le métamorphisme [drop-2] est causé par des augmentations intenses de pression et de température affectant de vastes territoires.',
        dropdowns: {
          'drop-0': {
            id: 'drop-0',
            options: ['contact', 'choc', 'subduction'],
            correctValue: 'contact'
          },
          'drop-1': {
            id: 'drop-1',
            options: ['auréole métamorphique', 'roche sédimentaire', 'faille normale'],
            correctValue: 'auréole métamorphique'
          },
          'drop-2': {
            id: 'drop-2',
            options: ['de contact', 'dynamo-thermal (régional)', 'cataclastique'],
            correctValue: 'dynamo-thermal (régional)'
          }
        }
      },
      {
        id: 'u5-q3',
        type: 'matching',
        title: 'Types de chaînes de montagnes et roches indices',
        instruction: 'Associez chaque chaîne de montagnes ou roche témoin à sa définition dynamique exacte.',
        explanation: 'L\'ophiolite est un morceau de lithosphère océanique charrié sur le continent, témoin d\'une ancienne obduction ou fermeture océanique. L\'andésite caractérise la subduction.',
        explanationAr: 'الأفيوليت جزء من الغلاف الصخري المحيطي تم زحفه فوق القارة، وهو شاهد على انغلاق محيط قديم (طفو). صخرة الأنديزيت تميز الطمر.',
        leftItems: [
          { id: 'l1', text: 'Ophiolite' },
          { id: 'l2', text: 'Andésite' },
          { id: 'l3', text: 'Chaîne de Collision' },
          { id: 'l4', text: 'Prisme d\'accrétion' }
        ],
        rightItems: [
          { id: 'r1', text: 'Complexe de sédiments océaniques raclés lors du plongement de la plaque.' },
          { id: 'r2', text: 'Rhéologie de la lithosphère océanique charriée, indiquant une ancienne fermeture océanique (Obduction).' },
          { id: 'r3', text: 'Roche volcanique de structure microlitique riche en plagioclases, typique de la subduction.' },
          { id: 'r4', text: 'Surgit de l\'affrontement de deux plaques continentales après fermeture d\'un océan (ex: Himalaya).' }
        ],
        correctPairs: {
          'l1': 'r2',
          'l2': 'r3',
          'l3': 'r4',
          'l4': 'r1'
        }
      },
      {
        id: 'u5-q4',
        type: 'table',
        title: 'Dynamique des zones de convergence',
        instruction: 'Comparez les structures tectoniques majeures impliquées dans les déformations.',
        explanation: 'Les chevauchements et charriages caractérisent les forces compressives intenses de la collision. Les failles normales quant à elles indiquent des forces d\'extension.',
        explanationAr: 'تتميز مناطق التقارب بقوى انضغاطية ينتج عنها تراكبات وسدائم وزحف. الفوالق العادية تميز التمدد.',
        columns: [
          { id: 'comp', label: 'Forces de compression (Tectonique de convergence)' },
          { id: 'ext', label: 'Forces d\'extension (Tectonique de divergence/distension)' }
        ],
        rows: [
          {
            id: 'row-1',
            statement: 'Donne naissance à des plis, failles inverses et des chevauchements.',
            expectedChoices: { 'comp': true, 'ext': false }
          },
          {
            id: 'row-2',
            statement: 'S\'accompagne de failles normales et d\'étirement de la croûte.',
            expectedChoices: { 'comp': false, 'ext': true }
          },
          {
            id: 'row-3',
            statement: 'Permet la formation de nappes de charriage s\'étendant sur des dizaines de kilomètres.',
            expectedChoices: { 'comp': true, 'ext': false }
          },
          {
            id: 'row-4',
            statement: 'Responsable du rifting initial précédant l\'ouverture d\'un bassin océanique.',
            expectedChoices: { 'comp': false, 'ext': true }
          }
        ]
      }
    ]
  }
];
