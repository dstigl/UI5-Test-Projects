import CustomLibTextControl from "my/libraries/lib1/CustomLibTextControl";

import RenderManager from "sap/ui/core/RenderManager";

/**
 * @name my.projects.test.control.CustomProjectTextControl
 */
export default class CustomProjectTextControl extends CustomLibTextControl {
  static readonly metadata: object = {
    properties: {
      anotherText: { type: "string", defaultValue: null },
    },
  };

  renderer(oRm: RenderManager, oControl: CustomProjectTextControl) {
    oRm.openStart("div");
    oRm.openEnd();
    oRm.renderControl(
      new Text({ text: oControl.getText() + " " + oControl.getAnotherText() })
    );
    oRm.close("div");
  }
}
