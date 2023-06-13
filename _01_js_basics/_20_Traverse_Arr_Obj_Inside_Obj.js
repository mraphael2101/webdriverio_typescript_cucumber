var obj = [
    {
        "client_msg_id": "3a223f8d-b5aa-4c9c-9b63-045ec6f90b58",
        "type": "message",
        "text": "hey there",
        "source_team": "a",
        "team": "TN4AF0V5W",
        "user_profile": {
            "real_name": "abc",
            "team": "abc"
        }
    },
    {
        "client_msg_id": "3a223f8d-b5aa-4c9c-9b63-045ec6f90b58",
        "type": "message",
        "text": "welcome",
        "source_team": "p",
        "team": "TN4AF0V5W",
        "user_profile": {
            "real_name": "pqr",
            "team": "pqr"
        }
    },
    {
        "client_msg_id": "3a223f8d-b5aa-4c9c-9b63-045ec6f90b58",
        "type": "message",
        "text": "Help me",
        "source_team": "x",
        "team": "TN4AF0V5W",
        "user_profile": {
            "real_name": "xyz",
            "team": "xyz"
        }
    }
];


for (var i in obj)
{
    var type = obj[i].type;
    var source_team = obj[i].source_team;

    var user_profile = obj[i].user_profile;

    var real_name = user_profile.real_name;


    console.log(source_team+" : "+real_name);

}
