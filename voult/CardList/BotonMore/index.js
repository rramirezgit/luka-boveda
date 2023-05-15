import { rotateCard, rotateCardBack } from "../../Card/index.js";
import { handleChangeCvv, handleChangeNumber } from "../../Form/index.js";
import { handleChangeCardName } from "../../newCard/InputCardName/index.js";
import { handleClickRadio } from "../../newCard/RadiosButonsColor/index.js";
import { handleClickNewCard } from "../../newCard/index.js";

export const ButonMore = () => {
    return `
          <div class="luka-vault-card-more">
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.46802 6.59863H11.468" stroke="#ACB9C9" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M6.46802 11.5986V1.59863" stroke="#ACB9C9" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
          </div>
      `;
  };

  export const handleClickBack = () => {
    const newCard = document.querySelector(".luka-vault-new-card");
    const cardListContainer = document.querySelector(".luka-vault-container");
    const mesage = document.querySelector(".vault-container-mesage");
    const cardList = document.querySelector(".luka-vault-card-list");
    const formulario = document.querySelector(".luka-vault-form-container");
    const moreBtn = document.querySelector(".btn-back-vault");
    
    moreBtn.addEventListener("click", () => {
        formulario.classList.remove("voult-opacity-form");
        setTimeout(() => {
            formulario.classList.remove("voult-visible-form");
            newCard.classList.remove("luka-vault-new-card-show");
            cardListContainer.classList.remove("voult-container-new");
            setTimeout(() => {
                cardList.classList.remove("voult-hidden");
                mesage.classList.remove("voult-hidden-opacity");
                setTimeout(() => {
                    cardList.classList.remove("voult-hidden-opacity");
                    mesage.classList.remove("voult-hidden");
                }, 100);
            }, 50);
        }, 250);
    });
}

export const handleClickMore = () => {
    const newCard = document.querySelector(".luka-vault-new-card");
    const cardListContainer = document.querySelector(".luka-vault-container");
    const mesage = document.querySelector(".vault-container-mesage");
    const cardList = document.querySelector(".luka-vault-card-list");
    const formulario = document.querySelector(".luka-vault-form-container");
    const moreBtn = document.querySelector(".luka-vault-card-more");

    moreBtn.addEventListener("click", () => {
        mesage.classList.add("voult-hidden-opacity");
        cardList.classList.add("voult-hidden-opacity");
        setTimeout(() => {
            mesage.classList.add("voult-hidden");
            cardList.classList.add("voult-hidden");
            setTimeout(() => {
                cardListContainer.classList.add("voult-container-new");
                setTimeout(() => {
                        formulario.classList.add("voult-visible-form");
                        formulario.classList.add("voult-opacity-form");
                        newCard.classList.add("luka-vault-new-card-show");
                        setTimeout(() => {
                            newCard.classList.add("voult-opacity-form");
                        }, 50);
                    }, 250);
            } , 100);
        }, 100);


        setTimeout(() => {
            handleClickRadio()
            handleChangeCardName()
            handleClickNewCard()
            handleClickBack()
            rotateCard()
            rotateCardBack()
            handleChangeCvv()
            handleChangeNumber()
        }, 1000);
    });
}

/* funcion que hace todo lo cantrario que handleClickMore */


