export class BmCheckbox {
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
    static get properties() { return { "checkboxid": { "type": String, "attr": "checkboxid" }, "initialchecked": { "type": Boolean, "attr": "initialchecked" }, "initialvalue": { "type": String, "attr": "initialvalue" }, "labeltext": { "type": String, "attr": "labeltext" }, "value": { "state": true } }; }
    static get style() { return "/**style-placeholder:bm-checkbox:**/"; }
}
