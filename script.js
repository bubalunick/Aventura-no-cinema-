function choose(option) {
    const storyText = document.getElementById('story-text');

    if (option === 'ação') {
        storyText.textContent = 'Você escolheu Ação! O filme começa com uma cena emocionante de perseguição. Você vê um herói lutando contra vilões em uma cidade movimentada. O que você faz?';
        document.getElementById('choices').innerHTML = `
            <button onclick="choose('ajudar')">Ajudar o herói</button>
            <button onclick="choose('fugir')">Fugir</button>
        `;
    } else if (option === 'comédia') {
        storyText.textContent = 'Você escolheu Comédia! O filme é sobre um grupo de amigos que se metem em várias situações engraçadas. Eles estão prestes a participar de um concurso de talentos. O que você faz?';
        document.getElementById('choices').innerHTML = `
            <button onclick="choose('participar')">Participar do concurso</button>
            <button onclick="choose('assistir')">Assistir do lado de fora</button>
        `;
    } else if (option === 'drama') {
        storyText.textContent = 'Você escolheu Drama! O filme mostra uma família lidando com desafios emocionais. Um segredo está prestes a ser revelado. O que você faz?';
        document.getElementById('choices').innerHTML = `
            <button onclick="choose('descobrir')">Descobrir o segredo</button>
            <button onclick="choose('evitar')">Evitar o drama</button>
        `;
    } else if (option === 'ajudar') {
        storyText.textContent = 'Você decidiu ajudar o herói! Após uma série de ações corajosas, você descobre que o vilão era na verdade um aliado disfarçado. Parabéns, você salvou o dia!';
        document.getElementById('choices').innerHTML = '';
    } else if (option === 'fugir') {
        storyText.textContent = 'Você decidiu fugir. Infelizmente, você perdeu o contato com o herói e o vilão escapou. O filme termina com um final aberto.';
        document.getElementById('choices').innerHTML = '';
    } else if (option === 'participar') {
        storyText.textContent = 'Você decidiu participar do concurso. Sua performance foi incrível e você ganhou o primeiro prêmio. O grupo de amigos comemora juntos!';
        document.getElementById('choices').innerHTML = '';
    } else if (option === 'assistir') {
        storyText.textContent = 'Você decidiu assistir ao concurso do lado de fora. Apesar de não participar, você se divertiu muito e fez novos amigos!';
        document.getElementById('choices').innerHTML = '';
    } else if (option === 'descobrir') {
        storyText.textContent = 'Você decidiu descobrir o segredo. Ao final do filme, o segredo é revelado e você se emociona com a história. Uma experiência inesquecível!';
        document.getElementById('choices').innerHTML = '';
    } else if (option === 'evitar') {
        storyText.textContent = 'Você decidiu evitar o drama. O filme terminou de forma tranquila e você se sentiu aliviado por não se envolver tanto.';
        document.getElementById('choices').innerHTML = '';
    }
}
