const KEYS = {
  departments: "departments",
  departmentId: "departmentId",
};

export const getDepartments = () => [
  {
    createdAt: 1605859055759,
    updatedAt: 1605859055759,
    id: 1,
    name: "KINHTE",
    description: "Kinh Tế",
  },
  {
    createdAt: 1605859270400,
    updatedAt: 1605859270400,
    id: 2,
    name: "COBAN",
    description: "Cơ Bản",
  },
  {
    createdAt: 1605859287065,
    updatedAt: 1605859287065,
    id: 3,
    name: "TAICHINH",
    description: "Tài Chính",
  },
  {
    createdAt: 1605859298676,
    updatedAt: 1605859298676,
    id: 4,
    name: "NHANSU",
    description: "Nhân Sự",
  },
  {
    createdAt: 1605859313356,
    updatedAt: 1605859313356,
    id: 5,
    name: "YTE",
    description: "Y Tế",
  },
];

export function insertDepartment(data) {
  let departments = getAllDepartments();
  data["id"] = generateDepartmentId();
  departments.push(data);
  localStorage.setItem(KEYS.departments, JSON.stringify(departments));
}

export function updateDepartment(data) {
  let departments = getAllDepartments();
  let recordIndex = departments.findIndex((x) => x.id == data.id);
  departments[recordIndex] = { ...data };
  localStorage.setItem(KEYS.departments, JSON.stringify(departments));
}

export function generateDepartmentId() {
  if (localStorage.getItem(KEYS.departmentId) == null)
    localStorage.setItem(KEYS.departmentId, "0");
  var id = parseInt(localStorage.getItem(KEYS.departmentId));
  localStorage.setItem(KEYS.departmentId, (++id).toString());
  return id;
}

export function deleteDepartment(id) {
  let departments = getAllDepartments();
  departments = departments.filter((x) => x.id != id);
  localStorage.setItem(KEYS.departments, JSON.stringify(departments));
}

export function getAllDepartments() {
  if (localStorage.getItem(KEYS.departments) == null)
    localStorage.setItem(KEYS.departments, JSON.stringify([]));
  let departments = JSON.parse(localStorage.getItem(KEYS.departments));

  return departments;
}
