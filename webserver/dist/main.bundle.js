webpackJsonp([0,4],{

/***/ 1158:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 1158;


/***/ },

/***/ 1159:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(534);


/***/ },

/***/ 261:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_modal__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_modal_plugins_bootstrap__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_firebase_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(56);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AddUserModalComponent; });
/* unused harmony export CustomModalContext */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddUserModalComponent = (function () {
    function AddUserModalComponent(dialog, firebaseSerice, modal, router) {
        this.dialog = dialog;
        this.firebaseSerice = firebaseSerice;
        this.modal = modal;
        this.router = router;
        this.newMember = { name: "", email: "", id: "", groups: [] };
        this.context = dialog.context;
        console.log(this.context);
        this.wrongAnswer = true;
        this.showCreate = false;
        this.createBtn = "Create Member";
        this.confirmationMessage = "";
    }
    AddUserModalComponent.prototype.trackByIndex = function (index, obj) {
        return index;
    };
    AddUserModalComponent.prototype.showCreateBtn = function () {
        this.showCreate = !this.showCreate;
        if (this.showCreate) {
            this.createBtn = "Close Member";
        }
        else {
            this.createBtn = "Create Member";
        }
        this.confirmationMessage = "";
    };
    AddUserModalComponent.prototype.onKeyUp = function (value) {
        console.log(this.newMember);
        this.dialog.close();
    };
    AddUserModalComponent.prototype.addMemberToGroup = function (member) {
        console.log('clicked');
        console.log(member);
        this.firebaseSerice.addExistingMemberToGroup(this.context.venueName, this.context.groupName, member);
    };
    AddUserModalComponent.prototype.createNewMember = function () {
        console.log('create new member: ' + this.newMember.name + " " + this.newMember.email);
        this.firebaseSerice.createAndAddMember(this.context.venueName, this.context.groupName, this.newMember);
    };
    AddUserModalComponent.prototype.submit = function () {
        this.createNewMember();
        this.showCreateBtn(); // To close the creation form
        this.confirmationMessage = this.newMember.name + " successfully added to " + this.context.groupName;
        this.newMember = { name: "", email: "", id: "", groups: [] };
    };
    AddUserModalComponent.prototype.beforeDismiss = function () {
        return true;
    };
    AddUserModalComponent.prototype.beforeClose = function () {
        return this.wrongAnswer;
    };
    AddUserModalComponent.prototype.ngOnInit = function () { };
    AddUserModalComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-user-modal',
            template: __webpack_require__(885),
            styles: [__webpack_require__(869)],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_modal__["e" /* DialogRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angular2_modal__["e" /* DialogRef */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_firebase_service__["a" /* FirebaseService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_firebase_service__["a" /* FirebaseService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_modal_plugins_bootstrap__["a" /* Modal */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angular2_modal_plugins_bootstrap__["a" /* Modal */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === 'function' && _d) || Object])
    ], AddUserModalComponent);
    return AddUserModalComponent;
    var _a, _b, _c, _d;
}());
var CustomModalContext = (function (_super) {
    __extends(CustomModalContext, _super);
    function CustomModalContext() {
        _super.apply(this, arguments);
    }
    return CustomModalContext;
}(__WEBPACK_IMPORTED_MODULE_2_angular2_modal_plugins_bootstrap__["b" /* BSModalContext */]));
//# sourceMappingURL=C:/Users/psilv/PycharmProjects/AutonomousDoorman/webserver/src/add-user-modal.component.js.map

/***/ },

/***/ 262:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__firebase_service__ = __webpack_require__(42);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return StatisticsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var StatisticsService = (function () {
    function StatisticsService(db, firebaseService, router) {
        var _this = this;
        this.db = db;
        this.firebaseService = firebaseService;
        this.router = router;
        this._weekDataSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.weekData$ = this._weekDataSubject.asObservable();
        this.logs = [];
        this.findLogs().subscribe(function (logs) {
            _this.logs = logs;
        });
        this.venues = [];
        this.findVenues().subscribe(function (venues) { return _this.venues = venues; });
    }
    StatisticsService.prototype.findLogs = function () {
        var userInfo = this.firebaseService.getUserInfo();
        return this.db.list(userInfo.uid + '/Logs');
    };
    StatisticsService.prototype.findGroups = function () {
        var userInfo = this.firebaseService.getUserInfo();
        return this.db.list(userInfo.uid + '/Logs');
    };
    StatisticsService.prototype.findVenues = function () {
        var userInfo = this.firebaseService.getUserInfo();
        return this.db.list(userInfo.uid + '/Venues');
    };
    StatisticsService.prototype.calculateWeekly = function () {
        var count = {};
        var venuesKeys = [];
        // Setting count to 0 for each venues
        // console.log('length: '+this.venues.length);
        for (var i = 0; i < this.venues.length; i++) {
            count[this.venues[i].$key] = 0;
            venuesKeys.push(this.venues[i].$key);
        }
        for (var i = 0; i < this.logs.length; i++) {
            var allowedBy = this.logs[i].allowedBy;
            var venue = this.logs[i].venue;
            var year = this.logs[i].date.year;
            var month = this.logs[i].date.month;
            var day = this.logs[i].date.day;
            var time = this.logs[i].date.time;
            var date = new Date(year + "-" + month + "-" + day + ":" + time);
            var daymil = 24 * 60 * 60 * 1000;
            var timeDiff = Date.now() - date.getTime();
            if (timeDiff / daymil <= 7) {
                count[venue] += 1;
                // Check for entrance due to allowed by group membership
                if (allowedBy.split(' ')[0] == 'Group') {
                }
            }
        }
        var countArray = [];
        for (var i = 0; i < venuesKeys.length; i++) {
            countArray.push(count[venuesKeys[i]]);
        }
        return { labels: venuesKeys, values: countArray };
    };
    StatisticsService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2__["a" /* AngularFireDatabase */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angularfire2__["a" /* AngularFireDatabase */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__firebase_service__["a" /* FirebaseService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__firebase_service__["a" /* FirebaseService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === 'function' && _c) || Object])
    ], StatisticsService);
    return StatisticsService;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/psilv/PycharmProjects/AutonomousDoorman/webserver/src/statistics.service.js.map

/***/ },

/***/ 417:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_statistics_service__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__(501);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = (function () {
    function HomeComponent(firebaseService, statisticsService) {
        var _this = this;
        this.firebaseService = firebaseService;
        this.statisticsService = statisticsService;
        this.barChartData = [
            { data: [] },
        ];
        this.barChartLabels = [];
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true,
            scaleStepWidth: 1,
        };
        this.barChartType = 'bar';
        this.barChartLegend = false;
        this.firebaseService.findLogs().subscribe(function (logs) {
            _this.logs = logs;
            console.log(_this.logs);
            var timer = __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].timer(300);
            timer.subscribe(function (x) {
                var data = _this.statisticsService.calculateWeekly();
                console.log(data);
                _this.barChartData = [
                    { data: data.values },
                ];
                _this.barChartLabels = data.labels;
            });
        });
    }
    // events
    HomeComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    HomeComponent.prototype.ngOnInit = function () { };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(887),
            styles: [__webpack_require__(881)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_statistics_service__["a" /* StatisticsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_statistics_service__["a" /* StatisticsService */]) === 'function' && _b) || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/psilv/PycharmProjects/AutonomousDoorman/webserver/src/home.component.js.map

/***/ },

/***/ 418:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(56);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(firebaseService, router) {
        var _this = this;
        this.firebaseService = firebaseService;
        this.router = router;
        var body = document.getElementsByTagName('body')[0];
        body.className = ""; //remove the classes
        body.classList.add("login"); //add the class
        firebaseService.errorMessage$.subscribe(function (e) {
            _this.errorMessage = e;
            console.log(e);
        });
    }
    LoginComponent.prototype.register = function () {
        this.router.navigate(['register']);
    };
    LoginComponent.prototype.logout = function () {
        this.firebaseService.logout();
        this.errorMessage = "";
    };
    LoginComponent.prototype.forgotPasswprd = function () {
        // TODO: Implement forgot password page
        console.log('Forgot password');
    };
    LoginComponent.prototype.login = function () {
        if (this.loginUsername == "" || typeof this.loginUsername === "undefined") {
            console.log("Username needed");
            this.errorMessage = "Username required";
        }
        else {
            if (this.loginPassword == "" || typeof this.loginPassword === "undefined") {
                console.log("Password needed");
                this.errorMessage = "Password required";
            }
            else {
                this.errorMessage = "";
                this.firebaseService.login(this.loginUsername, this.loginPassword);
            }
        }
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(893),
            styles: [__webpack_require__(882)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _b) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/psilv/PycharmProjects/AutonomousDoorman/webserver/src/login.component.js.map

/***/ },

/***/ 419:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__ = __webpack_require__(42);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return NewVenueComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NewVenueComponent = (function () {
    function NewVenueComponent(firebaseService) {
        var _this = this;
        this.firebaseService = firebaseService;
        this.venue = { name: "", error: "" };
        this.groups = [{ name: "", error: "", start: "08:00", end: "18:00" }];
        this.firebaseService.findVenues()
            .subscribe(function (venues) {
            console.log(_this.venues);
            _this.venues = [];
            for (var i = 0; i < venues.length; i++) {
                _this.venues.push(venues[i].$key);
            }
        });
    }
    NewVenueComponent.prototype.trackByIndex = function (index, obj) {
        return index;
    };
    NewVenueComponent.prototype.addGroup = function () {
        this.groups.push({ name: "", error: "", start: "08:00", end: "18:00" });
    };
    NewVenueComponent.prototype.deleteGroup = function (index) {
        if (this.groups.length > 1) {
            this.groups.splice(index, 1);
        }
        else {
            this.groups[0].error = "One group must be created";
        }
    };
    NewVenueComponent.prototype.submit = function () {
        var fail = false;
        if (this.venue.name == "") {
            fail = true;
            this.venue.error = "Venue name required";
        }
        else {
            this.venue.error = "";
        }
        console.log('venues length: ' + this.venues.length);
        for (var i = 0; i < this.venues.length; i++) {
            console.log(this.venues[i]);
            if (this.venue.name == this.venues[i]) {
                fail = true;
                this.venue.error = "Name already in use";
            }
        }
        for (var i = 0; i < this.groups.length; i++) {
            if (this.groups[i].name == "") {
                fail = true;
                this.groups[i].error = "Group name required";
            }
            else {
                this.groups[i].error = "";
            }
        }
        if (!fail) {
            this.firebaseService.createvenue(this.venue.name, this.groups);
            console.log('New venue created');
            alert('Group created!');
            this.reset();
        }
        else {
            console.log('Error creating Venue');
        }
    };
    NewVenueComponent.prototype.reset = function () {
        this.venue.name = "";
        this.venue.error = "";
        for (var i = 0; i < this.groups.length; i++) {
            this.groups[i].name = "";
            this.groups[i].error = "";
        }
    };
    NewVenueComponent.prototype.ngOnInit = function () {
    };
    NewVenueComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-new-venue',
            template: __webpack_require__(894),
            styles: [__webpack_require__(876)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */]) === 'function' && _a) || Object])
    ], NewVenueComponent);
    return NewVenueComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/psilv/PycharmProjects/AutonomousDoorman/webserver/src/new-venue.component.js.map

