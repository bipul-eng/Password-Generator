var field=document.querySelector("#vk");
field.addEventListener("click" , change);
function change()
{
const val=document.getElementById("bk").value;
const value2 =val.toString();
let length=value2.length;
var count=0;
console.log(length);
//    list:
//    {
for(i=0;i<length;i++)
{
for(j=i+1;j<length;j++)
 {
 if(value2[i]==value2[j])
  {
   count++;
  }
      
 }
}
if(count>0){
    document.getElementById("kk").innerHTML="Please do not use Duplicates";
}
else if(length>=1 && length <=6)
    {
    document.getElementById("kk").innerHTML="Password is Weak";
    }
else if(length>=6 && length<=10)
    {
        document.getElementById("kk").innerHTML="Password is Medium";
    }
else if(length==0)
    {
     document.getElementById("kk").innerHTML="Please Enter a Password";
    }
else if(length>=15)
    {
     document.getElementById("kk").innerHTML="Please Enter A Short Password";
    }
else
    {
     document.getElementById("kk").innerHTML="Password is strong";
    }
  }
function func(){
    if(document.getElementById("bk").type=="password")
    {
    document.getElementById("bk").type="text";
    }
    else
    {
        document.getElementById("bk").type="password";
    }
}



 





    