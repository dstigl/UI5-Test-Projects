import Text from 'sap/m/Text';
import Control from 'sap/ui/core/Control';
import RenderManager from 'sap/ui/core/RenderManager';

/**
 * @namespace my.libraries.lib1
 */
export default class CustomLibTextControl extends Control {
  constructor(idOrSettings?: string | $CustomLibTextControlSettings);
  constructor(id?: string, settings?: $CustomLibTextControlSettings);
  constructor(id?: string, settings?: $CustomLibTextControlSettings) {
    super(id, settings);
  }

  static readonly metadata: object = {
    properties: {
      text: { type: 'string', defaultValue: null },
    },
  };

  renderer(oRm: RenderManager, oControl: CustomLibTextControl) {
    oRm.openStart('div');
    oRm.openEnd();
    oRm.renderControl(new Text({ text: oControl.getText() }));
    oRm.close('div');
  }
}
