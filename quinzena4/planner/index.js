function adicionarTarefa() {
    const minhaTarefa = document.getElementById("tarefa")
    const diaSemana = document.getElementById("dias-semana")
    if (minhaTarefa.value !== "") {
        switch (diaSemana.value) {

            case "domingo":
                let tarefaDomingo = document.getElementById('domingo');
                tarefaDomingo.innerHTML += `<li>${minhaTarefa.value}</li>`;
                minhaTarefa.value = ""

                break;

            case "segunda":
                let tarefaSegunda = document.getElementById("segunda");
                tarefaSegunda.innerHTML += `<li>${minhaTarefa.value}</li>`
                minhaTarefa.value = ""
                break;
            case "terca":
                let tarefaTerca = document.getElementById("terca");
                tarefaTerca.innerHTML += `<li>${minhaTarefa.value}</li>`
                minhaTarefa.value = ""
                break;

            case "quarta":
                let tarefaQuarta = document.getElementById("quarta");
                tarefaQuarta.innerHTML += `<li>${minhaTarefa.value}</li>`
                minhaTarefa.value = ""
                break;

            case "quinta":
                let tarefaQuinta = document.getElementById("quinta");
                tarefaQuinta.innerHTML += `<li>${minhaTarefa.value}</li>`
                minhaTarefa.value = ""
                break;
            case "sexta":
                let tarefaSexta = document.getElementById("sexta");
                tarefaSexta.innerHTML += `<li>${minhaTarefa.value}</li>`
                minhaTarefa.value = ""
                break;

            case "sabado":
                let tarefaSabado = document.getElementById("sabado");
                tarefaSabado.innerHTML += `<li>${minhaTarefa.value}</li>`
                minhaTarefa.value = ""
                break;

            default:
                console.log("Semana selecionada Inválida")

        }
    }

}