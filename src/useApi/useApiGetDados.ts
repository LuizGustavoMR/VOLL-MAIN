import IConsulta from "../types/IConsultas";
import IProfissional from "../types/IProfissional";
import useFetch from "../utilities/useFetch";

export function GetConsultas(){
    return useFetch<IConsulta[]>({url: 'consultas'});
}

export function GetProfissionais(){
    return useFetch<IProfissional[]>({url: 'consultas'});
}