define(['ojs/ojcore', 'knockout', 'jquery', 'appController', 'ojs/ojtrain', 'config/services', 'util/commonhelper', 'knockout-mapping', 'ojs/ojmodel', 'ojs/ojknockout', 'ojs/ojknockout-model', 'ojs/ojbutton', 'ojs/ojinputtext', 'ojs/ojselectcombobox', 'ojs/ojdatetimepicker', 'ojs/ojtimezonedata', 'ojs/ojinputnumber', 'ojs/ojpopup', 'ojs/ojknockout-validation', 'ojs/ojfilmstrip', 'ojs/ojpagingcontrol', 'ojs/ojcheckboxset', 'ojs/ojradioset', 'ojs/ojlabel'], function (oj, ko, $, app, ojtrain, services, commonhelper, km) {

    function homeViewModel() {

        var self = this;

        self.agreement = ko.observableArray();
        self.currentColor = ko.observable("red");
        var rootViewModel = ko.dataFor(document.getElementById('globalBody'));
        var getTranslation = oj.Translations.getTranslatedString;
        self.nam = ko.observable();
        self.employeeGrievance = ko.observable();
        self.childrenEductionExpense = ko.observable();
        self.businessTrip = ko.observable();
        self.rewardRequest = ko.observable();
        self.identificationLetter = ko.observable();
        self.TicketRequest = ko.observable();
        self.TicketRequestRefund= ko.observable();
        self.carRequest = ko.observable();
        self.annualLeave = ko.observable();
        self.medicalInsurance = ko.observable();
        self.businessTripDriver = ko.observable();
        self.advanceHousing = ko.observable();
        self.newFamilyVisa = ko.observable();
        self.changeHousingType = ko.observable();
        self.bankAccount= ko.observable();
        self.returnAfterLeave= ko.observable();
        self.cards =  ko.observable();
        self.generalSetup =  ko.observable();
        self.gradeRules =  ko.observable();
        self.personRules =  ko.observable();
        


        this.error = function () {
            app.hasErrorOccured(true);
            app.router.go("error");
        };

       

        self.refreshView = ko.computed(function () {
            if (app.refreshViewForLanguage()) {
                app.showPreloader();
                initTranslations();
                app.hidePreloader();
            }
        });
        this.icons = ko.observableArray([]);

        this.computeIconsArray = ko.computed(function () {
        if(rootViewModel.personDetails()){

                self.icons([
                            {
                                label : 'a', value : 'demo-icon-circle-b', router : 'summaryGeneralSetup', iconType : '  fa fa-plane', text : self.generalSetup(), visible : true
                            },
                            {
                                label : 'b', value : 'demo-icon-circle-b', router : 'summaryGradeRules', iconType : '  fa fa-plane', text : self.gradeRules(), visible : true
                            },
                            {
                                label : 'c', value : 'demo-icon-circle-b', router : 'summaryPersonRules', iconType : '  fa fa-plane', text : self.personRules(), visible : true
                            }
                        ]);
                 
 
            }
        });

        self.pagingModel = null;

        this.iconNavigation = function (router) {
            oj.Router.rootInstance.go(router);
            return true
        }

        getPagingModel = function () {
            if (!self.pagingModel) {
                var filmStrip = $("#filmStrip");
                var pagingModel = filmStrip.ojFilmStrip("getPagingModel");
                self.pagingModel = pagingModel;
            }
            return self.pagingModel;
        };
        self.handleAttached = function (info) {
            initTranslations();
        };

        function initTranslations() {
            // function to add translations for the home page module
            self.nam(getTranslation("common.name"));
            self.employeeGrievance(getTranslation("pages.employeeGrievance"));
            self.childrenEductionExpense(getTranslation("pages.childrenEductionExpense"));
            self.rewardRequest(getTranslation("pages.rewardRequest"));
            self.businessTrip(getTranslation("pages.businessTrip"));
            
            self.businessTripDriver(getTranslation("pages.businessTripDriverRequest"));
            self.advanceHousing(getTranslation("pages.advancedHousing"));
            self.newFamilyVisa(getTranslation("pages.newFamilyVisaRefund"));
            self.TicketRequest(getTranslation("pages.ticketsRequest"));
            self.carRequest(getTranslation("labels.employeeCarRequest"));
            self.annualLeave(getTranslation("labels.AnnualLeave"));
            self.medicalInsurance(getTranslation("employeeMedicalInsurance.label"));
            self.TicketRequestRefund(getTranslation("pages.TicketRequestRefund"));
            self.changeHousingType(getTranslation("pages.changeHousingType"));
            self.bankAccount(getTranslation("pages.bankTransferRequest"));
            self.returnAfterLeave(getTranslation("pages.returnAfterLeave"));//added
            self.cards(getTranslation("pages.Cards"));
            
            self.generalSetup(getTranslation("pages.generalSetup"));
            self.gradeRules(getTranslation("pages.gradeRules"));
            self.personRules(getTranslation("pages.personRules"));
        }

        return true;
    }

    return new homeViewModel();
});
