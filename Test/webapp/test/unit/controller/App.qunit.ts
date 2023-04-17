import AppController from "my/projects/test/controller/App.controller";

QUnit.module("Sample App controller test");

QUnit.test("The AppController class has a onNavBack method", function (assert) {
    // as a very basic test example just check the presence of the "sayHello" method
    assert.strictEqual(typeof AppController.prototype.onNavBack, "function");
});
