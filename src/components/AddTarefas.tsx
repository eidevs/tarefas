import { ChangeEvent, useState } from "react";
import { api} from "../api";

type tarefa = {
  id?:number
  title?:string,
  body?:string,
  bgColor?:string
}

 const  AddList = (id:tarefa)=>{

 

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [bgColor, setBgColor] = useState('');

  const handleAddTitle = (e: ChangeEvent<HTMLInputElement>)=>{
    setTitle(e.target.value);
  }
  
  const handleAddBody = (e: ChangeEvent<HTMLTextAreaElement>)=>{
    setBody(e.target.value);
  }
  const handleAddBgcolor = (e: ChangeEvent<HTMLInputElement>)=>{
    setBgColor(e.target.value);
  }


  const handleAddList = async ()=>{
     if(title && bgColor && body){
      
        let res = await api.addList({title, body, bgColor});
        alert(res);
        window.location.reload();
        
        
     }
  }


    return (
        <>
        <div>
        <div className="md:grid md:grid-cols-3 md:gap-6">
         
          <div className="mt-5 md:mt-0 md:col-span-2">
          <h3 className="text-lg font-medium leading-6 text-gray-900">Adicionar Nova tarefa</h3>
           
              <div className="shadow sm:rounded-md sm:overflow-hidden">
                <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-3 sm:col-span-2">
                      <label htmlFor="company-website" className="block text-sm font-medium text-gray-700"> Titulo </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <input 
                          type="text" 
                          value={title}
                          name="title" 
                          onChange={handleAddTitle}
                          className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300 p-3" 
                          placeholder="Titulo da tarefa"
                        />
                      </div>
                    </div>
                    
                  </div>
      
                  <div>
                    <label htmlFor="about" className="block text-sm font-medium text-gray-700"> Assunto </label>
                    <div className="mt-1">
                      
                      <textarea 

                        name="body" 
                        value={body}  
                        onChange={handleAddBody}
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md p-3" 
                        placeholder="Qual sera a tarefa?">

                      </textarea>
                    </div>
                  </div>
                  <div className="col-span-3 sm:col-span-2">
                      <label htmlFor="company-website" className="block text-sm font-medium text-gray-700"> cor de fundo </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <input 
                          type="color" 
                          name="bgColor" 
                          onChange={handleAddBgcolor}
                          className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md  border-gray-300 p-3" 
                          
                        />
                      </div>
                    </div>
                </div>
            
                  
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button onClick={handleAddList} type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Save</button>
                </div>
              </div>
          </div>
        </div>
      </div>
      
      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200"></div>
        </div>
      </div>
    
       </>
    )
}

export default AddList;