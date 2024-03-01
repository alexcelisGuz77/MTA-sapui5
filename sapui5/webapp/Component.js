/**
 * eslint-disable @sap/ui5-jsdocs/no-jsdoc
 */

sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/Device",
    "SR/sapui5/model/models",
    "sap/ui/model/resource/ResourceModel",
    "./controller/HelloDialog",
],

/**
 * 
 * @param {typeof sap.ui.core.UIComponent } UIComponent 
 * @param {typeof sap.ui.Device} Device 
 * @param {typeof SR.sapui5.model.models} models 
 * @param {typeof sap.ui.model.resource.ResourceModel} ResourceModel 
 * @param {typeof ..controller.HelloDialog} HelloDialog 
 * @returns 
 */
    function (UIComponent, Device, models, ResourceModel, HelloDialog) {
        "use strict";

        return UIComponent.extend("SR.sapui5.Component", {
            metadata: {
                manifest: "json"
            },

            init: function () {
                // call the base component's init function
                UIComponent.prototype.init.apply(this, arguments);

                // enable routing
                this.getRouter().initialize();

                // set the device model
                this.setModel(models.createDeviceModel(), "device");

                //Set data model on the view 
                this.setModel(models.createRecipient());

                //set i18 model on the view 
                // var i18nModel = new ResourceModel({ bundleName: "SR.sapui5.i18n.i18n" });
                // this.setModel(i18nModel, "i18n");

                this._helloDialog = new HelloDialog(this.getRootControl());

                // create the views based on the url/hash
                this.getRouter().initialize();

            },

            exit : function(){
                this._helloDialog.destroy();
                delete this._helloDialog;
            },
    
            openHelloDialog: function (){
               
                this._helloDialog.open();
    
            },
            
            getContentDensityClass: function(){
               if(!Device.support.touch){
                this._sContentDensityClass = "sapUiSizeCompact";
               }else{
                this._sContentDensityClass = "sapUiSizeCozy";
               }
               return this._sContentDensityClass;     
            }
        });
    }
);