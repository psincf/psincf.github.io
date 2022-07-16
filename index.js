function add_project(name, img_src, gif_src, description_text, link) {
    const div_project = document.createElement("div");
    div_project.setAttribute("class", "project");

    const project_link = document.createElement("a");
    project_link.setAttribute("href", link);

    const img = document.createElement("img");
    img.setAttribute("class", "img_project");
    img.setAttribute("src", img_src);
    img.setAttribute("width", "400px");
    img.setAttribute("height", "200px");
    if (gif_src) {
        img.setAttribute("onmouseover", "(() => {this.src = \"" + gif_src + "\"})()");
        img.setAttribute("onmouseout", "(() => {this.src = \"" + img_src + "\"})()");
    }

    const description = document.createElement("p");
    description.innerText = description_text;
    
    project_link.append(img);
    div_project.append(project_link);
    div_project.append(description);

    document.getElementById("project_list").append(div_project);
}