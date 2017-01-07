webpackJsonp([0,4],{

/***/ 1117:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 1117;


/***/ },

/***/ 1118:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(509);


/***/ },

/***/ 257:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__firebase_service__ = __webpack_require__(55);
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
        console.log('length: ' + this.venues.length);
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
            console.log('timeDiff: ' + timeDiff);
            if (timeDiff / daymil <= 7) {
                count[venue] += 1;
                // Check for entrance due to allowed by group membership
                if (allowedBy.split(' ')[0] == 'Group') {
                    console.log('Allowed by ' + allowedBy.split(' ')[1]);
                }
            }
        }
        console.log(count);
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

/***/ 403:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_statistics_service__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__(477);
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
            template: __webpack_require__(845),
            styles: [__webpack_require__(841)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_statistics_service__["a" /* StatisticsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_statistics_service__["a" /* StatisticsService */]) === 'function' && _b) || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/psilv/PycharmProjects/AutonomousDoorman/webserver/src/home.component.js.map

/***/ },

/***/ 404:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(72);
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
            template: __webpack_require__(851),
            styles: [__webpack_require__(842)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _b) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/psilv/PycharmProjects/AutonomousDoorman/webserver/src/login.component.js.map

/***/ },

/***/ 405:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__ = __webpack_require__(55);
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
        }
        else {
            console.log('Error creating Venue');
        }
    };
    NewVenueComponent.prototype.reset = function () {
        this.venue.name = "";
        for (var i = 0; i < this.groups.length; i++) {
            this.groups[i].name = "";
        }
    };
    NewVenueComponent.prototype.ngOnInit = function () {
    };
    NewVenueComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-new-venue',
            template: __webpack_require__(852),
            styles: [__webpack_require__(836)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */]) === 'function' && _a) || Object])
    ], NewVenueComponent);
    return NewVenueComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/psilv/PycharmProjects/AutonomousDoorman/webserver/src/new-venue.component.js.map

/***/ },

/***/ 406:
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
            template: __webpack_require__(853),
            styles: [__webpack_require__(837)]
        }), 
        __metadata('design:paramtypes', [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());
//# sourceMappingURL=C:/Users/psilv/PycharmProjects/AutonomousDoorman/webserver/src/not-found.component.js.map

/***/ },

/***/ 407:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(72);
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
            template: __webpack_require__(854),
            styles: [__webpack_require__(838)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _b) || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/psilv/PycharmProjects/AutonomousDoorman/webserver/src/register.component.js.map

/***/ },

