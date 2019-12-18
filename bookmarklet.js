(function(){
    var nodes = Array.from(document.body.childNodes);
    var names = ["warren", "trump", "booker", "biden", "sanders", "bennet", "bloomberg", "buttigieg", "delaney", "gabbard", "klobuchar", "patrick", "steyer", "walsh", "weld", "williamson", "yang", "castro"];
    iterateChildren(nodes, names);
})();

function iterateChildren(nodes, names){
    for(let i=0; i<nodes.length; i++){
        searchNode(nodes[i], names);
    }
}

function searchNode(node, names){
    if(node.childNodes.length != 0){
        iterateChildren(Array.from(node.childNodes), names);
    }
    if(node.innerHTML != null){
        let para = node;
        console.log(node);
        var text = para.innerHTML;

        console.log(text);

        var res = text.trim().split(" ");

        for(let j = 0; j < res.length; j++){

            for(let k = 0; k < names.length; k++){

                if(names[k] == res[j].toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")){

                    console.log("Presidential Candidate!");
                    let exp =  new RegExp(res[j], "g");
                    para.innerHTML = para.innerHTML.replace(exp, "<span style='background-color: yellow'>" + res[j] + "</span>");

                }
            }
            var i = 0;
        }   

    }

}
