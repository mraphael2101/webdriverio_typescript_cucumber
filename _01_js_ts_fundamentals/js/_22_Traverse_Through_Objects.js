var obj = [
    {
        "abc": "some val 1",
        "def": "some val 2"
    },
    {
        "abc": "some val 3",
        "def": "some val 4",
        "random": [{
            "cat": "nested val 1",
            "dog": "nested val 2",
            "fish": ["goldfish","gold"]
        }]
    }
]


const traverse = (objs) => {
    Object.entries(objs).forEach(([key, value]) => {
       console.log(value);
    });
}

traverse(obj);
console.log(obj[1].random[0].cat)
