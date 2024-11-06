// Data Array to store mahasiswa
let students = [];

// Logout Button Logic
document.getElementById('logoutBtn').addEventListener('click', function() {
    window.location.href = 'index.html'; // Redirect to login page
});

// Add Student Logic
document.getElementById('studentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;

    // Add student to the array
    students.push({ name, age });

    // Clear form inputs
    document.getElementById('name').value = '';
    document.getElementById('age').value = '';

    // Render students list
    renderStudents();
});

// Render Students Table
function renderStudents() {
    const tableBody = document.getElementById('studentTable').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = '';

    students.forEach((student, index) => {
        const row = document.createElement('tr');

        const nameCell = document.createElement('td');
        nameCell.textContent = student.name;

        const ageCell = document.createElement('td');
        ageCell.textContent = student.age;

        const actionsCell = document.createElement('td');
        actionsCell.innerHTML = `<button onclick="editStudent(${index})">Edit</button> 
                                 <button onclick="deleteStudent(${index})">Delete</button>`;

        row.appendChild(nameCell);
        row.appendChild(ageCell);
        row.appendChild(actionsCell);

        tableBody.appendChild(row);
    });
}

// Edit Student Logic
function editStudent(index) {
    const name = prompt('Edit Nama:', students[index].name);
    const age = prompt('Edit Usia:', students[index].age);

    if (name && age) {
        students[index] = { name, age };
        renderStudents();
    }
}

// Delete Student Logic
function deleteStudent(index) {
    students.splice(index, 1); // Remove student from the array
    renderStudents(); // Re-render the table
}

// Initial render of students (empty initially)
renderStudents();
