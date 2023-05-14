export const LukaVoultForm = () => {
    return `
        <div class="luka-vault-form-container">
            <div class="container-btn-back-vault">
                <div class="btn-back-vault"><div>< Volver</div></div>
            </div>    
            <div class="luka-vault-form">
                <input type="text" placeholder="Nombre de la tarjeta" class="vault-input vault-form-name" />
                <input type="text" placeholder="Número de la tarjeta" class="vault-input vault-form-number" />
                <input type="text" placeholder="Fecha de expiración" class="vault-input vault-form-date" />
                <input type="text" placeholder="Código de seguridad" class="vault-input vault-form-ccv" />
                <input type="text" placeholder="Pais emisor de la tajeta" class="vault-input vault-form-pais" />
            </div>
            <div class="container-powerby-voult">
                <div class="powerby-voult">Powered by Luka</div>
            </div>
        </div>
    `;
}