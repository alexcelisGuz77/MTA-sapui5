sap.ui.define(
    [
        "sap/ui/core/mvc/Controller"
    ],
    function(BaseController) {
      "use strict";
  
      return BaseController.extend("SR.sapui5.controller.App", {
        onInit() {
          this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
        },
        
        onOpenDialogHeader: function() {
          this.getOwnerComponent().openHelloDialog();
        }
      });
    }
  );
  