/***/ 408:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
    function TestComponent() {
        this.disabled = false;
        this.brandPrimary = '#20a8d8';
        this.brandSuccess = '#4dbd74';
        this.brandInfo = '#63c2de';
        this.brandWarning = '#f8cb00';
        this.brandDanger = '#f86c6b';
        // dropdown buttons
        this.status = { isopen: false };
        // lineChart1
        this.lineChart1Data = [
            {
                data: [65, 59, 84, 84, 51, 55, 40],
                label: 'Series A'
            }
        ];
        this.lineChart1Labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.lineChart1Options = {
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                        gridLines: {
                            color: 'transparent',
                            zeroLineColor: 'transparent'
                        },
                        ticks: {
                            fontSize: 2,
                            fontColor: 'transparent',
                        }
                    }],
                yAxes: [{
                        display: false,
                        ticks: {
                            display: false,
                            min: 40 - 5,
                            max: 84 + 5,
                        }
                    }],
            },
            elements: {
                line: {
                    borderWidth: 1
                },
                point: {
                    radius: 4,
                    hitRadius: 10,
                    hoverRadius: 4,
                },
            },
            legend: {
                display: false
            }
        };
        this.lineChart1Colours = [
            {
                backgroundColor: this.brandPrimary,
                borderColor: 'rgba(255,255,255,.55)'
            }
        ];
        this.lineChart1Legend = false;
        this.lineChart1Type = 'line';
        // lineChart2
        this.lineChart2Data = [
            {
                data: [1, 18, 9, 17, 34, 22, 11],
                label: 'Series A'
            }
        ];
        this.lineChart2Labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.lineChart2Options = {
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                        gridLines: {
                            color: 'transparent',
                            zeroLineColor: 'transparent'
                        },
                        ticks: {
                            fontSize: 2,
                            fontColor: 'transparent',
                        }
                    }],
                yAxes: [{
                        display: false,
                        ticks: {
                            display: false,
                            min: 1 - 5,
                            max: 34 + 5,
                        }
                    }],
            },
            elements: {
                line: {
                    tension: 0.00001,
                    borderWidth: 1
                },
                point: {
                    radius: 4,
                    hitRadius: 10,
                    hoverRadius: 4,
                },
            },
            legend: {
                display: false
            }
        };
        this.lineChart2Colours = [
            {
                backgroundColor: this.brandInfo,
                borderColor: 'rgba(255,255,255,.55)'
            }
        ];
        this.lineChart2Legend = false;
        this.lineChart2Type = 'line';
        // lineChart3
        this.lineChart3Data = [
            {
                data: [78, 81, 80, 45, 34, 12, 40],
                label: 'Series A'
            }
        ];
        this.lineChart3Labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.lineChart3Options = {
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                        display: false
                    }],
                yAxes: [{
                        display: false
                    }]
            },
            elements: {
                line: {
                    borderWidth: 2
                },
                point: {
                    radius: 0,
                    hitRadius: 10,
                    hoverRadius: 4,
                },
            },
            legend: {
                display: false
            }
        };
        this.lineChart3Colours = [
            {
                backgroundColor: 'rgba(255,255,255,.2)',
                borderColor: 'rgba(255,255,255,.55)',
            }
        ];
        this.lineChart3Legend = false;
        this.lineChart3Type = 'line';
        // barChart1
        this.barChart1Data = [
            {
                data: [78, 81, 80, 45, 34, 12, 40, 78, 81, 80, 45, 34, 12, 40, 12, 40],
                label: 'Series A'
            }
        ];
        this.barChart1Labels = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16'];
        this.barChart1Options = {
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                        display: false,
                        barPercentage: 0.6,
                    }],
                yAxes: [{
                        display: false
                    }]
            },
            legend: {
                display: false
            }
        };
        this.barChart1Colours = [
            {
                backgroundColor: 'rgba(255,255,255,.3)',
                borderWidth: 0
            }
        ];
        this.barChart1Legend = false;
        this.barChart1Type = 'bar';
        this.mainChartElements = 27;
        this.mainChartData1 = [];
        this.mainChartData2 = [];
        this.mainChartData3 = [];
        this.mainChartData = [
            {
                data: this.mainChartData1,
                label: 'Current'
            },
            {
                data: this.mainChartData2,
                label: 'Previous'
            },
            {
                data: this.mainChartData3,
                label: 'BEP'
            }
        ];
        this.mainChartLabels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Thursday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        this.mainChartOptions = {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                        gridLines: {
                            drawOnChartArea: false,
                        },
                        ticks: {
                            callback: function (value) {
                                return value.charAt(0);
                            }
                        }
                    }],
                yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            maxTicksLimit: 5,
                            stepSize: Math.ceil(250 / 5),
                            max: 250
                        }
                    }]
            },
            elements: {
                line: {
                    borderWidth: 2
                },
                point: {
                    radius: 0,
                    hitRadius: 10,
                    hoverRadius: 4,
                    hoverBorderWidth: 3,
                }
            },
            legend: {
                display: false
            }
        };
        this.mainChartColours = [
            {
                backgroundColor: this.convertHex(this.brandInfo, 10),
                borderColor: this.brandInfo,
                pointHoverBackgroundColor: '#fff'
            },
            {
                backgroundColor: 'transparent',
                borderColor: this.brandSuccess,
                pointHoverBackgroundColor: '#fff'
            },
            {
                backgroundColor: 'transparent',
                borderColor: this.brandDanger,
                pointHoverBackgroundColor: '#fff',
                borderWidth: 1,
                borderDash: [8, 5]
            }
        ];
        this.mainChartLegend = false;
        this.mainChartType = 'line';
        // social box charts
        this.socialChartData1 = [
            {
                data: [65, 59, 84, 84, 51, 55, 40],
                label: 'Facebook'
            }
        ];
        this.socialChartData2 = [
            {
                data: [1, 13, 9, 17, 34, 41, 38],
                label: 'Twitter'
            }
        ];
        this.socialChartData3 = [
            {
                data: [78, 81, 80, 45, 34, 12, 40],
                label: 'LinkedIn'
            }
        ];
        this.socialChartData4 = [
            {
                data: [35, 23, 56, 22, 97, 23, 64],
                label: 'Google+'
            }
        ];
        this.socialChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.socialChartOptions = {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                        display: false,
                    }],
                yAxes: [{
                        display: false,
                    }]
            },
            elements: {
                line: {
                    borderWidth: 2
                },
                point: {
                    radius: 0,
                    hitRadius: 10,
                    hoverRadius: 4,
                    hoverBorderWidth: 3,
                }
            },
            legend: {
                display: false
            }
        };
        this.socialChartColours = [
            {
                backgroundColor: 'rgba(255,255,255,.1)',
                borderColor: 'rgba(255,255,255,.55)',
                pointHoverBackgroundColor: '#fff'
            }
        ];
        this.socialChartLegend = false;
        this.socialChartType = 'line';
        // sparkline charts
        this.sparklineChartData1 = [
            {
                data: [35, 23, 56, 22, 97, 23, 64],
                label: 'Clients'
            }
        ];
        this.sparklineChartData2 = [
            {
                data: [65, 59, 84, 84, 51, 55, 40],
                label: 'Clients'
            }
        ];
        this.sparklineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.sparklineChartOptions = {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                        display: false,
                    }],
                yAxes: [{
                        display: false,
                    }]
            },
            elements: {
                line: {
                    borderWidth: 2
                },
                point: {
                    radius: 0,
                    hitRadius: 10,
                    hoverRadius: 4,
                    hoverBorderWidth: 3,
                }
            },
            legend: {
                display: false
            }
        };
        this.sparklineChartDefault = [
            {
                backgroundColor: 'transparent',
                borderColor: '#d1d4d7',
            }
        ];
        this.sparklineChartPrimary = [
            {
                backgroundColor: 'transparent',
                borderColor: this.brandPrimary,
            }
        ];
        this.sparklineChartInfo = [
            {
                backgroundColor: 'transparent',
                borderColor: this.brandInfo,
            }
        ];
        this.sparklineChartDanger = [
            {
                backgroundColor: 'transparent',
                borderColor: this.brandDanger,
            }
        ];
        this.sparklineChartWarning = [
            {
                backgroundColor: 'transparent',
                borderColor: this.brandWarning,
            }
        ];
        this.sparklineChartSuccess = [
            {
                backgroundColor: 'transparent',
                borderColor: this.brandSuccess,
            }
        ];
        this.sparklineChartLegend = false;
        this.sparklineChartType = 'line';
    }
    TestComponent.prototype.toggled = function (open) {
        console.log('Dropdown is now: ', open);
    };
    TestComponent.prototype.toggleDropdown = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        this.status.isopen = !this.status.isopen;
    };
    //convert Hex to RGBA
    TestComponent.prototype.convertHex = function (hex, opacity) {
        hex = hex.replace('#', '');
        var r = parseInt(hex.substring(0, 2), 16);
        var g = parseInt(hex.substring(2, 4), 16);
        var b = parseInt(hex.substring(4, 6), 16);
        var rgba = 'rgba(' + r + ',' + g + ',' + b + ',' + opacity / 100 + ')';
        return rgba;
    };
    // events
    TestComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    TestComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    // mainChart
    TestComponent.prototype.random = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    TestComponent.prototype.ngOnInit = function () {
        //generate random values for mainChart
        for (var i = 0; i <= this.mainChartElements; i++) {
            this.mainChartData1.push(this.random(50, 200));
            this.mainChartData2.push(this.random(80, 100));
            this.mainChartData3.push(65);
        }
    };
    TestComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-test',
            template: __webpack_require__(855),
            styles: [__webpack_require__(843)]
        }), 
        __metadata('design:paramtypes', [])
    ], TestComponent);
    return TestComponent;
}());
//# sourceMappingURL=C:/Users/psilv/PycharmProjects/AutonomousDoorman/webserver/src/test.component.js.map

/***/ },

/***/ 409:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(72);
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
    function VenueDetailComponent(route) {
        this.route = route;
    }
    VenueDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.venue = params['id'];
            console.log('venue name: ' + _this.venue);
        });
    };
    VenueDetailComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-venue-detail',
            template: __webpack_require__(856),
            styles: [__webpack_require__(839)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object])
    ], VenueDetailComponent);
    return VenueDetailComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/psilv/PycharmProjects/AutonomousDoorman/webserver/src/venue-detail.component.js.map

/***/ },

