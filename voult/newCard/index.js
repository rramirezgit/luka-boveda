import { LukaVoultCard } from "../Card/index.js";
import { InputCardName } from "./InputCardName/index.js";
import { RadiosButonsColor } from "./RadiosButonsColor/index.js";

export const LukaCardNewCard = () => {
  return `
    
        <div class="luka-vault-new-card">
            ${LukaVoultCard({
              id: "newCard",
              color: "rgba(105, 173, 255, 1)",
              disablePointerEvents: true,
              haveEdit: false,
              haveSelect: false,
            })}
                ${RadiosButonsColor()}
                ${InputCardName()}
                <div class="vault-new-card-title">Agregar tarjeta</div>
        </div>
    `;
};
