import { useState } from "react";
import { UseUtil } from "./useUtil";

export function UseToastBar(){
  
    const [openToastValue, setopenToastValue] = useState(false);

    const [textBar,setTextBar] =  useState('');

    const openToastBar = () => {
      setopenToastValue(true);
      };
    
      const closeToastBar = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setopenToastValue(false);
      };

      return {openToastValue, openToastBar, closeToastBar, setTextBar, textBar}
}