const googleFont = "https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap";
const link = document.createElement("link");
link.rel = "stylesheet";
link.href = googleFont;
document.head.appendChild(link);

const style = document.createElement("style");
style.textContent = `
    body {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        margin: 0;
        background-color: #9e9e9e;
    }
    
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    
    input {
        width: 400px;
        height: 20px;
        margin: 30px;
        padding: 5px;
        font-size: 16px;
        border: 1px solid #ccc;
        font-family: 'Press Start 2P', cursive;
        text-align: center;
        border-radius: 30px;
    }
    
    button {
        border-radius: 100%;
        width: 500px;
        height: 500px;
        background: radial-gradient(circle, #0097ff, #0066ff, rgba(0, 35, 166, 0.98));
        box-shadow: 0 0 40px rgb(0, 102, 255);
    }
    
    #answer {
        font-size: 16px;
        margin-top: 20px;
        font-family: 'Press Start 2P', cursive;
    }
`;
document.head.appendChild(style);

const container = document.createElement("main");
container.className = "container";

const question = document.createElement("input");
question.id = "question";
question.type = "text";
question.placeholder = "Поставте питання";

const btn = document.createElement("button");
btn.id = "ball";

const ball = document.createElement("div");
ball.className = "ball";

const answer = document.createElement("div");
answer.id = "answer";
answer.textContent = "";

ball.appendChild(answer);
btn.appendChild(ball);
container.appendChild(question);
container.appendChild(btn);
document.body.appendChild(container);

const answersList = [
    "Так",
    "Ні",
    "Можливо",
    "Запитай пізніше",
    "Шанси хороші",
    "Не розраховуй на це",
    "Однозначно так",
    "Виглядає сумнівно",
    "Схоже на правду",
    "Краще не знати відповіді"
];

function ask() {
    const v = question.value.trim();
    if (!v.includes("?")) {
        answer.textContent = "";
        return;
    }
    const idx = Math.floor(Math.random() * answersList.length);
    answer.textContent = answersList[idx];
}

btn.addEventListener("click", ask);
question.addEventListener("keydown", e => {
    if (e.key === "Enter") ask();

});