/***/ 410:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_firebase_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2__ = __webpack_require__(180);
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
    function AuthGuard(auth, fireService, router) {
        this.auth = auth;
        this.fireService = fireService;
        this.router = router;
    }
    AuthGuard.prototype.canLoad = function (route) {
        console.log('can load');
        return true;
    };
    ;
    AuthGuard.prototype.canActivateChild = function (route, state) {
        var _this = this;
        return this.fireService.getAuthenticated().map(function (user) {
            console.log('child');
            console.log(user ? true : false);
            if (!user) {
                _this.router.navigate(['login']);
            }
            return user ? true : false;
        });
    };
    ;
    AuthGuard.prototype.canActivate = function (route, state) {
        // return this.auth
        //   .take(1)
        //   .map((authState: FirebaseAuthState) => !!authState)
        //   .do(authenticated => {
        //     if (!authenticated) this.router.navigate(['/login']);
        //   });
        var _this = this;
        return this.fireService.getAuthenticated().map(function (user) {
            console.log(user ? true : false);
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
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_angularfire2__["c" /* FirebaseAuth */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4_angularfire2__["c" /* FirebaseAuth */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__app_services_firebase_service__["a" /* FirebaseService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__app_services_firebase_service__["a" /* FirebaseService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */]) === 'function' && _c) || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/psilv/PycharmProjects/AutonomousDoorman/webserver/src/auth.guard.js.map

/***/ },

/***/ 508:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 508;


/***/ },

/***/ 509:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(637);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(598);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(635);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(628);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/psilv/PycharmProjects/AutonomousDoorman/webserver/src/main.js.map

/***/ },

/***/ 55:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(72);
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
        auth.subscribe(function (user) {
            _this.user = user;
            _this._isLoggedSubject.next(user != null);
            if (user != null) {
                _this.userInfo.displayName = _this.user.auth.displayName;
                _this.userInfo.email = _this.user.auth.email;
                _this.userInfo.uid = _this.user.auth.uid;
                _this.userInfo.photoURL = _this.user.auth.photoURL;
            }
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
    FirebaseService.prototype.findAllLessons = function () {
        return this.db.list('test');
    };
    FirebaseService.prototype.findVenues = function () {
        return this.db.list(this.userInfo.uid + '/Venues');
    };
    FirebaseService.prototype.findLogs = function () {
        return this.db.list(this.userInfo.uid + '/Logs');
    };
    FirebaseService.prototype.createMember = function (venue, groups, memberInfo) {
        var data = {
            Members: {},
        };
        data.Members[memberInfo.id] = {
            Groups: {},
            Data: {},
        };
        for (var i = 0; i < groups.length; i++) {
            data.Members[memberInfo.id]['Groups']['g' + (i + 1)] = 'TestGroup';
            data.Members[memberInfo.id]['Data'] = {
                email: memberInfo.email,
                name: memberInfo.name,
            };
        }
        this.db.object(this.userInfo.uid + '/Venues/' + venue).update(data);
    };
    FirebaseService.prototype.createvenue = function (venue, groups) {
        var data = {
            Groups: {},
        };
        for (var i = 0; i < groups.length; i++) {
            data.Groups[groups[i].name] = {
                Members: {
                    1: 'true',
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
        };
        this.createMember(venue, groups, memberInfo);
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

/***/ 627:
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
            template: __webpack_require__(844),
            styles: [__webpack_require__(840)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=C:/Users/psilv/PycharmProjects/AutonomousDoorman/webserver/src/app.component.js.map

/***/ },

/***/ 628:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(594);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap_ng2_bootstrap__ = __webpack_require__(825);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap_ng2_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap_ng2_bootstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_charts_ng2_charts__ = __webpack_require__(827);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_charts_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_charts_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(627);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__environments_firebase_config__ = __webpack_require__(636);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routing__ = __webpack_require__(629);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_login_login_component__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_auth_guard__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_firebase_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_test_test_component__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__shared_nav_dropdown_directive__ = __webpack_require__(640);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__shared_sidebar_directive__ = __webpack_require__(641);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__shared_aside_directive__ = __webpack_require__(638);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__shared_breadcrumb_component__ = __webpack_require__(639);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_layout_header_header_component__ = __webpack_require__(633);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_layout_sidebar_sidebar_component__ = __webpack_require__(634);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_layout_footer_footer_component__ = __webpack_require__(632);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_layout_asidemenu_asidemenu_component__ = __webpack_require__(630);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_layout_breadcrumb_breadcrumb_component__ = __webpack_require__(631);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_register_register_component__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_venue_detail_venue_detail_component__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_not_found_not_found_component__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__services_statistics_service__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_new_venue_new_venue_component__ = __webpack_require__(405);
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
    provider: __WEBPACK_IMPORTED_MODULE_8_angularfire2__["d" /* AuthProviders */].Password,
    method: __WEBPACK_IMPORTED_MODULE_8_angularfire2__["e" /* AuthMethods */].Password,
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_15__shared_nav_dropdown_directive__["a" /* NAV_DROPDOWN_DIRECTIVES */],
                __WEBPACK_IMPORTED_MODULE_18__shared_breadcrumb_component__["a" /* BreadcrumbsComponent */],
                __WEBPACK_IMPORTED_MODULE_16__shared_sidebar_directive__["a" /* SIDEBAR_TOGGLE_DIRECTIVES */],
                __WEBPACK_IMPORTED_MODULE_17__shared_aside_directive__["a" /* AsideToggleDirective */],
                __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_test_test_component__["a" /* TestComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_layout_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_layout_sidebar_sidebar_component__["a" /* SidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_layout_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_layout_asidemenu_asidemenu_component__["a" /* AsidemenuComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_layout_breadcrumb_breadcrumb_component__["a" /* BreadcrumbComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_venue_detail_venue_detail_component__["a" /* VenueDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_not_found_not_found_component__["a" /* NotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_28__components_new_venue_new_venue_component__["a" /* NewVenueComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_8_angularfire2__["f" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_7__environments_firebase_config__["a" /* firebaseConfig */], myFirebaseAuthConfig),
                __WEBPACK_IMPORTED_MODULE_9__app_routing__["a" /* routing */],
                __WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap_ng2_bootstrap__["Ng2BootstrapModule"],
                __WEBPACK_IMPORTED_MODULE_5_ng2_charts_ng2_charts__["ChartsModule"],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_12__shared_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_13__services_firebase_service__["a" /* FirebaseService */], __WEBPACK_IMPORTED_MODULE_27__services_statistics_service__["a" /* StatisticsService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Users/psilv/PycharmProjects/AutonomousDoorman/webserver/src/app.module.js.map

/***/ },

/***/ 629:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_home_home_component__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_login_login_component__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_test_test_component__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_auth_guard__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_register_register_component__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_venue_detail_venue_detail_component__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_not_found_not_found_component__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_new_venue_new_venue_component__ = __webpack_require__(405);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return routing; });









var appRoutes = [
    {
        path: '',
        redirectTo: '/dashboard', pathMatch: 'full',
    },
    {
        path: 'dashboard',
        data: {
            title: 'Home'
        },
        canActivate: [__WEBPACK_IMPORTED_MODULE_4__shared_auth_guard__["a" /* AuthGuard */]],
        children: [
            {
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_1__components_home_home_component__["a" /* HomeComponent */]
            },
            {
                data: {
                    title: 'New Venue'
                },
                path: 'newvenue',
                component: __WEBPACK_IMPORTED_MODULE_8__components_new_venue_new_venue_component__["a" /* NewVenueComponent */],
            }
        ],
    },
    {
        data: {
            title: 'New Venue'
        },
        canActivate: [__WEBPACK_IMPORTED_MODULE_4__shared_auth_guard__["a" /* AuthGuard */]],
        path: 'newvenue',
        component: __WEBPACK_IMPORTED_MODULE_8__components_new_venue_new_venue_component__["a" /* NewVenueComponent */],
    },
    {
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

/***/ 630:
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
            template: __webpack_require__(846),
            styles: [__webpack_require__(831)]
        }), 
        __metadata('design:paramtypes', [])
    ], AsidemenuComponent);
    return AsidemenuComponent;
}());
//# sourceMappingURL=C:/Users/psilv/PycharmProjects/AutonomousDoorman/webserver/src/asidemenu.component.js.map

