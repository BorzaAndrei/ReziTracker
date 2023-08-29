import AsyncStorage from "@react-native-async-storage/async-storage";

export interface ChapterSignature {
    [key: number]: any
}

export function loadChapters(setChapters: any) {
    AsyncStorage.getItem("chapters").then((chapters) => {
        if (chapters){
            let obj: ChapterSignature = JSON.parse(chapters);
            setChapters(obj);
        } else {
            AsyncStorage.setItem("chapters", JSON.stringify(initialChapters))
            setChapters(initialChapters);
        }
    })
    .catch(() => {
        setChapters(initialChapters);
    })
}


export const initialChapters: ChapterSignature = {
    100: {
        id: 100,
        chapterName: "Kumar",
        startPage: 0,
        endPage: 0,
        isDone: false,
        currentPage: 0,
        timesRecapped: 0,
        datesCompleted: [],
        childChapters: [0, 1, 4, 7, 10, 11, 16, 22, 23, 31, 32, 36, 39, 43],
        isChild: false
    },
    0: {
        id: 0,
        chapterName: "8. Sepsisul si tratamentul infcetiilor bacteriene",
        startPage: 151,
        endPage: 168,
        isDone: false,
        currentPage: 151,
        timesRecapped: 0,
        datesCompleted: [],
        childChapters: [],
        isChild: true
    },
    1: {
        id: "1",
        chapterName: "9. Echiliblirul hidro-electric si acido-bazic",
        startPage: 0,
        endPage: 0,
        isDone: false,
        currentPage: 0,
        timesRecapped: 0,
        datesCompleted: [],
        childChapters: [2, 3],
        isChild: true
    },
    2: {
        id: "2",
        chapterName: "Apa si electrolitii",
        startPage: 172,
        endPage: 190,
        isDone: false,
        currentPage: 172,
        timesRecapped: 0,
        datesCompleted: [],
        childChapters: [],
        isChild: true
    },
    3: {
        id: "3",
        chapterName: "Dezechilibrele acido-bazice",
        startPage: 195,
        endPage: 202,
        isDone: false,
        currentPage: 195,
        timesRecapped: 0,
        datesCompleted: [],
        childChapters: [],
        isChild: true
    },
    4: {
        id: "4",
        chapterName: "10. Terapie Intensiva",
        startPage: 0,
        endPage: 0,
        isDone: false,
        currentPage: 0,
        timesRecapped: 0,
        datesCompleted: [],
        childChapters: [5, 6],
        isChild: true
    },
    5: {
        id: "5",
        chapterName: "Insuficienta respiratorie",
        startPage: 224,
        endPage: 232,
        isDone: false,
        currentPage: 224,
        timesRecapped: 0,
        datesCompleted: [],
        childChapters: [],
        isChild: true
    },
    6: {
        id: "6",
        chapterName: "Sindromul de detresa respiratorie acuta",
        startPage: 232,
        endPage: 233,
        isDone: false,
        currentPage: 232,
        timesRecapped: 0,
        datesCompleted: [],
        childChapters: [],
        isChild: true
    },
    7: {
        id: 7,
        chapterName: "21. Endocrinologie",
        startPage: 0,
        endPage: 0,
        isDone: false,
        currentPage: 0,
        timesRecapped: 0,
        datesCompleted: [],
        childChapters: [8, 9],
        isChild: true
      },
      8: {
        id: 8,
        chapterName: "Hipotiroidismul. Hipertiroidismul",
        startPage: 611,
        endPage: 619,
        isDone: false,
        currentPage: 611,
        timesRecapped: 0,
        datesCompleted: [],
        childChapters: [],
        isChild: true
      },
      9: {
        id: 9,
        chapterName: "Carcinomul tiroidian",
        startPage: 621,
        endPage: 622,
        isDone: false,
        currentPage: 621,
        timesRecapped: 0,
        datesCompleted: [],
        childChapters: [],
        isChild: true
      },
      10: {
        id: 10,
        chapterName: "23. Diabetul zaharat",
        startPage: 699,
        endPage: 736,
        isDone: false,
        currentPage: 699,
        timesRecapped: 0,
        datesCompleted: [],
        childChapters: [],
        isChild: true
      },
      11: {
        id: 11,
        chapterName: "26. Neurologie",
        startPage: 0,
        endPage: 0,
        isDone: false,
        currentPage: 0,
        timesRecapped: 0,
        datesCompleted: [],
        childChapters: [12, 13, 14, 15],
        isChild: true
      },
      12: {
        id: 12,
        chapterName: "Coma și alte tulburări ale conștienței",
        startPage: 832,
        endPage: 836,
        isDone: false,
        currentPage: 832,
        timesRecapped: 0,
        datesCompleted: [],
        childChapters: [],
        isChild: true
      },
      13: {
        id: 13,
        chapterName: "Accidentul vascular cerebral",
        startPage: 836,
        endPage: 845,
        isDone: false,
        currentPage: 836,
        timesRecapped: 0,
        datesCompleted: [],
        childChapters: [],
        isChild: true
      },
      14: {
        id: 14,
        chapterName: "Hemoragia intracraniană",
        startPage: 845,
        endPage: 848,
        isDone: false,
        currentPage: 845,
        timesRecapped: 0,
        datesCompleted: [],
        childChapters: [],
        isChild: true
      },
      15: {
        id: 15,
        chapterName: "Infecțiile sistemului nervos - Meningita. Encefalita",
        startPage: 869,
        endPage: 872,
        isDone: false,
        currentPage: 869,
        timesRecapped: 0,
        datesCompleted: [],
        childChapters: [],
        isChild: true
      },
      16: {
        id: 16,
        chapterName: "28. Pneumologie",
        startPage: 0,
        endPage: 0,
        isDone: false,
        currentPage: 0,
        timesRecapped: 0,
        datesCompleted: [],
        childChapters: [17, 18, 19, 20, 21],
        isChild: true
      },
      17: {
        id: 17,
        chapterName: "Astmul",
        startPage: 949,
        endPage: 955,
        isDone: false,
        currentPage: 949,
        timesRecapped: 0,
        datesCompleted: [],
        childChapters: [],
        isChild: true
      },
      18: {
        id: 18,
        chapterName: "Bronhopneumopatia obstructivă cronică",
        startPage: 955,
        endPage: 961,
        isDone: false,
        currentPage: 955,
        timesRecapped: 0,
        datesCompleted: [],
        childChapters: [],
        isChild: true
      },
      19: {
        id: 19,
        chapterName: "Pneumonia",
        startPage: 963,
        endPage: 967,
        isDone: false,
        currentPage: 963,
        timesRecapped: 0,
        datesCompleted: [],
        childChapters: [],
        isChild: true
      },
      20: {
        id: 20,
        chapterName: "Tuberculoza",
        startPage: 968,
        endPage: 972,
        isDone: false,
        currentPage: 968,
        timesRecapped: 0,
        datesCompleted: [],
        childChapters: [],
        isChild: true
      },
      21: {
        id: 21,
        chapterName: "Neoplaziile tractului respirator",
        startPage: 975,
        endPage: 982,
        isDone: false,
        currentPage: 975,
        timesRecapped: 0,
        datesCompleted: [],
        childChapters: [],
        isChild: true
      },
      22: {
        id: 22,
        chapterName: "29. Boala venoasa tromboembolica",
        startPage: 1001,
        endPage: 1017,
        isDone: false,
        currentPage: 1001,
        timesRecapped: 0,
        datesCompleted: [],
        childChapters: [],
        isChild: true
      },
      23: {
        id: 23,
        chapterName: "30. Cardiologie",
        startPage: 0,
        endPage: 0,
        isDone: false,
        currentPage: 0,
        timesRecapped: 0,
        datesCompleted: [],
        childChapters: [24, 25, 26, 27, 28, 29, 30],
        isChild: true
      },
      24: {
        id: 24,
        chapterName: "Resuscitarea cardiacă",
        startPage: 1045,
        endPage: 1048,
        isDone: false,
        currentPage: 1045,
        timesRecapped: 0,
        datesCompleted: [],
        childChapters: [],
        isChild: true
      },
      25: {
        id: 25,
        chapterName: "Aritmiile cardiace",
        startPage: 1051,
        endPage: 1069,
        isDone: false,
        currentPage: 1051,
        timesRecapped: 0,
        datesCompleted: [],
        childChapters: [],
        isChild: true
      },
      26: {
        id: 26,
        chapterName: "Insuficiența cardiacă",
        startPage: 1069,
        endPage: 1079,
        isDone: false,
        currentPage: 1069,
        timesRecapped: 0,
        datesCompleted: [],
        childChapters: [],
        isChild: true
      },
      27: {
        id: 27,
        chapterName: "Boala coronariană - Angina. Sindroamele coronariene acute",
        startPage: 1079,
        endPage: 1091,
        isDone: false,
        currentPage: 1079,
        timesRecapped: 0,
        datesCompleted: [],
        childChapters: [],
        isChild: true
      },
      28: {
        id: 28,
        chapterName: "Valvulopatii",
        startPage: 1091,
        endPage: 1103,
        isDone: false,
        currentPage: 1091,
        timesRecapped: 0,
        datesCompleted: [],
        childChapters: [],
        isChild: true
      },
      29: {
        id: 29,
        chapterName: "Endocardita infecțioasă",
        startPage: 1103,
        endPage: 1107,
        isDone: false,
        currentPage: 1103,
        timesRecapped: 0,
        datesCompleted: [],
        childChapters: [],
        isChild: true
      },
      30: {
        id: 30,
        chapterName: "Bolile miocardului - Miocardita. Cardiomiopatiile",
        startPage: 1118,
        endPage: 1124,
        isDone: false,
        currentPage: 1118,
        timesRecapped: 0,
        datesCompleted: [],
        childChapters: [],
        isChild: true
      },
      31: {
        id: 31,
        chapterName: "31. Hipertensiunea arteriala",
        startPage: 1133,
        endPage: 1145,
        isDone: false,
        currentPage: 1133,
        timesRecapped: 0,
        datesCompleted: [],
        childChapters: [],
        isChild: true
      },
      32: {
        id: 32,
        chapterName: "32. Gastroenterologie",
        startPage: 0,
        endPage: 0,
        isDone: false,
        currentPage: 0,
        timesRecapped: 0,
        datesCompleted: [],
        childChapters: [33, 34, 35],
        isChild: true
      },
      33: {
        id: 33,
        chapterName: "Boala de reflux gastroesofagian",
        startPage: 1162,
        endPage: 1166,
        isDone: false,
        currentPage: 1162,
        timesRecapped: 0,
        datesCompleted: [],
        childChapters: [],
        isChild: true
      },
      34: {
        id: 34,
        chapterName: "Infecția cu Helicobacter Pylori",
        startPage: 1172,
        endPage: 1176,
        isDone: false,
        currentPage: 1172,
        timesRecapped: 0,
        datesCompleted: [],
        childChapters: [],
        isChild: true
      },
      35: {
        id: 35,
        chapterName: "Bolile inflamatorii intestinale",
        startPage: 1198,
        endPage: 1208,
        isDone: false,
        currentPage: 1198,
        timesRecapped: 0,
        datesCompleted: [],
        childChapters: [],
        isChild: true
      },
      36: {
        id: 36,
        chapterName: "34. Bolile hepatice",
        startPage: 0,
        endPage: 0,
        isDone: false,
        currentPage: 0,
        timesRecapped: 0,
        datesCompleted: [],
        childChapters: [37, 38],
        isChild: true
      },
      37: {
        id: 37,
        chapterName: "Hepatita - Hepatita virală",
        startPage: 1275,
        endPage: 1284,
        isDone: false,
        currentPage: 1275,
        timesRecapped: 0,
        datesCompleted: [],
        childChapters: [],
        isChild: true
      },
      38: {
        id: 38,
        chapterName: "Ciroza hepatică",
        startPage: 1289,
        endPage: 1303,
        isDone: false,
        currentPage: 1289,
        timesRecapped: 0,
        datesCompleted: [],
        childChapters: [],
        isChild: true
      },
      39: {
        id: 39,
        chapterName: "36. Tulburari renale si ale tractului urinar",
        startPage: 0,
        endPage: 0,
        isDone: false,
        currentPage: 0,
        timesRecapped: 0,
        datesCompleted: [],
        childChapters: [40, 41, 42],
        isChild: true
      },
      40: {
        id: 40,
        chapterName: "Glomerulul și afectarea glomerulară",
        startPage: 1351,
        endPage: 1368,
        isDone: false,
        currentPage: 1351,
        timesRecapped: 0,
        datesCompleted: [],
        childChapters: [],
        isChild: true
      },
      41: {
        id: 41,
        chapterName: "Nefritele tubulointerstițiale (NTI)",
        startPage: 1385,
        endPage: 1387,
        isDone: false,
        currentPage: 1385,
        timesRecapped: 0,
        datesCompleted: [],
        childChapters: [],
        isChild: true
      },
      42: {
        id: 42,
        chapterName: "Boala cronică de rinichi",
        startPage: 1392,
        endPage: 1405,
        isDone: false,
        currentPage: 1392,
        timesRecapped: 0,
        datesCompleted: [],
        childChapters: [],
        isChild: true
      },
      43: {
        id: 43,
        chapterName: "37. Infectii transmisibile pe cale sexuala si infectia cu virusul imunodeficientei umane",
        startPage: 0,
        endPage: 0,
        isDone: false,
        currentPage: 0,
        timesRecapped: 0,
        datesCompleted: [],
        childChapters: [44],
        isChild: true
      },
      44: {
        id: 44,
        chapterName: "Virusul imunodeficienței umane și sindromul imunodeficienței dobândite",
        startPage: 1425,
        endPage: 1450,
        isDone: false,
        currentPage: 1425,
        timesRecapped: 0,
        datesCompleted: [],
        childChapters: [],
        isChild: true
      }
}
