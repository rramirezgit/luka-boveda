import { LukaVoultCard } from "../Card/index.js";
import { LukaCardNewCard } from "../newCard/index.js";
import { ButonMore } from "./BotonMore/index.js";

const cards = [
    {
        id: 1,
       color: "#0878FF",
    },
    {
        id: 2,
         color: "#233750",
    },
    {
        id: 3,
        color: "#DE5E36",
    },
]



export const LukaVoultCardList = () => {
  return `    
        <div class="luka-vault-container">
            <div class="vault-container-mesage">Seleccione tarjeta</div>
            <div class="luka-vault-card-list">
                ${cards.map((card) => LukaVoultCard(card)).join("")}
                ${ButonMore()}
            </div>
            ${LukaCardNewCard()}
        </div>
    `;
};
