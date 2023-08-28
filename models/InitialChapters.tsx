export interface ChapterSignature {
    [key: number]: any
}


export const initialChapters: ChapterSignature = {
    0: {
        id: 0,
        chapterName: "Chapter - 1",
        startPage: 0,
        endPage: 0,
        totalPages: 200,
        isDone: false,
        currentPage: 0,
        timesRecapped: 0,
        datesCompleted: [],
        childChapters: [],
        isChild: false
    },
    1: {
        id: "1",
        chapterName: "Chapter - 2",
        startPage: 0,
        endPage: 0,
        totalPages: 100,
        isDone: false,
        currentPage: 0,
        timesRecapped: 0,
        datesCompleted: [],
        childChapters: [3, 4],
        isChild: false
    },
    2: {
        id: "2",
        chapterName: "Chapter - 3",
        startPage: 0,
        endPage: 0,
        totalPages: 150,
        isDone: false,
        currentPage: 0,
        timesRecapped: 0,
        datesCompleted: [],
        childChapters: [],
        isChild: false
    },
    3: {
        id: "3",
        chapterName: "SubChapter - 2.1",
        startPage: 0,
        endPage: 0,
        totalPages: 150,
        isDone: false,
        currentPage: 0,
        timesRecapped: 0,
        datesCompleted: [],
        childChapters: [],
        isChild: true
    },
    4: {
        id: "4",
        chapterName: "SubChapter - 2.2",
        startPage: 0,
        endPage: 0,
        totalPages: 150,
        isDone: false,
        currentPage: 0,
        timesRecapped: 0,
        datesCompleted: [],
        childChapters: [],
        isChild: true
    }
}
