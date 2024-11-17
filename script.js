function feedback(type) {
    let message = "";

    if (type === "positivo") {
        message = "Obrigado pelo seu feedback positivo! 😊";
    } else if (type === "neutro") {
        message = "Obrigado pelo seu feedback! 😐";
    } else if (type === "negativo") {
        message = "Obrigado pelo seu feedback! Vamos melhorar. 😞";
    }

    document.getElementById("feedback-message").innerText = message;

    // Envia o feedback para a planilha Google Sheets
    const feedbackData = {
        feedback: type
    };

    fetch("https://docs.google.com/spreadsheets/d/1kiES0tfwskJ1f2Mo9mXkf0XmZhcObs9ZsXobUJ8VFfQ/edit?hl=pt-br&gid=0#gid=0", {
        method: "POST",
        body: JSON.stringify(feedbackData),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => response.text())
    .then(data => console.log(data))
    .catch(error => console.error("Erro ao enviar feedback:", error));
}
