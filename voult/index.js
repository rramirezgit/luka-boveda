import { activeCardHover } from "./Card/index.js";
import { LukavoultComponent } from "./VaultContainer/index.js";

const lukaVoult = {}

lukaVoult.init = ({id_rendender}) => {
    document.getElementById(id_rendender).innerHTML = LukavoultComponent();

    /* se activan los Mouse hover de las tarjetas */
    activeCardHover();
    /* funcionalidad de boton agregar mas tarjetas */
    handleClickMore();    
}


lukaVoult.init({id_rendender:'luka-voult'});
