/*eslint-diable no-undef*/ 
//@ts-nocheck
sap.ui.define([
    "SR/sapui5/model/InvoicesFormatter",
    "sap/ui/model/resource/ResourceModel"
], 
/**
 *
 * @param { typeof  "sap.ui.model.ResourceModel } ResourceModel 
 */
function(InvoicesFormatter, ResourceModel) {
   
    QUnit.module("Qnvoices Status", {
        
        beforeEach: function () {
            this._oResourceModel = new ResourceModel({
                bundleUrl: sap.ui.require.toUrl("SR/sapui5") + "/i18n/i18n.properties"
            });
        },

        afterEach: function () {
            this._oResourceModel.destroy();  
        }
    });

    QUnit.test("Should return the Invoices Status", function(assert){
        let oModel = this.stub();
        oModel.withArgs("i18n").returns(this._oResourceModel);

        let oViewStup = {
            getModel  : oModel
        };

        let oControllerStup = {
            getView : this.stub().returns(oViewStup)
        };

        let fnIsolatedFormatter = InvoicesFormatter.invoiceStatus.bind(oControllerStup);

        //Assert
        assert.strictEqual(fnIsolatedFormatter("A"), "New", "The invoice for A is Correct");
        assert.strictEqual(fnIsolatedFormatter("B"), "In Progress", "The invoice for B is Correct");
        assert.strictEqual(fnIsolatedFormatter("C"), "Done", "The invoice for C is Correct");
          
    });
});