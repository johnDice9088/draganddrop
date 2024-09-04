export interface IKivistar{
    id: string,
    first_name: string,
    last_name?: string | null,
    phone_number?: string,
    role?: string,
    reporting_to: string | null,
    branch_code: string,
    name?:string,
    reportingTo?:string |null,
    branch?:string,
}
export interface IfulljsonUser{
    id?: string,
    name?: string,
    reportingTo?: string | null,
    branch?: string,
}
export interface Ifulljsonmanager{
    id?: string,
    name?: string,
    reportingTo?: string | null,
    branch?: string,
    branchCode:string,
    kivistars?:IfulljsonUser[]
}

export interface IcreatedJson{
   [branchcode:string]:Ifulljsonmanager[]
}