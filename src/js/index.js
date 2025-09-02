const adviceUpdateButton = document.querySelector(".advice-update");
const adviceNumber = document.querySelector(".advice-id");
const adviceDescription = document.querySelector(".advice-description");

async function getAdvice() {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");

    if (!response.ok) {
      throw new Error("Erro ao buscar dados da API");
    }

    const adviceContent = await response.json();
    const adviceId = `Conselho #${adviceContent.slip.id}`;
    const adviceText = adviceContent.slip.advice;


    const translationResponse = await fetch(
      `https://api.mymemory.translated.net/get?q=${encodeURIComponent(adviceText)}&langpair=en|pt`
    );
    const translationData = await translationResponse.json();
    const translatedText = translationData.responseData.translatedText;

    adviceNumber.innerText = adviceId;
    adviceDescription.innerText = `"${translatedText}"`;

  } catch (error) {
    console.error("Erro ao buscar/traduzir o conselho:", error);
    adviceDescription.innerText = "Não foi possível carregar o conselho.";
  }
}

adviceUpdateButton.addEventListener("click", getAdvice);

getAdvice();
