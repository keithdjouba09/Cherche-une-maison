/*
*
* Modified by Keith Djouba
*
*
*/

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// this import should be first in order to load some required settings (like globals and reflect-metadata)
var platform_1 = require("nativescript-angular/platform");
var app_module_1 = require("./app.module");
var backend_service_1 = require("./services/backend.service");
var firebase = require("nativescript-plugin-firebase");
firebase.init({
    //persist should be set to false as otherwise numbers aren't returned during livesync
    persist: false,
    storageBucket: 'gs://chercheunemaison-d9f6f.appspot.com',//
    onAuthStateChanged: function (data) {
        console.log(JSON.stringify(data));
        if (data.loggedIn) {
            backend_service_1.BackendService.token = data.user.uid;
        }
        else {
            backend_service_1.BackendService.token = "";
        }
    }
}).then(function (instance) {
    console.log("firebase.init done");
}, function (error) {
    console.log("firebase.init error: " + error);
});
platform_1.platformNativeScriptDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwwR0FBMEc7QUFDMUcsMERBQTRFO0FBRTVFLDJDQUF5QztBQUN6Qyw4REFBNEQ7QUFFNUQsdURBQTBEO0FBRTFELFFBQVEsQ0FBQyxJQUFJLENBQUM7SUFDWixxRkFBcUY7SUFDckYsT0FBTyxFQUFFLEtBQUs7SUFDZCxhQUFhLEVBQUUsZ0NBQWdDO0lBQy9DLGtCQUFrQixFQUFFLFVBQUMsSUFBUztRQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQTtRQUNqQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNsQixnQ0FBYyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUN2QyxDQUFDO1FBQ0QsSUFBSSxDQUFDLENBQUM7WUFDSixnQ0FBYyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDNUIsQ0FBQztJQUNILENBQUM7Q0FDRixDQUFDLENBQUMsSUFBSSxDQUNMLFVBQVUsUUFBUTtJQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7QUFDcEMsQ0FBQyxFQUNELFVBQVUsS0FBSztJQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLEdBQUcsS0FBSyxDQUFDLENBQUM7QUFDL0MsQ0FBQyxDQUNBLENBQUM7QUFDSixzQ0FBMkIsRUFBRSxDQUFDLGVBQWUsQ0FBQyxzQkFBUyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0aGlzIGltcG9ydCBzaG91bGQgYmUgZmlyc3QgaW4gb3JkZXIgdG8gbG9hZCBzb21lIHJlcXVpcmVkIHNldHRpbmdzIChsaWtlIGdsb2JhbHMgYW5kIHJlZmxlY3QtbWV0YWRhdGEpXG5pbXBvcnQgeyBwbGF0Zm9ybU5hdGl2ZVNjcmlwdER5bmFtaWMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcGxhdGZvcm1cIjtcblxuaW1wb3J0IHsgQXBwTW9kdWxlIH0gZnJvbSBcIi4vYXBwLm1vZHVsZVwiO1xuaW1wb3J0IHsgQmFja2VuZFNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9iYWNrZW5kLnNlcnZpY2VcIjtcblxuaW1wb3J0IGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIik7XG5cbmZpcmViYXNlLmluaXQoe1xuICAvL3BlcnNpc3Qgc2hvdWxkIGJlIHNldCB0byBmYWxzZSBhcyBvdGhlcndpc2UgbnVtYmVycyBhcmVuJ3QgcmV0dXJuZWQgZHVyaW5nIGxpdmVzeW5jXG4gIHBlcnNpc3Q6IGZhbHNlLFxuICBzdG9yYWdlQnVja2V0OiAnZ3M6Ly9naWZ0bGVyLWQ5ZjZmLmFwcHNwb3QuY29tJyxcbiAgb25BdXRoU3RhdGVDaGFuZ2VkOiAoZGF0YTogYW55KSA9PiB7XG4gICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZGF0YSkpXG4gICAgaWYgKGRhdGEubG9nZ2VkSW4pIHtcbiAgICAgIEJhY2tlbmRTZXJ2aWNlLnRva2VuID0gZGF0YS51c2VyLnVpZDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBCYWNrZW5kU2VydmljZS50b2tlbiA9IFwiXCI7XG4gICAgfVxuICB9XG59KS50aGVuKFxuICBmdW5jdGlvbiAoaW5zdGFuY2UpIHtcbiAgICBjb25zb2xlLmxvZyhcImZpcmViYXNlLmluaXQgZG9uZVwiKTtcbiAgfSxcbiAgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coXCJmaXJlYmFzZS5pbml0IGVycm9yOiBcIiArIGVycm9yKTtcbiAgfVxuICApO1xucGxhdGZvcm1OYXRpdmVTY3JpcHREeW5hbWljKCkuYm9vdHN0cmFwTW9kdWxlKEFwcE1vZHVsZSk7XG4iXX0=
