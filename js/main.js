var android = [
    { "title": "android", "description": "ASdasds", img: "img/test.jpg" },
    { "title": "android", "description": "ASdasds", img: "img/test.jpg" }
];
var web = [
    { "title": "web", "description": "ASdasds", img: "img/test.jpg" },
    { "title": "web", "description": "ASdasds", img: "img/test.jpg" }
];
var ml = [
    { "title": "ml", "description": "ASdasds", img: "img/test.jpg" },
    { "title": "ml", "description": "ASdasds", img: "img/test.jpg" }
];
var other = [
    { "title": "other", "description": "ASdasds", img: "img/test.jpg" },
    { "title": "other", "description": "ASdasds", img: "img/test.jpg" }
];
var holder = document.getElementById("project-holder");
var projectClone = document.getElementById("project-clone");
var projectCloneImg = document.getElementById("project-clone-img");
var projectCloneTitle = document.getElementById("project-clone-title");
var projectCloneDesc = document.getElementById("project-clone-description");

function projectSelect(a, item) {
    document.getElementById("filter0").className = "rounded-text unselectable";
    document.getElementById("filter1").className = "rounded-text unselectable";
    document.getElementById("filter2").className = "rounded-text unselectable";
    document.getElementById("filter3").className = "rounded-text unselectable";
    document.getElementById("filter4").className = "rounded-text unselectable";
    item.className = "rounded-text-selected unselectable";
    switch (a) {
        case 0:
            filterApply(android.concat(web).concat(ml).concat(other));
            break;
        case 1:
            filterApply(android);
            break;
        case 2:
            filterApply(web);
            break;
        case 3:
            filterApply(ml);
            break;
        case 4:
            filterApply(other);
            break;
    }
}


filterApply(android);

function filterApply(object) {
    holder.innerHTML = "";
    object.forEach(function(project) {
        projectCloneImg.src = project.img;
        projectCloneTitle.innerHTML = project.title;
        projectCloneDesc.innerHTML = project.description;
        var clone = projectClone.cloneNode(true);
        clone.id = "clones";
        clone.hidden = false;
        holder.appendChild(clone);
    });
}