export interface IUser {
    userName:string,
    email:string,
    password:string,
    mobileNo:number,
    status?:"student"|"employee"
}