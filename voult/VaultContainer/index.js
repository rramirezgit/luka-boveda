import { LukaVoultCardList } from "../CardList/index.js"
import { LukaVoultForm } from "../Form/index.js"

export const LukavoultComponent = () => {

    return `
        <div class="luka-vault-list-form">
            ${LukaVoultCardList()}
            ${LukaVoultForm()}
        </div>
    `
}