/***/ },

/***/ 631:
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
            template: __webpack_require__(847),
            styles: [__webpack_require__(832)]
        }), 
        __metadata('design:paramtypes', [])
    ], BreadcrumbComponent);
    return BreadcrumbComponent;
}());
//# sourceMappingURL=C:/Users/psilv/PycharmProjects/AutonomousDoorman/webserver/src/breadcrumb.component.js.map

/***/ },

/***/ 632:
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
            template: __webpack_require__(848),
            styles: [__webpack_require__(833)]
        }), 
        __metadata('design:paramtypes', [])
    ], FooterComponent);
    return FooterComponent;
}());
//# sourceMappingURL=C:/Users/psilv/PycharmProjects/AutonomousDoorman/webserver/src/footer.component.js.map

/***/ },

/***/ 633:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_statistics_service__ = __webpack_require__(257);
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
        console.log(this.userInfo);
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
            template: __webpack_require__(849),
            styles: [__webpack_require__(834)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_statistics_service__["a" /* StatisticsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_statistics_service__["a" /* StatisticsService */]) === 'function' && _b) || Object])
    ], HeaderComponent);
    return HeaderComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/psilv/PycharmProjects/AutonomousDoorman/webserver/src/header.component.js.map

/***/ },

/***/ 634:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__ = __webpack_require__(55);
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
            console.log(_this.venues);
            _this.venuesKeys = [];
            for (var i = 0; i < _this.venues.length; i++) {
                _this.venuesKeys.push(_this.venues[i].$key);
            }
        });
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(850),
            styles: [__webpack_require__(835)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */]) === 'function' && _a) || Object])
    ], SidebarComponent);
    return SidebarComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/psilv/PycharmProjects/AutonomousDoorman/webserver/src/sidebar.component.js.map

/***/ },

/***/ 635:
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

/***/ 636:
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

/***/ 637:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(664);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(657);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(653);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(659);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(658);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(656);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(655);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(663);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(652);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(651);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(661);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(654);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(662);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(660);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(665);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(1116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=C:/Users/psilv/PycharmProjects/AutonomousDoorman/webserver/src/polyfills.js.map

/***/ },

/***/ 638:
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

/***/ 639:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__ = __webpack_require__(306);
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
            var currentRoute = _this.route.root, url = '';
            do {
                var childrenRoutes = currentRoute.children;
                currentRoute = null;
                childrenRoutes.forEach(function (route) {
                    if (route.outlet === 'primary') {
                        var routeSnapshot = route.snapshot;
                        console.log(route.snapshot.data);
                        url += '/' + routeSnapshot.url.map(function (segment) { return segment.path; }).join('/');
                        _this.breadcrumbs.push({
                            label: route.snapshot.data,
                            url: url
                        });
                        currentRoute = route;
                    }
                });
            } while (currentRoute);
        });
    };
    BreadcrumbsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'breadcrumbs',
            template: "\n    <template ngFor let-breadcrumb [ngForOf]=\"breadcrumbs\" let-last = last>\n        <li class=\"breadcrumb-item\" *ngIf=\"breadcrumb.label.title\" [ngClass]=\"{active: last}\">\n        <a *ngIf=\"!last\" [routerLink]=\"breadcrumb.url\">{{breadcrumb.label.title}}</a>\n        <span *ngIf=\"last\" [routerLink]=\"breadcrumb.url\">{{breadcrumb.label.title}}</span>\n    </template>"
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _b) || Object])
    ], BreadcrumbsComponent);
    return BreadcrumbsComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/psilv/PycharmProjects/AutonomousDoorman/webserver/src/breadcrumb.component.js.map

/***/ },

/***/ 640:
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

/***/ 641:
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

/***/ 831:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 832:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 833:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 834:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 835:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 836:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 837:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 838:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 839:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 840:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 841:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 842:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 843:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 844:
/***/ function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ },

/***/ 845:
/***/ function(module, exports) {

module.exports = "<app-header></app-header>\n\n\n<app-sidebar></app-sidebar>\n\n<!-- Main content -->\n<main class=\"main\">\n  <app-breadcrumb></app-breadcrumb>\n\n  <div class=\"container-fluid\">\n    <div class=\"animated fadeIn\">\n\n      <div class=\"card-columns col-2\">\n        <div class=\"card\">\n          <div class=\"card-header\">\n            Accessed this week per avenue\n          </div>\n          <div class=\"card-block\">\n            <div class=\"chart-wrapper\">\n              <canvas baseChart class=\"chart\" [datasets]=\"barChartData\" [labels]=\"barChartLabels\" [options]=\"barChartOptions\" [legend]=\"barChartLegend\" [chartType]=\"barChartType\" (chartClick)=\"chartClicked($event)\"></canvas>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <!--/.row-->\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <div class=\"card\">\n            <div class=\"card-header\">\n              Logs\n            </div>\n            <div class=\"card-block\">\n              <!--/.row-->\n              <br>\n              <table class=\"table table-hover table-outline mb-0 hidden-sm-down\">\n                <thead class=\"thead-default\">\n                <tr>\n                  <th class=\"text-xs-center\"><i class=\"icon-people\"></i>\n                  </th>\n                  <th>User</th>\n                  <th>Allowed By</th>\n                  <th>Venue</th>\n                  <th>Activity</th>\n                </tr>\n                </thead>\n                <tbody>\n\n\n                <tr *ngFor=\"let log of logs\">\n                  <td class=\"text-xs-center\">\n                    <div class=\"avatar\">\n                      <img src=\"assets/img/avatars/1.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n                      <span class=\"avatar-status tag-success\"></span>\n                    </div>\n                  </td>\n                  <td>\n                    <div>{{log.name}}</div>\n                    <div class=\"small text-muted\">\n                      Registered: Jan 1, 2015\n                    </div>\n                  </td>\n                  <td>\n                    <div class=\"clearfix\">\n                      <div class=\"float-xs-left\">\n                        {{log.allowedBy}}\n                      </div>\n                    </div>\n                  </td>\n                  <td>\n                    <div class=\"clearfix\">\n                      <div class=\"float-xs-left\">\n                        {{log.venue}}\n                      </div>\n                    </div>\n                  </td>\n                  <td>\n                    <div class=\"small text-muted\">Last login</div>\n                    {{log.date.day}}/{{log.date.month}}/{{log.date.year}} at {{log.date.time}}\n                  </td>\n                </tr>\n                </tbody>\n              </table>\n            </div>\n          </div>\n        </div>\n        <!--/.col-->\n      </div>\n      <!--/.row-->\n    </div>\n\n  </div>\n\n</main>\n\n<app-asidemenu></app-asidemenu>\n\n<app-footer></app-footer>\n"

/***/ },

