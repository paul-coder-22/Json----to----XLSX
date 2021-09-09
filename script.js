const XLSX = require('xlsx');


function downloadXLS(xlsExportObjArr) {
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(xlsExportObjArr);
    XLSX.utils.book_append_sheet(wb, ws);
    XLSX.write(wb, { type: 'buffer', bookType: "xlsx" });
    XLSX.writeFile(wb, "userDetails.xlsx")
}



let emailArr = [
    { email: "Kironpaul809@gmail.com", firstlogin: "16th dec", lastlogin: "14th jan" },
    { email: "Kironpaul@gmail.com", firstlogin: "16th dec", lastlogin: "14th jan" },
    { email: "Kironpaul@gmail.com", firstlogin: "16th dec", lastlogin: "14th jan" },
    { email: "Kironpaul@gmail.com", firstlogin: "16th dec", lastlogin: "14th jan" }
]
downloadXLS(emailArr)