/***/ },

/***/ 42:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(56);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return FirebaseService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FirebaseService = (function () {
    function FirebaseService(db, auth, router) {
        var _this = this;
        this.db = db;
        this.auth = auth;
        this.router = router;
        this._errorMessageSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.errorMessage$ = this._errorMessageSubject.asObservable();
        this._isLoggedSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.isLogged$ = this._isLoggedSubject.asObservable();
        this.userInfo = {
            displayName: "",
            email: "",
            photoURL: "",
            uid: "",
        };
        this.members = {};
        this.groups = {};
        auth.subscribe(function (user) {
            _this.user = user;
            _this._isLoggedSubject.next(user != null);
            if (user != null) {
                _this.userInfo.displayName = _this.user.auth.displayName;
                _this.userInfo.email = _this.user.auth.email;
                _this.userInfo.uid = _this.user.auth.uid;
                _this.userInfo.photoURL = _this.user.auth.photoURL;
            }
            _this.findVenues().subscribe(function (venues) {
                _this.venues = venues;
                for (var i = 0; i < venues.length; i++) {
                    console.log(venues);
                    _this.members[venues[i].$key] = venues[i]['Members'];
                    _this.groups[venues[i].$key] = venues[i]['Groups'];
                    console.log(_this.members[venues[i].$key]);
                }
                console.log(_this.members);
                console.log(_this.groups);
            });
        });
    }
    FirebaseService.prototype.getAuthenticated = function () { return this.auth; };
    FirebaseService.prototype.getUserInfo = function () {
        return this.userInfo;
    };
    FirebaseService.prototype.login = function (username, password) {
        var _this = this;
        var error;
        this.auth.login({ email: username, password: password }).then(function (success) {
            console.log('Logged in');
            _this.user = success;
            _this.router.navigate(['/']);
        }).catch(function (err) {
            console.log(err.message);
            if (err.message == "There is no user record corresponding to this identifier. The user may have been deleted.") {
                _this._errorMessageSubject.next("Wrong username/password");
            }
            else {
                _this._errorMessageSubject.next(err.message);
            }
        });
        return error;
    };
    FirebaseService.prototype.logout = function () {
        console.log('Logged out');
        this.auth.logout();
    };
    FirebaseService.prototype.isLoggedFunc = function () {
        console.log(this.user);
        return (this.user != null);
    };
    FirebaseService.prototype.register = function (username, email, password) {
        var _this = this;
        this.auth.createUser({ email: email, password: password })
            .catch(function (err) {
            console.log(err.message);
            if (err.message == "There is no user record corresponding to this identifier. The user may have been deleted.") {
                _this._errorMessageSubject.next("Wrong username/password");
            }
            else {
                _this._errorMessageSubject.next(err.message);
            }
        })
            .then(function () {
            _this.auth.login({ email: email, password: password })
                .then(function () {
                if (_this.user != null) {
                    _this.user.auth.updateProfile({ displayName: username, photoURL: null });
                    _this.logout();
                    var timer = __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].timer(1000);
                    timer.subscribe(function (x) {
                        _this.login(email, password);
                    });
                    var timer2 = __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].timer(2000);
                    timer2.subscribe(function (x) {
                        _this.router.navigate(['/']);
                    });
                }
            });
        });
    };
    FirebaseService.prototype.findVenues = function () {
        return this.db.list(this.userInfo.uid + '/Venues');
    };
    FirebaseService.prototype.findLogs = function () {
        return this.db.list(this.userInfo.uid + '/Logs');
    };
    FirebaseService.prototype.findMembers = function (venue) {
        return this.db.list(this.userInfo.uid + '/Venues/' + venue + '/Members');
    };
    FirebaseService.prototype.findGroups = function (venue) {
        return this.db.list(this.userInfo.uid + '/Venues/' + venue + '/Groups');
    };
    FirebaseService.prototype.createInitialMember = function (venue, groups, memberInfo) {
        var data = {
            Members: {},
        };
        data.Members[memberInfo.id] = {
            Groups: {},
            Data: {},
        };
        data.Members[memberInfo.id]['Data'] = {
            email: memberInfo.email,
            name: memberInfo.name,
        };
        for (var i = 0; i < groups.length; i++) {
            data.Members[memberInfo.id]['Groups'][i] = { id: groups[i].name };
        }
        this.db.object(this.userInfo.uid + '/Venues/' + venue).update(data);
    };
    FirebaseService.prototype.createAndAddMember = function (venue, group, memberInfo) {
        var data = {};
        memberInfo.id = this.members[venue].length;
        data[memberInfo.id] = {
            Data: {
                name: memberInfo.name,
                email: memberInfo.email,
            },
            Groups: {
                0: {
                    id: group,
                }
            }
        };
        console.log(venue);
        this.db.object(this.userInfo.uid + '/Venues/' + venue + '/Members/').update(data);
        data = {};
        data[this.groups[venue][group]['Members'].length] = { id: memberInfo.id };
        this.db.object(this.userInfo.uid + '/Venues/' + venue + '/Groups/' + group + '/Members/').update(data);
    };
    FirebaseService.prototype.addExistingMemberToGroup = function (venue, group, memberInfo) {
        var _this = this;
        this.findGroups(venue).subscribe(function (groups) {
            var data = {};
            for (var i = 0; i < groups.length; i++) {
                if (groups[i].$key == group) {
                    data[groups[i]['Members'].length] = { id: memberInfo.id };
                    _this.db.object(_this.userInfo.uid + '/Venues/' + venue + '/Groups/' + group + '/Members').update(data);
                    break;
                }
            }
        });
        this.findMembers(venue).subscribe(function (members) {
            var data = {};
            for (var i = 0; i < members.length; i++) {
                if (members[i].$key == memberInfo.id) {
                    data[members[i]['Groups'].length] = { id: group };
                    _this.db.object(_this.userInfo.uid + '/Venues/' + venue + '/Members/' + memberInfo.id + '/Groups').update(data);
                    break;
                }
            }
        });
    };
    FirebaseService.prototype.createvenue = function (venue, groups) {
        var data = {
            Groups: {},
        };
        for (var i = 0; i < groups.length; i++) {
            data.Groups[groups[i].name] = {
                Members: {
                    0: {
                        id: 1,
                    },
                },
                Time: {
                    end: groups[i].end,
                    start: groups[i].start,
                }
            };
        }
        this.db.object(this.userInfo.uid + '/Venues/' + venue).update(data);
        var memberInfo = {
            name: this.userInfo.displayName,
            email: this.userInfo.email,
            id: "1",
            groups: [],
        };
        this.createInitialMember(venue, groups, memberInfo);
    };
    FirebaseService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2__["a" /* AngularFireDatabase */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angularfire2__["a" /* AngularFireDatabase */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2__["b" /* AngularFireAuth */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angularfire2__["b" /* AngularFireAuth */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* Router */]) === 'function' && _c) || Object])
    ], FirebaseService);
    return FirebaseService;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/psilv/PycharmProjects/AutonomousDoorman/webserver/src/firebase.service.js.map

/***/ },

/***/ 420:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return NotFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(895),
            styles: [__webpack_require__(877)]
        }), 
        __metadata('design:paramtypes', [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());
//# sourceMappingURL=C:/Users/psilv/PycharmProjects/AutonomousDoorman/webserver/src/not-found.component.js.map

/***/ },

/***/ 421:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(56);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = (function () {
    function RegisterComponent(firebaseService, router) {
        var _this = this;
        this.firebaseService = firebaseService;
        this.router = router;
        firebaseService.errorMessage$.subscribe(function (e) {
            _this.errorMessage = e;
            console.log(e);
        });
    }
    RegisterComponent.prototype.createAccount = function () {
        if (this.username == "" || typeof this.username === "undefined") {
            this.errorMessage = "Username required";
        }
        else {
            if (this.email == "" || typeof this.email === "undefined") {
                this.errorMessage = "Email required";
            }
            else {
                if (this.password == "" || typeof this.password === "undefined") {
                    this.errorMessage = "Password required";
                }
                else {
                    if (this.passwordCheck == "" || typeof this.passwordCheck === "undefined") {
                        this.errorMessage = "Repeat password";
                    }
                    else {
                        if (this.password != this.passwordCheck) {
                            this.errorMessage = "Passwords do not match";
                        }
                        else {
                            this.firebaseService.register(this.username, this.email, this.password);
                        }
                    }
                }
            }
        }
    };
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(896),
            styles: [__webpack_require__(878)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _b) || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/psilv/PycharmProjects/AutonomousDoorman/webserver/src/register.component.js.map

/***/ },

/***/ 422:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_modal__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_modal_plugins_bootstrap__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_user_modal_add_user_modal_component__ = __webpack_require__(261);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return TestComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TestComponent = (function () {
    function TestComponent(modal) {
        this.modal = modal;
    }
    TestComponent.prototype.onClick = function () {
        this.modal.alert()
            .size('lg')
            .showClose(true)
            .title('A simple Alert style modal window')
            .body("\n            <h4>Alert is a classic (title/body/footer) 1 button modal window that \n            does not block.</h4>\n            <b>Configuration:</b>\n            <ul>\n                <li>Non blocking (click anywhere outside to dismiss)</li>\n                <li>Size large</li>\n                <li>Dismissed with default keyboard key (ESC)</li>\n                <li>Close wth button click</li>\n                <li>HTML content</li>\n            </ul>")
            .open();
    };
    TestComponent.prototype.openCustom = function () {
        return this.modal.open(__WEBPACK_IMPORTED_MODULE_3__add_user_modal_add_user_modal_component__["a" /* AddUserModalComponent */], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_angular2_modal__["n" /* overlayConfigFactory */])({ num1: 2, num2: 3 }, __WEBPACK_IMPORTED_MODULE_2_angular2_modal_plugins_bootstrap__["b" /* BSModalContext */]));
    };
    TestComponent.prototype.ngOnInit = function () { };
    TestComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-test',
            template: __webpack_require__(897),
            styles: [__webpack_require__(883)],
            providers: [__WEBPACK_IMPORTED_MODULE_2_angular2_modal_plugins_bootstrap__["a" /* Modal */]],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_modal_plugins_bootstrap__["a" /* Modal */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angular2_modal_plugins_bootstrap__["a" /* Modal */]) === 'function' && _a) || Object])
    ], TestComponent);
    return TestComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/psilv/PycharmProjects/AutonomousDoorman/webserver/src/test.component.js.map

