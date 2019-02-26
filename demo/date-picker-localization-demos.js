import { html } from '@polymer/polymer/lib/utils/html-tag.js';
import { PolymerElement } from '@polymer/polymer/polymer-element.js';
class DatePickerLocalizationDemos extends DemoReadyEventEmitter(DatePickerDemo(PolymerElement)) {
  static get template() {
    return html`
    <style include="vaadin-component-demo-shared-styles">
      :host {
        display: block;
      }
    </style>


    <h3>Localizing</h3>
    <vaadin-demo-snippet id="date-picker-localization-demos-localizing" when-defined="vaadin-date-picker">
      <template preserve-content="">
        <vaadin-date-picker label="Syntymäpäivä" value="1980-08-14">
        </vaadin-date-picker>
        <script>
          window.addDemoReadyListener('#date-picker-localization-demos-localizing', function(document) {
            // Set up the parser library for Finnish locale
            Sugar.Date.setLocale('fi');

            var datepicker = document.querySelector('vaadin-date-picker');
            datepicker.i18n = {
              week: 'viikko',
              calendar: 'kalenteri',
              clear: 'tyhjennä',
              today: 'tänään',
              cancel: 'peruuta',
              firstDayOfWeek: 1,
              monthNames:
                'tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu'.split('_'),
              weekdays: 'sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai'.split('_'),
              weekdaysShort: 'su_ma_ti_ke_to_pe_la'.split('_'),
              formatDate: function(date) {
                // Sugar Date expects a native date. The \`date\` is in format \`{ day: ..., month: ..., year: ... }\`
                return Sugar.Date.format(Sugar.Date.create(date), '{short}');
              },
              formatTitle: function(monthName, fullYear) {
                return monthName + ' ' + fullYear;
              },
              parseDate: function(dateString) {
                const date = Sugar.Date.create(dateString);
                return {
                  day: date.getDate(),
                  month: date.getMonth(),
                  year: date.getFullYear()
                };
              }
            };
          });
        &lt;/script>
      </template>
    </vaadin-demo-snippet>
`;
  }

  static get is() {
    return 'date-picker-localization-demos';
  }
}
customElements.define(DatePickerLocalizationDemos.is, DatePickerLocalizationDemos);
