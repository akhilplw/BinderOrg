sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
    function (Controller) {
        "use strict";

        return Controller.extend("project1.controller.TestView", {
            onInit: function () {
            },

            onAfterRendering: function () {
                // const oView = this.getView();
                // const oMessageStrip = oView.byId("idMessageStrip");
                // const i18nModel = oView.getModel("i18n");
                // const oResourBundle = i18nModel.getResourceBundle();

                // oMessageStrip.setText(oResourBundle.getText("messageStripText"));
            }
        });
    });
