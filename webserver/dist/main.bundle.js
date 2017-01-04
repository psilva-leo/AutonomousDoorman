webpackJsonp([0,4],{

/***/ 1107:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 1107;


/***/ },

/***/ 1108:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(503);


/***/ },

/***/ 401:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(94);
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
        this.loggedIn = firebaseService.isLogged$;
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
            template: __webpack_require__(843),
            styles: [__webpack_require__(834)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _b) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b;
}());
//# sourceMappingURL=/home/leo/AutonomousDoorman/webserver/src/login.component.js.map

/***/ },

/***/ 402:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(94);
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
            template: __webpack_require__(844),
            styles: [__webpack_require__(831)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _b) || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a, _b;
}());
//# sourceMappingURL=/home/leo/AutonomousDoorman/webserver/src/register.component.js.map

/***/ },

/***/ 403:
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
            template: __webpack_require__(845),
            styles: [__webpack_require__(835)]
        }), 
        __metadata('design:paramtypes', [])
    ], TestComponent);
    return TestComponent;
}());
//# sourceMappingURL=/home/leo/AutonomousDoorman/webserver/src/test.component.js.map

/***/ },

/***/ 404:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(847);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_firebase_service__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2__ = __webpack_require__(257);
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
//# sourceMappingURL=/home/leo/AutonomousDoorman/webserver/src/auth.guard.js.map

/***/ },

/***/ 502:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 502;


/***/ },

/***/ 503:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(632);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(592);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(630);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(622);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/home/leo/AutonomousDoorman/webserver/src/main.js.map

/***/ },

/***/ 621:
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
            template: __webpack_require__(836),
            styles: [__webpack_require__(832)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/home/leo/AutonomousDoorman/webserver/src/app.component.js.map

/***/ },

/***/ 622:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(588);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap_ng2_bootstrap__ = __webpack_require__(820);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap_ng2_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap_ng2_bootstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_charts_ng2_charts__ = __webpack_require__(822);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_charts_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_charts_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(621);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__environments_firebase_config__ = __webpack_require__(631);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routing__ = __webpack_require__(623);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__ = __webpack_require__(624);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_login_login_component__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_auth_guard__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_firebase_service__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_test_test_component__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__shared_nav_dropdown_directive__ = __webpack_require__(635);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__shared_sidebar_directive__ = __webpack_require__(636);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__shared_aside_directive__ = __webpack_require__(633);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__shared_breadcrumb_component__ = __webpack_require__(634);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_layout_header_header_component__ = __webpack_require__(628);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_layout_sidebar_sidebar_component__ = __webpack_require__(629);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_layout_footer_footer_component__ = __webpack_require__(627);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_layout_asidemenu_asidemenu_component__ = __webpack_require__(625);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_layout_breadcrumb_breadcrumb_component__ = __webpack_require__(626);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_register_register_component__ = __webpack_require__(402);
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
            providers: [__WEBPACK_IMPORTED_MODULE_12__shared_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_13__services_firebase_service__["a" /* FirebaseService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/home/leo/AutonomousDoorman/webserver/src/app.module.js.map

/***/ },

/***/ 623:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_login_login_component__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_test_test_component__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_auth_guard__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_register_register_component__ = __webpack_require__(402);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return routing; });





var appRoutes = [
    {
        path: '',
        data: {
            title: 'Home'
        },
        canActivate: [__WEBPACK_IMPORTED_MODULE_3__shared_auth_guard__["a" /* AuthGuard */]],
        component: __WEBPACK_IMPORTED_MODULE_2__components_test_test_component__["a" /* TestComponent */]
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_1__components_login_login_component__["a" /* LoginComponent */]
    },
    {
        path: 'test',
        canActivate: [__WEBPACK_IMPORTED_MODULE_3__shared_auth_guard__["a" /* AuthGuard */]],
        component: __WEBPACK_IMPORTED_MODULE_2__components_test_test_component__["a" /* TestComponent */]
    },
    {
        path: 'register',
        component: __WEBPACK_IMPORTED_MODULE_4__components_register_register_component__["a" /* RegisterComponent */]
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(appRoutes);
//# sourceMappingURL=/home/leo/AutonomousDoorman/webserver/src/app.routing.js.map

/***/ },

/***/ 624:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__ = __webpack_require__(96);
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
    function HomeComponent(firebase) {
        this.firebase = firebase;
        var body = document.getElementsByTagName('body')[0];
        body.className = ""; //remove the classes
        body.classList.add("nav-md"); //add the class
        console.log('Home constructor');
        this.title = 'hey!';
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.firebase.findAllLessons()
            .subscribe(function (lessons) { return _this.tests = lessons; });
    };
    HomeComponent.prototype.ngAfterViewChecked = function () {
        console.log('preparing to load...');
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(837),
            styles: [__webpack_require__(833)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */]) === 'function' && _a) || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a;
}());
//# sourceMappingURL=/home/leo/AutonomousDoorman/webserver/src/home.component.js.map

/***/ },

/***/ 625:
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
            template: __webpack_require__(838),
            styles: [__webpack_require__(826)]
        }), 
        __metadata('design:paramtypes', [])
    ], AsidemenuComponent);
    return AsidemenuComponent;
}());
//# sourceMappingURL=/home/leo/AutonomousDoorman/webserver/src/asidemenu.component.js.map

/***/ },

/***/ 626:
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
            template: __webpack_require__(839),
            styles: [__webpack_require__(827)]
        }), 
        __metadata('design:paramtypes', [])
    ], BreadcrumbComponent);
    return BreadcrumbComponent;
}());
//# sourceMappingURL=/home/leo/AutonomousDoorman/webserver/src/breadcrumb.component.js.map

/***/ },

/***/ 627:
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
            template: __webpack_require__(840),
            styles: [__webpack_require__(828)]
        }), 
        __metadata('design:paramtypes', [])
    ], FooterComponent);
    return FooterComponent;
}());
//# sourceMappingURL=/home/leo/AutonomousDoorman/webserver/src/footer.component.js.map

/***/ },

/***/ 628:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__ = __webpack_require__(96);
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
    function HeaderComponent(firebaseService) {
        this.firebaseService = firebaseService;
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
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(841),
            styles: [__webpack_require__(829)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */]) === 'function' && _a) || Object])
    ], HeaderComponent);
    return HeaderComponent;
    var _a;
}());
//# sourceMappingURL=/home/leo/AutonomousDoorman/webserver/src/header.component.js.map

/***/ },

/***/ 629:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(842),
            styles: [__webpack_require__(830)]
        }), 
        __metadata('design:paramtypes', [])
    ], SidebarComponent);
    return SidebarComponent;
}());
//# sourceMappingURL=/home/leo/AutonomousDoorman/webserver/src/sidebar.component.js.map

/***/ },

/***/ 630:
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
//# sourceMappingURL=/home/leo/AutonomousDoorman/webserver/src/environment.js.map

/***/ },

/***/ 631:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return firebaseConfig; });
var firebaseConfig = {
    apiKey: "AIzaSyDg2GwKDh4PLgeshGzRXm2L3m-4ON1O2u0",
    authDomain: "weather-5ed3c.firebaseapp.com",
    databaseURL: "https://weather-5ed3c.firebaseio.com",
    storageBucket: "weather-5ed3c.appspot.com",
};
//# sourceMappingURL=/home/leo/AutonomousDoorman/webserver/src/firebase.config.js.map

/***/ },

/***/ 632:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(659);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(652);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(648);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(654);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(653);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(651);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(650);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(658);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(647);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(646);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(656);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(649);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(657);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(655);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(660);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(1106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=/home/leo/AutonomousDoorman/webserver/src/polyfills.js.map

/***/ },

/***/ 633:
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
//# sourceMappingURL=/home/leo/AutonomousDoorman/webserver/src/aside.directive.js.map

/***/ },

/***/ 634:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__ = __webpack_require__(304);
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
        this.router.events.filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* NavigationEnd */]; }).subscribe(function (event) {
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
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* ActivatedRoute */]) === 'function' && _b) || Object])
    ], BreadcrumbsComponent);
    return BreadcrumbsComponent;
    var _a, _b;
}());
//# sourceMappingURL=/home/leo/AutonomousDoorman/webserver/src/breadcrumb.component.js.map

/***/ },

/***/ 635:
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
//# sourceMappingURL=/home/leo/AutonomousDoorman/webserver/src/nav-dropdown.directive.js.map

/***/ },

/***/ 636:
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
//# sourceMappingURL=/home/leo/AutonomousDoorman/webserver/src/sidebar.directive.js.map

/***/ },

/***/ 826:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 827:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 828:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 829:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 830:
/***/ function(module, exports) {

module.exports = ""

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

module.exports = "<router-outlet></router-outlet>\n"

/***/ },

