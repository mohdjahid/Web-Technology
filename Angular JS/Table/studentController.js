mainApp.controller("studentController",function($scope){
            $scope.student={
               firstName:"Mohd",
               lastName:"Jahid",
               subjects:[
                     {name:"C",marks:40},
                     {name:"C++",marks:50},
                     {name:"Java",marks:80},
                     {name:"OS",marks:20},
                     {name:"DBMS",marks:60}
               ],
               
               fullName:function()
               {
                  var studentObj;
                  studentObj=$scope.student;
                  return studentObj.firstName+" "+studentObj.lastName;
               }
            };
      });