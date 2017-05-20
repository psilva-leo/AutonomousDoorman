webpackJsonp([0,4],{

/***/ 1180:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 1180;


/***/ },

/***/ 1181:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(549);


/***/ },

/***/ 262:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_modal__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_modal_plugins_bootstrap__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_firebase_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(32);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return NewVenueComponent; });
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





var NewVenueComponent = (function () {
    function NewVenueComponent(dialog, firebaseService, modal, router) {
        var _this = this;
        this.dialog = dialog;
        this.firebaseService = firebaseService;
        this.modal = modal;
        this.router = router;
        this.context = dialog.context;
        this.context.isBlocking = false;
        this.context.showClose = true;
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
            this.dialog.dismiss();
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
    NewVenueComponent.prototype.closeModal = function () {
        this.dialog.dismiss();
    };
    NewVenueComponent.prototype.onKeyUp = function (value) {
        this.dialog.close();
    };
    NewVenueComponent.prototype.beforeDismiss = function () {
        return true;
    };
    NewVenueComponent.prototype.beforeClose = function () {
        return true;
    };
    NewVenueComponent.prototype.ngOnInit = function () { };
    NewVenueComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-new-venue',
            template: __webpack_require__(917),
            styles: [__webpack_require__(895)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_modal__["e" /* DialogRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angular2_modal__["e" /* DialogRef */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_firebase_service__["a" /* FirebaseService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_firebase_service__["a" /* FirebaseService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_modal_plugins_bootstrap__["a" /* Modal */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angular2_modal_plugins_bootstrap__["a" /* Modal */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === 'function' && _d) || Object])
    ], NewVenueComponent);
    return NewVenueComponent;
    var _a, _b, _c, _d;
}());
var CustomModalContext = (function (_super) {
    __extends(CustomModalContext, _super);
    function CustomModalContext() {
        _super.apply(this, arguments);
    }
    return CustomModalContext;
}(__WEBPACK_IMPORTED_MODULE_2_angular2_modal_plugins_bootstrap__["b" /* BSModalContext */]));
//# sourceMappingURL=C:/Users/psilv/PycharmProjects/AutonomousDoorman/webserver/src/new-venue.component.js.map

/***/ },

/***/ 263:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__firebase_service__ = __webpack_require__(27);
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
    StatisticsService.prototype.calculateMonthly = function () {
        var count = {};
        var venuesKeys = [];
        // Setting count to 0 for each venues
        // console.log('length: '+this.venues.length);
        for (var i = 0; i < this.venues.length; i++) {
            count[this.venues[i].$key] = 0;
            venuesKeys.push(this.venues[i].$key);
        }
        for (var i = 0; i < this.logs.length; i++) {
            var allowedBy = this.logs[i].permission;
            var venue = this.logs[i].venue;
            var year = this.logs[i].date.year;
            var month = this.logs[i].date.month;
            var day = this.logs[i].date.day;
            var time = this.logs[i].date.time;
            var date = new Date(year + "-" + month + "-" + day + ":" + time);
            var daymil = 24 * 60 * 60 * 1000 * 30;
            var timeDiff = Date.now() - date.getTime();
            if (timeDiff / daymil <= 1) {
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
            var allowedBy = this.logs[i].permission;
            var venue = this.logs[i].venue;
            var year = this.logs[i].date.year;
            var month = this.logs[i].date.month;
            var day = this.logs[i].date.day;
            var time = this.logs[i].date.time;
            var date = new Date(year + "-" + month + "-" + day + ":" + time);
            var daymil = 24 * 60 * 60 * 1000 * 7;
            var timeDiff = Date.now() - date.getTime();
            if (timeDiff / daymil <= 1) {
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

/***/ 27:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(248);
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
    function FirebaseService(db, auth, router, http) {
        var _this = this;
        this.db = db;
        this.auth = auth;
        this.router = router;
        this.http = http;
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
        this.firstFlag = false;
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
        this.storage = __WEBPACK_IMPORTED_MODULE_6_firebase__["storage"]().ref();
    }
    FirebaseService.prototype.uploadMemberImage = function (file, venue, id, fileName) {
        var _this = this;
        this.storage.child(this.userInfo.uid + '/' + venue + '/' + id + '/' + fileName + '.jpg').put(file).then(function () {
            if (fileName == '1') {
                console.log('flag up');
                _this.firstFlag = true;
            }
        });
    };
    FirebaseService.prototype.uploadLogImage = function (file, id) {
        this.storage.child(this.userInfo.uid + '/Logs/' + id + '.jpg').put(file);
    };
    FirebaseService.prototype.getURL = function (photourl) {
        return this.storage.child(photourl).getDownloadURL();
    };
    FirebaseService.prototype.getPhotoUrl = function (photourl) {
        console.log(photourl);
        return this.storage.child(photourl).getDownloadURL();
    };
    FirebaseService.prototype.getAuthenticated = function () { return this.auth; };
    FirebaseService.prototype.getUserInfo = function () {
        return this.userInfo;
    };
    FirebaseService.prototype.login = function (username, password) {
        var _this = this;
        var error;
        this.auth.login({ email: username, password: password }).then(function (success) {
            console.log('Logged in');
            var body = document.getElementsByTagName('body')[0];
            body.className = "navbar-fixed sidebar-nav fixed-nav"; // add classes removed from login page
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
        this.router.navigate(['/login']);
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
                    _this.user.auth.updateProfile({ displayName: username, photoURL: _this.user.auth.uid + '/Profile/1.jpg' });
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
        var _this = this;
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
            photourl: memberInfo.photourl,
        };
        for (var i = 0; i < groups.length; i++) {
            data.Members[memberInfo.id]['Groups'][i] = { id: groups[i].name };
        }
        this.db.object(this.userInfo.uid + '/Venues/' + venue).update(data);
        this.getPhotoUrl(this.userInfo.uid + '/Profile/1.jpg').then(function (url) {
            var self = _this;
            var xhr = new XMLHttpRequest();
            xhr.responseType = 'blob';
            xhr.onload = function (event) {
                var blob = xhr.response;
                self.uploadMemberImage(blob, venue, '1', '1');
            };
            xhr.open('GET', url);
            xhr.send();
        });
        this.notifyNewMember(venue);
    };
    FirebaseService.prototype.createAndAddMember = function (venue, group, memberInfo, filelist) {
        var _this = this;
        this.firstFlag = false;
        var data = {};
        memberInfo.id = this.members[venue].length;
        this.storage.child(this.userInfo.uid + '/' + venue + '/' + memberInfo.id + '/1.jpg').put(filelist[0]).then(function () {
            data[memberInfo.id] = {
                Data: {
                    name: memberInfo.name,
                    email: memberInfo.email,
                    photourl: _this.userInfo.uid + '/' + venue + '/' + memberInfo.id + '/1.jpg',
                },
                Groups: {
                    0: {
                        id: group,
                    }
                }
            };
            _this.db.object(_this.userInfo.uid + '/Venues/' + venue + '/Members/').update(data);
            data = {};
            data[_this.groups[venue][group]['Members'].length] = { id: memberInfo.id };
            _this.db.object(_this.userInfo.uid + '/Venues/' + venue + '/Groups/' + group + '/Members/').update(data);
        });
        for (var i = 1; i < filelist.length; i++) {
            this.uploadMemberImage(filelist[i], venue, memberInfo.id, (i + 1).toString());
        }
        this.notifyNewMember(venue);
    };
    FirebaseService.prototype.addExistingMemberToGroup = function (venue, group, memberInfo) {
        var data = {};
        data[this.groups[venue][group]['Members'].length] = { id: memberInfo.id };
        this.db.object(this.userInfo.uid + '/Venues/' + venue + '/Groups/' + group + '/Members').update(data);
        data = {};
        data[this.members[venue][memberInfo.id]['Groups'].length] = { id: group };
        this.db.object(this.userInfo.uid + '/Venues/' + venue + '/Members/' + memberInfo.id + '/Groups').update(data);
    };
    FirebaseService.prototype.createGroup = function (venue, name, start, end, memberInfo) {
        var data = {};
        data[name] = {
            Time: {}
        };
        data[name]['Time']['start'] = start;
        data[name]['Time']['end'] = end;
        data[name]['Members'] = {
            0: {
                id: memberInfo.id
            }
        };
        this.db.object(this.userInfo.uid + '/Venues/' + venue + '/Groups').update(data);
        data = {};
        data[this.members[venue][memberInfo.id]['Groups'].length] = { id: name };
        this.db.object(this.userInfo.uid + '/Venues/' + venue + '/Members/' + memberInfo.id + '/Groups').update(data);
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
            photourl: this.userInfo.uid + '/' + venue + '/1/1.jpg',
            groups: [],
        };
        this.createInitialMember(venue, groups, memberInfo);
    };
    FirebaseService.prototype.deleteMember = function (venue, id, group) {
        console.log(venue + ' ' + id);
        console.log(this.members[venue][id]['Groups'].length);
        var i = 1;
        function loop(self) {
            console.log(self.userInfo.uid + '/' + venue + '/' + id + '/' + i + '.jpg');
            self.storage.child(self.userInfo.uid + '/' + venue + '/' + id + '/' + i + '.jpg').delete()
                .then(function (res) {
                i++;
                loop(self);
            });
        }
        // If group has just one member delete group
        if (this.groups[venue][group]['Members'].length == 1) {
            this.deleteGroup(group, venue); // Delete members included in delete group
        }
        else {
            for (var m in this.groups[venue][group]['Members']) {
                var memberID = this.groups[venue][group]['Members'][m]['id'];
                if (memberID == id) {
                    this.db.object(this.userInfo.uid + '/Venues/' + venue + '/Groups/' + group + '/Members/' + m).remove();
                }
            }
            for (var g in this.members[venue]['Groups']) {
                if (this.members[venue]['Groups'][g]['id'] == group) {
                    this.db.object(this.userInfo.uid + '/Venues/' + venue + '/Members/' + id + '/Groups/' + g).remove();
                }
            }
        }
        if (this.members[venue][id]['Groups'].length == 1) {
            // Deleting photos
            loop(this);
            // Deleting member info
            this.db.object(this.userInfo.uid + '/Venues/' + venue + '/Members/' + id).remove();
            this.notifyDeletedMember(venue);
        }
    };
    FirebaseService.prototype.deleteGroup = function (group, venue) {
        for (var member in this.groups[venue][group]['Members']) {
            var memberID = this.groups[venue][group]['Members'][member]['id'];
            console.log(this.groups[venue][group]['Members'][member]['id']);
            for (var i in this.members[venue][memberID]['Groups']) {
                if (this.members[venue][memberID]['Groups'][i]['id'] == group) {
                    if (this.members[venue][memberID]['Groups'].length == 1) {
                        this.db.object(this.userInfo.uid + '/Venues/' + venue + '/Members/' + memberID).remove();
                        this.notifyDeletedMember(venue);
                    }
                    else {
                        this.db.object(this.userInfo.uid + '/Venues/' + venue + '/Members/' + memberID + '/Groups/' + i).remove();
                    }
                }
            }
        }
        this.db.object(this.userInfo.uid + '/Venues/' + venue + '/Groups/' + group).remove();
    };
    FirebaseService.prototype.editGroup = function (group, venue, start, end) {
        var edit = {};
        edit['start'] = start;
        edit['end'] = end;
        this.db.object(this.userInfo.uid + '/Venues/' + venue + '/Groups/' + group + '/Time/').set(edit);
    };
    FirebaseService.prototype.notifyNewMember = function (venue) {
        var timestamp = Math.floor(Date.now() / 1000);
        var data = {};
        data[timestamp] = 'New Member';
        this.db.object(this.userInfo.uid + '/Venues/' + venue + '/CrossConnection').set(data);
    };
    FirebaseService.prototype.notifyDeletedMember = function (venue) {
        var timestamp = Math.floor(Date.now() / 1000);
        var data = {};
        data[timestamp] = 'Deleted Member';
        this.db.object(this.userInfo.uid + '/Venues/' + venue + '/CrossConnection').set(data);
    };
    FirebaseService.prototype.openDoor = function (venue) {
        var timestamp = Math.floor(Date.now() / 1000);
        var data = {};
        data[timestamp] = 'Open Door';
        this.db.object(this.userInfo.uid + '/Venues/' + venue + '/CrossConnection').set(data);
    };
    FirebaseService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2__["a" /* AngularFireDatabase */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angularfire2__["a" /* AngularFireDatabase */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2__["b" /* AngularFireAuth */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angularfire2__["b" /* AngularFireAuth */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* Router */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_7__angular_http__["a" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_7__angular_http__["a" /* Http */]) === 'function' && _d) || Object])
    ], FirebaseService);
    return FirebaseService;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=C:/Users/psilv/PycharmProjects/AutonomousDoorman/webserver/src/firebase.service.js.map

/***/ },

/***/ 423:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_modal__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_modal_plugins_bootstrap__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_firebase_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(32);
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
    function AddUserModalComponent(dialog, firebaseService, modal, router, ref) {
        var _this = this;
        this.dialog = dialog;
        this.firebaseService = firebaseService;
        this.modal = modal;
        this.router = router;
        this.ref = ref;
        this.newMember = { name: "", email: "", id: "", photourl: "", groups: [] };
        this.context = dialog.context;
        this.context.isBlocking = false;
        this.confirmationMessage = "";
        this.fileList = null;
        this.firebaseService.findMembers(this.context.venueName).subscribe(function (members) {
            _this.membersId = [];
            _this.members = [];
            var _loop_1 = function(i) {
                var newMember = void 0;
                newMember = { email: members[i]['Data']['email'], name: members[i]['Data']['name'], id: (i + 1).toString(), groups: [],
                    photourl: '/assets/img/loading_profile.png' };
                for (var j = 0; j < members[i]['Groups'].length; j++) {
                    newMember.groups.push(members[i]['Groups'][j].id);
                }
                _this.members.push(newMember);
                _this.firebaseService.getPhotoUrl(members[i]['Data']['photourl']).then(function (url) {
                    _this.members[i].photourl = url;
                    _this.ref.detectChanges();
                });
            };
            for (var i = 0; i < members.length; i++) {
                _loop_1(i);
            }
        });
    }
    AddUserModalComponent.prototype.trackByIndex = function (index, obj) {
        return index;
    };
    AddUserModalComponent.prototype.fileChange = function (event) {
        this.fileList = event.target.files;
        for (var i = 0; i < this.fileList.length; i++) {
            var filename = this.fileList[i].name;
            if (filename.split('.').pop() != 'jpg') {
                this.fileList = null;
                var input = document.getElementById('input-upload');
                input.value = "";
                this.confirmationMessage = "Don't try to fool me. Use .jpg image only =P";
                break;
            }
            else {
                this.confirmationMessage = "";
            }
        }
    };
    AddUserModalComponent.prototype.onKeyUp = function (value) {
        console.log(this.newMember);
        this.dialog.close();
    };
    AddUserModalComponent.prototype.addMemberToGroup = function (member) {
        var _this = this;
        this.modal.confirm()
            .size('sm')
            .isBlocking(true)
            .showClose(true)
            .keyboard(27)
            .title('Attention')
            .body('Do you want to add  ' + member.name + ', ' + member.email + ' to group ' + this.context.groupName + '?')
            .open()
            .then(function (dialog) { return dialog.result; })
            .then(function (result) {
            _this.firebaseService.addExistingMemberToGroup(_this.context.venueName, _this.context.groupName, member);
            _this.dialog.close();
        })
            .catch(function (err) { });
    };
    AddUserModalComponent.prototype.createNewMember = function () {
        console.log('create new member: ' + this.newMember.name + " " + this.newMember.email);
        this.firebaseService.createAndAddMember(this.context.venueName, this.context.groupName, this.newMember, this.fileList);
    };
    AddUserModalComponent.prototype.submit = function () {
        this.newMember.name = this.newMember.name.trim();
        this.newMember.email = this.newMember.email.trim();
        if (this.newMember.name != "" && typeof this.newMember.name != "undefined"
            && this.newMember.email != "" && typeof this.newMember.email != "undefined"
            && this.fileList != null && this.fileList.length > 0) {
            if (this.newMember.email.indexOf('@') == -1) {
                this.confirmationMessage = "Error: Email not formatted correctly.";
            }
            else {
                this.createNewMember();
                this.confirmationMessage = this.newMember.name + " successfully added to " + this.context.groupName;
                this.newMember = { name: "", email: "", id: "", photourl: "", groups: [] };
                this.dialog.close();
            }
        }
        else {
            this.confirmationMessage = "Error: Could mot create member because the name or email are blank or no photo were added.";
        }
    };
    AddUserModalComponent.prototype.beforeDismiss = function () {
        return true;
    };
    AddUserModalComponent.prototype.beforeClose = function () {
        return true;
    };
    AddUserModalComponent.prototype.ngOnInit = function () { };
    AddUserModalComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-user-modal',
            template: __webpack_require__(904),
            styles: [__webpack_require__(884)],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_modal__["e" /* DialogRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angular2_modal__["e" /* DialogRef */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_firebase_service__["a" /* FirebaseService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_firebase_service__["a" /* FirebaseService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_modal_plugins_bootstrap__["a" /* Modal */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angular2_modal_plugins_bootstrap__["a" /* Modal */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === 'function' && _e) || Object])
    ], AddUserModalComponent);
    return AddUserModalComponent;
    var _a, _b, _c, _d, _e;
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

/***/ 424:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_modal__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_modal_plugins_bootstrap__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_firebase_service__ = __webpack_require__(27);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CreateGroupModalComponent; });
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




