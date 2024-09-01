const cursos = ['JavaScript', 'HTML', 'CSS', 'Arduino', 'CSHARP', 'JAVA', 'C++']
const carros = ['POLO', 'T-CROSS', 'GOLF', 'ONIX', "CRONOS", "ARGO"]

//const getTodosCursos=()=>{
//    return cursos
//}
export default function getTodosCursos(){
    return cursos 
}

function getCruso(i_curso){
    return cursos[i_curso]
}

export {cursos,getCruso}

