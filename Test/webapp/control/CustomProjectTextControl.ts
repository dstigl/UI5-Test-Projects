import RenderManager from "sap/ui/core/RenderManager";
import Text from "sap/m/Text";

import CustomLibTextControl from "my/libraries/lib1/CustomLibTextControl";

/**
 * @name my.projects.test.control.CustomProjectTextControl
 */
export default class CustomProjectTextControl extends CustomLibTextControl {
  static readonly metadata: object = {
    properties: {
      anotherText: { type: "string", defaultValue: null },
    },
  };

  // The following three lines were generated and should remain as-is to make TypeScript aware of the constructor signatures
  constructor(idOrSettings?: string | $CustomProjectTextControlSettings);
  constructor(id?: string, settings?: $CustomProjectTextControlSettings);
  constructor(id?: string, settings?: $CustomProjectTextControlSettings) { super(id, settings); }

  renderer(oRm: RenderManager, oControl: CustomProjectTextControl) {
    oRm.openStart("div");
    oRm.openEnd();
    oRm.renderControl(
      new Text({ text: `${oControl.getText()} ${oControl.getAnotherText()}`})
    );
    oRm.close("div");
  }
}
