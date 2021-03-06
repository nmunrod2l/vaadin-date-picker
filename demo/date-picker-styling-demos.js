import { html } from '@polymer/polymer/lib/utils/html-tag.js';
import { PolymerElement } from '@polymer/polymer/polymer-element.js';
class DatePickerStylingDemos extends DemoReadyEventEmitter(DatePickerDemo(PolymerElement)) {
  static get template() {
    return html`
    <style include="vaadin-component-demo-shared-styles">
      :host {
        display: block;
      }
    </style>


    <h3>Custom Inputs</h3>
    <vaadin-demo-snippet id="date-picker-styling-demos-custom-inputs">
      <template preserve-content="">
        <style>
          .my-input1 input {
            background: #f5f5f5;
            border: 2px solid #2196f3;
            border-radius: 4px;
            padding: 4px;
            text-align: center;
          }
        </style>
        <vaadin-date-picker-light class="my-input1">
          <iron-input>
            <input placeholder="Date" size="10">
          </iron-input>
        </vaadin-date-picker-light>
      </template>
    </vaadin-demo-snippet>

    <vaadin-demo-snippet id="date-picker-styling-demos-custom-icons">
      <template preserve-content="">
        <style>
          .my-input2 input {
            border: none;
            font-size: 14px;
            background: none;
          }
        </style>
        <vaadin-date-picker-light>
         <div class="my-input2">
           <iron-icon icon="event"></iron-icon>
           CHECK-IN:
           <iron-input>
             <input size="10">
           </iron-input>

         </div>
        </vaadin-date-picker-light>
      </template>
    </vaadin-demo-snippet>


    <h3>Small Text Field</h3>
    <vaadin-demo-snippet id="date-picker-styling-demos-small-text-field">
      <template preserve-content="">
        <vaadin-date-picker theme="small" label="Select date"></vaadin-date-picker>
      </template>
    </vaadin-demo-snippet>


    <h3>Custom Theme Variant</h3>
    <vaadin-demo-snippet id="date-picker-styling-demos-small-text-field">
      <template preserve-content="">
        <dom-module id="custom-date-picker" theme-for="vaadin-text-field vaadin-date-picker-overlay-content">
          <template>
            <style>
              :host([theme~="custom"]) {
                font-family: monospace;
              }
            </style>
          </template>
        </dom-module>
        <vaadin-date-picker theme="custom" label="Select date"></vaadin-date-picker>
      </template>
    </vaadin-demo-snippet>
`;
  }

  static get is() {
    return 'date-picker-styling-demos';
  }
}
customElements.define(DatePickerStylingDemos.is, DatePickerStylingDemos);
