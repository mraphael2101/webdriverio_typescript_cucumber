class Home {
    constructor(name, tenants) {
        this.tenants = [];
        this.name = name;
        this.tenants = tenants;
    }
    addTenant(name) {
        this.tenants.push(name);
        console.log(this.tenants);
    }
}
let myTenants;
myTenants = ['Sarah', 'Alice'];
let myHome = new Home('Kiln House', myTenants);
myHome.addTenant('Katie');
