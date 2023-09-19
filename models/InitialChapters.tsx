import AsyncStorage from '@react-native-async-storage/async-storage';

export interface ChapterSignature {
  [key: number]: any;
}

export const initialChapters: ChapterSignature = {
  100: {
    id: 100,
    chapterName: 'Kumar',
    startPage: 0,
    endPage: 0,
    isDone: false,
    currentPage: 0,
    timesRecapped: 0,
    datesCompleted: [],
    childChapters: [0, 1, 4, 7, 10, 11, 16, 22, 23, 31, 32, 36, 39, 43],
    isChild: false,
  },
  200: {
    id: 200,
    chapterName: 'Lawrence',
    startPage: 0,
    endPage: 0,
    isDone: false,
    currentPage: 0,
    timesRecapped: 0,
    datesCompleted: [],
    childChapters: [
      45, 46, 47, 48, 49, 50, 51, 60, 66, 72, 81, 82, 83, 88, 89, 90, 91,
    ],
    isChild: false,
  },
  300: {
    id: 300,
    chapterName: 'Sinopsis',
    startPage: 0,
    endPage: 0,
    isDone: false,
    currentPage: 0,
    timesRecapped: 0,
    datesCompleted: [],
    childChapters: [92, 93, 94, 95, 96, 97],
    isChild: false,
  },
  0: {
    id: 0,
    chapterName: '8. Sepsisul si tratamentul infcetiilor bacteriene',
    startPage: 151,
    endPage: 168,
    isDone: false,
    currentPage: 151,
    timesRecapped: 0,
    datesCompleted: [],
    childChapters: [],
    isChild: true,
  },
  1: {
    id: '1',
    chapterName: '9. Echiliblirul hidro-electric si acido-bazic',
    startPage: 0,
    endPage: 0,
    isDone: false,
    currentPage: 0,
    timesRecapped: 0,
    datesCompleted: [],
    childChapters: [2, 3],
    isChild: true,
  },
  2: {
    id: '2',
    chapterName: 'Apa si electrolitii',
    startPage: 172,
    endPage: 190,
    isDone: false,
    currentPage: 172,
    timesRecapped: 0,
    datesCompleted: [],
    childChapters: [],
    isChild: true,
  },
  3: {
    id: '3',
    chapterName: 'Dezechilibrele acido-bazice',
    startPage: 195,
    endPage: 202,
    isDone: false,
    currentPage: 195,
    timesRecapped: 0,
    datesCompleted: [],
    childChapters: [],
    isChild: true,
  },
  4: {
    id: '4',
    chapterName: '10. Terapie Intensiva',
    startPage: 0,
    endPage: 0,
    isDone: false,
    currentPage: 0,
    timesRecapped: 0,
    datesCompleted: [],
    childChapters: [5, 6],
    isChild: true,
  },
  5: {
    id: '5',
    chapterName: 'Insuficienta respiratorie',
    startPage: 224,
    endPage: 232,
    isDone: false,
    currentPage: 224,
    timesRecapped: 0,
    datesCompleted: [],
    childChapters: [],
    isChild: true,
  },
  6: {
    id: '6',
    chapterName: 'Sindromul de detresa respiratorie acuta',
    startPage: 232,
    endPage: 233,
    isDone: false,
    currentPage: 232,
    timesRecapped: 0,
    datesCompleted: [],
    childChapters: [],
    isChild: true,
  },
  7: {
    id: 7,
    chapterName: '21. Endocrinologie',
    startPage: 0,
    endPage: 0,
    isDone: false,
    currentPage: 0,
    timesRecapped: 0,
    datesCompleted: [],
    childChapters: [8, 9],
    isChild: true,
  },
  8: {
    id: 8,
    chapterName: 'Hipotiroidismul. Hipertiroidismul',
    startPage: 611,
    endPage: 619,
    isDone: false,
    currentPage: 611,
    timesRecapped: 0,
    datesCompleted: [],
    childChapters: [],
    isChild: true,
  },
  9: {
    id: 9,
    chapterName: 'Carcinomul tiroidian',
    startPage: 621,
    endPage: 622,
    isDone: false,
    currentPage: 621,
    timesRecapped: 0,
    datesCompleted: [],
    childChapters: [],
    isChild: true,
  },
  10: {
    id: 10,
    chapterName: '23. Diabetul zaharat',
    startPage: 699,
    endPage: 736,
    isDone: false,
    currentPage: 699,
    timesRecapped: 0,
    datesCompleted: [],
    childChapters: [],
    isChild: true,
  },
  11: {
    id: 11,
    chapterName: '26. Neurologie',
    startPage: 0,
    endPage: 0,
    isDone: false,
    currentPage: 0,
    timesRecapped: 0,
    datesCompleted: [],
    childChapters: [12, 13, 14, 15],
    isChild: true,
  },
  12: {
    id: 12,
    chapterName: 'Coma și alte tulburări ale conștienței',
    startPage: 832,
    endPage: 836,
    isDone: false,
    currentPage: 832,
    timesRecapped: 0,
    datesCompleted: [],
    childChapters: [],
    isChild: true,
  },
  13: {
    id: 13,
    chapterName: 'Accidentul vascular cerebral',
    startPage: 836,
    endPage: 845,
    isDone: false,
    currentPage: 836,
    timesRecapped: 0,
    datesCompleted: [],
    childChapters: [],
    isChild: true,
  },
  14: {
    id: 14,
    chapterName: 'Hemoragia intracraniană',
    startPage: 845,
    endPage: 848,
    isDone: false,
    currentPage: 845,
    timesRecapped: 0,
    datesCompleted: [],
    childChapters: [],
    isChild: true,
  },
  15: {
    id: 15,
    chapterName: 'Infecțiile sistemului nervos - Meningita. Encefalita',
    startPage: 869,
    endPage: 872,
    isDone: false,
    currentPage: 869,
    timesRecapped: 0,
    datesCompleted: [],
    childChapters: [],
    isChild: true,
  },
  16: {
    id: 16,
    chapterName: '28. Pneumologie',
    startPage: 0,
    endPage: 0,
    isDone: false,
    currentPage: 0,
    timesRecapped: 0,
    datesCompleted: [],
    childChapters: [17, 18, 19, 20, 21],
    isChild: true,
  },
  17: {
    id: 17,
    chapterName: 'Astmul',
    startPage: 949,
    endPage: 955,
    isDone: false,
    currentPage: 949,
    timesRecapped: 0,
    datesCompleted: [],
    childChapters: [],
    isChild: true,
  },
  18: {
    id: 18,
    chapterName: 'Bronhopneumopatia obstructivă cronică',
    startPage: 955,
    endPage: 961,
    isDone: false,
    currentPage: 955,
    timesRecapped: 0,
    datesCompleted: [],
    childChapters: [],
    isChild: true,
  },
  19: {
    id: 19,
    chapterName: 'Pneumonia',
    startPage: 963,
    endPage: 967,
    isDone: false,
    currentPage: 963,
    timesRecapped: 0,
    datesCompleted: [],
    childChapters: [],
    isChild: true,
  },
  20: {
    id: 20,
    chapterName: 'Tuberculoza',
    startPage: 968,
    endPage: 972,
    isDone: false,
    currentPage: 968,
    timesRecapped: 0,
    datesCompleted: [],
    childChapters: [],
    isChild: true,
  },
  21: {
    id: 21,
    chapterName: 'Neoplaziile tractului respirator',
    startPage: 975,
    endPage: 982,
    isDone: false,
    currentPage: 975,
    timesRecapped: 0,
    datesCompleted: [],
    childChapters: [],
    isChild: true,
  },
  22: {
    id: 22,
    chapterName: '29. Boala venoasa tromboembolica',
    startPage: 1001,
    endPage: 1017,
    isDone: false,
    currentPage: 1001,
    timesRecapped: 0,
    datesCompleted: [],
    childChapters: [],
    isChild: true,
  },
  23: {
    id: 23,
    chapterName: '30. Cardiologie',
    startPage: 0,
    endPage: 0,
    isDone: false,
    currentPage: 0,
    timesRecapped: 0,
    datesCompleted: [],
    childChapters: [24, 25, 26, 27, 28, 29, 30],
    isChild: true,
  },
  24: {
    id: 24,
    chapterName: 'Resuscitarea cardiacă',
    startPage: 1045,
    endPage: 1048,
    isDone: false,
    currentPage: 1045,
    timesRecapped: 0,
    datesCompleted: [],
    childChapters: [],
    isChild: true,
  },
  25: {
    id: 25,
    chapterName: 'Aritmiile cardiace',
    startPage: 1051,
    endPage: 1069,
    isDone: false,
    currentPage: 1051,
    timesRecapped: 0,
    datesCompleted: [],
    childChapters: [],
    isChild: true,
  },
  26: {
    id: 26,
    chapterName: 'Insuficiența cardiacă',
    startPage: 1069,
    endPage: 1079,
    isDone: false,
    currentPage: 1069,
    timesRecapped: 0,
    datesCompleted: [],
    childChapters: [],
    isChild: true,
  },
  27: {
    id: 27,
    chapterName: 'Boala coronariană - Angina. Sindroamele coronariene acute',
    startPage: 1079,
    endPage: 1091,
    isDone: false,
    currentPage: 1079,
    timesRecapped: 0,
    datesCompleted: [],
    childChapters: [],
    isChild: true,
  },
  28: {
    id: 28,
    chapterName: 'Valvulopatii',
    startPage: 1091,
    endPage: 1103,
    isDone: false,
    currentPage: 1091,
    timesRecapped: 0,
    datesCompleted: [],
    childChapters: [],
    isChild: true,
  },
  29: {
    id: 29,
    chapterName: 'Endocardita infecțioasă',
    startPage: 1103,
    endPage: 1107,
    isDone: false,
    currentPage: 1103,
    timesRecapped: 0,
    datesCompleted: [],
    childChapters: [],
    isChild: true,
  },
  30: {
    id: 30,
    chapterName: 'Bolile miocardului - Miocardita. Cardiomiopatiile',
    startPage: 1118,
    endPage: 1124,
    isDone: false,
    currentPage: 1118,
    timesRecapped: 0,
    datesCompleted: [],
    childChapters: [],
    isChild: true,
  },
  31: {
    id: 31,
    chapterName: '31. Hipertensiunea arteriala',
    startPage: 1133,
    endPage: 1145,
    isDone: false,
    currentPage: 1133,
    timesRecapped: 0,
    datesCompleted: [],
    childChapters: [],
    isChild: true,
  },
  32: {
    id: 32,
    chapterName: '32. Gastroenterologie',
    startPage: 0,
    endPage: 0,
    isDone: false,
    currentPage: 0,
    timesRecapped: 0,
    datesCompleted: [],
    childChapters: [33, 34, 35],
    isChild: true,
  },
  33: {
    id: 33,
    chapterName: 'Boala de reflux gastroesofagian',
    startPage: 1162,
    endPage: 1166,
    isDone: false,
    currentPage: 1162,
    timesRecapped: 0,
    datesCompleted: [],
    childChapters: [],
    isChild: true,
  },
  34: {
    id: 34,
    chapterName: 'Infecția cu Helicobacter Pylori',
    startPage: 1172,
    endPage: 1176,
    isDone: false,
    currentPage: 1172,
    timesRecapped: 0,
    datesCompleted: [],
    childChapters: [],
    isChild: true,
  },
  35: {
    id: 35,
    chapterName: 'Bolile inflamatorii intestinale',
    startPage: 1198,
    endPage: 1208,
    isDone: false,
    currentPage: 1198,
    timesRecapped: 0,
    datesCompleted: [],
    childChapters: [],
    isChild: true,
  },
  36: {
    id: 36,
    chapterName: '34. Bolile hepatice',
    startPage: 0,
    endPage: 0,
    isDone: false,
    currentPage: 0,
    timesRecapped: 0,
    datesCompleted: [],
    childChapters: [37, 38],
    isChild: true,
  },
  37: {
    id: 37,
    chapterName: 'Hepatita - Hepatita virală',
    startPage: 1275,
    endPage: 1284,
    isDone: false,
    currentPage: 1275,
    timesRecapped: 0,
    datesCompleted: [],
    childChapters: [],
    isChild: true,
  },
  38: {
    id: 38,
    chapterName: 'Ciroza hepatică',
    startPage: 1289,
    endPage: 1303,
    isDone: false,
    currentPage: 1289,
    timesRecapped: 0,
    datesCompleted: [],
    childChapters: [],
    isChild: true,
  },
  39: {
    id: 39,
    chapterName: '36. Tulburari renale si ale tractului urinar',
    startPage: 0,
    endPage: 0,
    isDone: false,
    currentPage: 0,
    timesRecapped: 0,
    datesCompleted: [],
    childChapters: [40, 41, 42],
    isChild: true,
  },
  40: {
    id: 40,
    chapterName: 'Glomerulul și afectarea glomerulară',
    startPage: 1351,
    endPage: 1368,
    isDone: false,
    currentPage: 1351,
    timesRecapped: 0,
    datesCompleted: [],
    childChapters: [],
    isChild: true,
  },
  41: {
    id: 41,
    chapterName: 'Nefritele tubulointerstițiale (NTI)',
    startPage: 1385,
    endPage: 1387,
    isDone: false,
    currentPage: 1385,
    timesRecapped: 0,
    datesCompleted: [],
    childChapters: [],
    isChild: true,
  },
  42: {
    id: 42,
    chapterName: 'Boala cronică de rinichi',
    startPage: 1392,
    endPage: 1405,
    isDone: false,
    currentPage: 1392,
    timesRecapped: 0,
    datesCompleted: [],
    childChapters: [],
    isChild: true,
  },
  43: {
    id: 43,
    chapterName:
      '37. Infectii transmisibile pe cale sexuala si infectia cu virusul imunodeficientei umane',
    startPage: 0,
    endPage: 0,
    isDone: false,
    currentPage: 0,
    timesRecapped: 0,
    datesCompleted: [],
    childChapters: [44],
    isChild: true,
  },
  44: {
    id: 44,
    chapterName:
      'Virusul imunodeficienței umane și sindromul imunodeficienței dobândite',
    startPage: 1425,
    endPage: 1450,
    isDone: false,
    currentPage: 1425,
    timesRecapped: 0,
    datesCompleted: [],
    childChapters: [],
    isChild: true,
  },
  45: {
    id: 45,
    chapterName:
      '1. Evaluarea si managementul perioperator al pacientului chirurgical',
    startPage: 1,
    endPage: 12,
    isDone: false,
    currentPage: 1,
    timesRecapped: 0,
    datesCompleted: [],
    childChapters: [],
    isChild: true,
  },
  46: {
    id: 46,
    chapterName: '4. Sangerarile chirurgicale',
    startPage: 39,
    endPage: 45,
    isDone: false,
    currentPage: 39,
    timesRecapped: 0,
    datesCompleted: [],
    childChapters: [],
    isChild: true,
  },
  47: {
    id: 47,
    chapterName: '8. Infectiile chirurgicale',
    startPage: 75,
    endPage: 84,
    isDone: false,
    currentPage: 75,
    timesRecapped: 0,
    datesCompleted: [],
    childChapters: [],
    isChild: true,
  },
  48: {
    id: 48,
    chapterName: '9. Traumatologie',
    startPage: 87,
    endPage: 106,
    isDone: false,
    currentPage: 87,
    timesRecapped: 0,
    datesCompleted: [],
    childChapters: [],
    isChild: true,
  },
  49: {
    id: 49,
    chapterName: '10. Arsurile',
    startPage: 108,
    endPage: 123,
    isDone: false,
    currentPage: 108,
    timesRecapped: 0,
    datesCompleted: [],
    childChapters: [],
    isChild: true,
  },
  50: {
    id: 50,
    chapterName: '11. Herniile peretelui abdominal',
    startPage: 125,
    endPage: 138,
    isDone: false,
    currentPage: 125,
    timesRecapped: 0,
    datesCompleted: [],
    childChapters: [],
    isChild: true,
  },
  51: {
    id: 51,
    chapterName: '12. Esofagul',
    startPage: 0,
    endPage: 0,
    isDone: false,
    currentPage: 0,
    timesRecapped: 0,
    datesCompleted: [],
    childChapters: [52, 53, 54, 55, 56, 57, 58, 59],
    isChild: true,
  },
  52: {
    id: 52,
    chapterName: 'Anatomia esofagului',
    startPage: 140,
    endPage: 142,
    isDone: false,
    currentPage: 140,
    timesRecapped: 0,
    datesCompleted: [],
    childChapters: [],
    isChild: true,
  },
  53: {
    id: 53,
    chapterName: 'Carcinomul esofagian',
    startPage: 151,
    endPage: 156,
    isDone: false,
    currentPage: 151,
    timesRecapped: 0,
    datesCompleted: [],
    childChapters: [],
    isChild: true,
  },
  54: {
    id: 54,
    chapterName: 'Perforatia esofagiana',
    startPage: 156,
    endPage: 157,
    isDone: false,
    currentPage: 156,
    timesRecapped: 0,
    datesCompleted: [],
    childChapters: [],
    isChild: true,
  },
  55: {
    id: 55,
    chapterName: 'Herniile hiatale',
    startPage: 157,
    endPage: 158,
    isDone: false,
    currentPage: 157,
    timesRecapped: 0,
    datesCompleted: [],
    childChapters: [],
    isChild: true,
  },
  56: {
    id: 56,
    chapterName: 'Tulburari ale motilitatii esofagiene',
    startPage: 158,
    endPage: 161,
    isDone: false,
    currentPage: 158,
    timesRecapped: 0,
    datesCompleted: [],
    childChapters: [],
    isChild: true,
  },
  57: {
    id: 57,
    chapterName: 'Leziuni esofagiene benigne',
    startPage: 161,
    endPage: 162,
    isDone: false,
    currentPage: 161,
    timesRecapped: 0,
    datesCompleted: [],
    childChapters: [],
    isChild: true,
  },
  58: {
    id: 58,
    chapterName: 'Ingestia de corpi straini',
    startPage: 162,
    endPage: 162,
    isDone: false,
    currentPage: 162,
    timesRecapped: 0,
    datesCompleted: [],
    childChapters: [],
    isChild: true,
  },
  59: {
    id: 59,
    chapterName: 'Ingestia substantelor caustice',
    startPage: 162,
    endPage: 164,
    isDone: false,
    currentPage: 162,
    timesRecapped: 0,
    datesCompleted: [],
    childChapters: [],
    isChild: true,
  },
  60: {
    id: 60,
    chapterName: '13. Stomacul si duodenul',
    startPage: 167,
    endPage: 182,
    isDone: false,
    currentPage: 167,
    timesRecapped: 0,
    datesCompleted: [],
    childChapters: [61, 62, 63, 64, 65],
    isChild: true,
  },
  61: {
    id: 61,
    chapterName: 'Anatomie',
    startPage: 167,
    endPage: 168,
    isDone: false,
    currentPage: 167,
    timesRecapped: 0,
    datesCompleted: [],
    childChapters: [],
    isChild: true,
  },
  62: {
    id: 62,
    chapterName: 'Afecțiuni gastrice maligne',
    startPage: 172,
    endPage: 174,
    isDone: false,
    currentPage: 172,
    timesRecapped: 0,
    datesCompleted: [],
    childChapters: [],
    isChild: true,
  },
  63: {
    id: 63,
    chapterName: 'Afecțiuni duodenale maligne',
    startPage: 179,
    endPage: 180,
    isDone: false,
    currentPage: 179,
    timesRecapped: 0,
    datesCompleted: [],
    childChapters: [],
    isChild: true,
  },
  64: {
    id: 64,
    chapterName: 'Complicații postgastrectomie',
    startPage: 180,
    endPage: 182,
    isDone: false,
    currentPage: 180,
    timesRecapped: 0,
    datesCompleted: [],
    childChapters: [],
    isChild: true,
  },
  65: {
    id: 65,
    chapterName: 'Tratamentul chirurgical al obezității',
    startPage: 182,
    endPage: 191,
    isDone: false,
    currentPage: 182,
    timesRecapped: 0,
    datesCompleted: [],
    childChapters: [],
    isChild: true,
  },
  66: {
    id: 66,
    chapterName: '14. INTESTINUL SUBȚIRE ȘI APENDICELE',
    startPage: 193,
    endPage: 214,
    isDone: false,
    currentPage: 193,
    timesRecapped: 0,
    datesCompleted: [],
    childChapters: [67, 68, 69, 70, 71],
    isChild: true,
  },
  67: {
    id: 67,
    chapterName: 'Ocluzia intestinului subțire',
    startPage: 193,
    endPage: 199,
    isDone: false,
    currentPage: 193,
    timesRecapped: 0,
    datesCompleted: [],
    childChapters: [],
    isChild: true,
  },
  68: {
    id: 68,
    chapterName: 'Ischemia mezenterică acută',
    startPage: 204,
    endPage: 206,
    isDone: false,
    currentPage: 204,
    timesRecapped: 0,
    datesCompleted: [],
    childChapters: [],
    isChild: true,
  },
  69: {
    id: 69,
    chapterName: 'Tumorile intestinului subțire',
    startPage: 206,
    endPage: 209,
    isDone: false,
    currentPage: 206,
    timesRecapped: 0,
    datesCompleted: [],
    childChapters: [],
    isChild: true,
  },
  70: {
    id: 70,
    chapterName: 'Anomalii congenitale',
    startPage: 209,
    endPage: 211,
    isDone: false,
    currentPage: 209,
    timesRecapped: 0,
    datesCompleted: [],
    childChapters: [],
    isChild: true,
  },
  71: {
    id: 71,
    chapterName: 'Bolile apendicelui',
    startPage: 211,
    endPage: 214,
    isDone: false,
    currentPage: 211,
    timesRecapped: 0,
    datesCompleted: [],
    childChapters: [],
    isChild: true,
  },
  72: {
    id: 72,
    chapterName: '15. Colon, rect si anus',
    startPage: 216,
    endPage: 240,
    isDone: false,
    currentPage: 216,
    timesRecapped: 0,
    datesCompleted: [],
    childChapters: [73, 74, 75, 76, 77, 78, 79, 80],
    isChild: true,
  },
  73: {
    id: 73,
    chapterName: 'Anatomie',
    startPage: 216,
    endPage: 219,
    isDone: false,
    currentPage: 216,
    timesRecapped: 0,
    datesCompleted: [],
    childChapters: [],
    isChild: true,
  },
  74: {
    id: 74,
    chapterName: 'Afecțiuni benigne colonice',
    startPage: 222,
    endPage: 225,
    isDone: false,
    currentPage: 222,
    timesRecapped: 0,
    datesCompleted: [],
    childChapters: [],
    isChild: true,
  },
  75: {
    id: 75,
    chapterName: 'Ocluzia intestinului gros',
    startPage: 228,
    endPage: 229,
    isDone: false,
    currentPage: 228,
    timesRecapped: 0,
    datesCompleted: [],
    childChapters: [],
    isChild: true,
  },
  76: {
    id: 76,
    chapterName: 'Volvulus de colon',
    startPage: 229,
    endPage: 230,
    isDone: false,
    currentPage: 229,
    timesRecapped: 0,
    datesCompleted: [],
    childChapters: [],
    isChild: true,
  },
  77: {
    id: 77,
    chapterName: 'Pseudo-ocluzia acută a colonului',
    startPage: 230,
    endPage: 230,
    isDone: false,
    currentPage: 230,
    timesRecapped: 0,
    datesCompleted: [],
    childChapters: [],
    isChild: true,
  },
  78: {
    id: 78,
    chapterName: 'Polipii și cancerul colo-rectal',
    startPage: 230,
    endPage: 235,
    isDone: false,
    currentPage: 230,
    timesRecapped: 0,
    datesCompleted: [],
    childChapters: [],
    isChild: true,
  },
  79: {
    id: 79,
    chapterName: 'Canalul anal și rectul',
    startPage: 235,
    endPage: 239,
    isDone: false,
    currentPage: 235,
    timesRecapped: 0,
    datesCompleted: [],
    childChapters: [],
    isChild: true,
  },
  80: {
    id: 80,
    chapterName: 'Infecțiile cu transmitere sexuală',
    startPage: 239,
    endPage: 240,
    isDone: false,
    currentPage: 239,
    timesRecapped: 0,
    datesCompleted: [],
    childChapters: [],
    isChild: true,
  },
  81: {
    id: 81,
    chapterName: '16. Caile biliare',
    startPage: 242,
    endPage: 255,
    isDone: false,
    currentPage: 242,
    timesRecapped: 0,
    datesCompleted: [],
    childChapters: [],
    isChild: true,
  },
  82: {
    id: 82,
    chapterName: '17. Pancreasul',
    startPage: 257,
    endPage: 275,
    isDone: false,
    currentPage: 257,
    timesRecapped: 0,
    datesCompleted: [],
    childChapters: [],
    isChild: true,
  },
  83: {
    id: 83,
    chapterName: '20. Ficatul si splina',
    startPage: 317,
    endPage: 342,
    isDone: false,
    currentPage: 317,
    timesRecapped: 0,
    datesCompleted: [],
    childChapters: [84, 85, 86, 87],
    isChild: true,
  },
  84: {
    id: 84,
    chapterName: 'Anatomia ficatului. Fiziologia ficatului',
    startPage: 317,
    endPage: 317,
    isDone: false,
    currentPage: 317,
    timesRecapped: 0,
    datesCompleted: [],
    childChapters: [],
    isChild: true,
  },
  85: {
    id: 85,
    chapterName: 'Leziunile hepatice traumatice',
    startPage: 317,
    endPage: 319,
    isDone: false,
    currentPage: 317,
    timesRecapped: 0,
    datesCompleted: [],
    childChapters: [],
    isChild: true,
  },
  86: {
    id: 86,
    chapterName: 'Tumorile hepatice, chisturile și abcesele hepatice',
    startPage: 319,
    endPage: 324,
    isDone: false,
    currentPage: 319,
    timesRecapped: 0,
    datesCompleted: [],
    childChapters: [],
    isChild: true,
  },
  87: {
    id: 87,
    chapterName: 'Anatomia și fiziologia splinei',
    startPage: 333,
    endPage: 335,
    isDone: false,
    currentPage: 333,
    timesRecapped: 0,
    datesCompleted: [],
    childChapters: [],
    isChild: true,
  },
  88: {
    id: 88,
    chapterName: '26. Bolile sistemului vascular',
    startPage: 520,
    endPage: 541,
    isDone: false,
    currentPage: 520,
    timesRecapped: 0,
    datesCompleted: [],
    childChapters: [],
    isChild: true,
  },
  89: {
    id: 89,
    chapterName: '27. Otorinolaringologia: Bolile capului si gatului',
    startPage: 548,
    endPage: 583,
    isDone: false,
    currentPage: 548,
    timesRecapped: 0,
    datesCompleted: [],
    childChapters: [],
    isChild: true,
  },
  90: {
    id: 90,
    chapterName: '28. Chirurgie ortopedica: Bolile sistemului musculoscheletar',
    startPage: 585,
    endPage: 633,
    isDone: false,
    currentPage: 585,
    timesRecapped: 0,
    datesCompleted: [],
    childChapters: [],
    isChild: true,
  },
  91: {
    id: 91,
    chapterName: '29. Urologie: Afectiunile aparatului uro-genital',
    startPage: 635,
    endPage: 674,
    isDone: false,
    currentPage: 635,
    timesRecapped: 0,
    datesCompleted: [],
    childChapters: [],
    isChild: true,
  },
  92: {
    id: 92,
    chapterName: '9. Dermatologie',
    startPage: 196,
    endPage: 209,
    isDone: false,
    currentPage: 196,
    timesRecapped: 0,
    datesCompleted: [],
    childChapters: [],
    isChild: true,
  },
  93: {
    id: 93,
    chapterName: '10. Pediatrie',
    startPage: 212,
    endPage: 243,
    isDone: false,
    currentPage: 212,
    timesRecapped: 0,
    datesCompleted: [],
    childChapters: [],
    isChild: true,
  },
  94: {
    id: 94,
    chapterName: '12. Afecțiuni ginecologice și mamare',
    startPage: 273,
    endPage: 292,
    isDone: false,
    currentPage: 273,
    timesRecapped: 0,
    datesCompleted: [],
    childChapters: [],
    isChild: true,
  },
  95: {
    id: 95,
    chapterName: '13. Obstetrică',
    startPage: 295,
    endPage: 316,
    isDone: false,
    currentPage: 295,
    timesRecapped: 0,
    datesCompleted: [],
    childChapters: [],
    isChild: true,
  },
  96: {
    id: 96,
    chapterName: '14. Tulburările psihice',
    startPage: 319,
    endPage: 330,
    isDone: false,
    currentPage: 319,
    timesRecapped: 0,
    datesCompleted: [],
    childChapters: [],
    isChild: true,
  },
  97: {
    id: 97,
    chapterName: '15. Epidemiologie și etică',
    startPage: 333,
    endPage: 338,
    isDone: false,
    currentPage: 333,
    timesRecapped: 0,
    datesCompleted: [],
    childChapters: [],
    isChild: true,
  },
};
