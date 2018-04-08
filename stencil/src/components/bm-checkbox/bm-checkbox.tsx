import { Component, Prop, State, Listen } from '@stencil/core';

@Component({
  tag: 'bm-checkbox',
  styleUrl: 'bm-checkbox.scss',
  shadow: false
})
export class BmCheckbox {

  @Prop() checkboxid: string;
  @Prop() initialchecked: string;
  @Prop() initialvalue: string;
  @Prop() labeltext: string;
  @State() value: string;

  @Listen('change')
  handleChange(evt) {
    if (evt.target.tagName.toUpperCase() === "LABEL") {
      return;
    }
    this.value = this.value === 'on' ? 'off' : 'on'
    console.log('checkbox changed, new value: ', this.value);
  }

  render() {
    return (
      <div class="bm-checkbox">
        <input type="checkbox" id={ this.checkboxid } value={ this.initialvalue } onKeyDown={ this.handleChange } />
        <label htmlFor={ this.checkboxid }>{ this.labeltext }</label>
      </div>
    );
  }
}
