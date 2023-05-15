export const LukaVoultForm = () => {
    return `
        <div class="luka-vault-form-container">
            <div class="container-btn-back-vault">
                <div class="btn-back-vault"><div>< Volver</div></div>
            </div>    
            <div class="luka-vault-form">
                <div class="vault-form-name-container">
                    <label class="vault-input-label">Nombre del tarjetahabiente</label>
                    <input type="text" class="vault-input vault-form-name" />
                </div>
                <div class="vault-form-number-container">
                    <label class="vault-input-label">Número de la tarjeta</label>
                    <input type="text" class="vault-input vault-form-number" maxlength="19" id="input-number-vault"/>
                </div>
                <div>
                    <label class="vault-input-label">Fecha de expiración</label>
                    <input type="text"  class="vault-input vault-form-date" />
                </div>
                <div id="vault-form-cvv">
                    <label class="vault-input-label">CVV</label>
                    <input type="text" maxlength="4" class="vault-input vault-form-ccv" id="input-cvv-vault" />
                </div>
                <div class="vault-form-pais-container">
                    <label class="vault-input-label">Pais emisor de la tarjeta</label>
                    <input type="text" class="vault-input vault-form-pais" />
                </div>
            </div>
            <div class="container-powerby-voult">
                <div class="powerby-voult">Powered by Luka</div>
            </div>
        </div>
    `;
}


export const handleChangeCvv = () => {
    const inputCvv = document.querySelector('#input-cvv-vault');
    const cardcvv = document.querySelector('#vault-card-cvv-back-newCard');
    inputCvv.addEventListener('keyup', (event) => {
        if (event.target.value.length > 0) {
            /* solo numeros */
            const regex = /^[0-9]*$/;
            if (!regex.test(event.target.value)) {
                event.target.value = event.target.value.slice(0, -1);
            }
            cardcvv.innerHTML = event.target.value;
        }else {
            cardcvv.innerHTML = '...';
        }
    });
}

export const handleChangeNumber = () => {
    const inputNumber = document.querySelector('#input-number-vault');
    const cardNumber = document.querySelector('#card-number-newCard');
    inputNumber.addEventListener('keyup', (event) => {
        if (event.target.value.length > 0) {
            const regex = /^[0-9\s]*$/;
            if (!regex.test(event.target.value)) {
                event.target.value = event.target.value.slice(0, -1);
            }
            const regex2 = /^[0-9]{4}\s[0-9]{4}\s[0-9]{4}\s[0-9]{4}$/;
            if (!regex2.test(event.target.value)) {
                event.target.value = event.target.value.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim();
            }
            cardNumber.innerHTML = event.target.value;
        }else {
            cardNumber.innerHTML = '**** **** **** ****';
        }
    });
}