/***/ 846:
/***/ function(module, exports) {

module.exports = "<aside class=\"aside-menu\">\n  <tabset>\n    <tab>\n      <template tabHeading><i class=\"icon-list\"></i>\n      </template>\n      <div class=\"callout m-0 py-h text-muted text-xs-center bg-faded text-uppercase\">\n        <small><b>Today</b>\n        </small>\n      </div>\n      <hr class=\"transparent mx-1 my-0\">\n      <div class=\"callout callout-warning m-0 py-1\">\n        <div class=\"avatar float-xs-right\">\n          <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n        </div>\n        <div>Meeting with\n          <strong>Lucas</strong>\n        </div>\n        <small class=\"text-muted mr-1\"><i class=\"icon-calendar\"></i>&nbsp; 1 - 3pm</small>\n        <small class=\"text-muted\"><i class=\"icon-location-pin\"></i>&nbsp; Palo Alto, CA</small>\n      </div>\n      <hr class=\"mx-1 my-0\">\n      <div class=\"callout callout-info m-0 py-1\">\n        <div class=\"avatar float-xs-right\">\n          <img src=\"assets/img/avatars/4.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n        </div>\n        <div>Skype with\n          <strong>Megan</strong>\n        </div>\n        <small class=\"text-muted mr-1\"><i class=\"icon-calendar\"></i>&nbsp; 4 - 5pm</small>\n        <small class=\"text-muted\"><i class=\"icon-social-skype\"></i>&nbsp; On-line</small>\n      </div>\n      <hr class=\"transparent mx-1 my-0\">\n      <div class=\"callout m-0 py-h text-muted text-xs-center bg-faded text-uppercase\">\n        <small><b>Tomorrow</b>\n        </small>\n      </div>\n      <hr class=\"transparent mx-1 my-0\">\n      <div class=\"callout callout-danger m-0 py-1\">\n        <div>New UI Project -\n          <strong>deadline</strong>\n        </div>\n        <small class=\"text-muted mr-1\"><i class=\"icon-calendar\"></i>&nbsp; 10 - 11pm</small>\n        <small class=\"text-muted\"><i class=\"icon-home\"></i>&nbsp; creativeLabs HQ</small>\n        <div class=\"avatars-stack mt-h\">\n          <div class=\"avatar avatar-xs\">\n            <img src=\"assets/img/avatars/2.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n          </div>\n          <div class=\"avatar avatar-xs\">\n            <img src=\"assets/img/avatars/3.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n          </div>\n          <div class=\"avatar avatar-xs\">\n            <img src=\"assets/img/avatars/4.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n          </div>\n          <div class=\"avatar avatar-xs\">\n            <img src=\"assets/img/avatars/5.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n          </div>\n          <div class=\"avatar avatar-xs\">\n            <img src=\"assets/img/avatars/6.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n          </div>\n        </div>\n      </div>\n      <hr class=\"mx-1 my-0\">\n      <div class=\"callout callout-success m-0 py-1\">\n        <div>\n          <strong>#10 Startups.Garden</strong>Meetup</div>\n        <small class=\"text-muted mr-1\"><i class=\"icon-calendar\"></i>&nbsp; 1 - 3pm</small>\n        <small class=\"text-muted\"><i class=\"icon-location-pin\"></i>&nbsp; Palo Alto, CA</small>\n      </div>\n      <hr class=\"mx-1 my-0\">\n      <div class=\"callout callout-primary m-0 py-1\">\n        <div>\n          <strong>Team meeting</strong>\n        </div>\n        <small class=\"text-muted mr-1\"><i class=\"icon-calendar\"></i>&nbsp; 4 - 6pm</small>\n        <small class=\"text-muted\"><i class=\"icon-home\"></i>&nbsp; creativeLabs HQ</small>\n        <div class=\"avatars-stack mt-h\">\n          <div class=\"avatar avatar-xs\">\n            <img src=\"assets/img/avatars/2.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n          </div>\n          <div class=\"avatar avatar-xs\">\n            <img src=\"assets/img/avatars/3.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n          </div>\n          <div class=\"avatar avatar-xs\">\n            <img src=\"assets/img/avatars/4.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n          </div>\n          <div class=\"avatar avatar-xs\">\n            <img src=\"assets/img/avatars/5.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n          </div>\n          <div class=\"avatar avatar-xs\">\n            <img src=\"assets/img/avatars/6.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n          </div>\n          <div class=\"avatar avatar-xs\">\n            <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n          </div>\n          <div class=\"avatar avatar-xs\">\n            <img src=\"assets/img/avatars/8.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n          </div>\n        </div>\n      </div>\n      <hr class=\"mx-1 my-0\">\n    </tab>\n    <tab>\n      <template tabHeading><i class=\"icon-speech\"></i>\n      </template>\n      <div class=\"p-1\">\n        <div class=\"message\">\n          <div class=\"py-1 pb-3 mr-1 float-xs-left\">\n            <div class=\"avatar\">\n              <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n              <span class=\"avatar-status tag-success\"></span>\n            </div>\n          </div>\n          <div>\n            <small class=\"text-muted\">Lukasz Holeczek</small>\n            <small class=\"text-muted float-xs-right mt-q\">1:52 PM</small>\n          </div>\n          <div class=\"text-truncate font-weight-bold\">Lorem ipsum dolor sit amet</div>\n          <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>\n        </div>\n        <hr>\n        <div class=\"message\">\n          <div class=\"py-1 pb-3 mr-1 float-xs-left\">\n            <div class=\"avatar\">\n              <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n              <span class=\"avatar-status tag-success\"></span>\n            </div>\n          </div>\n          <div>\n            <small class=\"text-muted\">Lukasz Holeczek</small>\n            <small class=\"text-muted float-xs-right mt-q\">1:52 PM</small>\n          </div>\n          <div class=\"text-truncate font-weight-bold\">Lorem ipsum dolor sit amet</div>\n          <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>\n        </div>\n        <hr>\n        <div class=\"message\">\n          <div class=\"py-1 pb-3 mr-1 float-xs-left\">\n            <div class=\"avatar\">\n              <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n              <span class=\"avatar-status tag-success\"></span>\n            </div>\n          </div>\n          <div>\n            <small class=\"text-muted\">Lukasz Holeczek</small>\n            <small class=\"text-muted float-xs-right mt-q\">1:52 PM</small>\n          </div>\n          <div class=\"text-truncate font-weight-bold\">Lorem ipsum dolor sit amet</div>\n          <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>\n        </div>\n        <hr>\n        <div class=\"message\">\n          <div class=\"py-1 pb-3 mr-1 float-xs-left\">\n            <div class=\"avatar\">\n              <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n              <span class=\"avatar-status tag-success\"></span>\n            </div>\n          </div>\n          <div>\n            <small class=\"text-muted\">Lukasz Holeczek</small>\n            <small class=\"text-muted float-xs-right mt-q\">1:52 PM</small>\n          </div>\n          <div class=\"text-truncate font-weight-bold\">Lorem ipsum dolor sit amet</div>\n          <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>\n        </div>\n        <hr>\n        <div class=\"message\">\n          <div class=\"py-1 pb-3 mr-1 float-xs-left\">\n            <div class=\"avatar\">\n              <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n              <span class=\"avatar-status tag-success\"></span>\n            </div>\n          </div>\n          <div>\n            <small class=\"text-muted\">Lukasz Holeczek</small>\n            <small class=\"text-muted float-xs-right mt-q\">1:52 PM</small>\n          </div>\n          <div class=\"text-truncate font-weight-bold\">Lorem ipsum dolor sit amet</div>\n          <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>\n        </div>\n      </div>\n    </tab>\n    <tab>\n      <template tabHeading><i class=\"icon-settings\"></i>\n      </template>\n      <div class=\"p-1\">\n        <h6>Settings</h6>\n\n        <div class=\"aside-options\">\n          <div class=\"clearfix mt-2\">\n            <small><b>Option 1</b>\n            </small>\n            <label class=\"switch switch-text switch-pill switch-success switch-sm float-xs-right\">\n              <input type=\"checkbox\" class=\"switch-input\" checked>\n              <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\n              <span class=\"switch-handle\"></span>\n            </label>\n          </div>\n          <div>\n            <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</small>\n          </div>\n        </div>\n\n        <div class=\"aside-options\">\n          <div class=\"clearfix mt-1\">\n            <small><b>Option 2</b>\n            </small>\n            <label class=\"switch switch-text switch-pill switch-success switch-sm float-xs-right\">\n              <input type=\"checkbox\" class=\"switch-input\">\n              <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\n              <span class=\"switch-handle\"></span>\n            </label>\n          </div>\n          <div>\n            <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</small>\n          </div>\n        </div>\n\n        <div class=\"aside-options\">\n          <div class=\"clearfix mt-1\">\n            <small><b>Option 3</b>\n            </small>\n            <label class=\"switch switch-text switch-pill switch-success switch-sm float-xs-right\">\n              <input type=\"checkbox\" class=\"switch-input\">\n              <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\n              <span class=\"switch-handle\"></span>\n            </label>\n          </div>\n        </div>\n\n        <div class=\"aside-options\">\n          <div class=\"clearfix mt-1\">\n            <small><b>Option 4</b>\n            </small>\n            <label class=\"switch switch-text switch-pill switch-success switch-sm float-xs-right\">\n              <input type=\"checkbox\" class=\"switch-input\" checked>\n              <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\n              <span class=\"switch-handle\"></span>\n            </label>\n          </div>\n        </div>\n\n        <hr>\n        <h6>System Utilization</h6>\n\n        <div class=\"text-uppercase mb-q mt-2\">\n          <small><b>CPU Usage</b>\n          </small>\n        </div>\n        <progress class=\"progress progress-xs progress-info m-0\" value=\"25\" max=\"100\">25%</progress>\n        <small class=\"text-muted\">348 Processes. 1/4 Cores.</small>\n\n        <div class=\"text-uppercase mb-q mt-h\">\n          <small><b>Memory Usage</b>\n          </small>\n        </div>\n        <progress class=\"progress progress-xs progress-warning m-0\" value=\"70\" max=\"100\">70%</progress>\n        <small class=\"text-muted\">11444GB/16384MB</small>\n\n        <div class=\"text-uppercase mb-q mt-h\">\n          <small><b>SSD 1 Usage</b>\n          </small>\n        </div>\n        <progress class=\"progress progress-xs progress-danger m-0\" value=\"95\" max=\"100\">95%</progress>\n        <small class=\"text-muted\">243GB/256GB</small>\n\n        <div class=\"text-uppercase mb-q mt-h\">\n          <small><b>SSD 2 Usage</b>\n          </small>\n        </div>\n        <progress class=\"progress progress-xs progress-success m-0\" value=\"10\" max=\"100\">10%</progress>\n        <small class=\"text-muted\">25GB/256GB</small>\n      </div>\n    </tab>\n  </tabset>\n</aside>\n"

/***/ },