var CreateGroupModalComponent = (function () {
    function CreateGroupModalComponent(dialog, firebaseService, modal, ref) {
        var _this = this;
        this.dialog = dialog;
        this.firebaseService = firebaseService;
        this.modal = modal;
        this.ref = ref;
        this.context = dialog.context;
        this.context.isBlocking = false;
        this.confirmationMessage = "";
        this.addedList = [];
        this.groupName = "";
        this.start = "";
        this.end = "";
        this.firebaseService.findMembers(this.context.venueName).subscribe(function (members) {
            _this.members = [];
            var _loop_1 = function(i) {
                var newMember = void 0;
                newMember = { email: members[i]['Data']['email'], name: members[i]['Data']['name'], id: (i + 1).toString(), groups: [],
                    photourl: '/assets/img/loading_profile.png' };
                for (var j = 0; j < members[i]['Groups'].length; j++) {
                    newMember.groups.push(members[i]['Groups'][j].id);
                }
                _this.members.push(newMember);
                _this.firebaseService.getPhotoUrl(members[i]['Data']['photourl']).then(function (url) {
                    _this.members[i].photourl = url;
                    _this.ref.detectChanges();
                });
                _this.addedList.push(false);
            };
            for (var i = 0; i < members.length; i++) {
                _loop_1(i);
            }
        });
    }
    CreateGroupModalComponent.prototype.trackByIndex = function (index, obj) {
        return index;
    };
    CreateGroupModalComponent.prototype.onKeyUp = function (value) {
        this.dialog.close();
    };
    CreateGroupModalComponent.prototype.addMemberToGroup = function (index) {
        this.addedList[index] = !this.addedList[index];
    };
    CreateGroupModalComponent.prototype.submit = function () {
        this.groupName = this.groupName.trim();
        if (this.groupName != "" && this.start != "" && this.end != "" && this.addedList.indexOf(true) != -1) {
            var first = this.addedList.indexOf(true);
            this.firebaseService.createGroup(this.context.venueName, this.groupName, this.start, this.end, this.members[first]);
            for (var i = first + 1; i < this.addedList.length; i++) {
                if (this.addedList[i]) {
                    this.firebaseService.addExistingMemberToGroup(this.context.venueName, this.groupName, this.members[i]);
                }
            }
            this.dialog.close();
        }
        else {
            this.confirmationMessage = "Error: Could mot create member because the name or email are blank or no photo were added.";
        }
    };
    CreateGroupModalComponent.prototype.reset = function () {
        this.confirmationMessage = "";
        this.start = "";
        this.end = "";
        this.groupName = "";
    };
    CreateGroupModalComponent.prototype.beforeDismiss = function () {
        return true;
    };
    CreateGroupModalComponent.prototype.beforeClose = function () {
        return true;
    };
    CreateGroupModalComponent.prototype.ngOnInit = function () { };
    CreateGroupModalComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-create-group-modal',
            template: __webpack_require__(905),
            styles: [__webpack_require__(885)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_modal__["e" /* DialogRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angular2_modal__["e" /* DialogRef */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_firebase_service__["a" /* FirebaseService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_firebase_service__["a" /* FirebaseService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_modal_plugins_bootstrap__["a" /* Modal */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angular2_modal_plugins_bootstrap__["a" /* Modal */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === 'function' && _d) || Object])
    ], CreateGroupModalComponent);
    return CreateGroupModalComponent;
    var _a, _b, _c, _d;
}());
var CustomModalContext = (function (_super) {
    __extends(CustomModalContext, _super);
    function CustomModalContext() {
        _super.apply(this, arguments);
    }
    return CustomModalContext;
}(__WEBPACK_IMPORTED_MODULE_2_angular2_modal_plugins_bootstrap__["b" /* BSModalContext */]));
//# sourceMappingURL=C:/Users/psilv/PycharmProjects/AutonomousDoorman/webserver/src/create-group-modal.component.js.map

/***/ },

/***/ 425:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_modal__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_modal_plugins_bootstrap__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_firebase_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(32);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return EditGroupModalComponent; });
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





var EditGroupModalComponent = (function () {
    function EditGroupModalComponent(dialog, firebaseService, modal, router) {
        var _this = this;
        this.dialog = dialog;
        this.firebaseService = firebaseService;
        this.modal = modal;
        this.router = router;
        this.context = dialog.context;
        this.context.isBlocking = false;
        this.firebaseService.findGroups(this.context.venueName).subscribe(function (groups) {
            console.log(groups);
            for (var i = 0; i < groups.length; i++) {
                if (groups[i].$key == _this.context.groupName) {
                    console.log(groups[i]);
                    _this.start = groups[i]['Time']['start'];
                    _this.end = groups[i]['Time']['end'];
                }
            }
        });
    }
    EditGroupModalComponent.prototype.submit = function () {
        this.firebaseService.editGroup(this.context.groupName, this.context.venueName, this.start, this.end);
        this.dialog.close();
    };
    EditGroupModalComponent.prototype.ngOnInit = function () {
    };
    EditGroupModalComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit-group-modal',
            template: __webpack_require__(907),
            styles: [__webpack_require__(887)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_modal__["e" /* DialogRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angular2_modal__["e" /* DialogRef */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_firebase_service__["a" /* FirebaseService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_firebase_service__["a" /* FirebaseService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_modal_plugins_bootstrap__["a" /* Modal */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angular2_modal_plugins_bootstrap__["a" /* Modal */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === 'function' && _d) || Object])
    ], EditGroupModalComponent);
    return EditGroupModalComponent;
    var _a, _b, _c, _d;
}());
var CustomModalContext = (function (_super) {
    __extends(CustomModalContext, _super);
    function CustomModalContext() {
        _super.apply(this, arguments);
    }
    return CustomModalContext;
}(__WEBPACK_IMPORTED_MODULE_2_angular2_modal_plugins_bootstrap__["b" /* BSModalContext */]));
//# sourceMappingURL=C:/Users/psilv/PycharmProjects/AutonomousDoorman/webserver/src/edit-group-modal.component.js.map

/***/ },

/***/ 426:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_statistics_service__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_modal_plugins_bootstrap__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_modal__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__image_modal_image_modal_component__ = __webpack_require__(427);
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
    function HomeComponent(firebaseService, statisticsService, ref, modal) {
        var _this = this;
        this.firebaseService = firebaseService;
        this.statisticsService = statisticsService;
        this.ref = ref;
        this.modal = modal;
        this.barChartDataWeek = [{ data: [] },];
        this.barChartLabelsWeek = [];
        this.barChartDataMonth = [{ data: [] },];
        this.barChartLabelsMonth = [];
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true,
            scaleStepWidth: 1,
        };
        this.barChartType = 'bar';
        this.barChartLegend = false;
        this.logPeriod = "day";
        this.searchInput = "";
        this.userInfo = this.firebaseService.getUserInfo();
        this.firebaseService.findLogs().subscribe(function (logs) {
            _this.logs = logs;
            var _loop_1 = function(i) {
                var tmpurl = _this.logs[i].photourl;
                _this.logs[i].photourl = "assets/img/loading_profile.png";
                _this.logs[i].attemptPhoto = "assets/img/loading_profile.png";
                _this.firebaseService.getPhotoUrl(tmpurl).then(function (url) {
                    _this.logs[i].photourl = url;
                    _this.ref.detectChanges();
                });
                console.log(_this.logs[i].$key);
                _this.firebaseService.getPhotoUrl(_this.userInfo.uid + '/Logs/' + _this.logs[i].$key + '.jpg').then(function (url) {
                    _this.logs[i].attemptPhoto = url;
                    _this.ref.detectChanges();
                });
            };
            for (var i = 0; i < logs.length; i++) {
                _loop_1(i);
            }
            _this.filterLogs();
            console.log(_this.logs);
            var timer = __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].timer(300);
            timer.subscribe(function (x) {
                // Weekly
                var data = _this.statisticsService.calculateWeekly();
                _this.barChartDataWeek = [
                    { data: data.values },
                ];
                _this.barChartLabelsWeek = data.labels;
                // Monthly
                data = _this.statisticsService.calculateMonthly();
                _this.barChartDataMonth = [
                    { data: data.values },
                ];
                _this.barChartLabelsMonth = data.labels;
            });
        });
    }
    HomeComponent.prototype.filterLogs = function () {
        var _this = this;
        this.filteredLogs = this.logs.filter(function (log) {
            if (_this.logPeriod != 'all') {
                var multiplier = void 0;
                switch (_this.logPeriod) {
                    case "day":
                        multiplier = 1;
                        break;
                    case "week":
                        multiplier = 7;
                        break;
                    case "month":
                        multiplier = 30;
                        break;
                }
                var date = new Date(log.date.year + "-" + log.date.month + "-" + log.date.day + ":" + log.date.time);
                var diffmill = 24 * 60 * 60 * 1000 * multiplier;
                var timeDiff = Date.now() - date.getTime();
                if (timeDiff / diffmill <= 1) {
                    return log;
                }
            }
            else {
                return log;
            }
        }).sort(function (a, b) {
            var adate = new Date(a.date.year + "-" + a.date.month + "-" + a.date.day + ":" + a.date.time);
            var atime = adate.getTime();
            var bdate = new Date(b.date.year + "-" + b.date.month + "-" + b.date.day + ":" + b.date.time);
            var btime = bdate.getTime();
            if (atime > btime) {
                return -1;
            }
            else {
                return 1;
            }
        });
    };
    HomeComponent.prototype.search = function () {
        var search = this.searchInput;
        if (typeof search !== "undefined") {
            search = search.trim().toLowerCase();
            this.filterLogs();
            this.filteredLogs = this.filteredLogs.filter(function (log) {
                if (log.permission.toLowerCase().includes(search) || log.email.toLowerCase().includes(search) ||
                    log.name.toLowerCase().includes(search) || log.venue.toLowerCase().includes(search)) {
                    return log;
                }
            });
        }
    };
    HomeComponent.prototype.choosePeriod = function (period) {
        var dayPeriod = document.getElementById("dayPeriod");
        dayPeriod.className = "btn btn-sm btn-white";
        var weekPeriod = document.getElementById("weekPeriod");
        weekPeriod.className = "btn btn-sm btn-white";
        var monthPeriod = document.getElementById("monthPeriod");
        monthPeriod.className = "btn btn-sm btn-white";
        var allPeriod = document.getElementById("allPeriod");
        allPeriod.className = "btn btn-sm btn-white";
        switch (period) {
            case "day":
                this.logPeriod = "day";
                dayPeriod.className += " active";
                break;
            case "week":
                this.logPeriod = "week";
                weekPeriod.className += " active";
                break;
            case "month":
                this.logPeriod = "month";
                monthPeriod.className += " active";
                break;
            case "all":
                this.logPeriod = "all";
                allPeriod.className += " active";
                break;
        }
        this.search();
    };
    HomeComponent.prototype.getMonth = function (month) {
        var monthNum = parseInt(month);
        switch (monthNum) {
            case 1:
                return "Jan";
            case 2:
                return "Feb";
            case 3:
                return "Mar";
            case 4:
                return "Apr";
            case 5:
                return "May";
            case 6:
                return "Jun";
            case 7:
                return "Jul";
            case 8:
                return "Aug";
            case 9:
                return "Sep";
            case 10:
                return "Oct";
            case 11:
                return "Nov";
            case 12:
                return "Dec";
        }
    };
    HomeComponent.prototype.getDateString = function (year, month, day, time) {
        console.log(time);
        console.log(month);
        var date = new Date(year + "-" + month + "-" + day + "T" + time);
        var tmp = date.toDateString();
        console.log(tmp);
        month = tmp.slice(0, 4);
        console.log(month);
        var dateString = date.toDateString().slice(7);
        return dateString;
    };
    // events
    HomeComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    HomeComponent.prototype.openModal = function (imagePath) {
        return this.modal.open(__WEBPACK_IMPORTED_MODULE_6__image_modal_image_modal_component__["a" /* ImageModalComponent */], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_angular2_modal__["n" /* overlayConfigFactory */])({ imagePath: imagePath }, __WEBPACK_IMPORTED_MODULE_4_angular2_modal_plugins_bootstrap__["b" /* BSModalContext */]));
    };
    HomeComponent.prototype.ngOnInit = function () { };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(908),
            styles: [__webpack_require__(900)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_statistics_service__["a" /* StatisticsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_statistics_service__["a" /* StatisticsService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5_angular2_modal__["l" /* Modal */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5_angular2_modal__["l" /* Modal */]) === 'function' && _d) || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=C:/Users/psilv/PycharmProjects/AutonomousDoorman/webserver/src/home.component.js.map

/***/ },

/***/ 427:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_modal__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_modal_plugins_bootstrap__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_firebase_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(32);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ImageModalComponent; });
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





var ImageModalComponent = (function () {
    function ImageModalComponent(dialog, firebaseService, modal, router) {
        this.dialog = dialog;
        this.firebaseService = firebaseService;
        this.modal = modal;
        this.router = router;
        var content = document.getElementsByClassName("modal-content")[0];
        content.style.maxWidth = '300px';
        this.context = dialog.context;
        this.context.isBlocking = false;
    }
    ImageModalComponent.prototype.closeModal = function () {
        this.dialog.dismiss();
    };
    ImageModalComponent.prototype.onKeyUp = function (value) {
        this.dialog.close('hey');
    };
    ImageModalComponent.prototype.beforeDismiss = function () {
        return false;
    };
    ImageModalComponent.prototype.beforeClose = function () {
        return true;
    };
    ImageModalComponent.prototype.ngOnInit = function () { };
    ImageModalComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-image-modal',
            template: __webpack_require__(909),
            styles: [__webpack_require__(888)],
            providers: [__WEBPACK_IMPORTED_MODULE_2_angular2_modal_plugins_bootstrap__["a" /* Modal */]],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_modal__["e" /* DialogRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angular2_modal__["e" /* DialogRef */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_firebase_service__["a" /* FirebaseService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_firebase_service__["a" /* FirebaseService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_modal_plugins_bootstrap__["a" /* Modal */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angular2_modal_plugins_bootstrap__["a" /* Modal */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === 'function' && _d) || Object])
    ], ImageModalComponent);
    return ImageModalComponent;
    var _a, _b, _c, _d;
}());
var CustomModalContext = (function (_super) {
    __extends(CustomModalContext, _super);
    function CustomModalContext() {
        _super.apply(this, arguments);
    }
    return CustomModalContext;
}(__WEBPACK_IMPORTED_MODULE_2_angular2_modal_plugins_bootstrap__["b" /* BSModalContext */]));
//# sourceMappingURL=C:/Users/psilv/PycharmProjects/AutonomousDoorman/webserver/src/image-modal.component.js.map

/***/ },

/***/ 428:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return LandingPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LandingPageComponent = (function () {
    function LandingPageComponent() {
        // Stylesheed
        var link = document.createElement("link");
        link.href = "assets/backyard/css/bootstrap.min.css";
        link.rel = "stylesheet";
        link.media = "screen";
        document.head.appendChild(link);
        link = document.createElement("link");
        link.href = "assets/backyard/css/font-awesome.min.css";
        link.rel = "stylesheet";
        document.head.appendChild(link);
        link = document.createElement("link");
        link.href = "assets/backyard/fonts/icon-7-stroke/css/pe-icon-7-stroke.css";
        link.rel = "stylesheet";
        document.head.appendChild(link);
        link = document.createElement("link");
        link.href = "assets/backyard/css/animate.css";
        link.media = "screen";
        link.rel = "stylesheet";
        document.head.appendChild(link);
        link = document.createElement("link");
        link.href = "assets/backyard/css/owl.theme.css";
        link.rel = "stylesheet";
        document.head.appendChild(link);
        link = document.createElement("link");
        link.href = "assets/backyard/css/owl.carousel.css";
        link.rel = "stylesheet";
        document.head.appendChild(link);
        link = document.createElement("link");
        link.href = "assets/backyard/css/css-index.css";
        link.media = "screen";
        link.rel = "stylesheet";
        document.head.appendChild(link);
        link = document.createElement("link");
        link.href = "http://fonts.googleapis.com/css?family=Lato:100,300,400,700,900,100italic,300italic,400italic,700italic,900italic";
        link.rel = "stylesheet";
        document.head.appendChild(link);
    }
    LandingPageComponent.prototype.ngOnInit = function () { };
    LandingPageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-landing-page',
            template: __webpack_require__(910),
            styles: [__webpack_require__(889)],
        }), 
        __metadata('design:paramtypes', [])
    ], LandingPageComponent);
    return LandingPageComponent;
}());
//# sourceMappingURL=C:/Users/psilv/PycharmProjects/AutonomousDoorman/webserver/src/landing-page.component.js.map

/***/ },

/***/ 429:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(32);
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
            template: __webpack_require__(916),
            styles: [__webpack_require__(901)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _b) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/psilv/PycharmProjects/AutonomousDoorman/webserver/src/login.component.js.map

/***/ },

/***/ 430:
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
            template: __webpack_require__(918),
            styles: [__webpack_require__(896)]
        }), 
        __metadata('design:paramtypes', [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());
//# sourceMappingURL=C:/Users/psilv/PycharmProjects/AutonomousDoorman/webserver/src/not-found.component.js.map

/***/ },

/***/ 431:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(32);
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
            template: __webpack_require__(919),
            styles: [__webpack_require__(897)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _b) || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/psilv/PycharmProjects/AutonomousDoorman/webserver/src/register.component.js.map

/***/ },

/***/ 432:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_modal__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_modal_plugins_bootstrap__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_firebase_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(32);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return TestComponent; });
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





var TestComponent = (function () {
    function TestComponent(dialog, firebaseService, modal, router) {
        this.dialog = dialog;
        this.firebaseService = firebaseService;
        this.modal = modal;
        this.router = router;
        var content = document.getElementsByClassName("modal-content")[0];
        content.style.maxWidth = '300px';
        this.context = dialog.context;
        this.context.isBlocking = false;
        this.context.showClose = true;
    }
    TestComponent.prototype.closeModal = function () {
        this.dialog.dismiss();
    };
    TestComponent.prototype.onKeyUp = function (value) {
        this.dialog.close();
    };
    TestComponent.prototype.beforeDismiss = function () {
        return true;
    };
    TestComponent.prototype.beforeClose = function () {
        return true;
    };
    TestComponent.prototype.ngOnInit = function () { };
    TestComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-test',
            template: __webpack_require__(920),
            styles: [__webpack_require__(902)],
            providers: [__WEBPACK_IMPORTED_MODULE_2_angular2_modal_plugins_bootstrap__["a" /* Modal */]],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_modal__["e" /* DialogRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angular2_modal__["e" /* DialogRef */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_firebase_service__["a" /* FirebaseService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_firebase_service__["a" /* FirebaseService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_modal_plugins_bootstrap__["a" /* Modal */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angular2_modal_plugins_bootstrap__["a" /* Modal */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === 'function' && _d) || Object])
    ], TestComponent);
    return TestComponent;
    var _a, _b, _c, _d;
}());
var CustomModalContext = (function (_super) {
    __extends(CustomModalContext, _super);
    function CustomModalContext() {
        _super.apply(this, arguments);
    }
    return CustomModalContext;
}(__WEBPACK_IMPORTED_MODULE_2_angular2_modal_plugins_bootstrap__["b" /* BSModalContext */]));
//# sourceMappingURL=C:/Users/psilv/PycharmProjects/AutonomousDoorman/webserver/src/test.component.js.map

/***/ },

