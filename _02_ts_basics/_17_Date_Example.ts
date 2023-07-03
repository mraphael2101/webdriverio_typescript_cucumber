
function doSomething(strDate: string): void {
    const [month, day, year] = strDate.split('/');
    try {
        var dateEnabled: Date = new Date(day + "/" + month + "/" + year);
        console.log(dateEnabled.toString())
    } catch (error) {
        console.log(error);
    }
}

// doSomething("2023-10-30")
doSomething("30/10/2023")
