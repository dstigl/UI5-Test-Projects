sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require(["my/projects/test/test/integration/HelloJourney"], function () {
		QUnit.start();
	});
});
