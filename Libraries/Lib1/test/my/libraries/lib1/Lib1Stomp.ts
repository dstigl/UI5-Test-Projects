import Lib1Stomp from "my/libraries/lib1/Lib1Stomp";
import CustomLibTextControl from "my/libraries/lib1/CustomLibTextControl";

const Client = new Lib1Stomp();
console.log(Client)

new CustomLibTextControl({
    text: "Hello World"
}).placeAt("content");