/***/ 837:
/***/ function(module, exports) {

module.exports = "<!--<h1>-->\n  <!--Home! {{title}}-->\n<!--</h1>-->\n<!--<br>-->\n<!--<input type=\"text\" placeholder=\"name\" name=\"title\" [(ngModel)]=\"title\">-->\n<!--<br>-->\n<!--<button (click)=\"login()\">log in</button>-->\n<!--<br>-->\n<!--{{tests?.length}}-->\n<!--<ul>-->\n  <!--<li *ngFor=\"let test of tests\">-->\n    <!--{{test.name}}-->\n  <!--</li>-->\n<!--</ul>-->\n\n\n<div class=\"container body\">\n  <div class=\"main_container\">\n    <div class=\"col-md-3 left_col\">\n      <div class=\"left_col scroll-view\">\n        <div class=\"navbar nav_title\" style=\"border: 0;\">\n          <a href=\"index.html\" class=\"site_title\"><i class=\"fa fa-paw\"></i> <span>Gentellela Alela!</span></a>\n        </div>\n\n        <div class=\"clearfix\"></div>\n\n        <!-- menu profile quick info -->\n        <div class=\"profile\">\n          <div class=\"profile_pic\">\n            <img src=\"/vendors/gentelella/production/images/img.jpg\" alt=\"...\" class=\"img-circle profile_img\">\n          </div>\n          <div class=\"profile_info\">\n            <span>Welcome,</span>\n            <h2>John Doe</h2>\n          </div>\n        </div>\n        <!-- /menu profile quick info -->\n\n        <br />\n\n        <!-- sidebar menu -->\n        <div id=\"sidebar-menu\" class=\"main_menu_side hidden-print main_menu\">\n          <div class=\"menu_section\">\n            <h3>General</h3>\n            <ul class=\"nav side-menu\">\n              <li><a><i class=\"fa fa-home\"></i> Home <span class=\"fa fa-chevron-down\"></span></a>\n                <ul class=\"nav child_menu\">\n                  <li><a href=\"index.html\">Dashboard</a></li>\n                  <li><a href=\"index2.html\">Dashboard2</a></li>\n                  <li><a href=\"index3.html\">Dashboard3</a></li>\n                </ul>\n              </li>\n              <li><a><i class=\"fa fa-edit\"></i> Forms <span class=\"fa fa-chevron-down\"></span></a>\n                <ul class=\"nav child_menu\">\n                  <li><a href=\"form.html\">General Form</a></li>\n                  <li><a href=\"form_advanced.html\">Advanced Components</a></li>\n                  <li><a href=\"form_validation.html\">Form Validation</a></li>\n                  <li><a href=\"form_wizards.html\">Form Wizard</a></li>\n                  <li><a href=\"form_upload.html\">Form Upload</a></li>\n                  <li><a href=\"form_buttons.html\">Form Buttons</a></li>\n                </ul>\n              </li>\n              <li><a><i class=\"fa fa-desktop\"></i> UI Elements <span class=\"fa fa-chevron-down\"></span></a>\n                <ul class=\"nav child_menu\">\n                  <li><a href=\"general_elements.html\">General Elements</a></li>\n                  <li><a href=\"media_gallery.html\">Media Gallery</a></li>\n                  <li><a href=\"typography.html\">Typography</a></li>\n                  <li><a href=\"icons.html\">Icons</a></li>\n                  <li><a href=\"glyphicons.html\">Glyphicons</a></li>\n                  <li><a href=\"widgets.html\">Widgets</a></li>\n                  <li><a href=\"invoice.html\">Invoice</a></li>\n                  <li><a href=\"inbox.html\">Inbox</a></li>\n                  <li><a href=\"calendar.html\">Calendar</a></li>\n                </ul>\n              </li>\n              <li><a><i class=\"fa fa-table\"></i> Tables <span class=\"fa fa-chevron-down\"></span></a>\n                <ul class=\"nav child_menu\">\n                  <li><a href=\"tables.html\">Tables</a></li>\n                  <li><a href=\"tables_dynamic.html\">Table Dynamic</a></li>\n                </ul>\n              </li>\n              <li><a><i class=\"fa fa-bar-chart-o\"></i> Data Presentation <span class=\"fa fa-chevron-down\"></span></a>\n                <ul class=\"nav child_menu\">\n                  <li><a href=\"chartjs.html\">Chart JS</a></li>\n                  <li><a href=\"chartjs2.html\">Chart JS2</a></li>\n                  <li><a href=\"morisjs.html\">Moris JS</a></li>\n                  <li><a href=\"echarts.html\">ECharts</a></li>\n                  <li><a href=\"other_charts.html\">Other Charts</a></li>\n                </ul>\n              </li>\n              <li><a><i class=\"fa fa-clone\"></i>Layouts <span class=\"fa fa-chevron-down\"></span></a>\n                <ul class=\"nav child_menu\">\n                  <li><a href=\"fixed_sidebar.html\">Fixed Sidebar</a></li>\n                  <li><a href=\"fixed_footer.html\">Fixed Footer</a></li>\n                </ul>\n              </li>\n            </ul>\n          </div>\n          <div class=\"menu_section\">\n            <h3>Live On</h3>\n            <ul class=\"nav side-menu\">\n              <li><a><i class=\"fa fa-bug\"></i> Additional Pages <span class=\"fa fa-chevron-down\"></span></a>\n                <ul class=\"nav child_menu\">\n                  <li><a href=\"e_commerce.html\">E-commerce</a></li>\n                  <li><a href=\"projects.html\">Projects</a></li>\n                  <li><a href=\"project_detail.html\">Project Detail</a></li>\n                  <li><a href=\"contacts.html\">Contacts</a></li>\n                  <li><a href=\"profile.html\">Profile</a></li>\n                </ul>\n              </li>\n              <li><a><i class=\"fa fa-windows\"></i> Extras <span class=\"fa fa-chevron-down\"></span></a>\n                <ul class=\"nav child_menu\">\n                  <li><a href=\"page_403.html\">403 Error</a></li>\n                  <li><a href=\"page_404.html\">404 Error</a></li>\n                  <li><a href=\"page_500.html\">500 Error</a></li>\n                  <li><a href=\"plain_page.html\">Plain Page</a></li>\n                  <li><a href=\"login.html\">Login Page</a></li>\n                  <li><a href=\"pricing_tables.html\">Pricing Tables</a></li>\n                </ul>\n              </li>\n              <li><a><i class=\"fa fa-sitemap\"></i> Multilevel Menu <span class=\"fa fa-chevron-down\"></span></a>\n                <ul class=\"nav child_menu\">\n                  <li><a href=\"#level1_1\">Level One</a>\n                  <li><a>Level One<span class=\"fa fa-chevron-down\"></span></a>\n                    <ul class=\"nav child_menu\">\n                      <li class=\"sub_menu\"><a href=\"level2.html\">Level Two</a>\n                      </li>\n                      <li><a href=\"#level2_1\">Level Two</a>\n                      </li>\n                      <li><a href=\"#level2_2\">Level Two</a>\n                      </li>\n                    </ul>\n                  </li>\n                  <li><a href=\"#level1_2\">Level One</a>\n                  </li>\n                </ul>\n              </li>\n              <li><a href=\"javascript:void(0)\"><i class=\"fa fa-laptop\"></i> Landing Page <span class=\"label label-success pull-right\">Coming Soon</span></a></li>\n            </ul>\n          </div>\n\n        </div>\n        <!-- /sidebar menu -->\n\n        <!-- /menu footer buttons -->\n        <div class=\"sidebar-footer hidden-small\">\n          <a data-toggle=\"tooltip\" data-placement=\"top\" title=\"Settings\">\n            <span class=\"glyphicon glyphicon-cog\" aria-hidden=\"true\"></span>\n          </a>\n          <a data-toggle=\"tooltip\" data-placement=\"top\" title=\"FullScreen\">\n            <span class=\"glyphicon glyphicon-fullscreen\" aria-hidden=\"true\"></span>\n          </a>\n          <a data-toggle=\"tooltip\" data-placement=\"top\" title=\"Lock\">\n            <span class=\"glyphicon glyphicon-eye-close\" aria-hidden=\"true\"></span>\n          </a>\n          <a data-toggle=\"tooltip\" data-placement=\"top\" title=\"Logout\">\n            <span class=\"glyphicon glyphicon-off\" aria-hidden=\"true\"></span>\n          </a>\n        </div>\n        <!-- /menu footer buttons -->\n      </div>\n    </div>\n\n    <!-- top navigation -->\n    <div class=\"top_nav\">\n      <div class=\"nav_menu\">\n        <nav class=\"\" role=\"navigation\">\n          <div class=\"nav toggle\">\n            <a id=\"menu_toggle\"><i class=\"fa fa-bars\"></i></a>\n          </div>\n\n          <ul class=\"nav navbar-nav navbar-right\">\n            <li class=\"\">\n              <a href=\"javascript:;\" class=\"user-profile dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\">\n                <img src=\"/vendors/gentelella/production/images/img.jpg\" alt=\"\">John Doe\n                <span class=\" fa fa-angle-down\"></span>\n              </a>\n              <ul class=\"dropdown-menu dropdown-usermenu pull-right\">\n                <li><a href=\"javascript:;\"> Profile</a></li>\n                <li>\n                  <a href=\"javascript:;\">\n                    <span class=\"badge bg-red pull-right\">50%</span>\n                    <span>Settings</span>\n                  </a>\n                </li>\n                <li><a href=\"javascript:;\">Help</a></li>\n                <li><a href=\"login.html\"><i class=\"fa fa-sign-out pull-right\"></i> Log Out</a></li>\n              </ul>\n            </li>\n\n            <li role=\"presentation\" class=\"dropdown\">\n              <a href=\"javascript:;\" class=\"dropdown-toggle info-number\" data-toggle=\"dropdown\" aria-expanded=\"false\">\n                <i class=\"fa fa-envelope-o\"></i>\n                <span class=\"badge bg-green\">6</span>\n              </a>\n              <ul id=\"menu1\" class=\"dropdown-menu list-unstyled msg_list\" role=\"menu\">\n                <li>\n                  <a>\n                    <span class=\"image\"><img src=\"/vendors/gentelella/production/images/img.jpg\" alt=\"Profile Image\" /></span>\n                    <span>\n                          <span>John Smith</span>\n                          <span class=\"time\">3 mins ago</span>\n                        </span>\n                    <span class=\"message\">\n                          Film festivals used to be do-or-die moments for movie makers. They were where...\n                        </span>\n                  </a>\n                </li>\n                <li>\n                  <a>\n                    <span class=\"image\"><img src=\"/vendors/gentelella/production/images/img.jpg\" alt=\"Profile Image\" /></span>\n                    <span>\n                          <span>John Smith</span>\n                          <span class=\"time\">3 mins ago</span>\n                        </span>\n                    <span class=\"message\">\n                          Film festivals used to be do-or-die moments for movie makers. They were where...\n                        </span>\n                  </a>\n                </li>\n                <li>\n                  <a>\n                    <span class=\"image\"><img src=\"/vendors/gentelella/production/images/img.jpg\" alt=\"Profile Image\" /></span>\n                    <span>\n                          <span>John Smith</span>\n                          <span class=\"time\">3 mins ago</span>\n                        </span>\n                    <span class=\"message\">\n                          Film festivals used to be do-or-die moments for movie makers. They were where...\n                        </span>\n                  </a>\n                </li>\n                <li>\n                  <a>\n                    <span class=\"image\"><img src=\"/vendors/gentelella/production/images/img.jpg\" alt=\"Profile Image\" /></span>\n                    <span>\n                          <span>John Smith</span>\n                          <span class=\"time\">3 mins ago</span>\n                        </span>\n                    <span class=\"message\">\n                          Film festivals used to be do-or-die moments for movie makers. They were where...\n                        </span>\n                  </a>\n                </li>\n                <li>\n                  <div class=\"text-center\">\n                    <a>\n                      <strong>See All Alerts</strong>\n                      <i class=\"fa fa-angle-right\"></i>\n                    </a>\n                  </div>\n                </li>\n              </ul>\n            </li>\n          </ul>\n        </nav>\n      </div>\n    </div>\n    <!-- /top navigation -->\n\n    <!-- page content -->\n    <div class=\"right_col\" role=\"main\">\n      <!-- top tiles -->\n      <div class=\"row tile_count\">\n        <div class=\"col-md-2 col-sm-4 col-xs-6 tile_stats_count\">\n          <span class=\"count_top\"><i class=\"fa fa-user\"></i> Total Users</span>\n          <div class=\"count\">2500</div>\n          <span class=\"count_bottom\"><i class=\"green\">4% </i> From last Week</span>\n        </div>\n        <div class=\"col-md-2 col-sm-4 col-xs-6 tile_stats_count\">\n          <span class=\"count_top\"><i class=\"fa fa-clock-o\"></i> Average Time</span>\n          <div class=\"count\">123.50</div>\n          <span class=\"count_bottom\"><i class=\"green\"><i class=\"fa fa-sort-asc\"></i>3% </i> From last Week</span>\n        </div>\n        <div class=\"col-md-2 col-sm-4 col-xs-6 tile_stats_count\">\n          <span class=\"count_top\"><i class=\"fa fa-user\"></i> Total Males</span>\n          <div class=\"count green\">2,500</div>\n          <span class=\"count_bottom\"><i class=\"green\"><i class=\"fa fa-sort-asc\"></i>34% </i> From last Week</span>\n        </div>\n        <div class=\"col-md-2 col-sm-4 col-xs-6 tile_stats_count\">\n          <span class=\"count_top\"><i class=\"fa fa-user\"></i> Total Females</span>\n          <div class=\"count\">4,567</div>\n          <span class=\"count_bottom\"><i class=\"red\"><i class=\"fa fa-sort-desc\"></i>12% </i> From last Week</span>\n        </div>\n        <div class=\"col-md-2 col-sm-4 col-xs-6 tile_stats_count\">\n          <span class=\"count_top\"><i class=\"fa fa-user\"></i> Total Collections</span>\n          <div class=\"count\">2,315</div>\n          <span class=\"count_bottom\"><i class=\"green\"><i class=\"fa fa-sort-asc\"></i>34% </i> From last Week</span>\n        </div>\n        <div class=\"col-md-2 col-sm-4 col-xs-6 tile_stats_count\">\n          <span class=\"count_top\"><i class=\"fa fa-user\"></i> Total Connections</span>\n          <div class=\"count\">7,325</div>\n          <span class=\"count_bottom\"><i class=\"green\"><i class=\"fa fa-sort-asc\"></i>34% </i> From last Week</span>\n        </div>\n      </div>\n      <!-- /top tiles -->\n\n      <div class=\"row\">\n        <div class=\"col-md-12 col-sm-12 col-xs-12\">\n          <div class=\"dashboard_graph\">\n\n            <div class=\"row x_title\">\n              <div class=\"col-md-6\">\n                <h3>Network Activities <small>Graph title sub-title</small></h3>\n              </div>\n              <div class=\"col-md-6\">\n                <div id=\"reportrange\" class=\"pull-right\" style=\"background: #fff; cursor: pointer; padding: 5px 10px; border: 1px solid #ccc\">\n                  <i class=\"glyphicon glyphicon-calendar fa fa-calendar\"></i>\n                  <span>December 30, 2014 - January 28, 2015</span> <b class=\"caret\"></b>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"col-md-9 col-sm-9 col-xs-12\">\n              <div id=\"placeholder33\" style=\"height: 260px; display: none\" class=\"demo-placeholder\"></div>\n              <div style=\"width: 100%;\">\n                <div id=\"canvas_dahs\" class=\"demo-placeholder\" style=\"width: 100%; height:270px;\"></div>\n              </div>\n            </div>\n            <div class=\"col-md-3 col-sm-3 col-xs-12 bg-white\">\n              <div class=\"x_title\">\n                <h2>Top Campaign Performance</h2>\n                <div class=\"clearfix\"></div>\n              </div>\n\n              <div class=\"col-md-12 col-sm-12 col-xs-6\">\n                <div>\n                  <p>Facebook Campaign</p>\n                  <div class=\"\">\n                    <div class=\"progress progress_sm\" style=\"width: 76%;\">\n                      <div class=\"progress-bar bg-green\" role=\"progressbar\" data-transitiongoal=\"80\"></div>\n                    </div>\n                  </div>\n                </div>\n                <div>\n                  <p>Twitter Campaign</p>\n                  <div class=\"\">\n                    <div class=\"progress progress_sm\" style=\"width: 76%;\">\n                      <div class=\"progress-bar bg-green\" role=\"progressbar\" data-transitiongoal=\"60\"></div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-md-12 col-sm-12 col-xs-6\">\n                <div>\n                  <p>Conventional Media</p>\n                  <div class=\"\">\n                    <div class=\"progress progress_sm\" style=\"width: 76%;\">\n                      <div class=\"progress-bar bg-green\" role=\"progressbar\" data-transitiongoal=\"40\"></div>\n                    </div>\n                  </div>\n                </div>\n                <div>\n                  <p>Bill boards</p>\n                  <div class=\"\">\n                    <div class=\"progress progress_sm\" style=\"width: 76%;\">\n                      <div class=\"progress-bar bg-green\" role=\"progressbar\" data-transitiongoal=\"50\"></div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n\n            </div>\n\n            <div class=\"clearfix\"></div>\n          </div>\n        </div>\n\n      </div>\n      <br />\n\n      <div class=\"row\">\n\n\n        <div class=\"col-md-4 col-sm-4 col-xs-12\">\n          <div class=\"x_panel tile fixed_height_320\">\n            <div class=\"x_title\">\n              <h2>App Versions</h2>\n              <ul class=\"nav navbar-right panel_toolbox\">\n                <li><a class=\"collapse-link\"><i class=\"fa fa-chevron-up\"></i></a>\n                </li>\n                <li class=\"dropdown\">\n                  <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"false\"><i class=\"fa fa-wrench\"></i></a>\n                  <ul class=\"dropdown-menu\" role=\"menu\">\n                    <li><a href=\"#\">Settings 1</a>\n                    </li>\n                    <li><a href=\"#\">Settings 2</a>\n                    </li>\n                  </ul>\n                </li>\n                <li><a class=\"close-link\"><i class=\"fa fa-close\"></i></a>\n                </li>\n              </ul>\n              <div class=\"clearfix\"></div>\n            </div>\n            <div class=\"x_content\">\n              <h4>App Usage across versions</h4>\n              <div class=\"widget_summary\">\n                <div class=\"w_left w_25\">\n                  <span>0.1.5.2</span>\n                </div>\n                <div class=\"w_center w_55\">\n                  <div class=\"progress\">\n                    <div class=\"progress-bar bg-green\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 66%;\">\n                      <span class=\"sr-only\">60% Complete</span>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"w_right w_20\">\n                  <span>123k</span>\n                </div>\n                <div class=\"clearfix\"></div>\n              </div>\n\n              <div class=\"widget_summary\">\n                <div class=\"w_left w_25\">\n                  <span>0.1.5.3</span>\n                </div>\n                <div class=\"w_center w_55\">\n                  <div class=\"progress\">\n                    <div class=\"progress-bar bg-green\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 45%;\">\n                      <span class=\"sr-only\">60% Complete</span>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"w_right w_20\">\n                  <span>53k</span>\n                </div>\n                <div class=\"clearfix\"></div>\n              </div>\n              <div class=\"widget_summary\">\n                <div class=\"w_left w_25\">\n                  <span>0.1.5.4</span>\n                </div>\n                <div class=\"w_center w_55\">\n                  <div class=\"progress\">\n                    <div class=\"progress-bar bg-green\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 25%;\">\n                      <span class=\"sr-only\">60% Complete</span>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"w_right w_20\">\n                  <span>23k</span>\n                </div>\n                <div class=\"clearfix\"></div>\n              </div>\n              <div class=\"widget_summary\">\n                <div class=\"w_left w_25\">\n                  <span>0.1.5.5</span>\n                </div>\n                <div class=\"w_center w_55\">\n                  <div class=\"progress\">\n                    <div class=\"progress-bar bg-green\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 5%;\">\n                      <span class=\"sr-only\">60% Complete</span>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"w_right w_20\">\n                  <span>3k</span>\n                </div>\n                <div class=\"clearfix\"></div>\n              </div>\n              <div class=\"widget_summary\">\n                <div class=\"w_left w_25\">\n                  <span>0.1.5.6</span>\n                </div>\n                <div class=\"w_center w_55\">\n                  <div class=\"progress\">\n                    <div class=\"progress-bar bg-green\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 2%;\">\n                      <span class=\"sr-only\">60% Complete</span>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"w_right w_20\">\n                  <span>1k</span>\n                </div>\n                <div class=\"clearfix\"></div>\n              </div>\n\n            </div>\n          </div>\n        </div>\n\n        <div class=\"col-md-4 col-sm-4 col-xs-12\">\n          <div class=\"x_panel tile fixed_height_320 overflow_hidden\">\n            <div class=\"x_title\">\n              <h2>Device Usage</h2>\n              <ul class=\"nav navbar-right panel_toolbox\">\n                <li><a class=\"collapse-link\"><i class=\"fa fa-chevron-up\"></i></a>\n                </li>\n                <li class=\"dropdown\">\n                  <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"false\"><i class=\"fa fa-wrench\"></i></a>\n                  <ul class=\"dropdown-menu\" role=\"menu\">\n                    <li><a href=\"#\">Settings 1</a>\n                    </li>\n                    <li><a href=\"#\">Settings 2</a>\n                    </li>\n                  </ul>\n                </li>\n                <li><a class=\"close-link\"><i class=\"fa fa-close\"></i></a>\n                </li>\n              </ul>\n              <div class=\"clearfix\"></div>\n            </div>\n            <div class=\"x_content\">\n              <table class=\"\" style=\"width:100%\">\n                <tr>\n                  <th style=\"width:37%;\">\n                    <p>Top 5</p>\n                  </th>\n                  <th>\n                    <div class=\"col-lg-7 col-md-7 col-sm-7 col-xs-7\">\n                      <p class=\"\">Device</p>\n                    </div>\n                    <div class=\"col-lg-5 col-md-5 col-sm-5 col-xs-5\">\n                      <p class=\"\">Progress</p>\n                    </div>\n                  </th>\n                </tr>\n                <tr>\n                  <td>\n                    <canvas id=\"canvas1\" height=\"140\" width=\"140\" style=\"margin: 15px 10px 10px 0\"></canvas>\n                  </td>\n                  <td>\n                    <table class=\"tile_info\">\n                      <tr>\n                        <td>\n                          <p><i class=\"fa fa-square blue\"></i>IOS </p>\n                        </td>\n                        <td>30%</td>\n                      </tr>\n                      <tr>\n                        <td>\n                          <p><i class=\"fa fa-square green\"></i>Android </p>\n                        </td>\n                        <td>10%</td>\n                      </tr>\n                      <tr>\n                        <td>\n                          <p><i class=\"fa fa-square purple\"></i>Blackberry </p>\n                        </td>\n                        <td>20%</td>\n                      </tr>\n                      <tr>\n                        <td>\n                          <p><i class=\"fa fa-square aero\"></i>Symbian </p>\n                        </td>\n                        <td>15%</td>\n                      </tr>\n                      <tr>\n                        <td>\n                          <p><i class=\"fa fa-square red\"></i>Others </p>\n                        </td>\n                        <td>30%</td>\n                      </tr>\n                    </table>\n                  </td>\n                </tr>\n              </table>\n            </div>\n          </div>\n        </div>\n\n\n        <div class=\"col-md-4 col-sm-4 col-xs-12\">\n          <div class=\"x_panel tile fixed_height_320\">\n            <div class=\"x_title\">\n              <h2>Quick Settings</h2>\n              <ul class=\"nav navbar-right panel_toolbox\">\n                <li><a class=\"collapse-link\"><i class=\"fa fa-chevron-up\"></i></a>\n                </li>\n                <li class=\"dropdown\">\n                  <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"false\"><i class=\"fa fa-wrench\"></i></a>\n                  <ul class=\"dropdown-menu\" role=\"menu\">\n                    <li><a href=\"#\">Settings 1</a>\n                    </li>\n                    <li><a href=\"#\">Settings 2</a>\n                    </li>\n                  </ul>\n                </li>\n                <li><a class=\"close-link\"><i class=\"fa fa-close\"></i></a>\n                </li>\n              </ul>\n              <div class=\"clearfix\"></div>\n            </div>\n            <div class=\"x_content\">\n              <div class=\"dashboard-widget-content\">\n                <ul class=\"quick-list\">\n                  <li><i class=\"fa fa-calendar-o\"></i><a href=\"#\">Settings</a>\n                  </li>\n                  <li><i class=\"fa fa-bars\"></i><a href=\"#\">Subscription</a>\n                  </li>\n                  <li><i class=\"fa fa-bar-chart\"></i><a href=\"#\">Auto Renewal</a> </li>\n                  <li><i class=\"fa fa-line-chart\"></i><a href=\"#\">Achievements</a>\n                  </li>\n                  <li><i class=\"fa fa-bar-chart\"></i><a href=\"#\">Auto Renewal</a> </li>\n                  <li><i class=\"fa fa-line-chart\"></i><a href=\"#\">Achievements</a>\n                  </li>\n                  <li><i class=\"fa fa-area-chart\"></i><a href=\"#\">Logout</a>\n                  </li>\n                </ul>\n\n                <div class=\"sidebar-widget\">\n                  <h4>Profile Completion</h4>\n                  <canvas width=\"150\" height=\"80\" id=\"foo\" class=\"\" style=\"width: 160px; height: 100px;\"></canvas>\n                  <div class=\"goal-wrapper\">\n                    <span class=\"gauge-value pull-left\">$</span>\n                    <span id=\"gauge-text\" class=\"gauge-value pull-left\">3,200</span>\n                    <span id=\"goal-text\" class=\"goal-value pull-right\">$5,000</span>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n      </div>\n\n\n      <div class=\"row\">\n        <div class=\"col-md-4 col-sm-4 col-xs-12\">\n          <div class=\"x_panel\">\n            <div class=\"x_title\">\n              <h2>Recent Activities <small>Sessions</small></h2>\n              <ul class=\"nav navbar-right panel_toolbox\">\n                <li><a class=\"collapse-link\"><i class=\"fa fa-chevron-up\"></i></a>\n                </li>\n                <li class=\"dropdown\">\n                  <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"false\"><i class=\"fa fa-wrench\"></i></a>\n                  <ul class=\"dropdown-menu\" role=\"menu\">\n                    <li><a href=\"#\">Settings 1</a>\n                    </li>\n                    <li><a href=\"#\">Settings 2</a>\n                    </li>\n                  </ul>\n                </li>\n                <li><a class=\"close-link\"><i class=\"fa fa-close\"></i></a>\n                </li>\n              </ul>\n              <div class=\"clearfix\"></div>\n            </div>\n            <div class=\"x_content\">\n              <div class=\"dashboard-widget-content\">\n\n                <ul class=\"list-unstyled timeline widget\">\n                  <li>\n                    <div class=\"block\">\n                      <div class=\"block_content\">\n                        <h2 class=\"title\">\n                          <a>Who Needs Sundance When You’ve Got&nbsp;Crowdfunding?</a>\n                        </h2>\n                        <div class=\"byline\">\n                          <span>13 hours ago</span> by <a>Jane Smith</a>\n                        </div>\n                        <p class=\"excerpt\">Film festivals used to be do-or-die moments for movie makers. They were where you met the producers that could fund your project, and if the buyers liked your flick, they’d pay to Fast-forward and… <a>Read&nbsp;More</a>\n                        </p>\n                      </div>\n                    </div>\n                  </li>\n                  <li>\n                    <div class=\"block\">\n                      <div class=\"block_content\">\n                        <h2 class=\"title\">\n                          <a>Who Needs Sundance When You’ve Got&nbsp;Crowdfunding?</a>\n                        </h2>\n                        <div class=\"byline\">\n                          <span>13 hours ago</span> by <a>Jane Smith</a>\n                        </div>\n                        <p class=\"excerpt\">Film festivals used to be do-or-die moments for movie makers. They were where you met the producers that could fund your project, and if the buyers liked your flick, they’d pay to Fast-forward and… <a>Read&nbsp;More</a>\n                        </p>\n                      </div>\n                    </div>\n                  </li>\n                  <li>\n                    <div class=\"block\">\n                      <div class=\"block_content\">\n                        <h2 class=\"title\">\n                          <a>Who Needs Sundance When You’ve Got&nbsp;Crowdfunding?</a>\n                        </h2>\n                        <div class=\"byline\">\n                          <span>13 hours ago</span> by <a>Jane Smith</a>\n                        </div>\n                        <p class=\"excerpt\">Film festivals used to be do-or-die moments for movie makers. They were where you met the producers that could fund your project, and if the buyers liked your flick, they’d pay to Fast-forward and… <a>Read&nbsp;More</a>\n                        </p>\n                      </div>\n                    </div>\n                  </li>\n                  <li>\n                    <div class=\"block\">\n                      <div class=\"block_content\">\n                        <h2 class=\"title\">\n                          <a>Who Needs Sundance When You’ve Got&nbsp;Crowdfunding?</a>\n                        </h2>\n                        <div class=\"byline\">\n                          <span>13 hours ago</span> by <a>Jane Smith</a>\n                        </div>\n                        <p class=\"excerpt\">Film festivals used to be do-or-die moments for movie makers. They were where you met the producers that could fund your project, and if the buyers liked your flick, they’d pay to Fast-forward and… <a>Read&nbsp;More</a>\n                        </p>\n                      </div>\n                    </div>\n                  </li>\n                </ul>\n              </div>\n            </div>\n          </div>\n        </div>\n\n\n        <div class=\"col-md-8 col-sm-8 col-xs-12\">\n\n\n\n          <div class=\"row\">\n\n            <div class=\"col-md-12 col-sm-12 col-xs-12\">\n              <div class=\"x_panel\">\n                <div class=\"x_title\">\n                  <h2>Visitors location <small>geo-presentation</small></h2>\n                  <ul class=\"nav navbar-right panel_toolbox\">\n                    <li><a class=\"collapse-link\"><i class=\"fa fa-chevron-up\"></i></a>\n                    </li>\n                    <li class=\"dropdown\">\n                      <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"false\"><i class=\"fa fa-wrench\"></i></a>\n                      <ul class=\"dropdown-menu\" role=\"menu\">\n                        <li><a href=\"#\">Settings 1</a>\n                        </li>\n                        <li><a href=\"#\">Settings 2</a>\n                        </li>\n                      </ul>\n                    </li>\n                    <li><a class=\"close-link\"><i class=\"fa fa-close\"></i></a>\n                    </li>\n                  </ul>\n                  <div class=\"clearfix\"></div>\n                </div>\n                <div class=\"x_content\">\n                  <div class=\"dashboard-widget-content\">\n                    <div class=\"col-md-4 hidden-small\">\n                      <h2 class=\"line_30\">125.7k Views from 60 countries</h2>\n\n                      <table class=\"countries_list\">\n                        <tbody>\n                        <tr>\n                          <td>United States</td>\n                          <td class=\"fs15 fw700 text-right\">33%</td>\n                        </tr>\n                        <tr>\n                          <td>France</td>\n                          <td class=\"fs15 fw700 text-right\">27%</td>\n                        </tr>\n                        <tr>\n                          <td>Germany</td>\n                          <td class=\"fs15 fw700 text-right\">16%</td>\n                        </tr>\n                        <tr>\n                          <td>Spain</td>\n                          <td class=\"fs15 fw700 text-right\">11%</td>\n                        </tr>\n                        <tr>\n                          <td>Britain</td>\n                          <td class=\"fs15 fw700 text-right\">10%</td>\n                        </tr>\n                        </tbody>\n                      </table>\n                    </div>\n                    <div id=\"world-map-gdp\" class=\"col-md-8 col-sm-12 col-xs-12\" style=\"height:230px;\"></div>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n          </div>\n          <div class=\"row\">\n\n\n            <!-- Start to do list -->\n            <div class=\"col-md-6 col-sm-6 col-xs-12\">\n              <div class=\"x_panel\">\n                <div class=\"x_title\">\n                  <h2>To Do List <small>Sample tasks</small></h2>\n                  <ul class=\"nav navbar-right panel_toolbox\">\n                    <li><a class=\"collapse-link\"><i class=\"fa fa-chevron-up\"></i></a>\n                    </li>\n                    <li class=\"dropdown\">\n                      <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"false\"><i class=\"fa fa-wrench\"></i></a>\n                      <ul class=\"dropdown-menu\" role=\"menu\">\n                        <li><a href=\"#\">Settings 1</a>\n                        </li>\n                        <li><a href=\"#\">Settings 2</a>\n                        </li>\n                      </ul>\n                    </li>\n                    <li><a class=\"close-link\"><i class=\"fa fa-close\"></i></a>\n                    </li>\n                  </ul>\n                  <div class=\"clearfix\"></div>\n                </div>\n                <div class=\"x_content\">\n\n                  <div class=\"\">\n                    <ul class=\"to_do\">\n                      <li>\n                        <p>\n                          <input type=\"checkbox\" class=\"flat\"> Schedule meeting with new client </p>\n                      </li>\n                      <li>\n                        <p>\n                          <input type=\"checkbox\" class=\"flat\"> Create email address for new intern</p>\n                      </li>\n                      <li>\n                        <p>\n                          <input type=\"checkbox\" class=\"flat\"> Have IT fix the network printer</p>\n                      </li>\n                      <li>\n                        <p>\n                          <input type=\"checkbox\" class=\"flat\"> Copy backups to offsite location</p>\n                      </li>\n                      <li>\n                        <p>\n                          <input type=\"checkbox\" class=\"flat\"> Food truck fixie locavors mcsweeney</p>\n                      </li>\n                      <li>\n                        <p>\n                          <input type=\"checkbox\" class=\"flat\"> Food truck fixie locavors mcsweeney</p>\n                      </li>\n                      <li>\n                        <p>\n                          <input type=\"checkbox\" class=\"flat\"> Create email address for new intern</p>\n                      </li>\n                      <li>\n                        <p>\n                          <input type=\"checkbox\" class=\"flat\"> Have IT fix the network printer</p>\n                      </li>\n                      <li>\n                        <p>\n                          <input type=\"checkbox\" class=\"flat\"> Copy backups to offsite location</p>\n                      </li>\n                    </ul>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <!-- End to do list -->\n\n            <!-- start of weather widget -->\n            <div class=\"col-md-6 col-sm-6 col-xs-12\">\n              <div class=\"x_panel\">\n                <div class=\"x_title\">\n                  <h2>Daily active users <small>Sessions</small></h2>\n                  <ul class=\"nav navbar-right panel_toolbox\">\n                    <li><a class=\"collapse-link\"><i class=\"fa fa-chevron-up\"></i></a>\n                    </li>\n                    <li class=\"dropdown\">\n                      <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"false\"><i class=\"fa fa-wrench\"></i></a>\n                      <ul class=\"dropdown-menu\" role=\"menu\">\n                        <li><a href=\"#\">Settings 1</a>\n                        </li>\n                        <li><a href=\"#\">Settings 2</a>\n                        </li>\n                      </ul>\n                    </li>\n                    <li><a class=\"close-link\"><i class=\"fa fa-close\"></i></a>\n                    </li>\n                  </ul>\n                  <div class=\"clearfix\"></div>\n                </div>\n                <div class=\"x_content\">\n                  <div class=\"row\">\n                    <div class=\"col-sm-12\">\n                      <div class=\"temperature\"><b>Monday</b>, 07:30 AM\n                        <span>F</span>\n                        <span><b>C</b></span>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"row\">\n                    <div class=\"col-sm-4\">\n                      <div class=\"weather-icon\">\n                        <canvas height=\"84\" width=\"84\" id=\"partly-cloudy-day\"></canvas>\n                      </div>\n                    </div>\n                    <div class=\"col-sm-8\">\n                      <div class=\"weather-text\">\n                        <h2>Texas <br><i>Partly Cloudy Day</i></h2>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-sm-12\">\n                    <div class=\"weather-text pull-right\">\n                      <h3 class=\"degrees\">23</h3>\n                    </div>\n                  </div>\n\n                  <div class=\"clearfix\"></div>\n\n                  <div class=\"row weather-days\">\n                    <div class=\"col-sm-2\">\n                      <div class=\"daily-weather\">\n                        <h2 class=\"day\">Mon</h2>\n                        <h3 class=\"degrees\">25</h3>\n                        <canvas id=\"clear-day\" width=\"32\" height=\"32\"></canvas>\n                        <h5>15 <i>km/h</i></h5>\n                      </div>\n                    </div>\n                    <div class=\"col-sm-2\">\n                      <div class=\"daily-weather\">\n                        <h2 class=\"day\">Tue</h2>\n                        <h3 class=\"degrees\">25</h3>\n                        <canvas height=\"32\" width=\"32\" id=\"rain\"></canvas>\n                        <h5>12 <i>km/h</i></h5>\n                      </div>\n                    </div>\n                    <div class=\"col-sm-2\">\n                      <div class=\"daily-weather\">\n                        <h2 class=\"day\">Wed</h2>\n                        <h3 class=\"degrees\">27</h3>\n                        <canvas height=\"32\" width=\"32\" id=\"snow\"></canvas>\n                        <h5>14 <i>km/h</i></h5>\n                      </div>\n                    </div>\n                    <div class=\"col-sm-2\">\n                      <div class=\"daily-weather\">\n                        <h2 class=\"day\">Thu</h2>\n                        <h3 class=\"degrees\">28</h3>\n                        <canvas height=\"32\" width=\"32\" id=\"sleet\"></canvas>\n                        <h5>15 <i>km/h</i></h5>\n                      </div>\n                    </div>\n                    <div class=\"col-sm-2\">\n                      <div class=\"daily-weather\">\n                        <h2 class=\"day\">Fri</h2>\n                        <h3 class=\"degrees\">28</h3>\n                        <canvas height=\"32\" width=\"32\" id=\"wind\"></canvas>\n                        <h5>11 <i>km/h</i></h5>\n                      </div>\n                    </div>\n                    <div class=\"col-sm-2\">\n                      <div class=\"daily-weather\">\n                        <h2 class=\"day\">Sat</h2>\n                        <h3 class=\"degrees\">26</h3>\n                        <canvas height=\"32\" width=\"32\" id=\"cloudy\"></canvas>\n                        <h5>10 <i>km/h</i></h5>\n                      </div>\n                    </div>\n                    <div class=\"clearfix\"></div>\n                  </div>\n                </div>\n              </div>\n\n            </div>\n            <!-- end of weather widget -->\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- /page content -->\n\n    <!-- footer content -->\n    <footer>\n      <div class=\"pull-right\">\n        Gentelella - Bootstrap Admin Template by <a href=\"https://colorlib.com\">Colorlib</a>\n      </div>\n      <div class=\"clearfix\"></div>\n    </footer>\n    <!-- /footer content -->\n  </div>\n</div>\n\n"

/***/ },

