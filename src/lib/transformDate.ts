export default async function transformDate(date:string){
    const splitted = date.split("T")
    const dateOnly = splitted[0].split("-")
    const finishedString = dateOnly[2] + " " + await monthPromise(Number(dateOnly[1])) + " " + dateOnly[0]
    return finishedString
}

 function monthPromise(monthAsNumber:number){
    const day = new Promise((resolve, reject) => {
        switch (monthAsNumber) {
            case 1:
                resolve("Jan");
                break;
            case 2:
                resolve("Feb");
                break;
            case 3:
                resolve("Mar");
                break;
            case 4:
                resolve("Apr");
                break;
            case 5:
                resolve("May");
                break;
            case 6:
                resolve("Jun");
                break;
            case 7:
                resolve("Jul");
                break;
            case 8:
                resolve("Aug");
                break;
            case 9:
                resolve("Sep");
                break;
            case 10:
                resolve("Oct");
                break;
            case 11:
                resolve("Nov");
                break;
            case 12:
                resolve("Dec");
                break;
            default:
                reject("Error");
                break;
        }
    });
    return day;
}