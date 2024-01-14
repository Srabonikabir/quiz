
import { Outlet, useLoaderData } from "react-router-dom";
import Header from "../Components/Home/Header";
import Footer from "../Components/Footer";
import { createContext } from "react";


      
export const TopicContext = createContext([]);

const Main = () => {
    const topics = useLoaderData();
    return (

        <div>
            <TopicContext.Provider value={topics}>
            <Header></Header>           

<Outlet></Outlet>
 <Footer></Footer>


            </TopicContext.Provider>
   
        

        </div>

           
    );
};

export default Main;