/***/ 838:
/***/ function(module, exports) {

module.exports = "<aside class=\"aside-menu\">\n  <tabset>\n    <tab>\n      <template tabHeading><i class=\"icon-list\"></i>\n      </template>\n      <div class=\"callout m-0 py-h text-muted text-xs-center bg-faded text-uppercase\">\n        <small><b>Today</b>\n        </small>\n      </div>\n      <hr class=\"transparent mx-1 my-0\">\n      <div class=\"callout callout-warning m-0 py-1\">\n        <div class=\"avatar float-xs-right\">\n          <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n        </div>\n        <div>Meeting with\n          <strong>Lucas</strong>\n        </div>\n        <small class=\"text-muted mr-1\"><i class=\"icon-calendar\"></i>&nbsp; 1 - 3pm</small>\n        <small class=\"text-muted\"><i class=\"icon-location-pin\"></i>&nbsp; Palo Alto, CA</small>\n      </div>\n      <hr class=\"mx-1 my-0\">\n      <div class=\"callout callout-info m-0 py-1\">\n        <div class=\"avatar float-xs-right\">\n          <img src=\"assets/img/avatars/4.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n        </div>\n        <div>Skype with\n          <strong>Megan</strong>\n        </div>\n        <small class=\"text-muted mr-1\"><i class=\"icon-calendar\"></i>&nbsp; 4 - 5pm</small>\n        <small class=\"text-muted\"><i class=\"icon-social-skype\"></i>&nbsp; On-line</small>\n      </div>\n      <hr class=\"transparent mx-1 my-0\">\n      <div class=\"callout m-0 py-h text-muted text-xs-center bg-faded text-uppercase\">\n        <small><b>Tomorrow</b>\n        </small>\n      </div>\n      <hr class=\"transparent mx-1 my-0\">\n      <div class=\"callout callout-danger m-0 py-1\">\n        <div>New UI Project -\n          <strong>deadline</strong>\n        </div>\n        <small class=\"text-muted mr-1\"><i class=\"icon-calendar\"></i>&nbsp; 10 - 11pm</small>\n        <small class=\"text-muted\"><i class=\"icon-home\"></i>&nbsp; creativeLabs HQ</small>\n        <div class=\"avatars-stack mt-h\">\n          <div class=\"avatar avatar-xs\">\n            <img src=\"assets/img/avatars/2.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n          </div>\n          <div class=\"avatar avatar-xs\">\n            <img src=\"assets/img/avatars/3.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n          </div>\n          <div class=\"avatar avatar-xs\">\n            <img src=\"assets/img/avatars/4.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n          </div>\n          <div class=\"avatar avatar-xs\">\n            <img src=\"assets/img/avatars/5.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n          </div>\n          <div class=\"avatar avatar-xs\">\n            <img src=\"assets/img/avatars/6.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n          </div>\n        </div>\n      </div>\n      <hr class=\"mx-1 my-0\">\n      <div class=\"callout callout-success m-0 py-1\">\n        <div>\n          <strong>#10 Startups.Garden</strong>Meetup</div>\n        <small class=\"text-muted mr-1\"><i class=\"icon-calendar\"></i>&nbsp; 1 - 3pm</small>\n        <small class=\"text-muted\"><i class=\"icon-location-pin\"></i>&nbsp; Palo Alto, CA</small>\n      </div>\n      <hr class=\"mx-1 my-0\">\n      <div class=\"callout callout-primary m-0 py-1\">\n        <div>\n          <strong>Team meeting</strong>\n        </div>\n        <small class=\"text-muted mr-1\"><i class=\"icon-calendar\"></i>&nbsp; 4 - 6pm</small>\n        <small class=\"text-muted\"><i class=\"icon-home\"></i>&nbsp; creativeLabs HQ</small>\n        <div class=\"avatars-stack mt-h\">\n          <div class=\"avatar avatar-xs\">\n            <img src=\"assets/img/avatars/2.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n          </div>\n          <div class=\"avatar avatar-xs\">\n            <img src=\"assets/img/avatars/3.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n          </div>\n          <div class=\"avatar avatar-xs\">\n            <img src=\"assets/img/avatars/4.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n          </div>\n          <div class=\"avatar avatar-xs\">\n            <img src=\"assets/img/avatars/5.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n          </div>\n          <div class=\"avatar avatar-xs\">\n            <img src=\"assets/img/avatars/6.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n          </div>\n          <div class=\"avatar avatar-xs\">\n            <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n          </div>\n          <div class=\"avatar avatar-xs\">\n            <img src=\"assets/img/avatars/8.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n          </div>\n        </div>\n      </div>\n      <hr class=\"mx-1 my-0\">\n    </tab>\n    <tab>\n      <template tabHeading><i class=\"icon-speech\"></i>\n      </template>\n      <div class=\"p-1\">\n        <div class=\"message\">\n          <div class=\"py-1 pb-3 mr-1 float-xs-left\">\n            <div class=\"avatar\">\n              <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n              <span class=\"avatar-status tag-success\"></span>\n            </div>\n          </div>\n          <div>\n            <small class=\"text-muted\">Lukasz Holeczek</small>\n            <small class=\"text-muted float-xs-right mt-q\">1:52 PM</small>\n          </div>\n          <div class=\"text-truncate font-weight-bold\">Lorem ipsum dolor sit amet</div>\n          <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>\n        </div>\n        <hr>\n        <div class=\"message\">\n          <div class=\"py-1 pb-3 mr-1 float-xs-left\">\n            <div class=\"avatar\">\n              <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n              <span class=\"avatar-status tag-success\"></span>\n            </div>\n          </div>\n          <div>\n            <small class=\"text-muted\">Lukasz Holeczek</small>\n            <small class=\"text-muted float-xs-right mt-q\">1:52 PM</small>\n          </div>\n          <div class=\"text-truncate font-weight-bold\">Lorem ipsum dolor sit amet</div>\n          <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>\n        </div>\n        <hr>\n        <div class=\"message\">\n          <div class=\"py-1 pb-3 mr-1 float-xs-left\">\n            <div class=\"avatar\">\n              <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n              <span class=\"avatar-status tag-success\"></span>\n            </div>\n          </div>\n          <div>\n            <small class=\"text-muted\">Lukasz Holeczek</small>\n            <small class=\"text-muted float-xs-right mt-q\">1:52 PM</small>\n          </div>\n          <div class=\"text-truncate font-weight-bold\">Lorem ipsum dolor sit amet</div>\n          <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>\n        </div>\n        <hr>\n        <div class=\"message\">\n          <div class=\"py-1 pb-3 mr-1 float-xs-left\">\n            <div class=\"avatar\">\n              <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n              <span class=\"avatar-status tag-success\"></span>\n            </div>\n          </div>\n          <div>\n            <small class=\"text-muted\">Lukasz Holeczek</small>\n            <small class=\"text-muted float-xs-right mt-q\">1:52 PM</small>\n          </div>\n          <div class=\"text-truncate font-weight-bold\">Lorem ipsum dolor sit amet</div>\n          <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>\n        </div>\n        <hr>\n        <div class=\"message\">\n          <div class=\"py-1 pb-3 mr-1 float-xs-left\">\n            <div class=\"avatar\">\n              <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n              <span class=\"avatar-status tag-success\"></span>\n            </div>\n          </div>\n          <div>\n            <small class=\"text-muted\">Lukasz Holeczek</small>\n            <small class=\"text-muted float-xs-right mt-q\">1:52 PM</small>\n          </div>\n          <div class=\"text-truncate font-weight-bold\">Lorem ipsum dolor sit amet</div>\n          <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>\n        </div>\n      </div>\n    </tab>\n    <tab>\n      <template tabHeading><i class=\"icon-settings\"></i>\n      </template>\n      <div class=\"p-1\">\n        <h6>Settings</h6>\n\n        <div class=\"aside-options\">\n          <div class=\"clearfix mt-2\">\n            <small><b>Option 1</b>\n            </small>\n            <label class=\"switch switch-text switch-pill switch-success switch-sm float-xs-right\">\n              <input type=\"checkbox\" class=\"switch-input\" checked>\n              <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\n              <span class=\"switch-handle\"></span>\n            </label>\n          </div>\n          <div>\n            <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</small>\n          </div>\n        </div>\n\n        <div class=\"aside-options\">\n          <div class=\"clearfix mt-1\">\n            <small><b>Option 2</b>\n            </small>\n            <label class=\"switch switch-text switch-pill switch-success switch-sm float-xs-right\">\n              <input type=\"checkbox\" class=\"switch-input\">\n              <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\n              <span class=\"switch-handle\"></span>\n            </label>\n          </div>\n          <div>\n            <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</small>\n          </div>\n        </div>\n\n        <div class=\"aside-options\">\n          <div class=\"clearfix mt-1\">\n            <small><b>Option 3</b>\n            </small>\n            <label class=\"switch switch-text switch-pill switch-success switch-sm float-xs-right\">\n              <input type=\"checkbox\" class=\"switch-input\">\n              <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\n              <span class=\"switch-handle\"></span>\n            </label>\n          </div>\n        </div>\n\n        <div class=\"aside-options\">\n          <div class=\"clearfix mt-1\">\n            <small><b>Option 4</b>\n            </small>\n            <label class=\"switch switch-text switch-pill switch-success switch-sm float-xs-right\">\n              <input type=\"checkbox\" class=\"switch-input\" checked>\n              <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\n              <span class=\"switch-handle\"></span>\n            </label>\n          </div>\n        </div>\n\n        <hr>\n        <h6>System Utilization</h6>\n\n        <div class=\"text-uppercase mb-q mt-2\">\n          <small><b>CPU Usage</b>\n          </small>\n        </div>\n        <progress class=\"progress progress-xs progress-info m-0\" value=\"25\" max=\"100\">25%</progress>\n        <small class=\"text-muted\">348 Processes. 1/4 Cores.</small>\n\n        <div class=\"text-uppercase mb-q mt-h\">\n          <small><b>Memory Usage</b>\n          </small>\n        </div>\n        <progress class=\"progress progress-xs progress-warning m-0\" value=\"70\" max=\"100\">70%</progress>\n        <small class=\"text-muted\">11444GB/16384MB</small>\n\n        <div class=\"text-uppercase mb-q mt-h\">\n          <small><b>SSD 1 Usage</b>\n          </small>\n        </div>\n        <progress class=\"progress progress-xs progress-danger m-0\" value=\"95\" max=\"100\">95%</progress>\n        <small class=\"text-muted\">243GB/256GB</small>\n\n        <div class=\"text-uppercase mb-q mt-h\">\n          <small><b>SSD 2 Usage</b>\n          </small>\n        </div>\n        <progress class=\"progress progress-xs progress-success m-0\" value=\"10\" max=\"100\">10%</progress>\n        <small class=\"text-muted\">25GB/256GB</small>\n      </div>\n    </tab>\n  </tabset>\n</aside>\n"

/***/ },

