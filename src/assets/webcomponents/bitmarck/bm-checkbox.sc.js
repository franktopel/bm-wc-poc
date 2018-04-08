/*! Built with http://stenciljs.com */
const { h } = window.bitmarck;

class BmCheckbox {
    handleChange() {
        this.value = this.value === 'on' ? 'off' : 'on';
        console.log('checkbox changed, new value: ', this.value);
    }
    render() {
        return (h("div", { class: "bm-checkbox" },
            h("input", { type: "checkbox", id: this.checkboxid, value: this.initialvalue || 'on', onChange: this.handleChange }),
            h("label", { htmlFor: this.checkboxid }, this.labeltext)));
    }
    static get is() { return "bm-checkbox"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return { "checkboxid": { "type": String, "attr": "checkboxid" }, "initialchecked": { "type": Boolean, "attr": "initialchecked" }, "initialvalue": { "type": String, "attr": "initialvalue" }, "labeltext": { "type": String, "attr": "labeltext" }, "value": { "state": true } }; }
    static get style() { return "\@charset \"UTF-8\";\n.bm-checkbox[data-bm-checkbox] {\n  display: inline-block; }\n  .bm-checkbox[data-bm-checkbox]   input[type=checkbox][data-bm-checkbox] {\n    display: none; }\n    .bm-checkbox[data-bm-checkbox]   input[type=checkbox][data-bm-checkbox]:checked    + label[data-bm-checkbox] {\n      background-color: rgba(255, 255, 255, 0.3); }\n      .bm-checkbox[data-bm-checkbox]   input[type=checkbox][data-bm-checkbox]:checked    + label[data-bm-checkbox]::before {\n        background-color: green;\n        color: white;\n        content: \"\\2713 \";\n        margin-right: 1em;\n        padding: 0;\n        vertical-align: middle; }\n      .bm-checkbox[data-bm-checkbox]   input[type=checkbox][data-bm-checkbox]:checked    + label[data-bm-checkbox]::after {\n        background-image: radial-gradient(#ff6 0%, #aa0 100%);\n        content: \"\";\n        display: block;\n        position: absolute;\n        top: 0;\n        left: 1.5em;\n        right: 0;\n        bottom: 0;\n        z-index: -1; }\n  .bm-checkbox[data-bm-checkbox]   label[data-bm-checkbox] {\n    background-color: #f7f7f7;\n    box-shadow: 3px 3px 3px #999;\n    border-radius: 10px;\n    cursor: pointer;\n    display: inline-block;\n    padding: 1em 1em 1em 4em;\n    position: relative;\n    transition: all .2s ease-in-out;\n    overflow: hidden; }\n    .bm-checkbox[data-bm-checkbox]   label[data-bm-checkbox]::before {\n      background-color: #f0f0f0;\n      bottom: 0;\n      content: \"×\";\n      display: inline-block;\n      font-size: 2em;\n      line-height: 1.5em;\n      left: 0;\n      position: absolute;\n      top: 0;\n      text-align: center;\n      transition: all .2s ease-in-out;\n      width: 1.5em; }\n    .bm-checkbox[data-bm-checkbox]   label[data-bm-checkbox]::after {\n      background-image: radial-gradient(#ff0 0%, #aa0 100%);\n      content: \"\";\n      display: block;\n      position: absolute;\n      top: 0;\n      left: 100%;\n      right: 0;\n      bottom: 0;\n      transition: all .3s ease-in-out .2s;\n      transform-origin: right center;\n      z-index: -1; }"; }
}

export { BmCheckbox };
