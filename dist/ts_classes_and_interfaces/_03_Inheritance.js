class Office {
    constructor(name, capacity) {
        this.name = name;
        this.capacity = capacity;
        console.log(name, 'Capacity: ' + capacity);
    }
}
class ITOffice extends Office {
    // Declaring the argument 'public admins: string' is shortcut to having to initialise in the conventional way
    constructor(name, capacity, hasVPN, admins) {
        super(name, capacity);
        this.name = name;
        this.capacity = capacity;
        this.admins = admins;
        this.hasVPN = hasVPN; // Conventional approach
        console.log('Has VPN ' + hasVPN + 'Appointed: ' + admins);
    }
}
let myOffice = new Office("Catalin's office", 40);
let myITOffice = new ITOffice("Mark's office", 20, true, ' Robert -> Admin Officer');
