function addField()
		{
			
			var a=document.getElementById("add-field");
			var b=document.createElement("div");
			b.innerHTML='<br><input type="textfield" placeholder="Year"></input>';
			a.appendChild(b);
			document.getElementById("add-button").style.visibility="hidden";
		}

function loadAnotherFrom()
{
	if(document.getElementById("bid").value=="")
	{
		alert("Please Fill a Bar I.D");
		return;
	}
	if(document.getElementById("year").value=="")
	{
		alert("Please Enter a Year");
		return;
	}
	if(document.getElementById("file").value=="")
	{
		alert("Please Select a File");
		return;
	}
	window.location.href="Review.html";
}