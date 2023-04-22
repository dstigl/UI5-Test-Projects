import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";
import { $CustomLibTextControlSettings } from "my/libraries/lib1/CustomLibTextControl";

declare module "./CustomProjectTextControl" {

    /**
     * Interface defining the settings object used in constructor calls
     */
    interface $CustomProjectTextControlSettings extends $CustomLibTextControlSettings {
        anotherText?: string | PropertyBindingInfo;
    }

    export default interface CustomProjectTextControl {

        // property: anotherText
        getAnotherText(): string;
        setAnotherText(anotherText: string): this;
    }
}
