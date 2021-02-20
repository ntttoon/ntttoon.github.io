///////////////////////// Load url text file into div holder
function readTemplates(path,div_holder){
    var txtFile = new XMLHttpRequest();
        txtFile.open("GET", path, true);
        txtFile.onreadystatechange = function() {
            if (txtFile.readyState === 4) {  // Makes sure the document is ready to parse.
                    if (txtFile.status === 200) {  // Makes sure it's found the file.
                    allText = txtFile.responseText;
                    //console.log(allText);
                    //lines = txtFile.responseText.split("\n"); // Will separate each line into an array
                    document.getElementById(div_holder).textContent = allText;
                }
            }
        }
    txtFile.send(null);
}

///////////////////////// Load input file into div holder
function readInputFile(input,div_holder,mode) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        
        reader.onload = function (e) {
            document.getElementById(div_holder).textContent = e.target.result;
        }
        if(mode == "image" ){
            reader.readAsDataURL(input.files[0]);
        }
        if(mode == "text" ){
            reader.readAsText(input.files[0]);
        }
    }
}

///////////////////////// 
function replaceString(string_pool,string_key,string_replace) {
    var res = string_pool.replace(string_key,string_replace,);
    return res
}