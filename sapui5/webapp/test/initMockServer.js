//@ts-nocheck
sap.ui.define([
    "../localService/mockserver", 
], 
/**
 * @param { typeof sap.m.MessageBox } MessageBox
 */

function(mockserver, MessageBox  ) {
    'use strict';

    var aMockserver = [];
    console.log("InitMockServer Trabaja");
    //initial the mock server 
    aMockserver.push(mockserver.init());
    sap.ui.require(["sap/ui/core/ComponentSupport"]);

    
   /* Promise.all(aMockserver).catch( function(oError){
        MessageBox.console.error(oError.message);
    }).finally(function () {
        sap.ui.require(["module:sap/ui/core/ComponentSupport"]);
    });*/
    
});
