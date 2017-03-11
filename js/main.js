var holder = document.getElementById("project-holder");
var projectClone = document.getElementById("project-clone");
var projectCloneImg = document.getElementById("project-clone-img");
var projectCloneTitle = document.getElementById("project-clone-title");
var projectCloneDesc = document.getElementById("project-clone-description");
var projectCloneLink = document.getElementById("project-clone-link");
var projectCloneLinkLive = document.getElementById("project-clone-link-live");

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



ready(function() { filterApply(android); });

function filterApply(object) {
    holder.innerHTML = "";
    object.forEach(function(project) {
        projectCloneImg.src = project.img;
        projectCloneTitle.innerHTML = project.title;
        projectCloneDesc.innerHTML = project.description;

        if (project.link) {
            projectCloneLink.href = project.link;
            projectCloneLink.children[0].innerHTML = project.linkname;
        }
        if (project.livelink) {
            projectCloneLinkLive.href = project.livelink;
            projectCloneLinkLive.children[0].innerHTML = project.livelinkname;
        }


        var clone = projectClone.cloneNode(true);
        clone.id = "clones";
        clone.hidden = false;
        if (project.link) clone.children[1].children[2].hidden = false;
        if (project.livelink) clone.children[1].children[3].hidden = false;
        holder.appendChild(clone);
    });
}

function ready(fn) {
    if (document.readyState != 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}
// if ('serviceWorker' in navigator) {
//     window.addEventListener('load', function() {
//         navigator.serviceWorker.register('/sw.js').then(function(registration) {
//             // Registration was successful
//             console.log('ServiceWorker registration successful with scope: ', registration.scope);
//         }).catch(function(err) {
//             // registration failed :(
//             console.log('ServiceWorker registration failed: ', err);
//         });
//     });
// }