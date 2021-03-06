import {AntiShadowElement} from "../util/AntiShadowElement";
import {connectToRedux, ReduxBindable} from "../util/ReduxConnector";

class TodoHeader extends AntiShadowElement implements ReduxBindable {

    static get template() {
        return `
            <nav class="header">Polymer 3 + Redux / Total Items ({{todosCount}})</nav>
        `
    }

    static get properties() {
        return {
            todosCount: Number
        }
    }

    connectedCallback() {
        super.connectedCallback();
        connectToRedux(this)
    }

    stateReceiver(state) {
        this.todosCount = state.todoReducer.todos.length;
    }

}

customElements.define('todo-header', TodoHeader);

export {TodoHeader};