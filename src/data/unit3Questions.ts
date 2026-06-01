import { SVTQuestion } from '../types';

export const unit3Groups: SVTQuestion[][] = [
  // Group 1: Méïose et Brassage Chromosomique
  [
    {
      id: 'u3-g1-q1',
      type: 'qcm',
      title: 'Bilan de division de la méïose',
      instruction: 'Qu\'obtient-on à l\'issue du processus global de la méïose à partir d\'une cellule diploïde (2n) ?',
      explanation: 'La méïose se compose de deux divisions noyau successives qui convertissent une cellule mère diploïde (2n) en quatre cellules filles haploïdes (n) appelées gamètes.',
      explanationAr: 'ينتج عن الانقسام الاختزالي انقسامين متتاليين يحولان خلية أم ثنائية الصيغة الصبغية (2n) إلى أربع خلايا بنات أحادية الصيغة الصبغية (n).',
      options: [
        'Deux cellules filles diploïdes (2n) identiques.',
        'Quatre cellules filles haploïdes (n) génétiquement diversifiées.',
        'Deux cellules haploïdes (n).',
        'Une cellule tétraploïde (4n).'
      ],
      correctIndices: [1],
      allowMultiple: false
    },
    {
      id: 'u3-g1-q2',
      type: 'qcm',
      title: 'Division réductionnelle vs équationnelle',
      instruction: 'Sélectionnez le devenir des chromosomes homologues lors de la première division de la méïose.',
      explanation: 'La première division de la méïose (division réductionnelle) sépare les chromosomes homologues de chaque paire (sans division de centromère), faisant passer la cellule de 2n à n chromosomes.',
      explanationAr: 'يعمل الانقسام المنصف (الاول) على فصل الصبغيات المتماثلة لكل زوج الصبغيات، مسبباً انتقال الخلية من الصيغة 2n إلى n.',
      options: [
        'Ils s\'alignent sur la plaque équatoriale pour se scinder.',
        'Ils se séparent et migrent vers les deux pôles de la cellule.',
        'Ils se décondensent temporairement en histones.',
        'Ils doublent leur taux d\'enroulement adn.'
      ],
      correctIndices: [1],
      allowMultiple: false
    },
    {
      id: 'u3-g1-q3',
      type: 'qcm',
      title: 'Le brassage intra-chromosomique',
      instruction: 'Quand se produit le brassage intra-chromosomique (crossing-over) et quel est son support cytologique ?',
      explanation: 'Le crossing-over se produit en Prophase I. Les chromatides non-sœurs des chromosomes homologues s\'entrecroisent au niveau de chiasmas et s\'échangent des segments de gènes.',
      explanationAr: 'يحدث التخليط ضمصبغي (العبور الصبغي) خلال التمهيدية I، حيث تتداخل الصبيغيات غير الشقيقة للصبغيات المتماثلة على مستوى نقط العبور (Chiasmas).',
      options: [
        'En Métaphase II, par friction équatoriale.',
        'En Prophase I, par échange de fragments entre chromatides non-sœurs de chromosomes homologues (crossing-over).',
        'En Anaphase I, par ségrégation polaire.',
        'En Télophase II.'
      ],
      correctIndices: [1],
      allowMultiple: false
    },
    {
      id: 'u3-g1-q4',
      type: 'dropdown',
      title: 'Mécanismes du Brassage Inter-chromosomique',
      instruction: 'Complétez l\'analyse ségrégative de la méïose.',
      explanation: 'Le brassage inter-chromosomique correspond à la séparation aléatoire et indépendante des chromosomes homologues d\'origine paternelle et maternelle en anaphase I.',
      explanationAr: 'يتمثل التخليط بينصبغي في الانفصال العشوائي والمستقل للصبغيات المتماثلة ذات الأصل الأبوي والأمومي خلال الطور الانفصالي الأول.',
      textWithPlaceholders: 'Le brassage inter-chromosomique se déroule lors de l\'[drop-0] de la méïose. La migration libre et [drop-1] des chromosomes homologues vers les pôles permet de générer des combinaisons de gamètes de [drop-2] types différents.',
      dropdowns: {
        'drop-0': {
          id: 'drop-0',
          options: ['prophase I', 'anaphase I', 'métaphase II'],
          correctValue: 'anaphase I'
        },
        'drop-1': {
          id: 'drop-1',
          options: ['orientée', 'aléatoire', 'identique'],
          correctValue: 'aléatoire'
        },
        'drop-2': {
          id: 'drop-2',
          options: ['2', '4', '2^n (avec n le nombre de paires)'],
          correctValue: '2^n (avec n le nombre de paires)'
        }
      }
    },
    {
      id: 'u3-g1-q5',
      type: 'matching',
      title: 'Phases décisives de la méïose',
      instruction: 'Associez chaque phase de la méïose à son observation microscopique correspondante.',
      explanation: 'Anaphase I (séparation homologues), Anaphase II (séparation chromatides), Métaphase I (alignement paires), Prophase I (appariement).',
      explanationAr: 'انفصالية I (انفصال المتماثلة)، انفصالية II (انفصال الصبيغيات)، استوائية I (تموضع ثنائيات الصبغيات)، تمهيدية I (اقتران الصبغيات).',
      leftItems: [
        { id: 'l1', text: 'Prophase I' },
        { id: 'l2', text: 'Anaphase I' },
        { id: 'l3', text: 'Anaphase II' },
        { id: 'l4', text: 'Métaphase I' }
      ],
      rightItems: [
        { id: 'r1', text: 'Division des centromères et séparation des chromatides sœurs vers les pôles opposés.' },
        { id: 'r2', text: 'Appariement des chromosomes homologues formant des bivalents (ou tétrades).' },
        { id: 'r3', text: 'Séparation sans clivage des centromères des chromosomes homologues migrés vers les pôles.' },
        { id: 'r4', text: 'Alignement des bivalents de part et d\'autre du plan équatorial de la cellule.' }
      ],
      correctPairs: {
        'l1': 'r2',
        'l2': 'r3',
        'l3': 'r1',
        'l4': 'r4'
      }
    },
    {
      id: 'u3-g1-q6',
      type: 'qcm',
      title: 'Le rôle de la fécondation',
      instruction: 'D\'un point de vue matériel et chromosomique, quel est l\'effet clé de la fécondation ?',
      explanation: 'La fécondation fusionne deux gamètes haploïdes (n) mâle et femelle de façon aléatoire, rétablissant la diploïdie (2n) et démultipliant le brassage génétique.',
      explanationAr: 'تعمل الإخصاب على إلتقاء عشوائي لأمشاج أحادية الصيغة الصبغية (n)، معيداً تشكيل الصيغة ثنائية الصبيغة الصبغية (2n) ومضاعفاً التخليط الوراثي.',
      options: [
        'Diviser la quantité d\'ADN par deux.',
        'Convertir l\'ADN en ARN messager.',
        'Rétablir la diploïdie (2n) en fusionnant les noyaux de deux gamètes haploïdes.',
        'Créer de nouvelles mutations protectrices.'
      ],
      correctIndices: [2],
      allowMultiple: false
    },
    {
      id: 'u3-g1-q7',
      type: 'qcm',
      title: 'L\'anomalie de ségrégation',
      instruction: 'Quelle conséquence pathologique survient en cas de non-disjonction d\'un couple chromosomique en anaphase I ?',
      explanation: 'La non-disjonction de chromosomes homologues produit des gamètes anormaux. S\'ils sont fécondés, ils provoquent des aberrations chromosomiques comme des trisomies ou des monosomies.',
      explanationAr: 'يؤدي عدم انفصال صبغيين متماثلين في الطور الانفصالي الأول إلى إنتاج أمشاج شاذة، تسبب شذوذات صبغية (مثل ثلاثي الصبغي) بعد الإخصاب.',
      options: [
        'Une mort cellulaire immédiate systématique.',
        'La production uniquement de cellules haploïdes parfaites.',
        'La survenue d\'une anomalie chromosomique du nombre (Trisomie ou Monosomie).',
        'La substitution d\'un acide aminé.'
      ],
      correctIndices: [2],
      allowMultiple: false
    },
    {
      id: 'u3-g1-q8',
      type: 'qcm',
      title: 'Interprétation des caryotypes',
      instruction: 'Qu\'indique la notation de formule chromosomique [2n + 1] sur le plan clinique ?',
      explanation: 'La formule 2n+1 indique la présence d\'un chromosome supplémentaire, soit un caryotype comportant une trisomie génotypique.',
      explanationAr: 'تشير الصيغة الصبغية 2n+1 إلى وجود صبغي إضافي (ثلاثية الصبغي 21 مثلاً).',
      options: [
        'Un individu sain haploïde.',
        'Une monosomie.',
        'Une trisomie.',
        'Une mutation silencieuse.'
      ],
      correctIndices: [2],
      allowMultiple: false
    },
    {
      id: 'u3-g1-q9',
      type: 'table',
      title: 'Ploïdie au cours de la division',
      instruction: 'Classez les phases de méïose et leurs ploïdies correspondantes.',
      explanation: 'La division réductionnelle produit des cellules haploïdes (n) dès la fin de la première division. L\'anaphase I sépare des chromosomes dupliqués à 2 chromatides.',
      explanationAr: 'ينتج الانقسام المنصف خلايا أحادية الصيغة الصبغية (n) منذ نهاية الانقسام الأول، ويحتوي كل صبغي على صبيغيين.',
      columns: [
        { id: 'cDi', label: 'Cellules Diploïdes (2n)' },
        { id: 'cHa', label: 'Cellules Haploïdes (n)' }
      ],
      rows: [
        {
          id: 'row-1',
          statement: 'Phase de Prophase I contenant des paires de tétrades.',
          expectedChoices: { 'cDi': true, 'cHa': false }
        },
        {
          id: 'row-2',
          statement: 'Cellules formées immédiatement à la fin de la télophase II.',
          expectedChoices: { 'cDi': false, 'cHa': true }
        },
        {
          id: 'row-3',
          statement: 'Cellules contenant des chromosomes à deux chromatides en Prophase II.',
          expectedChoices: { 'cDi': false, 'cHa': true }
        }
      ]
    },
    {
      id: 'u3-g1-q10',
      type: 'qcm',
      title: 'Le Chiasma',
      instruction: 'Définissez le chiasma chromosomique observable au microscope.',
      explanation: 'Le chiasma est la zone de contact physique direct établie entre les chromatides non-sœurs de chromosomes homologues lors de l\'enjambement en Prophase I.',
      explanationAr: 'العبور (Chiasma) هو نقطة التماس الفيزيائي بين الصبيغيات غير الشقيقة للصبغيات المتماثلة خلال التمهيدية I.',
      options: [
        'Le centre de la cellule.',
        'Le point de cassure de l\'ADN lors de la réplication.',
        'La zone d\'intersection physique entre deux chromatides non-sœurs homologues en prophase I.',
        'Le site de fixation de la myosine.'
      ],
      correctIndices: [2],
      allowMultiple: false
    }
  ],

  // Group 2: Vocabulaire Génétique et Monohybridisme (Dominance Complète et Incomplète)
  [
    {
      id: 'u3-g2-q1',
      type: 'qcm',
      title: 'Définition d\'un Allèle',
      instruction: 'Qu\'est-ce qu\'un allèle au sens de la génétique formelle ?',
      explanation: 'Un allèle représente l\'une des différentes versions possibles ou variantes séquentielles d\'un même gène.',
      explanationAr: 'الأليل هو نسخة أو نسخة بديلة لمورثة معينة.',
      options: [
        'Le point d\'attachement des chromosomes.',
        'L\'une des versions alternatives d\'un même gène.',
        'Une hormone de régulation génomique.',
        'Une cellule mutée.'
      ],
      correctIndices: [1],
      allowMultiple: false
    },
    {
      id: 'u3-g2-q2',
      type: 'qcm',
      title: 'Homozygote ou Lignée Pure',
      instruction: 'Qu\'indique l\'adjectif homozygote (ou de race pure) pour un gène précis ?',
      explanation: 'Un individu est homozygote pour un gène lorsqu\'il possède deux allèles identiques de ce gène sur ses deux chromosomes homologues.',
      explanationAr: 'يكون الفرد متشابه الاقتران (سلالة نقية) لمورثة معينة عندما يحمل أليلين متطابقين لهذه المورثة.',
      options: [
        'Qu\'il possède deux allèles différents.',
        'Qu\'il n\'a pas de chromosome sexuel.',
        'Qu\'il porte deux allèles rigoureusement identiques pour ce gène.',
        'Qu\'il est forcément stérile.'
      ],
      correctIndices: [2],
      allowMultiple: false
    },
    {
      id: 'u3-g2-q3',
      type: 'qcm',
      title: 'La première loi de Mendel (Uniformité)',
      instruction: 'Que dit la première loi de Mendel pour le croisement de deux lignées pures (homozygotes) divergentes ?',
      explanation: 'La première loi de Mendel (loi d\'uniformité des hybrides de première génération) énonce que le croisement de deux parents purs donne une descendance F1 100% homogène (phénotype unifié).',
      explanationAr: 'تنص القانون الأول لمندل (تجانس الهجناء F1) على أن تزاوج أبوين من سلالة نقية يعطي جيلاً أولاً F1 متجانساً بنسبة 100%.',
      options: [
        'F1 montre une dispersion de caractères à 50/50.',
        'F1 est entièrement et rigoureusement homogène.',
        'Les mâles ressemblent tous à la mère.',
        'La moitié de la descendance meurt à cause de gènes létaux.'
      ],
      correctIndices: [1],
      allowMultiple: false
    },
    {
      id: 'u3-g2-q4',
      type: 'qcm',
      title: 'Proportions de la génération F2 (Dominance complète)',
      instruction: 'Lors de l\'autofécondation F1 x F1 en monohybridisme avec dominance complète, quelles proportions phénotypiques obtient-on en F2 ?',
      explanation: 'En monohybridisme à dominance complète, le croisement F1 x F1 génère en F2 un rapport classique de 3/4 [phénotype dominant] (75%) et 1/4 [phénotype récessif] (25%).',
      explanationAr: 'في حالة السيادة التامة، يعطي تزاوج F1 فيما بينها جيلاً ثانياً F2 بالنسب: 3/4 للمظهر السائد وتساوي 75%، و 1/4 للمظهر المتنحي وتساوي 25%.',
      options: [
        '50% Dominant / 50% Récessif (1/2, 1/2)',
        '75% Dominant / 25% Récessif (3/4, 1/4)',
        '9/16, 3/16, 3/16, 1/16',
        '100% Dominant'
      ],
      correctIndices: [1],
      allowMultiple: false
    },
    {
      id: 'u3-g2-q5',
      type: 'dropdown',
      title: 'Génération F2 en codominance / dominance incomplète',
      instruction: 'Complétez l\'analyse statistique en l\'absence de dominance stricte.',
      explanation: 'En cas de codominance ou dominance incomplète, les descendants F1 présentent un phénotype intermédiaire. En F2, le rapport est de 25% Parent A, 50% Intermédiaire et 25% Parent B (rapport 1:2:1).',
      explanationAr: 'في حالة السيادة المشتركة، تظهر F1 بمظهر وسيط، ويعطي تزاوج F1 فيما بينها F2 بالنسب التالية: 25% للمظهر الأبوي الأول، 50% للمظهر الوسيط، و 25% للمظهر الأبوي الثاني.',
      textWithPlaceholders: 'Si les parents purs s\'associent sans dominance (codominance), le phénotype de F1 est [drop-0]. Le croisement F1 x F1 génère alors en F2 une répartition de [drop-1] pour chaque phénotype d\'origine et [drop-2] pour le phénotype intermédiaire.',
      dropdowns: {
        'drop-0': {
          id: 'drop-0',
          options: ['dominant pur', 'intermédiaire', 'récessif masqué'],
          correctValue: 'intermédiaire'
        },
        'drop-1': {
          id: 'drop-1',
          options: ['25%', '50%', '75%'],
          correctValue: '25%'
        },
        'drop-2': {
          id: 'drop-2',
          options: ['25%', '50%', '100%'],
          correctValue: '50%'
        }
      }
    },
    {
      id: 'u3-g2-q6',
      type: 'qcm',
      title: 'Le principe d\'un Test-cross',
      instruction: 'Quel est le but d\'un croisement test (test-cross ou back-cross) en monohybridisme ?',
      explanation: 'Le test-cross consiste à croiser un individu de phénotype dominant (mais de génotype inconnu) avec un testeur récessif afin de déterminer s\'il est homozygote ou hétérozygote.',
      explanationAr: 'يتمثل التزاوج الاختباري (Test-cross) في تزاوج فرد ذي مظهر سائد وسلالة غير معروفة مع فرد ثنائي التنحي (récessif) لتحديد هل الفرد هجين أم نقي.',
      options: [
        'Multiplier la fécondation des femelles.',
        'Découvrir la dominance partielle par autofécondation.',
        'Déterminer le génotype (pureté ou hétérogénéité) d\'un phénotype dominant en le croisant avec un parent récessif.',
        'Tester la léthalité des allèles.'
      ],
      correctIndices: [2],
      allowMultiple: false
    },
    {
      id: 'u3-g2-q7',
      type: 'qcm',
      title: 'Proportions d\'un Test-cross en monohybridisme',
      instruction: 'Si l\'individu testé est hétérozygote (hybride F1), quelles proportions phénotypiques théoriques obtient-on lors du test-cross ?',
      explanation: 'Un test-cross d\'un hétérozygote donne des proportions phénotypiques équiprobables : 50% [phénotype dominant] (provenant de l\'allèle apporté de F1) et 50% [phénotype récessif], soit un rapport 1:1.',
      explanationAr: 'يعطي التزاوج الاختباري لفرد هجين (F1) نسباً متساوية للمظاهر الخارجية: 50% للمظهر السائد والآخر 50% للمظهر المتنحي (1/2: 1/2).',
      options: [
        '75% Dominant / 25% Récessif',
        '33% de chaque variété',
        '50% Dominant / 50% Récessif (rapport 1/2 : 1/2)',
        '100% de type dominant'
      ],
      correctIndices: [2],
      allowMultiple: false
    },
    {
      id: 'u3-g2-q8',
      type: 'matching',
      title: 'Relations écrites alléliques',
      instruction: 'Reliez chaque concept d\'écriture de génotype à sa notation standardisée de l\'examen national.',
      explanation: 'Le génotype de l lignée pure s\'écrit avec des allèles identiques [A//A]. L\'hybride s\'écrit [A//a] avec A dominant et a récessif.',
      explanationAr: 'يكتب النمط الوراثي للسلالة النقية بأليلات متماثلة [A//A]، والنمط الوراثي للهجين يكتب [A//a].',
      leftItems: [
        { id: 'l1', text: 'Génotype homozygote dominant' },
        { id: 'l2', text: 'Génotype hétérozygote' },
        { id: 'l3', text: 'Notation de Phénotype' },
        { id: 'l4', text: 'Allèles codominants' }
      ],
      rightItems: [
        { id: 'r1', text: 'Écrit entre crochets droits selon la forme d\'expression, ex: [A] ou [a].' },
        { id: 'r2', text: 'Individu possédant deux allèles identiques s\'écrivant obligatoirement [A//A].' },
        { id: 'r3', text: 'Individu de structure hybride possédant deux allèles différents s\'écrivant [A//a].' },
        { id: 'r4', text: 'S\'écrivent en lettres majuscules d\'amplitude équivalente, ex: [AB] ou [B//G].' }
      ],
      correctPairs: {
        'l1': 'r2',
        'l2': 'r3',
        'l3': 'r1',
        'l4': 'r4'
      }
    },
    {
      id: 'u3-g2-q9',
      type: 'table',
      title: 'Analyse d\'arbres généalogiques : Dominance',
      instruction: 'Cochez les critères permettant de diagnostiquer si un allèle est dominant ou récessif d\'après un pedigree.',
      explanation: 'Un allèle est récessif si des parents sains donnent naissance à un enfant malade. Il est dominant si un enfant malade a obligatoirement l\'un de ses parents malade.',
      explanationAr: 'يكون الأليل متنحياً إذا أنجب أبوان سليمان طفلاً مصاباً. ويكون سائداً إذا كان كل طفل مصاب له أب مصاب واحد على الأقل.',
      columns: [
        { id: 'aDom', label: 'Allèle de type Dominant' },
        { id: 'aRec', label: 'Allèle de type Récessif' }
      ],
      rows: [
        {
          id: 'row-1',
          statement: 'La maladie apparaît chez des enfants issus de parents cliniquement sains.',
          expectedChoices: { 'aDom': false, 'aRec': true }
        },
        {
          id: 'row-2',
          statement: 'La maladie est présente à chaque génération sans saut (phénotype constant).',
          expectedChoices: { 'aDom': true, 'aRec': false }
        },
        {
          id: 'row-3',
          statement: 'Deux parents atteints de l\'anomalie donnent naissance à un enfant parfaitement sain.',
          expectedChoices: { 'aDom': true, 'aRec': false }
        }
      ]
    },
    {
      id: 'u3-g2-q10',
      type: 'qcm',
      title: 'La notion de locus',
      instruction: 'Qu\'est-ce qu\'un locus sur un chromosome ?',
      explanation: 'Le locus désigne l\'emplacement physique précis et invariable d\'un gène sur un chromosome donné.',
      explanationAr: 'يتمثل الموضِع الصبغي (Locus) في الموقع الفيزيائي الدقيق والثابت لمورثة معينة على صبغي محدد.',
      options: [
        'Le centre de division cellulaire.',
        'La liaison transversale de deux chromatides.',
        'L\'emplacement physique précis d\'un gène sur un chromosome.',
        'Un déchet du cycle de Krebs.'
      ],
      correctIndices: [2],
      allowMultiple: false
    }
  ],

  // Group 3: Cas Spéciaux - Gènes Létaux et Hérédité liée au Sexe
  [
    {
      id: 'u3-g3-q1',
      type: 'qcm',
      title: 'Le mécanisme du gène létal',
      instruction: 'Comment s\'explique le rapport atypique de 2/3 : 1/3 chez les survivants d\'un croisement de monohybridisme ?',
      explanation: 'Le rapport 2/3 : 1/3 s\'explique par la létalité de l\'allèle à l\'état homozygote (la combinaison homozygote double dominante ou double récessive est létale et meurt durant le développement embryonnaire).',
      explanationAr: 'تفسر النسبة الشاذة 2/3 : 1/3 لدى الناجين بموت الجنين متشابه الاقتران (homozygote) الحامل للأليل القاتل قبل ولادته.',
      options: [
        'Par la liaison complète des gènes.',
        'Par l\'action de l\'enjambement en méïose.',
        'Par la mort embryonnaire des individus homozygotes pour l\'allèle létal, retirant 1/4 du tableau théorique.',
        'Par une mutation silencieuse massive.'
      ],
      correctIndices: [2],
      allowMultiple: false
    },
    {
      id: 'u3-g3-q2',
      type: 'qcm',
      title: 'Identification d\'hérédité liée au Sexe (Gonosomes)',
      instruction: 'Quel signal d\'un premier croisement de lignées pures indique que le gène étudié est porté par un chromosome sexuel (X ou Y) ?',
      explanation: 'Si le croisement réciproque (en inversant les phénotypes des parents mâles et femelles) donne des résultats statistiques différents (ou si F1 n\'est pas homogène alors que les parents sont purs), le gène est lié au sexe.',
      explanationAr: 'عند تزاوج سلالتين نقيتين، إذا أعطى التزاوج العكسي (Inversé) نتائج مختلفة تماماً عن التزاوج الأول، فإن المورثة المدروسة محمولة على صبغي جنسي (غالباً X).',
      options: [
        'F1 est toujours homogène et conforme à Mendel.',
        'Tous les descendants F1 présentent les caractères récessifs.',
        'Le croisement réciproque donne des résultats statistiques différents de ceux du premier croisement.',
        'F2 donne toujours 9:3:3:1.'
      ],
      correctIndices: [2],
      allowMultiple: false
    },
    {
      id: 'u3-g3-q3',
      type: 'qcm',
      title: 'La structure des chromosomes sexuels',
      instruction: 'Quelles sont les paires de chromosomes sexuels (gonosomes) définissant le sexe chez l\'être humain et la drosophile ?',
      explanation: 'Chez l\'homme et la drosophile, la formule XX désigne la femelle homogamétique (produisant 1 seul type de gamètes) et XY désigne le mâle hétérogamétique (produisant deux types de spermatozoïdes : X ou Y).',
      explanationAr: 'عند الإنسان وذبابة الخل، ترمز الصيغة XX لأنثى متجانسة الأمشاج، وترمز الصيغة XY لذكر غير متجانس الأمشاج (أمشاج X وأمشاج Y).',
      options: [
        'XX chez le mâle et XY chez la femelle.',
        'XX chez la femelle et XY chez le mâle.',
        'ZZ chez la femelle et ZW chez le mâle.',
        'Uniquement des autosomes neutres.'
      ],
      correctIndices: [1],
      allowMultiple: false
    },
    {
      id: 'u3-g3-q4',
      type: 'qcm',
      title: 'Transmission exclusive père-fils',
      instruction: 'Si une anomalie héréditaire ne se transmet QUE de père en fils sur toutes les générations, sur quel chromosome est situé le gène ?',
      explanation: 'Seul le chromosome sexuel Y est transmis exclusivement de père en fils. Un gène situé sur la portion spécifique du chromosome Y provoquera une ligne d\'individus mâles atteints.',
      explanationAr: 'إذا كانت صفة وراثية معينة تنتقل فقط من الآباء إلى الأبناء الذكور طيلة الأجيال، فإن المورثة بالتأكيد محمولة على الصبغي الجنسي Y.',
      options: [
        'Sur le chromosome X.',
        'Sur un autosome (chromosome non sexuel).',
        'Sur le chromosome Y.',
        'Dans les mitochondries.'
      ],
      correctIndices: [2],
      allowMultiple: false
    },
    {
      id: 'u3-g3-q5',
      type: 'dropdown',
      title: 'L\'Hérédité récessive liée à X chez l\'homme',
      instruction: 'Complétez l\'analyse théorique de la transmission d\'une tare comme l\'hémophilie ou le daltonisme.',
      explanation: 'Les hommes n\'ont qu\'un seul chromosome X. S\'il porte l\'allèle muté récessif, ils expriment obligatoirement la maladie (noté hémizygote).',
      explanationAr: 'يتوفر الذكور على صبغي جنسي X واحد فقط. فإذا كان يحمل الأليل الممرض المتنحي، فإنهم يصابون بالمرض حتماً لعدم وجود X ثان يسد النقص.',
      textWithPlaceholders: 'Pour une maladie récessive liée au chromosome X, les femmes malades doivent posséder [drop-0] de l\'allèle muté, tandis que les hommes expriment la maladie avec [drop-1] seul allèle muté car ils sont dits [drop-2] pour X.',
      dropdowns: {
        'drop-0': {
          id: 'drop-0',
          options: ['deux copies', 'une seule copie', 'aucune copie'],
          correctValue: 'deux copies'
        },
        'drop-1': {
          id: 'drop-1',
          options: ['un', 'deux', 'aucun'],
          correctValue: 'un'
        },
        'drop-2': {
          id: 'drop-2',
          options: ['homozygotes', 'hémizygotes', 'haploïdes neutres'],
          correctValue: 'hémizygotes'
        }
      }
    },
    {
      id: 'u3-g3-q6',
      type: 'qcm',
      title: 'La drosophile aux yeux blancs (Drosophila Morgan)',
      instruction: 'Quel fut le premier apport de Thomas Hunt Morgan en croisant des drosophiles aux yeux blancs mutant ?',
      explanation: 'Morgan a démontré que le gène déterminant la couleur des yeux de la drosophile (allèle blanc réceptif mutant) était lié au chromosome sexuel X, liant pour la première fois un gène à un chromosome physique.',
      explanationAr: 'أثبت توماس مورغان لأول مرة أن مورثة لون عيون ذبابة الخل (الأليل الطافر للون الأبيض) محمولة على الصبغي الجنسي X.',
      options: [
        'Qu\'il n\'y a pas de mitose dans les yeux.',
        'Que le gène de couleur des yeux est porté spécifiquement par le chromosome sexuel X.',
        'Que l\'allèle blanc est létal à 100%.',
        'Que l\'ADN est composé d\'uracile.'
      ],
      correctIndices: [1],
      allowMultiple: false
    },
    {
      id: 'u3-g3-q7',
      type: 'qcm',
      title: 'Bilan d\'un test-cross lié à X',
      instruction: 'Quel est le résultat d\'un croisement entre une femelle hybride F1 (X_W // X_w) et un mâle récessif (X_w // Y) ?',
      explanation: 'Le croisement donne 50% de descendants (mâles et femelles confondus) exprimant le phénotype dominant, et 50% exprimant le phénotype récessif.',
      explanationAr: 'يعطي هذا التزاوج نسبة 50% من الذكور والإناث بمظهر سائد ونسبة 50% بمظهر متنحي.',
      options: [
        '100% de descendants régénérés sains.',
        '50% Dominants / 50% Récessifs dans chaque sexe (1:1).',
        'Seulement les femelles sont malades.',
        'Seulement les mâles sont survivants.'
      ],
      correctIndices: [1],
      allowMultiple: false
    },
    {
      id: 'u3-g3-q8',
      type: 'matching',
      title: 'Maladies liées au Sexe cliniques',
      instruction: 'Reliez chaque anomalie génétique de l\'examen national à son mode de transmission.',
      explanation: 'L\'hémophilie et le daltonisme sont des maladies récessives liées à l\'X classiques examinées au baccalauréat marocain.',
      explanationAr: 'تعتبر الهيموفيليا (Na3or) والدلتونية (Daltonisme) من الأمراض المتنحية والمحمولة على الصبغي الجنسي X المميزة للامتحانات الوطنية.',
      leftItems: [
        { id: 'l1', text: 'Hémophilie' },
        { id: 'l2', text: 'Daltonisme d\'identification' },
        { id: 'l3', text: 'Femme vectrice (Conductrice)' },
        { id: 'l4', text: 'Maladie dominante liée à X' }
      ],
      rightItems: [
        { id: 'r1', text: 'Incapacité constitutionnelle à distinguer le Rouge et le Vert, allèle récessif sur X.' },
        { id: 'r2', text: 'Anomalie de coagulation du sang, maladie génétique récessive liée au chromosome X.' },
        { id: 'r3', text: 'Femme hétérogamétique hétérozygote asymptomatique mais porteuse de la maladie.' },
        { id: 'r4', text: 'Un père atteint transmettra obligatoirement l\'anomalie à toutes ses filles, aucun fils touché.' }
      ],
      correctPairs: {
        'l1': 'r2',
        'l2': 'r1',
        'l3': 'r3',
        'l4': 'r4'
      }
    },
    {
      id: 'u3-g3-q9',
      type: 'table',
      title: 'Sexe chromosomique chez d\'autres espèces',
      instruction: 'Identifiez le système de détermination génétique du sexe chez les oiseaux et papillons par rapport aux mammifères.',
      explanation: 'Chez les mammifères, le mâle est XY et la femelle XX. Chez les oiseaux et lépidoptères, le système est inversé : la femelle est ZW (hétérogamétique) et le mâle ZZ (homogamétique).',
      explanationAr: 'تكون إناث الثدييات XX وذكورها XY، بينما ينعكس الأمر لدى الطيور والفراشات: الإناث ZW (غير متجانس الأمشاج) والذكور ZZ (متجانس الأمشاج).',
      columns: [
        { id: 'sysHuman', label: 'Système Mammifères (XX / XY)' },
        { id: 'sysBird', label: 'Système Oiseaux / Papillons (ZZ / ZW)' }
      ],
      rows: [
        {
          id: 'row-1',
          statement: 'Le sexe femelle est déterminé par l\'hétérogamétie (deux gamètes sexuels différents).',
          expectedChoices: { 'sysHuman': false, 'sysBird': true }
        },
        {
          id: 'row-2',
          statement: 'Le mâle produit un seul type de gamètes sexuels (homogamétie).',
          expectedChoices: { 'sysHuman': false, 'sysBird': true }
        },
        {
          id: 'row-3',
          statement: 'Le chromosome sexuel Y détermine directement l\'induction du caractère masculin.',
          expectedChoices: { 'sysHuman': true, 'sysBird': false }
        }
      ]
    },
    {
      id: 'u3-g3-q10',
      type: 'qcm',
      title: 'L\'hypothèse de Lyon (Inactivation de l\'X)',
      instruction: 'Qu\'indique l\'inactivation d\'un des chromosomes X chez la femelle mammifère ?',
      explanation: 'Pour équilibrer la dose de gènes entre mâle et femelle, l\'un des deux chromosomes X est inactivé de façon aléatoire et se condense sous forme de corpuscule de Barr.',
      explanationAr: 'لتحقيق توازن في الجينات بين الذكور والإناث، يتم تعطيل وتكليف صبغي X عشوائي عند الإناث لتشكيل ما يسمى جسيم بار (Corpuscule de Barr).',
      options: [
        'La destruction de l\'ADN dans les ovocytes.',
        'La condensation inactive d\'un chromosome X (Corpuscule de Barr) dans chaque cellule somatique de la femelle.',
        'L\'élimination des gènes paternels.',
        'La léthalité des mâles.'
      ],
      correctIndices: [1],
      allowMultiple: false
    }
  ],

  // Group 4: Dihybridisme - Gènes Indépendants
  [
    {
      id: 'u3-g4-q1',
      type: 'qcm',
      title: 'Définition du Dihybridisme',
      instruction: 'Qu\'étudie-t-on spécifiquement dans un cas de dihybridisme ?',
      explanation: 'Le dihybridisme étudie la transmission simultanée de deux couples d\'allèles (déterminant deux caractères phénotypiques distincts).',
      explanationAr: 'تدرس الهجونة الثنائية (Dihybridisme) انتقال صفتين وراثيتين مختلفتين (زوجين من الأليلات) في نفس الوقت.',
      options: [
        'La transmission d\'un seul et unique caractère génétique.',
        'La transmission simultanée de deux caractères distincts.',
        'L\'apparition de mutations mutagènes répétées.',
        'La multiplication des mitoses.'
      ],
      correctIndices: [1],
      allowMultiple: false
    },
    {
      id: 'u3-g4-q2',
      type: 'qcm',
      title: 'La troisième loi de Mendel',
      instruction: 'Quel est le titre et le principe physique de la troisième loi de Mendel (Ségrégation indépendante) ?',
      explanation: 'La troisième loi de Mendel (ségrégation indépendante des versions alléliques) stipule que les allèles de couples de gènes s\'associent de manière indépendante lors de la formation des gamètes en anaphase I.',
      explanationAr: 'تنص القانون الثالث لمندل (استقلالية أزواج الأليلات) على أن انفصال أزواج الأليلات يتم بصفة مستقلة وعشوائية عند تشكل الأمشاج.',
      options: [
        'Loi de liaison des gènes proches.',
        'Loi de pureté des gamètes.',
        'Loi de disjonction indépendante des couples d\'allèles.',
        'Loi de létalité homozygote dominant.'
      ],
      correctIndices: [2],
      allowMultiple: false
    },
    {
      id: 'u3-g4-q3',
      type: 'qcm',
      title: 'Proportions de la génération F2 (Gènes indépendants)',
      instruction: 'Dans un cas classique de dihybridisme avec gènes indépendants et dominance complète des deux caractères, quelles proportions statistiques obtient-on en F2 (F1 x F1) ?',
      explanation: 'La disjonction indépendante génère un rapport classique de : 9/16 [Dom1, Dom2], 3/16 [Dom1, Rec2], 3/16 [Rec1, Dom2] et 1/16 [Rec1, Rec2] chez les phénotypes.',
      explanationAr: 'في حالة السيادة التامة لمورثتين مستقلتين، يعطي تزاوج F1 فيما بينها النسب التالية: 9/16 للمظهرين السائدين معاً، 3/16 للمظهر السائد الأول والمتنحي الثاني، 3/16 للعكس، و 1/16 للمظهرين المتنحيين معاً.',
      options: [
        '9/16, 3/16, 3/16, 1/16',
        '1/4, 1/4, 1/4, 1/4',
        '9/12, 3/12',
        '50% Dominant / 50% Récessif'
      ],
      correctIndices: [0],
      allowMultiple: false
    },
    {
      id: 'u3-g4-q4',
      type: 'qcm',
      title: 'Nombre de gamètes d\'un double hétérozygote hétérogamétique',
      instruction: 'Combien de types de gamètes différents et en quelles proportions produit un individu double hétérozygote (AaBb) pour deux gènes indépendants ?',
      explanation: 'La ségrégation indépendante produit 4 types de gamètes équiprobables (chacun à 25% ou 1/4) : AB, Ab, aB, ab.',
      explanationAr: 'ينتج فرد ثنائي الهجونة (AaBb) لمورثتين مستقلتين 4 أنواع من الأمشاج بنسب متساوية (25% لكل نوع) وهي: AB و Ab و aB و ab.',
      options: [
        '2 types de gamètes à 50% chacun.',
        '4 types de gamètes à 25% chacun (équiprobables).',
        '4 types de gamètes à proportions asymétriques.',
        '8 types de gamètes.'
      ],
      correctIndices: [1],
      allowMultiple: false
    },
    {
      id: 'u3-g4-q5',
      type: 'dropdown',
      title: 'Bilan d\'un test-cross pour gènes indépendants',
      instruction: 'Complétez l\'analyse statistique du croisement retour d\'un dihybride indépendant.',
      explanation: 'Un test-cross associe un F1 double hétérozygote à un double récessif. Si les gènes sont indépendants, on obtient 4 phénotypes équiprobables (25% chacun).',
      explanationAr: 'يربط التزاوج الاختباري (Test-cross) هجين F1 بفرد ثنائي التنحي. إذا كانت المورثتان مستقلتين، نحصل على 4 مظاهر بنسب متساوية (25% لكل مظهر).',
      textWithPlaceholders: 'Le test-cross d\'un dihybride F1 avec un parent double récessif produit une descendance. Si les gènes sont portés par des autosomes indépendants, on obtient [drop-0] phénotypes différents dans l\'échiquier, avec des proportions de [drop-1] pour chaque phénotype d\'origine (équiprobabilité).',
      dropdowns: {
        'drop-0': {
          id: 'drop-0',
          options: ['2', '3', '4'],
          correctValue: '4'
        },
        'drop-1': {
          id: 'drop-1',
          options: ['25% (1/4)', '50% (1/2)', '9/16'],
          correctValue: '25% (1/4)'
        }
      }
    },
    {
      id: 'u3-g4-q6',
      type: 'qcm',
      title: 'Origine cytologique des phénotypes recombinés',
      instruction: 'Pourquoi des phénotypes originaux recombinés (absents chez les parents) apparaissent-ils en dihybridisme indépendant ?',
      explanation: 'Les phénotypes recombinés apparaissent grâce au brassage inter-chromosomique en anaphase I, qui sépare de façon totalement combinatoire les paires d\'autosomes différents.',
      explanationAr: 'تظهر المظاهر الجديدة التركيب (Recombinés) بفعل التخليط بينصبغي خلال الانفصالية الأول، والذي يجمع الصبغيات بشكل عشوائي.',
      options: [
        'Parce que les gènes mutent pendant l\'accouplement.',
        'Grâce au brassage inter-chromosomique séparant de façon aléatoire les autosomes indépendants.',
        'À cause d\'un dysfonctionnement de la mitose.',
        'Grâce à la duplication des centromères.'
      ],
      correctIndices: [1],
      allowMultiple: false
    },
    {
      id: 'u3-g4-q7',
      type: 'qcm',
      title: 'Gènes indépendants sur le même chromosome',
      instruction: 'Deux gènes peuvent-ils se comporter comme indépendants s\'ils sont physiquement situés sur le même chromosome ?',
      explanation: 'Oui. Si deux gènes sont très éloignés sur le même chromosome, de nombreux crossing-overs se produisent à chaque méïose. La ségrégation est alors statistiquement indépendante (Fréquence de recombinaison de 50%).',
      explanationAr: 'نعم، إذا كانت المورثتان متباعدتين جداً على نفس الصبغي، فإن نسبة حدوث العبور الصبغي تقارب 50%، مما يجعلهما تتصرفان إحصائياً كمورثتين مستقلتين.',
      options: [
        'Non, c\'est physiquement et totalement exclu.',
        'Oui, à condition qu\'ils soient extrêmement éloignés sur le chromosome pour subir un crossing-over systématique à 50%.',
        'Uniquement chez les levures.',
        'Uniquement pour les gènes létaux.'
      ],
      correctIndices: [1],
      allowMultiple: false
    },
    {
      id: 'u3-g4-q8',
      type: 'matching',
      title: 'Rapports théoriques de dihybridisme',
      instruction: 'Marie-z chaque type de croisement de dihybridisme indépendant à ses rapports phénotypiques attendus.',
      explanation: 'F1 x F1 donne 9:3:3:1. Un test-cross donne 1:1:1:1 ou 25% de chaque.',
      explanationAr: 'تزاوج F1 فيما بينها يعطي 9:3:3:1. بينما التزاوج الاختباري يعطي 1:1:1:1 (أو 25% لكل مظهر خارجي).',
      leftItems: [
        { id: 'l1', text: 'Autofécondation F1 x F1 (Dominance complète)' },
        { id: 'l2', text: 'Test-cross d\'hétérozygote indépendant' },
        { id: 'l3', text: 'Croisement de deux doubles homozygotes opposés' },
        { id: 'l4', text: 'Autofécondation en codominance d\'un caractère' }
      ],
      rightItems: [
        { id: 'r1', text: '4 phénotypes différents équiprobables à proportions de 1/4 chacun.' },
        { id: 'r2', text: 'Obtention d\'une génération F1 100% homogène de phénotype double dominant.' },
        { id: 'r3', text: 'Rapport classique de Mendel fractionné sous la forme 9/16, 3/16, 3/16, 1/16.' },
        { id: 'r4', text: 'Rapport complexe de 3:6:3:1:2:1 du fait de l\'absence de dominance.' }
      ],
      correctPairs: {
        'l1': 'r3',
        'l2': 'r1',
        'l3': 'r2',
        'l4': 'r4'
      }
    },
    {
      id: 'u3-g4-q9',
      type: 'table',
      title: 'Types de chromosomes',
      instruction: 'Apprenez à distinguer les deux classes de chromosomes.',
      explanation: 'Les autosomes sont les chromosomes homologues identiques communs aux deux sexes, les gonosomes sont sexuels différencés.',
      explanationAr: 'الصبغيات اللامنسية (Autosomes) هي صبغيات لا جنسية متطابقة لدى الجنسين، والصبغيات الجنسية (Gonosomes) تفرق بينهما.',
      columns: [
        { id: 'colAuto', label: 'Chromosomes Autosomes' },
        { id: 'colGono', label: 'Chromosomes Sexuels (Gonosomes)' }
      ],
      rows: [
        {
          id: 'row-1',
          statement: 'Au nombre de 22 paires identiques chez l\'être humain normal.',
          expectedChoices: { 'colAuto': true, 'colGono': false }
        },
        {
          id: 'row-2',
          statement: 'Notés spécifiquement XX ou XY selon la différenciation génétique de l\'exposition.',
          expectedChoices: { 'colAuto': false, 'colGono': true }
        },
        {
          id: 'row-3',
          statement: 'Portent des gènes pouvant coder pour des caractères neutres non sexuels (ex: couleur d\'yeux).',
          expectedChoices: { 'colAuto': true, 'colGono': true }
        }
      ]
    },
    {
      id: 'u3-g4-q10',
      type: 'qcm',
      title: 'L\'échiquier de croisement',
      instruction: 'Quelle est l\'utilité majeure de dresser un échiquier de croisement en dihybridisme ?',
      explanation: 'L\'échiquier de croisement permet de confronter l\'ensemble des types de gamètes produits par le mâle et la femelle et de calculer la fréquence statistique des génotypes et phénotypes de la fécondation.',
      explanationAr: 'تسمح شبكة التزاوج بمطابقة ومزاوجة مختلف أصناف الأمشاج الذكرية والأنثوية المنفصلة لتوقع النسب الإحصائية الوراثية.',
      options: [
        'Compter la division du noyau de la méïose.',
        'Calculer les pourcentages d\'erreur de la réplication.',
        'Visualiser et calculer toutes les combinaisons possibles résultant de la rencontre des gamètes mâles et femelles.',
        'Définir le métamorphisme géologique.'
      ],
      correctIndices: [2],
      allowMultiple: false
    }
  ],

  // Group 5: Dihybridisme - Gènes Liés et Crossing-Over
  [
    {
      id: 'u3-g5-q1',
      type: 'qcm',
      title: 'La notion de gènes liés (Linkage)',
      instruction: 'Qu\'indique l\'adjectif "liés" pour deux gènes étudiés en dihybridisme ?',
      explanation: 'Deux gènes sont dits liés (en anglais "linked") lorsqu\'ils sont physiquement localisés côte à côte sur la même paire de chromosomes homologues.',
      explanationAr: 'تكون المورثتان مرتبطتين (Liées) عندما تكونان محمولتين على نفس الموضع والصبغي.',
      options: [
        'Qu\'ils s\'activent uniquement ensemble.',
        'Qu\'ils sont portés par deux paires de chromosomes différents.',
        'Qu\'ils sont situés physiquement sur la même paire de chromosomes.',
        'Qu\'ils neutralisent la mitose.'
      ],
      correctIndices: [2],
      allowMultiple: false
    },
    {
      id: 'u3-g5-q2',
      type: 'qcm',
      title: 'La liaison absolue (Absence totale de recombinaison)',
      instruction: 'S\'il y a liaison absolue entre deux gènes (linkage complet sans crossing-over), combien de types de gamètes produit un double hétérozygote ?',
      explanation: 'Si la liaison est absolue (comme chez le mâle de la drosophile qui ne fait jamais de crossing-over), le dihybride ne produit que 2 types de gamètes parentaux (50% chacun).',
      explanationAr: 'في حالة الارتباط التام (عدم حدوث عبور صبغي، كما لدى ذكر ذبابة الخل)، ينتج الفرد الهجين صنفين فقط من الأمشاج الأبوية (بنسبة 50% لكل منهما).',
      options: [
        '1 seul type de gamète.',
        '2 types de gamètes uniquement (phénotypes 100% parentaux).',
        '4 types de gamètes équiprobables.',
        'Une infinité par décalage.'
      ],
      correctIndices: [1],
      allowMultiple: false
    },
    {
      id: 'u3-g5-q3',
      type: 'qcm',
      title: 'Signal statistique de gènes liés (Test-cross)',
      instruction: 'Quel profil de résultats statistiques lors d\'un test-cross indique que deux gènes sont liés avec survenue de crossing-over ?',
      explanation: 'Si les proportions de la descendance du test-cross montrent une forte prédominance de phénotypes parentaux (majoritaires) et un faible taux de phénotypes recombinés (minoritaires), les gènes sont liés.',
      explanationAr: 'بعد تزاوج اختباري، إذا تم الحصول على نسب غير متساوية تتميز بمظاهر أبوية سائدة (كبيرة) ومظاهر جديدة التركيب ضعيفة (أقلية)، فإن المورثتين مرتبطتين.',
      options: [
        'Quatre phénotypes équiprobables (25% chacun).',
        '9/16, 3/16, 3/16, 1/16.',
        'Une majorité de phénotypes parentaux et une minorité de phénotypes recombinés.',
        'Uniquement les formes létales.'
      ],
      correctIndices: [2],
      allowMultiple: false
    },
    {
      id: 'u3-g5-q4',
      type: 'qcm',
      title: 'Le lien entre taux de recombinaison et distance',
      instruction: 'Quelle relation existe-t-il entre la fréquence des gamètes (et phénotypes) recombinés et la distance séparant deux gènes liés ?',
      explanation: 'Plus la distance physique séparant deux gènes sur le chromosome est grande, plus la probabilité de survenue d\'un crossing-over entre eux est élevée. Le taux de recombinaison est proportionnel à la distance génotypique.',
      explanationAr: 'كلما تباعدت المسافة بين مورثتين مرتبطتين على الصبغي، ارتفع احتمال وقوع عبور صبغي بينهما، وبالتالي ترتفع نسبة المظاهر جديدة التركيب.',
      options: [
        'Il n\'y a aucune corrélation statistique.',
        'Le taux de recombinaison diminue avec la distance des gènes.',
        'Le taux de recombinaison est directement proportionnel à la distance qui sépare les deux gènes.',
        'La distance bloque l\'enjambement.'
      ],
      correctIndices: [2],
      allowMultiple: false
    },
    {
      id: 'u3-g5-q5',
      type: 'dropdown',
      title: 'Cartographie génétique et Unité Morgan',
      instruction: 'Sélectionnez les termes de cartographie des chromosomes.',
      explanation: 'La distance génétique se mesure en Centimorgan (cM). 1% de recombinaison équivaut à 1 cM.',
      explanationAr: 'تقاس المسافة الوراثية بين مورثتين مرتبطتين بوحدة السنتيمورغان (cM)، وتمثل كـل نسبة 1% من تركيبات جديدة واحدة سنتيمورغان 1 cM.',
      textWithPlaceholders: 'Alfred Sturtevant a établi l\'unité de mesure de distance sur la carte génétique des chromosomes. Un taux de [drop-0] de phénotypes recombinés s\'écrit et s\'illustre par une distance de [drop-1] [drop-2] (cM).',
      dropdowns: {
        'drop-0': {
          id: 'drop-0',
          options: ['1%', '10%', '50%'],
          correctValue: '1%'
        },
        'drop-1': {
          id: 'drop-1',
          options: ['1', '10', '100'],
          correctValue: '1'
        },
        'drop-2': {
          id: 'drop-2',
          options: ['Centimorgan', 'Mendelmetre', 'Kilohertz'],
          correctValue: 'Centimorgan'
        }
      }
    },
    {
      id: 'u3-g5-q6',
      type: 'qcm',
      title: 'Exceptions de Recombinaison chez la Drosophile',
      instruction: 'Quel genre biologique de la drosophile (Drosophila) ne fait jamais de crossing-over (liaison absolue) ?',
      explanation: 'Chez la drosophile, le mâle présente une liaison absolue : il ne réalise jamais de crossing-over. Le crossing-over s\'observe exclusivement chez la mouche femelle.',
      explanationAr: 'عند ذبابة الخل، يتميز الذكر بارتباط تام ومطلق لعدم حدوث عبور صبغي لديه أبداً. يحدث العبور فقط لدى الإناث.',
      options: [
        'La drosophile femelle uniquement.',
        'Le mâle drosophile uniquement.',
        'Tous les mutants de race blanche.',
        'La larve drosophile.'
      ],
      correctIndices: [1],
      allowMultiple: false
    },
    {
      id: 'u3-g5-q7',
      type: 'qcm',
      title: 'Calcul de la distance entre deux gènes',
      instruction: 'Un test-cross donne : 420 parentaux A, 430 parentaux B, 70 recombinés C et 80 recombinés D. Quelle est la distance séparant ces gènes ?',
      explanation: 'Nombre total = 420+430+70+80 = 1000. Recombinés = 70+80 = 150. Taux = (150/1000) * 100 = 15%. La distance séparant les deux gènes est de 15 % de recombinaison, soit 15 cM.',
      explanationAr: 'مجموع الأفراد = 1000. الأفراد تركيب جديد = 150. تبلغ نسبتهما (150/1000) × 1000 = 15%. وبالتالي تبلغ مسافة التموضع 15 cM.',
      options: [
        '7 cM',
        '15 cM',
        '30 cM',
        '85 cM'
      ],
      correctIndices: [1],
      allowMultiple: false
    },
    {
      id: 'u3-g5-q8',
      type: 'matching',
      title: 'Liaison CIS vs TRANS',
      instruction: 'Reliez chaque terme lié à la disposition des allèles chez les hétérozygotes liés à son écriture génotypique réelle.',
      explanation: 'En couplage CIS, les dominants sont sur le même chromosome [(AB)//(ab)]. En couplage TRANS, chacun porte un dominant et un récessif [(Ab)//(aB)].',
      explanationAr: 'في حالة الاقتران المقرون (CIS)، يتموقع الأليلان السائدان معاً [(AB)//(ab)]. وفي الاقتران المفرق (TRANS)، يضم كل صبغي أليلاً سائداً وتالياً متنحياً [(Ab)//(aB)].',
      leftItems: [
        { id: 'l1', text: 'Association en phase CIS (Couplage)' },
        { id: 'l2', text: 'Association en phase TRANS (Répulsion)' },
        { id: 'l3', text: 'Position de gènes indépendants' },
        { id: 'l4', text: 'Structure de chromosome diploïde lié' }
      ],
      rightItems: [
        { id: 'r1', text: 'Les allèles dominants sont portés chacun par un chromosome homologue différent, ex: [(Ab)//(aB)].' },
        { id: 'r2', text: 'Les deux allèles dominants du gène sont localisés ensemble sur le même chromosome, ex: [(AB)//(ab)].' },
        { id: 'r3', text: 'Se note avec un point virgule séparant les deux paires d\'allèles différents, ex: [A//a, B//b].' },
        { id: 'r4', text: 'Se note entre deux slashes symbolisant la paire d\'homologues d\'un seul bloc, ex: [(ab)//(ab)].' }
      ],
      correctPairs: {
        'l1': 'r2',
        'l2': 'r1',
        'l3': 'r3',
        'l4': 'r4'
      }
    },
    {
      id: 'u3-g5-q9',
      type: 'table',
      title: 'Proportions : Gènes liés vs Indépendants',
      instruction: 'Distinguez les deux structures d\'après les résultats de leurs test-cross respectifs.',
      explanation: 'Un test-cross de gènes liés donne deux phénotypes parentaux dominants (ex: 45%, 45%) et deux recombinants minimes (ex: 5%, 5%).',
      explanationAr: 'يعطي التزاوج الاختباري لمظاهر المورثات المرتبطة نسباً غير متساوية سائدة للأبوين ونسباً ضئيلة للجدد.',
      columns: [
        { id: 'lInd', label: 'Indicateur de Gènes Indépendants' },
        { id: 'lLie', label: 'Indicateur de Gènes Liés' }
      ],
      rows: [
        {
          id: 'row-1',
          statement: 'La descendance du test-cross présente quatre phénotypes à proportionségales de 25% chacune.',
          expectedChoices: { 'lInd': true, 'lLie': false }
        },
        {
          id: 'row-2',
          statement: 'Les phénotypes parentaux cumulent à eux seuls plus de 80% des individus de la descendance.',
          expectedChoices: { 'lInd': false, 'lLie': true }
        },
        {
          id: 'row-3',
          statement: 'L\'autofécondation F1 x F1 dégage une distribution de 9/16, 3/16, 3/16, 1/16.',
          expectedChoices: { 'lInd': true, 'lLie': false }
        }
      ]
    },
    {
      id: 'u3-g5-q10',
      type: 'qcm',
      title: 'Limite maximale théorique du taux de recombinaison',
      instruction: 'Quelle est la limite supérieure théorique de la fréquence de recombinaison entre deux gènes liés ?',
      explanation: 'Le pourcentage de crossing-over ne peut jamais dépasser 50% de recombinaison (limite de la ségrégation aléatoire des paires). À 50%, les gènes liés se comportent statistiquement comme des gènes indépendants.',
      explanationAr: 'لا يمكن لنسبة المظاهر جديدة التركيب أن تتجاوز 50%. وعند وصولها لـ 50%، تصبح المورثتان متصرفتان إحصائياً كالمستقلتين.',
      options: [
        'Il n\'y a aucune limite, allant jusqu\'à 100%.',
        '50% de recombinaison maximale.',
        '25% de recombinaison maximale.',
        '90% de recombinaison maximale.'
      ],
      correctIndices: [1],
      allowMultiple: false
    }
  ]
];
