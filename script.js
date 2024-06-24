function addRow() {
    var table = document.getElementById("grades-table").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow();
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    cell1.innerHTML = '<input type="number" min="1" max="6" step="0.1" class="input-field" placeholder="Note">';
    cell2.innerHTML = '<input type="number" min="1" max="100" class="input-field" placeholder="Gewichtung">';
    cell3.innerHTML = '<button class="add-row" onclick="removeRow(this)">-</button>';
}

function removeRow(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

function calculateAverage() {
    var table = document.getElementById("grades-table");
    var rows = table.rows;
    var totalPoints = 0;
    var totalWeight = 0;

    for (var i = 1; i < rows.length; i++) {
        var cells = rows[i].cells;
        var grade = parseFloat(cells[0].getElementsByTagName('input')[0].value);
        var weight = parseInt(cells[1].getElementsByTagName('input')[0].value);

        if (!isNaN(grade) && !isNaN(weight)) {
            totalPoints += grade * (weight / 100);
            totalWeight += weight;
        }
    }

    var average = (totalPoints / totalWeight * 6).toFixed(2); // Skalierung auf 6-Punkte-System

    if (!isNaN(average)) {
        document.getElementById("average").textContent = average;
    } else {
        document.getElementById("average").textContent = "-";
    }
}