/***/ },

/***/ 423:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_modal__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_modal_plugins_bootstrap__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_user_modal_add_user_modal_component__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_firebase_service__ = __webpack_require__(42);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return VenueDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var VenueDetailComponent = (function () {
    function VenueDetailComponent(firebaseService, route, modal) {
        var _this = this;
        this.firebaseService = firebaseService;
        this.route = route;
        this.modal = modal;
        this.createMember = [];
        this.newMember = { name: "", email: "", id: "", groups: [] };
        this.groups = [];
        this.groupMembers = {};
        this.route.params.subscribe(function (params) {
            _this.venueName = params['id'];
            _this.firebaseService.findMembers(_this.venueName).subscribe(function (members) {
                _this.members = {};
                _this.membersId = [];
                if (members.length > 0 && typeof members[0] != "undefined") {
                    for (var i = 0; i < members.length; i++) {
                        _this.members[members[i].$key] = {};
                        _this.members[members[i].$key]['groups'] = [];
                        _this.members[members[i].$key]['name'] = members[i]['Data'].name;
                        _this.members[members[i].$key]['email'] = members[i]['Data'].email;
                        _this.members[members[i].$key]['id'] = members[i].$key;
                        _this.membersId.push(members[i].$key);
                        for (var j = 0; j < members[i]['Groups'].length; j++) {
                            _this.members[members[i].$key]['groups'].push(members[i]['Groups'][j].id);
                        }
                    }
                    console.log(_this.members);
                }
            });
            _this.firebaseService.findGroups(_this.venueName).subscribe(function (groups) {
                // Get group's names
                _this.groups = [];
                for (var i = 0; i < groups.length; i++) {
                    _this.groups.push(groups[i].$key);
                }
                // Get group's groupMembers id
                for (var i = 0; i < groups.length; i++) {
                    _this.groupMembers[_this.groups[i]] = [];
                    for (var j = 0; j < groups[i]['Members'].length; j++) {
                        _this.groupMembers[_this.groups[i]].push(groups[i]['Members'][j]['id']);
                    }
                }
                console.log(_this.groupMembers);
            });
        });
    }
    VenueDetailComponent.prototype.trackByIndex = function (index, obj) {
        return index;
    };
    VenueDetailComponent.prototype.openCustom = function (index) {
        var possibleMembers;
        possibleMembers = [];
        for (var i = 0; i < this.membersId.length; i++) {
            var dontAdd = false;
            console.log(this.groups[index]);
            for (var j = 0; j < this.members[this.membersId[i]].groups.length; j++) {
                if (this.members[this.membersId[i]].groups[j] == this.groups[index]) {
                    dontAdd = true;
                }
            }
            if (!dontAdd) {
                console.log(this.members[this.membersId[i]]);
                var tmp = void 0;
                tmp = {
                    email: this.members[this.membersId[i]].email,
                    name: this.members[this.membersId[i]].name,
                    id: this.members[this.membersId[i]].id,
                    groups: [],
                };
                for (var j = 0; j < this.members[this.membersId[i]].groups.length; j++) {
                    tmp.groups.push(this.members[this.membersId[i]].groups[j]);
                }
                possibleMembers.push(tmp);
            }
        }
        console.log(possibleMembers);
        return this.modal.open(__WEBPACK_IMPORTED_MODULE_4__add_user_modal_add_user_modal_component__["a" /* AddUserModalComponent */], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_angular2_modal__["n" /* overlayConfigFactory */])({ venueName: this.venueName, groupName: this.groups[index],
            groupMembers: possibleMembers }, __WEBPACK_IMPORTED_MODULE_3_angular2_modal_plugins_bootstrap__["b" /* BSModalContext */]));
    };
    VenueDetailComponent.prototype.addMember = function (index) {
        console.log(this.groups[index]);
        if (typeof this.createMember[index] !== 'undefined') {
            this.createMember[index] = true;
        }
        else {
            this.createMember.push(true);
        }
    };
    VenueDetailComponent.prototype.deleteMember = function (index) {
        this.createMember[index] = false;
    };
    VenueDetailComponent.prototype.submit = function (index, memberInfo) {
        console.log('add member');
        console.log(memberInfo);
        console.log(this.venueName);
        console.log(this.groups[index]);
        this.firebaseService.addExistingMemberToGroup(this.venueName, this.groups[index], memberInfo);
    };
    VenueDetailComponent.prototype.reset = function () {
    };
    VenueDetailComponent.prototype.ngOnInit = function () {
    };
    VenueDetailComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-venue-detail',
            template: __webpack_require__(898),
            styles: [__webpack_require__(879)],
            providers: [__WEBPACK_IMPORTED_MODULE_3_angular2_modal_plugins_bootstrap__["a" /* Modal */]],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__services_firebase_service__["a" /* FirebaseService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__services_firebase_service__["a" /* FirebaseService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_modal_plugins_bootstrap__["a" /* Modal */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_modal_plugins_bootstrap__["a" /* Modal */]) === 'function' && _c) || Object])
    ], VenueDetailComponent);
    return VenueDetailComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/psilv/PycharmProjects/AutonomousDoorman/webserver/src/venue-detail.component.js.map

/***/ },

/***/ 424:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(501);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_firebase_service__ = __webpack_require__(42);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuard = (function () {
    function AuthGuard(fireService, router) {
        this.fireService = fireService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var _this = this;
        return this.fireService.getAuthenticated().map(function (user) {
            if (!user) {
                _this.router.navigate(['login']);
            }
            return user ? true : false;
        });
        // return true;
    };
    ;
    AuthGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__app_services_firebase_service__["a" /* FirebaseService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__app_services_firebase_service__["a" /* FirebaseService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */]) === 'function' && _b) || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/psilv/PycharmProjects/AutonomousDoorman/webserver/src/auth.guard.js.map

/***/ },

/***/ 533:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 533;


/***/ },

/***/ 534:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(663);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(623);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(661);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(653);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/psilv/PycharmProjects/AutonomousDoorman/webserver/src/main.js.map

/***/ },

/***/ 652:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(884),
            styles: [__webpack_require__(880)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=C:/Users/psilv/PycharmProjects/AutonomousDoorman/webserver/src/app.component.js.map

/***/ },

/***/ 653:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(619);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_modal__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_modal_plugins_bootstrap__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_bootstrap_ng2_bootstrap__ = __webpack_require__(863);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_bootstrap_ng2_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_bootstrap_ng2_bootstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_charts_ng2_charts__ = __webpack_require__(865);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_charts_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_charts_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(652);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__environments_firebase_config__ = __webpack_require__(662);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_routing__ = __webpack_require__(654);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_home_home_component__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_login_login_component__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_auth_guard__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_firebase_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_test_test_component__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__shared_nav_dropdown_directive__ = __webpack_require__(666);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__shared_sidebar_directive__ = __webpack_require__(667);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__shared_aside_directive__ = __webpack_require__(664);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__shared_breadcrumb_component__ = __webpack_require__(665);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_layout_header_header_component__ = __webpack_require__(659);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_layout_sidebar_sidebar_component__ = __webpack_require__(660);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_layout_footer_footer_component__ = __webpack_require__(658);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_layout_asidemenu_asidemenu_component__ = __webpack_require__(656);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_layout_breadcrumb_breadcrumb_component__ = __webpack_require__(657);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_register_register_component__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_venue_detail_venue_detail_component__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_not_found_not_found_component__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__services_statistics_service__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_new_venue_new_venue_component__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_add_user_modal_add_user_modal_component__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_create_user_modal_create_user_modal_component__ = __webpack_require__(655);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

































var myFirebaseAuthConfig = {
    provider: __WEBPACK_IMPORTED_MODULE_10_angularfire2__["c" /* AuthProviders */].Password,
    method: __WEBPACK_IMPORTED_MODULE_10_angularfire2__["d" /* AuthMethods */].Password,
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_17__shared_nav_dropdown_directive__["a" /* NAV_DROPDOWN_DIRECTIVES */],
                __WEBPACK_IMPORTED_MODULE_20__shared_breadcrumb_component__["a" /* BreadcrumbsComponent */],
                __WEBPACK_IMPORTED_MODULE_18__shared_sidebar_directive__["a" /* SIDEBAR_TOGGLE_DIRECTIVES */],
                __WEBPACK_IMPORTED_MODULE_19__shared_aside_directive__["a" /* AsideToggleDirective */],
                __WEBPACK_IMPORTED_MODULE_12__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_test_test_component__["a" /* TestComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_layout_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_layout_sidebar_sidebar_component__["a" /* SidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_layout_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_layout_asidemenu_asidemenu_component__["a" /* AsidemenuComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_layout_breadcrumb_breadcrumb_component__["a" /* BreadcrumbComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_27__components_venue_detail_venue_detail_component__["a" /* VenueDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_28__components_not_found_not_found_component__["a" /* NotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_30__components_new_venue_new_venue_component__["a" /* NewVenueComponent */],
                __WEBPACK_IMPORTED_MODULE_31__components_add_user_modal_add_user_modal_component__["a" /* AddUserModalComponent */],
                __WEBPACK_IMPORTED_MODULE_32__components_create_user_modal_create_user_modal_component__["a" /* CreateUserModalComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_10_angularfire2__["e" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_9__environments_firebase_config__["a" /* firebaseConfig */], myFirebaseAuthConfig),
                __WEBPACK_IMPORTED_MODULE_11__app_routing__["a" /* routing */],
                __WEBPACK_IMPORTED_MODULE_6_ng2_bootstrap_ng2_bootstrap__["Ng2BootstrapModule"],
                __WEBPACK_IMPORTED_MODULE_7_ng2_charts_ng2_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_4_angular2_modal__["m" /* ModalModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5_angular2_modal_plugins_bootstrap__["c" /* BootstrapModalModule */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_14__shared_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_15__services_firebase_service__["a" /* FirebaseService */], __WEBPACK_IMPORTED_MODULE_29__services_statistics_service__["a" /* StatisticsService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_31__components_add_user_modal_add_user_modal_component__["a" /* AddUserModalComponent */], __WEBPACK_IMPORTED_MODULE_32__components_create_user_modal_create_user_modal_component__["a" /* CreateUserModalComponent */]],
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Users/psilv/PycharmProjects/AutonomousDoorman/webserver/src/app.module.js.map

/***/ },

/***/ 654:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_home_home_component__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_login_login_component__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_test_test_component__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_auth_guard__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_register_register_component__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_venue_detail_venue_detail_component__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_not_found_not_found_component__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_new_venue_new_venue_component__ = __webpack_require__(419);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return routing; });