/***/ 433:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_modal__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_modal_plugins_bootstrap__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_user_modal_add_user_modal_component__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_firebase_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__create_group_modal_create_group_modal_component__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__edit_group_modal_edit_group_modal_component__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_util__ = __webpack_require__(1177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_util__);
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
    function VenueDetailComponent(firebaseService, route, modal, ref) {
        var _this = this;
        this.firebaseService = firebaseService;
        this.route = route;
        this.modal = modal;
        this.ref = ref;
        this.createMember = [];
        this.newMember = { name: "", email: "", id: "", photourl: "", groups: [] };
        this.groups = [];
        this.groupMembers = {};
        this.route.params.subscribe(function (params) {
            _this.venueName = params['id'];
            _this.firebaseService.findMembers(_this.venueName).subscribe(function (members) {
                _this.members = {};
                _this.membersId = [];
                if (members.length > 0 && typeof members[0] != "undefined") {
                    console.log(members);
                    var _loop_1 = function(i) {
                        _this.members[members[i].$key] = {};
                        _this.members[members[i].$key]['groups'] = [];
                        _this.members[members[i].$key]['name'] = members[i]['Data']['name'];
                        _this.members[members[i].$key]['email'] = members[i]['Data']['email'];
                        _this.members[members[i].$key]['photourl'] = '/assets/img/loading_profile.png';
                        _this.members[members[i].$key]['id'] = members[i].$key;
                        _this.firebaseService.getPhotoUrl(members[i]['Data']['photourl']).then(function (url) {
                            _this.members[members[i].$key]['photourl'] = url;
                            _this.membersId.push(members[i].$key);
                            _this.ref.detectChanges();
                        });
                        for (var j = 0; j < members[i]['Groups'].length; j++) {
                            _this.members[members[i].$key]['groups'].push(members[i]['Groups'][j].id);
                        }
                    };
                    for (var i = 0; i < members.length; i++) {
                        _loop_1(i);
                    }
                    console.log(_this.members);
                }
            });
            _this.firebaseService.findGroups(_this.venueName).subscribe(function (groups) {
                // Get group's names
                _this.groups = [];
                for (var i = 0; i < groups.length; i++) {
                    var g = { id: groups[i].$key, start: groups[i]['Time']['start'], end: groups[i]['Time']['end'] };
                    console.log(g);
                    _this.groups.push(g);
                }
                // Get group's groupMembers id
                for (var i = 0; i < groups.length; i++) {
                    _this.groupMembers[_this.groups[i].id] = [];
                    for (var j = 0; j < groups[i]['Members'].length; j++) {
                        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8_util__["isUndefined"])(groups[i]['Members'][j]))
                            _this.groupMembers[_this.groups[i].id].push(groups[i]['Members'][j]['id']);
                    }
                }
                console.log(_this.groupMembers);
            });
        });
    }
    VenueDetailComponent.prototype.trackByIndex = function (index, obj) {
        return index;
    };
    VenueDetailComponent.prototype.openCreateUser = function (index) {
        this.modal.open(__WEBPACK_IMPORTED_MODULE_4__add_user_modal_add_user_modal_component__["a" /* AddUserModalComponent */], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_angular2_modal__["n" /* overlayConfigFactory */])({ venueName: this.venueName, groupName: this.groups[index].id }, __WEBPACK_IMPORTED_MODULE_3_angular2_modal_plugins_bootstrap__["b" /* BSModalContext */]));
    };
    VenueDetailComponent.prototype.editGroup = function (index) {
        this.modal.open(__WEBPACK_IMPORTED_MODULE_7__edit_group_modal_edit_group_modal_component__["a" /* EditGroupModalComponent */], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_angular2_modal__["n" /* overlayConfigFactory */])({ venueName: this.venueName, groupName: this.groups[index].id }, __WEBPACK_IMPORTED_MODULE_3_angular2_modal_plugins_bootstrap__["b" /* BSModalContext */]));
    };
    VenueDetailComponent.prototype.openCreateGroup = function () {
        this.modal.open(__WEBPACK_IMPORTED_MODULE_6__create_group_modal_create_group_modal_component__["a" /* CreateGroupModalComponent */], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_angular2_modal__["n" /* overlayConfigFactory */])({ venueName: this.venueName, groupName: this.groups[0].id }, __WEBPACK_IMPORTED_MODULE_3_angular2_modal_plugins_bootstrap__["b" /* BSModalContext */]));
    };
    VenueDetailComponent.prototype.addMember = function (index) {
        console.log(this.groups[index].id);
        if (typeof this.createMember[index] !== 'undefined') {
            this.createMember[index] = true;
        }
        else {
            this.createMember.push(true);
        }
    };
    VenueDetailComponent.prototype.deleteMember = function (id, group) {
        console.log(id);
        console.log(group);
        this.firebaseService.deleteMember(this.venueName, id, group);
        // this.createMember[index] = false;
    };
    VenueDetailComponent.prototype.deleteGroup = function (group) {
        var _this = this;
        this.modal.confirm()
            .size('sm')
            .isBlocking(true)
            .showClose(true)
            .keyboard(27)
            .title('Delete Confirmation')
            .body('Are you sure you want to delete: ' + group)
            .open()
            .then(function (dialog) { return dialog.result; })
            .then(function (result) {
            _this.firebaseService.deleteGroup(group, _this.venueName);
            console.log('confirmed');
        })
            .catch(function (err) { });
    };
    VenueDetailComponent.prototype.submit = function (index, memberInfo) {
        console.log('add member');
        console.log(memberInfo);
        console.log(this.venueName);
        console.log(this.groups[index].id);
        this.firebaseService.addExistingMemberToGroup(this.venueName, this.groups[index].id, memberInfo);
    };
    VenueDetailComponent.prototype.reset = function () { };
    VenueDetailComponent.prototype.openDoor = function () {
        console.log('open door');
        this.firebaseService.openDoor(this.venueName);
    };
    VenueDetailComponent.prototype.ngOnInit = function () { };
    VenueDetailComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-venue-detail',
            template: __webpack_require__(921),
            styles: [__webpack_require__(898)],
            providers: [__WEBPACK_IMPORTED_MODULE_3_angular2_modal_plugins_bootstrap__["a" /* Modal */]],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__services_firebase_service__["a" /* FirebaseService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__services_firebase_service__["a" /* FirebaseService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_modal_plugins_bootstrap__["a" /* Modal */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_modal_plugins_bootstrap__["a" /* Modal */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === 'function' && _d) || Object])
    ], VenueDetailComponent);
    return VenueDetailComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=C:/Users/psilv/PycharmProjects/AutonomousDoorman/webserver/src/venue-detail.component.js.map

/***/ },

/***/ 434:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_firebase_service__ = __webpack_require__(27);
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

/***/ 548:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 548;


/***/ },

/***/ 549:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(677);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(637);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(675);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(667);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/psilv/PycharmProjects/AutonomousDoorman/webserver/src/main.js.map

/***/ },

/***/ 666:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_translate__ = __webpack_require__(322);
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
    function AppComponent(translate) {
        this.translate = translate;
        var languages = ['en', 'pt'];
        translate.addLangs(languages);
        translate.setDefaultLang('en');
        var browserlang = translate.getBrowserLang();
        if (languages.indexOf(browserlang) > -1) {
            translate.use(browserlang);
        }
        else {
            translate.use('en');
        }
    }
    AppComponent.prototype.changeLang = function (lang) {
        this.translate.use(lang);
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(903),
            styles: [__webpack_require__(899)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_translate__["a" /* TranslateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_ng2_translate__["a" /* TranslateService */]) === 'function' && _a) || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/psilv/PycharmProjects/AutonomousDoorman/webserver/src/app.component.js.map

/***/ },

/***/ 667:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_modal__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_translate___ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_modal_plugins_bootstrap__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_bootstrap__ = __webpack_require__(878);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_bootstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_charts_ng2_charts__ = __webpack_require__(880);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_charts_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ng2_charts_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(666);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__environments_firebase_config__ = __webpack_require__(676);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_routing__ = __webpack_require__(668);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_home_home_component__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_login_login_component__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__shared_auth_guard__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_firebase_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_test_test_component__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__shared_nav_dropdown_directive__ = __webpack_require__(680);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__shared_sidebar_directive__ = __webpack_require__(681);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__shared_aside_directive__ = __webpack_require__(678);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__shared_breadcrumb_component__ = __webpack_require__(679);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_layout_header_header_component__ = __webpack_require__(673);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_layout_sidebar_sidebar_component__ = __webpack_require__(674);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_layout_footer_footer_component__ = __webpack_require__(672);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_layout_asidemenu_asidemenu_component__ = __webpack_require__(670);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_layout_breadcrumb_breadcrumb_component__ = __webpack_require__(671);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_register_register_component__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_venue_detail_venue_detail_component__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_not_found_not_found_component__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__services_statistics_service__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_new_venue_new_venue_component__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_add_user_modal_add_user_modal_component__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_create_user_modal_create_user_modal_component__ = __webpack_require__(669);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__components_landing_page_landing_page_component__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35_ng2_popover__ = __webpack_require__(881);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35_ng2_popover___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_35_ng2_popover__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__components_image_modal_image_modal_component__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__components_create_group_modal_create_group_modal_component__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__components_edit_group_modal_edit_group_modal_component__ = __webpack_require__(425);
/* unused harmony export createTranslateLoader */
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
    provider: __WEBPACK_IMPORTED_MODULE_11_angularfire2__["c" /* AuthProviders */].Password,
    method: __WEBPACK_IMPORTED_MODULE_11_angularfire2__["d" /* AuthMethods */].Password,
};
function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_5_ng2_translate___["b" /* TranslateStaticLoader */](http, './assets/i18n', '.json');
}
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_18__shared_nav_dropdown_directive__["a" /* NAV_DROPDOWN_DIRECTIVES */],
                __WEBPACK_IMPORTED_MODULE_21__shared_breadcrumb_component__["a" /* BreadcrumbsComponent */],
                __WEBPACK_IMPORTED_MODULE_19__shared_sidebar_directive__["a" /* SIDEBAR_TOGGLE_DIRECTIVES */],
                __WEBPACK_IMPORTED_MODULE_20__shared_aside_directive__["a" /* AsideToggleDirective */],
                __WEBPACK_IMPORTED_MODULE_13__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_test_test_component__["a" /* TestComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_layout_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_layout_sidebar_sidebar_component__["a" /* SidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_layout_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_layout_asidemenu_asidemenu_component__["a" /* AsidemenuComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_layout_breadcrumb_breadcrumb_component__["a" /* BreadcrumbComponent */],
                __WEBPACK_IMPORTED_MODULE_27__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_28__components_venue_detail_venue_detail_component__["a" /* VenueDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_29__components_not_found_not_found_component__["a" /* NotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_31__components_new_venue_new_venue_component__["a" /* NewVenueComponent */],
                __WEBPACK_IMPORTED_MODULE_32__components_add_user_modal_add_user_modal_component__["a" /* AddUserModalComponent */],
                __WEBPACK_IMPORTED_MODULE_33__components_create_user_modal_create_user_modal_component__["a" /* CreateUserModalComponent */],
                __WEBPACK_IMPORTED_MODULE_34__components_landing_page_landing_page_component__["a" /* LandingPageComponent */],
                __WEBPACK_IMPORTED_MODULE_36__components_image_modal_image_modal_component__["a" /* ImageModalComponent */],
                __WEBPACK_IMPORTED_MODULE_37__components_create_group_modal_create_group_modal_component__["a" /* CreateGroupModalComponent */],
                __WEBPACK_IMPORTED_MODULE_38__components_edit_group_modal_edit_group_modal_component__["a" /* EditGroupModalComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_11_angularfire2__["e" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_10__environments_firebase_config__["a" /* firebaseConfig */], myFirebaseAuthConfig),
                __WEBPACK_IMPORTED_MODULE_12__app_routing__["a" /* routing */],
                __WEBPACK_IMPORTED_MODULE_7_ng2_bootstrap__["Ng2BootstrapModule"],
                __WEBPACK_IMPORTED_MODULE_8_ng2_charts_ng2_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_4_angular2_modal__["m" /* ModalModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5_ng2_translate___["c" /* TranslateModule */].forRoot({
                    provide: __WEBPACK_IMPORTED_MODULE_5_ng2_translate___["d" /* TranslateLoader */],
                    useFactory: (createTranslateLoader),
                    deps: [__WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]]
                }),
                __WEBPACK_IMPORTED_MODULE_6_angular2_modal_plugins_bootstrap__["c" /* BootstrapModalModule */],
                __WEBPACK_IMPORTED_MODULE_35_ng2_popover__["PopoverModule"],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_15__shared_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_16__services_firebase_service__["a" /* FirebaseService */], __WEBPACK_IMPORTED_MODULE_30__services_statistics_service__["a" /* StatisticsService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_32__components_add_user_modal_add_user_modal_component__["a" /* AddUserModalComponent */], __WEBPACK_IMPORTED_MODULE_33__components_create_user_modal_create_user_modal_component__["a" /* CreateUserModalComponent */], __WEBPACK_IMPORTED_MODULE_36__components_image_modal_image_modal_component__["a" /* ImageModalComponent */], __WEBPACK_IMPORTED_MODULE_37__components_create_group_modal_create_group_modal_component__["a" /* CreateGroupModalComponent */], __WEBPACK_IMPORTED_MODULE_38__components_edit_group_modal_edit_group_modal_component__["a" /* EditGroupModalComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_5_ng2_translate___["c" /* TranslateModule */]],
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Users/psilv/PycharmProjects/AutonomousDoorman/webserver/src/app.module.js.map

/***/ },

/***/ 668:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_home_home_component__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_login_login_component__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_test_test_component__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_auth_guard__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_register_register_component__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_venue_detail_venue_detail_component__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_not_found_not_found_component__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_new_venue_new_venue_component__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_landing_page_landing_page_component__ = __webpack_require__(428);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return routing; });










var appRoutes = [
    {
        path: '',
        // component: LandingPageComponent,
        redirectTo: '/dashboard', pathMatch: 'full',
    },
    {
        path: 'landing',
        component: __WEBPACK_IMPORTED_MODULE_9__components_landing_page_landing_page_component__["a" /* LandingPageComponent */],
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

/***/ 669:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_modal__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_modal_plugins_bootstrap__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_firebase_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(32);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CreateUserModalComponent; });
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





var CreateUserModalComponent = (function () {
    function CreateUserModalComponent(dialog, firebaseService, modal, router, ref) {
        var _this = this;
        this.dialog = dialog;
        this.firebaseService = firebaseService;
        this.modal = modal;
        this.router = router;
        this.ref = ref;
        this.newMember = { name: "", email: "", id: "", photourl: "", groups: [] };
        this.context = dialog.context;
        this.context.isBlocking = false;
        this.confirmationMessage = "";
        this.fileList = null;
        this.firebaseService.findMembers(this.context.venueName).subscribe(function (members) {
            _this.membersId = [];
            _this.members = [];
            var _loop_1 = function(i) {
                var newMember = void 0;
                newMember = { email: members[i]['Data']['email'], name: members[i]['Data']['name'], id: (i + 1).toString(), groups: [],
                    photourl: '/assets/img/loading_profile.png' };
                for (var j = 0; j < members[i]['Groups'].length; j++) {
                    newMember.groups.push(members[i]['Groups'][j].id);
                }
                _this.members.push(newMember);
                _this.firebaseService.getPhotoUrl(members[i]['Data']['photourl']).then(function (url) {
                    _this.members[i].photourl = url;
                    _this.ref.detectChanges();
                });
            };
            for (var i = 0; i < members.length; i++) {
                _loop_1(i);
            }
        });
    }
    CreateUserModalComponent.prototype.trackByIndex = function (index, obj) {
        return index;
    };
    CreateUserModalComponent.prototype.fileChange = function (event) {
        this.fileList = event.target.files;
        for (var i = 0; i < this.fileList.length; i++) {
            var filename = this.fileList[i].name;
            if (filename.split('.').pop() != 'jpg') {
                this.fileList = null;
                var input = document.getElementById('input-upload');
                input.value = "";
                this.confirmationMessage = "Don't try to fool me. Use .jpg image only =P";
                break;
            }
            else {
                this.confirmationMessage = "";
            }
        }
    };
    CreateUserModalComponent.prototype.onKeyUp = function (value) {
        console.log(this.newMember);
        this.dialog.close();
    };
    CreateUserModalComponent.prototype.addMemberToGroup = function (member) {
        var _this = this;
        this.modal.confirm()
            .size('sm')
            .isBlocking(true)
            .showClose(true)
            .keyboard(27)
            .title('Attention')
            .body('Do you want to add  ' + member.name + ', ' + member.email + ' to group ' + this.context.groupName + '?')
            .open()
            .then(function (dialog) { return dialog.result; })
            .then(function (result) {
            _this.firebaseService.addExistingMemberToGroup(_this.context.venueName, _this.context.groupName, member);
            _this.dialog.close();
        })
            .catch(function (err) { });
    };
    CreateUserModalComponent.prototype.createNewMember = function () {
        console.log('create new member: ' + this.newMember.name + " " + this.newMember.email);
        this.firebaseService.createAndAddMember(this.context.venueName, this.context.groupName, this.newMember, this.fileList);
    };
    CreateUserModalComponent.prototype.submit = function () {
        this.newMember.name = this.newMember.name.trim();
        this.newMember.email = this.newMember.email.trim();
        if (this.newMember.name != "" && typeof this.newMember.name != "undefined"
            && this.newMember.email != "" && typeof this.newMember.email != "undefined"
            && this.fileList != null && this.fileList.length > 0) {
            if (this.newMember.email.indexOf('@') == -1) {
                this.confirmationMessage = "Error: Email not formatted correctly.";
            }
            else {
                this.createNewMember();
                this.confirmationMessage = this.newMember.name + " successfully added to " + this.context.groupName;
                this.newMember = { name: "", email: "", id: "", photourl: "", groups: [] };
                this.dialog.close();
            }
        }
        else {
            this.confirmationMessage = "Error: Could mot create member because the name or email are blank or no photo were added.";
        }
    };
    CreateUserModalComponent.prototype.beforeDismiss = function () {
        return true;
    };
    CreateUserModalComponent.prototype.beforeClose = function () {
        return true;
    };
    CreateUserModalComponent.prototype.ngOnInit = function () { };
    CreateUserModalComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-create-user-modal',
            template: __webpack_require__(906),
            styles: [__webpack_require__(886)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_modal__["e" /* DialogRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angular2_modal__["e" /* DialogRef */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_firebase_service__["a" /* FirebaseService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_firebase_service__["a" /* FirebaseService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_modal_plugins_bootstrap__["a" /* Modal */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angular2_modal_plugins_bootstrap__["a" /* Modal */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === 'function' && _e) || Object])
    ], CreateUserModalComponent);
    return CreateUserModalComponent;
    var _a, _b, _c, _d, _e;
}());
var CustomModalContext = (function (_super) {
    __extends(CustomModalContext, _super);
    function CustomModalContext() {
        _super.apply(this, arguments);
    }
    return CustomModalContext;
}(__WEBPACK_IMPORTED_MODULE_2_angular2_modal_plugins_bootstrap__["b" /* BSModalContext */]));
//# sourceMappingURL=C:/Users/psilv/PycharmProjects/AutonomousDoorman/webserver/src/create-user-modal.component.js.map

/***/ },

/***/ 670:
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
            template: __webpack_require__(911),
            styles: [__webpack_require__(890)]
        }), 
        __metadata('design:paramtypes', [])
    ], AsidemenuComponent);
    return AsidemenuComponent;
}());
//# sourceMappingURL=C:/Users/psilv/PycharmProjects/AutonomousDoorman/webserver/src/asidemenu.component.js.map

/***/ },

/***/ 671:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_modal__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_modal_plugins_bootstrap__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__new_venue_new_venue_component__ = __webpack_require__(262);
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
    function BreadcrumbComponent(modal) {
        this.modal = modal;
    }
    BreadcrumbComponent.prototype.openNewVenueModal = function () {
        return this.modal.open(__WEBPACK_IMPORTED_MODULE_3__new_venue_new_venue_component__["a" /* NewVenueComponent */], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_angular2_modal__["n" /* overlayConfigFactory */])({}, __WEBPACK_IMPORTED_MODULE_2_angular2_modal_plugins_bootstrap__["b" /* BSModalContext */]));
    };
    BreadcrumbComponent.prototype.ngOnInit = function () {
    };
    BreadcrumbComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-breadcrumb',
            template: __webpack_require__(912),
            styles: [__webpack_require__(891)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_modal__["l" /* Modal */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angular2_modal__["l" /* Modal */]) === 'function' && _a) || Object])
    ], BreadcrumbComponent);
    return BreadcrumbComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/psilv/PycharmProjects/AutonomousDoorman/webserver/src/breadcrumb.component.js.map

/***/ },

