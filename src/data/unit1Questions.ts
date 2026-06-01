import { SVTQuestion } from '../types';

export const unit1Groups: SVTQuestion[][] = [
  // Group 1 (10 Questions): Glycolyse et Étapes Préparatoires
  [
    {
      id: 'u1-g1-q1',
      type: 'qcm',
      title: 'Localisation de la glycolyse',
      instruction: 'Sélectionnez le compartiment cellulaire exact où se produit la glycolyse.',
      explanation: 'La glycolyse se déroule exclusivement dans l\'hyaloplasme (ou cytosol) de la cellule, que ce soit en présence ou en l\'absence de dioxygène.',
      explanationAr: 'يحدث انحلال الكليكوز حصرياً في الجبلة الشفافة للخلية، سواء في وجود أو غياب الأكسجين.',
      options: [
        'La matrice mitochondriale',
        'L\'hyaloplasme (cytosol)',
        'L\'espace intermembranaire',
        'La membrane interne de la mitochondrie'
      ],
      correctIndices: [1],
      allowMultiple: false
    },
    {
      id: 'u1-g1-q2',
      type: 'qcm',
      title: 'Bilan net en ATP de la glycolyse',
      instruction: 'Déterminez le bilan énergétique net direct sous forme d\'ATP produit par la glycolyse d\'une molécule de glucose.',
      explanation: 'La glycolyse consomme 2 molécules d\'ATP dans ses phases initiales d\'activation, et produit 4 molécules d\'ATP par la suite, ce qui donne un bilan net final de 2 ATP.',
      explanationAr: 'تستهلك عملية انحلال الكليكوز جزيئتي ATP في مراحل التنشيط الأولى، وتنتج 4 جزيئات ATP لاحقاً، مما يعطي حصيلة جزيئتين ATP صافيتين.',
      options: [
        '1 ATP',
        '2 ATP',
        '4 ATP',
        '36 ATP'
      ],
      correctIndices: [1],
      allowMultiple: false
    },
    {
      id: 'u1-g1-q3',
      type: 'qcm',
      title: 'Phases consommatrices d\'ATP',
      instruction: 'Quelles étapes de la glycolyse nécessitent de consommer de l\'ATP ?',
      explanation: 'La phosphorylation du glucose en glucose-6-phosphate et la phosphorylation du fructose-6-phosphate en fructose-1,6-diphosphate consomment chacune 1 ATP.',
      explanationAr: 'تستهلك فسفرة الكليكوز إلى كليكوز-6-فوسفات وفسفرة الفركتوز-6-فوسفات إلى فركتوز-1،6-ثنائي الفوسفات جزيئة ATP لكل منهما.',
      options: [
        'La scission du fructose 1,6-diphosphate',
        'La conversion du pyruvate en acétyl-CoA',
        'La transformation du glucose en glucose-6-phosphate',
        'La déshydrogénation des trioses phosphates'
      ],
      correctIndices: [2],
      allowMultiple: false
    },
    {
      id: 'u1-g1-q4',
      type: 'dropdown',
      title: 'Oxydation du glucose',
      instruction: 'Complétez le texte résumant la glycolyse.',
      explanation: 'La glycolyse est une série de réactions d\'oxydoréduction qui transforme le glucose en deux pyruvates, produisant également du NADH,H+ réducteur.',
      explanationAr: 'انحلال الكليكوز عبارة عن سلسلة تفاعلات أكسدة-اختزال تحول الكليكوز إلى جزيئتي بيروفات، مع إنتاج الهيدروجين NADH,H+ الاختزالي.',
      textWithPlaceholders: 'Lors de la glycolyse, une molécule de glucose est oxydée en deux molécules de [drop-0]. Cette réaction produit également 2 [drop-1] réduits à partir de NAD+ et 2 [drop-2] à partir d\'ADP.',
      dropdowns: {
        'drop-0': {
          id: 'drop-0',
          options: ['pyruvate', 'lactate', 'acétyl-CoA'],
          correctValue: 'pyruvate'
        },
        'drop-1': {
          id: 'drop-1',
          options: ['NADH,H+', 'FADH2', 'ATP'],
          correctValue: 'NADH,H+'
        },
        'drop-2': {
          id: 'drop-2',
          options: ['ATP', 'ADP', 'Pi'],
          correctValue: 'ATP'
        }
      }
    },
    {
      id: 'u1-g1-q5',
      type: 'matching',
      title: 'Étapes détaillées de la glycolyse',
      instruction: 'Reliez chaque étape ou molécule à son rôle direct dans le cytosol.',
      explanation: 'Le glucose subit une activation, une scission, puis une oxydation couplée à une phosphorylation d\'ADP.',
      explanationAr: 'يخضع الكليكوز للتنشيط، ثم الانقسام، ثم الأكسدة المقترنة بفسفرة ADP.',
      leftItems: [
        { id: 'l1', text: 'Triose phosphate' },
        { id: 'l2', text: 'Fructose-1,6-diphosphate' },
        { id: 'l3', text: 'Acide pyruvique' },
        { id: 'l4', text: 'NAD+' }
      ],
      rightItems: [
        { id: 'r1', text: 'Produit final à 3 atomes de carbone généré après la glycolyse.' },
        { id: 'r2', text: 'Molécule intermédiaire à 6 carbones hautement énergétique.' },
        { id: 'r3', text: 'Coenzyme à l\'état oxydé servant d\'accepteur d\'électrons.' },
        { id: 'r4', text: 'Molécule intermédiaire à 3 carbones, comme le PGAL.' }
      ],
      correctPairs: {
        'l1': 'r4',
        'l2': 'r2',
        'l3': 'r1',
        'l4': 'r3'
      }
    },
    {
      id: 'u1-g1-q6',
      type: 'qcm',
      title: 'Le devenir de l\'acide pyruvique en présence d\'O2',
      instruction: 'Identifiez le lieu et la destination de l\'acide pyruvique lorsque la cellule dispose d\'O2.',
      explanation: 'En présence d\'oxygène, l\'acide pyruvique pénètre dans la matrice de la mitochondrie pour y être oxydé en acétyl-CoA.',
      explanationAr: 'في وجود الأكسجين، يدخل حمض البيروفيك إلى ماتريس الميتوكوندري ليؤكسد إلى أسيتيل-CoA.',
      options: [
        'Il reste dans l\'hyaloplasme pour être réduit en lactate.',
        'Il traverse les membranes mitochondriales pour rejoindre la matrice.',
        'Il est stocké dans la vacuole de la cellule végétale.',
        'Il est évacué hors de la cellule par exocytose.'
      ],
      correctIndices: [1],
      allowMultiple: false
    },
    {
      id: 'u1-g1-q7',
      type: 'qcm',
      title: 'Décarboxylation oxidative',
      instruction: 'Combien de CO2 sont libérés par de la décarboxylation du pyruvate avant le cycle de Krebs pour un glucose ?',
      explanation: 'Pour une molécule de glucose, on obtient deux molécules de pyruvate. Chaque pyruvate libère un CO2 lors de sa décarboxylation, ce qui fait au total 2 CO2.',
      explanationAr: 'بالنسبe لجزيء كليكوز واحد، نحصل على جزيئتين من البيروفات. يطرح كل بيروفات جزيء CO2 واحد، مما يعطي إجمالي جزيئتين من CO2.',
      options: [
        '1 CO2',
        '2 CO2',
        '4 CO2',
        '6 CO2'
      ],
      correctIndices: [1],
      allowMultiple: false
    },
    {
      id: 'u1-g1-q8',
      type: 'qcm',
      title: 'Formation de l\'Acétyl-Coenzyme A',
      instruction: 'Quel coenzyme réduit est produit lors de la synthèse d\'un acétyl-CoA à partir d\'un pyruvate ?',
      explanation: 'La décarboxylation oxydative du pyruvate est catalysée par une déshydrogénase qui réduit un NAD+ en NADH,H+.',
      explanationAr: 'تتم عملية تفاعل نزع الكربوكسيل المؤكسد للبيروفات عبر اختزال NAD+ إلى NADH,H+.',
      options: [
        'FADH2',
        'NADH,H+',
        'NADPH,H+',
        'ATP'
      ],
      correctIndices: [1],
      allowMultiple: false
    },
    {
      id: 'u1-g1-q9',
      type: 'table',
      title: 'Métabolisme du pyruvate',
      instruction: 'Cochez la voie métabolique associée à chaque transformation du pyruvate.',
      explanation: 'La décarboxylation oxydative caractérise la voie aérobie mitochondriale, tandis que la réduction en acide lactique caractérise la fermentation lactique anaérobie dans l\'hyaloplasme.',
      explanationAr: 'نزع الكربوكسيل المؤكسد يميز المسلك الهوائي في الميتوكوندري، بينما الاختزال إلى حمض لبني يميز التخمر اللبني اللاهوائي في الجبلة الشفافة.',
      columns: [
        { id: 'aero', label: 'Voie de la Respiration (Aérobie)' },
        { id: 'anaero', label: 'Voie de la Fermentation Lactique (Anaérobie)' }
      ],
      rows: [
        {
          id: 'row-1',
          statement: 'Pénétration du pyruvate dans la matrice mitochondriale.',
          expectedChoices: { 'aero': true, 'anaero': false }
        },
        {
          id: 'row-2',
          statement: 'Réduction directe du pyruvate par le NADH,H+ dans l\'hyaloplasme.',
          expectedChoices: { 'aero': false, 'anaero': true }
        },
        {
          id: 'row-3',
          statement: 'Transformation du pyruvate en acétyl-CoA avec dégagement de CO2.',
          expectedChoices: { 'aero': true, 'anaero': false }
        }
      ]
    },
    {
      id: 'u1-g1-q10',
      type: 'qcm',
      title: 'Rôle de l\'enzyme coenzyme A (CoA)',
      instruction: 'Quel est le rôle principal du Coenzyme A ?',
      explanation: 'Le coenzyme A sert de transporteur du groupement acétyl (2C) pour former de l\'acétyl-substance, l\'introduisant directement dans le cycle de Krebs.',
      explanationAr: 'يتمثل الدور الرئيسي لمرافق الإنزيم أ (CoA) في نقل مجموعة الأسيتيل (2C) وإدخالها مباشرة في دورة كريبس.',
      options: [
        'Il sert d\'accepteur final d\'électrons.',
        'Il catalyse la phosphorylation de l\'ADP.',
        'Il transfère le groupe acétyl (2C) à l\'oxaloacétate.',
        'Il dégrade le glucose en fructose.'
      ],
      correctIndices: [2],
      allowMultiple: false
    }
  ],

  // Group 2 (10 Questions): Le Cycle de Krebs (Matrice Mitochondriale)
  [
    {
      id: 'u1-g2-q1',
      type: 'qcm',
      title: 'La condensation initiale du Cycle de Krebs',
      instruction: 'Quelles molécules s\'associent pour former l\'acide citrique en début du cycle de Krebs ?',
      explanation: 'L\'acétyl-coenzyme A (2C) transfère son groupement acétyl à l\'oxaloacétate (4C) pour initier le cycle avec la formation du citrate (ou acide citrique à 6C).',
      explanationAr: 'يتكاثف الأسيتيل-CoA (ثنائي الكربون 2C) مع حمض الأوكسالواسيتات (رباعي الكربون 4C) لتشكيل حمض الستريك (سداسي الكربون 6C).',
      options: [
        'Le pyruvate et l\'acétyl-CoA',
        'L\'acétyl-CoA et l\'oxaloacétate',
        'Le succinate et le malate',
        'Le citrate et l\'O2'
      ],
      correctIndices: [1],
      allowMultiple: false
    },
    {
      id: 'u1-g2-q2',
      type: 'qcm',
      title: 'Le nombre de carbones du premier réactif recyclé',
      instruction: 'Combien d\'atomes de carbone possède l\'acide oxaloacétique, régénéré à l\'issue du cycle ?',
      explanation: 'L\'acide oxaloacétique est une molécule à 4 atomes de carbone (4C) régénérée à la fin du cycle de Krebs pour réagir avec un nouvel acétyl-CoA.',
      explanationAr: 'حمض الأوكسالواسيتيك جزيء يحتوي على 4 ذرات كربون (4C) ويتم تجديده في نهاية الدورة ليتفاعل مع أسيتيل-CoA جديد.',
      options: [
        '2 carbones',
        '3 carbones',
        '4 carbones',
        '6 carbones'
      ],
      correctIndices: [2],
      allowMultiple: false
    },
    {
      id: 'u1-g2-q3',
      type: 'qcm',
      title: 'Bilan en CO2 d\'un seul tour de Cycle de Krebs',
      instruction: 'Pour UN seul acétyl-CoA entrant, quel est le nombre de molécules de CO2 émises dans la matrice ?',
      explanation: 'À chaque tour de cycle de Krebs, l\'oxydation de l\'acétyl-CoA entraîne le rejet de 2 molécules de CO2 par décarboxylation oxydative.',
      explanationAr: 'في كل دورة كريبس، تؤدي أكسدة أسيتيل-CoA واحد إلى طرح جزيئتين من ثنائي أكسيد الكربون CO2.',
      options: [
        '1 CO2',
        '2 CO2',
        '3 CO2',
        '4 CO2'
      ],
      correctIndices: [1],
      allowMultiple: false
    },
    {
      id: 'u1-g2-q4',
      type: 'qcm',
      title: 'Production directe d\'ATP/GTP',
      instruction: 'Quel est le bilan direct en molécule riche en énergie (ATP ou GTP) par tour de cycle ?',
      explanation: 'Chaque tour du cycle de Krebs génère directement une seule molécule d\'ATP (généralement via la phosphorylation du GDP en GTP, converti ensuite en ATP).',
      explanationAr: 'ينتج عن كل دورة كريبس بشكل مباشر جزيء ATP واحد فقط (عبر فسفرة GDP إلى GTP).',
      options: [
        '0 ATP',
        '1 ATP',
        '2 ATP',
        '36 ATP'
      ],
      correctIndices: [1],
      allowMultiple: false
    },
    {
      id: 'u1-g2-q5',
      type: 'dropdown',
      title: 'Bilan global du cycle de Krebs',
      instruction: 'Complétez les espaces pour définir le bilan d\'oxydation par tour de cycle.',
      explanation: 'Pour un tour de cycle de Krebs (ou un acétyl-CoA), la cellule produit 3 NADH,H+, 1 FADH2 et 1 ATP.',
      explanationAr: 'في كل دورة كريبس واحدة (أو أسيتيل-CoA واحد)، تنتج الخلية 3 NADH,H+، و 1 FADH2، و 1 ATP.',
      textWithPlaceholders: 'L\'oxydation complète d\'un groupement acétyl fournit à la cellule [drop-0] NADH,H+, [drop-1] FADH2, et [drop-2] molécule d\'ATP.',
      dropdowns: {
        'drop-0': {
          id: 'drop-0',
          options: ['1', '2', '3', '4'],
          correctValue: '3'
        },
        'drop-1': {
          id: 'drop-1',
          options: ['1', '2', '3'],
          correctValue: '1'
        },
        'drop-2': {
          id: 'drop-2',
          options: ['1', '2', '38'],
          correctValue: '1'
        }
      }
    },
    {
      id: 'u1-g2-q6',
      type: 'qcm',
      title: 'Production de FADH2',
      instruction: 'Dans quel compartiment cellulaire est synthétisé le FADH2 ?',
      explanation: 'Le FADH2 est un coenzyme réduit synthétisé dans la matrice mitochondriale par le cycle de Krebs grâce au cycle de déshydrogénation de l\'acide succinique.',
      explanationAr: 'يتم تركيب FADH2 (مختزل) داخل ماتريس الميتوكوندري بواسطة دورة كريبس.',
      options: [
        'L\'hyaloplasme',
        'L\'espace intermembranaire',
        'La matrice mitochondriale',
        'Le chloroplaste'
      ],
      correctIndices: [2],
      allowMultiple: false
    },
    {
      id: 'u1-g2-q7',
      type: 'matching',
      title: 'Bilan total par glucose',
      instruction: 'Reliez chaque type de molécule au nombre total produit dans la matrice pour un glucose (phase du pyruvate incluse).',
      explanation: 'La dégradation complète de 2 pyruvates (issus d\'un glucose) dans la mitochondrie produit 6 CO2, 8 NADH,H+, 2 FADH2 et 2 ATP.',
      explanationAr: 'الهدم الكامل لجزيئتي بيروفات (من كليكوز واحد) داخل الميتوكوندري ينتج 6 CO2، و 8 NADH,H+، و 2 FADH2، و 2 ATP.',
      leftItems: [
        { id: 'l1', text: 'CO2 total émis' },
        { id: 'l2', text: 'NADH,H+ matriciels' },
        { id: 'l3', text: 'FADH2 totaux' },
        { id: 'l4', text: 'ATP directs' }
      ],
      rightItems: [
        { id: 'r1', text: '8 molécules formées (2 au niveau du pyruvate, 6 dans le cycle de Krebs).' },
        { id: 'r2', text: '6 molécules formées (2 au niveau du pyruvate, 4 dans le cycle de Krebs).' },
        { id: 'r3', text: '2 molécules générées directement lors des phosphorylations.' },
        { id: 'r4', text: '2 molécules de FADH2 produites uniquement dans le cycle.' }
      ],
      correctPairs: {
        'l1': 'r2',
        'l2': 'r1',
        'l3': 'r4',
        'l4': 'r3'
      }
    },
    {
      id: 'u1-g2-q8',
      type: 'qcm',
      title: 'Caractère aérobie indirect du Cycle de Krebs',
      instruction: 'Pourquoi le cycle de Krebs s\'arrête-t-il rapidement en l\'absence d\'O2 bien qu\'il n\'en consomme pas directement ?',
      explanation: 'En condition d\'anaérobiose (sans O2), la chaîne respiratoire ne peut plus réoxyder les coenzymes NADH,H+ et FADH2. La pénurie de NAD+ et FAD+ oxydés bloque alors le cycle de Krebs.',
      explanationAr: 'في غياب الأكسجين، تتوقف السلسلة التنفسية عن إعادة أكسدة NADH,H+ و FADH2. ويؤدي نقص NAD+ و FAD+ إلى توقف دورة كريبس.',
      options: [
        'Car l\'oxygène est un réactif de la première réaction.',
        'Car sans O2, les transporteurs réduits (NADH,H+) saturent la matrice, bloquant les enzymes du cycle par manque de NAD+ oxydé.',
        'Car l\'absence d\'oxygène détruit la membrane interne.',
        'Car l\'ADP ne peut pas entrer dans la matrice.'
      ],
      correctIndices: [1],
      allowMultiple: false
    },
    {
      id: 'u1-g2-q9',
      type: 'table',
      title: 'Oxydoréduction des composés matriciels',
      instruction: 'Indiquez si les états de ces molécules sont oxydés ou réduits.',
      explanation: 'NAD+ et FAD sont les accepteurs oxydés, tandis que NADH,H+ et FADH2 sont les états réduits riches en électrons.',
      explanationAr: 'يعتبر NAD+ و FAD مستقبلات مؤكسدة، بينما تعتبر NADH,H+ و FADH2 حالات مختزلة غنية بالإلكترونات.',
      columns: [
        { id: 'oxy', label: 'Forme Oxydée' },
        { id: 'red', label: 'Forme Réduite' }
      ],
      rows: [
        {
          id: 'row-1',
          statement: 'NAD+ servant au niveau de l\'acide pyruvique.',
          expectedChoices: { 'oxy': true, 'red': false }
        },
        {
          id: 'row-2',
          statement: 'FADH2 formé lors de l\'oxydation de l\'acide succinique.',
          expectedChoices: { 'oxy': false, 'red': true }
        },
        {
          id: 'row-3',
          statement: 'NADH,H+ accumulé dans la matrice.',
          expectedChoices: { 'oxy': false, 'red': true }
        }
      ]
    },
    {
      id: 'u1-g2-q10',
      type: 'qcm',
      title: 'La régénération de l\'oxaloacétate',
      instruction: 'Quelle est la dernière étape majeure du cycle de Krebs ?',
      explanation: 'Le cycle se ferme par la déshydrogénation de l\'acide malique en acide oxaloacétique, produisant le dernier NADH,H+ du cycle.',
      explanationAr: 'تغلق الدورة بانتزاع الهيدروجين من حمض الماليك ليتحول إلى حمض الأوكسالواسيتيك، منتجاً آخر NADH,H+.',
      options: [
        'La synthèse de l\'acide citrique',
        'L\'oxydation du succinate',
        'La réoxydation du malate en oxaloacétate',
        'La décarboxylation de l\'alpha-cétoglutarate'
      ],
      correctIndices: [2],
      allowMultiple: false
    }
  ],

  // Group 3 (10 Questions): Chaîne Respiratoire et Phosphorylation Oxydative
  [
    {
      id: 'u1-g3-q1',
      type: 'qcm',
      title: 'Localisation de la chaîne respiratoire',
      instruction: 'Où se situent exactement les complexes enzymatiques qui réalisent la chaîne respiratoire ?',
      explanation: 'La chaîne respiratoire est intégrée dans la membrane interne de la mitochondrie, augmentant sa surface grâce à des replis appelés crêtes.',
      explanationAr: 'توجد السلسلة التنفسية مدمجة في الغشاء الداخلي للميتوكوندري، وتزيد مساحتها بفضل طيات تسمى الأعراف.',
      options: [
        'Dans la membrane externe',
        'Dans la matrice',
        'Dans la membrane interne de la mitochondrie',
        'Dans le cytosol'
      ],
      correctIndices: [2],
      allowMultiple: false
    },
    {
      id: 'u1-g3-q2',
      type: 'qcm',
      title: 'L\'accepteur final d\'électrons',
      instruction: 'Quel est l\'accepteur final d\'électrons à l\'extrémité de la chaîne respiratoire ?',
      explanation: 'Le dioxygène (O2) est l\'accepteur final d\'électrons. Il est réduit avec des protons pour former de l\'eau (H2O).',
      explanationAr: 'ثنائي الأكسجين (O2) هو المستقبل النهائي للإلكترونات. يتم اختزاله مع البروتونات لتشكيل الماء (H2O).',
      options: [
        'Le NAD+',
        'Le CO2',
        'Le dioxygène (O2)',
        'L\'ATP synthase'
      ],
      correctIndices: [2],
      allowMultiple: false
    },
    {
      id: 'u1-g3-q3',
      type: 'qcm',
      title: 'Pompage des protons (H+)',
      instruction: 'Dans quel compartiment les protons (H+) sont-ils pompés activement lors du transfert des électrons ?',
      explanation: 'L\'énergie libérée par le passage des électrons permet aux complexes de la membrane interne de pomper activement les protons de la matrice vers l\'espace intermembranaire.',
      explanationAr: 'تسمح الطاقة المحررة بمرور الإلكترونات لمجمعات الغشاء الداخلي بضخ البروتونات بنشاط من الماتريس إلى الحيز بين-غشائي.',
      options: [
        'Vers le cytosol',
        'Vers l\'espace intermembranaire',
        'Vers la matrice',
        'Vers le noyau'
      ],
      correctIndices: [1],
      allowMultiple: false
    },
    {
      id: 'u1-g3-q4',
      type: 'qcm',
      title: 'Le gradient de protons',
      instruction: 'Qu\'entraîne l\'accumulation des protons dans l\'espace intermembranaire ?',
      explanation: 'Le pompage continu crée un gradient électrochimique de protons (pH plus acide et charge plus positive dans l\'espace intermembranaire par rapport à la matrice).',
      explanationAr: 'يؤدي الضخ المستمر إلى خلق ممال إلكتروكيميائي للبرتونات (pH أكثر حموضة وشحنة أكثر إيجابية في الحيز بين-غشائي مقارنة بالماتريس).',
      options: [
        'Un blocage du cycle de Krebs',
        'Un gradient électrochimique de protons appelé force proton-motrice',
        'La destruction de la membrane externe',
        'L\'entrée forcée d\'O2'
      ],
      correctIndices: [1],
      allowMultiple: false
    },
    {
      id: 'u1-g3-q5',
      type: 'dropdown',
      title: 'Synthèse d\'ATP au niveau des sphères pédonculées',
      instruction: 'Sélectionnez les termes adéquats décrivant le passage retour des H+.',
      explanation: 'Le retour des protons vers la matrice se fait à travers les sphères pédonculées (ATP synthase), libérant l\'énergie nécessaire pour phosphoryler l\'ADP en ATP.',
      explanationAr: 'تتدفق البروتونات عائدة إلى الماتريس عبر الكرات ذات الشمراخ (ATP synthase)، مما يفجر الطاقة اللازمة لفسفرة ADP إلى ATP.',
      textWithPlaceholders: 'Les protons accumulés retraversent la membrane interne uniquement par les [drop-0]. Ce flux passif active l\'enzyme [drop-1] qui catalyse la phosphorylation de l\'[drop-2] en ATP.',
      dropdowns: {
        'drop-0': {
          id: 'drop-0',
          options: ['pores membranaires', 'sphères pédonculées', 'canaux de calcium'],
          correctValue: 'sphères pédonculées'
        },
        'drop-1': {
          id: 'drop-1',
          options: ['ATP synthase', 'Hélicase', 'Amylase'],
          correctValue: 'ATP synthase'
        },
        'drop-2': {
          id: 'drop-2',
          options: ['ADP', 'AMP', 'pyruvate'],
          correctValue: 'ADP'
        }
      }
    },
    {
      id: 'u1-g3-q6',
      type: 'qcm',
      title: 'Équivalence énergétique du NADH,H+',
      instruction: 'Combien d\'ATP sont synthétisés lors de la réoxydation d\'une molécule de NADH,H+ ?',
      explanation: 'La réoxydation d\'un NADH,H+ au niveau du premier complexe de la chaîne respiratoire permet d\'accumuler assez de protons pour synthétiser 3 ATP.',
      explanationAr: 'تؤدي إعادة أكسدة جزيء NADH,H+ واحد على مستوى المجمع الأول للسلسلة التنفسية إلى تركيب 3 ATP.',
      options: [
        '1 ATP',
        '2 ATP',
        '3 ATP',
        '4 ATP'
      ],
      correctIndices: [2],
      allowMultiple: false
    },
    {
      id: 'u1-g3-q7',
      type: 'qcm',
      title: 'Équivalence énergétique du FADH2',
      instruction: 'Combien d\'ATP sont formés à partir de la réoxydation d\'une molécule de FADH2 ?',
      explanation: 'Le FADH2 donne ses électrons plus tard au complexe II. N\'activant que deux sites de pompage de protons, il génère seulement 2 ATP.',
      explanationAr: 'يعطي FADH2 إلكتروناته لاحقاً للمجمع الثاني. ويؤدي ذلك إلى تشغيل موقعي ضخ بروتوني فقط، مما يولد 2 ATP.',
      options: [
        '1 ATP',
        '2 ATP',
        '3 ATP',
        '4 ATP'
      ],
      correctIndices: [1],
      allowMultiple: false
    },
    {
      id: 'u1-g3-q8',
      type: 'matching',
      title: 'Couples d\'oxydoréduction de la chaîne',
      instruction: 'Associez chaque complexe ou molécule à son rôle rédox spécifique.',
      explanation: 'Des complexes pompent les protons, tandis que les transporteurs mobiles de la membrane transportent les électrons.',
      explanationAr: 'تقوم مجمعات بضخ البروتونات، بينما تنقل ناقلات متحركة في الغشاء الإلكترونات.',
      leftItems: [
        { id: 'l1', text: 'Complexes membranaires I, III, IV' },
        { id: 'l2', text: 'Le dioxygène (O2/H2O)' },
        { id: 'l3', text: 'NADH,H+ / NAD+' },
        { id: 'l4', text: 'Coenzyme Q ou Cytochrome C' }
      ],
      rightItems: [
        { id: 'r1', text: 'Couple à très fort potentiel d\'oxydoréduction, accepteur final d\'électrons.' },
        { id: 'r2', text: 'Constituent des pompes membranaires actives générant le gradient H+.' },
        { id: 'r3', text: 'Donneur d\'électrons possédant le potentiel rédox le plus bas.' },
        { id: 'r4', text: 'Transporteurs mobiles d\'électrons entre les complexes de la membrane.' }
      ],
      correctPairs: {
        'l1': 'r2',
        'l2': 'r1',
        'l3': 'r3',
        'l4': 'r4'
      }
    },
    {
      id: 'u1-g3-q9',
      type: 'table',
      title: 'Effet des agents bloquants de la respiration',
      instruction: 'Analysez l\'effet de deux substances toxiques célèbres sur les fonctions mitochondriales.',
      explanation: 'Le cyanure bloque l\'accepteur final (Cytochrome c oxydase), arrêtant le transport d\'électrons. Les agents découplants détruisent le gradient de H+ sans bloquer les transferts d\'électrons.',
      explanationAr: 'يمنع السيانيد المجمع الأخير (أكسيداز سيتوكروم)، مما يوقف انتقال الإلكترونات. بينما تدمر المواد غير المقترنة ممال H+ دون منع انتقال الإلكترونات.',
      columns: [
        { id: 'cya', label: 'Inhibition par le Cyanure' },
        { id: 'dec', label: 'Effet d\'un Agent Découplant (ex: DNP)' }
      ],
      rows: [
        {
          id: 'row-1',
          statement: 'Arrêt complet de la consommation d\'oxygène O2.',
          expectedChoices: { 'cya': true, 'dec': false }
        },
        {
          id: 'row-2',
          statement: 'Poursuite du transfert d\'électrons mais effondrement de la synthèse d\'ATP.',
          expectedChoices: { 'cya': false, 'dec': true }
        },
        {
          id: 'row-3',
          statement: 'Annulation du gradient de protons à travers la membrane interne.',
          expectedChoices: { 'cya': false, 'dec': true }
        }
      ]
    },
    {
      id: 'u1-g3-q10',
      type: 'qcm',
      title: 'Bilan énergétique théorique maximal',
      instruction: 'Quel est le bilan en ATP de la dégradation complète du glucose par respiration dans une cellule à navette malate-aspartate ?',
      explanation: 'La dégradation aérobie complète d\'un glucose donne 38 ATP si l\'on utilise la navette malate-aspartate (notamment dans les cellules comme le cœur ou le foie).',
      explanationAr: 'الهدم الهوائي الكامل لجزيء كليكوز يعطي 38 ATP في حالة استخدام ناقلة مالات-أسبارتات.',
      options: [
        '2 ATP',
        '30 ATP',
        '36 ou 38 ATP',
        '40 ATP'
      ],
      correctIndices: [2],
      allowMultiple: false
    }
  ],

  // Group 4 (10 Questions): Les Fermentations Cellulaires
  [
    {
      id: 'u1-g4-q1',
      type: 'qcm',
      title: 'La condition d\'anaérobiose',
      instruction: 'Quel est l\'élément déclencheur du processus de fermentation dans les cellules eucaryotes ?',
      explanation: 'La fermentation s\'active en condition d\'anaérobiose, c\'est-à-dire en l\'absence ou lors d\'un déficit sévère de dioxygène (O2).',
      explanationAr: 'يتفعل مسلك التخمر في حالة غياب الأكسجين (وسط لاهوائي) أو حدوث نقص حاد فيه.',
      options: [
        'L\'accumulation excessive de dioxyde de carbone CO2',
        'L\'absence totale ou le manque critique de dioxygène (O2)',
        'L\'excès de lumière solaire',
        'Le manque de glucose dans les réserves'
      ],
      correctIndices: [1],
      allowMultiple: false
    },
    {
      id: 'u1-g4-q2',
      type: 'qcm',
      title: 'Localisation de la fermentation',
      instruction: 'Dans quel compartiment cellulaire de la cellule se déroule la fermentation ?',
      explanation: 'Contrairement à la respiration qui nécessite la mitochondrie, toutes les étapes de la fermentation se déroulent uniquement dans l\'hyaloplasme (cytosol).',
      explanationAr: 'على عكس التنفس الذي يتطلب الميتوكوندري، تتم جميع خطوات التخمر في الجبلة الشفافة (السيتوبلازم) فقط.',
      options: [
        'La matrice mitochondriale',
        'L\'hyaloplasme',
        'Le noyau de la cellule',
        'Le réticulum endoplasmique'
      ],
      correctIndices: [1],
      allowMultiple: false
    },
    {
      id: 'u1-g4-q3',
      type: 'qcm',
      title: 'Le produit final de la fermentation lactique',
      instruction: 'Quel est le composé organique produit lors de la fermentation lactique ?',
      explanation: 'Lors de la fermentation lactique (effectuée par exemple par le muscle en effort intense), le pyruvate est directement réduit en acide lactique (ou lactate).',
      explanationAr: 'أثناء التخمر اللبني (الذي يحدث مثلاً في العضلات عند المجهود المكثف)، يختزل البيروفات مباشرة إلى حمض لبني.',
      options: [
        'L\'éthanol et du CO2',
        'L\'acide cytocholique',
        'L\'acide lactique (lactate)',
        'L\'acétyl-CoA'
      ],
      correctIndices: [2],
      allowMultiple: false
    },
    {
      id: 'u1-g4-q4',
      type: 'qcm',
      title: 'Les produits de la fermentation alcoolique',
      instruction: 'Quels produits organiques et inorganiques caractérisent la fermentation alcoolique ?',
      explanation: 'La fermentation alcoolique (comme chez les levures) convertit le pyruvate en éthanol (déchet organique) avec dégagement de dioxyde de carbone (CO2).',
      explanationAr: 'يحول التخمر الكحولي (كما لدى الخمائر) البيروفات إلى كحول الإيثانول (حثالة عضوية) مع طرح ثنائي أكسيد الكربون CO2.',
      options: [
        'L\'acide lactique uniquement',
        'L\'acide lactique et du CO2',
        'L\'éthanol et du CO2',
        'L\'acétyl-CoA et de l\'O2'
      ],
      correctIndices: [2],
      allowMultiple: false
    },
    {
      id: 'u1-g4-q5',
      type: 'dropdown',
      title: 'Le rôle de la réduction du pyruvate',
      instruction: 'Complétez l\'analyse biochimique de la fermentation.',
      explanation: 'Le but biochimique cellulaire de la réduction du pyruvate en déchet organique est de réoxyder le NADH,H+ en NAD+ pour permettre à la glycolyse de continuer.',
      explanationAr: 'الهدف البيوكيميائي الخلوي من اختزال البيروفات إلى حثالة عضوية هو إعادة أكسدة NADH,H+ إلى NAD+ لتمكين استمرار انحلال الكليكوز.',
      textWithPlaceholders: 'En anaérobiose, la cellule ne peut pas réoxyder ses transporteurs dans la mitochondrie. La réduction du pyruvate permet donc de régénérer le [drop-0] oxydé à partir de [drop-1] dans le [drop-2] cellulaire.',
      dropdowns: {
        'drop-0': {
          id: 'drop-0',
          options: ['NAD+', 'NADH,H+', 'FADH2'],
          correctValue: 'NAD+'
        },
        'drop-1': {
          id: 'drop-1',
          options: ['NADH,H+', 'FAD', 'ATP'],
          correctValue: 'NADH,H+'
        },
        'drop-2': {
          id: 'drop-2',
          options: ['matrice', 'l\'hyaloplasme', 'chloroplaste'],
          correctValue: 'l\'hyaloplasme'
        }
      }
    },
    {
      id: 'u1-g4-q6',
      type: 'qcm',
      title: 'Bilan énergétique de la fermentation',
      instruction: 'Quel est le bilan net total en ATP d\'une fermentation par molécule de glucose ?',
      explanation: 'Les étapes de la fermentation après la glycolyse ne générant aucun ATP supplémentaire, le bilan de la fermentation se limite à celui de la glycolyse, soit 2 ATP.',
      explanationAr: 'نظراً لأن خطوات التخمر بعد انحلال الكليكوز لا تولد أي ATP إضافي، فإن حصيلة التخمر تقتصر على حصيلة انحلال الكليكوز وهي 2 ATP.',
      options: [
        '2 ATP',
        '4 ATP',
        '36 ATP',
        '38 ATP'
      ],
      correctIndices: [0],
      allowMultiple: false
    },
    {
      id: 'u1-g4-q7',
      type: 'matching',
      title: 'Caractéristiques comparées',
      instruction: 'Reliez chaque voie de dégradation métabolique à sa spécificité énergétique et résiduelle.',
      explanation: 'La respiration oxyde entièrement tandis que les fermentations laissent des déchets organiques énergétiques.',
      explanationAr: 'يؤكسد التنفس الكليكوز كلياً، بينما تترك التخمرات حثالة عضوية غنية بالطاقة.',
      leftItems: [
        { id: 'l1', text: 'Respiration cellulaire' },
        { id: 'l2', text: 'Fermentation lactique' },
        { id: 'l3', text: 'Fermentation alcoolique' },
        { id: 'l4', text: 'Glycolyse' }
      ],
      rightItems: [
        { id: 'r1', text: 'Étape commune de dégradation anaérobie du glucose en 2 pyruvates.' },
        { id: 'r2', text: 'Oxydation complète produisant de l\'énergie élevée et des résidus minéraux dénués d\'énergie.' },
        { id: 'r3', text: 'Oxydation incomplète induisant du CO2 et un déchet alcoolique inflammable.' },
        { id: 'r4', text: 'Oxydation incomplète produisant un acide carboxylique responsable de fatigue musculaire.' }
      ],
      correctPairs: {
        'l1': 'r2',
        'l2': 'r4',
        'l3': 'r3',
        'l4': 'r1'
      }
    },
    {
      id: 'u1-g4-q8',
      type: 'qcm',
      title: 'Rendement énergétique de la fermentation',
      instruction: 'Pourquoi le rendement énergétique théorique de la fermentation est très bas (environ 2%) ?',
      explanation: 'Le rendement est faible car la dégradation est incomplète : la majorité de l\'énergie chimique initiale du glucose reste stockée dans les liaisons chimiques du déchet organique (lactate ou éthanol).',
      explanationAr: 'المردودية ضعيفة لأن الهدم غير كامل: تظل غالبية الطاقة الكيميائية الأولية للكليكوز مخزنة في الروابط الكيميائية للفضلات العضوية (حمض لبني أو إيثانول).',
      options: [
        'Car l\'éthanol et l\'acide lactique s\'évaporent de la cellule.',
        'Car l\'énergie chimique reste séquestrée dans les liaisons des résidus organiques produits.',
        'Car la cellule consomme de grandes quantités d\'O2 pour détoxifier l\'acide.',
        'Car le cycle de Krebs consomme toute l\'énergie.'
      ],
      correctIndices: [1],
      allowMultiple: false
    },
    {
      id: 'u1-g4-q9',
      type: 'table',
      title: 'Bilan de matière et d\'énergie',
      instruction: 'Complétez la comparaison de matière pour ces métabolismes.',
      explanation: 'La fermentation alcoolique produit du CO2, alors que la fermentation lactique ne produit aucun gaz solide ou volatil.',
      explanationAr: 'ينتج التخمر الكحولي CO2، بينما لا ينتج التخمر اللبني أي غاز.',
      columns: [
        { id: 'lact', label: 'Fermentation Lactique' },
        { id: 'alco', label: 'Fermentation Alcoolique' }
      ],
      rows: [
        {
          id: 'row-1',
          statement: 'Absence totale de dégagement de dioxyde de carbone (CO2).',
          expectedChoices: { 'lact': true, 'alco': false }
        },
        {
          id: 'row-2',
          statement: 'Production d\'un déchet organique à 2 carbones (C2H5OH).',
          expectedChoices: { 'lact': false, 'alco': true }
        },
        {
          id: 'row-3',
          statement: 'Production de 2 ATP nets par molécule de glucose dégradée.',
          expectedChoices: { 'lact': true, 'alco': true }
        }
      ]
    },
    {
      id: 'u1-g4-q10',
      type: 'qcm',
      title: 'Effet Pasteur',
      instruction: 'Qu\'observe-t-on lorsque l\'on fait passer des levures d\'un milieu anaérobie à un milieu aérobie ?',
      explanation: 'C\'est l\'effet Pasteur : la présence d\'O2 favorise la respiration, ce qui donne un rendement bien supérieur de 36/38 ATP. Les levures consomment alors beaucoup moins de glucose pour se diviser.',
      explanationAr: 'تأثير باستور: يفضل وجود الأ6سجين التنفس، مما يعطي مردودية طاقية أعلى بكثير. تستهلك الخمائر كليكوز أقل للنمو والانقسام.',
      options: [
        'Elles augmentent fortement leur consommation de glucose.',
        'Elles arrêtent de croître à cause de la toxicité du dioxygène.',
        'Leur consommation de glucose diminue car la respiration est beaucoup plus efficace énergétiquement.',
        'Elles se mettent à fabriquer uniquement de l\'acide lactique.'
      ],
      correctIndices: [2],
      allowMultiple: false
    }
  ],

  // Group 5 (10 Questions): Contraction Musculaire et Sarcomère
  [
    {
      id: 'u1-g5-q1',
      type: 'qcm',
      title: 'L\'unité structurale et fonctionnelle du muscle',
      instruction: 'Nommez l\'unité de contraction fondamentale située entre deux stries Z.',
      explanation: 'Le sarcomère est l\'unité contractile microscopique fondamentale de la myofibrille du muscle strié squelettique, délimitée par deux stries Z consécutives.',
      explanationAr: 'الساركومير هو الوحدة البنيوية والوظيفية للييف العضلي، ويحد بين خطي Z متتاليين.',
      options: [
        'Le sarcoplasme',
        'Le sarcomère',
        'La bande sombre A',
        'La strie M'
      ],
      correctIndices: [1],
      allowMultiple: false
    },
    {
      id: 'u1-g5-q2',
      type: 'qcm',
      title: 'Composition des filaments fins',
      instruction: 'Quels types de protéines constituent principalement les filaments fins du sarcomère ?',
      explanation: 'Les filaments fins sont formés de l\'actine, à laquelle sont associées d\'autres protéines régulatrices : la troponine et la tropomyosine.',
      explanationAr: 'تتكون الخيوط الدقيقة من الأكتين، وترتبط بها بروتينات تنظيمية أخرى: التروبونين والتروبوميوزين.',
      options: [
        'La myosine uniquement',
        'L\'actine, la troponine et la tropomyosine',
        'L\'actine et la myosine conjointement',
        'L\'ATP synthase'
      ],
      correctIndices: [1],
      allowMultiple: false
    },
    {
      id: 'u1-g5-q3',
      type: 'qcm',
      title: 'Composition des filaments épais',
      instruction: 'De quelle protéine sont formés les filaments épais du sarcomère ?',
      explanation: 'Les filaments épais sont constitués de molécules de myosine, caractérisées par des queues torsadées et des têtes mobiles chargées d\'énergie chimique.',
      explanationAr: 'تتكون الخيوط السميكة من جزيئات الميوزين، وتتميز برؤوس متحركة قادرة على حلمأة جزيئات ATP.',
      options: [
        'L\'actine',
        'La troponine',
        'La myosine',
        'La myoglobine'
      ],
      correctIndices: [2],
      allowMultiple: false
    },
    {
      id: 'u1-g5-q4',
      type: 'qcm',
      title: 'Variations structurales lors de la contraction',
      instruction: 'Quels changements structuraux observe-t-on lors du raccourcissement du sarcomère ?',
      explanation: 'Lors de la contraction, les bandes claires (I) et la zone H se rétrécissent, mais la longueur des bandes sombres (A) reste strictement constante.',
      explanationAr: 'عند الانقباض، يتقلص طول الحزات الفاتحة (I) والمنطقة H، بينما يظل طول الحزات الداكنة (A) ثابتاً تماماً.',
      options: [
        'Le rétrécissement des bandes sombres et élargissement de la zone H.',
        'La diminution de longueur des filaments de myosine.',
        'Le raccourcissement des bandes claires I et de la zone H, sans modification de la bande sombre A.',
        'La fusion des stries Z.'
      ],
      correctIndices: [2],
      allowMultiple: false
    },
    {
      id: 'u1-g5-q5',
      type: 'dropdown',
      title: 'Rôle initiateur du Calcium',
      instruction: 'Sélectionnez l\'événement déclenché par l\'influx nerveux.',
      explanation: 'Le Ca2+ libéré se lie à la troponine, ce qui déplace la tropomyosine et libère le site d\'attachement de la myosine sur l\'actine.',
      explanationAr: 'يرتبط الكالسيوم المحرر بالتروبونين، مما يؤدي إلى إزاحة التروبوميوزين وتحرير موقع ارتباط الميوزين على الأكتين.',
      textWithPlaceholders: 'L\'excitation nerveuse provoque la libération massive d\'ions [drop-0] par le réticulum sarcoplasmique. Ces ions se fixent sur la [drop-1], masquant l\'inhibition et rendant les sites d\'actine accessibles aux têtes de [drop-2].',
      dropdowns: {
        'drop-0': {
          id: 'drop-0',
          options: ['Calcium (Ca2+)', 'Sodium (Na+)', 'Magnésium (Mg2+)'],
          correctValue: 'Calcium (Ca2+)'
        },
        'drop-1': {
          id: 'drop-1',
          options: ['troponine', 'globuline', 'myosine'],
          correctValue: 'troponine'
        },
        'drop-2': {
          id: 'drop-2',
          options: ['myosine', 'collagène', 'cytoplasme'],
          correctValue: 'myosine'
        }
      }
    },
    {
      id: 'u1-g5-q6',
      type: 'qcm',
      title: 'Étape motrice - Pivotement des têtes',
      instruction: 'Qu\'est-ce qui provoque le pivotement mécanique des têtes de myosine et le glissement de l\'actine ?',
      explanation: 'La libération d\'ADP et de phosphate inorganique (Pi) par la tête de myosine déclenche son pivotement de 90° à 45°, tirant l\'actine vers le centre du sarcomère.',
      explanationAr: 'تؤدي مغادرة ADP و Pi لرؤوس الميوزين إلى دورانها من 90° إلى 45°، مما يسحب الأكتين نحو مركز الساركومير (الخط M).',
      options: [
        'La liaison d\'une nouvelle molécule d\'ATP sur les têtes.',
        'La libération d\'ADP et du phosphate inorganique (Pi) préalablement hydrolysés.',
        'L\'entrée de glucose dans la cellule musculaire.',
        'L\'inversion du potentiel électrique membranaire.'
      ],
      correctIndices: [1],
      allowMultiple: false
    },
    {
      id: 'u1-g5-q7',
      type: 'qcm',
      title: 'Étape de détachement actine-myosine',
      instruction: 'Quel corps biochimique permet de détacher la liaison étroite entre l\'actine et la myosine ?',
      explanation: 'Le détachement du complexe actomytosine se fait uniquement grâce à la fixation d\'une nouvelle molécule d\'ATP sur la tête de myosine.',
      explanationAr: 'يتم انفصال مركب الأكتوميوزين فقط بفضل ارتباط جزيئة ATP جديدة برأس الميوزين.',
      options: [
        'La libération de calcium',
        'La fixation d\'une nouvelle molécule d\'ATP',
        'L\'absorption d\'acide lactique',
        'La baisse de la température sarcoplasmique'
      ],
      correctIndices: [1],
      allowMultiple: false
    },
    {
      id: 'u1-g5-q8',
      type: 'matching',
      title: 'Régénération musculaire de l\'ATP',
      instruction: 'Reliez chaque mécanisme métabolique de régénération de l\'ATP musculaire à sa vitesse et sa spécificité.',
      explanation: 'Les voies anaérobies rapides comme la phosphocréatine permettent un effort immédiat, tandis que la respiration soutient un travail endurant.',
      explanationAr: 'تسمح المسالك السريعة اللاهوائية كالفوسفوكرياتين بمجهود عضلي فوري، بينما يضمن التنفس مجهوداً مستداماً.',
      leftItems: [
        { id: 'l1', text: 'Phosphocréatine' },
        { id: 'l2', text: 'Voie anaérobie lactique' },
        { id: 'l3', text: 'Respiration cellulaire' },
        { id: 'l4', text: 'Voie de la Myokinase' }
      ],
      rightItems: [
        { id: 'r1', text: 'Régénération lente à rendement très élevé, adaptée aux efforts d\'endurance prolongés.' },
        { id: 'r2', text: 'Régénération ultra-rapide sans oxygène par transfert direct d\'un groupement phosphate à l\'ADP.' },
        { id: 'r3', text: 'Régénération de secours rapide produisant du lactate lié à des courbatures temporaires.' },
        { id: 'r4', text: 'Voie d\'urgence immédiate convertissant 2 ADP en 1 ATP et 1 AMP.' }
      ],
      correctPairs: {
        'l1': 'r2',
        'l2': 'r3',
        'l3': 'r1',
        'l4': 'r4'
      }
    },
    {
      id: 'u1-g5-q9',
      type: 'table',
      title: 'Comparaison des types de fibres musculaires',
      instruction: 'Distinguez les fibres de type I (lentes/rouges) des fibres de type II (rapides/blanches) selon leurs caractéristiques métaboliques.',
      explanation: 'Les fibres I sont riches en mitochondries pour la respiration. Les fibres II exploitent principalement la glycolyse anaérobie.',
      explanationAr: 'الألياف العضلية من الصنف الأول غنية بالميتوكوندريات لاعتمادها على التنفس، بينما تعتمد الألياف من الصنف الثاني أساساً على مسلك التخمر.',
      columns: [
        { id: 'fib1', label: 'Fibres à contraction lente (Type I)' },
        { id: 'fib2', label: 'Fibres à contraction rapide (Type II)' }
      ],
      rows: [
        {
          id: 'row-1',
          statement: 'Riches en mitochondries et en myoglobine (vascularisation élevée pour l\'endurance).',
          expectedChoices: { 'fib1': true, 'fib2': false }
        },
        {
          id: 'row-2',
          statement: 'Possèdent peu de mitochondries, très adaptées aux efforts explosifs de courte durée.',
          expectedChoices: { 'fib1': false, 'fib2': true }
        },
        {
          id: 'row-3',
          statement: 'Se fatiguent très rapidement en produisant d\'importantes quantités d\'acide lactique.',
          expectedChoices: { 'fib1': false, 'fib2': true }
        }
      ]
    },
    {
      id: 'u1-g5-q10',
      type: 'qcm',
      title: 'La rigidité cadavérique (Rigor mortis)',
      instruction: 'Pourquoi les muscles se figent-ils de manière rigide quelques heures après la mort ?',
      explanation: 'Après la mort, la cellule n\'étant plus capable d\'hydrolyser du glucose, les réserves d\'ATP tombent à zéro. En absence d\'ATP, les têtes de myosine restent définitivement liées à l\'actine.',
      explanationAr: 'بعد الموت، ينعدم تركيب جزيئات ATP. ونتيجة لذلك، يتعذر انفصال رؤوس الميوزين عن خيوط الأكتين، مما يثبت العضلات في حالة تشنج.',
      options: [
        'À cause d\'une libération massive d\'enzymes digestives.',
        'Par manque d\'oxygène provoquant une baisse de pH.',
        'Par épuisement complet de l\'ATP, empêchant le détachement des têtes de myosine de l\'actine.',
        'Par solidification des lipides membranaires.'
      ],
      correctIndices: [2],
      allowMultiple: false
    }
  ]
];