/***/ 839:
/***/ function(module, exports) {

module.exports = "<!-- Breadcrumb -->\n<ol class=\"breadcrumb\">\n  <breadcrumbs></breadcrumbs>\n\n  <!-- Breadcrumb Menu-->\n  <li class=\"breadcrumb-menu\">\n    <div class=\"btn-group\" role=\"group\" aria-label=\"Button group with nested dropdown\">\n      <a class=\"btn btn-secondary\" href=\"#\"><i class=\"icon-speech\"></i></a>\n      <a class=\"btn btn-secondary\" [routerLink]=\"['/dashboard']\"><i class=\"icon-graph\"></i> &nbsp;Dashboard</a>\n      <a class=\"btn btn-secondary\" href=\"#\"><i class=\"icon-settings\"></i> &nbsp;Settings</a>\n    </div>\n  </li>\n\n</ol>\n"

/***/ },

/***/ 840:
/***/ function(module, exports) {

module.exports = "<footer class=\"footer\">\n    <span class=\"text-left\">\n        <a href=\"http://coreui.io\">Projeto Raimundo</a> &copy; 2017\n    </span>\n  <span class=\"float-xs-right\">\n        Powered by <a href=\"http://coreui.io\">CoreUI</a>\n    </span>\n</footer>\n"

/***/ },

