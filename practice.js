function megaFriend(names){
    var maxLength = "";
    for(var i=0; i<names.length; i++){
        if (names[i].length > maxLength.length){
            maxLength = names[i];
            
        }
    }
        return maxLength;
}