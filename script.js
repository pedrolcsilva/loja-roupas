let client = []

function addClient(){
    if(document.getElementById('name').value != "" && document.getElementById('datev').value != "" && document.getElementById('purchValue').value != ""){   
        client.push({'name':document.getElementById('name').value, 'dateV':document.getElementById('datev').value, 'valueC':parseFloat(document.getElementById('purchValue').value).toFixed(2)})
        document.getElementById('name').value = ""
        document.getElementById('datev').value = ""
        document.getElementById('purchValue').value = ""
        document.querySelector("#tableResult tbody").innerHTML += `<tr>
                                                                        <td>${client[client.length - 1].name}</td>
                                                                        <td>${client[client.length - 1].dateV}</td>
                                                                        <td>${client[client.length - 1].valueC}</td>
                                                                    </tr>`;
    }else{
        alert("Dados inseridos inválidos ou incompletos")
    }
}

function jurosCalc(){
    let showContent = client.map(function(item){
        let newdate = new Date
        let olddate = new Date(item.dateV)
        let timeDif = newdate.getTime() - olddate.getTime()
        let dayDif = timeDif / (1000 * 3600 * 24);
        item.percJ = 0
        if(dayDif.toFixed(0) > 0){
            item.percJ = 2 + (dayDif.toFixed(0) * 0.1)
        }
        item.valueT = parseFloat(item.valueC) + (parseFloat(item.valueC) * (item.percJ / 100))
        return `<tr>
                    <td>${item.name}</td>
                    <td>${item.dateV}</td>
                    <td>${item.valueC}</td>
                    <td>${item.percJ}</td>
                    <td>${item.valueT.toFixed(2)}</td>
                </tr>`;
    });

    
    document.querySelector("#tableResult tbody").innerHTML = showContent.join("");
}


document.getElementById('saveC').addEventListener('click', function(){
    addClient()
}) 

document.getElementById('jurosC').addEventListener('click', function(){
    jurosCalc()
})