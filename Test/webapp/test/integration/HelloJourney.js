sap.ui.define(["sap/ui/test/opaQunit", "./pages/Main"], function () {
	QUnit.module("Hello");

	opaTest("Should open the Hello dialog", function (Given, When, Then) {
		// Arrangements
		Given.iStartMyUIComponent({
			componentConfig: {
				name: "my.projects.test",
			},
		});

		// Actions
		//When.onTheMainPage.iPressTheSayHelloButton();

		// Assertions
		Then.onTheMainPage.iShouldSeeTheGridList();

		// Cleanup
		Then.iTeardownMyApp();
	});

});