/***/ 672:
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
            template: __webpack_require__(913),
            styles: [__webpack_require__(892)]
        }), 
        __metadata('design:paramtypes', [])
    ], FooterComponent);
    return FooterComponent;
}());
//# sourceMappingURL=C:/Users/psilv/PycharmProjects/AutonomousDoorman/webserver/src/footer.component.js.map

/***/ },

/***/ 673:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_statistics_service__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_translate__ = __webpack_require__(322);
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
    function HeaderComponent(firebaseService, statisticsService, translate, ref) {
        this.firebaseService = firebaseService;
        this.statisticsService = statisticsService;
        this.translate = translate;
        this.ref = ref;
        this.status = { isopen: false };
        this.getUserInfo();
    }
    HeaderComponent.prototype.changeLanguage = function (lang) {
        this.translate.use(lang);
    };
    HeaderComponent.prototype.getUserInfo = function () {
        var _this = this;
        this.userInfo = this.firebaseService.getUserInfo();
        this.userPhoto = '/assets/img/loading_profile.png';
        this.firebaseService.getPhotoUrl(this.userInfo.photoURL).then(function (url) {
            _this.userPhoto = url;
            _this.ref.detectChanges();
        });
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
            template: __webpack_require__(914),
            styles: [__webpack_require__(893)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_statistics_service__["a" /* StatisticsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_statistics_service__["a" /* StatisticsService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_translate__["a" /* TranslateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_ng2_translate__["a" /* TranslateService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === 'function' && _d) || Object])
    ], HeaderComponent);
    return HeaderComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=C:/Users/psilv/PycharmProjects/AutonomousDoorman/webserver/src/header.component.js.map

/***/ },

/***/ 674:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__ = __webpack_require__(27);
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
    function SidebarComponent(firebaseService, ref) {
        var _this = this;
        this.firebaseService = firebaseService;
        this.ref = ref;
        this.firebaseService.findVenues()
            .subscribe(function (venues) {
            _this.venues = venues;
            _this.venuesKeys = [];
            for (var i = 0; i < _this.venues.length; i++) {
                _this.venuesKeys.push(_this.venues[i].$key);
            }
        });
        this.getUserInfo();
    }
    SidebarComponent.prototype.logout = function () {
        this.firebaseService.logout();
    };
    SidebarComponent.prototype.getUserInfo = function () {
        var _this = this;
        this.userInfo = this.firebaseService.getUserInfo();
        this.userPhoto = '/assets/img/loading_profile.png';
        this.firebaseService.getPhotoUrl(this.userInfo.photoURL).then(function (url) {
            _this.userPhoto = url;
            _this.ref.detectChanges();
        });
    };
    SidebarComponent.prototype.ngOnInit = function () { };
    SidebarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(915),
            styles: [__webpack_require__(894)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === 'function' && _b) || Object])
    ], SidebarComponent);
    return SidebarComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/psilv/PycharmProjects/AutonomousDoorman/webserver/src/sidebar.component.js.map

/***/ },

/***/ 675:
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

/***/ 676:
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

/***/ 677:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(716);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(709);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(705);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(711);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(710);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(708);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(707);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(715);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(704);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(703);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(713);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(706);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(714);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(712);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(717);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(1179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=C:/Users/psilv/PycharmProjects/AutonomousDoorman/webserver/src/polyfills.js.map

/***/ },

/***/ 678:
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

/***/ 679:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(32);
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

/***/ 680:
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

/***/ 681:
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

/***/ 884:
/***/ function(module, exports) {

module.exports = ".custom-modal-container {\n  padding: 15px; }\n\n.team-members {\n  margin: 10px 0; }\n\n.team-members img.img-circle {\n  width: 42px;\n  height: 42px;\n  margin-bottom: 5px; }\n\n.img-circle {\n  border-radius: 50%;\n  vertical-align: middle; }\n\n.alert {\n  padding: 0; }\n"

/***/ },

/***/ 885:
/***/ function(module, exports) {

module.exports = ".custom-modal-container {\n  padding: 15px; }\n\n.team-members {\n  margin: 10px 0; }\n\n.team-members img.img-circle {\n  width: 42px;\n  height: 42px;\n  margin-bottom: 5px; }\n\n.img-circle {\n  border-radius: 50%;\n  vertical-align: middle; }\n\n.avatar {\n  width: 45px; }\n\n.avatar .img-avatar {\n  width: 45px;\n  height: 45px; }\n\n.avatar .avatar-status {\n  bottom: 4px; }\n"

/***/ },

/***/ 886:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 887:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 888:
/***/ function(module, exports) {

module.exports = ".image-responsive {\n  margin: auto;\n  width: 100%; }\n"

/***/ },

/***/ 889:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 890:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 891:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 892:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 893:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 894:
/***/ function(module, exports) {

module.exports = "/***\r\nUser Profile Sidebar by @keenthemes\r\nA component of Metronic Theme - #1 Selling Bootstrap 3 Admin Theme in Themeforest: http://j.mp/metronictheme\r\nLicensed under MIT\r\n***/\nbody {\n  background: #F1F3FA; }\n\n/* Profile container */\n.profile {\n  margin: 20px 0; }\n\n/* Profile sidebar */\n.profile-sidebar {\n  padding: 20px 0 10px 0;\n  background: #fff; }\n\n.profile-userpic {\n  float: none;\n  margin: 0 auto;\n  width: 50%;\n  height: 50%;\n  border-radius: 50% !important; }\n\n.profile-usertitle {\n  text-align: center;\n  margin-top: 20px; }\n\n.profile-usertitle-name {\n  color: #5a7391;\n  font-size: 16px;\n  font-weight: 600;\n  margin-bottom: 7px; }\n\n.profile-usertitle-job {\n  text-transform: uppercase;\n  color: #ffffff;\n  font-size: 12px;\n  font-weight: 600; }\n\n.profile-userbuttons {\n  text-align: center;\n  margin-top: 10px; }\n\n.profile-userbuttons .btn {\n  text-transform: uppercase;\n  font-size: 11px;\n  font-weight: 600;\n  padding: 6px 15px;\n  margin-right: 5px; }\n\n.profile-userbuttons .btn:last-child {\n  margin-right: 0px; }\n\n.profile-usermenu {\n  margin-top: 30px; }\n\n.profile-usermenu ul li {\n  border-bottom: 1px solid #f0f4f7; }\n\n.profile-usermenu ul li:last-child {\n  border-bottom: none; }\n\n.profile-usermenu ul li a {\n  color: #93a3b5;\n  font-size: 14px;\n  font-weight: 400; }\n\n.profile-usermenu ul li a i {\n  margin-right: 8px;\n  font-size: 14px; }\n\n.profile-usermenu ul li a:hover {\n  background-color: #fafcfd;\n  color: #5b9bd1; }\n\n.profile-usermenu ul li.active {\n  border-bottom: none; }\n\n.profile-usermenu ul li.active a {\n  color: #5b9bd1;\n  background-color: #f6f9fb;\n  border-left: 2px solid #5b9bd1;\n  margin-left: -2px; }\n\n/* Profile Content */\n.profile-content {\n  padding: 20px;\n  background: #fff;\n  min-height: 460px; }\n\n.img-responsive,\n.thumbnail > img,\n.thumbnail a > img,\n.carousel-inner > .item > img,\n.carousel-inner > .item > a > img {\n  display: block;\n  max-width: 100%;\n  height: auto; }\n"

/***/ },

/***/ 895:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 896:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 897:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 898:
/***/ function(module, exports) {

module.exports = ".team-members {\n  margin: 10px 0; }\n\n.team-members img.img-circle {\n  width: 42px;\n  height: 42px;\n  margin-bottom: 5px; }\n\n.img-circle {\n  border-radius: 50%;\n  vertical-align: middle; }\n\n.ibox-title {\n  -moz-border-bottom-colors: none;\n  -moz-border-left-colors: none;\n  -moz-border-right-colors: none;\n  -moz-border-top-colors: none;\n  background-color: #ffffff;\n  border-color: #e7eaec;\n  -o-border-image: none;\n     border-image: none;\n  border-style: solid solid none;\n  border-width: 3px 0 0;\n  color: inherit;\n  margin-bottom: 0;\n  padding: 14px 15px 7px;\n  min-height: 48px; }\n\n.ibox-content {\n  background-color: #ffffff;\n  color: inherit;\n  padding: 15px 20px 20px 20px;\n  border-color: #e7eaec;\n  -o-border-image: none;\n     border-image: none;\n  border-style: solid solid none;\n  border-width: 1px 0;\n  clear: both; }\n\n.ibox-title h5 {\n  display: inline-block;\n  font-size: 14px;\n  margin: 0 0 7px;\n  padding: 0;\n  text-overflow: ellipsis;\n  float: left; }\n\n.ibox-title .label {\n  float: left;\n  margin-left: 4px; }\n\n.ibox-content h1,\n.ibox-content h2,\n.ibox-content h3,\n.ibox-content h4,\n.ibox-content h5,\n.ibox-title h1,\n.ibox-title h2,\n.ibox-title h3,\n.ibox-title h4,\n.ibox-title h5 {\n  margin-top: 5px; }\n\n@media screen and (max-width: 767px) {\n  .table-responsive {\n    width: 100%;\n    margin-bottom: 15px;\n    overflow-y: hidden;\n    -ms-overflow-style: -ms-autohiding-scrollbar;\n    border: 1px solid #ddd; }\n  .table-responsive > .table {\n    margin-bottom: 0; }\n  .table-responsive > .table > thead > tr > th,\n  .table-responsive > .table > tbody > tr > th,\n  .table-responsive > .table > tfoot > tr > th,\n  .table-responsive > .table > thead > tr > td,\n  .table-responsive > .table > tbody > tr > td,\n  .table-responsive > .table > tfoot > tr > td {\n    white-space: nowrap; }\n  .table-responsive > .table-bordered {\n    border: 0; }\n  .table-responsive > .table-bordered > thead > tr > th:first-child,\n  .table-responsive > .table-bordered > tbody > tr > th:first-child,\n  .table-responsive > .table-bordered > tfoot > tr > th:first-child,\n  .table-responsive > .table-bordered > thead > tr > td:first-child,\n  .table-responsive > .table-bordered > tbody > tr > td:first-child,\n  .table-responsive > .table-bordered > tfoot > tr > td:first-child {\n    border-left: 0; }\n  .table-responsive > .table-bordered > thead > tr > th:last-child,\n  .table-responsive > .table-bordered > tbody > tr > th:last-child,\n  .table-responsive > .table-bordered > tfoot > tr > th:last-child,\n  .table-responsive > .table-bordered > thead > tr > td:last-child,\n  .table-responsive > .table-bordered > tbody > tr > td:last-child,\n  .table-responsive > .table-bordered > tfoot > tr > td:last-child {\n    border-right: 0; }\n  .table-responsive > .table-bordered > tbody > tr:last-child > th,\n  .table-responsive > .table-bordered > tfoot > tr:last-child > th,\n  .table-responsive > .table-bordered > tbody > tr:last-child > td,\n  .table-responsive > .table-bordered > tfoot > tr:last-child > td {\n    border-bottom: 0; } }\n\n.btn-white {\n  color: inherit;\n  background: white;\n  border: 1px solid #e7eaec; }\n\n.btn-white:hover,\n.btn-white:focus,\n.btn-white:active,\n.btn-white.active,\n.open .dropdown-toggle.btn-white,\n.btn-white:active:focus,\n.btn-white:active:hover,\n.btn-white.active:hover,\n.btn-white.active:focus {\n  color: inherit;\n  border: 1px solid #d2d2d2; }\n\n.btn-white:active,\n.btn-white.active {\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15) inset; }\n\n.btn-white:active,\n.btn-white.active,\n.open .dropdown-toggle.btn-white {\n  background-image: none; }\n\n.btn-white.disabled,\n.btn-white.disabled:hover,\n.btn-white.disabled:focus,\n.btn-white.disabled:active,\n.btn-white.disabled.active,\n.btn-white[disabled],\n.btn-white[disabled]:hover,\n.btn-white[disabled]:focus,\n.btn-white[disabled]:active,\n.btn-white.active[disabled],\nfieldset[disabled] .btn-white,\nfieldset[disabled] .btn-white:hover,\nfieldset[disabled] .btn-white:focus,\nfieldset[disabled] .btn-white:active,\nfieldset[disabled] .btn-white.active {\n  color: #cacaca; }\n\n.btn-group,\n.btn-group-vertical {\n  position: relative;\n  display: inline-block;\n  vertical-align: middle; }\n\n.btn-group > .btn,\n.btn-group-vertical > .btn {\n  position: relative;\n  float: left; }\n\n.btn-group > .btn:hover,\n.btn-group-vertical > .btn:hover,\n.btn-group > .btn:focus,\n.btn-group-vertical > .btn:focus,\n.btn-group > .btn:active,\n.btn-group-vertical > .btn:active,\n.btn-group > .btn.active,\n.btn-group-vertical > .btn.active {\n  z-index: 2; }\n\n.btn-group .btn + .btn,\n.btn-group .btn + .btn-group,\n.btn-group .btn-group + .btn,\n.btn-group .btn-group + .btn-group {\n  margin-left: -1px; }\n\n.pull-right {\n  float: right !important; }\n\n.delete-position {\n  top: -7px;\n  right: -35px;\n  position: relative;\n  cursor: pointer; }\n"

/***/ },

