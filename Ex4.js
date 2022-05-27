

user = {
    id: 6, 
    name: "Hossein", 
    lastName: "Zenderoh", 
    roles: ["student", "admin"], 
    age:19, 
    scores: { english: 10, math: 19.5, physics: 14 },
    };


user['scores'] = {'scores':'jjj'};

console.log(user);


let addnew = (user,lastscore) =>{
    return {...user ,score :{...user.score, ...lastscore} }
}

let addnewrole = (user , role) => {
    return {...user ,roles :{...user.roles, role}, status: user.age<18 };
}