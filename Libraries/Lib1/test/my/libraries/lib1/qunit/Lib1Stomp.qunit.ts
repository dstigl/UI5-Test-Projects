import Lib1Stomp from "my/libraries/lib1/Lib1Stomp";

// module for basic checks
QUnit.module("Example Tests");

// example test
QUnit.test("Is Client defined?", function (assert) {
	const Client = new Lib1Stomp();
	assert.ok(Client != undefined, "ok");
});