/***/ 847:
/***/ function(module, exports) {

module.exports = "<!-- Breadcrumb -->\n<ol class=\"breadcrumb\">\n  <breadcrumbs></breadcrumbs>\n\n  <!-- Breadcrumb Menu-->\n  <li class=\"breadcrumb-menu\">\n    <div class=\"btn-group\" role=\"group\" aria-label=\"Button group with nested dropdown\">\n      <a class=\"btn btn-secondary\" routerLinkActive=\"active\" [routerLink]=\"['/dashboard/newvenue']\"><i class=\"fa fa-plus-square-o\"></i> &nbsp;New Venue</a>\n    </div>\n  </li>\n\n</ol>\n"

/***/ },

/***/ 848:
/***/ function(module, exports) {

module.exports = "<footer class=\"footer\">\n    <span class=\"text-left\">\n        <a href=\"http://coreui.io\">Projeto Raimundo</a> &copy; 2017\n    </span>\n  <span class=\"float-xs-right\">\n        Powered by <a href=\"http://coreui.io\">CoreUI</a>\n    </span>\n</footer>\n"

/***/ },

/***/ 849:
/***/ function(module, exports) {

module.exports = "<header class=\"navbar\">\n  <div class=\"container-fluid\">\n    <button class=\"navbar-toggler hidden-lg-up\" type=\"button\" mobile-nav-toggle>&#9776;</button>\n    <a class=\"navbar-brand\" href=\"#\"></a>\n\n    <ul class=\"nav navbar-nav float-xs-right hidden-md-down\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\"><i class=\"icon-bell\"></i><span class=\"tag tag-pill tag-danger\">5</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\"><i class=\"icon-list\"></i></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\"><i class=\"icon-location-pin\"></i></a>\n      </li>\n      <li class=\"nav-item dropdown\" dropdown (onToggle)=\"$event\">\n        <a class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\" dropdownToggle>\n          <img src=\"assets/img/avatars/6.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n          <span class=\"hidden-md-down\">{{userInfo.displayName}}</span>\n        </a>\n        <div class=\"dropdown-menu dropdown-menu-right\" dropdownMenu aria-labelledby=\"simple-dropdown\">\n\n          <div class=\"dropdown-header text-xs-center\">\n            <strong>Account</strong>\n          </div>\n\n          <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-bell-o\"></i> Updates<span class=\"tag tag-info\">42</span></a>\n          <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-envelope-o\"></i> Messages<span class=\"tag tag-success\">42</span></a>\n          <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-tasks\"></i> Tasks<span class=\"tag tag-danger\">42</span></a>\n          <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-comments\"></i> Comment<span class=\"tag tag-warning\">42</span></a>\n\n          <div class=\"dropdown-header text-xs-center\">\n            <strong>Settings</strong>\n          </div>\n\n          <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-user\"></i> Profile</a>\n          <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-wrench\"></i> Setting</a>\n          <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-usd\"></i> Payments<span class=\"tag tag-default\">42</span></a>\n          <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-file\"></i> Projects<span class=\"tag tag-primary\">42</span></a>\n          <div class=\"divider\"></div>\n          <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-shield\"></i> Lock account</a>\n          <a class=\"dropdown-item\" routerLinkActive=\"active\" [routerLink]=\"['/login']\" (click)=\"logout()\"><i class=\"fa fa-lock\"></i> Logout</a>\n        </div>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link navbar-toggler aside-toggle\" href=\"#\">&#9776;</a>\n      </li>\n    </ul>\n\n  </div>\n</header>\n"

/***/ },

