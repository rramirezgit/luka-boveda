export const InputCardName = () => {
    return `
        <div class="vault-new-card-input-container">
            <input type="text" placeholder="Ninck name" class="vault-input" maxlength="18"/>
        </div>
    `;
}

export const handleChangeCardName = () => {
    const inputCardName = document.querySelector('.vault-input');
    const cardName = document.querySelector('#card-name-newCard');
    inputCardName.addEventListener('keyup', (event) => {
        if (event.target.value.length > 0) {
            /* solo letras */
            const regex = /^[a-zA-Z\s]*$/;
            if (!regex.test(event.target.value)) {
                event.target.value = event.target.value.slice(0, -1);
            }else{
                /* pasa todo a mayusculas */
                event.target.value = event.target.value.toUpperCase();
            }
            cardName.innerHTML = event.target.value;
        }else {
            cardName.innerHTML = '....';
        }
    });
}


