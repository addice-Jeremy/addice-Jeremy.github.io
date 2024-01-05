let toggleTheme=e=>{setTheme("dark"==e?"light":"dark")},setTheme=e=>{if(transTheme(),setHighlight(e),setGiscusTheme(e),"undefined"!=typeof mermaid&&setMermaidTheme(e),e){document.documentElement.setAttribute("data-theme",e);let t=document.getElementsByTagName("table");for(let m=0;m<t.length;m++)"dark"==e?t[m].classList.add("table-dark"):t[m].classList.remove("table-dark");let m=document.getElementsByClassName("jupyter-notebook-iframe-container");for(let t=0;t<m.length;t++){let n=m[t].getElementsByTagName("iframe")[0].contentWindow.document.body;"dark"==e?(n.setAttribute("data-jp-theme-light","false"),n.setAttribute("data-jp-theme-name","JupyterLab Dark")):(n.setAttribute("data-jp-theme-light","true"),n.setAttribute("data-jp-theme-name","JupyterLab Light"))}}else document.documentElement.removeAttribute("data-theme");localStorage.setItem("theme",e),"undefined"!=typeof medium_zoom&&medium_zoom.update({background:getComputedStyle(document.documentElement).getPropertyValue("--global-bg-color")+"ee"})},setHighlight=e=>{"dark"==e?(document.getElementById("highlight_theme_light").media="none",document.getElementById("highlight_theme_dark").media=""):(document.getElementById("highlight_theme_dark").media="none",document.getElementById("highlight_theme_light").media="")},setGiscusTheme=e=>{function t(e){const t=document.querySelector("iframe.giscus-frame");t&&t.contentWindow.postMessage({giscus:e},"https://giscus.app")}t({setConfig:{theme:e}})},addMermaidZoom=(e,t)=>{d3.selectAll(".mermaid svg").each(function(){var e=d3.select(this);e.html("<g>"+e.html()+"</g>");var t=e.select("g"),m=d3.zoom().on("zoom",function(e){t.attr("transform",e.transform)});e.call(m)}),t.disconnect()},setMermaidTheme=e=>{"light"==e&&(e="default"),document.querySelectorAll(".mermaid").forEach(e=>{let t=e.previousSibling.childNodes[0].innerHTML;e.removeAttribute("data-processed"),e.innerHTML=t}),mermaid.initialize({theme:e}),window.mermaid.init(undefined,document.querySelectorAll(".mermaid"));const t=document.querySelector(".mermaid svg");if(null!==t){const e={childList:!0};new MutationObserver(addMermaidZoom).observe(t,e)}},transTheme=()=>{document.documentElement.classList.add("transition"),window.setTimeout(()=>{document.documentElement.classList.remove("transition")},500)},initTheme=e=>{if(null==e||"null"==e){const t=window.matchMedia;t&&t("(prefers-color-scheme: dark)").matches&&(e="dark")}setTheme(e)};initTheme(localStorage.getItem("theme")),document.addEventListener("DOMContentLoaded",function(){document.getElementById("light-toggle").addEventListener("click",function(){toggleTheme(localStorage.getItem("theme"))})});