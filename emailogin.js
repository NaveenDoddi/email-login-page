
 var Array2=[["naveen123@gmail.com","123"],["dummy@gamail.com","1234"]];//main array having the valaid emails
 var Array1=[];//new array to store the NEWLY created emails
 var count=0;
 function go1(){//login button fuction

    const input1=document.getElementById("inpt").value;
    const input2=document.getElementById("inpt2").value;

    if(input1===""){//if the input is empty 
        alert("Input is Empty");
    }

    for(let x=0; x<Array2.length; x++){//checking if the input emails are valid or not
        if(input1===Array2[x][0]){
            if(input2===Array2[x][1]){
                document.getElementById("page").style.visibility="hidden";//hidding the login input page

                document.getElementById("page2").style.visibility="hidden";//hiddding create button once pressed 

                document.getElementById("page3").style.visibility="visible";//displaying the "login succuss" page

                document.getElementById("page5").style.visibility="hidden";//hiddding "succussfully created" page 
            }else{
                alert("incorrect password ")
            }
        }else{
            if(input1!==Array2[x][0]){//for dipalaying the incorrect email
                count==count++;
            }
        }   
    }
    if(count===Array2.length){
        alert("incorrect email")
    }
 }

 function go2(){// to display the creating paging
    document.getElementById("page").style.visibility="hidden";//hidding the login input page
    document.getElementById("page2").style.visibility="hidden";//hiddding create button once pressed 
    document.getElementById("page4").style.visibility="visible";//displaying createing input page 
    
 }
function go3(){// to create the new emailid 
    const input1=document.getElementById("new.inpt").value;
    const input2=document.getElementById("new.inpt2").value;
   
    Array1.push([input1,input2]);//adding newly inserted values into the main array

    const option=document.createElement("option");//adding newly created email to datalist
    option.value=input1;
    document.getElementById("validemail").append(option);

    for(let x=0; x<Array1.length; x++){//copying the Array1 into the Array2
        Array2.push(Array1[x]);
    }
    document.getElementById("page").style.visibility="visible";//displaying the login input page
    document.getElementById("page5").style.visibility="visible";//displaying the "succussfully created email"
    
    document.getElementById("page4").style.visibility="hidden";//hidding createing input page once we presse the create button 
}