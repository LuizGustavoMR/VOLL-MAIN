import IConsulta from "../types/IConsultas";
import useFetch from "../utilities/useFetch";

const GetConsultas= () => {
    return useFetch<IConsulta[] | null>({url: 'consultas'});
}

export default GetConsultas;