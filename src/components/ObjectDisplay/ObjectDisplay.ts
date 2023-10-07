import { addCharacter, removeCharacter } from '../../store/actions';

class ObjectDisplay extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();

    const images = this.shadowRoot?.querySelectorAll('img');

    images?.forEach((img, index) => {
      img?.addEventListener('click', () => {
      });
    });
  }

  render() {
    if (this.shadowRoot) {
      const inactive = document.createElement('div');
      inactive.className = 'reserve';

      const activeSquad = document.createElement('div');
      activeSquad.className = 'activeSquad';

      this.shadowRoot.appendChild(inactive);
      this.shadowRoot.appendChild(activeSquad);
    }
  }
}

customElements.define('display-object', ObjectDisplay);
export default ObjectDisplay;
