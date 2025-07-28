document.addEventListener('DOMContentLoaded', () => {
    // Definición de la estructura del pensum con requisitos
    const pensum = {
        "Primer Semestre": [
            { name: "Biología Básica", id: "biologia-basica" },
            { name: "Orientación Institucional", id: "orientacion-institucional" },
            { name: "Int A La Filosofía", id: "int-a-filosofia" },
            { name: "Física Básica", id: "fisica-basica" },
            { name: "Lengua Española Básica I", id: "lengua-espanola-basica-i" },
            { name: "Matemática Básica", id: "matematica-basica" },
            { name: "Química Básica", id: "quimica-basica" },
            { name: "Int A Las Ciencias Sociales", id: "int-a-ciencias-sociales" }
        ],
        "Segundo Semestre": [
            { name: "Morfofunción", id: "morfofuncion", requires: ["biologia-basica"] },
            { name: "Educación Física", id: "educacion-fisica" },
            { name: "Fund De His Social Dominicana", id: "fund-his-social-dominicana" },
            { name: "Lengua Española Básica II", id: "lengua-espanola-basica-ii", requires: ["lengua-espanola-basica-i"] },
            { name: "Salud Y Conducta Humanas", id: "salud-y-conducta-humanas", requires: ["int-a-ciencias-sociales"] },
            { name: "Química Orgánica", id: "quimica-organica", requires: ["quimica-basica"] },
            { name: "Salud Y Sociedad I", id: "salud-y-sociedad-i", requires: ["int-a-ciencias-sociales"] },
            { name: "Int A La Metod Invest En Salud", id: "int-a-metod-invest-salud" }
        ],
        "Tercer Semestre": [
            { name: "Proc Bioquímicos Del Org l", id: "proc-bioquimicos-org-i", requires: ["quimica-organica", "morfofuncion"] },
            { name: "Anatomía Y Fisiología Grales", id: "anatomia-fisiologia-grales", requires: ["morfofuncion"] },
            { name: "Microbiología General", id: "microbiologia-general", requires: ["biologia-basica"] },
            { name: "Int Al Est De La Odontología", id: "int-est-odontologia", requires: ["salud-y-sociedad-i"] },
            { name: "Salud Y Sociedad II", id: "salud-y-sociedad-ii", requires: ["salud-y-sociedad-i"] },
            { name: "Epidemiología General", id: "epidemiologia-general", requires: ["int-a-metod-invest-salud"] }
        ],
        "Cuarto Semestre": [
            { name: "Proc Bioquímicos Del Org II", id: "proc-bioquimicos-org-ii", requires: ["proc-bioquimicos-org-i"] },
            { name: "Procesos Patológicos", id: "procesos-patologicos", requires: ["anatomia-fisiologia-grales", "microbiologia-general"] },
            { name: "His Anat Fisio Cabeza Y Cuello", id: "his-anat-fisio-cabeza-cuello", requires: ["anatomia-fisiologia-grales"] },
            { name: "Microbiología Bucodental", id: "microbiologia-bucodental", requires: ["microbiologia-general"] },
            { name: "Anatomía Y Fisio Bucodentales", id: "anatomia-fisio-bucodentales", requires: ["anatomia-fisiologia-grales"] },
            { name: "Crecimiento Y Des Bucodental", id: "crecimiento-des-bucodental", requires: ["int-est-odontologia"] },
            { name: "Epidemiología Bucodental", id: "epidemiologia-bucodental", requires: ["epidemiologia-general"] },
            { name: "Procesos Periodontales", id: "procesos-periodontales", requires: ["int-est-odontologia", "procesos-patologicos"] }
        ],
        "Quinto Semestre": [
            { name: "Farmacología", id: "farmacologia", requires: ["proc-bioquimicos-org-ii"] },
            { name: "Princ Basic De Anestesiología", id: "princ-basic-anestesiologia", requires: ["proc-bioquimicos-org-ii"] },
            { name: "Educ Y Prevención Bucodental", id: "educ-prevencion-bucodental", requires: ["epidemiologia-bucodental"] },
            { name: "Diagnóstico Clínico Y Radiolog", id: "diagnostico-clinico-radiolog", requires: ["his-anat-fisio-cabeza-cuello", "procesos-patologicos", "microbiologia-bucodental"] },
            { name: "Biomateriales Y Restaurad I", id: "biomateriales-restaurad-i", requires: ["quimica-organica"] }, // Asumiendo, ajustar si hay otros
            { name: "Fisiopatología De La Oclusión", id: "fisiopatologia-oclusion", requires: ["anatomia-fisio-bucodentales"] },
            { name: "Clínica l", id: "clinica-i", requires: ["diagnostico-clinico-radiolog", "procesos-periodontales", "biomateriales-restaurad-i"] }
        ],
        "Sexto Semestre": [
            { name: "Anatomía Patológica", id: "anatomia-patologica", requires: ["procesos-patologicos"] },
            { name: "Patología Bucal", id: "patologia-bucal", requires: ["anatomia-patologica", "microbiologia-bucodental"] },
            { name: "Odontopediatría I", id: "odontopediatria-i", requires: ["crecimiento-des-bucodental", "diagnostico-clinico-radiolog"] },
            { name: "Biomateriales Y Restaurad II", id: "biomateriales-restaurad-ii", requires: ["biomateriales-restaurad-i", "clinica-i"] },
            { name: "Terapia Pulpar I", id: "terapia-pulpar-i", requires: ["diagnostico-clinico-radiolog"] },
            { name: "Cirugía Dentomaxilar I", id: "cirugia-dentomaxilar-i", requires: ["his-anat-fisio-cabeza-cuello", "princ-basic-anestesiologia"] },
            { name: "Servicios Comunitarios I", id: "servicios-comunitarios-i", requires: ["salud-y-sociedad-ii"] },
            { name: "Clínica ll", id: "clinica-ii", requires: ["clinica-i", "biomateriales-restaurad-ii", "terapia-pulpar-i", "cirugia-dentomaxilar-i"] }
        ],
        "Séptimo Semestre": [
            { name: "Odontopediatría II", id: "odontopediatria-ii", requires: ["odontopediatria-i", "clinica-ii"] },
            { name: "Terapia Pulpar II", id: "terapia-pulpar-ii", requires: ["terapia-pulpar-i", "clinica-ii"] },
            { name: "Cirugía Dentomaxilar II", id: "cirugia-dentomaxilar-ii", requires: ["cirugia-dentomaxilar-i", "clinica-ii"] },
            { name: "Clínica III", id: "clinica-iii", requires: ["clinica-ii", "odontopediatria-ii", "terapia-pulpar-ii", "cirugia-dentomaxilar-ii"] },
            { name: "Terapia Periodontal I", id: "terapia-periodontal-i", requires: ["procesos-periodontales", "clinica-ii"] },
            { name: "Rehabilitación Fija I", id: "rehabilitacion-fija-i", requires: ["fisiopatologia-oclusion", "biomateriales-restaurad-ii", "clinica-ii"] },
            { name: "Rehabilitación Movible I", id: "rehabilitacion-movible-i", requires: ["fisiopatologia-oclusion", "biomateriales-restaurad-ii", "clinica-ii"] },
            { name: "Planif Y Adm De Ser De Salud", id: "planif-adm-ser-salud", requires: ["servicios-comunitarios-i"] }
        ],
        "Octavo Semestre": [
            { name: "Princ Medicina Int Y Urgen Med", id: "princ-medicina-int-urgen-med", requires: ["farmacologia", "patologia-bucal"] },
            { name: "Ortodoncia Y Ortopedia I", id: "ortodoncia-ortopedia-i", requires: ["crecimiento-des-bucodental", "diagnostico-clinico-radiolog"] },
            { name: "Terapia Periodontal II", id: "terapia-periodontal-ii", requires: ["terapia-periodontal-i", "clinica-iii"] },
            { name: "Rehabilitación Fija II", id: "rehabilitacion-fija-ii", requires: ["rehabilitacion-fija-i", "clinica-iii"] },
            { name: "Rehabilitación Movible II", id: "rehabilitacion-movible-ii", requires: ["rehabilitacion-movible-i", "clinica-iii"] },
            { name: "Clínica IV", id: "clinica-iv", requires: ["clinica-iii", "terapia-periodontal-ii", "rehabilitacion-fija-ii", "rehabilitacion-movible-ii"] },
            { name: "Seminarios De Investigación", id: "seminarios-investigacion", requires: ["int-a-metod-invest-salud"] }
        ],
        "Noveno Semestre": [
            { name: "Ortodoncia Y Ortopedia ll", id: "ortodoncia-ortopedia-ii", requires: ["ortodoncia-ortopedia-i", "clinica-iv"] },
            { name: "Servicios Comunitarios II", id: "servicios-comunitarios-ii", requires: ["servicios-comunitarios-i"] },
            { name: "Ética Prof Y Odontología Foren", id: "etica-prof-odontologia-foren", requires: ["int-a-filosofia", "salud-y-conducta-humanas"] },
            { name: "Clínica V", id: "clinica-v", requires: ["clinica-iv", "ortodoncia-ortopedia-ii"] }
        ],
        "Décimo Semestre (Troncal)": [ // Renombrado para diferenciar de las optativas
            { name: "Servicios Comunitarios III", id: "servicios-comunitarios-iii", requires: ["servicios-comunitarios-ii"] },
            { name: "Clínica VI", id: "clinica-vi", requires: ["clinica-v"] },
            { name: "Seminarios De Integración", id: "seminarios-integracion", requires: ["seminarios-investigacion"] },
            { name: "Asignatura Optativa", id: "asignatura-optativa", requires: ["clinica-vi"] } // Requisito general para tomar optativa
        ],
        "Tesis de Grado": [
            { name: "Tesis De Grado O Curso Equival", id: "tesis-grado", requires: ["seminarios-integracion", "clinica-vi"] }
        ],
        "Décimo Semestre (Electivas)": [ // Separado para mayor claridad
            { name: "Introducción A La Informática", id: "introduccion-informatica" },
            { name: "Manif Bucales Enferm Sistemat", id: "manif-bucales-enferm-sistemat", requires: ["patologia-bucal"] },
            { name: "Terapia Lesiones Endoperiodont", id: "terapia-lesiones-endoperiodont", requires: ["terapia-pulpar-ii", "terapia-periodontal-ii"] },
            { name: "Atención Al Niño Minusválido", id: "atencion-nino-minusvalido", requires: ["odontopediatria-ii"] },
            { name: "Cirugía Protésica", id: "cirugia-protesica", requires: ["cirugia-dentomaxilar-ii", "rehabilitacion-fija-ii", "rehabilitacion-movible-ii"] },
            { name: "Terapia Disfunc Artic Temp-Man", id: "terapia-disfunc-artic-temp-man", requires: ["fisiopatologia-oclusion"] },
            { name: "Rehabilitación E Implantes", id: "rehabilitacion-implantes", requires: ["rehabilitacion-fija-ii", "rehabilitacion-movible-ii"] }
        ]
    };

    const approvedCourses = new Set(JSON.parse(localStorage.getItem('approvedCourses')) || []);
    const pensumContainer = document.querySelector('.pensum-container');
    const modal = document.getElementById('modal');
    const closeButton = document.querySelector('.close-button');
    const blockedCourseName = document.getElementById('blocked-course-name');
    const requiredCoursesList = document.getElementById('required-courses-list');

    // Función para renderizar el pensum
    function renderPensum() {
        pensumContainer.innerHTML = ''; // Limpiar el contenedor antes de renderizar
        for (const semesterName in pensum) {
            const semesterDiv = document.createElement('div');
            semesterDiv.classList.add('semester');
            semesterDiv.innerHTML = `<h2>${semesterName}</h2><ul class="course-list"></ul>`;
            const courseListUl = semesterDiv.querySelector('.course-list');

            pensum[semesterName].forEach(course => {
                const courseItemLi = document.createElement('li');
                courseItemLi.classList.add('course-item');
                courseItemLi.textContent = course.name;
                courseItemLi.dataset.id = course.id;

                if (approvedCourses.has(course.id)) {
                    courseItemLi.classList.add('approved');
                } else if (!canApprove(course.id)) {
                    courseItemLi.classList.add('blocked');
                }

                courseItemLi.addEventListener('click', () => handleCourseClick(course.id, course.name, course.requires));
                courseListUl.appendChild(courseItemLi);
            });
            pensumContainer.appendChild(semesterDiv);
        }
    }

    // Función para verificar si un curso puede ser aprobado (todos sus requisitos están aprobados)
    function canApprove(courseId) {
        // Encontrar el curso en el pensum
        let course = null;
        for (const semesterName in pensum) {
            course = pensum[semesterName].find(c => c.id === courseId);
            if (course) break;
        }

        if (!course || !course.requires) return true; // Si no tiene requisitos, siempre se puede aprobar

        for (const requiredCourseId of course.requires) {
            if (!approvedCourses.has(requiredCourseId)) {
                return false;
            }
        }
        return true;
    }

    // Función para obtener los nombres de los requisitos no aprobados
    function getMissingRequirements(courseId) {
        let course = null;
        for (const semesterName in pensum) {
            course = pensum[semesterName].find(c => c.id === courseId);
            if (course) break;
        }

        if (!course || !course.requires) return [];

        const missing = [];
        for (const requiredCourseId of course.requires) {
            if (!approvedCourses.has(requiredCourseId)) {
                // Encontrar el nombre de la materia requerida
                let requiredCourseName = requiredCourseId; // Default a ID si no se encuentra
                for (const semName in pensum) {
                    const reqCourse = pensum[semName].find(c => c.id === requiredCourseId);
                    if (reqCourse) {
                        requiredCourseName = reqCourse.name;
                        break;
                    }
                }
                missing.push(requiredCourseName);
            }
        }
        return missing;
    }

    // Manejar el clic en una materia
    function handleCourseClick(courseId, courseName, requires) {
        const courseElement = document.querySelector(`[data-id="${courseId}"]`);

        if (approvedCourses.has(courseId)) {
            // Ya aprobado, no hacer nada o permitir desaprobar si se desea (opcional)
            return;
        }

        if (courseElement.classList.contains('blocked')) {
            const missing = getMissingRequirements(courseId);
            blockedCourseName.textContent = courseName;
            requiredCoursesList.innerHTML = '';
            missing.forEach(req => {
                const li = document.createElement('li');
                li.textContent = req;
                requiredCoursesList.appendChild(li);
            });
            modal.style.display = 'flex'; // Mostrar el modal
            return;
        }

        if (canApprove(courseId)) {
            approvedCourses.add(courseId);
            localStorage.setItem('approvedCourses', JSON.stringify(Array.from(approvedCourses)));
            renderPensum(); // Volver a renderizar para actualizar estados
        }
    }

    // Cerrar el modal
    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });

    // Renderizar el pensum al cargar la página
    renderPensum();
});
