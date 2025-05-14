document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("cmdInput");
    const output = document.getElementById("output");

    const commands = {
        "about me": "<ul><li>I’m Bilal, 20 yo and I live in Morocco .</li></ul>",
        "my work": '<ul><li>Mr X : Custom all-in-one bot made by me for my server – with mini-games, leveling, welcome images, and more!</li></ul>',
        "server": '<ul><li>My Discord server <span class ="chronic">Mr X Server</span> : <a href="https://discord.gg/2nMGz5zyXM" target="_blank" class="disc"><i class="fa-brands fa-discord"></i></a></li></ul>',
        "contact": '<ul><li>My Instagram : <a href="https://www.instagram.com/cyphe444" target="_blank" class="insta"><i class="fa-brands fa-instagram"></i></a><br></li><li>My X :  <a href="https://x.com/B1l4lXvii/with_replies" target="_blank" class="twitter"><i class="fa-brands fa-x-twitter"></i></a></li></ul>',
        "koko": "بغيت ✋🏻وكاما حسيت😫 هزيت راسي ومشيت😣كاااان🚶نبحاري وااا😼فعيونك انا سهيت😫🫦 بغيت🤚🏻 وكاما حسيت😫 هزيت راسي ومشيت😣كاااان🚶نبحاري وااا😼فعيونك انا سهيت 😫🫦😂",
        "clear": "",
    };

    function executeCommand(command) {
        if (command === "") return;

        const commandLine = document.createElement("p");
        commandLine.classList.add("dir", "old-command");
        commandLine.textContent = `\\user\\cyphe4 > ${command}`;
        output.appendChild(commandLine);

        if (command === "clear" || command === "home") {
            output.innerHTML = "";
        } else {
            const responseLine = document.createElement("p");
            responseLine.innerHTML = commands[command] || `Command not found: ${command}`;
            output.appendChild(responseLine);
        }

        input.value = "";

        document.querySelectorAll(".command-link").forEach(link => {
            link.replaceWith(link.cloneNode(true));
        });

        document.querySelectorAll(".command-link").forEach(link => {
            link.addEventListener("click", function (event) {
                event.preventDefault();
                executeCommand(this.textContent.trim());
            });
        });
    }

    input.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            executeCommand(input.value.trim());
        }
    });

    document.querySelectorAll(".command-link").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            executeCommand(this.textContent.trim());
        });
    });
});

const toggleButton = document.getElementById("themes");
const body = document.body;

const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
    body.classList.add(currentTheme);
}

toggleButton.addEventListener("click", () => {
    if (body.classList.contains("dark-mode")) {
        body.classList.replace("dark-mode", "light-mode");
        localStorage.setItem("theme", "light-mode");
    } else {
        body.classList.replace("light-mode", "dark-mode");
        localStorage.setItem("theme", "dark-mode");
    }
});
