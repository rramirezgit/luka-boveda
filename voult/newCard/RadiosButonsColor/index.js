import { Btncheck } from "../../assets/index.js";

const Butons = [
  {
    id: 1,
    color: "rgba(59, 77, 99, 1)",
  },
  {
    id: 2,
    color: "rgba(255, 136, 136, 1)",
  },
  {
    id: 3,
    color: "rgba(47, 141, 255, 1)",
  },
  {
    id: 4,
    color: "rgba(255, 199, 0, 1)",
  },
  {
    id: 5,
    color: "rgba(66, 47, 182, 1)",
  },
];

export const RadiosButonsColor = () => {
  return `	
    <div class="radio-group">
        ${Butons.map(buton => {
          return `
                <div class="radios-container">
                    <input class="vault-radios" type="radio" id="select${buton.id}" name="option">
                    <label class="vault-radio-label" style="background-color:${buton.color}" for="select${buton.id}">
                        <div class="symbol">${Btncheck}</div>
                    </label>
                    
                </div>
            `;
        }).join("")}
    </div>
    `;
};

export const handleClickRadio = e => {
    const radioChecked = document.querySelectorAll(".vault-radios");
    const card = document.querySelector("#card-newCard");
    
    radioChecked.forEach(radio => {
        radio.addEventListener("click", () => {
            card.style.backgroundColor = radio.nextElementSibling.style.backgroundColor;
        })
    })

    
};
