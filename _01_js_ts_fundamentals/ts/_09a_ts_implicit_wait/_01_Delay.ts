async function delay(milisec: number) {
    return new Promise(resolve => setTimeout(resolve, milisec));
}

async function main() {
    await delay(3000);
    console.log("Printed after 3 secs");
}

main().then(r => "");
