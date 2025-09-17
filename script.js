const table=document.getElementById("sampleTable");
function insert_Row() {
	const tr=table.insertRow(0);
	const cell1=tr.insertCell(0);
	const cell2=tr.insertCell(1);
	cell1.innerText="New Cell1";
	cell2.innerText="New Cell2";
 //  const tr=document.createElement("tr");
	// const td1=document.createElement("td");
	// td1.innerText="New Cell1"
	// const td2=document.createElement("td");
	// td2.innerText="New Cell2"
	// tr.append(td1,td2);
 //    // table.insertBefore(tr,table.childNodes[1]);
	// table.prepend(tr);
}
