  type estudantes = {
    nome: string;
    cursoId: number;
    notas: number[];
    mensagem: string;
}
   const estudante : estudantes ={
    nome: "Maria",
    cursoId: 1,
    notas: [8,9,10], 
    mensagem: "Parabéns!"
   }

   const estudante2 : estudantes ={
    nome : "Isis",
    cursoId: 2,
    notas: [5,6,7],
    mensagem: "Precisa melhorar"
   }

   const estudante3 : estudantes ={
    nome : "Carolina",
    cursoId: 3,
    notas: [2,3,4],
    mensagem: "Reprovado"
   }
   console.log(estudante)
   console.log(estudante2)
   console.log(estudante3)  

   const listaDeCursos = [
    { id: 1, nome: "Lógica de Programação" },
    { id: 2, nome: "Front-end" },
    { id: 3, nome: "Back-end" }
   ]

    console.log(listaDeCursos)
// -----------------------------------------------------------
// FUNÇÕES (exercícios)
// -----------------------------------------------------------

interface Estudante {
    nome : string;
    notas: [number, number, number];
}

function mediaEstudante(estudante: Estudante) : number {
    const [nota1, nota2,nota3] = estudante.notas;
    const somaDasNotas = nota1 + nota2 + nota3;
    const media = somaDasNotas / estudante.notas.length;
    return (media);

}