/***/ 899:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 900:
/***/ function(module, exports) {

module.exports = ".team-members {\r\n  margin: 10px 0;\r\n}\r\n.team-members img.img-circle {\r\n  width: 42px;\r\n  height: 42px;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.img-circle {\r\n  border-radius: 50%;\r\n  vertical-align: middle;\r\n}\r\n\r\n.ibox-title {\r\n  -moz-border-bottom-colors: none;\r\n  -moz-border-left-colors: none;\r\n  -moz-border-right-colors: none;\r\n  -moz-border-top-colors: none;\r\n  background-color: #ffffff;\r\n  border-color: #e7eaec;\r\n  -o-border-image: none;\r\n     border-image: none;\r\n  border-style: solid solid none;\r\n  border-width: 3px 0 0;\r\n  color: inherit;\r\n  margin-bottom: 0;\r\n  padding: 14px 15px 7px;\r\n  min-height: 48px;\r\n}\r\n\r\n.ibox-content {\r\n  background-color: #ffffff;\r\n  color: inherit;\r\n  padding: 15px 20px 20px 20px;\r\n  border-color: #e7eaec;\r\n  -o-border-image: none;\r\n     border-image: none;\r\n  border-style: solid solid none;\r\n  border-width: 1px 0;\r\n  clear: both;\r\n}\r\n\r\n.ibox-title h5 {\r\n  display: inline-block;\r\n  font-size: 14px;\r\n  margin: 0 0 7px;\r\n  padding: 0;\r\n  text-overflow: ellipsis;\r\n  float: left;\r\n}\r\n.ibox-title .label {\r\n  float: left;\r\n  margin-left: 4px;\r\n}\r\n\r\n\r\n.ibox-content h1,\r\n.ibox-content h2,\r\n.ibox-content h3,\r\n.ibox-content h4,\r\n.ibox-content h5,\r\n.ibox-title h1,\r\n.ibox-title h2,\r\n.ibox-title h3,\r\n.ibox-title h4,\r\n.ibox-title h5 {\r\n  margin-top: 5px;\r\n}\r\n\r\nth {\r\n  text-align: left;\r\n}\r\n\r\n.table {\r\n  width: 100%;\r\n  max-width: 100%;\r\n  margin-bottom: 20px;\r\n}\r\n.table > thead > tr > th,\r\n.table > tbody > tr > th,\r\n.table > tfoot > tr > th,\r\n.table > thead > tr > td,\r\n.table > tbody > tr > td,\r\n.table > tfoot > tr > td {\r\n  padding: 8px;\r\n  line-height: 1.42857143;\r\n  vertical-align: middle;\r\n  border-top: 1px solid #ddd;\r\n}\r\n.table > thead > tr > th {\r\n  vertical-align: bottom;\r\n  border-bottom: 2px solid #ddd;\r\n}\r\n.table > caption + thead > tr:first-child > th,\r\n.table > colgroup + thead > tr:first-child > th,\r\n.table > thead:first-child > tr:first-child > th,\r\n.table > caption + thead > tr:first-child > td,\r\n.table > colgroup + thead > tr:first-child > td,\r\n.table > thead:first-child > tr:first-child > td {\r\n  border-top: 0;\r\n}\r\n.table > tbody + tbody {\r\n  border-top: 2px solid #ddd;\r\n}\r\n.table .table {\r\n  background-color: #fff;\r\n}\r\n.table-condensed > thead > tr > th,\r\n.table-condensed > tbody > tr > th,\r\n.table-condensed > tfoot > tr > th,\r\n.table-condensed > thead > tr > td,\r\n.table-condensed > tbody > tr > td,\r\n.table-condensed > tfoot > tr > td {\r\n  padding: 5px;\r\n}\r\n.table-bordered {\r\n  border: 1px solid #ddd;\r\n}\r\n.table-bordered > thead > tr > th,\r\n.table-bordered > tbody > tr > th,\r\n.table-bordered > tfoot > tr > th,\r\n.table-bordered > thead > tr > td,\r\n.table-bordered > tbody > tr > td,\r\n.table-bordered > tfoot > tr > td {\r\n  border: 1px solid #ddd;\r\n}\r\n.table-bordered > thead > tr > th,\r\n.table-bordered > thead > tr > td {\r\n  border-bottom-width: 2px;\r\n}\r\n.table-striped > tbody > tr:nth-of-type(odd) {\r\n  background-color: #f9f9f9;\r\n}\r\n.table-hover > tbody > tr:hover {\r\n  background-color: #f5f5f5;\r\n}\r\ntable col[class*=\"col-\"] {\r\n  position: static;\r\n  display: table-column;\r\n  float: none;\r\n}\r\ntable td[class*=\"col-\"],\r\ntable th[class*=\"col-\"] {\r\n  position: static;\r\n  display: table-cell;\r\n  float: none;\r\n}\r\n.table > thead > tr > td.active,\r\n.table > tbody > tr > td.active,\r\n.table > tfoot > tr > td.active,\r\n.table > thead > tr > th.active,\r\n.table > tbody > tr > th.active,\r\n.table > tfoot > tr > th.active,\r\n.table > thead > tr.active > td,\r\n.table > tbody > tr.active > td,\r\n.table > tfoot > tr.active > td,\r\n.table > thead > tr.active > th,\r\n.table > tbody > tr.active > th,\r\n.table > tfoot > tr.active > th {\r\n  background-color: #f5f5f5;\r\n}\r\n.table-hover > tbody > tr > td.active:hover,\r\n.table-hover > tbody > tr > th.active:hover,\r\n.table-hover > tbody > tr.active:hover > td,\r\n.table-hover > tbody > tr:hover > .active,\r\n.table-hover > tbody > tr.active:hover > th {\r\n  background-color: #e8e8e8;\r\n}\r\n.table > thead > tr > td.success,\r\n.table > tbody > tr > td.success,\r\n.table > tfoot > tr > td.success,\r\n.table > thead > tr > th.success,\r\n.table > tbody > tr > th.success,\r\n.table > tfoot > tr > th.success,\r\n.table > thead > tr.success > td,\r\n.table > tbody > tr.success > td,\r\n.table > tfoot > tr.success > td,\r\n.table > thead > tr.success > th,\r\n.table > tbody > tr.success > th,\r\n.table > tfoot > tr.success > th {\r\n  background-color: #dff0d8;\r\n}\r\n.table-hover > tbody > tr > td.success:hover,\r\n.table-hover > tbody > tr > th.success:hover,\r\n.table-hover > tbody > tr.success:hover > td,\r\n.table-hover > tbody > tr:hover > .success,\r\n.table-hover > tbody > tr.success:hover > th {\r\n  background-color: #d0e9c6;\r\n}\r\n.table > thead > tr > td.info,\r\n.table > tbody > tr > td.info,\r\n.table > tfoot > tr > td.info,\r\n.table > thead > tr > th.info,\r\n.table > tbody > tr > th.info,\r\n.table > tfoot > tr > th.info,\r\n.table > thead > tr.info > td,\r\n.table > tbody > tr.info > td,\r\n.table > tfoot > tr.info > td,\r\n.table > thead > tr.info > th,\r\n.table > tbody > tr.info > th,\r\n.table > tfoot > tr.info > th {\r\n  background-color: #d9edf7;\r\n}\r\n.table-hover > tbody > tr > td.info:hover,\r\n.table-hover > tbody > tr > th.info:hover,\r\n.table-hover > tbody > tr.info:hover > td,\r\n.table-hover > tbody > tr:hover > .info,\r\n.table-hover > tbody > tr.info:hover > th {\r\n  background-color: #c4e3f3;\r\n}\r\n.table > thead > tr > td.warning,\r\n.table > tbody > tr > td.warning,\r\n.table > tfoot > tr > td.warning,\r\n.table > thead > tr > th.warning,\r\n.table > tbody > tr > th.warning,\r\n.table > tfoot > tr > th.warning,\r\n.table > thead > tr.warning > td,\r\n.table > tbody > tr.warning > td,\r\n.table > tfoot > tr.warning > td,\r\n.table > thead > tr.warning > th,\r\n.table > tbody > tr.warning > th,\r\n.table > tfoot > tr.warning > th {\r\n  background-color: #fcf8e3;\r\n}\r\n.table-hover > tbody > tr > td.warning:hover,\r\n.table-hover > tbody > tr > th.warning:hover,\r\n.table-hover > tbody > tr.warning:hover > td,\r\n.table-hover > tbody > tr:hover > .warning,\r\n.table-hover > tbody > tr.warning:hover > th {\r\n  background-color: #faf2cc;\r\n}\r\n.table > thead > tr > td.danger,\r\n.table > tbody > tr > td.danger,\r\n.table > tfoot > tr > td.danger,\r\n.table > thead > tr > th.danger,\r\n.table > tbody > tr > th.danger,\r\n.table > tfoot > tr > th.danger,\r\n.table > thead > tr.danger > td,\r\n.table > tbody > tr.danger > td,\r\n.table > tfoot > tr.danger > td,\r\n.table > thead > tr.danger > th,\r\n.table > tbody > tr.danger > th,\r\n.table > tfoot > tr.danger > th {\r\n  background-color: #f2dede;\r\n}\r\n.table-hover > tbody > tr > td.danger:hover,\r\n.table-hover > tbody > tr > th.danger:hover,\r\n.table-hover > tbody > tr.danger:hover > td,\r\n.table-hover > tbody > tr:hover > .danger,\r\n.table-hover > tbody > tr.danger:hover > th {\r\n  background-color: #ebcccc;\r\n}\r\n.table-responsive {\r\n  min-height: .01%;\r\n  overflow-x: auto;\r\n}\r\n@media screen and (max-width: 767px) {\r\n  .table-responsive {\r\n    width: 100%;\r\n    margin-bottom: 15px;\r\n    overflow-y: hidden;\r\n    -ms-overflow-style: -ms-autohiding-scrollbar;\r\n    border: 1px solid #ddd;\r\n  }\r\n  .table-responsive > .table {\r\n    margin-bottom: 0;\r\n  }\r\n  .table-responsive > .table > thead > tr > th,\r\n  .table-responsive > .table > tbody > tr > th,\r\n  .table-responsive > .table > tfoot > tr > th,\r\n  .table-responsive > .table > thead > tr > td,\r\n  .table-responsive > .table > tbody > tr > td,\r\n  .table-responsive > .table > tfoot > tr > td {\r\n    white-space: nowrap;\r\n  }\r\n  .table-responsive > .table-bordered {\r\n    border: 0;\r\n  }\r\n  .table-responsive > .table-bordered > thead > tr > th:first-child,\r\n  .table-responsive > .table-bordered > tbody > tr > th:first-child,\r\n  .table-responsive > .table-bordered > tfoot > tr > th:first-child,\r\n  .table-responsive > .table-bordered > thead > tr > td:first-child,\r\n  .table-responsive > .table-bordered > tbody > tr > td:first-child,\r\n  .table-responsive > .table-bordered > tfoot > tr > td:first-child {\r\n    border-left: 0;\r\n  }\r\n  .table-responsive > .table-bordered > thead > tr > th:last-child,\r\n  .table-responsive > .table-bordered > tbody > tr > th:last-child,\r\n  .table-responsive > .table-bordered > tfoot > tr > th:last-child,\r\n  .table-responsive > .table-bordered > thead > tr > td:last-child,\r\n  .table-responsive > .table-bordered > tbody > tr > td:last-child,\r\n  .table-responsive > .table-bordered > tfoot > tr > td:last-child {\r\n    border-right: 0;\r\n  }\r\n  .table-responsive > .table-bordered > tbody > tr:last-child > th,\r\n  .table-responsive > .table-bordered > tfoot > tr:last-child > th,\r\n  .table-responsive > .table-bordered > tbody > tr:last-child > td,\r\n  .table-responsive > .table-bordered > tfoot > tr:last-child > td {\r\n    border-bottom: 0;\r\n  }\r\n}\r\n\r\n.btn-white {\r\n  color: inherit;\r\n  background: white;\r\n  border: 1px solid #e7eaec;\r\n}\r\n.btn-white:hover,\r\n.btn-white:focus,\r\n.btn-white:active,\r\n.btn-white.active,\r\n.open .dropdown-toggle.btn-white,\r\n.btn-white:active:focus,\r\n.btn-white:active:hover,\r\n.btn-white.active:hover,\r\n.btn-white.active:focus {\r\n  color: inherit;\r\n  border: 1px solid #d2d2d2;\r\n}\r\n.btn-white:active,\r\n.btn-white.active {\r\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15) inset;\r\n}\r\n.btn-white:active,\r\n.btn-white.active,\r\n.open .dropdown-toggle.btn-white {\r\n  background-image: none;\r\n}\r\n.btn-white.disabled,\r\n.btn-white.disabled:hover,\r\n.btn-white.disabled:focus,\r\n.btn-white.disabled:active,\r\n.btn-white.disabled.active,\r\n.btn-white[disabled],\r\n.btn-white[disabled]:hover,\r\n.btn-white[disabled]:focus,\r\n.btn-white[disabled]:active,\r\n.btn-white.active[disabled],\r\nfieldset[disabled] .btn-white,\r\nfieldset[disabled] .btn-white:hover,\r\nfieldset[disabled] .btn-white:focus,\r\nfieldset[disabled] .btn-white:active,\r\nfieldset[disabled] .btn-white.active {\r\n  color: #cacaca;\r\n}\r\n\r\n.btn-group,\r\n.btn-group-vertical {\r\n  position: relative;\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n}\r\n.btn-group > .btn,\r\n.btn-group-vertical > .btn {\r\n  position: relative;\r\n  float: left;\r\n}\r\n.btn-group > .btn:hover,\r\n.btn-group-vertical > .btn:hover,\r\n.btn-group > .btn:focus,\r\n.btn-group-vertical > .btn:focus,\r\n.btn-group > .btn:active,\r\n.btn-group-vertical > .btn:active,\r\n.btn-group > .btn.active,\r\n.btn-group-vertical > .btn.active {\r\n  z-index: 2;\r\n}\r\n.btn-group .btn + .btn,\r\n.btn-group .btn + .btn-group,\r\n.btn-group .btn-group + .btn,\r\n.btn-group .btn-group + .btn-group {\r\n  margin-left: -1px;\r\n}\r\n\r\ntable {\r\n  background-color: transparent;\r\n}\r\n\r\n\r\n\r\n.search-form .form-group {\r\n  float: right !important;\r\n  -webkit-transition: all 0.35s, border-radius 0s;\r\n  transition: all 0.35s, border-radius 0s;\r\n  width: 32px;\r\n  height: 32px;\r\n  background-color: #fff;\r\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset;\r\n  border-radius: 25px;\r\n  border: 1px solid #ccc;\r\n}\r\n.search-form .form-group input.form-control {\r\n  padding-right: 20px;\r\n  border: 0 none;\r\n  background: transparent;\r\n  box-shadow: none;\r\n  display:block;\r\n}\r\n.search-form .form-group input.form-control::-webkit-input-placeholder {\r\n  display: none;\r\n}\r\n.search-form .form-group input.form-control:-moz-placeholder {\r\n  /* Firefox 18- */\r\n  display: none;\r\n}\r\n.search-form .form-group input.form-control::-moz-placeholder {\r\n  /* Firefox 19+ */\r\n  display: none;\r\n}\r\n.search-form .form-group input.form-control:-ms-input-placeholder {\r\n  display: none;\r\n}\r\n.search-form .form-group:hover,\r\n.search-form .form-group.hover {\r\n  width: 100%;\r\n  border-radius: 4px 25px 25px 4px;\r\n}\r\n.search-form .form-group span.form-control-feedback {\r\n  position: absolute;\r\n  top: -1px;\r\n  right: -2px;\r\n  z-index: 2;\r\n  display: block;\r\n  width: 34px;\r\n  height: 34px;\r\n  line-height: 34px;\r\n  text-align: center;\r\n  color: #3596e0;\r\n  left: initial;\r\n  font-size: 14px;\r\n}\r\n\r\n.search-icon {\r\n  position: relative !important;\r\n  top: -29px !important;\r\n  right: -2px !important;\r\n  display: inline-block !important;\r\n  -webkit-font-smoothing: antialiased !important;\r\n  font-style: normal !important;\r\n  font-weight: normal !important;\r\n  line-height: 1 !important;\r\n}\r\n\r\n@media (max-width: 480px) {\r\n  .form-group {\r\n    margin-top: 1rem !important;\r\n  }\r\n}\r\n\r\n\r\n"

/***/ },

/***/ 901:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 902:
/***/ function(module, exports) {

module.exports = ".image-responsive{\r\n  margin: auto;\r\n  width: 100%;\r\n}\r\n"

/***/ },

/***/ 903:
/***/ function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ },

/***/ 904:
/***/ function(module, exports) {

module.exports = "<div class=\"container-fluid custom-modal-container\">\r\n  <div class=\"modal-header\" style=\"padding-top: 0; padding-bottom: 0\">\r\n    <h3>Add Member to {{context.groupName}}</h3>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n      <!-- Members -->\r\n      <div style=\"text-align: center\" class=\"card-block\" *ngIf=\"members.length >= 1\">\r\n        <strong>Manage active members from other groups</strong>\r\n        <br><br>\r\n\r\n        <div class=\"team-members\">\r\n          <span *ngFor=\"let member of members\">\r\n            <a role=\"button\" (click)=\"addMemberToGroup(member)\" *ngIf=\"member.groups.indexOf(context.groupName) == -1\" popover=\"{{member.email}}\" popoverTitle=\"{{member.name}}\" popoverPlacement=\"auto right\"\r\n               [popoverOnHover]=\"true\" [popoverCloseOnClickOutside]=\"true\" [popoverCloseOnMouseOutside]=\"false\"\r\n               [popoverDisabled]=\"false\" [popoverAnimation]=\"true\">\r\n              <img alt=\"member\" class=\"img-circle\" src=\"{{member.photourl}}\"></a>\r\n          </span>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- User input -->\r\n        <form>\r\n          <div class=\"form-group\" style=\"text-align: center\">\r\n            <strong>Create new user</strong>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <div class=\"input-group\">\r\n              <span class=\"input-group-addon\"><i class=\"fa fa-user\"></i></span>\r\n              <input type=\"text\" [(ngModel)]=\"newMember.name\" name=\"username\" class=\"form-control\" placeholder=\"Username\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <div class=\"input-group\">\r\n              <span class=\"input-group-addon\"><i class=\"fa fa-envelope\"></i></span>\r\n              <input type=\"text\" [(ngModel)]=\"newMember.email\" name=\"email\" class=\"form-control\" placeholder=\"Email\">\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <input type=\"file\" multiple=\"\" (change)=\"fileChange($event)\" placeholder=\"Upload file\"\r\n                   id=\"input-upload\" name=\"file-multiple-input\" accept=\"image/jpeg\">\r\n          </div>\r\n          <div *ngIf=\"confirmationMessage !== ''\" class=\"alert alert-danger\" role=\"alert\">{{confirmationMessage}}</div>\r\n\r\n          <div class=\"form-group form-actions\">\r\n            <button type=\"button\" (click)=\"submit(groupName, member)\" class=\"btn btn-sm btn-success\">Submit</button>\r\n          </div>\r\n\r\n        </form>\r\n\r\n\r\n\r\n    </div>\r\n  </div>\r\n</div>`\r\n"

/***/ },

/***/ 905:
/***/ function(module, exports) {

module.exports = "<div class=\"container-fluid custom-modal-container\">\r\n  <div class=\"modal-header\" style=\"padding-top: 0; padding-bottom: 0\">\r\n    <h3>Add Group to {{context.venueName}}</h3>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n      <!-- Members -->\r\n      <div style=\"text-align: center\" class=\"card-block\" *ngIf=\"members.length >= 1\">\r\n        <strong>Manage active members from other groups</strong>\r\n        <br><br>\r\n\r\n        <div class=\"team-members\">\r\n          <span *ngFor=\"let member of members; let i = index; trackBy:trackByIndex\">\r\n            <div class=\"avatar\">\r\n            <a role=\"button\" (click)=\"addMemberToGroup(i)\" popover=\"{{member.email}}\" popoverTitle=\"{{member.name}}\" popoverPlacement=\"auto right\"\r\n               [popoverOnHover]=\"true\" [popoverCloseOnClickOutside]=\"true\" [popoverCloseOnMouseOutside]=\"false\"\r\n               [popoverDisabled]=\"false\" [popoverAnimation]=\"true\">\r\n              <img alt=\"member\" class=\"img-circle img-avatar\" src=\"{{member.photourl}}\"></a>\r\n              <span *ngIf=\"addedList[i]\" class=\"avatar-status tag-success\"></span>\r\n            </div>\r\n          </span>\r\n\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"card-block\">\r\n        <div class=\"row\">\r\n          <strong class=\"col-md-3\">Name</strong>\r\n          <div class=\"col-md-9\">\r\n            <input type=\"text\" name=\"group\" class=\"form-control\" placeholder=\"group name\" [(ngModel)]=\"groupName\">\r\n            <span style=\"color: red\" class=\"help-block\"></span>\r\n          </div>\r\n        </div>\r\n\r\n        <br>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6\">\r\n            <label class=\"form-control-label\" for=\"text-input\">Start</label>\r\n            <input type=\"time\" name=\"start\" [(ngModel)]=\"start\"/>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <label class=\"form-control-label\" for=\"text-input\">Finish</label>\r\n            <input type=\"time\" name=\"finish\" [(ngModel)]=\"end\"/>\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"confirmationMessage !== ''\" class=\"alert alert-danger\" role=\"alert\">{{confirmationMessage}}</div>\r\n\r\n        <br><br>\r\n        <div class=\"row\">\r\n          <button (click)=\"submit()\" type=\"submit\" class=\"btn btn-sm btn-primary\"><i class=\"fa fa-dot-circle-o\"></i> Submit</button>\r\n          <button type=\"reset\" (click)=\"reset()\" class=\"btn btn-sm btn-danger\"><i class=\"fa fa-ban\"></i> Reset</button>\r\n        </div>\r\n      </div>\r\n\r\n\r\n\r\n    </div>\r\n  </div>\r\n</div>`\r\n"

/***/ },

/***/ 906:
/***/ function(module, exports) {

module.exports = "<div class=\"container-fluid custom-modal-container\">\r\n  <div class=\"modal-header\" style=\"padding-top: 0; padding-bottom: 0\">\r\n    <h3>Add Group to {{context.venueName}}</h3>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n      <!-- Members -->\r\n      <div style=\"text-align: center\" class=\"card-block\" *ngIf=\"members.length >= 1\">\r\n        <strong>Manage active members from other groups</strong>\r\n        <br><br>\r\n\r\n        <div class=\"team-members\">\r\n          <span *ngFor=\"let member of members\">\r\n            <a role=\"button\" (click)=\"addMemberToGroup(member)\" popover=\"{{member.email}}\" popoverTitle=\"{{member.name}}\" popoverPlacement=\"auto right\"\r\n               [popoverOnHover]=\"true\" [popoverCloseOnClickOutside]=\"true\" [popoverCloseOnMouseOutside]=\"false\"\r\n               [popoverDisabled]=\"false\" [popoverAnimation]=\"true\">\r\n              <img alt=\"member\" class=\"img-circle\" src=\"{{member.photourl}}\"></a>\r\n          </span>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"card-block\">\r\n        <label class=\"col-md-3 form-control-label\" for=\"text-input\">Name</label>\r\n        <div class=\"col-md-9\">\r\n          <input type=\"text\" name=\"group\" class=\"form-control\" placeholder=\"group name\">\r\n          <span style=\"color: red\" class=\"help-block\"></span>\r\n        </div>\r\n\r\n        <br><br>\r\n        <br>\r\n        <div class=\"col-md-6\">\r\n          <label class=\"form-control-label\" for=\"text-input\">Start</label>\r\n          &nbsp;&nbsp;\r\n          <input type=\"time\" name=\"start\" />\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <label class=\"form-control-label\" for=\"text-input\">Finish</label>\r\n          &nbsp;&nbsp;\r\n          <input type=\"time\" name=\"finish\" />\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <button (click)=\"submit()\" type=\"submit\" class=\"btn btn-sm btn-primary\"><i class=\"fa fa-dot-circle-o\"></i> Submit</button>\r\n          <button type=\"reset\" (click)=\"reset()\" class=\"btn btn-sm btn-danger\"><i class=\"fa fa-ban\"></i> Reset</button>\r\n        </div>\r\n      </div>\r\n\r\n\r\n\r\n    </div>\r\n  </div>\r\n</div>`\r\n"

/***/ },

/***/ 907:
/***/ function(module, exports) {

module.exports = "<div class=\"container-fluid custom-modal-container\">\n  <div class=\"modal-header\" style=\"padding-top: 0; padding-bottom: 0\">\n    <h3>Edit {{context.groupName}}</h3>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n\n      <div class=\"card-block\">\n        <br>\n        <div class=\"col-md-6\">\n          <label class=\"form-control-label\" for=\"text-input\">Start</label>\n          &nbsp;&nbsp;\n          <input type=\"time\" [(ngModel)]=\"start\" />\n        </div>\n        <div class=\"col-md-6\">\n          <label class=\"form-control-label\" for=\"text-input\">Finish</label>\n          &nbsp;&nbsp;\n          <input type=\"time\" [(ngModel)]=\"end\" />\n        </div>\n        <br><br>\n        <div class=\"row\">\n          <button (click)=\"submit()\" type=\"submit\" class=\"btn btn-sm btn-primary\"><i class=\"fa fa-dot-circle-o\"></i> Submit</button>\n          <button type=\"reset\" (click)=\"reset()\" class=\"btn btn-sm btn-danger\"><i class=\"fa fa-ban\"></i> Reset</button>\n        </div>\n      </div>\n\n\n\n    </div>\n  </div>\n</div>`\n"

/***/ },

