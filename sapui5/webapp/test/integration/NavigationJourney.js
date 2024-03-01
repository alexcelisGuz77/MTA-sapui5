//@ts-nocheck
sap.ui.define([
	"SR/sapui5/localService/mockserver",
	"sap/ui/test/opaQunit",
	"./pages/HelloPanel"
], 

/**
 * @param {typeof sap.ui.test.opaQunit } opaQunit 
 */

function (mockserver, opaTest) {
	"use strict";
	QUnit.module("Navigation");

	opaTest("Should open the Hello Dialog", function(Given, when, Then){
		//initialize the mockserver		
		mockserver.init();

		//Arrangements
        Given.iStartMyUIComponent({
			componentConfig: {
				name: "SR.sapui5"
			}
		});	
		
		//Actions
			when.onTheAppPage.iSayHelloDialogButton();

		//Assertions
			Then.onTheAppPage.iSeeTheHelloDialog();

		//Cleanup
			Then.iTeardownMyApp();
	});

	
});