/***/ 850:
/***/ function(module, exports) {

module.exports = "<div class=\"sidebar\">\n  <nav class=\"sidebar-nav\">\n    <ul class=\"nav\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/dashboard']\"><i class=\"icon-speedometer\"></i> Dashboard <span class=\"tag tag-info\">NEW</span></a>\n      </li>\n\n      <li class=\"divider\"></li>\n      <li class=\"nav-title\">\n        UI Elements\n      </li>\n      <li class=\"nav-item nav-dropdown\" routerLinkActive=\"open\">\n        <a class=\"nav-link nav-dropdown-toggle\" ><i class=\"fa fa-home\"></i> Venues</a>\n        <ul class=\"nav-dropdown-items\">\n          <li class=\"nav-item\" *ngFor=\"let venue of venuesKeys\">\n            <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/dashboard/venues/'+venue]\"><i class=\"fa fa-home\"></i>{{venue}}</a>\n          </li>\n        </ul>\n      </li>\n      <li class=\"nav-item nav-dropdown\" routerLinkActive=\"open\">\n        <a class=\"nav-link nav-dropdown-toggle\" href=\"#\"><i class=\"icon-puzzle\"></i> Components</a>\n        <ul class=\"nav-dropdown-items\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/components/buttons']\"><i class=\"icon-puzzle\"></i> Buttons</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/components/social-buttons']\"><i class=\"icon-puzzle\"></i> Social Buttons</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/components/cards']\"><i class=\"icon-puzzle\"></i> Cards</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/components/forms']\"><i class=\"icon-puzzle\"></i> Forms</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/components/switches']\"><i class=\"icon-puzzle\"></i> Switches</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/components/tables']\"><i class=\"icon-puzzle\"></i> Tables</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/components/tabs']\"><i class=\"icon-puzzle\"></i> Tabs</a>\n          </li>\n        </ul>\n      </li>\n      <li class=\"nav-item nav-dropdown\" routerLinkActive=\"open\">\n        <a class=\"nav-link nav-dropdown-toggle\" href=\"#\"><i class=\"icon-star\"></i> Icons</a>\n        <ul class=\"nav-dropdown-items\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/icons/font-awesome']\"><i class=\"icon-star\"></i> Font Awesome</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/icons/simple-line-icons']\"><i class=\"icon-star\"></i> Simple Line Icons</a>\n          </li>\n        </ul>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/widgets']\"><i class=\"icon-calculator\"></i> Widgets <span class=\"tag tag-info\">NEW</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/charts']\"><i class=\"icon-pie-chart\"></i> Charts</a>\n      </li>\n      <li class=\"divider\"></li>\n      <li class=\"nav-title\">\n        Extras\n      </li>\n      <li class=\"nav-item nav-dropdown\">\n        <a class=\"nav-link nav-dropdown-toggle\" href=\"#\"><i class=\"icon-star\"></i> Pages</a>\n        <ul class=\"nav-dropdown-items\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/pages/login']\"><i class=\"icon-star\"></i> Login</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/pages/register']\"><i class=\"icon-star\"></i> Register</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/pages/404']\"><i class=\"icon-star\"></i> Error 404</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/pages/500']\"><i class=\"icon-star\"></i> Error 500</a>\n          </li>\n        </ul>\n      </li>\n\n    </ul>\n  </nav>\n</div>\n"

/***/ },

/***/ 851:
/***/ function(module, exports) {

module.exports = "<div class=\"container d-table\">\n  <div class=\"d-100vh-va-middle\">\n    <div class=\"row\">\n      <div class=\"col-md-8 offset-md-2\">\n        <div class=\"card-group\">\n          <div class=\"card p-2\">\n            <div class=\"card-block\">\n              <h1>Login {{loggedIn | async}}</h1>\n              <p class=\"text-muted\">Sign In to your account</p>\n              <div class=\"input-group mb-1\">\n                                <span class=\"input-group-addon\"><i class=\"icon-user\"></i>\n                                </span>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Username\" [(ngModel)]=\"loginUsername\">\n              </div>\n              <div class=\"input-group mb-2\">\n                                <span class=\"input-group-addon\"><i class=\"icon-lock\"></i>\n                                </span>\n                <input type=\"password\" class=\"form-control\" placeholder=\"Password\" [(ngModel)]=\"loginPassword\">\n              </div>\n              <span style=\"color:red\">{{errorMessage}}</span>\n              <div class=\"row\">\n                <div class=\"col-xs-6\">\n                  <button type=\"button\" (click)=\"login()\" class=\"btn btn-primary px-2\">Login</button>\n                </div>\n                <div class=\"col-xs-6 text-xs-right\">\n                  <button type=\"button\" (click)=\"logout()\" class=\"btn btn-link px-0\">Forgot password?</button>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"card card-inverse card-primary py-3 \" style=\"width:44%\">\n            <div class=\"card-block text-xs-center\">\n              <div>\n                <h2>Sign up</h2>\n                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>\n                <button type=\"button\" class=\"btn btn-primary active mt-1\" (click)=\"register()\">Register Now!</button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n"

/***/ },

