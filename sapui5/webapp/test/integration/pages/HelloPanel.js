sap.ui.define([
     "sap/ui/test/Opa5",
     "sap/ui/test/actions/Press"
],
/**
 * @Param {typeof sap.ui.test.Opa5 } Opa5
 * @Param {typeof sap.ui.test.actions.Press } Press
 * 
 */
function(Opa5, Press ) {
    'use strict';
    Opa5.createPageObjects({
        onTheAppPage: { 
            actions: {
                iSayHelloDialogButton: function () {
                   return this.waitFor({
                        id: "_IDGenButton2",
                        viewName: "SR.sapui5.view.HelloPanel",
                        actions: new Press(),
                        errorMessage: "Did not find the Say 'say Hello Dialog Button'on the helloPanel view"
                   }); 
                }
            },
            assertions:{
                iSeeTheHelloDialog: function() {
                    return this.waitFor({
                       controlType: "sap.m.Dialog",
                       success: function () {
                            Opa5.assert.ok(true, "The dialog was opend")
                       },
                       errorMessage: "Did not find the dialog control"
                       
                    });

                }

            }
        }

    });

    
});