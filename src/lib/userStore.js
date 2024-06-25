import { doc, getDoc } from "firebase/firestore";
import { create } from "zustand";
import { db } from "./firebase";

//This is a state made using zustand state management library so that we can use it in any components without passing it from the parent to the child components and we can use it directly from this file. 


//In this we create useUserStore which is a function that takes a set function as an argument and returns an object with currentUser and isloading properties. We also have a fetchUserInfo function that takes a uid as an argument and fetches the user info from the firestore database and sets the currentUser property to the fetched user info and isloading to false. If the user info is not found then it sets the currentUser to null and isloading to false. If there is an error while fetching the user info then it sets the currentUser to null and isloading to false.
export const useUserStore= create((set)=>({
    currentUser:null,
    isloading:true,
    fetchUserInfo:async(uid)=>{
     if(!uid){
      return set({currentUser:null,isloading:false});  
     }   
     try{
        const docRef=doc(db,"users",uid);
        const docSnap=await getDoc(docRef);

        if(docSnap.exists()){
            return set({currentUser:docSnap.data(),isloading:false}); 
        }
        else{
            set({currentUser:null,isloading:false})
        }


     }catch(error){
        return set({currentUser:null,isloading:false});
     }
    }
}))