var appRoutes = [
    {
        path: '',
        redirectTo: '/dashboard', pathMatch: 'full',
    },
    {
        path: 'dashboard',
        canActivate: [__WEBPACK_IMPORTED_MODULE_4__shared_auth_guard__["a" /* AuthGuard */]],
        children: [
            {
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_1__components_home_home_component__["a" /* HomeComponent */]
            },
            {
                path: 'new-venue',
                component: __WEBPACK_IMPORTED_MODULE_8__components_new_venue_new_venue_component__["a" /* NewVenueComponent */],
            }
        ],
    },
    {
        canActivate: [__WEBPACK_IMPORTED_MODULE_4__shared_auth_guard__["a" /* AuthGuard */]],
        path: 'new-venue',
        component: __WEBPACK_IMPORTED_MODULE_6__components_venue_detail_venue_detail_component__["a" /* VenueDetailComponent */],
    },
    {
        canActivate: [__WEBPACK_IMPORTED_MODULE_4__shared_auth_guard__["a" /* AuthGuard */]],
        path: 'dashboard/venues',
        children: [
            {
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_6__components_venue_detail_venue_detail_component__["a" /* VenueDetailComponent */],
            },
            {
                path: ':id',
                component: __WEBPACK_IMPORTED_MODULE_6__components_venue_detail_venue_detail_component__["a" /* VenueDetailComponent */],
            }
        ]
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_2__components_login_login_component__["a" /* LoginComponent */]
    },
    {
        path: 'test',
        canActivate: [__WEBPACK_IMPORTED_MODULE_4__shared_auth_guard__["a" /* AuthGuard */]],
        component: __WEBPACK_IMPORTED_MODULE_3__components_test_test_component__["a" /* TestComponent */]
    },
    {
        path: 'register',
        component: __WEBPACK_IMPORTED_MODULE_5__components_register_register_component__["a" /* RegisterComponent */]
    },
    {
        path: '**',
        component: __WEBPACK_IMPORTED_MODULE_7__components_not_found_not_found_component__["a" /* NotFoundComponent */],
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(appRoutes);
//# sourceMappingURL=C:/Users/psilv/PycharmProjects/AutonomousDoorman/webserver/src/app.routing.js.map

/***/ },

/***/ 655:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CreateUserModalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CreateUserModalComponent = (function () {
    function CreateUserModalComponent() {
    }
    CreateUserModalComponent.prototype.ngOnInit = function () {
    };
    CreateUserModalComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-create-user-modal',
            template: __webpack_require__(886),
            styles: [__webpack_require__(870)]
        }), 
        __metadata('design:paramtypes', [])
    ], CreateUserModalComponent);
    return CreateUserModalComponent;
}());
//# sourceMappingURL=C:/Users/psilv/PycharmProjects/AutonomousDoorman/webserver/src/create-user-modal.component.js.map

/***/ },

/***/ 656:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AsidemenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AsidemenuComponent = (function () {
    function AsidemenuComponent() {
    }
    AsidemenuComponent.prototype.ngOnInit = function () {
    };
    AsidemenuComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-asidemenu',
            template: __webpack_require__(888),
            styles: [__webpack_require__(871)]
        }), 
        __metadata('design:paramtypes', [])
    ], AsidemenuComponent);
    return AsidemenuComponent;
}());
//# sourceMappingURL=C:/Users/psilv/PycharmProjects/AutonomousDoorman/webserver/src/asidemenu.component.js.map

/***/ },

/***/ 657:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return BreadcrumbComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BreadcrumbComponent = (function () {
    function BreadcrumbComponent() {
    }
    BreadcrumbComponent.prototype.ngOnInit = function () {
    };
    BreadcrumbComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-breadcrumb',
            template: __webpack_require__(889),
            styles: [__webpack_require__(872)]
        }), 
        __metadata('design:paramtypes', [])
    ], BreadcrumbComponent);
    return BreadcrumbComponent;
}());
//# sourceMappingURL=C:/Users/psilv/PycharmProjects/AutonomousDoorman/webserver/src/breadcrumb.component.js.map

/***/ },

/***/ 658:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(890),
            styles: [__webpack_require__(873)]
        }), 
        __metadata('design:paramtypes', [])
    ], FooterComponent);
    return FooterComponent;
}());
//# sourceMappingURL=C:/Users/psilv/PycharmProjects/AutonomousDoorman/webserver/src/footer.component.js.map

/***/ },

/***/ 659:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_statistics_service__ = __webpack_require__(262);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = (function () {
    function HeaderComponent(firebaseService, statisticsService) {
        this.firebaseService = firebaseService;
        this.statisticsService = statisticsService;
        this.status = { isopen: false };
        this.getUserInfo();
    }
    HeaderComponent.prototype.getUserInfo = function () {
        this.userInfo = this.firebaseService.getUserInfo();
    };
    HeaderComponent.prototype.toggleDropdown = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        this.status.isopen = !this.status.isopen;
    };
    HeaderComponent.prototype.test = function () {
        this.statisticsService.calculateWeekly();
    };
    HeaderComponent.prototype.logout = function () {
        console.log('logged out');
        this.firebaseService.logout();
    };
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(891),
            styles: [__webpack_require__(874)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_statistics_service__["a" /* StatisticsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_statistics_service__["a" /* StatisticsService */]) === 'function' && _b) || Object])
    ], HeaderComponent);
    return HeaderComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/psilv/PycharmProjects/AutonomousDoorman/webserver/src/header.component.js.map

/***/ },

/***/ 660:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__ = __webpack_require__(42);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SidebarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SidebarComponent = (function () {
    function SidebarComponent(firebaseService) {
        var _this = this;
        this.firebaseService = firebaseService;
        this.firebaseService.findVenues()
            .subscribe(function (venues) {
            _this.venues = venues;
            _this.venuesKeys = [];
            for (var i = 0; i < _this.venues.length; i++) {
                _this.venuesKeys.push(_this.venues[i].$key);
            }
        });
    }
    SidebarComponent.prototype.ngOnInit = function () { };
    SidebarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(892),
            styles: [__webpack_require__(875)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */]) === 'function' && _a) || Object])
    ], SidebarComponent);
    return SidebarComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/psilv/PycharmProjects/AutonomousDoorman/webserver/src/sidebar.component.js.map

/***/ },

/***/ 661:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/Users/psilv/PycharmProjects/AutonomousDoorman/webserver/src/environment.js.map

/***/ },

/***/ 662:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return firebaseConfig; });
var firebaseConfig = {
    apiKey: "AIzaSyDg2GwKDh4PLgeshGzRXm2L3m-4ON1O2u0",
    authDomain: "weather-5ed3c.firebaseapp.com",
    databaseURL: "https://weather-5ed3c.firebaseio.com",
    storageBucket: "weather-5ed3c.appspot.com",
};
//# sourceMappingURL=C:/Users/psilv/PycharmProjects/AutonomousDoorman/webserver/src/firebase.config.js.map

/***/ },

/***/ 663:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(702);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(695);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(691);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(697);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(696);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(694);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(693);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(701);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(690);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(689);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(699);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(692);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(700);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(698);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(703);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(1157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=C:/Users/psilv/PycharmProjects/AutonomousDoorman/webserver/src/polyfills.js.map

/***/ },

/***/ 664:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AsideToggleDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
* Allows the aside to be toggled via click.
*/
var AsideToggleDirective = (function () {
    function AsideToggleDirective() {
    }
    AsideToggleDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        document.querySelector('body').classList.toggle('aside-menu-open');
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], AsideToggleDirective.prototype, "toggleOpen", null);
    AsideToggleDirective = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '.aside-toggle',
        }), 
        __metadata('design:paramtypes', [])
    ], AsideToggleDirective);
    return AsideToggleDirective;
}());
//# sourceMappingURL=C:/Users/psilv/PycharmProjects/AutonomousDoorman/webserver/src/aside.directive.js.map

/***/ },

/***/ 665:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return BreadcrumbsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BreadcrumbsComponent = (function () {
    function BreadcrumbsComponent(router, route) {
        this.router = router;
        this.route = route;
    }
    BreadcrumbsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* NavigationEnd */]; }).subscribe(function (event) {
            _this.breadcrumbs = [];
            _this.breadcrumbsNorm = [];
            _this.url = [];
            _this.breadcrumbs = event['urlAfterRedirects'].split("/");
            _this.breadcrumbs.shift();
            for (var i = 0; i < _this.breadcrumbs.length; i++) {
                // Normalizing names
                if (_this.breadcrumbs[i].indexOf('-') > -1) {
                    var tmp = _this.breadcrumbs[i].split("-");
                    var result = '';
                    for (var j = 0; j < tmp.length; j++) {
                        tmp[j] = _this.capitalizeFirstLetter(tmp[j]);
                        result += tmp[j] + ' ';
                    }
                    _this.breadcrumbsNorm[i] = result;
                }
                else {
                    _this.breadcrumbsNorm[i] = _this.capitalizeFirstLetter(_this.breadcrumbs[i]);
                }
                // Getting url
                if (i == 0) {
                    _this.url[_this.breadcrumbsNorm[i]] = '/' + _this.breadcrumbs[i];
                }
                else {
                    _this.url[_this.breadcrumbsNorm[i]] = _this.url[_this.breadcrumbsNorm[i - 1]] + '/' + _this.breadcrumbs[i];
                }
            }
        });
    };
    BreadcrumbsComponent.prototype.capitalizeFirstLetter = function (string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };
    BreadcrumbsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'breadcrumbs',
            template: "\n    <template ngFor let-bread [ngForOf]=\"breadcrumbsNorm\" let-last = last>\n        <li class=\"breadcrumb-item\" [ngClass]=\"{active: last}\">\n        <a *ngIf=\"!last\" [routerLink]=\"url[bread]\">{{bread}}</a>\n        <span *ngIf=\"last\" [routerLink]=\"url[bread]\">{{bread}}</span>\n    </template>\n  "
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _b) || Object])
    ], BreadcrumbsComponent);
    return BreadcrumbsComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/psilv/PycharmProjects/AutonomousDoorman/webserver/src/breadcrumb.component.js.map

/***/ },

