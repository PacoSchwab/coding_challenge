// 1-5.
async function fetchCarManufacturers() {
    try {
      const response = await fetch("https://vpic.nhtsa.dot.gov/api/vehicles/getallmanufacturers?format=json");

      if (!response.ok) {
        console.error("Error: request failed", response.status);
        return;
      }  

      const carData = await response.json();
      console.log("All fetched cars", carData);

      const filteredManufacturers = carData.Results.filter(manufacturer => manufacturer.VehicleTypes.length >= 3);
        console.log("Filtered manufacturers", filteredManufacturers)

        const modifiedData = filteredManufacturers.map(manufacturer => ({
            country: manufacturer.Country,
            name: manufacturer.Mfr_CommonName,
            fullName: manufacturer.Mfr_Name,
            amountVehicleTypes: manufacturer.VehicleTypes.length
          }));
          console.log("Modified data", modifiedData)

          displayTable(modifiedData);

    } catch (error) {
      
      console.log(error);
    }
  }

  fetchCarManufacturers();

function displayTable(modifiedData) {
  const table = document.createElement('table');
  const thead = table.createTHead();
  const tbody = table.createTBody();
  const headerRow = thead.insertRow();
  const columnNames = ['Country', 'Common Name', 'Full Name', 'Amount of Vehicle Types']
  columnNames.forEach(columnName => {
    const th = document.createElement('th');
    th.textContent = columnName;
    headerRow.appendChild(th);
  });

  modifiedData.forEach(item => {
    const row = tbody.insertRow();
    const tableData = ['country', 'name', 'fullName', 'amountVehicleTypes'];
    tableData.forEach(tableElement => {
      const cell = row.insertCell();
      cell.textContent = item[tableElement];
    });
  });

  document.body.appendChild(table);
}

