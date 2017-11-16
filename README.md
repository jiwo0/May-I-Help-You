# May_I_Help_You_Server

# register
### POST soylatte:9674/register
>require  

    username : 유저이름 String  
    id : 유저id String  
    password : 유저pwd String  
    gender : 유저 성별 Boolean 0남자 1여자  
    birthday : 유저 생년월일 String  
    phoneNumber : 유저 전화번호 String  
>response : success   

    status : 200    
>response : fail.  

    status : 404  
    message : User already  signup.  

# login
### POST soylatte:9674/login
> require  

    id : 유저 id  
    password : 유저password  
>response : success

    status : 200
    data : name  
>response : fail

    status : 404
    message : User not found