/***/ 666:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* unused harmony export NavDropdownDirective */
/* unused harmony export NavDropdownToggleDirective */
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return NAV_DROPDOWN_DIRECTIVES; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavDropdownDirective = (function () {
    function NavDropdownDirective() {
        this._open = false;
    }
    /**
    * Checks if the dropdown menu is open or not.
    */
    NavDropdownDirective.prototype.isOpen = function () { return this._open; };
    /**
    * Opens the dropdown menu.
    */
    NavDropdownDirective.prototype.open = function () {
        this._open = true;
    };
    /**
    * Closes the dropdown menu .
    */
    NavDropdownDirective.prototype.close = function () {
        this._open = false;
    };
    /**
    * Toggles the dropdown menu.
    */
    NavDropdownDirective.prototype.toggle = function () {
        if (this.isOpen()) {
            this.close();
        }
        else {
            this.open();
        }
    };
    NavDropdownDirective = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '.nav-dropdown',
            host: {
                '[class.open]': '_open',
            }
        }), 
        __metadata('design:paramtypes', [])
    ], NavDropdownDirective);
    return NavDropdownDirective;
}());
/**
* Allows the dropdown to be toggled via click.
*/
var NavDropdownToggleDirective = (function () {
    function NavDropdownToggleDirective(dropdown) {
        this.dropdown = dropdown;
    }
    NavDropdownToggleDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        this.dropdown.toggle();
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], NavDropdownToggleDirective.prototype, "toggleOpen", null);
    NavDropdownToggleDirective = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '.nav-dropdown-toggle',
        }), 
        __metadata('design:paramtypes', [NavDropdownDirective])
    ], NavDropdownToggleDirective);
    return NavDropdownToggleDirective;
}());
var NAV_DROPDOWN_DIRECTIVES = [NavDropdownDirective, NavDropdownToggleDirective];
// export const NGB_DROPDOWN_DIRECTIVES = [NgbDropdownToggle, NgbDropdown];
//# sourceMappingURL=C:/Users/psilv/PycharmProjects/AutonomousDoorman/webserver/src/nav-dropdown.directive.js.map

/***/ },

/***/ 667:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* unused harmony export SidebarToggleDirective */
/* unused harmony export MobileSidebarToggleDirective */
/* unused harmony export SidebarOffCanvasCloseDirective */
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SIDEBAR_TOGGLE_DIRECTIVES; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
* Allows the sidebar to be toggled via click.
*/
var SidebarToggleDirective = (function () {
    function SidebarToggleDirective() {
    }
    //Check if element has class
    SidebarToggleDirective.prototype.hasClass = function (target, elementClassName) {
        return new RegExp('(\\s|^)' + elementClassName + '(\\s|$)').test(target.className);
    };
    //Toggle element class
    SidebarToggleDirective.prototype.toggleClass = function (elem, elementClassName) {
        var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, ' ') + ' ';
        if (this.hasClass(elem, elementClassName)) {
            while (newClass.indexOf(' ' + elementClassName + ' ') >= 0) {
                newClass = newClass.replace(' ' + elementClassName + ' ', ' ');
            }
            elem.className = newClass.replace(/^\s+|\s+$/g, '');
        }
        else {
            elem.className += ' ' + elementClassName;
        }
    };
    SidebarToggleDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        var bodyClass = localStorage.getItem('body-class');
        if (this.hasClass(document.querySelector('body'), 'sidebar-off-canvas')) {
            this.toggleClass(document.querySelector('body'), 'sidebar-opened');
            this.toggleClass(document.querySelector('html'), 'sidebar-opened');
        }
        else if (this.hasClass(document.querySelector('body'), 'sidebar-nav') || bodyClass == 'sidebar-nav') {
            this.toggleClass(document.querySelector('body'), 'sidebar-nav');
            localStorage.setItem('body-class', 'sidebar-nav');
            if (bodyClass == 'sidebar-nav') {
                localStorage.clear();
            }
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], SidebarToggleDirective.prototype, "toggleOpen", null);
    SidebarToggleDirective = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '.sidebar-toggle',
        }), 
        __metadata('design:paramtypes', [])
    ], SidebarToggleDirective);
    return SidebarToggleDirective;
}());
var MobileSidebarToggleDirective = (function () {
    function MobileSidebarToggleDirective() {
    }
    //Check if element has class
    MobileSidebarToggleDirective.prototype.hasClass = function (target, elementClassName) {
        return new RegExp('(\\s|^)' + elementClassName + '(\\s|$)').test(target.className);
    };
    //Toggle element class
    MobileSidebarToggleDirective.prototype.toggleClass = function (elem, elementClassName) {
        var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, ' ') + ' ';
        if (this.hasClass(elem, elementClassName)) {
            while (newClass.indexOf(' ' + elementClassName + ' ') >= 0) {
                newClass = newClass.replace(' ' + elementClassName + ' ', ' ');
            }
            elem.className = newClass.replace(/^\s+|\s+$/g, '');
        }
        else {
            elem.className += ' ' + elementClassName;
        }
    };
    MobileSidebarToggleDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        this.toggleClass(document.querySelector('body'), 'mobile-open');
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], MobileSidebarToggleDirective.prototype, "toggleOpen", null);
    MobileSidebarToggleDirective = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[mobile-nav-toggle]',
        }), 
        __metadata('design:paramtypes', [])
    ], MobileSidebarToggleDirective);
    return MobileSidebarToggleDirective;
}());
/**
* Allows the off-canvas sidebar to be closed via click.
*/
var SidebarOffCanvasCloseDirective = (function () {
    function SidebarOffCanvasCloseDirective() {
    }
    //Check if element has class
    SidebarOffCanvasCloseDirective.prototype.hasClass = function (target, elementClassName) {
        return new RegExp('(\\s|^)' + elementClassName + '(\\s|$)').test(target.className);
    };
    //Toggle element class
    SidebarOffCanvasCloseDirective.prototype.toggleClass = function (elem, elementClassName) {
        var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, ' ') + ' ';
        if (this.hasClass(elem, elementClassName)) {
            while (newClass.indexOf(' ' + elementClassName + ' ') >= 0) {
                newClass = newClass.replace(' ' + elementClassName + ' ', ' ');
            }
            elem.className = newClass.replace(/^\s+|\s+$/g, '');
        }
        else {
            elem.className += ' ' + elementClassName;
        }
    };
    SidebarOffCanvasCloseDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        if (this.hasClass(document.querySelector('body'), 'sidebar-off-canvas')) {
            this.toggleClass(document.querySelector('body'), 'sidebar-opened');
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], SidebarOffCanvasCloseDirective.prototype, "toggleOpen", null);
    SidebarOffCanvasCloseDirective = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '.sidebar-close',
        }), 
        __metadata('design:paramtypes', [])
    ], SidebarOffCanvasCloseDirective);
    return SidebarOffCanvasCloseDirective;
}());
var SIDEBAR_TOGGLE_DIRECTIVES = [SidebarToggleDirective, SidebarOffCanvasCloseDirective, MobileSidebarToggleDirective];
//# sourceMappingURL=C:/Users/psilv/PycharmProjects/AutonomousDoorman/webserver/src/sidebar.directive.js.map

/***/ },

/***/ 869:
/***/ function(module, exports) {

module.exports = ".custom-modal-container {\n  padding: 15px; }\n\n.custom-modal-header {\n  background-color: #219161;\n  color: #fff;\n  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.75);\n  margin-top: -15px;\n  margin-bottom: 40px; }\n"

/***/ },

/***/ 870:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 871:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 872:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 873:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 874:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 875:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 876:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 877:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 878:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 879:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 880:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 881:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 882:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 883:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 884:
/***/ function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ },

/***/ 885:
/***/ function(module, exports) {

module.exports = "<div class=\"container-fluid custom-modal-container\">\n  <div class=\"row custom-modal-header\">\n    <div class=\"col-sm-12\">\n      <h3>Add Member to {{context.groupName}}</h3>\n    </div>\n  </div>\n  <div class=\"row\" [ngClass]=\"{'myclass' : shouldUseMyClass}\">\n    <div class=\"col-xs-12\">\n      <!-- Members -->\n      <div style=\"text-align: center\" class=\"card-block\" *ngIf=\"context.groupMembers.length >= 1\">\n        <strong>Add existing members to group</strong>\n        <br>\n        <br>\n        <div *ngFor=\"let member of context.groupMembers; let i = index; trackBy:trackByIndex\">\n          <div class=\"col-sm-6 card\" (click)=\"addMemberToGroup(member)\">\n\n            <div class=\"callout callout-warning m-0 py-1 lighten\">\n              <div class=\"avatar float-xs-right\">\n                <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n              </div>\n              <div>\n                <strong>{{member.name}}</strong>\n              </div>\n              <span class=\"text-muted\">{{member.email}}</span>\n              <br>\n              <small class=\"text-muted\">registered at</small>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div style=\"text-align: center\">\n        <strong>Create a new member to add</strong>\n        <br>\n        <br>\n        <button class=\"btn btn-primary\" (click)=\"showCreateBtn()\" *ngIf=\"context.groupMembers.length>= 1\">{{createBtn}}</button>\n        <br>\n        <br>\n        <span>{{confirmationMessage}}</span>\n      </div>\n\n      <!-- User input -->\n      <div style=\"text-align: center\" class=\"card-block\" *ngIf=\"showCreate || context.groupMembers.length == 0\">\n        <form action=\"\" method=\"post\">\n          <div class=\"form-group\">\n            <div class=\"input-group\">\n              <span class=\"input-group-addon\"><i class=\"fa fa-user\"></i></span>\n              <input type=\"text\" [(ngModel)]=\"newMember.name\" name=\"username\" class=\"form-control\" placeholder=\"Username\">\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <div class=\"input-group\">\n              <span class=\"input-group-addon\"><i class=\"fa fa-envelope\"></i></span>\n              <input type=\"email\" [(ngModel)]=\"newMember.email\" name=\"email\" class=\"form-control\" placeholder=\"Email\">\n            </div>\n          </div>\n          <!-- Bottom -->\n          <div class=\"form-group form-actions\">\n            <button type=\"button\" (click)=\"submit(groupName, member)\" class=\"btn btn-sm btn-success\">Submit</button>\n          </div>\n        </form>\n\n      </div>\n\n    </div>\n  </div>\n</div>`\n"

/***/ },

/***/ 886:
/***/ function(module, exports) {

module.exports = "<p>\n  create-user-modal works!\n</p>\n"

/***/ },

