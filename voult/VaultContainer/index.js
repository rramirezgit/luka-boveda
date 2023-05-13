import { LukaVoultCardList } from "../CardList/index.js"

export const LukavoultComponent = () => {

    return `
        <div class="luka-vault-container">
            <div class="vault-container-mesage">Seleccione tarjeta</div>
            ${LukaVoultCardList()}
        </div>
    `
}