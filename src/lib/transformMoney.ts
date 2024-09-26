export default function transformMoney(money:number){
    if(money < 0){
        const stringed = String(money)
        const splitted = stringed.split("-")
        const finished = {
            string:"-" + "$" + splitted[1],
            negative:true,
        }
        
        return finished
    } else {
        const stringed = String(money)
        const finished = {
            string:"+$" + stringed,
            negative:false,
        }
        return finished
    }
}