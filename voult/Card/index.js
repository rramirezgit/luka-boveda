import { CardPencil, imgVisa } from "../assets/index.js";

export const LukaVoultCard = ({
  id,
  haveEdit = true,
  haveSelect = true,
  haveInfo = true,
  haveDelete = true,
  haveImg = true,
  color,
  name = "MI BOFA",
  numbers = "1234",
  disablePointerEvents = false,
}) => {
  return `    
      <div class="container-card-front-back">
        <div class="luka-vault-card" id="card-${id}" style="background-color:${color}${disablePointerEvents ? ';pointer-events: none' : ""}">
            <div class="vault-card-cicle"></div>
            <div class="vault-card-edit">${
              haveEdit ? `${CardPencil}` : ""
            }</div>
            <div class="vault-card-select">
            ${
              haveSelect
                ? `<input class="card-select-input" type="checkbox" id="select-${id}" disabled>
                    <label class="card-select-label" for="select-${id}"></label>`
                : ""
            }
            </div>
            <div class="vault-card-info-container">
                ${
                  haveInfo
                    ? `
                    <div class="vault-card-info">
                        <div class="vault-card-name" id="card-name-${id}">${name}</div>
                        <div class="vault-card-number" id="card-number-${id}"> **** **** **** ${numbers}</div> 
                    </div>
                `
                    : ""
                }
            </div>
            <div class="vault-card-delete-cotainer">${
              haveDelete
                ? `
                <div class="vault-card-delete" id="deleteBtn-${id}">Eliminar</div>
            `
                : ""
            }</div>
            <div class="vault-card-img-container">${
              haveImg
                ? `
                <div class="vault-card-img">
                    ${imgVisa}
                </div>
            `
                : ""
            }</div>
        </div>
        ${cardBack({
          id,
          color,
          disablePointerEvents
        })}
      </div>

    `;
};

const cardBack = ({
  id,
  color,
  disablePointerEvents
}) =>{

  return  `
    <div class="luka-vault-card-back" id="card-back-${id}" style="background-color:${color}${disablePointerEvents ? ';pointer-events: none' : ""}">
        <div class="vault-card-banda"></div>
        <div class="vault-card-cvv-back" id="vault-card-cvv-back-${id}">...</div>
    </div>
    `
}

const showDeleteBtn = (id, value) => {
  const deleteBtn = document.querySelector(`#deleteBtn-${id}`);
  deleteBtn.style.opacity = value;
};

const activeSelect = (id, value) => {
  const select = document.querySelector(`#select-${id}`);
  select.checked = value;
};

export const activeCardHover = () => {
  const cards = document.querySelectorAll(".luka-vault-card");

  cards.forEach(card => {
    card.addEventListener("mouseover", event => {
      card.style.transition = "all 0.3s ease-in-out";
      card.style.filter = "brightness(1.1)";
      card.style.transform = "scale(1.05)";
      showDeleteBtn(event.currentTarget.id.split("-")[1], "1");
      activeSelect(event.currentTarget.id.split("-")[1], true);
    });

    card.addEventListener("mouseout", event => {
      card.style.transition = "all 0.3s ease-in-out";
      card.style.filter = "brightness(1)";
      card.style.transform = "scale(1)";
      showDeleteBtn(event.currentTarget.id.split("-")[1], "0");
      activeSelect(event.currentTarget.id.split("-")[1], false);
    });
  });
};

let rotada =  false;

export const rotateCard = () => {
  const inputcvv = document.querySelector('#vault-form-cvv');
  const box1 = document.querySelector('#card-newCard');
  const box2 = document.querySelector('#card-back-newCard');
  inputcvv.addEventListener('focusin', () => {
    if (rotada) return;
    box1.style.transform = 'rotateY(180deg)';
    setTimeout(() => {
      box1.style.display = 'none';
      box2.style.display = 'block';
    }, 208);
    setTimeout(() => {
      box2.style.transform = 'rotateY(0deg)';
    }, 205);
    rotada = true;
  });
} 

export const rotateCardBack = () => {
  const inputcvv = document.querySelector('#vault-form-cvv');
  const box1 = document.querySelector('#card-newCard');
  const box2 = document.querySelector('#card-back-newCard');


  inputcvv.addEventListener('focusout', () => {
    if(rotada){
      rotada = false;
      box1.style.transform = 'rotateY(0deg)';
      box2.style.transform = 'rotateY(180deg)';
      setTimeout(() => {
        box2.style.display = 'none';
        box1.style.display = 'block';
      }, 208);
    } 
  });
}
