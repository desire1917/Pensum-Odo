document.addEventListener('DOMContentLoaded', () => {
    // Definición de la estructura de la malla curricular con sus requisitos
    const curriculum = {
        'Primer Semestre': [
            { id: 'biologia-basica', name: 'Biología Básica', prereqs: [] },
            { id: 'orientacion-institucional', name: 'Orientación Institucional', prereqs: [] },
            { id: 'int-a-la-filosofia', name: 'Int A La Filosofía', prereqs: [] },
            { id: 'fisica-basica', name: 'Física Básica', prereqs: [] },
            { id: 'lengua-espanola-basica-i', name: 'Lengua Española Básica I', prereqs: [] },
            { id: 'matematica-basica', name: 'Matemática Básica', prereqs: [] },
            { id: 'quimica-basica', name: 'Química Básica', prereqs: [] },
            { id: 'int-a-las-ciencias-sociales', name: 'Int A Las Ciencias Sociales', prereqs: [] }
        ],
        'Segundo Semestre': [
            { id: 'morfofuncion', name: 'Morfofunción', prereqs: ['biologia-basica'] },
            { id: 'educacion-fisica', name: 'Educación Física', prereqs: [] },
            { id: 'fund-de-his-social-dominicana', name: 'Fund De His Social Dominicana', prereqs: ['int-a-las-ciencias-sociales'] },
            { id: 'lengua-espanola-basica-ii', name: 'Lengua Española Básica II', prereqs: ['lengua-espanola-basica-i'] },
            { id: 'salud-y-conducta-humanas', name: 'Salud Y Conducta Humanas', prereqs: ['int-a-la-filosofia'] },
            { id: 'quimica-organica', name: 'Química Orgánica', prereqs: ['quimica-basica'] },
            { id: 'salud-y-sociedad-i', name: 'Salud Y Sociedad I', prereqs: ['int-a-las-ciencias-sociales'] },
            { id: 'int-a-la-metod-invest-en-salud', name: 'Int A La Metod Invest En Salud', prereqs: ['int-a-las-ciencias-sociales'] }
        ],
        'Tercer Semestre': [
            { id: 'proc-bioquimicos-del-org-l', name: 'Proc Bioquímicos Del Org l', prereqs: ['quimica-organica', 'morfofuncion'] },
            { id: 'anatomia-y-fisiologia-grales', name: 'Anatomía Y Fisiología Grales', prereqs: ['morfofuncion'] },
            { id: 'microbiologia-general', name: 'Microbiología General', prereqs: ['biologia-basica'] },
            { id: 'int-al-est-de-la-odontologia', name: 'Int Al Est De La Odontología', prereqs: ['salud-y-sociedad-i'] },
            { id: 'salud-y-sociedad-ii', name: 'Salud Y Sociedad II', prereqs: ['salud-y-sociedad-i'] },
            { id: 'epidemiologia-general', name: 'Epidemiología General', prereqs: ['int-a-la-metod-invest-en-salud'] }
        ],
        'Cuarto Semestre': [
            { id: 'proc-bioquimicos-del-org-ii', name: 'Proc Bioquímicos Del Org II', prereqs: ['proc-bioquimicos-del-org-l'] },
            { id: 'procesos-patologicos', name: 'Procesos Patológicos', prereqs: ['anatomia-y-fisiologia-grales', 'microbiologia-general'] },
            { id: 'his-anat-fisio-cabeza-y-cuello', name: 'His Anat Fisio Cabeza Y Cuello', prereqs: ['anatomia-y-fisiologia-grales'] },
            { id: 'microbiologia-bucodental', name: 'Microbiología Bucodental', prereqs: ['microbiologia-general'] },
            { id: 'anatomia-y-fisio-bucodentales', name: 'Anatomía Y Fisio Bucodentales', prereqs: ['anatomia-y-fisiologia-grales'] },
            { id: 'crecimiento-y-des-bucodental', name: 'Crecimiento Y Des Bucodental', prereqs: ['int-al-est-de-la-odontologia'] },
            { id: 'epidemiologia-bucodental', name: 'Epidemiología Bucodental', prereqs: ['epidemiologia-general'] },
            { id: 'procesos-periodontales', name: 'Procesos Periodontales', prereqs: ['anatomia-y-fisio-bucodentales'] }
        ],
        'Quinto Semestre': [
            { id: 'farmacologia', name: 'Farmacología', prereqs: ['proc-bioquimicos-del-org-ii'] },
            { id: 'princ-basic-de-anestesiologia', name: 'Princ Basic De Anestesiología', prereqs: ['procesos-patologicos'] },
            { id: 'educ-y-prevencion-bucodental', name: 'Educ Y Prevención Bucodental', prereqs: ['epidemiologia-bucodental'] },
            { id: 'diagnostico-clinico-y-radiolog', name: 'Diagnóstico Clínico Y Radiolog', prereqs: ['his-anat-fisio-cabeza-y-cuello', 'anatomia-y-fisio-bucodentales'] },
            { id: 'biomateriales-y-restaurad-i', name: 'Biomateriales Y Restaurad I', prereqs: ['quimica-organica', 'fisica-basica'] },
            { id: 'fisiopatologia-de-la-oclusion', name: 'Fisiopatología De La Oclusión', prereqs: ['anatomia-y-fisio-bucodentales', 'crecimiento-y-des-bucodental'] },
            { id: 'clinica-l', name: 'Clínica l', prereqs: ['diagnostico-clinico-y-radiolog'] }
        ],
        'Sexto Semestre': [
            { id: 'anatomia-patologica', name: 'Anatomía Patológica', prereqs: ['procesos-patologicos'] },
            { id: 'patologia-bucal', name: 'Patología Bucal', prereqs: ['anatomia-patologica', 'microbiologia-bucodental'] },
            { id: 'odontopediatria-i', name: 'Odontopediatría I', prereqs: ['crecimiento-y-des-bucodental', 'educ-y-prevencion-bucodental'] },
            { id: 'biomateriales-y-restaurad-ii', name: 'Biomateriales Y Restaurad II', prereqs: ['biomateriales-y-restaurad-i'] },
            { id: 'terapia-pulpar-i', name: 'Terapia Pulpar I', prereqs: ['diagnostico-clinico-y-radiolog'] },
            { id: 'cirugia-dentomaxilar-i', name: 'Cirugía Dentomaxilar I', prereqs: ['princ-basic-de-anestesiologia'] },
            { id: 'servicios-comunitarios-i', name: 'Servicios Comunitarios I', prereqs: ['salud-y-sociedad-ii'] },
            { id: 'clinica-ll', name: 'Clínica ll', prereqs: ['clinica-l', 'biomateriales-y-restaurad-i'] }
        ],
        'Séptimo Semestre': [
            { id: 'odontopediatria-ii', name: 'Odontopediatría II', prereqs: ['odontopediatria-i', 'clinica-ll'] },
            { id: 'terapia-pulpar-ii', name: 'Terapia Pulpar II', prereqs: ['terapia-pulpar-i', 'clinica-ll'] },
            { id: 'cirugia-dentomaxilar-ii', name: 'Cirugía Dentomaxilar II', prereqs: ['cirugia-dentomaxilar-i', 'clinica-ll'] },
            { id: 'clinica-iii', name: 'Clínica III', prereqs: ['clinica-ll', 'patologia-bucal', 'terapia-pulpar-i', 'cirugia-dentomaxilar-i'] },
            { id: 'terapia-periodontal-i', name: 'Terapia Periodontal I', prereqs: ['procesos-periodontales', 'clinica-ll'] },
            { id: 'rehabilitacion-fija-i', name: 'Rehabilitación Fija I', prereqs: ['fisiopatologia-de-la-oclusion', 'biomateriales-y-restaurad-ii'] },
            { id: 'rehabilitacion-movible-i', name: 'Rehabilitación Movible I', prereqs: ['fisiopatologia-de-la-oclusion', 'biomateriales-y-restaurad-ii'] },
            { id: 'planif-y-adm-de-ser-de-salud', name: 'Planif Y Adm De Ser De Salud', prereqs: ['servicios-comunitarios-i'] }
        ],
        'Octavo Semestre': [
            { id: 'princ-medicina-int-y-urgen-med', name: 'Princ Medicina Int Y Urgen Med', prereqs: ['farmacologia', 'procesos-patologicos'] },
            { id: 'ortodoncia-y-ortopedia-i', name: 'Ortodoncia Y Ortopedia I', prereqs: ['crecimiento-y-des-bucodental', 'fisiopatologia-de-la-oclusion'] },
            { id: 'terapia-periodontal-ii', name: 'Terapia Periodontal II', prereqs: ['terapia-periodontal-i', 'clinica-iii'] },
            { id: 'rehabilitacion-fija-ii', name: 'Rehabilitación Fija II', prereqs: ['rehabilitacion-fija-i', 'clinica-iii'] },
            { id: 'rehabilitacion-movible-ii', name: 'Rehabilitación Movible II', prereqs: ['rehabilitacion-movible-i', 'clinica-iii'] },
            { id: 'clinica-iv', name: 'Clínica IV', prereqs: ['clinica-iii', 'odontopediatria-ii', 'terapia-pulpar-ii', 'cirugia-dentomaxilar-ii', 'terapia-periodontal-i', 'rehabilitacion-fija-i', 'rehabilitacion-movible-i'] },
            { id: 'seminarios-de-investigacion', name: 'Seminarios De Investigación', prereqs: ['int-a-la-metod-invest-en-salud'] }
        ],
        'Noveno Semestre': [
            { id: 'ortodoncia-y-ortopedia-ll', name: 'Ortodoncia Y Ortopedia ll', prereqs: ['ortodoncia-y-ortopedia-i', 'clinica-iv'] },
            { id: 'servicios-comunitarios-ii', name: 'Servicios Comunitarios II', prereqs: ['servicios-comunitarios-i', 'clinica-iv'] },
            { id: 'etica-prof-y-odontologia-foren', name: 'Ética Prof Y Odontología Foren', prereqs: ['salud-y-conducta-humanas'] },
            { id: 'clinica-v', name: 'Clínica V', prereqs: ['clinica-iv', 'ortodoncia-y-ortopedia-i', 'terapia-periodontal-ii', 'rehabilitacion-fija-ii', 'rehabilitacion-movible-ii'] }
        ],
        'Décimo Semestre': [
            { id: 'servicios-comunitarios-iii', name: 'Servicios Comunitarios III', prereqs: ['servicios-comunitarios-ii', 'clinica-v'] },
            { id: 'clinica-vi', name: 'Clínica VI', prereqs: ['clinica-v'] },
            { id: 'seminarios-de-integracion', name: 'Seminarios De Integración', prereqs: ['seminarios-de-investigacion'] },
            { id: 'asignatura-optativa', name: 'Asignatura Optativa', prereqs: ['clinica-v'] }
        ],
        'Asignaturas Especiales': [ // Moved these here as they seem like electives/specialties, not core 10th semester
            { id: 'introduccion-a-la-informatica', name: 'Introducción A La Informática', prereqs: [] },
            { id: 'manif-bucales-enferm-sistemat', name: 'Manif Bucales Enferm Sistemat', prereqs: ['princ-medicina-int-y-urgen-med'] },
            { id: 'terapia-lesiones-endoperiodont', name: 'Terapia Lesiones Endoperiodont', prereqs: ['terapia-pulpar-ii', 'terapia-periodontal-ii'] },
            { id: 'atencion-al-nino-minusvalido', name: 'Atención Al Niño Minusválido', prereqs: ['odontopediatria-ii'] },
            { id: 'cirugia-protesica', name: 'Cirugía Protésica', prereqs: ['cirugia-dentomaxilar-ii', 'rehabilitacion-fija-ii', 'rehabilitacion-movible-ii'] },
            { id: 'terapia-disfunc-artic-temp-man', name: 'Terapia Disfunc Artic Temp-Man', prereqs: ['fisiopatologia-de-la-oclusion'] },
            { id: 'rehabilitacion-e-implantes', name: 'Rehabilitación E Implantes', prereqs: ['rehabilitacion-fija-ii', 'cirugia-dentomaxilar-ii'] }
        ],
        'Tesis de Grado': [
            { id: 'tesis-de-grado-o-curso-equival', name: 'Tesis De Grado O Curso Equival', prereqs: ['seminarios-de-investigacion', 'clinica-vi', 'seminarios-de-integracion'] }
        ]
    };

    const approvedCourses = new Set(JSON.parse(localStorage.getItem('approvedCourses')) || []);
    const curriculumGrid = document.getElementById('curriculum-grid');
    const modal = document.getElementById('modal');
    const modalMessage = document.getElementById('modal-message');
    const closeButton = document.querySelector('.close-button');

    // Function to render the curriculum
    function renderCurriculum() {
        curriculumGrid.innerHTML = ''; // Clear existing content
        for (const semesterName in curriculum) {
            const semesterDiv = document.createElement('div');
            semesterDiv.classList.add('semester');
            semesterDiv.innerHTML = `<h2>${semesterName}</h2>`;

            curriculum[semesterName].forEach(course => {
                const courseDiv = document.createElement('div');
                courseDiv.classList.add('course');
                courseDiv.dataset.id = course.id;
                courseDiv.textContent = course.name;

                // Check if the course is approved
                if (approvedCourses.has(course.id)) {
                    courseDiv.classList.add('approved');
                } else {
                    // Check if the course is blocked
                    const isBlocked = course.prereqs.some(prereq => !approvedCourses.has(prereq));
                    if (isBlocked) {
                        courseDiv.classList.add('blocked');
                    }
                }

                courseDiv.addEventListener('click', () => toggleCourseStatus(course));
                semesterDiv.appendChild(courseDiv);
            });
            curriculumGrid.appendChild(semesterDiv);
        }
    }

    // Function to toggle course status (approved/blocked)
    function toggleCourseStatus(course) {
        const courseElement = document.querySelector(`[data-id="${course.id}"]`);

        if (approvedCourses.has(course.id)) {
            // If already approved, do nothing (or allow unapproving if desired, but not in requirements)
            return;
        }

        const missingPrereqs = course.prereqs.filter(prereq => !approvedCourses.has(prereq));

        if (missingPrereqs.length === 0) {
            // Approve the course
            approvedCourses.add(course.id);
            localStorage.setItem('approvedCourses', JSON.stringify(Array.from(approvedCourses)));
            renderCurriculum(); // Re-render to update statuses
        } else {
            // Show modal with missing prerequisites
            const missingNames = missingPrereqs.map(id => {
                // Find the course name for the missing ID
                for (const sem in curriculum) {
                    const found = curriculum[sem].find(c => c.id === id);
                    if (found) return found.name;
                }
                return id; // Fallback if name not found
            });
            modalMessage.innerHTML = `No puedes aprobar "${course.name}" aún.<br><br>Primero debes aprobar las siguientes asignaturas:<br><ul>${missingNames.map(name => `<li>${name}</li>`).join('')}</ul>`;
            modal.style.display = 'flex';
        }
    }

    // Close modal when clicking on the close button or outside the modal
    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Initial render when the page loads
    renderCurriculum();
});
