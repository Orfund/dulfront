document.querySelector(".titlewrapper img").onclick = ()=>{
    window.location.href="/";
};
document.querySelector(".title").onclick = ()=>{
    window.location.href="/";
};
let editor = document.querySelector("#coder");

editor.onkeydown = (e)=>{
    let keyCode = e.keyCode || e.which;
    if (keyCode === 9) {
        e.preventDefault();
        let start = editor.selectionStart;
        let end = editor.selectionEnd;
        editor.value = editor.value.substring(0, start)
                + "\t"
                + editor.value.substring(end);

        editor.selectionStart =
        editor.selectionEnd = start + 1
    }
};
let bmenu = document.querySelector(".bwrapper");
let boast = document.querySelector(".boast_selector");
boast.onmouseover = ()=>{
    bmenu.style.display = "flex"
};
let xhr = new XMLHttpRequest()
var release = {}
xhr.open("GET", "/getRelease")
xhr.onload = ()=>{
    release = JSON.parse(xhr.responseText)
    document.querySelector("#rel_ver").innerHTML = `Dulang ver ${release.ver} released`
    document.querySelector("#rel_ver").onclick = ()=>{
        document.location.href = "https://github.com/Orfund/dulang"
    }
}
xhr.send()

let arguments_ = [
    ["", "no explicit self", "consize lambdas", "convinient singletons"],
    ["", "appropriate this", "no let-var-const", "no voodoo type casting", "async keyword"],
    ["", "up to 3 times less code", "convinient singletons", "easy async", "dynamic object semi-prototyped inheritance"]
];
let base_arg = document.querySelector("#barg");
let selectors = document.querySelectorAll(".boast_selector");
for(let i = 0; i<arguments_.length; ++i){
    selectors[i].onmouseover = ()=>{
        selectors.forEach(e=>{
            e.removeAttribute("selected")
        });
        selectors[i].setAttribute("selected", "true");
        base_arg.innerHTML = arguments_[i].reduce(
            (acc, elem)=>{
                let node = document.createElement("div");
                node.classList.add("boast_arg");
                node.innerHTML = elem;
                return acc + node.outerHTML
            }
        )
    }
}
selectors[0].onmouseover()
document.querySelector("#comm").onclick = ()=>{
    window.location.href = "https://vk.com/dulangdev"
};
document.querySelector("#togit").onclick = ()=>{
    window.location.href = release.src
};

document.querySelector(".syntax_demo > svg").onclick = ()=>{
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "/exec");
    xhr.setRequestHeader("Content-type", "text-plain");
    xhr.onload = ()=>{
        document.querySelector(".output").value = xhr.responseText
    };
    xhr.send(document.querySelector(".syntax_demo textarea").value)
};
document.querySelector(".joinbtn").onclick = ()=>{
    window.location.href = "/join"
}