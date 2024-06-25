class user {
    // user_type: 0 - Estudiante, 1 - Profesor

    constructor(user_type, name, lastname, email, phone_number) {
        this.user_type = user_type;
        this.name = name;
        this.lastname = lastname;
        this.email = email;
        this.phone_number = phone_number;
    }

    changeData() {
        const userTypeElement = document.getElementById('ut1');
        const nm_lt_element = document.getElementById('name-lastname');
        const nm_element = document.getElementById('name');
        const lt_element = document.getElementById('last-name');
        const email_element = document.getElementById('email');
        const number_element = document.getElementById('number');

        //Type of user  
        if (this.user_type === 0) {
            userTypeElement.textContent = "Estudiante";
        } else if (this.user_type === 1){
            userTypeElement.textContent = "Profesor";
        }
        else{
            userTypeElement.textContent = "a";
        }

        //Name and Lastname (profile)
        nm_lt_element.textContent = this.name + " " + this.lastname;

        //Info
        nm_element.textContent = this.name;
        lt_element.textContent = this.lastname;
        email_element.textContent = this.email;
        number_element.textContent = this.phone_number;


        //DEFINICION DE APRENDIZAJE O CURSOS

        const Apr_Cur = document.getElementById('Apr-Cur');
       

        if (this.user_type === 0){
            Apr_Cur.textContent = "Mi Aprendizaje";
            Apr_Cur.href = "Student_html/mis-cursos-est.html";

            
        }
        else if (this.user_type === 1) {
            Apr_Cur.textContent = "Mis Cursos";
            Apr_Cur.href = "mis-cursos-profesor.html";
        }
        else{

        }






        
    }
}

function main() {
    console.log(1);
    let user1 = new user(1, "Rafael ", "Mendoza", "rafe123@gmail.com", 942425414);
    user1.changeData();
}

main();
