// Object -> object is like a data type
// it is use in the form of key and value pair
//key-> name : value-> "suraj"

let ob = {
    names : "SURAJ",
    age : 20,
    gender : "Male",
    location : "Bhopal"
};

console.log(ob);
console.log(ob.age);
console.log(ob.names);
console.log(ob.location);

let obj = {
    names : "SURAJ",
    age : 20,
    gender : "Male",
    location : "Bhopal",
    account:{
        acc_name : "SBI",
        acc_num : 4578614,
        acc_bal : 7.56,
        nomnees:{
            names : "RAJAN KUMAR",
            location:"Bihar",
            age : 21,
            gender : "Male",
            ParmAddress:{
                vill : "Parsauni",
                block : "Bairgania",
                dist : "Sitamarhi",
                state : "Bhihar",
                LocalAddress:{
                    colony : "Bharti Niketan",
                    city : "Bhopal",
                    state : "MP"
                }
            }
        }
    }
};

console.log(obj);
console.log(obj.account);
console.log(obj.account.acc_bal);   //  nested object
console.log(obj.account.nomnees);
console.log(obj.account.nomnees.names);
console.log(obj.account.nomnees.ParmAddress);
console.log(obj.account.nomnees.ParmAddress.vill);
console.log(obj.account.nomnees.ParmAddress.LocalAddress);
console.log(obj.account.nomnees.ParmAddress.LocalAddress.colony);



// arr1 and arr2 merge to each other and print the sum of array element using for of loop.
