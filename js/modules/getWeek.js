function weekNumberByThur(time){
    const year = time.getFullYear();
    const month = time.getMonth();
    const date = time.getDate();

    const firstDate = new Date(year, month, 1);
    const lastDate = new Date(year, month + 1, 0);
    const firstDayOfWeek = firstDate.getDay() === 0 ? 7 : firstDate.getDay();
    const lastDatOfWeek = lastDate.getDay();

    const lastDay = lastDate.getDate();

    //1일이 금, 토, 일이라면 true 
    const firstWeekCheck = firstDayOfWeek === 5 || firstDayOfWeek === 6 || firstDayOfWeek
    const lastWeekCheck = lastDatOfWeek === 1 || lastDatOfWeek === 2 || lastDatOfWeek

    const lastWeekNo = Math.ceil((firstDayOfWeek - 1 + lastDay / 7));

    let weekNo = Math.ceil((firstDayOfWeek - 1+ date) / 7);
    if(weekNo === 1 && firstWeekCheck) weekNo = 'prev';
    else if (weekNo === lastWeekNo && lastWeekCheck) weekNo = 'next';
    else if (firstWeekCheck) weekNo = weekNo - 1;


    return weekNo;
}

export default function getWeek(time){
    const inputDate = new Date(time);
    const year = inputDate.getFullYear();
    const month = inputDate.getMonth() + 1;

    
    let weekNumber = weekNumberByThur(inputDate);

    if(weekNumber === 'prev'){
        const afterDate = new Date(year, month-1, 0);
        year = month === 1 ? year - 1 : year;
        month = month === 1 ? 12 : month - 1;
        weekNumber = weekNumberByThur(afterDate);
    }else if(weekNumber === 'next'){
        year = month === 12 ? year + 1 : year;
        month = month === 12 ? 1 : month + 1;
        weekNumber = 1;
    }

    return [year, month, ('0'+weekNumber)];

    
}