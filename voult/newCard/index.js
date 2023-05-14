import { LukaVoultCard } from "../Card/index.js";
import { pencilNew } from "../assets/index.js";
import { InputCardName } from "./InputCardName/index.js";
import { RadiosButonsColor } from "./RadiosButonsColor/index.js";

export const LukaCardNewCard = () => {
  return `
    
        <div class="luka-vault-new-card">
            <div class="new-card-container">
              ${LukaVoultCard({
                id: "newCard",
                color: "rgba(105, 173, 255, 1)",
                disablePointerEvents: true,
                haveEdit: false,
                haveSelect: false,
              })}
            </div>
            <div id="inputs-edit-vault">
              ${RadiosButonsColor()}
              ${InputCardName()}
              <div class="content-options-vault">
                <div class="btns-options-vault">Cancelar</div>
                <div class="btns-options-vault">Aceptar</div>
              </div>
            </div>
              <div class="vault-new-card-title-container">
                <div class="vault-new-card-img">${pencilNew}</div>
                <div class="vault-new-card-title">Agregar tarjeta</div>
              </div>
        </div>
    `;
};

export const handleClickNewCard = () => {
  const link = document.querySelector(".vault-new-card-title-container");
  const inputs = document.querySelector("#inputs-edit-vault");
  const card = document.querySelector(".new-card-container");
  link.addEventListener("click", () => {
  card.style.transform = "translateY(-20px)";  
  card.style.position = "absolute";
  link.style.display = "none";
      setTimeout(() => {
        inputs.classList.add("show-input");
      }, 200);
  });
}
