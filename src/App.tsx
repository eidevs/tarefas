import {useEffect, useState } from "react";
import {Props} from './types/Posps';
import {ListItem} from './components/LIstTarefas';
import {api} from './api';
import  AddList  from "./components/AddTarefas";

const App = ()=>{
  
  const [tarefas, setPosts] = useState<Props[]>([]);
  useEffect(()=>{
    const loadPost = async()=>{

      let json = await api.getAllPost();
      setPosts(json);
    }
    loadPost();
  }, [setPosts]); 

  
  return (
    <div className="p-5">
     
        <>
          <div className="mt-10">
            <AddList/>
          </div>
          <div className="flex flex-wrap m-5">
            {tarefas.map((item , index)=>(
              <ListItem data={item} key={index}/>  
            ))}
          </div>
        </>
      
      
    </div>
    
  );
}

export default App;

