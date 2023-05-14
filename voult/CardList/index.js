import { LukaVoultCard } from "../Card/index.js";
import { LukaCardNewCard } from "../newCard/index.js";
import { ButonMore } from "./BotonMore/index.js";

const cards = [
    {
        id: 1,
       color: "rgba(105, 173, 255, 1)",
    },
    {
        id: 2,
         color: "rgba(60, 75, 94, 1)",
    },
    {
        id: 3,
        color: "rgba(229, 139, 110, 1)",
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
