import IProfissional from "../types/IProfissional";
import useFetch from "../utilities/useFetch";

 const GetProfissionais = () => {
    return useFetch<IProfissional[]>({url: 'consultas'});
}

export default GetProfissionais;