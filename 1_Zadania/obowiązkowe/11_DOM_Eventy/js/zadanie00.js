//0a
function show(e){
    e.target.querySelector('.children').style.display="block";
}
function hide(e){
    e.target.querySelector('.children').style.display="none";
}

const parents = document.querySelectorAll('.parent');

for(let item of parents){
    item.addEventListener('mouseenter',show,false);
}

//0b

for(let parent of parents){
    parent.addEventListener("mouseleave", function() {
        
        function hideChildrenElement(el){

            el.querySelector('.children').style.display='none';
        }
        hideChildrenElement(this);
    })
}