/***/ 908:
/***/ function(module, exports) {

module.exports = "<app-header></app-header>\r\n\r\n\r\n<app-sidebar></app-sidebar>\r\n\r\n<!-- Main content -->\r\n<main class=\"main\">\r\n  <app-breadcrumb></app-breadcrumb>\r\n\r\n  <div class=\"container-fluid\">\r\n    <div class=\"animated fadeIn\">\r\n\r\n\r\n      <div class=\"row\">\r\n        <div class=\"card-columns col-2\">\r\n\r\n          <div class=\"col-md-12\">\r\n          <div class=\"card\">\r\n            <div class=\"card-header\">\r\n              {{\"weekly-access\" | translate}}\r\n            </div>\r\n            <div class=\"card-block\">\r\n              <div class=\"chart-wrapper\">\r\n                <canvas baseChart class=\"chart\" [datasets]=\"barChartDataWeek\" [labels]=\"barChartLabelsWeek\" [options]=\"barChartOptions\" [legend]=\"barChartLegend\" [chartType]=\"barChartType\" (chartClick)=\"chartClicked($event)\"></canvas>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          </div>\r\n\r\n          <div class=\"col-md-12\">\r\n          <div class=\"card\">\r\n            <div class=\"card-header\">\r\n              {{\"monthly-access\" | translate}}\r\n            </div>\r\n            <div class=\"card-block\">\r\n              <div class=\"chart-wrapper\">\r\n                <canvas baseChart class=\"chart\" [datasets]=\"barChartDataMonth\" [labels]=\"barChartLabelsMonth\" [options]=\"barChartOptions\" [legend]=\"barChartLegend\" [chartType]=\"barChartType\" (chartClick)=\"chartClicked($event)\"></canvas>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <!--/.row-->\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <div class=\"card\">\r\n\r\n            <div class=\"ibox-title\">\r\n              <h5>{{\"logs\" | translate}}</h5>\r\n            </div>\r\n            <div class=\"ibox-content\">\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-9 m-b-xs\">\r\n                  <div data-toggle=\"buttons\" class=\"btn-group\">\r\n                    <label class=\"btn btn-sm btn-white active\" id=\"dayPeriod\" (click)=\"choosePeriod('day')\"> <input type=\"radio\" name=\"options\"> {{\"day\" | translate}} </label>\r\n                    <label class=\"btn btn-sm btn-white\" id=\"weekPeriod\" (click)=\"choosePeriod('week')\"> <input type=\"radio\" name=\"options\"> {{\"week\" | translate}} </label>\r\n                    <label class=\"btn btn-sm btn-white\" id=\"monthPeriod\" (click)=\"choosePeriod('month')\"> <input type=\"radio\" name=\"options\"> {{\"month\" | translate}} </label>\r\n                    <label class=\"btn btn-sm btn-white\" id=\"allPeriod\" (click)=\"choosePeriod('all')\"> <input type=\"radio\" name=\"options\"> {{\"all\" | translate}} </label>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-3\">\r\n                  <div class=\"search-form\">\r\n                    <div class=\"form-group has-feedback\">\r\n                      <input (keyup)=\"search()\" type=\"text\" class=\"form-control\" placeholder=\"{{'search' | translate}}\" [(ngModel)]=\"searchInput\">\r\n                      <span class=\"fa fa-search search-icon form-control-feedback pull-right\"></span>\r\n                    </div>\r\n                  </div>\r\n\r\n                </div>\r\n              </div>\r\n              <div class=\"table-responsive\">\r\n                <table class=\"table table-striped\">\r\n                  <thead>\r\n                  <tr>\r\n                    <th></th>\r\n                    <th>{{\"date\" | translate}}</th>\r\n                    <th>{{\"venue\" | translate}} </th>\r\n                    <th>Photo</th>\r\n                    <th>{{\"name\" | translate}} </th>\r\n                    <th>{{\"email\" | translate}} </th>\r\n                    <th>{{\"permission\" | translate}} </th>\r\n                    <th>{{\"action\" | translate}}</th>\r\n                  </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                  <tr *ngFor=\"let log of filteredLogs \">\r\n                    <td><div class=\"avatar\"><img (click)=\"openModal(log.attemptPhoto)\" alt=\"member\" class=\"img-avatar\" src=\"{{log.attemptPhoto}}\"></div></td>\r\n                    <td>{{getMonth(log.date.month) | translate}} {{log.date.day}} {{log.date.year}}, {{log.date.time}}</td>\r\n                    <td>{{log.venue}}</td>\r\n                    <td><div class=\"avatar\"><img (click)=\"openModal(log.photourl)\" alt=\"member\" class=\"img-avatar\" src=\"{{log.photourl}}\"></div></td>\r\n                    <td>{{log.name}}</td>\r\n                    <td>{{log.email}}</td>\r\n                    <td>{{log.permission}}</td>\r\n                    <td><i [ngClass]=\"{'fa-check text-success': log.success == true, 'fa-close text-danger': log.success == false}\" class=\"fa\"></i></td>\r\n                  </tr>\r\n\r\n\r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n</main>\r\n\r\n<app-footer></app-footer>\r\n"

/***/ },

/***/ 909:
/***/ function(module, exports) {

module.exports = "<img class=\"image-responsive\" src=\"{{context.imagePath}}\">\r\n"

/***/ },

/***/ 910:
/***/ function(module, exports) {

module.exports = "<body data-spy=\"scroll\" data-target=\"#navbar-scroll\">\r\n\r\n\r\n  <!-- /.parallax full screen background image -->\r\n  <div class=\"fullscreen landing parallax\" style=\"background-image:url('assets/backyard/images/2000-1333.jpg');\" data-img-width=\"2000\" data-img-height=\"1333\" data-diff=\"100\">\r\n\r\n    <div class=\"overlay\">\r\n      <div class=\"container\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-7\">\r\n\r\n            <!-- /.logo -->\r\n            <div class=\"logo wow fadeInDown\"> <a href=\"\"><img src=\"assets/backyard/images/logo.png\" alt=\"logo\"></a></div>\r\n\r\n            <!-- /.main title -->\r\n            <h1 class=\"wow fadeInLeft\">\r\n              Beautiful High Converting Landing Page\r\n            </h1>\r\n\r\n            <!-- /.header paragraph -->\r\n            <div class=\"landing-text wow fadeInUp\">\r\n              <p>Backyard is a modern and customizable landing page template designed to increase conversion of your product. Backyard is flexible to suit any kind of your business. Try now and join with our happy customers!</p>\r\n            </div>\r\n\r\n            <!-- /.header button -->\r\n            <div class=\"head-btn wow fadeInLeft\">\r\n              <a href=\"#feature\" class=\"btn-primary\">Features</a>\r\n              <a href=\"#download\" class=\"btn-default\">Download</a>\r\n            </div>\r\n\r\n\r\n\r\n          </div>\r\n\r\n          <!-- /.signup form -->\r\n          <div class=\"col-md-5\">\r\n\r\n            <div class=\"signup-header wow fadeInUp\">\r\n              <h3 class=\"form-title text-center\">GET STARTED</h3>\r\n              <form class=\"form-header\" action=\"http://moxdesign.us10.list-manage.com/subscribe/post\" role=\"form\" method=\"POST\" id=\"#\">\r\n                <input type=\"hidden\" name=\"u\" value=\"503bdae81fde8612ff4944435\">\r\n                <input type=\"hidden\" name=\"id\" value=\"bfdba52708\">\r\n                <div class=\"form-group\">\r\n                  <input class=\"form-control input-lg\" name=\"MERGE1\" id=\"name\" type=\"text\" placeholder=\"Your name\" required>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <input class=\"form-control input-lg\" name=\"MERGE0\" id=\"email\" type=\"email\" placeholder=\"Email address\" required>\r\n                </div>\r\n                <div class=\"form-group last\">\r\n                  <input type=\"submit\" class=\"btn btn-warning btn-block btn-lg\" value=\"SUBSCRIBE\">\r\n                </div>\r\n                <p class=\"privacy text-center\">We will not share your email. Read our <a href=\"privacy.html\">privacy policy</a>.</p>\r\n              </form>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- NAVIGATION -->\r\n  <div id=\"menu\">\r\n    <nav class=\"navbar-wrapper navbar-default\" role=\"navigation\">\r\n      <div class=\"container\">\r\n        <div class=\"navbar-header\">\r\n          <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-backyard\">\r\n            <span class=\"sr-only\">Toggle navigation</span>\r\n            <span class=\"icon-bar\"></span>\r\n            <span class=\"icon-bar\"></span>\r\n            <span class=\"icon-bar\"></span>\r\n          </button>\r\n          <a class=\"navbar-brand site-name\" href=\"#top\"><img src=\"assets/backyard/images/logo2.png\" alt=\"logo\"></a>\r\n        </div>\r\n\r\n        <div id=\"navbar-scroll\" class=\"collapse navbar-collapse navbar-backyard navbar-right\">\r\n          <ul class=\"nav navbar-nav\">\r\n            <li><a href=\"#intro\"> {{ \"about\" | translate }}</a></li>\r\n            <li><a href=\"#feature\">Features</a></li>\r\n            <li><a href=\"#download\">Download</a></li>\r\n            <li><a href=\"#package\">Pricing</a></li>\r\n            <li><a href=\"#testi\">Reviews</a></li>\r\n            <li><a href=\"#contact\">Contact</a></li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </nav>\r\n  </div>\r\n\r\n  <!-- /.intro section -->\r\n  <div id=\"intro\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n\r\n        <!-- /.intro image -->\r\n        <div class=\"col-md-6 intro-pic wow slideInLeft\">\r\n          <img src=\"assets/backyard/images/intro-image.jpg\" alt=\"image\" class=\"img-responsive\">\r\n        </div>\r\n\r\n        <!-- /.intro content -->\r\n        <div class=\"col-md-6 wow slideInRight\">\r\n          <h2>Optimize performance through advanced targeting solutions</h2>\r\n          <p>Good marketing makes the company look smart. <a href=\"#\">Great marketing</a> makes the customer feel smart, - Joe Chernov. Never doubt a small group of thoughtful, committed people can change the world. Indeed, it is the only thing that ever has, - Margaret Mead. The best way to predict the future is to create it, - Peter Drucker.\r\n          </p>\r\n\r\n          <div class=\"btn-section\"><a href=\"#feature\" class=\"btn-default\">Learn More</a></div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- /.feature section -->\r\n  <div id=\"feature\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-10 col-md-offset-1 col-sm-12 text-center feature-title\">\r\n\r\n          <!-- /.feature title -->\r\n          <h2>Recreate your ideas and gain more success</h2>\r\n          <p>Increase your user loyalty by maintaining mutual communication and nurturing your online community.</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"row row-feat\">\r\n        <div class=\"col-md-4 text-center\">\r\n\r\n          <!-- /.feature image -->\r\n          <div class=\"feature-img\">\r\n            <img src=\"assets/backyard/images/feature-image.jpg\" alt=\"image\" class=\"img-responsive wow fadeInLeft\">\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-8\">\r\n\r\n          <!-- /.feature 1 -->\r\n          <div class=\"col-sm-6 feat-list\">\r\n            <i class=\"pe-7s-notebook pe-5x pe-va wow fadeInUp\"></i>\r\n            <div class=\"inner\">\r\n              <h4>Marketing Strategy</h4>\r\n              <p>Good marketing makes the company look smart. Great marketing makes the customer feel smart.\r\n              </p>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- /.feature 2 -->\r\n          <div class=\"col-sm-6 feat-list\">\r\n            <i class=\"pe-7s-cash pe-5x pe-va wow fadeInUp\" data-wow-delay=\"0.2s\"></i>\r\n            <div class=\"inner\">\r\n              <h4>App Monetization</h4>\r\n              <p>Content builds relationships. Relationships are built on trust. Trust drives revenue. - Andrew Davis</p>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- /.feature 3 -->\r\n          <div class=\"col-sm-6 feat-list\">\r\n            <i class=\"pe-7s-cart pe-5x pe-va wow fadeInUp\" data-wow-delay=\"0.4s\"></i>\r\n            <div class=\"inner\">\r\n              <h4>Store Optimization</h4>\r\n              <p>Never doubt a small group of thoughtful, committed people can change the world. Indeed, it is the only thing that ever has.</p>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- /.feature 4 -->\r\n          <div class=\"col-sm-6 feat-list\">\r\n            <i class=\"pe-7s-users pe-5x pe-va wow fadeInUp\" data-wow-delay=\"0.6s\"></i>\r\n            <div class=\"inner\">\r\n              <h4>User Management</h4>\r\n              <p>Instead of using technology to automate processes, think about using technology to enhance human interaction.</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- /.feature 2 section -->\r\n  <div id=\"feature-2\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n\r\n        <!-- /.feature content -->\r\n        <div class=\"col-md-6 wow fadeInLeft\">\r\n          <h2>Learn how to make your app marketing efficient</h2>\r\n          <p>Good marketing makes the company look smart. <span class=\"highlight\">Great marketing</span> makes the customer feel smart, - Joe Chernov. Never doubt a small group of thoughtful, committed people can change the world. Indeed, it is the only thing that ever has, - Margaret Mead. The best way to predict the future is to create it, - Peter Drucker.\r\n          </p>\r\n\r\n          <div class=\"btn-section\"><a href=\"#download\" class=\"btn-default\">Download Now</a></div>\r\n\r\n        </div>\r\n\r\n        <!-- /.feature image -->\r\n        <div class=\"col-md-6 feature-2-pic wow fadeInRight\">\r\n          <img src=\"assets/backyard/images/feature2-image.jpg\" alt=\"macbook\" class=\"img-responsive\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- /.download section -->\r\n  <div id=\"download\">\r\n    <div class=\"action fullscreen parallax\" style=\"background-image:url('assets/backyard/images/bg.jpg');\" data-img-width=\"2000\" data-img-height=\"1333\" data-diff=\"100\">\r\n      <div class=\"overlay\">\r\n        <div class=\"container\">\r\n          <div class=\"col-md-8 col-md-offset-2 col-sm-12 text-center\">\r\n\r\n            <!-- /.download title -->\r\n            <h2 class=\"wow fadeInRight\">Would like to know more?</h2>\r\n            <p class=\"download-text wow fadeInLeft\">We'll research the market, identify the right target audience, analyze competitors and avoid users churn to increase retention. Download now for free and join with thousands happy clients.</p>\r\n\r\n            <!-- /.download button -->\r\n            <div class=\"download-cta wow fadeInLeft\">\r\n              <a href=\"#contact\" class=\"btn-secondary\">Get Connected</a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- /.pricing section -->\r\n  <div id=\"package\">\r\n    <div class=\"container\">\r\n      <div class=\"text-center\">\r\n\r\n        <!-- /.pricing title -->\r\n        <h2 class=\"wow fadeInLeft\">PACKAGES</h2>\r\n        <div class=\"title-line wow fadeInRight\"></div>\r\n      </div>\r\n      <div class=\"row package-option\">\r\n\r\n        <!-- /.package 1 -->\r\n        <div class=\"col-sm-3\">\r\n          <div class=\"price-box wow fadeInUp\">\r\n            <div class=\"price-heading text-center\">\r\n\r\n              <!-- /.package icon -->\r\n              <i class=\"pe-7s-radio pe-5x\"></i>\r\n\r\n              <!-- /.package name -->\r\n              <h3>Basic</h3>\r\n            </div>\r\n\r\n            <!-- /.price -->\r\n            <div class=\"price-group text-center\">\r\n              <span class=\"dollar\">$</span>\r\n              <span class=\"price\">9</span>\r\n              <span class=\"time\">/mo</span>\r\n            </div>\r\n\r\n            <!-- /.package features -->\r\n            <ul class=\"price-feature text-center\">\r\n              <li><strong>100MB</strong> Disk Space</li>\r\n              <li><strong>200MB</strong> Bandwidth</li>\r\n              <li><strong>2</strong> Subdomains</li>\r\n              <li><strong>5</strong> Email Accounts</li>\r\n              <li><s>Webmail Support</s></li>\r\n            </ul>\r\n\r\n            <!-- /.package button -->\r\n            <div class=\"price-footer text-center\">\r\n              <a class=\"btn btn-price\" href=\"#\">BUY NOW</a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- /.package 2 -->\r\n        <div class=\"col-sm-3\">\r\n          <div class=\"price-box wow fadeInUp\" data-wow-delay=\"0.2s\">\r\n            <div class=\"price-heading text-center\">\r\n\r\n              <!-- /.package icon -->\r\n              <i class=\"pe-7s-joy pe-5x\"></i>\r\n\r\n              <!-- /.package name -->\r\n              <h3>Standard</h3>\r\n            </div>\r\n\r\n            <!-- /.price -->\r\n            <div class=\"price-group text-center\">\r\n              <span class=\"dollar\">$</span>\r\n              <span class=\"price\">19</span>\r\n              <span class=\"time\">/mo</span>\r\n            </div>\r\n\r\n            <!-- /.package features -->\r\n            <ul class=\"price-feature text-center\">\r\n              <li><strong>300MB</strong> Disk Space</li>\r\n              <li><strong>400MB</strong> Bandwidth</li>\r\n              <li><strong>5</strong> Subdomains</li>\r\n              <li><strong>10</strong> Email Accounts</li>\r\n              <li><s>Webmail Support</s></li>\r\n            </ul>\r\n\r\n            <!-- /.package button -->\r\n            <div class=\"price-footer text-center\">\r\n              <a class=\"btn btn-price\" href=\"#\">BUY NOW</a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- /.package 3 -->\r\n        <div class=\"col-sm-3\">\r\n          <div class=\"price-box wow fadeInUp\" data-wow-delay=\"0.4s\">\r\n            <div class=\"price-heading text-center\">\r\n\r\n              <!-- /.package icon -->\r\n              <i class=\"pe-7s-science pe-5x\"></i>\r\n\r\n              <!-- /.package name -->\r\n              <h3>Advance</h3>\r\n            </div>\r\n\r\n            <!-- /.price -->\r\n            <div class=\"price-group text-center\">\r\n              <span class=\"dollar\">$</span>\r\n              <span class=\"price\">29</span>\r\n              <span class=\"time\">/mo</span>\r\n            </div>\r\n\r\n            <!-- /.package features -->\r\n            <ul class=\"price-feature text-center\">\r\n              <li><strong>1GB</strong> Disk Space</li>\r\n              <li><strong>1GB</strong> Bandwidth</li>\r\n              <li><strong>10</strong> Subdomains</li>\r\n              <li><strong>25</strong> Email Accounts</li>\r\n              <li>Webmail Support</li>\r\n            </ul>\r\n\r\n            <!-- /.package button -->\r\n            <div class=\"price-footer text-center\">\r\n              <a class=\"btn btn-price\" href=\"#\">BUY NOW</a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- /.package 4 -->\r\n        <div class=\"col-sm-3\">\r\n          <div class=\"price-box wow fadeInUp\" data-wow-delay=\"0.6s\">\r\n            <div class=\"price-heading text-center\">\r\n\r\n              <!-- /.package icon -->\r\n              <i class=\"pe-7s-tools pe-5x\"></i>\r\n\r\n              <!-- /.package name -->\r\n              <h3>Ultimate</h3>\r\n            </div>\r\n\r\n            <!-- /.price -->\r\n            <div class=\"price-group text-center\">\r\n              <span class=\"dollar\">$</span>\r\n              <span class=\"price\">49</span>\r\n              <span class=\"time\">/mo</span>\r\n            </div>\r\n\r\n            <!-- /.package features -->\r\n            <ul class=\"price-feature text-center\">\r\n              <li><strong>5GB</strong> Disk Space</li>\r\n              <li><strong>5GB</strong> Bandwidth</li>\r\n              <li><strong>50</strong> Subdomains</li>\r\n              <li><strong>50</strong> Email Accounts</li>\r\n              <li>Webmail Support</li>\r\n            </ul>\r\n\r\n            <!-- /.package button -->\r\n            <div class=\"price-footer text-center\">\r\n              <a class=\"btn btn-price\" href=\"#\">BUY NOW</a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- /.client section -->\r\n  <div id=\"client\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12 text-center\">\r\n          <img alt=\"client\" src=\"assets/backyard/images/client1.png\" class=\"wow fadeInUp\">\r\n          <img alt=\"client\" src=\"assets/backyard/images/client2.png\" class=\"wow fadeInUp\" data-wow-delay=\"0.2s\">\r\n          <img alt=\"client\" src=\"assets/backyard/images/client3.png\" class=\"wow fadeInUp\" data-wow-delay=\"0.4s\">\r\n          <img alt=\"client\" src=\"assets/backyard/images/client4.png\" class=\"wow fadeInUp\" data-wow-delay=\"0.6s\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- /.testimonial section -->\r\n  <div id=\"testi\">\r\n    <div class=\"container\">\r\n      <div class=\"text-center\">\r\n        <h2 class=\"wow fadeInLeft\">TESTIMONIALS</h2>\r\n        <div class=\"title-line wow fadeInRight\"></div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-10 col-sm-offset-1\">\r\n          <div id=\"owl-testi\" class=\"owl-carousel owl-theme wow fadeInUp\">\r\n\r\n            <!-- /.testimonial 1 -->\r\n            <div class=\"testi-item\">\r\n              <div class=\"client-pic text-center\">\r\n\r\n                <!-- /.client photo -->\r\n                <img src=\"assets/backyard/images/testi1.jpg\" alt=\"client\">\r\n              </div>\r\n              <div class=\"box\">\r\n\r\n                <!-- /.testimonial content -->\r\n                <p class=\"message text-center\">\"We are very happy and satisfied with Backyard service. Our account manager is efficient and very knowledgeable. It was able to create a vast fan base within very short period of time. We would highly recommend Backyard App to anyone.\"</p>\r\n              </div>\r\n              <div class=\"client-info text-center\">\r\n\r\n                <!-- /.client name -->\r\n                Jennifer Lopez, <span class=\"company\">Microsoft</span>\r\n              </div>\r\n            </div>\r\n\r\n            <!-- /.testimonial 2 -->\r\n            <div class=\"testi-item\">\r\n              <div class=\"client-pic text-center\">\r\n\r\n                <!-- /.client photo -->\r\n                <img src=\"assets/backyard/images/testi2.jpg\" alt=\"client\">\r\n              </div>\r\n              <div class=\"box\">\r\n\r\n                <!-- /.testimonial content -->\r\n                <p class=\"message text-center\">\"Everything looks great... Thanks for the quick revision turn around. We were lucky to find you guys and will definitely be using some of your other services in the near future.\"</p>\r\n              </div>\r\n              <div class=\"client-info text-center\">\r\n\r\n                <!-- /.client name -->\r\n                Mike Portnoy, <span class=\"company\">Dream Theater</span>\r\n              </div>\r\n            </div>\r\n\r\n            <!-- /.testimonial 3 -->\r\n            <div class=\"testi-item\">\r\n              <div class=\"client-pic text-center\">\r\n\r\n                <!-- /.client photo -->\r\n                <img src=\"assets/backyard/images/testi3.jpg\" alt=\"client\">\r\n              </div>\r\n              <div class=\"box\">\r\n\r\n                <!-- /.testimonial content -->\r\n                <p class=\"message text-center\">\"Overall, the two reports were very clear and helpful so thank you for the suggestion to do the focus group. We are currently working with our developer to implement some of these suggestions.\"</p>\r\n              </div>\r\n              <div class=\"client-info text-center\">\r\n\r\n                <!-- /.client name -->\r\n                Jennifer Love Hewitt, <span class=\"company\">Lead Vocal</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- /.contact section -->\r\n  <div id=\"contact\">\r\n    <div class=\"contact fullscreen parallax\" style=\"background-image:url('assets/backyard/images/bg.jpg');\" data-img-width=\"2000\" data-img-height=\"1334\" data-diff=\"100\">\r\n      <div class=\"overlay\">\r\n        <div class=\"container\">\r\n          <div class=\"row contact-row\">\r\n\r\n            <!-- /.address and contact -->\r\n            <div class=\"col-sm-5 contact-left wow fadeInUp\">\r\n              <h2><span class=\"highlight\">Get</span> in touch</h2>\r\n              <ul class=\"ul-address\">\r\n                <li><i class=\"pe-7s-map-marker\"></i>1600 Amphitheatre Parkway, Mountain View<br>\r\n                  California 55000\r\n                </li>\r\n                <li><i class=\"pe-7s-phone\"></i>+1 (123) 456-7890<br>\r\n                  +2 (123) 456-7890\r\n                </li>\r\n                <li><i class=\"pe-7s-mail\"></i><a href=\"mailto:info@yoursite.com\">info@yoursite.com</a></li>\r\n                <li><i class=\"pe-7s-look\"></i><a href=\"#\">www.yoursite.com</a></li>\r\n              </ul>\r\n\r\n            </div>\r\n\r\n            <!-- /.contact form -->\r\n            <div class=\"col-sm-7 contact-right\">\r\n              <form method=\"POST\" id=\"contact-form\" class=\"form-horizontal\" action=\"contactengine.php\" onSubmit=\"alert( 'Thank you for your feedback!' );\">\r\n                <div class=\"form-group\">\r\n                  <input type=\"text\" name=\"Name\" id=\"Name\" class=\"form-control wow fadeInUp\" placeholder=\"Name\" required/>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <input type=\"text\" name=\"Email\" id=\"Email\" class=\"form-control wow fadeInUp\" placeholder=\"Email\" required/>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <textarea name=\"Message\" rows=\"20\" cols=\"20\" id=\"Message\" class=\"form-control input-message wow fadeInUp\"  placeholder=\"Message\" required></textarea>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <input type=\"submit\" name=\"submit\" value=\"Submit\" class=\"btn btn-success wow fadeInUp\" />\r\n                </div>\r\n              </form>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- /.footer -->\r\n  <footer id=\"footer\">\r\n    <div class=\"container\">\r\n      <div class=\"col-sm-4 col-sm-offset-4\">\r\n        <!-- /.social links -->\r\n        <div class=\"social text-center\">\r\n          <ul>\r\n            <li><a class=\"wow fadeInUp\" href=\"https://twitter.com/\"><i class=\"fa fa-twitter\"></i></a></li>\r\n            <li><a class=\"wow fadeInUp\" href=\"https://www.facebook.com/\" data-wow-delay=\"0.2s\"><i class=\"fa fa-facebook\"></i></a></li>\r\n            <li><a class=\"wow fadeInUp\" href=\"https://plus.google.com/\" data-wow-delay=\"0.4s\"><i class=\"fa fa-google-plus\"></i></a></li>\r\n            <li><a class=\"wow fadeInUp\" href=\"https://instagram.com/\" data-wow-delay=\"0.6s\"><i class=\"fa fa-instagram\"></i></a></li>\r\n          </ul>\r\n        </div>\r\n        <div class=\"text-center wow fadeInUp\" style=\"font-size: 14px;\">Copyright Backyard 2015 - Template by  <a href=\"http://bootstrapthemes.co/\" target=\"_blank\">BootstrapThemes</a></div>\r\n        <a href=\"#\" class=\"scrollToTop\"><i class=\"pe-7s-up-arrow pe-va\"></i></a>\r\n      </div>\r\n    </div>\r\n  </footer>\r\n\r\n</body>\r\n"

/***/ },

