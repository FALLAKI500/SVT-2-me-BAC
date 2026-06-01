import { SVTQuestion } from '../types';

export const unit5Groups: SVTQuestion[][] = [
  // Group 1: Phénomènes de Subduction et Magmatisme associé
  [
    {
      id: 'u5-g1-q1',
      type: 'qcm',
      title: 'Définition de la subduction',
      instruction: 'Qu\'est-ce que le processus géologique de subduction ?',
      explanation: 'La subduction est le plongeon d\'une plaque d\'origine lithosphérique océanique (dense) sous une plaque sus-jacente (océanique ou continentale, moins dense).',
      explanationAr: 'الظاهرة الجيولوجية للتمر (Subduction) هي انغراز صفيحة صخرية محيطية أكثر كثافة تحت صفيحة صخرية راكبة (محيطية أو قارية) أقل كثافة.',
      options: [
        'La remontée du manteau vers l\'océan.',
        'La collision de deux plaques sialiques.',
        'Le plongement d\'une lithosphère océanique dense sous une autre plaque lithosphérique de moindre densité.',
        'Le détachement d\'une nappe de charriage.'
      ],
      correctIndices: [2],
      allowMultiple: false
    },
    {
      id: 'u5-g1-q2',
      type: 'qcm',
      title: 'L\'alignement sismique de Benioff',
      instruction: 'Comment s\'explique la répartition oblique des foyers de séismes le long du plan incliné de Benioff ?',
      explanation: 'Le plan incliné de Benioff matérialise la rupture physique froide de la plaque océanique rigide subduite s\'enfonçant progressivement au cœur du manteau asthénosphérique chaud.',
      explanationAr: 'يبرز مائل بينيوف (Benioff) الانفجارات الزلزالية الناتجة عن تماسك وانزلاق الصفيحة الرملية الصلبة والباردة أثناء انغرازها داخل الرداء الساخن.',
      options: [
        'Par la compression directe des sables littoraux.',
        'Il correspond au tracé d\'enfoncement de la plaque océanique froide et rigide dans le manteau chaud.',
        'Par de la fusion partielle d\'uranium.',
        'Par une inversion thermique locale.'
      ],
      correctIndices: [1],
      allowMultiple: false
    },
    {
      id: 'u5-g1-q3',
      type: 'qcm',
      title: 'Les anomalies thermiques de subduction',
      instruction: 'Quelles anomalies thermiques spécifiques caractérisent une zone de subduction active ?',
      explanation: 'La subduction présente des anomalies thermiques négatives (isothermes incurvées vers le bas) dues à la froideur de la plaque océanique descendante, et des anomalies thermiques positives sous le volcanisme de l\'arc.',
      explanationAr: 'تتميز منطقة التمر بشذوذ حراري سالِب (انحناء خطوط مساواة الحرارة نحو الأسفل) بسبب برودة الصفيحة المنغرزة، وشذوذ حراري موجَب تحت القوس البركاني.',
      options: [
        'Une température uniforme constante à 1000°C.',
        'Des anomalies thermiques positives sous la fosse et négatives sous l\'arc volcanique.',
        'Des anomalies thermiques négatives (isothermes s\'incurvant vers le bas) le long de la fosse et positives sous l\'arc volcanique.',
        'Absence de gradient géothermique.'
      ],
      correctIndices: [2],
      allowMultiple: false
    },
    {
      id: 'u5-g1-q4',
      type: 'qcm',
      title: 'Le prisme d\'accrétion',
      instruction: 'Qu\'est-ce que le prisme d\'accrétion observable au niveau d\'une fosse océanique de subduction ?',
      explanation: 'Le prisme d\'accrétion est constitué d\'un empilement d\'écailles de sédiments marins, rabotés de la plaque océanique subduite par la plaque chevauchante lors du plongement.',
      explanationAr: 'موشور التراكم (Prisme d\'accrétion) هو تراكم وتراكب للرواسب البحرية التي كشطتها الصفيحة الراكبة من فوق الصفيحة المنغرزة أثناء تمرها.',
      options: [
        'Une plaque volcanique figée.',
        'Un empilement d\'écailles de sédiments marins rabotés et comprimés sur la marge active.',
        'Le résidu d\'un métamorphisme de contact thermique.',
        'La racine de la croûte sialique.'
      ],
      correctIndices: [1],
      allowMultiple: false
    },
    {
      id: 'u5-g1-q5',
      type: 'dropdown',
      title: 'Origine et hydratation du magma de subduction',
      instruction: 'Complétez l\'analyse pétrogénétique du volcanisme andésitique.',
      explanation: 'Le magma de subduction provient de la fusion partielle de la péridotite hydratée du manteau. L\'eau est libérée par les transformations métamorphiques de la croûte subduite.',
      explanationAr: 'ينتج صهير التمر عن انصهار جزئي لبيريدوتيت الرداء المميّهة. ويوفر الماء بفعل تراجع تميه صخور الصفيحة المنغرزة بفعل ارتفاع الضغط.',
      textWithPlaceholders: 'Dans une subduction, l\'échauffement et la pression provoquent la déshydratation des roches de la croûte océanique. L\'eau libérée migre vers le manteau supérieur chevauchant, abaissant le point de fusion de la [drop-0]. La fusion partielle de cette roche produit un magma [drop-1] qui cristallise en [drop-2] en surface.',
      dropdowns: {
        'drop-0': {
          id: 'drop-0',
          options: ['péridotite hydratée', 'éclogite pure', 'gneiss sialique'],
          correctValue: 'péridotite hydratée'
        },
        'drop-1': {
          id: 'drop-1',
          options: ['andésitique acide', 'basaltique fluide', 'granitique sec'],
          correctValue: 'andésitique acide'
        },
        'drop-2': {
          id: 'drop-2',
          options: ['andésite (roche microlitique)', 'granite d\'anatexie', 'gabbro de lit'],
          correctValue: 'andésite (roche microlitique)'
        }
      }
    },
    {
      id: 'u5-g1-q6',
      type: 'qcm',
      title: 'La roche plutonique caractéristique de la subduction',
      instruction: 'Parmi les roches de subduction suivantes, laquelle possède une structure grenue liée à un refroidissement lent en profondeur ?',
      explanation: 'La granodiorite est la roche plutonique grenue emblématique des zones de subduction. L\'andésite (même composition chimique) refroidit vite en surface sous structure microlitique.',
      explanationAr: 'تعتبر الكرانوديوريت (Granodiorite) صخرة صهارية باطنية ذات بنية محببة (Refroidissement lent) ناتجة عن تبريد بطيء في العمق بمنطقة التمر.',
      options: [
        'L\'andésite microlitique.',
        'Le gabbro des fonds océaniques.',
        'La granodiorite (plutonique à structure grenue).',
        'La rhyolite vitreuse.'
      ],
      correctIndices: [2],
      allowMultiple: false
    },
    {
      id: 'u5-g1-q7',
      type: 'matching',
      title: 'Signes géophysiques marginaux',
      instruction: 'Associez chaque observation physique d\'une zone de subduction active à sa définition ou cause.',
      explanation: 'Fosse océanique (creux d\'enfoncement), flux de chaleur faible (enfoncement froid), structure andésitique (microlites).',
      explanationAr: 'ترتبط الهوة المحيطية (Fosse) بانخفاض قعر البحر بسبب انغراز الصفيحة، ويرتبط ضعف التدفق الحراري ببرودتها.',
      leftItems: [
        { id: 'l1', text: 'La fosse océanique' },
        { id: 'l2', text: 'Structure microlitique' },
        { id: 'l3', text: 'Andésite' },
        { id: 'l4', text: 'Faible flux thermique sous la fosse' }
      ],
      rightItems: [
        { id: 'r1', text: 'Caractéristique de refroidissement rapide en deux temps d\'un magma volcanique aérien en petits cristaux.' },
        { id: 'r2', text: 'Roche volcanique intermédiaire d\'arc, riche en plagioclases et amphiboles sous structure microlitique.' },
        { id: 'r3', text: 'Dépression sous-marine profonde asymétrique marquant le point de plongement de la lithosphère.' },
        { id: 'r4', text: 'Conséquence géophysique directe de l\'enfoncement brutal d\'une plaque froide au cœur de l\'asthénosphère.' }
      ],
      correctPairs: {
        'l1': 'r3',
        'l2': 'r1',
        'l3': 'r2',
        'l4': 'r4'
      }
    },
    {
      id: 'u5-g1-q8',
      type: 'qcm',
      title: 'Le moteur physique de la subduction',
      instruction: 'Quel est le moteur physique principal permettant à une lithosphère océanique de plonger sous la lithosphère continentale ?',
      explanation: 'La force d\'enfoncement s\'active par gravité : en vieillissant et s\'éloignant de la dorsale, la plaque océanique se refroidit, sa densité augmente et dépasse celle de l\'asthénosphère sous-jacente dès l\'âge de 30 millions d\'années.',
      explanationAr: 'تسبح الصفيحة المحيطية بفعل الجاذبية: مع تقدم عمرها وابتعادها عن الذروة، تبرد وارتفاع كثافتها ليتجاوز كثافة الرداء الأستيدوسفيري تحتها.',
      options: [
        'La rotation équinoxiale terrestre.',
        'La hausse de la densité de la lithosphère océanique avec le vieillissement et le refroidissement, dépassant celle de l\'asthénosphère.',
        'La pression directe du vent marin.',
        'La fusion des glaces antarctiques.'
      ],
      correctIndices: [1],
      allowMultiple: false
    },
    {
      id: 'u5-g1-q9',
      type: 'table',
      title: 'Nature lithosphérique : Océanique vs Continentale',
      instruction: 'Indiquez les principales couches géologiques constitutives de chaque lithosphère.',
      explanation: 'La lithosphère océanique comprend sédiments, basaltes, gabbros et péridotite. La lithosphère continentale comprend matériel granitique gneissique et péridotite.',
      explanationAr: 'يتكون الغلاف الصخري المحيطي من البازلت والغابرو والبيريدوتيت. ويتكون القاري من الكرانيت والنيس والبيريدوتيت.',
      columns: [
        { id: 'lithOce', label: 'Spécifique Lithosphère Océanique' },
        { id: 'lithCon', label: 'Spécifique Lithosphère Continentale' }
      ],
      rows: [
        {
          id: 'row-1',
          statement: 'Possède une épaisseur moyenne de 7 à 10 kilomètres de croûte gabbro-basaltique dense.',
          expectedChoices: { 'lithOce': true, 'lithCon': false }
        },
        {
          id: 'row-2',
          statement: 'Forte épaisseur de croûte s\'étirant de 30 à 70 km formée surtout de roches de type granite.',
          expectedChoices: { 'lithOce': false, 'lithCon': true }
        },
        {
          id: 'row-3',
          statement: 'Contient l\'association de la péridotite mantellique au-dessous de la limite du Moho.',
          expectedChoices: { 'lithOce': true, 'lithCon': true }
        }
      ]
    },
    {
      id: 'u5-g1-q10',
      type: 'qcm',
      title: 'Marge passive vs Marge active',
      instruction: 'Qu\'est-ce qui différencie une marge continentale active d\'une marge passive ?',
      explanation: 'Une marge continentale active est le siège d\'une subduction et présente séismes et volcanisme. Une marge passive est une transition calme océan/continent au sein d\'une même plaque.',
      explanationAr: 'تتميز الهامش النشيط بوجود تمر مصحوب بنشاط زلزالي وبركاني كثيف، بينما الهامش الخامل انتقال هادئ داخل نفس الصفيحة.',
      options: [
        'Son taux d\'érosion éolienne.',
        'La présence d\'une fosse de subduction active génératrice de séismes et de magmatisme andésitique.',
        'Son altitude moyenne supérieure.',
        'La sédimentation calcaire uniquement.'
      ],
      correctIndices: [1],
      allowMultiple: false
    }
  ],

  // Group 2: Phénomènes d'Obduction, Collision et Ophiolites
  [
    {
      id: 'u5-g1-q11',
      type: 'qcm',
      title: 'Définition de l\'obduction',
      instruction: 'En géologie tectonique, quel est le mécanisme physique de l\'obduction ?',
      explanation: 'L\'obduction est le chevauchement anormal d\'une portion de la lithosphère océanique sur la bordure d\'une lithosphère continentale.',
      explanationAr: 'الطفو (Obduction) هو زحف وصعود غير اعتيادي لمقاطع من الغلاف الصخري المحيطي فوق الهامش القاري.',
      options: [
        'Le plongement d\'un continent sous un autre.',
        'La fusion partielle de la péridotite.',
        'Le chevauchement et glissement anormal d\'une partie de la lithosphère océanique sur une lithosphère continentale.',
        'L\'effondrement d\'une dorsale.'
      ],
      correctIndices: [2],
      allowMultiple: false
    },
    {
      id: 'u5-g1-q12',
      type: 'qcm',
      title: 'Le témoin ophiolitique d\'un paléo-océan',
      instruction: 'Qu\'atteste la présence d\'un complexe ophiolitique au cœur des chaînes de montagnes à l\'examen national ?',
      explanation: 'L\'ophiolite représente une relique (fragment témoin) de l\'ancienne lithosphère océanique, prouvant l\'existence historique d\'un ancien océan disparu par subduction puis obduction.',
      explanationAr: 'يدل وجود مركب الأفيوليت (Ophiolite) في وسط سلاسل جبال الاصطدام أو الطفو على وجود محيط قديم منغلق.',
      options: [
        'Un climat tropical volcanique.',
        'La présence d\'un fragment de l\'ancienne lithosphère océanique témoignant de la fermeture d\'un paléo-océan.',
        'La structure d\'une subduction inachevée.',
        'Une anatexie totale.'
      ],
      correctIndices: [1],
      allowMultiple: false
    },
    {
      id: 'u5-g1-q13',
      type: 'qcm',
      title: 'La série ophiolitique classique',
      instruction: 'Identifiez la succession verticale standardisée des roches d\'une ophiolite, de bas en haut.',
      explanation: 'La série ophiolithique classique empile verticalement : Péridotite (manteau), Gabbro (croûte base), Basaltes en filons puis basaltes en coussins (pillow lavas) solides.',
      explanationAr: 'يتكون المركب الأفيوليتي عمودياً من الأسفل نحو الأعلى من: البيريدوتيت، الغابرو، عروق بازلتية، وبازلت وسائدي (Pillow lavas)، تعلوها رواسب بحرية.',
      options: [
        'Granite → Gneiss → Schiste → Calcaire.',
        'Péridotites (base) → Gabbros → Filons de basaltes → Basaltes en coussins (pillow-lavas).',
        'Rhyolite → Micaschiste → Andésite.',
        'Uniquement des argiles métamorphisées.'
      ],
      correctIndices: [1],
      allowMultiple: false
    },
    {
      id: 'u5-g1-q14',
      type: 'qcm',
      title: 'La collision continentale',
      instruction: 'Comment s\'établit la formation d\'une chaîne de collision de type Himalayenne après subduction ?',
      explanation: 'La collision résulte de l\'affrontement direct de deux lithosphères continentales, après disparition totale du domaine océanique intermédiaire par subduction.',
      explanationAr: 'ينتج سلاسل الاصطدام (Collision) عن جبه مجابهة والتقاء كتلتين قاريتين بعد انغلاق كلي للمجال المحيطي الذي كان يفصل بينهما.',
      options: [
        'Par écartement thermique des blocs continentaux.',
        'Par l\'affrontement direct de deux lithosphères continentales après fermeture totale d\'un domaine océanique intermédiaire.',
        'Par un séisme unique sur Benioff.',
        'Par métamorphisme de contact.'
      ],
      correctIndices: [1],
      allowMultiple: false
    },
    {
      id: 'u5-g1-q15',
      type: 'dropdown',
      title: 'Indices d\'épaississement de la croûte terrestre',
      instruction: 'Complétez l\'analyse tectonique des structures de compression de collision.',
      explanation: 'La compression tectonique provoque un raccourcissement horizontal et un épaississement vertical via des plis, failles inverses, nappes de charriage et une racine crustale plongeant sous le Moho.',
      explanationAr: 'تؤدي قوى الانضغاط بالاصطدام إلى حدوث تقصير أفقي وتلبيث عمودي للقشرة القارية بواسطة الطيات والفوالق المعكوسة وأوراق التراكب والجذر القشري (Racine crustale).',
      textWithPlaceholders: 'Dans une collision de plaques, d\'intenses forces compressives horizontales provoquent un raccourcissement. Ce raccourcissement s\'accompagne d\'un épaississement vertical par formation de plis, de [drop-0] et de nappes de charriage. L\'épaississement s\'observe en profondeur par une énorme [drop-1] qui fait s\'enfoncer la limite du [drop-2].',
      dropdowns: {
        'drop-0': {
          id: 'drop-0',
          options: ['failles inverses de chevauchement', 'failles normales d\'étirement', 'rifts volcaniques'],
          correctValue: 'failles inverses de chevauchement'
        },
        'drop-1': {
          id: 'drop-1',
          options: ['racine crustale (croûte dilatée)', 'lacune thermique', 'perte d\'ophiolite'],
          correctValue: 'racine crustale (croûte dilatée)'
        },
        'drop-2': {
          id: 'drop-2',
          options: ['Moho (discontinuité)', 'Benioff', 'Gutenberg'],
          correctValue: 'Moho (discontinuité)'
        }
      }
    },
    {
      id: 'u5-g1-q16',
      type: 'qcm',
      title: 'La nappe de charriage',
      instruction: 'Qu\'est-ce qu\'une nappe de charriage tectonique rencontrée en zone chevauchante ?',
      explanation: 'Une nappe de charriage est un ensemble de couches géologiques de grande taille qui a été décollé de sa base et déplacé (glissé) sur des distances de dizaines de kilomètres sous l\'action de contraintes compressives.',
      explanationAr: 'سديمة التراكب (Nappe de charriage) هي كتل صخرية شاسعة زحفت من مكانها الأصلي وتوضعت فوق كتل صخرية أخرى على مسافات هامة بفعل الانضغاط الجيولوجي.',
      options: [
        'Un bassin de sédimentation calme.',
        'Une grande faille normale d\'extension.',
        'Une couverture rocheuse déplacée et charriée sur de longues distances (plusieurs kilomètres), recouvrant un autre ensemble rocheux.',
        'Une structure ophiolithique pure.'
      ],
      correctIndices: [2],
      allowMultiple: false
    },
    {
      id: 'u5-g1-q17',
      type: 'matching',
      title: 'Déformations géologiques de compression',
      instruction: 'Reliez chaque déformation tectonique de type compressif à son comportement géométrique.',
      explanation: 'Faille inverse (raccourcissement), pli synclinal (cuvette comprimé), pli anticlinal (dôme), suture (ligne ophiolitique).',
      explanationAr: 'يرتبط الفالق المعكوس قوى الانضغاط وميل سطح الفالق، ويظهر الطي المحدب شكلاً مقوساً نحو الأعلى.',
      leftItems: [
        { id: 'l1', text: 'Faille inverse' },
        { id: 'l2', text: 'Pli anticlinal' },
        { id: 'l3', text: 'Pli synclinal' },
        { id: 'l4', text: 'Suture ophiolitique' }
      ],
      rightItems: [
        { id: 'r1', text: 'Déformation ductile formant un plissement orienté en forme de cuvette ou berceau.' },
        { id: 'r2', text: 'Fracture cassante caractérisée par le glissement de deux compartiments provoquant un raccourcissement.' },
        { id: 'r3', text: 'Déformation de plissement convexe orientée vers le haut où les roches anciennes sont au cœur.' },
        { id: 'r4', text: 'Ligne frontière étroite marquant le point précis de confrontation et de cicatrice de la collision.' }
      ],
      correctPairs: {
        'l1': 'r2',
        'l2': 'r3',
        'l3': 'r1',
        'l4': 'r4'
      }
    },
    {
      id: 'u5-g1-q18',
      type: 'qcm',
      title: 'Roches magmatiques de collision',
      instruction: 'Quel corps rocheux cristallin s\'accumule sous forme de massifs géants au cours de l\'épaississement de la collision continentale ?',
      explanation: 'Le granite d\'anatexie (ou complexe sialique d\'anatexie) se forme au niveau de la racine crustale par fusion partielle de la croûte épaissie et chaude.',
      explanationAr: 'تشكل كتل الكرانيتات الناتجة عن انصهار جزئي للقشرة القارية السميكة (Granite d\'anatexie) صخوراً متبلورة باطنية مرافقة للاصطدام.',
      options: [
        'Des gabbros hydratés.',
        'De grands plutons de granite d\'anatexie formés par fusion locale de la croûte épaissie.',
        'Des andésites volcaniques filoniennes.',
        'Du basalte en pillow lavas.'
      ],
      correctIndices: [1],
      allowMultiple: false
    },
    {
      id: 'u5-g1-q19',
      type: 'table',
      title: 'Indices pétrographiques',
      instruction: 'Identifiez le domaine géodynamique représenté par chaque type de roche.',
      explanation: 'L\'ophiolite prouve la disparition d\'un paléo-océan. Les andésites et granodiorites prouvent un magmatisme de subduction active.',
      explanationAr: 'يدل الأفيوليت على غلق مجال محيطي، بينما تدل الأنديزيت على حدوث بركانية مناطق التمر.',
      columns: [
        { id: 'repOce', label: 'Indique un Domaine Océanique/Obduction' },
        { id: 'repSub', label: 'Indique un Magmatisme de Subduction' }
      ],
      rows: [
        {
          id: 'row-1',
          statement: 'Affleurements massifs de basaltes sous structure pillow-lavas associés à des radiolarites.',
          expectedChoices: { 'repOce': true, 'repSub': false }
        },
        {
          id: 'row-2',
          statement: 'Gisements volcaniques andésitiques à texture microlitique et présence de filons de dacite.',
          expectedChoices: { 'repOce': false, 'repSub': true }
        },
        {
          id: 'row-3',
          statement: 'Presence de complexes de péridotites serpentinisées et de métagabbros riches en glaucophane.',
          expectedChoices: { 'repOce': true, 'repSub': false }
        }
      ]
    },
    {
      id: 'u5-g1-q20',
      type: 'qcm',
      title: 'Exemples nationaux de chaînes de montagnes',
      instruction: 'Laquelle de ces chaînes de montagnes mondiales correspond à une collision typique présentant des complexes d\'obduction ophiolitiques ?',
      explanation: 'La chaîne d\'Oman présente le plus célèbre complexe d\'obduction ophiolitique du monde (Semail). L\'Himalaya est une collision pure, et les Andes sont une subduction pure.',
      explanationAr: 'تعتبر جبال عمان (Oman) النموذج العالمي الأمثل لسلسلة الطفو، بينما الأنديز تمثل سلسلة التمر والهيمالايا تمثل الاصطدام.',
      options: [
        'La chaîne des Andes (Chili).',
        'La chaîne d\'Oman (caractérisée par une obduction géante d\'ophiolite océanique).',
        'Le rift est-africain.',
        'Le plateau islandais.'
      ],
      correctIndices: [1],
      allowMultiple: false
    }
  ],

  // Group 3: Métamorphisme d'enfoncement (régional) et Métamorphisme thermique (de contact)
  [
    {
      id: 'u5-g1-q21',
      type: 'qcm',
      title: 'Définition du métamorphisme',
      instruction: 'Qu\'est-ce que le métamorphisme au sens de la pétrologie ?',
      explanation: 'Le métamorphisme est une transformation structurale et minéralogique à l\'état solide des roches préexistantes, sous l\'effet d\'une variation drastique de température et de pression.',
      explanationAr: 'التحول (Métamorphisme) هو تغير بنيوي وعيداني تكتسي الصخور الصلبة دون المرور بحالة الانصهار، وذلك تحت تأثير الحرارة والضغط.',
      options: [
        'La fusion complète d\'une roche de surface.',
        'Le transport et la sédimentation calcaire.',
        'Les transformations structurales and minéralogiques d\'une roche solide, sans fusion.',
        'L\'injection de gaz magmatiques d\'arc.'
      ],
      correctIndices: [2],
      allowMultiple: false
    },
    {
      id: 'u5-g1-q22',
      type: 'qcm',
      title: 'Facteurs du métamorphisme',
      instruction: 'Quels sont les deux principaux agents physiques déclencheurs du métamorphisme des roches de la croûte ?',
      explanation: 'La Température (T) (qui modifie la stabilité chimique des réseaux de minéraux) et la Pression (P) (liée à la profondeur et aux forces tectoniques) sont les deux agents moteurs du métamorphisme.',
      explanationAr: 'تتمثل عوامل التحول الأساسية والديناميكية لطبقات الصخور في الحرارة (T) والضغط (P).',
      options: [
        'La vitesse du vent et l\'érosion marine.',
        'La température (T) et la pression (P) lithostatique ou tectonique.',
        'Le taux d\'oxygène et le carbone.',
        'L\'écoulement de lixiviats.'
      ],
      correctIndices: [1],
      allowMultiple: false
    },
    {
      id: 'u5-g1-q23',
      type: 'qcm',
      title: 'Texture schisteuse vs Foliation',
      instruction: 'Quelle est la différence fondamentale de comportement minéralogique entre la schistosité et la foliation d\'une roche métamorphique ?',
      explanation: 'La schistosité est un débit en feuillets parallèles sans orientation des minéraux de nature différente. La foliation schiste présente en plus une alternance de lits minéraux de couleurs différentes (lits clairs quartz-feldspaths, lits sombres biotite-amphibole).',
      explanationAr: 'الانفصامية (Schistosité) هي قابلية الصخرة للتورق دون فرز المعادن، بينما التورق (Foliation) يتميز بظهور أسرة متعاقبة من الفاتحة والداكنة لمختلف المعادن الاصطناعية.',
      options: [
        'La schistosité n\'apparaît que dans les granites d\'arc.',
        'La schistosité correspond à une orientation plane de minéraux feuilletés, tandis que la foliation montre en plus une séparation et ségrégation en lits de minéraux clairs et sombres.',
        'Il n\'y a aucune schistosité dans les micaschistes.',
        'La foliation provient d\'une fusion partielle interne.'
      ],
      correctIndices: [1],
      allowMultiple: false
    },
    {
      id: 'u5-g1-q24',
      type: 'qcm',
      title: 'Séquence pélitique métamorphique',
      instruction: 'Dans une séquence métamorphique pélitique (riche en argile), quel est l\'ordre d\'évolution des roches d\'après le degré d\'intensité croissant du métamorphisme ?',
      explanation: 'La séquence pélitique évolue vers une condensation croissante : Argile/Schiste (faible) → Micaschiste (moyen) → Gneiss (très fort métamorphisme).',
      explanationAr: 'تتغير السلسلة الطينية (Séquence pélitique) بزيادة شدة التحول وفق الترتيب التالي: سجيل (Schiste) ثم ميكاشيست (Micaschiste) لنيس (Gneiss).',
      options: [
        'Gneiss → Schiste → Micaschiste.',
        'Schiste (degré faible) → Micaschiste (degré moyen) → Gneiss (degré fort).',
        'Grate d\'anatexie → Basalte → Radiolarite.',
        'Calcaire métamorphisé.'
      ],
      correctIndices: [1],
      allowMultiple: false
    },
    {
      id: 'u5-g1-q25',
      type: 'dropdown',
      title: 'Les polymorphes de silicates d\'alumine',
      instruction: 'Complétez l\'analyse géothermique des polymorphes composites.',
      explanation: 'Les silicates d\'alumine (Al2SiO5) possèdent trois polymorphes (andalousite, disthène, sillimanite) qui servent d\'index de température et pression.',
      explanationAr: 'تعتبر سيليكات الألومين مركب أندوسيت وديستين وسيلمانين معادن مؤشرة (Minéraux index) لتحديد حرارة وضغط تشكل الصخور.',
      textWithPlaceholders: 'Les silicates d\'alumine possèdent la formule brute Al2SiO5. Leurs domaines de stabilité diffèrent : l\'[drop-0] indique une basse pression et haute température (métamorphisme thermique/de contact), le [drop-1] indique une forte pression (subduction), et la [drop-2] matérialise l\'atteinte de hautes températures.',
      dropdowns: {
        'drop-0': {
          id: 'drop-0',
          options: ['andalousite', 'disthène', 'sillimanite'],
          correctValue: 'andalousite'
        },
        'drop-1': {
          id: 'drop-1',
          options: ['disthène', 'andalousite', 'péridotite'],
          correctValue: 'disthène'
        },
        'drop-2': {
          id: 'drop-2',
          options: ['sillimanite', 'micaschiste', 'argile'],
          correctValue: 'sillimanite'
        }
      }
    },
    {
      id: 'u5-g1-q26',
      type: 'qcm',
      title: 'Le métamorphisme de contact (thermique)',
      instruction: 'Quelle est la cause majeure de survenue d\'un métamorphisme de contact et sa structure cartographique ?',
      explanation: 'Le métamorphisme de contact (thermique) survient suite à l\'intrusion d\'un magma très chaud au sein des roches encaissantes froides, créant une auréole de métamorphisme caractérisée par de l\'andalousite.',
      explanationAr: 'ينتج تحول التماس (Métamorphisme de contact) عن صعود صهير ساخن ليخمد في صخور باردة مشكلاً هالة من التحول (Auréole) غنية بالأندلسيت.',
      options: [
        'Une élévation violente de la pression tectonique sans chaleur.',
        'L\'échauffement thermique des roches encaissantes froides au contact d\'une intrusion magmatique chaude, créant une auréole de métamorphisme localisée.',
        'Le passage de la faille de Benioff.',
        'La compression sous le prisme d\'accrétion.'
      ],
      correctIndices: [1],
      allowMultiple: false
    },
    {
      id: 'u5-g1-q27',
      type: 'matching',
      title: 'Minéraux index de pression/température',
      instruction: 'Reliez chaque minéral marqueur de l\'évaluation nationale à sa zone de stabilité physique.',
      explanation: 'La biotite apparait au métamorphisme moyen, le grenat au métamorphisme moyen/fort, le glaucophane caractérise la forte pression froide.',
      explanationAr: 'يدل الغلوكوفان على الضغط المرتفع والحرارة المنخفضة للتمر. وتدل السيلمانين على درجة تبلور حراري مفرط.',
      leftItems: [
        { id: 'l1', text: 'Le Glaucophane' },
        { id: 'l2', text: 'La Sillimanite' },
        { id: 'l3', text: 'La Chlorite' },
        { id: 'l4', text: 'L\'Andalousite' }
      ],
      rightItems: [
        { id: 'r1', text: 'Silicate d\'alumine d\'index de basse pression / haute température marquant le contact thermique.' },
        { id: 'r2', text: 'Minéral vert phyllosilicate traduisant une basse température et faible intensité (Schiste vert).' },
        { id: 'r3', text: 'Minéral bleu caractéristique d\'un métamorphisme de très haute pression et faible température.' },
        { id: 'r4', text: 'Faciès marquant les conditions ultimes de température avant fusion d\'anatexie (très haute température).' }
      ],
      correctPairs: {
        'l1': 'r3',
        'l2': 'r4',
        'l3': 'r2',
        'l4': 'r1'
      }
    },
    {
      id: 'u5-g1-q28',
      type: 'qcm',
      title: 'La notion d\'auréole métamorphique',
      instruction: 'Où se situe l\'auréole métamorphique et comment varie sa composition rocheuse ?',
      explanation: 'L\'auréole entoure un massif de granite intrusif. L\'intensité décroit au fur et à mesure que l\'on s\'éloigne du contact magmatique carbonaté chaud.',
      explanationAr: 'تحيط هالة التحول (Auréole) بالبلوتون الكرانيتي الداخلي، وتقل كثافة وقوة التحول كلما ابتعدنا عن البلوتون.',
      options: [
        'Dans les zones océaniques ophiolitiques.',
        'Autour d\'un pluton de granite intrusif, montrant une diminution graduelle de l\'intensité du métamorphisme avec la distance croissante.',
        'Dans le manteau supérieur de l\'ophiolite.',
        'Entre deux plaques d\'Oman.'
      ],
      correctIndices: [1],
      allowMultiple: false
    },
    {
      id: 'u5-g1-q29',
      type: 'table',
      title: 'Anomalies Structurales : Foliation vs Schistosité',
      instruction: 'Vérifiez les critères d\'orientation macroscopique et microscopique.',
      explanation: 'La schistosité permet aux roches d\'être clivées facilement en dalles. La foliation sépare la roche en bandes claires et sombres (litage différencié).',
      explanationAr: 'يدل لتورق (Foliation) على تجرد الصخرة لأسرة لتجمع المعادن الفاتحة والداكنة. بينما الانفصامية (Schistosité) تورق طيني سهل الانفصال.',
      columns: [
        { id: 'bSch', label: 'Spécifique à la Schistosité' },
        { id: 'bFol', label: 'Spécifique à la Foliation' }
      ],
      rows: [
        {
          id: 'row-1',
          statement: 'Caractérise spécifiquement les roches de type Gneiss présentant des bandes alternées claires et sombres.',
          expectedChoices: { 'bSch': false, 'bFol': true }
        },
        {
          id: 'row-2',
          statement: 'Plan de clivage mécanique développé par aplatissement de feuillets de micas sans ségrégation chimique.',
          expectedChoices: { 'bSch': true, 'bFol': false }
        },
        {
          id: 'row-3',
          statement: 'Se forme sous l\'exercice d\'une forte pression tectonique orientée (contrainte anisotrope).',
          expectedChoices: { 'bSch': true, 'bFol': true }
        }
      ]
    },
    {
      id: 'u5-g1-q30',
      type: 'qcm',
      title: 'Le métamorphisme régional (Dynamo-thermique)',
      instruction: 'Quel est l\'impact d\'un métamorphisme régional dynamo-thermique sur le plan géographique ?',
      explanation: 'Le métamorphisme régional (ou d\'enfoncement régional) couvre de très vastes surfaces géographiques au cœur des chaînes de collision, provoqué par l\'enfoncement croisé de vastes volumes crustaux sous fortes P et T.',
      explanationAr: 'يغطي التحول الإقليمي أو الديناميكي الحراري مساحات شاسعة من السلاسل الجبلية، وينتج عن ارتفاع الضغط والحرارة الإقليمية بمناطق التصادم.',
      options: [
        'Il s\'étend sur quelques mètres de contact.',
        'Il affecte de très vastes zones géographiques, caractérisées par d\'intenses déformations tectoniques et d\'épais volumes de croûte comprimés.',
        'Il élimine le Moho.',
        'Il empêche les séismes.'
      ],
      correctIndices: [1],
      allowMultiple: false
    }
  ],

  // Group 4: Les Faciès métamorphiques et Gradients Géothermiques
  [
    {
      id: 'u5-g1-q31',
      type: 'qcm',
      title: 'La notion de faciès métamorphique',
      instruction: 'Qu\'est-ce qu\'un faciès métamorphique ?',
      explanation: 'Un faciès métamorphique rassemble toutes les roches métamorphisées dans une même gamme définie de température et de pression, identifiées par une association minéralogique stable spécifique.',
      explanationAr: 'السحنة التحولية (Faciès métamorphique) هي مجموعة من الصخور التحولية التي تشكلت تحت نفس ظروف الحرارة والضغط، وتتميز بمعادن مستقرة معينة.',
      options: [
        'Une strate de fossiles.',
        'Un intervalle de pression et température matérialisé par une association stable caractéristique de minéraux.',
        'L\'orientation des failles inverses.',
        'Une péridotite non hydratée.'
      ],
      correctIndices: [1],
      allowMultiple: false
    },
    {
      id: 'u5-g1-q32',
      type: 'qcm',
      title: 'Le faciès caractéristique de la subduction active',
      instruction: 'Quel faciès de haute pression et basse température caractérise typiquement les métagabbros de subduction (mettant en évidence le glaucophane) ?',
      explanation: 'Le faciès des Schistes Bleus (contenant du glaucophane) et le faciès des Éclogites (contenant de l\'ombacite et du grenat) caractérisent typiquement le trajet HP-BT de la subduction froide.',
      explanationAr: 'تتميز صخور التمر بسحنة الشست الأزرق (Glaucophane) وسحنة الإيكلوجيت (Grenat + Jadeite) المعبِرين عن الضغط المرتفع والحرارة المنخفضة.',
      options: [
        'Le faciès des Schistes Verts.',
        'Le faciès des Schistes Bleus (avec glaucophane emblématique) et des Éclogites.',
        'La granulite thermique.',
        'La migmatite d\'anatexie.'
      ],
      correctIndices: [1],
      allowMultiple: false
    },
    {
      id: 'u5-g1-q33',
      type: 'qcm',
      title: 'Le gradient de moyenne pression / moyenne température',
      instruction: 'À quel contexte géodynamique géant associe-t-on le gradient de type Dalradien (Moyenne Pression / Moyenne Température) ?',
      explanation: 'Le gradient Dalradien (MP-MT) correspond aux zones d\'épaississement de collision continentale classique.',
      explanationAr: 'يرتبط مغاير أو تدرج حراري دالراديان (MP-MT) بوسط مناطق الاصطدام وسلاسل الجبال المقترنة بتراكبات هامة قارية.',
      options: [
        'Aux fractures d\'arc volcanique uniquement.',
        'Aux zones d\'épaississement de collision continentale.',
        'Aux rides océaniques calmes.',
        'Aux failles d\'Oman.'
      ],
      correctIndices: [1],
      allowMultiple: false
    },
    {
      id: 'u5-g1-q34',
      type: 'qcm',
      title: 'Evolution minéralogique d\'un gabbro subduit',
      instruction: 'Comment évolue minéralogiquement un gabbro océanique au cours de son enfoncement continu dans la subduction ?',
      explanation: 'Le gabbro (plagioclase, pyroxène) acquiert de l\'eau (chlorite, actinote: Schiste Vert), puis se déshydrate en s\'enfonçant profondément pour donner du Glaucophane (Schiste Bleu) puis de la Jadéite et du Grenat (Éclogite).',
      explanationAr: 'يتغير الغابرو نحو بوريست أخضر (أكتينوت) ثم شيست أزرق (غلوكوفان) ثم إيكلوجيت عاري ومجفف (بجوتات وغرونة).',
      options: [
        'Il devient du granite intrusif de contact.',
        'Il se déshydrate pour passer du faciès Schistes Verts (chlorite, actinote) au faciès Schistes Bleus (glaucophane) puis Éclogite (grenat, pyroxène sodique).',
        'Il fond instantanément au Moho.',
        'Il se fossilise en calcaire calcite.'
      ],
      correctIndices: [1],
      allowMultiple: false
    },
    {
      id: 'u5-g1-q35',
      type: 'dropdown',
      title: 'Gradients métamorphiques mondiaux',
      instruction: 'Complétez l\'analyse géodynamique des trois grands types de gradients thermodynamiques.',
      explanation: 'Le gradient HP-BT (IP/HP-BT ou de Benioff) est le gradient de subduction. Le gradient MP-MT (Dalradien) correspond à l\'épaississement de collision. Le gradient BP-HT (Abukuma) caractérise le métamorphisme thermique.',
      explanationAr: 'يعتبر التدرج HP-BT خاصاً بمناطق التمر الباردة، والتدرج MP-MT مميز لسلاسل الاصطدام، والتدرج BP-HT مرافق للميتامورفيسم الحراري للتماس.',
      textWithPlaceholders: 'La trajectoire d\'une roche dépend de son contexte tectonique. Le gradient de [drop-0] (Type Benioff) reflète un enfoncement rapide froid de subduction. Le gradient de [drop-1] caractérise un épaississement lié à des collisions continentales actives, tandis que le gradient [drop-2] (Type Abukuma) témoigne d\'un métamorphisme de contact.',
      dropdowns: {
        'drop-0': {
          id: 'drop-0',
          options: ['Haute Pression et Basse Température (HP-BT)', 'Moyenne Pression et Température (MP-MT)', 'Basse Pression et Haute Température (BP-HT)'],
          correctValue: 'Haute Pression et Basse Température (HP-BT)'
        },
        'drop-1': {
          id: 'drop-1',
          options: ['Moyenne Pression et Température (MP-MT)', 'Haute Pression et Basse Température (HP-BT)', 'Faciès éclogite pur'],
          correctValue: 'Moyenne Pression et Température (MP-MT)'
        },
        'drop-2': {
          id: 'drop-2',
          options: ['Basse Pression et Haute Température (BP-HT)', 'Haute Pression et Basse Température (HP-BT)', 'Dalradien'],
          correctValue: 'Basse Pression et Haute Température (BP-HT)'
        }
      }
    },
    {
      id: 'u5-g1-q36',
      type: 'qcm',
      title: 'L\'isogrande de métamorphisme',
      instruction: 'Qu\'indique une ligne d\'isograde tracée par le géologue sur une carte géologique de terrain ?',
      explanation: 'L\'isograde est une ligne reliant les points où apparaît pour la première fois un minéral index, délimitant ainsi des zones géographiques d\'intensité métamorphique équivalente.',
      explanationAr: 'خط مساواة التحول (Isograde) هو خط وهمي يربط نقاط الملاحظة الأولى لظهور معدن مؤشر معين، مشكلاً حداً لشدة التحول.',
      options: [
        'Une ligne d\'égale altitude de montagne.',
        'La limite d\'épaisseur de la péridotite.',
        'Une ligne imaginaire reliant les sites de première apparition d\'un minéral index indicateur d\'intensité.',
        'Une faille normale récente.'
      ],
      correctIndices: [2],
      allowMultiple: false
    },
    {
      id: 'u5-g1-q37',
      type: 'matching',
      title: 'Faciès métamorphiques et conditions',
      instruction: 'Associez chaque faciès de la nomenclature internationale aux variables de pressions/températures associées.',
      explanation: 'Éclogite (HP, HT), Amphibolite (MP, HT), Schistes Bleus (HP, BT), Schistes Verts (BP, BT).',
      explanationAr: 'ترتبط سحنة الإيكلوجيت بالضغط المرتفع والحرارة المرتفعة، وسحنة الشست الأزرق بالضغط المرتفع والحرارة الضعيفة.',
      leftItems: [
        { id: 'l1', text: 'Faciès Schistes Verts' },
        { id: 'l2', text: 'Faciès Schistes Bleus' },
        { id: 'l3', text: 'Faciès Éclogites' },
        { id: 'l4', text: 'Faciès Amphibolites' }
      ],
      rightItems: [
        { id: 'r1', text: 'Très haute pression et haute température (ex: croûte subduite profonde se déshydratant à l\'extrême).' },
        { id: 'r2', text: 'Basse à moyenne température, pression faible (faciès d\'enfoncement peu profond).' },
        { id: 'r3', text: 'Haute pression, basse à moyenne température (signature géothermique directe de la subduction active).' },
        { id: 'r4', text: 'Moyenne pression et haute température (faciès d\'épaississement moyen et cuisson interne).' }
      ],
      correctPairs: {
        'l1': 'r2',
        'l2': 'r3',
        'l3': 'r1',
        'l4': 'r4'
      }
    },
    {
      id: 'u5-g1-q38',
      type: 'qcm',
      title: 'Signification d\'un trajet P-T-t rétrograde',
      instruction: 'Qu\'indique l\'analyse d\'un trajet pression-température-temps (P-T-t) présentant une phase rétrograde ?',
      explanation: 'La phase retrograde du trajet P-T-t atteste de la remontée (exhumation) de la roche métamorphique profonde vers la surface sous baisse concomitante de P et T.',
      explanationAr: 'يدل مسار ضغط-حرارة-زمن (P-T-t) التراجعي على مرحلة طفو وصعود الصخور من الأعماق (Exhumation) في اتجاه السطح.',
      options: [
        'La descente irréversible vers le manteau inférieur.',
        'La fusion complète d\'anatexie rapide.',
        'L\'exhumation et remontée de la roche métamorphique profonde vers la surface lors de l\'érosion géante de la montagne.',
        'La sédimentation calcaire externe.'
      ],
      correctIndices: [2],
      allowMultiple: false
    },
    {
      id: 'u5-g1-q39',
      type: 'table',
      title: 'Minéraux et types de subduction',
      instruction: 'Attribuez les minéraux hydratés ou déshydratés à leur étape d\'évolution.',
      explanation: 'La chlorite de schiste vert est riche en eau. La jadéite et le grenat d\'éclogite sont anhydres car formés par déshydratation profonde.',
      explanationAr: 'يحتوي الكلوريت والشست الأخضر على نسب عالية من الماء، بينما صخور الإيكلوجيت (Grenat) جافة لارتفاع الضغط.',
      columns: [
        { id: 'roxHyd', label: 'Roches / Minéraux riches en Eau' },
        { id: 'roxSec', label: 'Roches / Minéraux anhydres (déshydratés)' }
      ],
      rows: [
        {
          id: 'row-1',
          statement: 'Minéral de chlorite ou d\'actinote de faciès métabasaltique superficiel.',
          expectedChoices: { 'roxHyd': true, 'roxSec': false }
        },
        {
          id: 'row-2',
          statement: 'Faciès ultime d\'Éclogite contenant de la jadéite grenatifère compacte.',
          expectedChoices: { 'roxHyd': false, 'roxSec': true }
        },
        {
          id: 'row-3',
          statement: 'Amphibole de type hornblende ou d\'orthopyroxène anhydre d\'éclogitisation.',
          expectedChoices: { 'roxHyd': false, 'roxSec': true }
        }
      ]
    },
    {
      id: 'u5-g1-q40',
      type: 'qcm',
      title: 'La notion de géotherme',
      instruction: 'Qu\'est-ce que le géotherme d\'une zone crustale ?',
      explanation: 'Le géotherme est la courbe de variation thermique de la Terre illustrant l\'accroissement de la température avec l\'augmentation de la profondeur.',
      explanationAr: 'تخطيط التدرج الحراري (Géotherme) هو منحنى يوضح تغير الحرارة تزايدياً تدرجياً بدلالة مستوى العمق باطن الأرض.',
      options: [
        'L\'appareil de mesure de la sismicité.',
        'La courbe d\'équilibre thermique de l\'eau liquide.',
        'La courbe représentant l\'augmentation de la température de l\'écorce terrestre en fonction de la profondeur.',
        'La distance ophiolitique.'
      ],
      correctIndices: [2],
      allowMultiple: false
    }
  ],

  // Group 5: L'Anatexie, la fusion partielle et le Granite d'Anatexie
  [
    {
      id: 'u5-g1-q41',
      type: 'qcm',
      title: 'Qu\'est-ce que l\'Anatexie ?',
      instruction: 'Donnez la définition géologique exacte de l\'anatexie.',
      explanation: 'L\'anatexie est le processus de fusion partielle de roches de la croûte continentale (comme le gneiss) sous de fortes températures en présence d\'eau, à l\'origine du magma granitique.',
      explanationAr: 'صخرية الاندماج أو السند (Anatexie) هو ذوبان وانصهار جزئي لصخور القشرة القارية (كالنيس) تحت حرارة مرتفعة لتوليد الصهارة الكرانيتية.',
      options: [
        'La condensation rapide des argiles.',
        'La fusion partielle de roches de la croûte continentale soumises à d\'intenses températures, produisant du magma granitique.',
        'La division de la péridotite.',
        'Un séisme de subduction.'
      ],
      correctIndices: [1],
      allowMultiple: false
    },
    {
      id: 'u5-g1-q42',
      type: 'qcm',
      title: 'La Migmatite : roche hybride',
      instruction: 'Décrivez la constitution pétrographique d\'une Migmatite témoignant d\'une anatexie naissante.',
      explanation: 'La migmatite est une roche hybride (mélange tectonique) constituée d\'un litage métamorphique solide de gneiss (paléosome) et de veines claires fondues de granite de recristallisation (néosome).',
      explanationAr: 'الميغماتيت (Migmatite) هي صخرة وسيطة مختلطة البنية تشهد على انصهار جزئي، تترب من أجزاء نيسية صلبة وأجزاء كرانيتية متبلورة حديثاً.',
      options: [
        'Un assemblage de sel marin et d\'ophiolite.',
        'Une roche mixte formée d\'une partie métamorphique restée solide (gneiss) et d\'une partie magmatique qui a fondu puis recristallisé (granite).',
        'Une andésite grenue d\'arc.',
        'Une argile humide.'
      ],
      correctIndices: [1],
      allowMultiple: false
    },
    {
      id: 'u5-g1-q43',
      type: 'qcm',
      title: 'Réchauffement crustal et courbe du solidus',
      instruction: 'À quel croisement thermodynamique de courbes physiques se déclenche la fusion d\'anatexie ?',
      explanation: 'L\'anatexie débute lorsque le géotherme d\'épaississement de la croûte franchit (dépasse) la courbe du solidus du granite (en présence d\'eau), permettant le début de liquéfaction de la roche.',
      explanationAr: 'يبدأ انصهار صخور النيس مولداً صهيرة كرانيتية عندما يتقاطع ويجتاز منحنى التدرج الحراري منحنى بداية الانصهار (Solidus).',
      options: [
        'Quand il croise la courbe sismique de Benioff.',
        'Quand la courbe géothermique d\'épaississement traverse et franchit la courbe du solidus du granite humide.',
        'Quand la pression s\'annule.',
        'Lors d\'un séisme anaphase.'
      ],
      correctIndices: [1],
      allowMultiple: false
    },
    {
      id: 'u5-g1-q44',
      type: 'qcm',
      title: 'Granite d\'anatexie vs Granite intrusif',
      instruction: 'Qu\'est-ce qui distingue géographiquement et structuralement un granite d\'anatexie d\'un granite d\'intrusion (plutonique circulant) ?',
      explanation: 'Le granite d\'anatexie est autochtone (figé sur son lieu de genèse, montrant des contacts progressifs avec les migmatites). Le granite intrusif est allochtone (magma migrateur grimpant vers la surface, délimité par des contacts nets avec auréole de contact thermique).',
      explanationAr: 'يتشكل الكرانيت الاناتيكي في مكانه (Autochtone) مع تماس مفرط تدريجي مع الميغماتيت، بينما الكرانيت الانتداسي (Intrusif) صعد ليتوضع باطنائياً بحدود واضحة مع هالة تحول.',
      options: [
        'Le granite d\'anatexie n\'a pas de quartz.',
        'Le granite d\'anatexie est autochtone (formé sur place, contacts transitionnels flous avec les migmatites), alors que le granite intrusif est allochtone à contacts très nets avec auréole.',
        'Le granite intrusif coule à l\'extérieur sous forme de lave noire.',
        'C\'est la même chose absolue.'
      ],
      correctIndices: [1],
      allowMultiple: false
    },
    {
      id: 'u5-g1-q45',
      type: 'dropdown',
      title: 'Le liquide d\'Anatexie : Coalescence du magma',
      instruction: 'Complétez l\'analyse rhéologique des liquides d\'anatexie.',
      explanation: 'Le début de fusion produit des gouttes de liquide granitique. S\'il reste piégé sur place, il forme du granite d\'anatexie autochtone.',
      explanationAr: 'ينتج الانصهار الجزئي قطرات من سائل الكرانيت، وإذا ظل محتبساً فإنه يتبلور مشكلاً كرانيت أناتيكي في موقعه.',
      textWithPlaceholders: 'La fusion partielle du gneiss debute à environ 650°C si la roche est hydratée. Le liquide granitique forme des gouttes isolées. En se rassemblant, ces gouttes s\'unissent par [drop-0]. Si ce liquide migre vers le haut, il forme un granite [drop-1]. S\'il cristallise sur place, il engendre un granite [drop-2].',
      dropdowns: {
        'drop-0': {
          id: 'drop-0',
          options: ['coalescence (union de fluides)', 'clivage cassant', 'métamorphisme de HP'],
          correctValue: 'coalescence (union de fluides)'
        },
        'drop-1': {
          id: 'drop-1',
          options: ['intrusif (allochtone)', 'autochtone figé', 'microlitique d\'arc'],
          correctValue: 'intrusif (allochtone)'
        },
        'drop-2': {
          id: 'drop-2',
          options: ['d\'anatexie (autochtone)', 'basaltique marin', 'ophiolitique'],
          correctValue: 'd\'anatexie (autochtone)'
        }
      }
    },
    {
      id: 'u5-g1-q46',
      type: 'qcm',
      title: 'La fusion liquide sèche (Solidus anhydre)',
      instruction: 'Pourquoi l\'absence d\'eau (milieu anhydre) repousse-t-elle la fusion partielle des gneiss de la croûte ?',
      explanation: 'L\'eau agit comme un fondant chimique : sa présence abaisse fortement la température du solidus. Sans eau, les minéraux exigent 150 à 200°C de plus pour commencer à fondre.',
      explanationAr: 'يعمل الماء كمخفض لنقطة الانصهار، وفقدانه غيابه (وسط جاف) يتطلب حرارة مرتفعة جداً (تصل لأزيد من 850°C) لبدء الانصهار الجزئي لواليس.',
      options: [
        'Car l\'eau durcit le quartz.',
        'La présence d\'eau abaisse la température de fusion (le solidus) ; sans eau (solidus sec), le point de fusion exige des températures supérieures (parfois > 850°C).',
        'Car le solidus sec n\'existe pas.',
        'À cause des failles inverses.'
      ],
      correctIndices: [1],
      allowMultiple: false
    },
    {
      id: 'u5-g1-q47',
      type: 'qcm',
      title: 'Le devenir des résidus réfractaires',
      instruction: 'Comment s\'appellent les minéraux résistants de très fort métamorphisme non fondus (résidus) à l\'issue de la fusion d\'anatexie ?',
      explanation: 'La roche sèche résiduelle non fondue, hautement métamorphisée et enrichie en fer et magnésium (comme la biotite, cordiérite s\'accumulant), s\'appelle la restite.',
      explanationAr: 'تسمى الصخور والمعادن الجافة العصية على الانصهار (التي تقاوم حرارة الانصهار) بالرستيت (Restite).',
      options: [
        'Le néosome clair.',
        'La restite (résidu réfractaire sec).',
        'Le lixiviat magmatique.',
        'L\'andalousite intrusive.'
      ],
      correctIndices: [1],
      allowMultiple: false
    },
    {
      id: 'u5-g1-q48',
      type: 'matching',
      title: 'Terminologie de la pétrogénèse granitique',
      instruction: 'Associez chaque roche leucocrate ou structure magmatique à son comportement génétique.',
      explanation: 'Paléosome (partie gneissique non fondue), Néosome (partie granitique nouvellement cristallisée), Restite (résidus ferronésiens indissolubles).',
      explanationAr: 'الباليوسوم هو الجزء النيسي الذي لم يعتره الانصهار، والنيوسوم هو الجزء الكرانيتي المنصهر سابقاً والمتبلور حديثاً.',
      leftItems: [
        { id: 'l1', text: 'Paléosome (ou mélanosome)' },
        { id: 'l2', text: 'Néosome (ou leucosome)' },
        { id: 'l3', text: 'Restite sèche' },
        { id: 'l4', text: 'Le solidus' }
      ],
      rightItems: [
        { id: 'r1', text: 'Zone claire acide d\'une migmatite représentant le liquide d\'anatexie recristallisé à structure grenue.' },
        { id: 'r2', text: 'Partie d\'aspect sombre métamorphique résiduel de la migmatite n\'ayant pas succombé à la fusion.' },
        { id: 'r3', text: 'Courbe physique marquant le début thermique de fusion partielle d\'une roche solide.' },
        { id: 'r4', text: 'Résidu extrême infusible enrichi en éléments ferromagnésiens denses à forte température.' }
      ],
      correctPairs: {
        'l1': 'r2',
        'l2': 'r1',
        'l3': 'r4',
        'l4': 'r3'
      }
    },
    {
      id: 'u5-g1-q49',
      type: 'table',
      title: 'Volcanisme d\'arc vs Granite de collision',
      instruction: 'Vérifiez les assertions de structure cristalline et d\'origine tectonique.',
      explanation: 'L\'andésite microlitique naît en surface dans une subduction active. Le granite d\'anatexie grenu naît en profondeur dans une collision continentale.',
      explanationAr: 'تنتج الأنديزيت الميكروليتية عن صهارة تمر تبرد بالسطح، بينما ينتج الكرانيت الاناتيكي عن انصهار جذري في العمق بالتصادم.',
      columns: [
        { id: 'arcM', label: 'Spécifique au Volcanisme Andésitique' },
        { id: 'anaM', label: 'Spécifique à l\'Anatexie de Collision' }
      ],
      rows: [
        {
          id: 'row-1',
          statement: 'Refroidissement ultra-rapide en surface sous structure microlitique à pâte vitreuse.',
          expectedChoices: { 'arcM': true, 'anaM': false }
        },
        {
          id: 'row-2',
          statement: 'Provoque la cristallisation lente de massifs géants grenus transitionnels avec contacts migmatitiques.',
          expectedChoices: { 'arcM': false, 'anaM': true }
        },
        {
          id: 'row-3',
          statement: 'Génère du magma andésitique par hydratation de la péridotite mantellique.',
          expectedChoices: { 'arcM': true, 'anaM': false }
        }
      ]
    },
    {
      id: 'u5-g1-q1011',
      type: 'qcm',
      title: 'La transition métamorphisme-magmatisme',
      instruction: 'Quelle roche marque précisément la limite de transition géologique entre le domaine du métamorphisme solide et celui du magmatisme liquide ?',
      explanation: 'La migmatite est la roche charnière (hybride), car elle contient à la fois du gneiss solide (domaine métamorphique) et des veines de granite fondu (domaine magmatique).',
      explanationAr: 'تعتبر صخرة الميغماتيت (Migmatite) صخرة انتقالية فاصلة بين مجال التحول الصلب ومجال الصهارة السائل.',
      options: [
        'Le micaschiste compact.',
        'La migmatite (présentant un stade intermédiaire de fusion partielle).',
        'L\'éclogite déshydratée.',
        'La péridotite mantellique.'
      ],
      correctIndices: [1],
      allowMultiple: false
    }
  ]
];