/***/ 852:
/***/ function(module, exports) {

module.exports = "<app-header></app-header>\n\n\n<app-sidebar></app-sidebar>\n\n<!-- Main content -->\n<main class=\"main\">\n  <app-breadcrumb></app-breadcrumb>\n\n  <div class=\"container-fluid\">\n    <div class=\"animated fadeIn\">\n      <div class=\"row\">\n        <div class=\"card\">\n          <div class=\"card-header\">\n            <strong>New Venue</strong>\n          </div>\n          <div class=\"card-block\">\n            <form #form=\"ngForm\" action=\"\" method=\"post\" enctype=\"multipart/form-data\" class=\"form-horizontal \">\n              <div class=\"form-group row\">\n                <label class=\"col-md-3 form-control-label\" for=\"text-input\">Venue Name</label>\n                <div class=\"col-md-9\">\n                  <input type=\"text\" name=\"text-input\" [(ngModel)]=\"venue.name\" class=\"form-control\" placeholder=\"venue name\">\n                  <span style=\"color: red\" class=\"help-block\">{{venue.error}}</span>\n                </div>\n              </div>\n              <br>\n\n              <div class=\"form-group row\" *ngFor=\"let group of groups; let i = index; trackBy:trackByIndex\">\n                <div class=\"card\">\n                  <div class=\"card-header\">\n                    <strong>Group {{i+1}}</strong>\n                    <div class=\"card-actions\">\n                      <a (click)=\"deleteGroup(i)\">\n                        <i class=\"fa fa-close\"></i>\n                      </a>\n                    </div>\n                  </div>\n                  <div class=\"card-block\">\n                    <label class=\"col-md-3 form-control-label\" for=\"text-input\">Name</label>\n                    <div class=\"col-md-9\">\n                      <input type=\"text\" name=\"group {{i}}\" [(ngModel)]=\"groups[i].name\" class=\"form-control\" placeholder=\"group name\">\n                      <span style=\"color: red\" class=\"help-block\">{{groups[i].error}}</span>\n                    </div>\n\n                    <br><br>\n                    <br>\n                    <label class=\"col-md-3 form-control-label\" for=\"text-input\">Start</label>\n                    <div class=\"col-md-9\">\n                      <input type=\"time\" name=\"start\" [(ngModel)]=\"groups[i].start\"/>\n                    </div>\n                    <br><br>\n                    <label class=\"col-md-3 form-control-label\" for=\"text-input\">Finish</label>\n                    <div class=\"col-md-9\">\n                      <input type=\"time\" name=\"finish\" [(ngModel)]=\"groups[i].end\"/>\n                    </div>\n                  </div>\n                </div>\n              </div>\n\n\n\n\n\n\n\n\n\n\n              <button (click)=\"addGroup()\" type=\"submit\" class=\"btn btn-sm btn-primary\"><i class=\"fa fa-plus-square-o\"></i> Add group</button>\n\n\n              <div class=\"form-group row\">\n                <div class=\"col-md-9\">\n                  <p class=\"form-control-static\">You will be added as a member of the groups.\n                    You can delete yourself of them after adding other people to the groups.</p>\n                </div>\n              </div>\n            </form>\n          </div>\n          <div class=\"card-footer\">\n            <button (click)=\"submit()\" type=\"submit\" class=\"btn btn-sm btn-primary\"><i class=\"fa fa-dot-circle-o\"></i> Submit</button>\n            <button type=\"reset\" (click)=\"reset()\" class=\"btn btn-sm btn-danger\"><i class=\"fa fa-ban\"></i> Reset</button>\n          </div>\n        </div>\n        <!--/col-->\n      </div>\n    </div>\n  </div>\n\n</main>\n\n<app-asidemenu></app-asidemenu>\n\n<app-footer></app-footer>\n"

/***/ },

/***/ 853:
/***/ function(module, exports) {

module.exports = "<div class=\"container d-table\">\n  <div class=\"d-100vh-va-middle\">\n    <div class=\"row\">\n      <div class=\"col-md-6 offset-md-3\">\n        <div class=\"clearfix\">\n          <h1 class=\"float-xs-left display-3 mr-2\">404</h1>\n          <h4 class=\"pt-1\">Oops! You're lost.</h4>\n          <p class=\"text-muted\">The page you are looking for was not found.</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ },

/***/ 854:
/***/ function(module, exports) {

module.exports = "<div class=\"container d-table\">\n  <div class=\"d-100vh-va-middle\">\n    <div class=\"row\">\n      <div class=\"col-md-6 offset-md-3\">\n        <div class=\"card mx-2\">\n          <div class=\"card-block p-2\">\n            <h1>Register</h1>\n            <p class=\"text-muted\">Create your account</p>\n            <div class=\"input-group mb-1\">\n              <span class=\"input-group-addon\"><i class=\"icon-user\"></i></span>\n              <input type=\"text\" class=\"form-control\" placeholder=\"Username\" [(ngModel)]=\"username\">\n            </div>\n\n            <div class=\"input-group mb-1\">\n              <span class=\"input-group-addon\">@</span>\n              <input type=\"text\" class=\"form-control\" placeholder=\"Email\" [(ngModel)]=\"email\">\n            </div>\n\n            <div class=\"input-group mb-1\">\n              <span class=\"input-group-addon\"><i class=\"icon-lock\"></i></span>\n              <input type=\"password\" class=\"form-control\" placeholder=\"Password\" [(ngModel)]=\"password\">\n            </div>\n\n            <div class=\"input-group mb-2\">\n              <span class=\"input-group-addon\"><i class=\"icon-lock\"></i></span>\n              <input type=\"password\" class=\"form-control\" placeholder=\"Repeat password\" [(ngModel)]=\"passwordCheck\">\n            </div>\n\n            <span style=\"color: red\">{{errorMessage}}</span>\n            <button type=\"button\" class=\"btn btn-block btn-success\" (click)=\"createAccount()\">Create Account</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ },

/***/ 855:
/***/ function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ },

/***/ 856:
/***/ function(module, exports) {

module.exports = "<p>\n  venue-detail works!\n</p>\n"

/***/ }

},[1118]);
//# sourceMappingURL=main.bundle.map