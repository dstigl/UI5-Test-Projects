export default {
	name: "QUnit TestSuite for my.libraries.lib1",
	defaults: {
		bootCore: true,
		ui5: {
			libs: "sap.ui.core,my.libraries.lib1",
			theme: "sap_fiori_3",
			noConflict: true,
			preload: "auto",
		},
		qunit: {
			version: 2,
			reorder: false,
		},
		sinon: {
			version: 4,
			qunitBridge: true,
			useFakeTimers: false,
		},
		module: "./{name}.qunit",
	},
	tests: {
		// test file for the Lib1Stomp control
		Lib1Stomp: {
			title: "QUnit Test for Lib1Stomp",
			_alternativeTitle: "QUnit tests: my.libraries.lib1.Lib1Stomp",
		},
	},
};