/***/ 911:
/***/ function(module, exports) {

module.exports = "<aside class=\"aside-menu\">\r\n  <tabset>\r\n    <tab>\r\n      <template tabHeading><i class=\"icon-list\"></i>\r\n      </template>\r\n      <div class=\"callout m-0 py-h text-muted text-xs-center bg-faded text-uppercase\">\r\n        <small><b>Today</b>\r\n        </small>\r\n      </div>\r\n      <hr class=\"transparent mx-1 my-0\">\r\n      <div class=\"callout callout-warning m-0 py-1\">\r\n        <div class=\"avatar float-xs-right\">\r\n          <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n        </div>\r\n        <div>Meeting with\r\n          <strong>Lucas</strong>\r\n        </div>\r\n        <small class=\"text-muted mr-1\"><i class=\"icon-calendar\"></i>&nbsp; 1 - 3pm</small>\r\n        <small class=\"text-muted\"><i class=\"icon-location-pin\"></i>&nbsp; Palo Alto, CA</small>\r\n      </div>\r\n      <hr class=\"mx-1 my-0\">\r\n      <div class=\"callout callout-info m-0 py-1\">\r\n        <div class=\"avatar float-xs-right\">\r\n          <img src=\"assets/img/avatars/4.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n        </div>\r\n        <div>Skype with\r\n          <strong>Megan</strong>\r\n        </div>\r\n        <small class=\"text-muted mr-1\"><i class=\"icon-calendar\"></i>&nbsp; 4 - 5pm</small>\r\n        <small class=\"text-muted\"><i class=\"icon-social-skype\"></i>&nbsp; On-line</small>\r\n      </div>\r\n      <hr class=\"transparent mx-1 my-0\">\r\n      <div class=\"callout m-0 py-h text-muted text-xs-center bg-faded text-uppercase\">\r\n        <small><b>Tomorrow</b>\r\n        </small>\r\n      </div>\r\n      <hr class=\"transparent mx-1 my-0\">\r\n      <div class=\"callout callout-danger m-0 py-1\">\r\n        <div>New UI Project -\r\n          <strong>deadline</strong>\r\n        </div>\r\n        <small class=\"text-muted mr-1\"><i class=\"icon-calendar\"></i>&nbsp; 10 - 11pm</small>\r\n        <small class=\"text-muted\"><i class=\"icon-home\"></i>&nbsp; creativeLabs HQ</small>\r\n        <div class=\"avatars-stack mt-h\">\r\n          <div class=\"avatar avatar-xs\">\r\n            <img src=\"assets/img/avatars/2.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n          </div>\r\n          <div class=\"avatar avatar-xs\">\r\n            <img src=\"assets/img/avatars/3.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n          </div>\r\n          <div class=\"avatar avatar-xs\">\r\n            <img src=\"assets/img/avatars/4.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n          </div>\r\n          <div class=\"avatar avatar-xs\">\r\n            <img src=\"assets/img/avatars/5.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n          </div>\r\n          <div class=\"avatar avatar-xs\">\r\n            <img src=\"assets/img/avatars/6.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <hr class=\"mx-1 my-0\">\r\n      <div class=\"callout callout-success m-0 py-1\">\r\n        <div>\r\n          <strong>#10 Startups.Garden</strong>Meetup</div>\r\n        <small class=\"text-muted mr-1\"><i class=\"icon-calendar\"></i>&nbsp; 1 - 3pm</small>\r\n        <small class=\"text-muted\"><i class=\"icon-location-pin\"></i>&nbsp; Palo Alto, CA</small>\r\n      </div>\r\n      <hr class=\"mx-1 my-0\">\r\n      <div class=\"callout callout-primary m-0 py-1\">\r\n        <div>\r\n          <strong>Team meeting</strong>\r\n        </div>\r\n        <small class=\"text-muted mr-1\"><i class=\"icon-calendar\"></i>&nbsp; 4 - 6pm</small>\r\n        <small class=\"text-muted\"><i class=\"icon-home\"></i>&nbsp; creativeLabs HQ</small>\r\n        <div class=\"avatars-stack mt-h\">\r\n          <div class=\"avatar avatar-xs\">\r\n            <img src=\"assets/img/avatars/2.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n          </div>\r\n          <div class=\"avatar avatar-xs\">\r\n            <img src=\"assets/img/avatars/3.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n          </div>\r\n          <div class=\"avatar avatar-xs\">\r\n            <img src=\"assets/img/avatars/4.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n          </div>\r\n          <div class=\"avatar avatar-xs\">\r\n            <img src=\"assets/img/avatars/5.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n          </div>\r\n          <div class=\"avatar avatar-xs\">\r\n            <img src=\"assets/img/avatars/6.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n          </div>\r\n          <div class=\"avatar avatar-xs\">\r\n            <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n          </div>\r\n          <div class=\"avatar avatar-xs\">\r\n            <img src=\"assets/img/avatars/8.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <hr class=\"mx-1 my-0\">\r\n    </tab>\r\n    <tab>\r\n      <template tabHeading><i class=\"icon-speech\"></i>\r\n      </template>\r\n      <div class=\"p-1\">\r\n        <div class=\"message\">\r\n          <div class=\"py-1 pb-3 mr-1 float-xs-left\">\r\n            <div class=\"avatar\">\r\n              <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n              <span class=\"avatar-status tag-success\"></span>\r\n            </div>\r\n          </div>\r\n          <div>\r\n            <small class=\"text-muted\">Lukasz Holeczek</small>\r\n            <small class=\"text-muted float-xs-right mt-q\">1:52 PM</small>\r\n          </div>\r\n          <div class=\"text-truncate font-weight-bold\">Lorem ipsum dolor sit amet</div>\r\n          <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>\r\n        </div>\r\n        <hr>\r\n        <div class=\"message\">\r\n          <div class=\"py-1 pb-3 mr-1 float-xs-left\">\r\n            <div class=\"avatar\">\r\n              <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n              <span class=\"avatar-status tag-success\"></span>\r\n            </div>\r\n          </div>\r\n          <div>\r\n            <small class=\"text-muted\">Lukasz Holeczek</small>\r\n            <small class=\"text-muted float-xs-right mt-q\">1:52 PM</small>\r\n          </div>\r\n          <div class=\"text-truncate font-weight-bold\">Lorem ipsum dolor sit amet</div>\r\n          <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>\r\n        </div>\r\n        <hr>\r\n        <div class=\"message\">\r\n          <div class=\"py-1 pb-3 mr-1 float-xs-left\">\r\n            <div class=\"avatar\">\r\n              <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n              <span class=\"avatar-status tag-success\"></span>\r\n            </div>\r\n          </div>\r\n          <div>\r\n            <small class=\"text-muted\">Lukasz Holeczek</small>\r\n            <small class=\"text-muted float-xs-right mt-q\">1:52 PM</small>\r\n          </div>\r\n          <div class=\"text-truncate font-weight-bold\">Lorem ipsum dolor sit amet</div>\r\n          <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>\r\n        </div>\r\n        <hr>\r\n        <div class=\"message\">\r\n          <div class=\"py-1 pb-3 mr-1 float-xs-left\">\r\n            <div class=\"avatar\">\r\n              <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n              <span class=\"avatar-status tag-success\"></span>\r\n            </div>\r\n          </div>\r\n          <div>\r\n            <small class=\"text-muted\">Lukasz Holeczek</small>\r\n            <small class=\"text-muted float-xs-right mt-q\">1:52 PM</small>\r\n          </div>\r\n          <div class=\"text-truncate font-weight-bold\">Lorem ipsum dolor sit amet</div>\r\n          <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>\r\n        </div>\r\n        <hr>\r\n        <div class=\"message\">\r\n          <div class=\"py-1 pb-3 mr-1 float-xs-left\">\r\n            <div class=\"avatar\">\r\n              <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n              <span class=\"avatar-status tag-success\"></span>\r\n            </div>\r\n          </div>\r\n          <div>\r\n            <small class=\"text-muted\">Lukasz Holeczek</small>\r\n            <small class=\"text-muted float-xs-right mt-q\">1:52 PM</small>\r\n          </div>\r\n          <div class=\"text-truncate font-weight-bold\">Lorem ipsum dolor sit amet</div>\r\n          <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>\r\n        </div>\r\n      </div>\r\n    </tab>\r\n    <tab>\r\n      <template tabHeading><i class=\"icon-settings\"></i>\r\n      </template>\r\n      <div class=\"p-1\">\r\n        <h6>Settings</h6>\r\n\r\n        <div class=\"aside-options\">\r\n          <div class=\"clearfix mt-2\">\r\n            <small><b>Option 1</b>\r\n            </small>\r\n            <label class=\"switch switch-text switch-pill switch-success switch-sm float-xs-right\">\r\n              <input type=\"checkbox\" class=\"switch-input\" checked>\r\n              <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\r\n              <span class=\"switch-handle\"></span>\r\n            </label>\r\n          </div>\r\n          <div>\r\n            <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</small>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"aside-options\">\r\n          <div class=\"clearfix mt-1\">\r\n            <small><b>Option 2</b>\r\n            </small>\r\n            <label class=\"switch switch-text switch-pill switch-success switch-sm float-xs-right\">\r\n              <input type=\"checkbox\" class=\"switch-input\">\r\n              <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\r\n              <span class=\"switch-handle\"></span>\r\n            </label>\r\n          </div>\r\n          <div>\r\n            <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</small>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"aside-options\">\r\n          <div class=\"clearfix mt-1\">\r\n            <small><b>Option 3</b>\r\n            </small>\r\n            <label class=\"switch switch-text switch-pill switch-success switch-sm float-xs-right\">\r\n              <input type=\"checkbox\" class=\"switch-input\">\r\n              <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\r\n              <span class=\"switch-handle\"></span>\r\n            </label>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"aside-options\">\r\n          <div class=\"clearfix mt-1\">\r\n            <small><b>Option 4</b>\r\n            </small>\r\n            <label class=\"switch switch-text switch-pill switch-success switch-sm float-xs-right\">\r\n              <input type=\"checkbox\" class=\"switch-input\" checked>\r\n              <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\r\n              <span class=\"switch-handle\"></span>\r\n            </label>\r\n          </div>\r\n        </div>\r\n\r\n        <hr>\r\n        <h6>System Utilization</h6>\r\n\r\n        <div class=\"text-uppercase mb-q mt-2\">\r\n          <small><b>CPU Usage</b>\r\n          </small>\r\n        </div>\r\n        <progress class=\"progress progress-xs progress-info m-0\" value=\"25\" max=\"100\">25%</progress>\r\n        <small class=\"text-muted\">348 Processes. 1/4 Cores.</small>\r\n\r\n        <div class=\"text-uppercase mb-q mt-h\">\r\n          <small><b>Memory Usage</b>\r\n          </small>\r\n        </div>\r\n        <progress class=\"progress progress-xs progress-warning m-0\" value=\"70\" max=\"100\">70%</progress>\r\n        <small class=\"text-muted\">11444GB/16384MB</small>\r\n\r\n        <div class=\"text-uppercase mb-q mt-h\">\r\n          <small><b>SSD 1 Usage</b>\r\n          </small>\r\n        </div>\r\n        <progress class=\"progress progress-xs progress-danger m-0\" value=\"95\" max=\"100\">95%</progress>\r\n        <small class=\"text-muted\">243GB/256GB</small>\r\n\r\n        <div class=\"text-uppercase mb-q mt-h\">\r\n          <small><b>SSD 2 Usage</b>\r\n          </small>\r\n        </div>\r\n        <progress class=\"progress progress-xs progress-success m-0\" value=\"10\" max=\"100\">10%</progress>\r\n        <small class=\"text-muted\">25GB/256GB</small>\r\n      </div>\r\n    </tab>\r\n  </tabset>\r\n</aside>\r\n"

/***/ },

