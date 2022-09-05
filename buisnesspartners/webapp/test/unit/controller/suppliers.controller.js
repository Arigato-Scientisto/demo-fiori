/*global QUnit*/

sap.ui.define([
	"ns/buisnesspartners/controller/suppliers.controller"
], function (Controller) {
	"use strict";

	QUnit.module("suppliers Controller");

	QUnit.test("I should test the suppliers controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
