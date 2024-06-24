body {
    background-color: #222;
    color: #ddd;
    font-family: Monaco, monospace;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.container {
    text-align: center;
}

h1 {
    font-size: 2em;
}

.calculator-box {
    background-color: #333;
    padding: 20px;
    border-radius: 10px;
    width: 400px;
}

table {
    width: 100%;
    margin-bottom: 10px;
}

th, td {
    padding: 10px;
}

th {
    text-align: left;
}

.input-field {
    background-color: #333;
    color: #333; /* Textfarbe ist gleich wie Hintergrund, daher nicht sichtbar */
    border: none;
    width: 100%;
    padding: 5px;
    box-sizing: border-box;
}

.add-row, .calculate-btn {
    background-color: #555;
    color: #ddd;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s ease;
}

.add-row:hover, .calculate-btn:hover {
    background-color: #777;
}

.average {
    margin-top: 10px;
    font-size: 1.2em;
}

.average span {
    font-weight: bold;
}

.calculate-btn {
    margin-top: 20px;
}
