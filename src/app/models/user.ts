export class User {
constructor(
public name:string,
public email:string,
public avatar:string,
public password:string,
public username:string,
public area_id:number,
public isActive:boolean,
public roles:any[],
public area:any[],
//this.user= new User('','','','','',0,false,[])
)
{}

}
