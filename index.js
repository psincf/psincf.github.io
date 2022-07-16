function add_project(name, img_src, gif_src, link, description_text) {
    const div_project = document.createElement("div");
    div_project.setAttribute("class", "project");
    
    const title_project = document.createElement("h2");
    title_project.innerText = name;

    const project_link = document.createElement("a");
    project_link.setAttribute("href", link);

    const img = document.createElement("img");
    img.setAttribute("class", "img_project");
    img.setAttribute("src", img_src);
    if (gif_src) {
        img.setAttribute("src", gif_src);
    }
    img.setAttribute("width", "100%");
    img.setAttribute("height", "200px");

    const description = document.createElement("p");
    description.innerText = description_text;
    
    div_project.append(title_project);
    project_link.append(img);
    div_project.append(project_link);
    div_project.append(description);

    document.getElementById("project_list").append(div_project);
}