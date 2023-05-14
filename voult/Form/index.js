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
                    <input type="text" class="vault-input vault-form-number" />
                </div>
                <div>
                    <label class="vault-input-label">Fecha de expiración</label>
                    <input type="text"  class="vault-input vault-form-date" />
                </div>
                <div>
                    <label class="vault-input-label">CVV</label>
                    <input type="text" class="vault-input vault-form-ccv" />
                </div>
                <div class="vault-form-pais-container ">
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