const users = [];
users [0] = {
    name : "Wendy",
    gender : "Male",
    age : "23",
    email : "monica@digondrong.com",
    favoriteColor : ["Yellow", "Pink", "White", "Purple"],
    isHavepet : ["Yes", "NO"],
    education : [
        {
            name : "SD 02",
            city : "Jakarta",
            graduate : 2010
        },
        {
            name : "SMP 03",
            city : "Bogor",
            graduate : 2013
        },
        {
            name : "SMA 01",
            city : "Surabaya",
            graduate : 2016
        },
        {
            name : "Universitas Maju",
            city : "Tangerang"
        }
        
    ],
    favoriteRestaurant : ["Katsu", "Bento"]


    
};
users [1] = {
    name : "Monica",
    gender : "Female",
    age : "17",
    email : "wendy@dingdong.com",
    favoriteColor : ["Yellow", "Pink", "White", "Purple"],
    isHavepet : ["Yes", "NO"],
    education : [
        {
            name : "SD 01",
            city : "Jakarta",
            graduate : 2016
        },
        {
            name : "SMP 02",
            city : "Jakarta",
            graduate : 2019
        },
        {
            name : "SMA 03",
            city : "Tangerang"        
        },
     
        
    ],
    favoriteRestaurant : ["Bento", "Sushi", "Pancake", "Eggy", "Tempura", "Bento", "Padang", "Tteok", "Sushi"]


    
};

// const temp = users[0].education[2].graduate;
// console.log(temp);
console.log("Nama : " + users[0].name);
console.log("SMA : " + users[0].education[2].name);
console.log("Kota : " + users[0].education[2].city);
console.log("Makanan Favorite : " + users[0].favoriteRestaurant[0]);
 