/***/ 887:
/***/ function(module, exports) {

module.exports = "<app-header></app-header>\n\n\n<app-sidebar></app-sidebar>\n\n<!-- Main content -->\n<main class=\"main\">\n  <app-breadcrumb></app-breadcrumb>\n\n  <div class=\"container-fluid\">\n    <div class=\"animated fadeIn\">\n\n      <div class=\"card-columns col-2\">\n        <div class=\"card\">\n          <div class=\"card-header\">\n            Accessed this week per avenue\n          </div>\n          <div class=\"card-block\">\n            <div class=\"chart-wrapper\">\n              <canvas baseChart class=\"chart\" [datasets]=\"barChartData\" [labels]=\"barChartLabels\" [options]=\"barChartOptions\" [legend]=\"barChartLegend\" [chartType]=\"barChartType\" (chartClick)=\"chartClicked($event)\"></canvas>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <!--/.row-->\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <div class=\"card\">\n            <div class=\"card-header\">\n              Logs\n            </div>\n            <div class=\"card-block\">\n              <!--/.row-->\n              <br>\n              <table class=\"table table-hover table-outline mb-0 hidden-sm-down\">\n                <thead class=\"thead-default\">\n                <tr>\n                  <th class=\"text-xs-center\"><i class=\"icon-people\"></i>\n                  </th>\n                  <th>User</th>\n                  <th>Allowed By</th>\n                  <th>Venue</th>\n                  <th>Activity</th>\n                </tr>\n                </thead>\n                <tbody>\n\n\n                <tr *ngFor=\"let log of logs\">\n                  <td class=\"text-xs-center\">\n                    <div class=\"avatar\">\n                      <img src=\"assets/img/avatars/1.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n                      <span class=\"avatar-status tag-success\"></span>\n                    </div>\n                  </td>\n                  <td>\n                    <div>{{log.name}}</div>\n                    <div class=\"small text-muted\">\n                      Registered: Jan 1, 2015\n                    </div>\n                  </td>\n                  <td>\n                    <div class=\"clearfix\">\n                      <div class=\"float-xs-left\">\n                        {{log.allowedBy}}\n                      </div>\n                    </div>\n                  </td>\n                  <td>\n                    <div class=\"clearfix\">\n                      <div class=\"float-xs-left\">\n                        {{log.venue}}\n                      </div>\n                    </div>\n                  </td>\n                  <td>\n                    <div class=\"small text-muted\">Last login</div>\n                    {{log.date.day}}/{{log.date.month}}/{{log.date.year}} at {{log.date.time}}\n                  </td>\n                </tr>\n                </tbody>\n              </table>\n            </div>\n          </div>\n        </div>\n        <!--/.col-->\n      </div>\n      <!--/.row-->\n    </div>\n\n  </div>\n\n</main>\n\n<app-asidemenu></app-asidemenu>\n\n<app-footer></app-footer>\n"

/***/ },

/***/ 888:
/***/ function(module, exports) {

module.exports = "<aside class=\"aside-menu\">\n  <tabset>\n    <tab>\n      <template tabHeading><i class=\"icon-list\"></i>\n      </template>\n      <div class=\"callout m-0 py-h text-muted text-xs-center bg-faded text-uppercase\">\n        <small><b>Today</b>\n        </small>\n      </div>\n      <hr class=\"transparent mx-1 my-0\">\n      <div class=\"callout callout-warning m-0 py-1\">\n        <div class=\"avatar float-xs-right\">\n          <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n        </div>\n        <div>Meeting with\n          <strong>Lucas</strong>\n        </div>\n        <small class=\"text-muted mr-1\"><i class=\"icon-calendar\"></i>&nbsp; 1 - 3pm</small>\n        <small class=\"text-muted\"><i class=\"icon-location-pin\"></i>&nbsp; Palo Alto, CA</small>\n      </div>\n      <hr class=\"mx-1 my-0\">\n      <div class=\"callout callout-info m-0 py-1\">\n        <div class=\"avatar float-xs-right\">\n          <img src=\"assets/img/avatars/4.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n        </div>\n        <div>Skype with\n          <strong>Megan</strong>\n        </div>\n        <small class=\"text-muted mr-1\"><i class=\"icon-calendar\"></i>&nbsp; 4 - 5pm</small>\n        <small class=\"text-muted\"><i class=\"icon-social-skype\"></i>&nbsp; On-line</small>\n      </div>\n      <hr class=\"transparent mx-1 my-0\">\n      <div class=\"callout m-0 py-h text-muted text-xs-center bg-faded text-uppercase\">\n        <small><b>Tomorrow</b>\n        </small>\n      </div>\n      <hr class=\"transparent mx-1 my-0\">\n      <div class=\"callout callout-danger m-0 py-1\">\n        <div>New UI Project -\n          <strong>deadline</strong>\n        </div>\n        <small class=\"text-muted mr-1\"><i class=\"icon-calendar\"></i>&nbsp; 10 - 11pm</small>\n        <small class=\"text-muted\"><i class=\"icon-home\"></i>&nbsp; creativeLabs HQ</small>\n        <div class=\"avatars-stack mt-h\">\n          <div class=\"avatar avatar-xs\">\n            <img src=\"assets/img/avatars/2.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n          </div>\n          <div class=\"avatar avatar-xs\">\n            <img src=\"assets/img/avatars/3.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n          </div>\n          <div class=\"avatar avatar-xs\">\n            <img src=\"assets/img/avatars/4.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n          </div>\n          <div class=\"avatar avatar-xs\">\n            <img src=\"assets/img/avatars/5.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n          </div>\n          <div class=\"avatar avatar-xs\">\n            <img src=\"assets/img/avatars/6.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n          </div>\n        </div>\n      </div>\n      <hr class=\"mx-1 my-0\">\n      <div class=\"callout callout-success m-0 py-1\">\n        <div>\n          <strong>#10 Startups.Garden</strong>Meetup</div>\n        <small class=\"text-muted mr-1\"><i class=\"icon-calendar\"></i>&nbsp; 1 - 3pm</small>\n        <small class=\"text-muted\"><i class=\"icon-location-pin\"></i>&nbsp; Palo Alto, CA</small>\n      </div>\n      <hr class=\"mx-1 my-0\">\n      <div class=\"callout callout-primary m-0 py-1\">\n        <div>\n          <strong>Team meeting</strong>\n        </div>\n        <small class=\"text-muted mr-1\"><i class=\"icon-calendar\"></i>&nbsp; 4 - 6pm</small>\n        <small class=\"text-muted\"><i class=\"icon-home\"></i>&nbsp; creativeLabs HQ</small>\n        <div class=\"avatars-stack mt-h\">\n          <div class=\"avatar avatar-xs\">\n            <img src=\"assets/img/avatars/2.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n          </div>\n          <div class=\"avatar avatar-xs\">\n            <img src=\"assets/img/avatars/3.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n          </div>\n          <div class=\"avatar avatar-xs\">\n            <img src=\"assets/img/avatars/4.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n          </div>\n          <div class=\"avatar avatar-xs\">\n            <img src=\"assets/img/avatars/5.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n          </div>\n          <div class=\"avatar avatar-xs\">\n            <img src=\"assets/img/avatars/6.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n          </div>\n          <div class=\"avatar avatar-xs\">\n            <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n          </div>\n          <div class=\"avatar avatar-xs\">\n            <img src=\"assets/img/avatars/8.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n          </div>\n        </div>\n      </div>\n      <hr class=\"mx-1 my-0\">\n    </tab>\n    <tab>\n      <template tabHeading><i class=\"icon-speech\"></i>\n      </template>\n      <div class=\"p-1\">\n        <div class=\"message\">\n          <div class=\"py-1 pb-3 mr-1 float-xs-left\">\n            <div class=\"avatar\">\n              <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n              <span class=\"avatar-status tag-success\"></span>\n            </div>\n          </div>\n          <div>\n            <small class=\"text-muted\">Lukasz Holeczek</small>\n            <small class=\"text-muted float-xs-right mt-q\">1:52 PM</small>\n          </div>\n          <div class=\"text-truncate font-weight-bold\">Lorem ipsum dolor sit amet</div>\n          <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>\n        </div>\n        <hr>\n        <div class=\"message\">\n          <div class=\"py-1 pb-3 mr-1 float-xs-left\">\n            <div class=\"avatar\">\n              <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n              <span class=\"avatar-status tag-success\"></span>\n            </div>\n          </div>\n          <div>\n            <small class=\"text-muted\">Lukasz Holeczek</small>\n            <small class=\"text-muted float-xs-right mt-q\">1:52 PM</small>\n          </div>\n          <div class=\"text-truncate font-weight-bold\">Lorem ipsum dolor sit amet</div>\n          <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>\n        </div>\n        <hr>\n        <div class=\"message\">\n          <div class=\"py-1 pb-3 mr-1 float-xs-left\">\n            <div class=\"avatar\">\n              <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n              <span class=\"avatar-status tag-success\"></span>\n            </div>\n          </div>\n          <div>\n            <small class=\"text-muted\">Lukasz Holeczek</small>\n            <small class=\"text-muted float-xs-right mt-q\">1:52 PM</small>\n          </div>\n          <div class=\"text-truncate font-weight-bold\">Lorem ipsum dolor sit amet</div>\n          <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>\n        </div>\n        <hr>\n        <div class=\"message\">\n          <div class=\"py-1 pb-3 mr-1 float-xs-left\">\n            <div class=\"avatar\">\n              <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n              <span class=\"avatar-status tag-success\"></span>\n            </div>\n          </div>\n          <div>\n            <small class=\"text-muted\">Lukasz Holeczek</small>\n            <small class=\"text-muted float-xs-right mt-q\">1:52 PM</small>\n          </div>\n          <div class=\"text-truncate font-weight-bold\">Lorem ipsum dolor sit amet</div>\n          <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>\n        </div>\n        <hr>\n        <div class=\"message\">\n          <div class=\"py-1 pb-3 mr-1 float-xs-left\">\n            <div class=\"avatar\">\n              <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n              <span class=\"avatar-status tag-success\"></span>\n            </div>\n          </div>\n          <div>\n            <small class=\"text-muted\">Lukasz Holeczek</small>\n            <small class=\"text-muted float-xs-right mt-q\">1:52 PM</small>\n          </div>\n          <div class=\"text-truncate font-weight-bold\">Lorem ipsum dolor sit amet</div>\n          <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>\n        </div>\n      </div>\n    </tab>\n    <tab>\n      <template tabHeading><i class=\"icon-settings\"></i>\n      </template>\n      <div class=\"p-1\">\n        <h6>Settings</h6>\n\n        <div class=\"aside-options\">\n          <div class=\"clearfix mt-2\">\n            <small><b>Option 1</b>\n            </small>\n            <label class=\"switch switch-text switch-pill switch-success switch-sm float-xs-right\">\n              <input type=\"checkbox\" class=\"switch-input\" checked>\n              <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\n              <span class=\"switch-handle\"></span>\n            </label>\n          </div>\n          <div>\n            <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</small>\n          </div>\n        </div>\n\n        <div class=\"aside-options\">\n          <div class=\"clearfix mt-1\">\n            <small><b>Option 2</b>\n            </small>\n            <label class=\"switch switch-text switch-pill switch-success switch-sm float-xs-right\">\n              <input type=\"checkbox\" class=\"switch-input\">\n              <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\n              <span class=\"switch-handle\"></span>\n            </label>\n          </div>\n          <div>\n            <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</small>\n          </div>\n        </div>\n\n        <div class=\"aside-options\">\n          <div class=\"clearfix mt-1\">\n            <small><b>Option 3</b>\n            </small>\n            <label class=\"switch switch-text switch-pill switch-success switch-sm float-xs-right\">\n              <input type=\"checkbox\" class=\"switch-input\">\n              <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\n              <span class=\"switch-handle\"></span>\n            </label>\n          </div>\n        </div>\n\n        <div class=\"aside-options\">\n          <div class=\"clearfix mt-1\">\n            <small><b>Option 4</b>\n            </small>\n            <label class=\"switch switch-text switch-pill switch-success switch-sm float-xs-right\">\n              <input type=\"checkbox\" class=\"switch-input\" checked>\n              <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\n              <span class=\"switch-handle\"></span>\n            </label>\n          </div>\n        </div>\n\n        <hr>\n        <h6>System Utilization</h6>\n\n        <div class=\"text-uppercase mb-q mt-2\">\n          <small><b>CPU Usage</b>\n          </small>\n        </div>\n        <progress class=\"progress progress-xs progress-info m-0\" value=\"25\" max=\"100\">25%</progress>\n        <small class=\"text-muted\">348 Processes. 1/4 Cores.</small>\n\n        <div class=\"text-uppercase mb-q mt-h\">\n          <small><b>Memory Usage</b>\n          </small>\n        </div>\n        <progress class=\"progress progress-xs progress-warning m-0\" value=\"70\" max=\"100\">70%</progress>\n        <small class=\"text-muted\">11444GB/16384MB</small>\n\n        <div class=\"text-uppercase mb-q mt-h\">\n          <small><b>SSD 1 Usage</b>\n          </small>\n        </div>\n        <progress class=\"progress progress-xs progress-danger m-0\" value=\"95\" max=\"100\">95%</progress>\n        <small class=\"text-muted\">243GB/256GB</small>\n\n        <div class=\"text-uppercase mb-q mt-h\">\n          <small><b>SSD 2 Usage</b>\n          </small>\n        </div>\n        <progress class=\"progress progress-xs progress-success m-0\" value=\"10\" max=\"100\">10%</progress>\n        <small class=\"text-muted\">25GB/256GB</small>\n      </div>\n    </tab>\n  </tabset>\n</aside>\n"

/***/ },

