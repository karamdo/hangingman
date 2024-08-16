let word;

async function dodis() {
    word = await fetch("https://api.api-ninjas.com/v1/randomword", {
        headers: { "X-Api-Key": "rjqGmKPWaBI5+38sQ9VXIQ==NaALd3dxUkxDtsA9" },
    })
        .then((res) => res.json())
        .then((data) => {
            return data["word"][0];
        });
}
// const definitionUrl = new URL(`https://wordsapiv1.p.mashape.com/words/${word}/typeOf`);

dodis();
