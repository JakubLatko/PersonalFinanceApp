export default async function recurringDate(date:string){
    const splitted = date.split("T")
    const dateOnly = splitted[0].split("-")
    const finishedString = String(parseInt(dateOnly[2]))  + await numeralPromise(Number(dateOnly[2])) 
    return finishedString
}

 function numeralPromise(dayAsNumber:number){
    const numeral = new Promise((resolve, reject) => {
        switch (dayAsNumber) {
            case 1:
            case 21:
            case 31:
                resolve("st");
                break;
            case 2:
            case 22:
            case 32:
                resolve("nd");
                break;
            case 3:
            case 23:
                resolve("rd");
                break;
            default:
                resolve("th");
                break;
        }
    });
    return numeral;
}