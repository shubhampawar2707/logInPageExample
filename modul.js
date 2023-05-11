
function f1()
{
    
    document.getElementById("txt1").innerHTML= "<html>"
    +"\n"+"<body bgcolor=green>"
    +"\n"+"<br><br><hr>"
    +"\n"+"<h2> Welcome to My Account Login </h2>"
    
    +"\n"+"<table>"
    +"\n"+"<tr>"
    +"\n"+"<td>Enter User Name:</td>"
    +"\n"+"<td>"
    +"\n"+"<input type=text placeholder=Enter Username Here>"
    +"\n"+"</td></tr>"
    +"\n"+"<tr>"
    +"\n"+"<td>Enter Password:</td>"
    +"\n"+"<td>"
    +"\n"+"<input type=password placeholder=Enter Password Here>"
    +"\n"+"</td></tr>;"
    +"\n"+"<tr>"
    +"\n"+"<td></td>"
    +"\n"+"<td>"
    +"\n"+"<input type=reset value=Reset style=color:green>"

    +"\n"+"<input Type =submit value=Login style=color:green>"
    +"\n"+"</td>"
    +"\n"+"</tr>"
    +"\n"+"</table>"
    +"\n"+"<br><br><hr>"
    +"\n"+"</body>"
    +"\n"+"</html>"
    
    document.getElementById("set1").innerHTML= "HTML Code"
    
    
}
function f2()
{
    document.getElementById("txt2").innerHTML= "*****S1.html(HTML Code)*****"
    +"<html>"
    +"\n"+"<body bgcolor=green>"
    +"\n"+"<br><br><hr>"
    +"\n"+"<h2> Welcome to My Account Login </h2>"
    
    +"\n"+"<table>"
    +"\n"+"<tr>"
    +"\n"+"<td>Enter User Name:</td>"
    +"\n"+"<td>"
    +"\n"+"<input type=text placeholder=Enter Username Here name=a1>"
    +"\n"+"</td></tr>"
    +"\n"+"<tr>"
    +"\n"+"<td>Enter Password:</td>"
    +"\n"+"<td>"
    +"\n"+"<input type=password placeholder=Enter Password Here name=b1>"
    +"\n"+"</td></tr>;"
    +"\n"+"<tr>"
    +"\n"+"<td></td>"
    +"\n"+"<td>"
    +"\n"+"<input type=reset value=Reset style=color:green>"

    +"\n"+"<input Type =submit value=Login style=color:green>"
    +"\n"+"</td>"
    +"\n"+"</tr>"
    +"\n"+"</table>"
    +"\n"+"<br><br><hr>"
    +"\n"+"</body>"
    +"\n"+"</html>"

    +"\n"+"***S2.java(Servelet Code)****"
    +"\n"+"import java.io.*;"
    +"\n"+"import javax.servlet.*;"
    +"\n"+"public class s2 extends HttpServlet {"
    +"\n"+"public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException"
    +"\n"+"{"
    +"\n"+"response.setContentType(text/html);"
    +"\n"+"String a= request.getParameter(a1);"
    +"\n"+"String b= request.getParameter(b1);"
    +"\n"+"if(arguments.equals(admin) && blur.equals(ok))"
    +"\n"+"{"
    +"\n"+"out.println(login successful);"
    +"\n"+"}"
    +"\n"+"else{"
    +"\n"+"out.println(login successful);"
    +"\n"+"}"
    +"\n"+"public void destroy(){}"
    +"\n"+"}"
    +"\n"+"}"


    document.getElementById("set2").innerHTML= "Servlet Code";
}
function f3()
{
    document.getElementById("txt2").innerHTML="****s1.html (HTML Code)****"
    +"\n"+"<html>"
    +"\n"+"<body>"
    +"\n"+"<form method=get action=s2.jsp>"
    +"\n"+"Enter Uname <input type=text name= “t1” >"
    +"\n"+"Enter Password <input type=password name= “t2”>"
    +"\n"+"<input type=submit value= “Login”>"
    +"\n"+"</form>"
    +"\n"+"</body>"
    +"\n"+"</html>"
    +"\n"+"****S2.JSP (JSP Code)****"
    +"\n"+"<%"
    +"\n"+"String a1=request.getParameter(“t1”);"
    +"\n"+"String a2=request.getParameter(“t2”);"
    +"\n"+"if (a1.equals(“admin”) && a2.equals(“admin”)"
    +"\n"+"out.println(“Login Successfully”);"
    +"\n"+"else"
    +"\n"+"out. println(“Login unsuccessful”);"
    +"\n"+"%>"

    document.getElementById("set2").innerHTML= "JSP Code"
}
function f4()
{
    document.getElementById("txt2").innerHTML="S1.html (HTML Code)"
    +"\n"+"<html>"
    +"\n"+"<body>"
    +"\n"+"<form action=s2.php method=get>"
    +"\n"+"Eneter Username"
    +"\n"+"<input type=text name=t1>"
    +"\n"+"Eneter Password"
    +"\n"+"<input type=password name=t2>"
    +"\n"+" <br>"
    +"\n"+" <input  type=submit value=login>"
    +"\n"+" </form>"
    +"\n"+" </body>"
    +"\n"+"</html>"
    +"\n"+"**S2.php (PHP Code)**"
    +"\n"+"<?php"
    +"\n"+"$a = $_GET[t1];"
    +"\n"+"$b = $_GET[t2];"
    +"\n"+"if($a==admin && $b==ok)"
    +"\n"+"echo login successfully;"
    +"\n"+"else"
    +"\n"+"echo login unsuccessful;"
    +"\n"+"?>";
    document.getElementById("set2").innerHTML= "PHP Code"
}
function f5()
{
    document.getElementById("txt2").innerHTML="s1.rubby"
    +"\n"+"puts Enter username"
    +"\n"+"Name Gets"
    +"\n"+"Name = Name.chomp"
    +"\n"+"puts Enter password"
    +"\n"+"password Gets"
    +"\n"+"password = password.chomp"
    +"\n"+"if Name==admin &&password == admin"
    +"\n"+"puts Login successful"
    +"\n"+"else"
    +"\n"+"puts login Unsuccessful";
    document.getElementById("set2").innerHTML= "Ruby Code"
}
        
