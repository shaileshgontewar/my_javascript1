let data21 = [
    {
        "id": "",
        "subject_name": "Marathi",
        "subject_id": 1,
        "checked": false,
        "serial_no": "",
        "staff_id": null
    },
    {
        "id": "",
        "subject_name": "English",
        "subject_id": 4,
        "checked": false,
        "serial_no": "",
        "staff_id": null
    },
    {
        "id": "",
        "subject_name": "Hindi",
        "subject_id": 5,
        "checked": false,
        "serial_no": "",
        "staff_id": null
    },
    {
        "id": "",
        "subject_name": "History",
        "subject_id": 6,
        "checked": false,
        "serial_no": "",
        "staff_id": null
    },
    {
        "id": "",
        "subject_name": "Social Science",
        "subject_id": 7,
        "checked": false,
        "serial_no": "",
        "staff_id": null
    },
    {
        "id": "",
        "subject_name": "Geography",
        "subject_id": 10,
        "checked": false,
        "serial_no": "",
        "staff_id": null
    },
    {
        "id": "",
        "subject_name": "Science",
        "subject_id": 11,
        "checked": false,
        "serial_no": "",
        "staff_id": null
    },
    {
        "id": "",
        "subject_name": "Math",
        "subject_id": 12,
        "checked": false,
        "serial_no": "",
        "staff_id": null
    },
    {
        "id": "",
        "subject_name": "Algebra",
        "subject_id": 13,
        "checked": false,
        "serial_no": "",
        "staff_id": null
    }
]



let data =[
    {
        "id": 3,
        "fk_class_teacaher_id": 2,
        "fk_staff_id": 17,
        "fk_subject_id": 5,
        "serial_no": "456"
    },
    {
        "id": 4,
        "fk_class_teacaher_id": 2,
        "fk_staff_id": 18,
        "fk_subject_id": 6,
        "serial_no": "789"
    }
]

// Create a map for quick lookup of subjects by their subject_id
const subjectMap = new Map(data21.map(subject => [subject.subject_id, subject]));
console.log(subjectMap)
// Iterate through the data array and update the corresponding data21 object
data.forEach(item => {
    const matchingSubject = subjectMap.get(item.fk_subject_id);
    if (matchingSubject) {
        matchingSubject.id = item.id;
        matchingSubject.checked = true;
        matchingSubject.serial_no = item.serial_no;
        matchingSubject.staff_id = item.fk_staff_id;
    }
});

console.log(data21); // The updated data21 array