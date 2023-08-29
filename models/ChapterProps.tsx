import Chapter from "../Screens/ChapterScreen";

type ChapterProps = {
    id: number,
    name: string,
    startPage: number,
    endPage: number,
    totalPages: number,
    isDone: boolean,
    currentPage: number,
    timesRecapped: number,
    datesCompleted: Array<Date>
    childChapers: Array<typeof Chapter>
};

export default ChapterProps