/***/ 912:
/***/ function(module, exports) {

module.exports = "<span defaultOverlayTarget></span>\r\n\r\n<!-- Breadcrumb -->\r\n<ol class=\"breadcrumb\">\r\n  <breadcrumbs></breadcrumbs>\r\n\r\n  <!-- Breadcrumb Menu-->\r\n  <li class=\"breadcrumb-menu\">\r\n    <div class=\"btn-group\" role=\"group\" aria-label=\"Button group with nested dropdown\">\r\n      <a class=\"btn btn-secondary\" routerLinkActive=\"active\" (click)=\"openNewVenueModal()\" ><i class=\"fa fa-plus-square-o\"></i> &nbsp;{{\"new-venue\" | translate}}</a>\r\n    <!--[routerLink]=\"['/dashboard/new-venue']\"-->\r\n    </div>\r\n  </li>\r\n\r\n</ol>\r\n"

/***/ },

/***/ 913:
/***/ function(module, exports) {

module.exports = "<footer class=\"footer\">\r\n    <span class=\"text-left\">\r\n        <a href=\"http://coreui.io\">Projeto Raimundo</a> &copy; 2017\r\n    </span>\r\n  <span class=\"float-xs-right\">\r\n        Powered by <a href=\"http://coreui.io\">CoreUI</a>\r\n    </span>\r\n</footer>\r\n"

/***/ },

/***/ 914:
/***/ function(module, exports) {

module.exports = "<header class=\"navbar\">\r\n  <div class=\"container-fluid\">\r\n    <button class=\"navbar-toggler hidden-lg-up\" type=\"button\" mobile-nav-toggle>&#9776;</button>\r\n    <a class=\"navbar-brand\" routerLinkActive=\"active\" [routerLink]=\"['/']\"></a>\r\n\r\n    <ul class=\"nav navbar-nav float-xs-right hidden-md-down\" style=\"padding-right: 1rem\">\r\n      <!--<li class=\"nav-item\">-->\r\n        <!--<a class=\"nav-link\" href=\"#\"><i class=\"icon-bell\"></i><span class=\"tag tag-pill tag-danger\">5</span></a>-->\r\n      <!--</li>-->\r\n      <!--<li class=\"nav-item\">-->\r\n        <!--<a class=\"nav-link\" href=\"#\"><i class=\"icon-list\"></i></a>-->\r\n      <!--</li>-->\r\n      <li class=\"nav-item\">\r\n        <img role=\"button\" (click)=\"changeLanguage('pt')\" src=\"assets/img/flags/Brazil.png\" alt=\"Brazil\" style=\"height:20px;\" src=\"assets/img/flags/Brazil.png\">\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <img role=\"button\" (click)=\"changeLanguage('en')\" src=\"assets/img/flags/United-Kingdom.png\" alt=\"Brazil\" style=\"height:20px;\" src=\"assets/img/flags/United-Kingdom.png\">\r\n      </li>\r\n      <!--<li class=\"nav-item dropdown\" dropdown (onToggle)=\"$event\">-->\r\n        <!--<a class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\" dropdownToggle>-->\r\n          <!--<img src=\"{{userPhoto}}\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">-->\r\n          <!--<span class=\"hidden-md-down\">{{userInfo.displayName}}</span>-->\r\n        <!--</a>-->\r\n        <!--<div class=\"dropdown-menu dropdown-menu-right\" dropdownMenu aria-labelledby=\"simple-dropdown\">-->\r\n\r\n          <!--<div class=\"dropdown-header text-xs-center\">-->\r\n            <!--<strong>Account</strong>-->\r\n          <!--</div>-->\r\n\r\n          <!--<a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-bell-o\"></i> Updates<span class=\"tag tag-info\">42</span></a>-->\r\n          <!--<a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-envelope-o\"></i> Messages<span class=\"tag tag-success\">42</span></a>-->\r\n          <!--<a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-tasks\"></i> Tasks<span class=\"tag tag-danger\">42</span></a>-->\r\n          <!--<a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-comments\"></i> Comment<span class=\"tag tag-warning\">42</span></a>-->\r\n\r\n          <!--<div class=\"dropdown-header text-xs-center\">-->\r\n            <!--<strong>Settings</strong>-->\r\n          <!--</div>-->\r\n\r\n          <!--<a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-user\"></i> Profile</a>-->\r\n          <!--<a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-wrench\"></i> Setting</a>-->\r\n          <!--<a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-usd\"></i> Payments<span class=\"tag tag-default\">42</span></a>-->\r\n          <!--<a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-file\"></i> Projects<span class=\"tag tag-primary\">42</span></a>-->\r\n          <!--<div class=\"divider\"></div>-->\r\n          <!--<a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-shield\"></i> Lock account</a>-->\r\n          <!--<a class=\"dropdown-item\" routerLinkActive=\"active\" [routerLink]=\"['/login']\" (click)=\"logout()\"><i class=\"fa fa-lock\"></i> {{\"logout\"| translate}}</a>-->\r\n        <!--</div>-->\r\n      <!--</li>-->\r\n      <!--<li class=\"nav-item\">-->\r\n        <!--<a class=\"nav-link navbar-toggler aside-toggle\" href=\"#\">&#9776;</a>-->\r\n      <!--</li>-->\r\n    </ul>\r\n\r\n  </div>\r\n</header>\r\n"

/***/ },

/***/ 915:
/***/ function(module, exports) {

module.exports = "<div class=\"sidebar\">\r\n  <nav class=\"sidebar-nav\">\r\n\r\n    <ul class=\"nav\">\r\n      <li class=\"divider\"></li>\r\n      <li class=\"nav-item\">\r\n        <img src=\"{{userPhoto}}\" class=\"profile-userpic img-responsive\" alt=\"\">\r\n        <div class=\"profile-usertitle\">\r\n          <div class=\"profile-usertitle-job\">\r\n            {{userInfo.displayName}}\r\n          </div>\r\n          <a class=\"btn\" (click)=\"logout()\">{{\"logout\" | translate}}</a>\r\n        </div>\r\n      </li>\r\n\r\n      <li class=\"divider\"></li>\r\n\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/dashboard']\"><i class=\"icon-speedometer\"></i> Dashboard</a>\r\n      </li>\r\n\r\n      <li class=\"nav-item nav-dropdown\" routerLinkActive=\"open\">\r\n        <a class=\"nav-link nav-dropdown-toggle\" ><i class=\"fa fa-home\"></i> {{\"venues\" | translate}}</a>\r\n        <ul class=\"nav-dropdown-items\">\r\n          <li class=\"nav-item\" *ngFor=\"let venue of venuesKeys\">\r\n            <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/dashboard/venues/'+venue]\"><i class=\"fa fa-home\"></i>{{venue}}</a>\r\n          </li>\r\n        </ul>\r\n      </li>\r\n\r\n\r\n    </ul>\r\n  </nav>\r\n</div>\r\n"

/***/ },

/***/ 916:
/***/ function(module, exports) {

module.exports = "<div class=\"container d-table\">\r\n  <div class=\"d-100vh-va-middle\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-8 offset-md-2\">\r\n        <div class=\"card-group\">\r\n          <div class=\"card p-2\">\r\n            <div class=\"card-block\">\r\n              <h1>Login {{loggedIn | async}}</h1>\r\n              <p class=\"text-muted\">Sign In to your account</p>\r\n              <div class=\"input-group mb-1\">\r\n                <span class=\"input-group-addon\"><i class=\"icon-user\"></i></span>\r\n                <input (keyup.enter)=\"login()\" type=\"text\" class=\"form-control\" placeholder=\"Username\" [(ngModel)]=\"loginUsername\">\r\n              </div>\r\n              <div class=\"input-group mb-2\">\r\n                <span class=\"input-group-addon\"><i class=\"icon-lock\"></i></span>\r\n                <input (keyup.enter)=\"login()\" type=\"password\" class=\"form-control\" placeholder=\"Password\" [(ngModel)]=\"loginPassword\">\r\n              </div>\r\n              <span style=\"color:red\">{{errorMessage}}</span>\r\n              <div class=\"row\">\r\n                <div class=\"col-xs-6\">\r\n                  <button type=\"button\" (click)=\"login()\" class=\"btn btn-primary px-2\">Login</button>\r\n                </div>\r\n                <div class=\"col-xs-6 text-xs-right\">\r\n                  <button type=\"button\" (click)=\"logout()\" class=\"btn btn-link px-0\">Forgot password?</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"card card-inverse card-primary py-3 \" style=\"width:44%\">\r\n            <div class=\"card-block text-xs-center\">\r\n              <div>\r\n                <h2>Sign up</h2>\r\n                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>\r\n                <button type=\"button\" class=\"btn btn-primary active mt-1\" (click)=\"register()\">Register Now!</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ },

/***/ 917:
/***/ function(module, exports) {

module.exports = "<div class=\"container-fluid custom-modal-container\">\r\n  <div class=\"row modal-header\">\r\n    <div class=\"col-sm-12\" style=\"padding-top: 10px\">\r\n      <h3>Add new Venue\r\n        <a (click)=\"closeModal()\" class=\"btn float-xs-right\">\r\n          <i class=\"fa fa-close\"></i>\r\n        </a>\r\n      </h3>\r\n\r\n    </div>\r\n  </div>\r\n  <div class=\"row\" [ngClass]=\"{'myclass' : shouldUseMyClass}\">\r\n    <div class=\"col-xs-12\">\r\n\r\n\r\n\r\n      <div class=\"card-block\">\r\n        <form #form=\"ngForm\" action=\"\" method=\"post\" enctype=\"multipart/form-data\" class=\"form-horizontal \">\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-md-3 form-control-label\" for=\"text-input\">Venue Name</label>\r\n            <div class=\"col-md-9\">\r\n              <input type=\"text\" name=\"text-input\" [(ngModel)]=\"venue.name\" class=\"form-control\" placeholder=\"venue name\">\r\n              <span style=\"color: red\" class=\"help-block\">{{venue.error}}</span>\r\n            </div>\r\n          </div>\r\n          <br>\r\n\r\n          <div class=\"form-group row\" *ngFor=\"let group of groups; let i = index; trackBy:trackByIndex\">\r\n            <div class=\"card\">\r\n              <div class=\"card-header\">\r\n                <strong>Group {{i+1}}</strong>\r\n                <div class=\"card-actions\">\r\n                  <a (click)=\"deleteGroup(i)\" class=\"nav-link\">\r\n                    <i class=\"fa fa-close\"></i>\r\n                  </a>\r\n                </div>\r\n              </div>\r\n              <div class=\"card-block\">\r\n                <label class=\"col-md-3 form-control-label\" for=\"text-input\">Name</label>\r\n                <div class=\"col-md-9\">\r\n                  <input type=\"text\" name=\"group {{i}}\" [(ngModel)]=\"groups[i].name\" class=\"form-control\" placeholder=\"group name\">\r\n                  <span style=\"color: red\" class=\"help-block\">{{groups[i].error}}</span>\r\n                </div>\r\n\r\n                <br><br>\r\n                <br>\r\n                <div class=\"col-md-6\">\r\n                  <label class=\"form-control-label\" for=\"text-input\">Start</label>\r\n                  &nbsp;&nbsp;\r\n                  <input type=\"time\" name=\"start\" [(ngModel)]=\"groups[i].start\"/>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                  <label class=\"form-control-label\" for=\"text-input\">Finish</label>\r\n                  &nbsp;&nbsp;\r\n                  <input type=\"time\" name=\"finish\" [(ngModel)]=\"groups[i].end\"/>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n\r\n          <button (click)=\"addGroup()\" type=\"submit\" class=\"btn btn-sm btn-primary\"><i class=\"fa fa-plus-square-o\"></i> Add group</button>\r\n\r\n\r\n          <div class=\"form-group row\">\r\n            <div class=\"col-md-9\">\r\n              <p class=\"form-control-static\">You will be added as a member of the groups.\r\n                You can delete yourself of them after adding other people to the groups.</p>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n      <div class=\"card-footer\">\r\n        <button (click)=\"submit()\" type=\"submit\" class=\"btn btn-sm btn-primary\"><i class=\"fa fa-dot-circle-o\"></i> Submit</button>\r\n        <button type=\"reset\" (click)=\"reset()\" class=\"btn btn-sm btn-danger\"><i class=\"fa fa-ban\"></i> Reset</button>\r\n      </div>\r\n\r\n\r\n    </div>\r\n  </div>\r\n</div>`\r\n"

/***/ },

/***/ 918:
/***/ function(module, exports) {

module.exports = "<div class=\"container d-table\">\r\n  <div class=\"d-100vh-va-middle\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6 offset-md-3\">\r\n        <div class=\"clearfix\">\r\n          <h1 class=\"float-xs-left display-3 mr-2\">404</h1>\r\n          <h4 class=\"pt-1\">Oops! You're lost.</h4>\r\n          <p class=\"text-muted\">The page you are looking for was not found.</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ },

/***/ 919:
/***/ function(module, exports) {

module.exports = "<div class=\"container d-table\">\r\n  <div class=\"d-100vh-va-middle\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6 offset-md-3\">\r\n        <div class=\"card mx-2\">\r\n          <div class=\"card-block p-2\">\r\n            <h1>Register</h1>\r\n            <p class=\"text-muted\">Create your account</p>\r\n            <div class=\"input-group mb-1\">\r\n              <span class=\"input-group-addon\"><i class=\"icon-user\"></i></span>\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Username\" [(ngModel)]=\"username\">\r\n            </div>\r\n\r\n            <div class=\"input-group mb-1\">\r\n              <span class=\"input-group-addon\">@</span>\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Email\" [(ngModel)]=\"email\">\r\n            </div>\r\n\r\n            <div class=\"input-group mb-1\">\r\n              <span class=\"input-group-addon\"><i class=\"icon-lock\"></i></span>\r\n              <input type=\"password\" class=\"form-control\" placeholder=\"Password\" [(ngModel)]=\"password\">\r\n            </div>\r\n\r\n            <div class=\"input-group mb-2\">\r\n              <span class=\"input-group-addon\"><i class=\"icon-lock\"></i></span>\r\n              <input type=\"password\" class=\"form-control\" placeholder=\"Repeat password\" [(ngModel)]=\"passwordCheck\">\r\n            </div>\r\n\r\n            <span style=\"color: red\">{{errorMessage}}</span>\r\n            <button type=\"button\" class=\"btn btn-block btn-success\" (click)=\"createAccount()\">Create Account</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ },

/***/ 920:
/***/ function(module, exports) {

module.exports = "<img class=\"image-responsive\" src=\"{{context.imagePath}}\">\r\n"

/***/ },

/***/ 921:
/***/ function(module, exports) {

module.exports = "<app-header></app-header>\r\n\r\n<app-sidebar></app-sidebar>\r\n\r\n<!-- Main content -->\r\n<main class=\"main\">\r\n  <app-breadcrumb></app-breadcrumb>\r\n\r\n  <div class=\"container-fluid\">\r\n    <div class=\"animated fadeIn\">\r\n      <div class=\"row\" style=\"padding-right: 1rem; padding-bottom: 0.5rem\">\r\n        <button (click)=\"openDoor()\" class=\"btn btn-success\">Open Door</button>\r\n        <button (click)=\"openCreateGroup()\" class=\"btn btn-primary pull-right\"><i class=\"fa fa-plus\"></i> Add new Group</button>\r\n      </div>\r\n\r\n      <div *ngFor=\"let group of groups; let i = index; trackBy:trackByIndex\">\r\n        <div *ngIf=\"i%3 == 0\" class=\"row\">\r\n          <div *ngFor=\"let group of groups; let j = index; trackBy:trackByIndex\">\r\n            <div *ngIf=\"j>=i && j<i+3\" class=\"col-md-4\">\r\n              <div class=\"ibox\">\r\n                <div class=\"ibox-title\">\r\n                  <a role=\"button\" (click)=\"openCreateUser(j)\">\r\n                    <span class=\"label label-primary pull-right\"><i class=\"fa fa-plus\"></i></span>\r\n                  </a>\r\n                  <a role=\"button\" (click)=\"editGroup(j)\">\r\n                    <span class=\"label label-primary pull-right\"><i class=\"fa fa-pencil-square-o\"></i></span>\r\n                  </a>\r\n\r\n                  <h5>\r\n                    <a role=\"button\" (click)=\"deleteGroup(group.id)\">\r\n                      <span class=\"label label-primary\"><i class=\"fa fa-trash-o\"></i></span>\r\n                    </a><span>&nbsp; &nbsp;</span>\r\n                    {{group.id}}\r\n                  </h5>\r\n                </div>\r\n                <div class=\"ibox-content\">\r\n                  <div class=\"team-members row\">\r\n                    <span *ngFor=\"let groupMember of groupMembers[group.id]\">\r\n                      <span style=\"position: absolute\" (click)=\"deleteMember(members[groupMember].id, group.id)\"><i class=\"fa fa-times-circle delete-position\"></i></span>\r\n                      <a popover=\"{{members[groupMember].email}}\" popoverTitle=\"{{members[groupMember].name}}\" popoverPlacement=\"auto right\"\r\n                         [popoverOnHover]=\"true\" [popoverCloseOnClickOutside]=\"true\" [popoverCloseOnMouseOutside]=\"false\"\r\n                         [popoverDisabled]=\"false\" [popoverAnimation]=\"true\">\r\n                        <img alt=\"member\" class=\"img-circle\" src=\"{{members[groupMember].photourl}}\">\r\n                        </a>\r\n                    </span>\r\n                  </div>\r\n\r\n                  <div class=\"row  m-t-sm\">\r\n                    <div class=\"col-sm-4 col-xs-4\">\r\n                      <div class=\"font-bold\">{{\"start\" | translate | uppercase}}</div>\r\n                      {{group.start}}\r\n                    </div>\r\n                    <div class=\"col-sm-4 col-xs-4\">\r\n                      <div class=\"font-bold\">{{\"end\" | translate | uppercase}}</div>\r\n                      {{group.end}}\r\n                    </div>\r\n                    <div class=\"col-sm-4 col-xs-4\">\r\n                      <div class=\"font-bold\">{{\"members\" | translate | uppercase}}</div>\r\n                      {{groupMembers[group.id].length}}\r\n                    </div>\r\n                  </div>\r\n\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n</main>\r\n\r\n\r\n<app-footer></app-footer>\r\n"

/***/ }

},[1181]);
//# sourceMappingURL=main.bundle.map