/***/ 841:
/***/ function(module, exports) {

module.exports = "<header class=\"navbar\">\n  <div class=\"container-fluid\">\n    <button class=\"navbar-toggler hidden-lg-up\" type=\"button\" mobile-nav-toggle>&#9776;</button>\n    <a class=\"navbar-brand\" href=\"#\"></a>\n\n    <ul class=\"nav navbar-nav hidden-md-down\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link navbar-toggler sidebar-toggle\" href=\"#\">&#9776;</a>\n      </li>\n      <li class=\"nav-item px-1\">\n        <a class=\"nav-link\" href=\"#\">Dashboard</a>\n      </li>\n      <li class=\"nav-item px-1\">\n        <a class=\"nav-link\" href=\"#\">Users</a>\n      </li>\n      <li class=\"nav-item px-1\">\n        <a class=\"nav-link\" href=\"#\">Settings</a>\n      </li>\n    </ul>\n    <ul class=\"nav navbar-nav float-xs-right hidden-md-down\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\"><i class=\"icon-bell\"></i><span class=\"tag tag-pill tag-danger\">5</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\"><i class=\"icon-list\"></i></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\"><i class=\"icon-location-pin\"></i></a>\n      </li>\n      <li class=\"nav-item dropdown\" dropdown (onToggle)=\"getUserInfo($event)\">\n        <a class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\" dropdownToggle>\n          <img src=\"assets/img/avatars/6.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n          <span class=\"hidden-md-down\">{{userInfo.displayName}}</span>\n        </a>\n        <div class=\"dropdown-menu dropdown-menu-right\" dropdownMenu aria-labelledby=\"simple-dropdown\">\n\n          <div class=\"dropdown-header text-xs-center\">\n            <strong>Account</strong>\n          </div>\n\n          <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-bell-o\"></i> Updates<span class=\"tag tag-info\">42</span></a>\n          <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-envelope-o\"></i> Messages<span class=\"tag tag-success\">42</span></a>\n          <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-tasks\"></i> Tasks<span class=\"tag tag-danger\">42</span></a>\n          <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-comments\"></i> Comment<span class=\"tag tag-warning\">42</span></a>\n\n          <div class=\"dropdown-header text-xs-center\">\n            <strong>Settings</strong>\n          </div>\n\n          <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-user\"></i> Profile</a>\n          <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-wrench\"></i> Setting</a>\n          <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-usd\"></i> Payments<span class=\"tag tag-default\">42</span></a>\n          <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-file\"></i> Projects<span class=\"tag tag-primary\">42</span></a>\n          <div class=\"divider\"></div>\n          <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-shield\"></i> Lock account</a>\n          <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-lock\"></i> Logout</a>\n        </div>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link navbar-toggler aside-toggle\" href=\"#\">&#9776;</a>\n      </li>\n    </ul>\n\n  </div>\n</header>\n"

/***/ },

/***/ 842:
/***/ function(module, exports) {

module.exports = "<div class=\"sidebar\">\n  <nav class=\"sidebar-nav\">\n    <ul class=\"nav\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/dashboard']\"><i class=\"icon-speedometer\"></i> Dashboard <span class=\"tag tag-info\">NEW</span></a>\n      </li>\n\n      <li class=\"divider\"></li>\n      <li class=\"nav-title\">\n        UI Elements\n      </li>\n      <li class=\"nav-item nav-dropdown\" routerLinkActive=\"open\">\n        <a class=\"nav-link nav-dropdown-toggle\" href=\"#\"><i class=\"icon-puzzle\"></i> Components</a>\n        <ul class=\"nav-dropdown-items\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/components/buttons']\"><i class=\"icon-puzzle\"></i> Buttons</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/components/social-buttons']\"><i class=\"icon-puzzle\"></i> Social Buttons</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/components/cards']\"><i class=\"icon-puzzle\"></i> Cards</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/components/forms']\"><i class=\"icon-puzzle\"></i> Forms</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/components/switches']\"><i class=\"icon-puzzle\"></i> Switches</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/components/tables']\"><i class=\"icon-puzzle\"></i> Tables</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/components/tabs']\"><i class=\"icon-puzzle\"></i> Tabs</a>\n          </li>\n        </ul>\n      </li>\n      <li class=\"nav-item nav-dropdown\" routerLinkActive=\"open\">\n        <a class=\"nav-link nav-dropdown-toggle\" href=\"#\"><i class=\"icon-star\"></i> Icons</a>\n        <ul class=\"nav-dropdown-items\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/icons/font-awesome']\"><i class=\"icon-star\"></i> Font Awesome</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/icons/simple-line-icons']\"><i class=\"icon-star\"></i> Simple Line Icons</a>\n          </li>\n        </ul>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/widgets']\"><i class=\"icon-calculator\"></i> Widgets <span class=\"tag tag-info\">NEW</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/charts']\"><i class=\"icon-pie-chart\"></i> Charts</a>\n      </li>\n      <li class=\"divider\"></li>\n      <li class=\"nav-title\">\n        Extras\n      </li>\n      <li class=\"nav-item nav-dropdown\">\n        <a class=\"nav-link nav-dropdown-toggle\" href=\"#\"><i class=\"icon-star\"></i> Pages</a>\n        <ul class=\"nav-dropdown-items\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/pages/login']\"><i class=\"icon-star\"></i> Login</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/pages/register']\"><i class=\"icon-star\"></i> Register</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/pages/404']\"><i class=\"icon-star\"></i> Error 404</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/pages/500']\"><i class=\"icon-star\"></i> Error 500</a>\n          </li>\n        </ul>\n      </li>\n\n    </ul>\n  </nav>\n</div>\n"

/***/ },

/***/ 843:
/***/ function(module, exports) {

module.exports = "<div class=\"container d-table\">\n  <div class=\"d-100vh-va-middle\">\n    <div class=\"row\">\n      <div class=\"col-md-8 offset-md-2\">\n        <div class=\"card-group\">\n          <div class=\"card p-2\">\n            <div class=\"card-block\">\n              <h1>Login {{loggedIn | async}}</h1>\n              <p class=\"text-muted\">Sign In to your account</p>\n              <div class=\"input-group mb-1\">\n                                <span class=\"input-group-addon\"><i class=\"icon-user\"></i>\n                                </span>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Username\" [(ngModel)]=\"loginUsername\">\n              </div>\n              <div class=\"input-group mb-2\">\n                                <span class=\"input-group-addon\"><i class=\"icon-lock\"></i>\n                                </span>\n                <input type=\"password\" class=\"form-control\" placeholder=\"Password\" [(ngModel)]=\"loginPassword\">\n              </div>\n              <span style=\"color:red\">{{errorMessage}}</span>\n              <div class=\"row\">\n                <div class=\"col-xs-6\">\n                  <button type=\"button\" (click)=\"login()\" class=\"btn btn-primary px-2\">Login</button>\n                </div>\n                <div class=\"col-xs-6 text-xs-right\">\n                  <button type=\"button\" (click)=\"logout()\" class=\"btn btn-link px-0\">Forgot password?</button>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"card card-inverse card-primary py-3 \" style=\"width:44%\">\n            <div class=\"card-block text-xs-center\">\n              <div>\n                <h2>Sign up</h2>\n                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>\n                <button type=\"button\" class=\"btn btn-primary active mt-1\" (click)=\"register()\">Register Now!</button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n"

/***/ },

