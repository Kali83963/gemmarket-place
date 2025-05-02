import HttpService from "./httpService";

// example.ts
export async function login(payload: any) {
  const http = HttpService.getInstance();
  try {
    const response = await http.post("/login", payload);
    return response;
  } catch (err) {
    console.error("Error fetching user:", err);
  }
}
export async function createUser(payload: any) {
  const http = HttpService.getInstance();
  try {
    const response = await http.post("/users", payload);
    return response;
  } catch (err) {
    console.error("Error Creating user:", err);
  }
}
export async function fetchUsers(query?: any) {
  const http = HttpService.getInstance();
  try {
    const response = await http.get("/users", {
      params: query,
    });
    return response;
  } catch (err) {
    console.error("Error Creating user:", err);
  }
}
export async function fetchUser(id: string) {
  const http = HttpService.getInstance();
  try {
    const response = await http.get(`/users/${id}`);
    return response;
  } catch (err) {
    console.error("Error Creating user:", err);
  }
}
export async function editUser(id: string, payload: any) {
  const http = HttpService.getInstance();
  try {
    const response = await http.put(`/users/${id}`, payload);
    return response;
  } catch (err) {
    console.error("Error Creating user:", err);
  }
}
