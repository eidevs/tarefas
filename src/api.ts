import axios from "axios";

const urlApi = 'http://127.0.0.1:8000/api';

type tarefa = {
    id?:number
    title?:string;
    body?:string;
    bgColor?:string;
}

export const api ={
    //listando todas as tarefas 
    getAllPost: async ()=>{

        let res = await axios.get(`${urlApi}/tasks`);
        return res.data;
    },

    //adicioando um atarefa nova
    addList:async({title, body, bgColor}:tarefa)=>{
        let res = await axios.post(`${urlApi}/tasks`, {
            title, body, bgColor
        });
        return res.data;
    },

    //atualizando um tarefa
    updateTarefa:async({id, title, body, bgColor}:tarefa)=>{
        let res = await axios.put(`${urlApi}/update/${id}`,{
            title, body, bgColor
        });
        return res.data;
    },

    //deletando uum tarefa 
    delTarefa:async(id:number)=>{
        let res = await axios.delete(`${urlApi}/delete/${id}`);
        return res.data; 
    }
    
}