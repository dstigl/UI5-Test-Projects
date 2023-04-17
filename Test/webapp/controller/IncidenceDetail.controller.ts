import JSONModel from "sap/ui/model/json/JSONModel";
import BaseController from "./BaseController";
import Event from "sap/ui/base/Event";
import Lib1Stomp from "my/libraries/lib1/Lib1Stomp";

interface EventWithIDArgument {
  getParameter(name: "arguments"): { id: string };
}

/**
 * @name my.projects.test.controller.IncidenceDetail
 */
export default class IncidenceDetail extends BaseController {
  onInit() {
    const stomp = new Lib1Stomp();
    stomp.client;
    const model = new JSONModel(
      "https://api.corona-zahlen.org/states/history/incidence/100"
    );
    this.setModel(model, "incidenceHistory");

    this.getRouter()
      .getRoute("IncidenceDetailRoute")
      .attachMatched(this.onRouteMatched.bind(this));
  }

  onRouteMatched(event: Event & EventWithIDArgument) {
    this.getView().bindElement({
      path: "/data/" + event.getParameter("arguments").id,
      model: "incidenceHistory",
    });
  }
}
