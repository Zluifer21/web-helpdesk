export class TicketNew {

constructor(
public dinType_id:number,
public dni:number,
public name:string,
public agentDni:string,
public agentName:string,
public email:string,
public phone:string,
public address:string,
public subjects_ids:any [],
public user_assigned,
public priority_id,
public description,
public folios,
public files:any[],
public  status_id:any,
public id?:any
)
{}

}
