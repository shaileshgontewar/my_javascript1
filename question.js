studentList?.student?.filter((stu) =>
  keys.some((key) => stu[key].toLowerCase().includes(search.toLowerCase()))
);


const [search, setSearch] = useState("")
const keys = ["st_name", "st_code"]
const handlesearch = e => {
  setSearch(e.target.value)
}

// value={search || ""}
// onChange={handlesearch}

// #Use Form Data
// {
//    "teacher_code":"00018",
//    "chapter":"Maths Notes",
//    "st_class":"pre mb",
//    "subject":"Science",
//    "notes1":"FILE",
//    "teacher_name": "teacher_name",
//    "lession":"2nd",
//   "teacher_profile":""
// }