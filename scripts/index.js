//Last Updated program.
function lastUpdated() {
    //This part of the function is to get the year.
    let date = new Date();
    let year = date.getFullYear();
    document.getElementById("year").innerHTML = "&copy" + year + " | Joseph K. Santos | Idaho\n";
    
    //This part of the function is the updated date.
    let currentdate = document.lastModified;
    document.write(currentdate);
    document.getElementById("updated-date").innerHTML = "Last Updated: " + currentdate;
}

lastUpdated();