/***/ 844:
/***/ function(module, exports) {

module.exports = "<div class=\"container d-table\">\n  <div class=\"d-100vh-va-middle\">\n    <div class=\"row\">\n      <div class=\"col-md-6 offset-md-3\">\n        <div class=\"card mx-2\">\n          <div class=\"card-block p-2\">\n            <h1>Register</h1>\n            <p class=\"text-muted\">Create your account</p>\n            <div class=\"input-group mb-1\">\n              <span class=\"input-group-addon\"><i class=\"icon-user\"></i></span>\n              <input type=\"text\" class=\"form-control\" placeholder=\"Username\" [(ngModel)]=\"username\">\n            </div>\n\n            <div class=\"input-group mb-1\">\n              <span class=\"input-group-addon\">@</span>\n              <input type=\"text\" class=\"form-control\" placeholder=\"Email\" [(ngModel)]=\"email\">\n            </div>\n\n            <div class=\"input-group mb-1\">\n              <span class=\"input-group-addon\"><i class=\"icon-lock\"></i></span>\n              <input type=\"password\" class=\"form-control\" placeholder=\"Password\" [(ngModel)]=\"password\">\n            </div>\n\n            <div class=\"input-group mb-2\">\n              <span class=\"input-group-addon\"><i class=\"icon-lock\"></i></span>\n              <input type=\"password\" class=\"form-control\" placeholder=\"Repeat password\" [(ngModel)]=\"passwordCheck\">\n            </div>\n\n            <span style=\"color: red\">{{errorMessage}}</span>\n            <button type=\"button\" class=\"btn btn-block btn-success\" (click)=\"createAccount()\">Create Account</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ },

/***/ 845:
/***/ function(module, exports) {

module.exports = "<app-header></app-header>\n\n\n<app-sidebar></app-sidebar>\n\n<!-- Main content -->\n<main class=\"main\">\n\n\n    <app-breadcrumb></app-breadcrumb>\n\n\n    <!-- AQUI -->\n    <div class=\"container-fluid\">\n        <div class=\"animated fadeIn\">\n    <div class=\"row\">\n        <div class=\"col-sm-6 col-lg-3\">\n            <div class=\"card card-inverse card-primary\">\n                <div class=\"card-block pb-0\">\n                    <div class=\"btn-group float-xs-right\" dropdown>\n                        <button type=\"button\" class=\"btn btn-transparent dropdown-toggle p-0\" dropdownToggle>\n                            <i class=\"icon-settings\"></i>\n                        </button>\n                        <div class=\"dropdown-menu dropdown-menu-right\" dropdownMenu>\n                            <a class=\"dropdown-item\" href=\"#\">Action</a>\n                            <a class=\"dropdown-item\" href=\"#\">Another action</a>\n                            <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n                        </div>\n                    </div>\n                    <h4 class=\"mb-0\">9.823</h4>\n                    <p>Members online</p>\n                </div>\n                <div class=\"chart-wrapper px-1\" style=\"height:70px;\">\n                    <canvas baseChart class=\"chart\" [datasets]=\"lineChart1Data\" [labels]=\"lineChart1Labels\" [options]=\"lineChart1Options\" [colors]=\"lineChart1Colours\" [legend]=\"lineChart1Legend\" [chartType]=\"lineChart1Type\" (chartHover)=\"chartHovered($event)\" (chartClick)=\"chartClicked($event)\"></canvas>\n                </div>\n            </div>\n        </div>\n        <!--/col-->\n        <div class=\"col-sm-6 col-lg-3\">\n            <div class=\"card card-inverse card-info\">\n                <div class=\"card-block pb-0\">\n                    <button type=\"button\" class=\"btn btn-transparent p-0 float-xs-right\">\n                        <i class=\"icon-location-pin\"></i>\n                    </button>\n                    <h4 class=\"mb-0\">9.823</h4>\n                    <p>Members online</p>\n                </div>\n                <div class=\"chart-wrapper px-1\" style=\"height:70px;\">\n                    <canvas baseChart class=\"chart\" [datasets]=\"lineChart2Data\" [labels]=\"lineChart2Labels\" [options]=\"lineChart2Options\" [colors]=\"lineChart2Colours\" [legend]=\"lineChart2Legend\" [chartType]=\"lineChart2Type\" (chartHover)=\"chartHovered($event)\" (chartClick)=\"chartClicked($event)\"></canvas>\n                </div>\n            </div>\n        </div>\n        <!--/col-->\n        <div class=\"col-sm-6 col-lg-3\">\n            <div class=\"card card-inverse card-warning\">\n                <div class=\"card-block pb-0\">\n                    <div class=\"btn-group float-xs-right\">\n                        <button type=\"button\" class=\"btn btn-transparent dropdown-toggle p-0\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                            <i class=\"icon-settings\"></i>\n                        </button>\n                        <div class=\"dropdown-menu dropdown-menu-right\">\n                            <a class=\"dropdown-item\" href=\"#\">Action</a>\n                            <a class=\"dropdown-item\" href=\"#\">Another action</a>\n                            <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n                        </div>\n                    </div>\n                    <h4 class=\"mb-0\">9.823</h4>\n                    <p>Members online</p>\n                </div>\n                <div class=\"chart-wrapper\" style=\"height:70px;\">\n                    <canvas baseChart class=\"chart\" [datasets]=\"lineChart3Data\" [labels]=\"lineChart3Labels\" [options]=\"lineChart3Options\" [colors]=\"lineChart3Colours\" [legend]=\"lineChart3Legend\" [chartType]=\"lineChart3Type\" (chartHover)=\"chartHovered($event)\" (chartClick)=\"chartClicked($event)\"></canvas>\n                </div>\n            </div>\n        </div>\n        <!--/col-->\n        <div class=\"col-sm-6 col-lg-3\">\n            <div class=\"card card-inverse card-danger\">\n                <div class=\"card-block pb-0\">\n                    <div class=\"btn-group float-xs-right\" dropdown>\n                        <button type=\"button\" class=\"btn btn-transparent dropdown-toggle p-0\" dropdownToggle>\n                            <i class=\"icon-settings\"></i>\n                        </button>\n                        <div class=\"dropdown-menu dropdown-menu-right\" dropdownMenu>\n                            <a class=\"dropdown-item\" href=\"#\">Action</a>\n                            <a class=\"dropdown-item\" href=\"#\">Another action</a>\n                            <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n                        </div>\n                    </div>\n                    <h4 class=\"mb-0\">9.823</h4>\n                    <p>Members online</p>\n                </div>\n                <div class=\"chart-wrapper px-1\" style=\"height:70px;\">\n                    <canvas baseChart class=\"chart\" [datasets]=\"barChart1Data\" [labels]=\"barChart1Labels\" [options]=\"barChart1Options\" [colors]=\"barChart1Colours\" [legend]=\"barChart1Legend\" [chartType]=\"barChart1Type\" (chartHover)=\"chartHovered($event)\" (chartClick)=\"chartClicked($event)\"></canvas>\n                </div>\n            </div>\n        </div>\n        <!--/col-->\n    </div>\n    <!--/row-->\n    <div class=\"card\">\n        <div class=\"card-block\">\n            <div class=\"row\">\n                <div class=\"col-sm-6\">\n                    <h4 class=\"card-title mb-0\">Traffic</h4>\n                    <div class=\"small text-muted\">November 2015</div>\n                </div>\n                <div class=\"col-sm-6\">\n                    <div class=\"btn-toolbar float-xs-right\" role=\"toolbar\" aria-label=\"Toolbar with button groups\">\n                        <div class=\"btn-group\" data-toggle=\"buttons\" aria-label=\"First group\">\n                            <label class=\"btn btn-outline-secondary\">\n                                <input type=\"radio\" name=\"options\" id=\"option1\">Day\n                            </label>\n                            <label class=\"btn btn-outline-secondary active\">\n                                <input type=\"radio\" name=\"options\" id=\"option2\" checked>Month\n                            </label>\n                            <label class=\"btn btn-outline-secondary\">\n                                <input type=\"radio\" name=\"options\" id=\"option3\">Year\n                            </label>\n                        </div>\n                        <div class=\"btn-group\" role=\"group\" aria-label=\"Second group\">\n                            <button type=\"button\" class=\"btn btn-primary\"><i class=\"icon-cloud-download\"></i>\n                            </button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"chart-wrapper\" style=\"height:300px;margin-top:40px;\">\n                <canvas baseChart class=\"chart\" [datasets]=\"mainChartData\" [labels]=\"mainChartLabels\" [options]=\"mainChartOptions\" [colors]=\"mainChartColours\" [legend]=\"mainChartLegend\" [chartType]=\"mainChartType\" (chartHover)=\"chartHovered($event)\" (chartClick)=\"chartClicked($event)\"></canvas>\n            </div>\n        </div>\n        <div class=\"card-footer\">\n            <ul>\n                <li>\n                    <div class=\"text-muted\">Visits</div>\n                    <strong>29.703 Users (40%)</strong>\n                    <progress class=\"progress progress-xs progress-success\" value=\"40\" max=\"100\">40%</progress>\n                </li>\n                <li class=\"hidden-xs-down\">\n                    <div class=\"text-muted\">Unique</div>\n                    <strong>24.093 Unique Users (20%)</strong>\n                    <progress class=\"progress progress-xs progress-info\" value=\"20\" max=\"100\">20%</progress>\n                </li>\n                <li>\n                    <div class=\"text-muted\">Pageviews</div>\n                    <strong>78.706 Views (60%)</strong>\n                    <progress class=\"progress progress-xs progress-warning\" value=\"60\" max=\"100\">60%</progress>\n                </li>\n                <li class=\"hidden-xs-down\">\n                    <div class=\"text-muted\">New Users</div>\n                    <strong>22.123 Users (80%)</strong>\n                    <progress class=\"progress progress-xs progress-danger\" value=\"80\" max=\"100\">80%</progress>\n                </li>\n                <li class=\"hidden-xs-down\">\n                    <div class=\"text-muted\">Bounce Rate</div>\n                    <strong>40.15%</strong>\n                    <progress class=\"progress progress-xs progress-primary\" value=\"40\" max=\"100\">40%</progress>\n                </li>\n            </ul>\n        </div>\n    </div>\n    <!--/.card-->\n    <div class=\"row\">\n        <div class=\"col-sm-6 col-lg-3\">\n            <div class=\"social-box facebook\">\n                <i class=\"fa fa-facebook\"></i>\n                <div class=\"chart-wrapper\">\n                    <canvas baseChart class=\"chart\" [datasets]=\"socialChartData1\" [labels]=\"socialChartLabels\" [options]=\"socialChartOptions\" [colors]=\"socialChartColours\" [legend]=\"socialChartLegend\" [chartType]=\"socialChartType\" (chartHover)=\"chartHovered($event)\" (chartClick)=\"chartClicked($event)\"></canvas>\n                </div>\n                <ul>\n                    <li>\n                        <strong>89k</strong>\n                        <span>friends</span>\n                    </li>\n                    <li>\n                        <strong>459</strong>\n                        <span>feeds</span>\n                    </li>\n                </ul>\n            </div>\n            <!--/.social-box-->\n        </div>\n        <!--/.col-->\n        <div class=\"col-sm-6 col-lg-3\">\n            <div class=\"social-box twitter\">\n                <i class=\"fa fa-twitter\"></i>\n                <div class=\"chart-wrapper\">\n                    <canvas baseChart class=\"chart\" [datasets]=\"socialChartData2\" [labels]=\"socialChartLabels\" [options]=\"socialChartOptions\" [colors]=\"socialChartColours\" [legend]=\"socialChartLegend\" [chartType]=\"socialChartType\" (chartHover)=\"chartHovered($event)\" (chartClick)=\"chartClicked($event)\"></canvas>\n                </div>\n                <ul>\n                    <li>\n                        <strong>973k</strong>\n                        <span>followers</span>\n                    </li>\n                    <li>\n                        <strong>1.792</strong>\n                        <span>tweets</span>\n                    </li>\n                </ul>\n            </div>\n            <!--/.social-box-->\n        </div>\n        <!--/.col-->\n        <div class=\"col-sm-6 col-lg-3\">\n            <div class=\"social-box linkedin\">\n                <i class=\"fa fa-linkedin\"></i>\n                <div class=\"chart-wrapper\">\n                    <canvas baseChart class=\"chart\" [datasets]=\"socialChartData3\" [labels]=\"socialChartLabels\" [options]=\"socialChartOptions\" [colors]=\"socialChartColours\" [legend]=\"socialChartLegend\" [chartType]=\"socialChartType\" (chartHover)=\"chartHovered($event)\" (chartClick)=\"chartClicked($event)\"></canvas>\n                </div>\n                <ul>\n                    <li>\n                        <strong>500+</strong>\n                        <span>contacts</span>\n                    </li>\n                    <li>\n                        <strong>292</strong>\n                        <span>feeds</span>\n                    </li>\n                </ul>\n            </div>\n            <!--/.social-box-->\n        </div>\n        <!--/.col-->\n        <div class=\"col-sm-6 col-lg-3\">\n            <div class=\"social-box google-plus\">\n                <i class=\"fa fa-google-plus\"></i>\n                <div class=\"chart-wrapper\">\n                    <canvas baseChart class=\"chart\" [datasets]=\"socialChartData4\" [labels]=\"socialChartLabels\" [options]=\"socialChartOptions\" [colors]=\"socialChartColours\" [legend]=\"socialChartLegend\" [chartType]=\"socialChartType\" (chartHover)=\"chartHovered($event)\" (chartClick)=\"chartClicked($event)\"></canvas>\n                </div>\n                <ul>\n                    <li>\n                        <strong>894</strong>\n                        <span>followers</span>\n                    </li>\n                    <li>\n                        <strong>92</strong>\n                        <span>circles</span>\n                    </li>\n                </ul>\n            </div>\n            <!--/.social-box-->\n        </div>\n        <!--/.col-->\n    </div>\n    <!--/.row-->\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <div class=\"card\">\n                <div class=\"card-header\">\n                    Traffic &amp; Sales\n                </div>\n                <div class=\"card-block\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-12 col-lg-4\">\n                            <div class=\"row\">\n                                <div class=\"col-sm-6\">\n                                    <div class=\"callout callout-info\">\n                                        <small class=\"text-muted\">New Clients</small>\n                                        <br>\n                                        <strong class=\"h4\">9,123</strong>\n                                        <div class=\"chart-wrapper\" style=\"width:100px;height:30px;\">\n                                            <canvas baseChart class=\"chart\" [datasets]=\"sparklineChartData1\" [labels]=\"sparklineChartLabels\" [options]=\"sparklineChartOptions\" [colors]=\"sparklineChartInfo\" [legend]=\"sparklineChartLegend\" [chartType]=\"sparklineChartType\" (chartHover)=\"chartHovered($event)\"\n                                            (chartClick)=\"chartClicked($event)\"></canvas>\n                                        </div>\n                                    </div>\n                                </div>\n                                <!--/.col-->\n                                <div class=\"col-sm-6\">\n                                    <div class=\"callout callout-danger\">\n                                        <small class=\"text-muted\">Recuring Clients</small>\n                                        <br>\n                                        <strong class=\"h4\">22,643</strong>\n                                        <div class=\"chart-wrapper\" style=\"width:100px;height:30px;\">\n                                            <canvas baseChart class=\"chart\" [datasets]=\"sparklineChartData2\" [labels]=\"sparklineChartLabels\" [options]=\"sparklineChartOptions\" [colors]=\"sparklineChartDanger\" [legend]=\"sparklineChartLegend\" [chartType]=\"sparklineChartType\" (chartHover)=\"chartHovered($event)\"\n                                            (chartClick)=\"chartClicked($event)\"></canvas>\n                                        </div>\n                                    </div>\n                                </div>\n                                <!--/.col-->\n                            </div>\n                            <!--/.row-->\n                            <hr class=\"mt-0\">\n                            <ul class=\"horizontal-bars\">\n                                <li>\n                                    <div class=\"title\">\n                                        Monday\n                                    </div>\n                                    <div class=\"bars\">\n                                        <progress class=\"progress progress-xs progress-info\" value=\"34\" max=\"100\" style=\"margin-bottom: 2px;\">34%</progress>\n                                        <progress class=\"progress progress-xs progress-danger m-0\" value=\"78\" max=\"100\">78%</progress>\n                                    </div>\n                                </li>\n                                <li>\n                                    <div class=\"title\">\n                                        Tuesday\n                                    </div>\n                                    <div class=\"bars\">\n                                        <progress class=\"progress progress-xs progress-info\" value=\"56\" max=\"100\" style=\"margin-bottom: 2px;\">56%</progress>\n                                        <progress class=\"progress progress-xs progress-danger m-0\" value=\"94\" max=\"100\">94%</progress>\n                                    </div>\n                                </li>\n                                <li>\n                                    <div class=\"title\">\n                                        Wednesday\n                                    </div>\n                                    <div class=\"bars\">\n                                        <progress class=\"progress progress-xs progress-info\" value=\"12\" max=\"100\" style=\"margin-bottom: 2px;\">12%</progress>\n                                        <progress class=\"progress progress-xs progress-danger m-0\" value=\"67\" max=\"100\">67%</progress>\n                                    </div>\n                                </li>\n                                <li>\n                                    <div class=\"title\">\n                                        Thursday\n                                    </div>\n                                    <div class=\"bars\">\n                                        <progress class=\"progress progress-xs progress-info\" value=\"43\" max=\"100\" style=\"margin-bottom: 2px;\">43%</progress>\n                                        <progress class=\"progress progress-xs progress-danger m-0\" value=\"91\" max=\"100\">91%</progress>\n                                    </div>\n                                </li>\n                                <li>\n                                    <div class=\"title\">\n                                        Friday\n                                    </div>\n                                    <div class=\"bars\">\n                                        <progress class=\"progress progress-xs progress-info\" value=\"22\" max=\"100\" style=\"margin-bottom: 2px;\">22%</progress>\n                                        <progress class=\"progress progress-xs progress-danger m-0\" value=\"73\" max=\"100\">73%</progress>\n                                    </div>\n                                </li>\n                                <li>\n                                    <div class=\"title\">\n                                        Saturday\n                                    </div>\n                                    <div class=\"bars\">\n                                        <progress class=\"progress progress-xs progress-info\" value=\"53\" max=\"100\" style=\"margin-bottom: 2px;\">53%</progress>\n                                        <progress class=\"progress progress-xs progress-danger m-0\" value=\"82\" max=\"100\">82%</progress>\n                                    </div>\n                                </li>\n                                <li>\n                                    <div class=\"title\">\n                                        Sunday\n                                    </div>\n                                    <div class=\"bars\">\n                                        <progress class=\"progress progress-xs progress-info\" value=\"9\" max=\"100\" style=\"margin-bottom: 2px;\">9%</progress>\n                                        <progress class=\"progress progress-xs progress-danger m-0\" value=\"69\" max=\"100\">69%</progress>\n                                    </div>\n                                </li>\n                                <li class=\"legend\">\n                                    <span class=\"tag tag-pill tag-info\"></span>\n                                    <small>New clients</small>&nbsp;\n                                    <span class=\"tag tag-pill tag-danger\"></span>\n                                    <small>Recurring clients</small>\n                                </li>\n                            </ul>\n                        </div>\n                        <!--/.col-->\n                        <div class=\"col-sm-6 col-lg-4\">\n                            <div class=\"row\">\n                                <div class=\"col-sm-6\">\n                                    <div class=\"callout callout-warning\">\n                                        <small class=\"text-muted\">Pageviews</small>\n                                        <br>\n                                        <strong class=\"h4\">78,623</strong>\n                                        <div class=\"chart-wrapper\" style=\"width:100px;height:30px;\">\n                                            <canvas baseChart class=\"chart\" [datasets]=\"sparklineChartData1\" [labels]=\"sparklineChartLabels\" [options]=\"sparklineChartOptions\" [colors]=\"sparklineChartWarning\" [legend]=\"sparklineChartLegend\" [chartType]=\"sparklineChartType\" (chartHover)=\"chartHovered($event)\"\n                                            (chartClick)=\"chartClicked($event)\"></canvas>\n                                        </div>\n                                    </div>\n                                </div>\n                                <!--/.col-->\n                                <div class=\"col-sm-6\">\n                                    <div class=\"callout callout-success\">\n                                        <small class=\"text-muted\">Organic</small>\n                                        <br>\n                                        <strong class=\"h4\">49,123</strong>\n                                        <div class=\"chart-wrapper\" style=\"width:100px;height:30px;\">\n                                            <canvas baseChart class=\"chart\" [datasets]=\"sparklineChartData2\" [labels]=\"sparklineChartLabels\" [options]=\"sparklineChartOptions\" [colors]=\"sparklineChartSuccess\" [legend]=\"sparklineChartLegend\" [chartType]=\"sparklineChartType\" (chartHover)=\"chartHovered($event)\"\n                                            (chartClick)=\"chartClicked($event)\"></canvas>\n                                        </div>\n                                    </div>\n                                </div>\n                                <!--/.col-->\n                            </div>\n                            <!--/.row-->\n                            <hr class=\"mt-0\">\n                            <ul class=\"horizontal-bars type-2\">\n                                <li>\n                                    <i class=\"icon-user\"></i>\n                                    <span class=\"title\">Male</span>\n                                    <span class=\"value\">43%</span>\n                                    <div class=\"bars\">\n                                        <progress class=\"progress progress-xs progress-warning m-0\" value=\"43\" max=\"100\">43%</progress>\n                                    </div>\n                                </li>\n                                <li>\n                                    <i class=\"icon-user-female\"></i>\n                                    <span class=\"title\">Female</span>\n                                    <span class=\"value\">37%</span>\n                                    <div class=\"bars\">\n                                        <progress class=\"progress progress-xs progress-warning m-0\" value=\"37\" max=\"100\">37%</progress>\n                                    </div>\n                                </li>\n                                <li class=\"divider\"></li>\n                                <li>\n                                    <i class=\"icon-globe\"></i>\n                                    <span class=\"title\">Organic Search</span>\n                                    <span class=\"value\">191,235\n                                        <span class=\"text-muted small\">(56%)</span>\n                                    </span>\n                                    <div class=\"bars\">\n                                        <progress class=\"progress progress-xs progress-success m-0\" value=\"56\" max=\"100\">56%</progress>\n                                    </div>\n                                </li>\n                                <li>\n                                    <i class=\"icon-social-facebook\"></i>\n                                    <span class=\"title\">Facebook</span>\n                                    <span class=\"value\">51,223\n                                        <span class=\"text-muted small\">(15%)</span>\n                                    </span>\n                                    <div class=\"bars\">\n                                        <progress class=\"progress progress-xs progress-success m-0\" value=\"15\" max=\"100\">15%</progress>\n                                    </div>\n                                </li>\n                                <li>\n                                    <i class=\"icon-social-twitter\"></i>\n                                    <span class=\"title\">Twitter</span>\n                                    <span class=\"value\">37,564\n                                        <span class=\"text-muted small\">(11%)</span>\n                                    </span>\n                                    <div class=\"bars\">\n                                        <progress class=\"progress progress-xs progress-success m-0\" value=\"11\" max=\"100\">11%</progress>\n                                    </div>\n                                </li>\n                                <li>\n                                    <i class=\"icon-social-linkedin\"></i>\n                                    <span class=\"title\">LinkedIn</span>\n                                    <span class=\"value\">27,319\n                                        <span class=\"text-muted small\">(8%)</span>\n                                    </span>\n                                    <div class=\"bars\">\n                                        <progress class=\"progress progress-xs progress-success m-0\" value=\"8\" max=\"100\">8%</progress>\n                                    </div>\n                                </li>\n                                <li class=\"divider text-xs-center\">\n                                    <button type=\"button\" class=\"btn btn-sm btn-link text-muted\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"\" data-original-title=\"show more\"><i class=\"icon-options\"></i>\n                                    </button>\n                                </li>\n                            </ul>\n                        </div>\n                        <!--/.col-->\n                        <div class=\"col-sm-6 col-lg-4\">\n                            <div class=\"row\">\n                                <div class=\"col-sm-6\">\n                                    <div class=\"callout\">\n                                        <small class=\"text-muted\">CTR</small>\n                                        <br>\n                                        <strong class=\"h4\">23%</strong>\n                                        <div class=\"chart-wrapper\" style=\"width:100px;height:30px;\">\n                                            <canvas baseChart class=\"chart\" [datasets]=\"sparklineChartData1\" [labels]=\"sparklineChartLabels\" [options]=\"sparklineChartOptions\" [colors]=\"sparklineChartDefault\" [legend]=\"sparklineChartLegend\" [chartType]=\"sparklineChartType\" (chartHover)=\"chartHovered($event)\"\n                                            (chartClick)=\"chartClicked($event)\"></canvas>\n                                        </div>\n                                    </div>\n                                </div>\n                                <!--/.col-->\n                                <div class=\"col-sm-6\">\n                                    <div class=\"callout callout-primary\">\n                                        <small class=\"text-muted\">Bounce Rate</small>\n                                        <br>\n                                        <strong class=\"h4\">5%</strong>\n                                        <div class=\"chart-wrapper\" style=\"width:100px;height:30px;\">\n                                            <canvas baseChart class=\"chart\" [datasets]=\"sparklineChartData2\" [labels]=\"sparklineChartLabels\" [options]=\"sparklineChartOptions\" [colors]=\"sparklineChartPrimary\" [legend]=\"sparklineChartLegend\" [chartType]=\"sparklineChartType\" (chartHover)=\"chartHovered($event)\"\n                                            (chartClick)=\"chartClicked($event)\"></canvas>\n                                        </div>\n                                    </div>\n                                </div>\n                                <!--/.col-->\n                            </div>\n                            <!--/.row-->\n                            <hr class=\"mt-0\">\n                            <ul class=\"icons-list\">\n                                <li>\n                                    <i class=\"icon-screen-desktop bg-primary\"></i>\n                                    <div class=\"desc\">\n                                        <div class=\"title\">iMac 4k</div>\n                                        <small>Lorem ipsum dolor sit amet</small>\n                                    </div>\n                                    <div class=\"value\">\n                                        <div class=\"small text-muted\">Sold this week</div>\n                                        <strong>1.924</strong>\n                                    </div>\n                                    <div class=\"actions\">\n                                        <button type=\"button\" class=\"btn btn-link text-muted\"><i class=\"icon-settings\"></i>\n                                        </button>\n                                    </div>\n                                </li>\n                                <li>\n                                    <i class=\"icon-screen-smartphone bg-info\"></i>\n                                    <div class=\"desc\">\n                                        <div class=\"title\">Samsung Galaxy Edge</div>\n                                        <small>Lorem ipsum dolor sit amet</small>\n                                    </div>\n                                    <div class=\"value\">\n                                        <div class=\"small text-muted\">Sold this week</div>\n                                        <strong>1.224</strong>\n                                    </div>\n                                    <div class=\"actions\">\n                                        <button type=\"button\" class=\"btn btn-link text-muted\"><i class=\"icon-settings\"></i>\n                                        </button>\n                                    </div>\n                                </li>\n                                <li>\n                                    <i class=\"icon-screen-smartphone bg-warning\"></i>\n                                    <div class=\"desc\">\n                                        <div class=\"title\">iPhone 6S</div>\n                                        <small>Lorem ipsum dolor sit amet</small>\n                                    </div>\n                                    <div class=\"value\">\n                                        <div class=\"small text-muted\">Sold this week</div>\n                                        <strong>1.163</strong>\n                                    </div>\n                                    <div class=\"actions\">\n                                        <button type=\"button\" class=\"btn btn-link text-muted\"><i class=\"icon-settings\"></i>\n                                        </button>\n                                    </div>\n                                </li>\n                                <li>\n                                    <i class=\"icon-user bg-danger\"></i>\n                                    <div class=\"desc\">\n                                        <div class=\"title\">Premium accounts</div>\n                                        <small>Lorem ipsum dolor sit amet</small>\n                                    </div>\n                                    <div class=\"value\">\n                                        <div class=\"small text-muted\">Sold this week</div>\n                                        <strong>928</strong>\n                                    </div>\n                                    <div class=\"actions\">\n                                        <button type=\"button\" class=\"btn btn-link text-muted\"><i class=\"icon-settings\"></i>\n                                        </button>\n                                    </div>\n                                </li>\n                                <li>\n                                    <i class=\"icon-social-spotify bg-success\"></i>\n                                    <div class=\"desc\">\n                                        <div class=\"title\">Spotify Subscriptions</div>\n                                        <small>Lorem ipsum dolor sit amet</small>\n                                    </div>\n                                    <div class=\"value\">\n                                        <div class=\"small text-muted\">Sold this week</div>\n                                        <strong>893</strong>\n                                    </div>\n                                    <div class=\"actions\">\n                                        <button type=\"button\" class=\"btn btn-link text-muted\"><i class=\"icon-settings\"></i>\n                                        </button>\n                                    </div>\n                                </li>\n                                <li>\n                                    <i class=\"icon-cloud-download bg-danger\"></i>\n                                    <div class=\"desc\">\n                                        <div class=\"title\">Ebook</div>\n                                        <small>Lorem ipsum dolor sit amet</small>\n                                    </div>\n                                    <div class=\"value\">\n                                        <div class=\"small text-muted\">Downloads</div>\n                                        <strong>121.924</strong>\n                                    </div>\n                                    <div class=\"actions\">\n                                        <button type=\"button\" class=\"btn btn-link text-muted\"><i class=\"icon-settings\"></i>\n                                        </button>\n                                    </div>\n                                </li>\n                                <li>\n                                    <i class=\"icon-camera bg-warning\"></i>\n                                    <div class=\"desc\">\n                                        <div class=\"title\">Photos</div>\n                                        <small>Lorem ipsum dolor sit amet</small>\n                                    </div>\n                                    <div class=\"value\">\n                                        <div class=\"small text-muted\">Uploaded</div>\n                                        <strong>12.125</strong>\n                                    </div>\n                                    <div class=\"actions\">\n                                        <button type=\"button\" class=\"btn btn-link text-muted\"><i class=\"icon-settings\"></i>\n                                        </button>\n                                    </div>\n                                </li>\n                                <li class=\"divider text-xs-center\">\n                                    <button type=\"button\" class=\"btn btn-sm btn-link text-muted\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"show more\"><i class=\"icon-options\"></i>\n                                    </button>\n                                </li>\n                            </ul>\n                        </div>\n                        <!--/.col-->\n                    </div>\n                    <!--/.row-->\n                    <br>\n                    <table class=\"table table-hover table-outline mb-0 hidden-sm-down\">\n                        <thead class=\"thead-default\">\n                            <tr>\n                                <th class=\"text-xs-center\"><i class=\"icon-people\"></i>\n                                </th>\n                                <th>User</th>\n                                <th class=\"text-xs-center\">Country</th>\n                                <th>Usage</th>\n                                <th class=\"text-xs-center\">Payment Method</th>\n                                <th>Activity</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr>\n                                <td class=\"text-xs-center\">\n                                    <div class=\"avatar\">\n                                        <img src=\"assets/img/avatars/1.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n                                        <span class=\"avatar-status tag-success\"></span>\n                                    </div>\n                                </td>\n                                <td>\n                                    <div>Yiorgos Avraamu</div>\n                                    <div class=\"small text-muted\">\n                                        <span>New</span>| Registered: Jan 1, 2015\n                                    </div>\n                                </td>\n                                <td class=\"text-xs-center\">\n                                    <img src=\"assets/img/flags/USA.png\" alt=\"USA\" style=\"height:24px;\">\n                                </td>\n                                <td>\n                                    <div class=\"clearfix\">\n                                        <div class=\"float-xs-left\">\n                                            <strong>50%</strong>\n                                        </div>\n                                        <div class=\"float-xs-right\">\n                                            <small class=\"text-muted\">Jun 11, 2015 - Jul 10, 2015</small>\n                                        </div>\n                                    </div>\n                                    <progress class=\"progress progress-xs progress-success\" value=\"50\" max=\"100\" style=\"margin:5px 0 0 0;\">50%</progress>\n                                </td>\n                                <td class=\"text-xs-center\">\n                                    <i class=\"fa fa-cc-mastercard\" style=\"font-size:24px\"></i>\n                                </td>\n                                <td>\n                                    <div class=\"small text-muted\">Last login</div>\n                                    <strong>10 sec ago</strong>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td class=\"text-xs-center\">\n                                    <div class=\"avatar\">\n                                        <img src=\"assets/img/avatars/2.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n                                        <span class=\"avatar-status tag-danger\"></span>\n                                    </div>\n                                </td>\n                                <td>\n                                    <div>Avram Tarasios</div>\n                                    <div class=\"small text-muted\">\n                                        <span>Recurring</span>| Registered: Jan 1, 2015\n                                    </div>\n                                </td>\n                                <td class=\"text-xs-center\">\n                                    <img src=\"assets/img/flags/Brazil.png\" alt=\"Brazil\" style=\"height:24px;\">\n                                </td>\n                                <td>\n                                    <div class=\"clearfix\">\n                                        <div class=\"float-xs-left\">\n                                            <strong>10%</strong>\n                                        </div>\n                                        <div class=\"float-xs-right\">\n                                            <small class=\"text-muted\">Jun 11, 2015 - Jul 10, 2015</small>\n                                        </div>\n                                    </div>\n                                    <progress class=\"progress progress-xs progress-info\" value=\"10\" max=\"100\" style=\"margin:5px 0 0 0;\">10%</progress>\n                                </td>\n                                <td class=\"text-xs-center\">\n                                    <i class=\"fa fa-cc-visa\" style=\"font-size:24px\"></i>\n                                </td>\n                                <td>\n                                    <div class=\"small text-muted\">Last login</div>\n                                    <strong>5 minutes ago</strong>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td class=\"text-xs-center\">\n                                    <div class=\"avatar\">\n                                        <img src=\"assets/img/avatars/3.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n                                        <span class=\"avatar-status tag-warning\"></span>\n                                    </div>\n                                </td>\n                                <td>\n                                    <div>Quintin Ed</div>\n                                    <div class=\"small text-muted\">\n                                        <span>New</span>| Registered: Jan 1, 2015\n                                    </div>\n                                </td>\n                                <td class=\"text-xs-center\">\n                                    <img src=\"assets/img/flags/India.png\" alt=\"India\" style=\"height:24px;\">\n                                </td>\n                                <td>\n                                    <div class=\"clearfix\">\n                                        <div class=\"float-xs-left\">\n                                            <strong>74%</strong>\n                                        </div>\n                                        <div class=\"float-xs-right\">\n                                            <small class=\"text-muted\">Jun 11, 2015 - Jul 10, 2015</small>\n                                        </div>\n                                    </div>\n                                    <progress class=\"progress progress-xs progress-warning\" value=\"74\" max=\"100\" style=\"margin:5px 0 0 0;\">74%</progress>\n                                </td>\n                                <td class=\"text-xs-center\">\n                                    <i class=\"fa fa-cc-stripe\" style=\"font-size:24px\"></i>\n                                </td>\n                                <td>\n                                    <div class=\"small text-muted\">Last login</div>\n                                    <strong>1 hour ago</strong>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td class=\"text-xs-center\">\n                                    <div class=\"avatar\">\n                                        <img src=\"assets/img/avatars/4.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n                                        <span class=\"avatar-status tag-default\"></span>\n                                    </div>\n                                </td>\n                                <td>\n                                    <div>Enéas Kwadwo</div>\n                                    <div class=\"small text-muted\">\n                                        <span>New</span>| Registered: Jan 1, 2015\n                                    </div>\n                                </td>\n                                <td class=\"text-xs-center\">\n                                    <img src=\"assets/img/flags/France.png\" alt=\"France\" style=\"height:24px;\">\n                                </td>\n                                <td>\n                                    <div class=\"clearfix\">\n                                        <div class=\"float-xs-left\">\n                                            <strong>98%</strong>\n                                        </div>\n                                        <div class=\"float-xs-right\">\n                                            <small class=\"text-muted\">Jun 11, 2015 - Jul 10, 2015</small>\n                                        </div>\n                                    </div>\n                                    <progress class=\"progress progress-xs progress-danger\" value=\"98\" max=\"100\" style=\"margin:5px 0 0 0;\">98%</progress>\n                                </td>\n                                <td class=\"text-xs-center\">\n                                    <i class=\"fa fa-paypal\" style=\"font-size:24px\"></i>\n                                </td>\n                                <td>\n                                    <div class=\"small text-muted\">Last login</div>\n                                    <strong>Last month</strong>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td class=\"text-xs-center\">\n                                    <div class=\"avatar\">\n                                        <img src=\"assets/img/avatars/5.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n                                        <span class=\"avatar-status tag-success\"></span>\n                                    </div>\n                                </td>\n                                <td>\n                                    <div>Agapetus Tadeáš</div>\n                                    <div class=\"small text-muted\">\n                                        <span>New</span>| Registered: Jan 1, 2015\n                                    </div>\n                                </td>\n                                <td class=\"text-xs-center\">\n                                    <img src=\"assets/img/flags/Spain.png\" alt=\"Spain\" style=\"height:24px;\">\n                                </td>\n                                <td>\n                                    <div class=\"clearfix\">\n                                        <div class=\"float-xs-left\">\n                                            <strong>22%</strong>\n                                        </div>\n                                        <div class=\"float-xs-right\">\n                                            <small class=\"text-muted\">Jun 11, 2015 - Jul 10, 2015</small>\n                                        </div>\n                                    </div>\n                                    <progress class=\"progress progress-xs progress-info\" value=\"22\" max=\"100\" style=\"margin:5px 0 0 0;\">22%</progress>\n                                </td>\n                                <td class=\"text-xs-center\">\n                                    <i class=\"fa fa-google-wallet\" style=\"font-size:24px\"></i>\n                                </td>\n                                <td>\n                                    <div class=\"small text-muted\">Last login</div>\n                                    <strong>Last week</strong>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td class=\"text-xs-center\">\n                                    <div class=\"avatar\">\n                                        <img src=\"assets/img/avatars/6.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n                                        <span class=\"avatar-status tag-danger\"></span>\n                                    </div>\n                                </td>\n                                <td>\n                                    <div>Friderik Dávid</div>\n                                    <div class=\"small text-muted\">\n                                        <span>New</span>| Registered: Jan 1, 2015\n                                    </div>\n                                </td>\n                                <td class=\"text-xs-center\">\n                                    <img src=\"assets/img/flags/Poland.png\" alt=\"Poland\" style=\"height:24px;\">\n                                </td>\n                                <td>\n                                    <div class=\"clearfix\">\n                                        <div class=\"float-xs-left\">\n                                            <strong>43%</strong>\n                                        </div>\n                                        <div class=\"float-xs-right\">\n                                            <small class=\"text-muted\">Jun 11, 2015 - Jul 10, 2015</small>\n                                        </div>\n                                    </div>\n                                    <progress class=\"progress progress-xs progress-success\" value=\"43\" max=\"100\" style=\"margin:5px 0 0 0;\">43%</progress>\n                                </td>\n                                <td class=\"text-xs-center\">\n                                    <i class=\"fa fa-cc-amex\" style=\"font-size:24px\"></i>\n                                </td>\n                                <td>\n                                    <div class=\"small text-muted\">Last login</div>\n                                    <strong>Yesterday</strong>\n                                </td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n        <!--/.col-->\n    </div>\n    <!--/.row-->\n</div>\n\n    </div>\n    <!-- AQUI -->\n    <!-- /.conainer-fluid -->\n</main>\n\n<app-asidemenu></app-asidemenu>\n\n<app-footer></app-footer>\n"

/***/ },

/***/ 96:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(94);
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
    FirebaseService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2__["a" /* AngularFireDatabase */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angularfire2__["a" /* AngularFireDatabase */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2__["b" /* AngularFireAuth */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angularfire2__["b" /* AngularFireAuth */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* Router */]) === 'function' && _c) || Object])
    ], FirebaseService);
    return FirebaseService;
    var _a, _b, _c;
}());
//# sourceMappingURL=/home/leo/AutonomousDoorman/webserver/src/firebase.service.js.map

/***/ }

},[1108]);
//# sourceMappingURL=main.bundle.map