/***/ 889:
/***/ function(module, exports) {

module.exports = "<!-- Breadcrumb -->\n<ol class=\"breadcrumb\">\n  <breadcrumbs></breadcrumbs>\n\n  <!-- Breadcrumb Menu-->\n  <li class=\"breadcrumb-menu\">\n    <div class=\"btn-group\" role=\"group\" aria-label=\"Button group with nested dropdown\">\n      <a class=\"btn btn-secondary\" routerLinkActive=\"active\" [routerLink]=\"['/dashboard/new-venue']\"><i class=\"fa fa-plus-square-o\"></i> &nbsp;New Venue</a>\n    </div>\n  </li>\n\n</ol>\n"

/***/ },

/***/ 890:
/***/ function(module, exports) {

module.exports = "<footer class=\"footer\">\n    <span class=\"text-left\">\n        <a href=\"http://coreui.io\">Projeto Raimundo</a> &copy; 2017\n    </span>\n  <span class=\"float-xs-right\">\n        Powered by <a href=\"http://coreui.io\">CoreUI</a>\n    </span>\n</footer>\n"

/***/ },

/***/ 891:
/***/ function(module, exports) {

module.exports = "<header class=\"navbar\">\n  <div class=\"container-fluid\">\n    <button class=\"navbar-toggler hidden-lg-up\" type=\"button\" mobile-nav-toggle>&#9776;</button>\n    <a class=\"navbar-brand\" href=\"#\"></a>\n\n    <ul class=\"nav navbar-nav float-xs-right hidden-md-down\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\"><i class=\"icon-bell\"></i><span class=\"tag tag-pill tag-danger\">5</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\"><i class=\"icon-list\"></i></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\"><i class=\"icon-location-pin\"></i></a>\n      </li>\n      <li class=\"nav-item dropdown\" dropdown (onToggle)=\"$event\">\n        <a class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\" dropdownToggle>\n          <img src=\"assets/img/avatars/6.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n          <span class=\"hidden-md-down\">{{userInfo.displayName}}</span>\n        </a>\n        <div class=\"dropdown-menu dropdown-menu-right\" dropdownMenu aria-labelledby=\"simple-dropdown\">\n\n          <div class=\"dropdown-header text-xs-center\">\n            <strong>Account</strong>\n          </div>\n\n          <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-bell-o\"></i> Updates<span class=\"tag tag-info\">42</span></a>\n          <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-envelope-o\"></i> Messages<span class=\"tag tag-success\">42</span></a>\n          <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-tasks\"></i> Tasks<span class=\"tag tag-danger\">42</span></a>\n          <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-comments\"></i> Comment<span class=\"tag tag-warning\">42</span></a>\n\n          <div class=\"dropdown-header text-xs-center\">\n            <strong>Settings</strong>\n          </div>\n\n          <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-user\"></i> Profile</a>\n          <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-wrench\"></i> Setting</a>\n          <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-usd\"></i> Payments<span class=\"tag tag-default\">42</span></a>\n          <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-file\"></i> Projects<span class=\"tag tag-primary\">42</span></a>\n          <div class=\"divider\"></div>\n          <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-shield\"></i> Lock account</a>\n          <a class=\"dropdown-item\" routerLinkActive=\"active\" [routerLink]=\"['/login']\" (click)=\"logout()\"><i class=\"fa fa-lock\"></i> Logout</a>\n        </div>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link navbar-toggler aside-toggle\" href=\"#\">&#9776;</a>\n      </li>\n    </ul>\n\n  </div>\n</header>\n"

/***/ },

/***/ 892:
/***/ function(module, exports) {

module.exports = "<div class=\"sidebar\">\n  <nav class=\"sidebar-nav\">\n    <ul class=\"nav\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/dashboard']\"><i class=\"icon-speedometer\"></i> Dashboard</a>\n      </li>\n\n      <li class=\"divider\"></li>\n      <li class=\"nav-title\">\n        UI Elements\n      </li>\n      <li class=\"nav-item nav-dropdown\" routerLinkActive=\"open\">\n        <a class=\"nav-link nav-dropdown-toggle\" ><i class=\"fa fa-home\"></i> Venues</a>\n        <ul class=\"nav-dropdown-items\">\n          <li class=\"nav-item\" *ngFor=\"let venue of venuesKeys\">\n            <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/dashboard/venues/'+venue]\"><i class=\"fa fa-home\"></i>{{venue}}</a>\n          </li>\n        </ul>\n      </li>\n      <li class=\"nav-item nav-dropdown\" routerLinkActive=\"open\">\n        <a class=\"nav-link nav-dropdown-toggle\" href=\"#\"><i class=\"icon-puzzle\"></i> Components</a>\n        <ul class=\"nav-dropdown-items\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/components/buttons']\"><i class=\"icon-puzzle\"></i> Buttons</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/components/social-buttons']\"><i class=\"icon-puzzle\"></i> Social Buttons</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/components/cards']\"><i class=\"icon-puzzle\"></i> Cards</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/components/forms']\"><i class=\"icon-puzzle\"></i> Forms</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/components/switches']\"><i class=\"icon-puzzle\"></i> Switches</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/components/tables']\"><i class=\"icon-puzzle\"></i> Tables</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/components/tabs']\"><i class=\"icon-puzzle\"></i> Tabs</a>\n          </li>\n        </ul>\n      </li>\n      <li class=\"nav-item nav-dropdown\" routerLinkActive=\"open\">\n        <a class=\"nav-link nav-dropdown-toggle\" href=\"#\"><i class=\"icon-star\"></i> Icons</a>\n        <ul class=\"nav-dropdown-items\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/icons/font-awesome']\"><i class=\"icon-star\"></i> Font Awesome</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/icons/simple-line-icons']\"><i class=\"icon-star\"></i> Simple Line Icons</a>\n          </li>\n        </ul>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/widgets']\"><i class=\"icon-calculator\"></i> Widgets <span class=\"tag tag-info\">NEW</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/charts']\"><i class=\"icon-pie-chart\"></i> Charts</a>\n      </li>\n      <li class=\"divider\"></li>\n      <li class=\"nav-title\">\n        Extras\n      </li>\n      <li class=\"nav-item nav-dropdown\">\n        <a class=\"nav-link nav-dropdown-toggle\" href=\"#\"><i class=\"icon-star\"></i> Pages</a>\n        <ul class=\"nav-dropdown-items\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/pages/login']\"><i class=\"icon-star\"></i> Login</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/pages/register']\"><i class=\"icon-star\"></i> Register</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/pages/404']\"><i class=\"icon-star\"></i> Error 404</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/pages/500']\"><i class=\"icon-star\"></i> Error 500</a>\n          </li>\n        </ul>\n      </li>\n\n    </ul>\n  </nav>\n</div>\n"

/***/ },

/***/ 893:
/***/ function(module, exports) {

module.exports = "<div class=\"container d-table\">\n  <div class=\"d-100vh-va-middle\">\n    <div class=\"row\">\n      <div class=\"col-md-8 offset-md-2\">\n        <div class=\"card-group\">\n          <div class=\"card p-2\">\n            <div class=\"card-block\">\n              <h1>Login {{loggedIn | async}}</h1>\n              <p class=\"text-muted\">Sign In to your account</p>\n              <div class=\"input-group mb-1\">\n                                <span class=\"input-group-addon\"><i class=\"icon-user\"></i>\n                                </span>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Username\" [(ngModel)]=\"loginUsername\">\n              </div>\n              <div class=\"input-group mb-2\">\n                                <span class=\"input-group-addon\"><i class=\"icon-lock\"></i>\n                                </span>\n                <input type=\"password\" class=\"form-control\" placeholder=\"Password\" [(ngModel)]=\"loginPassword\">\n              </div>\n              <span style=\"color:red\">{{errorMessage}}</span>\n              <div class=\"row\">\n                <div class=\"col-xs-6\">\n                  <button type=\"button\" (click)=\"login()\" class=\"btn btn-primary px-2\">Login</button>\n                </div>\n                <div class=\"col-xs-6 text-xs-right\">\n                  <button type=\"button\" (click)=\"logout()\" class=\"btn btn-link px-0\">Forgot password?</button>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"card card-inverse card-primary py-3 \" style=\"width:44%\">\n            <div class=\"card-block text-xs-center\">\n              <div>\n                <h2>Sign up</h2>\n                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>\n                <button type=\"button\" class=\"btn btn-primary active mt-1\" (click)=\"register()\">Register Now!</button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n"

/***/ },

