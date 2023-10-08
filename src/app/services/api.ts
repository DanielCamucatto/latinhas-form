import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL; 
const api = axios.create({
    baseURL
}); 

export const getDemands = async() => {
    try {
        const resp = await api.get('/demands'); 
        return resp.data
    } catch (e) {
        console.error('Erro ao buscar as demandas',e); 
        throw e
    }
}
export const getDemandByID = async (demandId: number) => {
    try{
        const resp = await api.get(`/demands/${demandId}`);
        return resp.data; 
    }catch(e) {
        console.error('erro ao buscar a demanda por ID');
        throw e
    }
}

export const createDemand = async (demandData: FormData) => {
    try {
        const resp = await api.post('/demands', demandData);
        return resp.data;
        
    } catch (e) {
        console.error('erro ao cadastrar a demanda POST', e); 
        throw e
    }
}

export const updateDemand = async (demandId: number, demandData: object) => {
    try {
        const resp = await api.put(`/demands/${demandId}`, demandData); 
        return resp.data;
    } catch (e) {
        console.error('Erro ao atualizar a demanda:', e); 
        throw e
    }
}

export const deleteDemand = async (demandId: number) => {
    try {
        const resp = await api.delete(`/demands/${demandId}`); 
        return resp.data;
    } catch (e) {
        console.error('Erro ao deletar a demanda:' , e); 
        throw e
    }
}

export default api

