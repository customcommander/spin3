import {Element as PolymerElement} from '../../@polymer/polymer/polymer-element.js';

class SpinApp extends PolymerElement {
  static get template() {
    return '<h1>spin app!</h1>';
  }
}

customElements.define('spin-app', SpinApp);
