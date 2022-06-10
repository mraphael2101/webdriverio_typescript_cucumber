var Home = /** @class */ (function () {
    function Home(name, tenants) {
        this.tenants = [];
        this.name = name;
        this.tenants = tenants;
    }
    Home.prototype.addTenant = function (name) {
        this.tenants.push(name);
        console.log(this.tenants);
    };
    return Home;
}());
var myTenants;
myTenants = ['Sarah', 'Alice'];
var myHome = new Home('Kiln House', myTenants);
myHome.addTenant('Katie');
