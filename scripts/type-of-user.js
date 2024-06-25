function SetUser (a){
    const Apr_Cur = document.getElementById('Apr-Cur');
    
    if (a === 0){
        Apr_Cur.textContent = "Mi Aprendizaje";
        Apr_Cur.href = "../Student_html/mis-cursos-est.html";
        
    }
    else if (a === 1) {
        Apr_Cur.textContent = "Mis Cursos";
        Apr_Cur.href = "../mis-cursos-profesor.html";
    }
    else{

    }
}

SetUser(0);