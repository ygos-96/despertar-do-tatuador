 function calcularProgressoVagasAnimado() {
            const hoje = new Date();
            const inicio = new Date("2024-06-30T00:00:00"); // início da contagem
            const fim = new Date("2025-08-08T23:59:59");   // data limite
            const totalDias = (fim - inicio) / (1000 * 60 * 60 * 24);
            const diasPassados = (hoje - inicio) / (1000 * 60 * 60 * 24);
            const progressoFinal = Math.min(100, Math.round((diasPassados / totalDias) * 100));

            const barras = [
                { idBarra: 'progress-bar-1', idTexto: 'percentual-1' },
                { idBarra: 'progress-bar-2', idTexto: 'percentual-2' },
                { idBarra: 'progress-bar-3', idTexto: 'percentual-3' }
            ];

            let progressoAtual = 0;

            const animar = setInterval(() => {
                if (progressoAtual >= progressoFinal) {
                    clearInterval(animar);
                } else {
                    progressoAtual++;
                    barras.forEach(({ idBarra, idTexto }) => {
                        const barra = document.getElementById(idBarra);
                        const texto = document.getElementById(idTexto);
                        if (barra) barra.style.width = `${progressoAtual}%`;
                        if (texto) texto.innerText = `${progressoAtual}% das vagas reservadas`;
                    });
                }
            }, 20);
        }

        window.addEventListener('DOMContentLoaded', calcularProgressoVagasAnimado);