let prefix = ["All India", "Educational", "People"];
let mid = ["Engineering","Welding","Fashion","cat"];
let end = [".bros", ".co", ".ltd"];
function x() {
    let a = Math.floor(3 * Math.random());
    let b = Math.floor(3 * Math.random());
    let c = Math.floor(4 * Math.random());
    document.querySelector(
        ".generatedName"
    ).innerHTML = `${prefix[a]}   ${mid[c] } ${end[b]}`;
    console.log(a, b , c);
}
