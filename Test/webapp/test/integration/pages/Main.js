sap.ui.define(["sap/ui/test/Opa5", "sap/ui/test/actions/Press"], function (Opa5, Press) {
	"use strict";

	const viewName = "my.projects.test.view.Main";

	Opa5.createPageObjects({
		onTheMainPage: {
			actions: {
				iPressTheSayHelloButton: function () {
					return this.waitFor({
						id: "helloButton",
						viewName,
						actions: new Press(),
						errorMessage: "Did not find the 'Say Hello With Dialog' button on the App view",
					});
				},
			},

			assertions: {
				iShouldSeeTheGridList: function () {
					return this.waitFor({
						id: "statesList",
						viewName,
						success: function () {
							// we set the view busy, so we need to query the parent of the app
							Opa5.assert.ok(true, "The GridList is visible");
						},
						errorMessage: "Did not find the GridList control",
					});
				},
			},
		},
	});
});
