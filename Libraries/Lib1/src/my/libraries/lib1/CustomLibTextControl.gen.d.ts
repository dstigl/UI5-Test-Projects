import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";
import { $ControlSettings } from "sap/ui/core/Control";

declare module "./CustomLibTextControl" {

    /**
     * Interface defining the settings object used in constructor calls
     */
    interface $CustomLibTextControlSettings extends $ControlSettings {
        text?: string | PropertyBindingInfo;
    }

    export default interface CustomLibTextControl {

        // property: text
        getText(): string;
        setText(text: string): this;
    }
}
