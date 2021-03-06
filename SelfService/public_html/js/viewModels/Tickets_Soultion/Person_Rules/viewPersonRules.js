define(['ojs/ojcore', 'knockout', 'jquery', 'knockout-postbox','appController', 'ojs/ojtrain', 'ojs/ojbutton', 'ojs/ojinputtext', 'ojs/ojselectcombobox', 'ojs/ojdatetimepicker', 'ojs/ojtimezonedata', 'ojs/ojinputnumber', 'ojs/ojpopup', 'ojs/ojknockout-validation'], function (oj, ko, $, postbox,app) {

    function ViewPersonRulesModel() {
        var self = this;
        self.isVisible=ko.observable(false);

        var rootViewModel = ko.dataFor(document.getElementById('globalBody'));
         self.formatDate = function (date) {
            month = '' + (date.getMonth() + 1), day = '' + date.getDate(), year = date.getFullYear();

            if (month.length < 2)
                month = '0' + month;
            if (day.length < 2)
                day = '0' + day;

            return [year, month, day].join('-');
        }
        
    self.personRulesModel = {
           ID:ko.observable(),
           personNumber:ko.observable(),
           gradeName: ko.observable(),
            startDate : ko.observable(),
           endDate : ko.observable( ),
            ticketClass: ko.observable(),
           maxAccrualCarryOver : ko.observable(),
           alloweEncashmentPayment :ko.observable(), 
           // alloweEncashmentPayment :ko.observableArray(["true"]),
           PrrcentageOFTicketprice : ko.observable(),
            PrrcentageOFAdultTicketprice : ko.observable(),
            PrrcentageOFChildTicketprice : ko.observable(),
            PrrcentageOFInfantTicketprice : ko.observable(),
           maxAge : ko.observable(12),
           AllowNationals:ko.observable(100),
           
           NumberOFSpouseAllowed: ko.observable(""),
            AllowOtherRoutWhenApply: ko.observable(""),
             personeNumber:"100002"
           
       
          
        };
            
              ko.postbox.subscribe("viewElementObj", function (newValue) {
             
//                            self.personRulesModel.id(newValue.id);
                             self.personRulesModel.personNumber(newValue.person_number);
                            self.personRulesModel.startDate(newValue.start_date);
                           self.personRulesModel.endDate(newValue.end_date);
                            self.personRulesModel.ticketClass(newValue.ticket_class);
                            self.personRulesModel.maxAccrualCarryOver(newValue.max_accrual_carry_over);
                           self.personRulesModel.alloweEncashmentPayment(newValue.allow_encashment_payment);
                            self.personRulesModel.PrrcentageOFTicketprice(newValue.percentage_of_ticket_price);
                            self.personRulesModel.PrrcentageOFAdultTicketprice(newValue.percentage_of_adult_ticket_pri);
                            self.personRulesModel.PrrcentageOFChildTicketprice(newValue.percentage_of_child_ticket_pri);
                            self.personRulesModel.PrrcentageOFInfantTicketprice(newValue.percentage_of_infant_ticket_pr);
                            self.personRulesModel.maxAge(newValue.max_age_of_child);
                            self.personRulesModel.AllowNationals(newValue.allow_nationals);
                            self.personRulesModel.NumberOFSpouseAllowed(newValue.number_of_spouse_allowed);
                            self.personRulesModel.AllowOtherRoutWhenApply(newValue.allow_other_rout_when_apply);
                            self.personRulesModel.ID(newValue.id);

        });
       
            
      self.dateConverter = ko.observable(oj.Validation.converterFactory(oj.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter( {
            pattern : 'dd/MM/yyyy'
        }));        
     

        self.handleActivated = function (info) {
           
            }
        self.handleAttached = function (info) {
        }

       self.backAction = function () {
            oj.Router.rootInstance.go('summaryPersonRules');
        }
//language support =========================
            self.ok = ko.observable();
            self.back= ko.observable();
            self.startdate=ko.observable();
            self.enddate=ko.observable();   
            self.maxAccrualCarryOver=ko.observable();  
            self.allowEncashmentPayment=ko.observable();  
            self.percentageOfTicketPrice=ko.observable();  
            self.percentageOfAdultTicketPricet=ko.observable();  
            self.percentageOfChildTicketPrice=ko.observable();  
            self.percentageOfInfantTicketPrice=ko.observable();  
            self.maxAgeOfChild=ko.observable();  
            self.allowNationals=ko.observable();  
            self.numberOfSpouseAllowed=ko.observable();
            self.allowOtherRoutWhenApp=ko.observable();             
            self.personName= ko.observable();
            self.ticketClass= ko.observable();
            var getTranslation = oj.Translations.getTranslatedString;	
        self.refreshView = ko.computed(function() {
            if (app.refreshViewForLanguage()) {
				initTranslations();
            }
        });         
        function initTranslations() {
               self.back(getTranslation("others.back"));
               self.enddate(getTranslation("labels.enddate"));
               self.startdate(getTranslation("labels.startdate"));
               self.maxAccrualCarryOver(getTranslation("generalSetup.maxAccrualCarryOvert")); 
               self.allowEncashmentPayment(getTranslation("generalSetup.allowEncashmentPayment")); 
               self.percentageOfTicketPrice(getTranslation("generalSetup.percentageOfTicketPrice")); 
               self.percentageOfAdultTicketPricet(getTranslation("generalSetup.percentageOfAdultTicketPricet")); 
               self.percentageOfChildTicketPrice(getTranslation("generalSetup.percentageOfChildTicketPricet")); 
               self.percentageOfInfantTicketPrice(getTranslation("generalSetup.percentageOfInfantTicketPricet")); 
               self.maxAgeOfChild(getTranslation("generalSetup.maxAgeOfChild")); 
               self.allowNationals(getTranslation("generalSetup.allowNationals")); 
               self.numberOfSpouseAllowed(getTranslation("generalSetup.numberOfSpouseAllowed")); 
               self.allowOtherRoutWhenApp(getTranslation("generalSetup.allowOtherRoutWhenApp"));               
               self.personName(getTranslation("common.name")); 
               self.ticketClass(getTranslation("gradeRules.ticketClass"));           
      }
    }

    return ViewPersonRulesModel;
});