import { Padding } from "@mui/icons-material";
import axios from "axios";
import { useState } from "react";
function Show(){
    const [result ,setResult]=useState(null);

function handleDelete(event){
        var status = window.confirm("Do you want to delete " + event.currentTarget.getAttribute("em"))
       // alert(event.currentTarget.getAttribute("em"))
       if(status==true)
        axios.delete("http://localhost:8080/delete",{
            params:{
                "email":event.currentTarget.getAttribute("em")
            }}).then((res)=>{
                console.log(res.data)
                setResult(null)
            })
}
function handleEdit(event){
    var email=event.currentTarget.getAttribute("em")
    var name=event.currentTarget.getAttribute("name")
    var password=event.currentTarget.getAttribute("pass")
    var role=event.currentTarget.getAttribute("role")

    document.getElementById('idupdate').style.display="block"

}
function handleUpdate(){

}

    if(result==null){
    axios.get("http://localhost:8080/all",{}).then((res)=>{
        setResult(res.data)
        console.log(res.data)
    })
}
    if(result!=null){
    return (
        
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "50vh" }}>
        <div> 
            <table border="1" >
                <th>NAME</th>
                <th>ROLE</th>
                <th>EMAIL</th>
                <th>PASSOWORD</th>
                <th>EDIT</th>
                <th>DELETE</th>
            {
          // JSON.stringify(result)
          result.map((obj)=>{
            return(
                <tr>
                     <td>{obj.name}</td>
                        <td>{obj.role}</td>
                        <td>{obj.email}</td>
                        <td>{obj.password}</td>
                        <td><i className="fa fa-edit" onClick={handleEdit} em={obj.email} name={obj.name} pass={obj.password} role={obj.role}></i></td>
                        <td><i className="fa fa-trash" onClick={handleDelete} em={obj.email}></i></td>
                </tr>
            )
          })
        }
        </table> 
        <br/><br/>
        <div style={{display:"none"}} id="idupdate">
            email :<input type="text" id="idname" /><br/><br/>
            password :<input type="password" id="idpass" /><br/><br/>
            Email: <input type="text" id="idemail" /><br/><br/>
            role : <input type="text" id="idrole"/><br/><br/>
            <button onClick={handleUpdate}> SAVE </button>
        </div>
        </div>
        </div>
    );
}else {
    return (
    <div>
        data fetching
    </div>
    );
}
}
export default Show;