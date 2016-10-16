var css = document.getElementById('extension_grayscale');
if(!css){
    css = document.createElement("style");
    css.id = "extension_grayscale";
    document.head.appendChild(css);
}
css.type = "text/css";