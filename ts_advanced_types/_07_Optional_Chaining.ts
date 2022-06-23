const fetchedUserData = {
    id: 'u1',
    name: 'Max',
    job: { title: 'CEO', description: 'My own company'}
};


// Adding ? (optional operator) ensures that a check is made if the argument exists prior to attempting to access a property of the argument
console.log(fetchedUserData?.job.description && fetchedUserData?.job?.title);
