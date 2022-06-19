import react, { ChangeEvent, useState } from 'react';
import {Props} from '../types/Posps';
import {api} from '../api';
import AddList from './AddTarefas';
import { render } from 'react-dom';

type TarefaProps = {
    data:Props
}

export const ListItem = ({data}:TarefaProps)=>{

    const [showModal, setShowModal] = useState(false);
    const[title , setModelTitle] = useState(data.title);
    const[body , setModelBody] = useState(data.body);
    const[bgColor , setModelBgColor] = useState(data.bgColor);

    const handleAddTitle = (e: ChangeEvent<HTMLInputElement>)=>{
      setModelTitle(e.target.value);
    }
    
    const handleAddBody = (e: ChangeEvent<HTMLTextAreaElement>)=>{
      setModelBody(e.target.value);
    }
    const handleAddBgcolor = (e: ChangeEvent<HTMLInputElement>)=>{
      setModelBgColor(e.target.value);
    }
  


    const handleDeleteItem = async (id:number)=>{
            let res = await api.delTarefa(id)
            alert("Tarefa deletada com sucesso!");
            window.location.reload();
    }

    const handleEdtItem = async (id:number)=>{
      let res =  await api.updateTarefa({id, title, body, bgColor});
       alert("Tarefa atualizada com sucesso!");
       setShowModal(false);
       window.location.reload();
    }


    return(
   
        <>
            <div 
                style={{backgroundColor:`${data.bgColor}`}}
                className="bg-[${data.bgColor}] m-5 back w-64 rounded-md border border-sky-500">
                <div className='border-b-2 border-sky-500 text-center p-5 text-lg font-medium leading-6 text-gray-900'>
                    {data.title}
                </div>
                <div className=' p-5'>
                   {data.body}
                </div>
                <div className=' flex justify-around border-t-2 border-sky-500  pt-5 pl-5 pr-5 pb-1'>
                   
                    <div className='type="button" data-modal-toggle="defaultModal" inline-flex justify-center py-2 px-4 border border-transparent shadow-sm   rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"'>
                        <button onClick={()=>setShowModal(true)}>Editar</button>
                    </div>
                    <div className='inline-flex justify-center py-2 px-4 border border-transparent shadow-sm  rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"'>
                        <button onClick={()=>handleDeleteItem(data.id)}>Deletar</button>
                    </div>
                    
                </div>
            </div>

            {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Editar Tarefa
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      x
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">

                    <div className="col-span-3 sm:col-span-2">
                        <label htmlFor="company-website" className="block text-sm font-medium text-gray-700"> Titulo </label>
                        <div className="mt-1 flex rounded-md shadow-sm">
                            <input 
                            value={title}
                            onChange={handleAddTitle}
                            type="text" 
                            name="title" 
                            className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300 p-3" 
                            placeholder="Titulo da tarefa"
                            />
                        </div>
                    </div>
                    <div className="col-span-3 sm:col-span-2">
                        <label htmlFor="company-website" className="block text-sm font-medium text-gray-700"> Assunto </label>
                        <div className="mt-1 flex rounded-md shadow-sm">
                           <textarea value={body}  onChange={handleAddBody}>


                           </textarea>
                        </div>
                    </div>
                    <div className="col-span-3 sm:col-span-2">
                        <label htmlFor="company-website" className="block text-sm font-medium text-gray-700"> Cor de fundo </label>
                        <div className="mt-1 flex rounded-md shadow-sm">
                            <input 
                            type="color" 
                            name="bgColor" 
                            value={bgColor}
                            className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300 p-3" 
                            onChange={handleAddBgcolor}
                            />
                        </div>
                    </div>

                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() =>handleEdtItem(data.id)}
                  >
                    Atualizar
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

           


        </>



    );


}