/***/ 894:
/***/ function(module, exports) {

module.exports = "<app-header></app-header>\n\n\n<app-sidebar></app-sidebar>\n\n<!-- Main content -->\n<main class=\"main\">\n  <app-breadcrumb></app-breadcrumb>\n\n  <div class=\"container-fluid\">\n    <div class=\"animated fadeIn\">\n      <div class=\"row\">\n        <div class=\"card\">\n          <div class=\"card-header\">\n            <strong>New Venue</strong>\n          </div>\n          <div class=\"card-block\">\n            <form #form=\"ngForm\" action=\"\" method=\"post\" enctype=\"multipart/form-data\" class=\"form-horizontal \">\n              <div class=\"form-group row\">\n                <label class=\"col-md-3 form-control-label\" for=\"text-input\">Venue Name</label>\n                <div class=\"col-md-9\">\n                  <input type=\"text\" name=\"text-input\" [(ngModel)]=\"venue.name\" class=\"form-control\" placeholder=\"venue name\">\n                  <span style=\"color: red\" class=\"help-block\">{{venue.error}}</span>\n                </div>\n              </div>\n              <br>\n\n              <div class=\"form-group row\" *ngFor=\"let group of groups; let i = index; trackBy:trackByIndex\">\n                <div class=\"card\">\n                  <div class=\"card-header\">\n                    <strong>Group {{i+1}}</strong>\n                    <div class=\"card-actions\">\n                      <a (click)=\"deleteGroup(i)\" class=\"nav-link\">\n                        <i class=\"fa fa-close\"></i>\n                      </a>\n                    </div>\n                  </div>\n                  <div class=\"card-block\">\n                    <label class=\"col-md-3 form-control-label\" for=\"text-input\">Name</label>\n                    <div class=\"col-md-9\">\n                      <input type=\"text\" name=\"group {{i}}\" [(ngModel)]=\"groups[i].name\" class=\"form-control\" placeholder=\"group name\">\n                      <span style=\"color: red\" class=\"help-block\">{{groups[i].error}}</span>\n                    </div>\n\n                    <br><br>\n                    <br>\n                    <label class=\"col-md-3 form-control-label\" for=\"text-input\">Start</label>\n                    <div class=\"col-md-9\">\n                      <input type=\"time\" name=\"start\" [(ngModel)]=\"groups[i].start\"/>\n                    </div>\n                    <br><br>\n                    <label class=\"col-md-3 form-control-label\" for=\"text-input\">Finish</label>\n                    <div class=\"col-md-9\">\n                      <input type=\"time\" name=\"finish\" [(ngModel)]=\"groups[i].end\"/>\n                    </div>\n                  </div>\n                </div>\n              </div>\n\n\n              <button (click)=\"addGroup()\" type=\"submit\" class=\"btn btn-sm btn-primary\"><i class=\"fa fa-plus-square-o\"></i> Add group</button>\n\n\n              <div class=\"form-group row\">\n                <div class=\"col-md-9\">\n                  <p class=\"form-control-static\">You will be added as a member of the groups.\n                    You can delete yourself of them after adding other people to the groups.</p>\n                </div>\n              </div>\n            </form>\n          </div>\n          <div class=\"card-footer\">\n            <button (click)=\"submit()\" type=\"submit\" class=\"btn btn-sm btn-primary\"><i class=\"fa fa-dot-circle-o\"></i> Submit</button>\n            <button type=\"reset\" (click)=\"reset()\" class=\"btn btn-sm btn-danger\"><i class=\"fa fa-ban\"></i> Reset</button>\n          </div>\n        </div>\n        <!--/col-->\n      </div>\n    </div>\n  </div>\n\n</main>\n\n<app-asidemenu></app-asidemenu>\n\n<app-footer></app-footer>\n"

/***/ },

/***/ 895:
/***/ function(module, exports) {

module.exports = "<div class=\"container d-table\">\n  <div class=\"d-100vh-va-middle\">\n    <div class=\"row\">\n      <div class=\"col-md-6 offset-md-3\">\n        <div class=\"clearfix\">\n          <h1 class=\"float-xs-left display-3 mr-2\">404</h1>\n          <h4 class=\"pt-1\">Oops! You're lost.</h4>\n          <p class=\"text-muted\">The page you are looking for was not found.</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ },

/***/ 896:
/***/ function(module, exports) {

module.exports = "<div class=\"container d-table\">\n  <div class=\"d-100vh-va-middle\">\n    <div class=\"row\">\n      <div class=\"col-md-6 offset-md-3\">\n        <div class=\"card mx-2\">\n          <div class=\"card-block p-2\">\n            <h1>Register</h1>\n            <p class=\"text-muted\">Create your account</p>\n            <div class=\"input-group mb-1\">\n              <span class=\"input-group-addon\"><i class=\"icon-user\"></i></span>\n              <input type=\"text\" class=\"form-control\" placeholder=\"Username\" [(ngModel)]=\"username\">\n            </div>\n\n            <div class=\"input-group mb-1\">\n              <span class=\"input-group-addon\">@</span>\n              <input type=\"text\" class=\"form-control\" placeholder=\"Email\" [(ngModel)]=\"email\">\n            </div>\n\n            <div class=\"input-group mb-1\">\n              <span class=\"input-group-addon\"><i class=\"icon-lock\"></i></span>\n              <input type=\"password\" class=\"form-control\" placeholder=\"Password\" [(ngModel)]=\"password\">\n            </div>\n\n            <div class=\"input-group mb-2\">\n              <span class=\"input-group-addon\"><i class=\"icon-lock\"></i></span>\n              <input type=\"password\" class=\"form-control\" placeholder=\"Repeat password\" [(ngModel)]=\"passwordCheck\">\n            </div>\n\n            <span style=\"color: red\">{{errorMessage}}</span>\n            <button type=\"button\" class=\"btn btn-block btn-success\" (click)=\"createAccount()\">Create Account</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ },

/***/ 897:
/***/ function(module, exports) {

module.exports = "<span defaultOverlayTarget></span>\n<h1>angular2-modal{{version}}</h1>\n<h2>Basic Modal sample</h2>\n<button (click)=\"onClick()\">Alert</button>\n<br>\n<h2>Custom Modal example:</h2>\n<button (click)=\"openCustom()\">Custom Modal</button>\n<p>\n  <b>IMPORTANT:</b>\n  Since 'AdditionCalculateWindow' is never explicitly used (in a template)\n  we must tell angular about it by adding it to the <strong>entryComponents</strong> property in the module meta.\n</p>\n\n<h2>See systemjs.config.js implementation for UMD vs module loading</h2>\n"

/***/ },

/***/ 898:
/***/ function(module, exports) {

module.exports = "<app-header></app-header>\n\n\n<app-sidebar></app-sidebar>\n\n<!-- Main content -->\n<main class=\"main\">\n  <span defaultOverlayTarget></span>\n  <app-breadcrumb></app-breadcrumb>\n\n  <div class=\"container-fluid\">\n    <div class=\"animated fadeIn\">\n\n      <!-- All Members -->\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <strong>All {{venueName}}'s Members</strong>\n          <a class=\"btn float-xs-right\"><i class=\"fa fa-plus-square-o\"></i> Add Member</a>\n          <a class=\"btn float-xs-right\"><i class=\"fa fa-plus-square-o\"></i> Add Group</a>\n        </div>\n        <div class=\"card-block\">\n          <div class=\"row\">\n            <div *ngFor=\"let id of membersId; let i = index; trackBy:trackByIndex\">\n              <div class=\"col-sm-4 card\">\n                <div class=\"callout callout-info m-0 py-1\">\n                  <div class=\"avatar float-xs-right\">\n                    <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n                  </div>\n                  <div>\n                    <strong>{{members[id].name}}</strong>\n                  </div>\n                  <span class=\"text-muted\">{{members[id].email}}</span>\n                  <br>\n                  <small class=\"text-muted\">registered at</small>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <!-- Groups -->\n      <div *ngFor=\"let group of groups; let i = index; trackBy:trackByIndex\">\n        <div class=\"card\">\n          <div class=\"card-header\">\n            <strong>{{group}}</strong>\n            <a (click)=\"openCustom(i)\" class=\"btn float-xs-right\"><i class=\"fa fa-plus-square-o\"></i> Add Member</a>\n          </div>\n          <div class=\"card-block\">\n            <div class=\"row\">\n              <div *ngFor=\"let groupMember of groupMembers[group]\">\n                <div class=\"col-sm-4 card\">\n                  <div class=\"callout callout-warning m-0 py-1\">\n                    <div class=\"avatar float-xs-right\">\n                      <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n                    </div>\n                    <div>\n                      <strong>{{members[groupMember].name}}</strong>\n                    </div>\n                    <span class=\"text-muted\">{{members[groupMember].email}}</span>\n                    <br>\n                    <small class=\"text-muted\">registered at</small>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <br>\n            <br>\n\n            <!-- Add Member -->\n            <div class=\"col-sm-4\" *ngIf=\"createMember[i]\">\n              <div class=\"card\">\n                <div class=\"card-header\">\n                  New Member\n                  <div class=\"card-actions\">\n                    <a (click)=\"deleteMember(i)\" class=\"nav-link\">\n                      <i class=\"fa fa-close\"></i>\n                    </a>\n                  </div>\n                </div>\n                <div class=\"card-block\">\n                  <form action=\"\" method=\"post\">\n                    <div class=\"form-group\">\n                      <div class=\"input-group\">\n                              <span class=\"input-group-addon\"><i class=\"fa fa-user\"></i>\n                              </span>\n                        <input type=\"text\" [(ngModel)]=\"newMember.name\" name=\"username\" class=\"form-control\" placeholder=\"Username\">\n                      </div>\n                    </div>\n                    <div class=\"form-group\">\n                      <div class=\"input-group\">\n                              <span class=\"input-group-addon\"><i class=\"fa fa-envelope\"></i>\n                              </span>\n                        <input type=\"email\" [(ngModel)]=\"newMember.email\" name=\"email\" class=\"form-control\" placeholder=\"Email\">\n                      </div>\n                    </div>\n\n                    <div class=\"form-group form-actions\">\n                      <button type=\"submit\" (click)=\"submit(i, {name: members[2].name, email: members[2].email, id: 2})\" class=\"btn btn-sm btn-success\">Submit</button>\n                    </div>\n                  </form>\n                </div>\n              </div>\n            </div>\n\n          </div>\n        </div>\n        <!--/col-->\n      </div>\n\n\n    </div>\n  </div>\n\n</main>\n\n<app-asidemenu></app-asidemenu>\n\n<app-footer></app-footer>\n"

/***/ }

},[1159]);
//# sourceMappingURL=main.bundle.map