const input = document.querySelector(".input");
const output = document.querySelector(".output");
const commands = [
    "<p>> <span class='green'>help</span> - показать список команд</p>",
    "<p>> <span class='green'>about</span> - о проекте</p>",
    "<p>> <span class='green'>ls</span> - список доступных глав</p>",
    "<p>> <span class='green'>clear</span> - очистить терминал</p>",
];
const ls = [
    "<p>> <span class='green'>ch.1</span> - глава 1: unit-07</p>",
    "<p>> <span class='green'>ch.2</span> - глава 2: breathing</p>"
]

output.insertAdjacentHTML("beforeend", "<p>> <span class='green'>добро пожаловать. для навигации используйте команду help.</p>");
output.insertAdjacentHTML("beforeend", `
<pre>

 ▓▓▓  ▓   ▓ ▓▓▓▓      ▓▓▓    ▓   
▓     ▓▓ ▓▓ ▓   ▓    ▓   ▓  ▓▓   
▓     ▓ ▓ ▓ ▓   ▓    ▓   ▓   ▓   
▓     ▓   ▓ ▓   ▓    ▓   ▓   ▓   
 ▓▓▓  ▓   ▓ ▓▓▓▓      ▓▓▓   ▓▓▓  

</pre>
`);

input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        const command = input.value;
        if (command === "help") {
            output.insertAdjacentHTML("beforeend", "<p>> доступные команды:</p>");
            for (const commandName of commands) {
            output.insertAdjacentHTML("beforeend", "<p>" + commandName + "</p>");
            output.scrollTop = output.scrollHeight;
        }
        }

        else if (command === "about") {
            output.insertAdjacentHTML("beforeend", "<p>> <span class='orange'>это малюсенькая демонстрация амбициознейшей хуйни, которой я когда-либо занимался наверное. магнум опус(!) если позволите. мне очень не хватало возможностей wattpad, telegra.ph, да и в целом написания рассказов/книг через обычный markdown формат. я люблю погружение, атмосферность, да и в конце концов медиа-контент. поэтому решил перенести свою книгу(?), если ее можно таковой назвать, на данный сайт, где я смогу красивенько, атмосферно, и самое главное с развязанными руками оформлять каждую буковку текста. вставлять кнопки, ведущие на саундтрек главы. отражать состояние героя не только описанием или другим шрифтом реплики, а отдельными визуальными вставками в страничке главы. короче говоря, по задумке это absolute cinema с возможностью небольшой интерактивности. надеюсь что не забью через пару дней. :3</span></p>");
            output.scrollTop = output.scrollHeight;
        }

        else if (command === "ls") {
            output.insertAdjacentHTML("beforeend", "<p>> доступные главы: <span class='orange'>(тестовая команда, еще ничего не доступно)</span></p>");
            for (const commandName of ls) {
            output.insertAdjacentHTML("beforeend", "<p>" + commandName + "</p>");
            output.scrollTop = output.scrollHeight;
        }
        }

        else if (command === "clear") {
            output.innerHTML = "";
        }

        else output.insertAdjacentHTML("beforeend", "<p class='red'>> Неизвестная команда</p>");
        output.scrollTop = output.scrollHeight;
        input.value = "";
        }
});

