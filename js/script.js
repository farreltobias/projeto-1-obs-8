(function () {
    const $ = (sel) => document.querySelector(sel);
    const $$ = (sel) => Array.from(document.querySelectorAll(sel));

    // Alto contraste
    const btnContraste = $('#btn-contraste');
    if (btnContraste) {
        btnContraste.addEventListener('click', () => {
            const pressed = btnContraste.getAttribute('aria-pressed') === 'true';
            btnContraste.setAttribute('aria-pressed', String(!pressed));
            document.body.classList.toggle('alto-contraste');
        });
    }

    // Tamanho da fonte
    const btnMais = $('#btn-fontemais');
    const btnMenos = $('#btn-fontemenos');
    let base = 100; // %
    const applyFontSize = () => {
        document.documentElement.style.fontSize = base + '%';
    };
    btnMais?.addEventListener('click', () => {
        base = Math.min(130, base + 5);
        applyFontSize();
    });
    btnMenos?.addEventListener('click', () => {
        base = Math.max(85, base - 5);
        applyFontSize();
    });

    // Checklist de aderência
    const btnAvaliacao = $('#btn-avaliar');
    const outChecklist = $('#resultado-checklist');
    btnAvaliacao?.addEventListener('click', () => {
        const itens = $$('input[type="checkbox"][name="item"]');
        const total = itens.length;
        const marcados = itens.filter(i => i.checked).length;
        const pct = Math.round((marcados / total) * 100);
        let dica = '';
        if (pct < 40) dica = 'Comece por políticas salariais justas e canais de denúncia.';
        else if (pct < 70) dica = 'Ótimo progresso! Invista em inclusão no recrutamento e formação contínua.';
        else dica = 'Excelente! Mantenha auditorias de fornecedores e programas de SST.';
        outChecklist.value = `Aderência estimada: ${pct}% — ${dica}`;
    });

    // Quiz
    const btnQuiz = $('#btn-quiz');
    const outQuiz = $('#resultado-quiz');
    btnQuiz?.addEventListener('click', () => {
        const q1 = $$('input[name="q1"]:checked')[0]?.value;
        const q2 = $$('input[name="q2"]:checked')[0]?.value;
        let score = 0;
        if (q1 === 'certa') score++;
        if (q2 === 'certa') score++;
        outQuiz.value = `Você acertou ${score}/2.`;
    });

})();