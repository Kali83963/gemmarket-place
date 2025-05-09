import HttpService from "./httpService";

// example.ts
export async function login(payload: any) {
  const http = HttpService.getInstance();
  const response = await http.post("/login", payload);
  return response;
  // try {
  // } catch (err) {
  //   console.error("Error fetching user:", err);
  // }
}
export async function getUserProfile() {
  const http = HttpService.getInstance();

  const response = await http.get("/user/profile");
  return response;
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
export async function updateUser(payload: any) {
  const http = HttpService.getInstance();

  const response = await http.put(`/users/profile`, payload);
  return response;
}
export async function deleteUser(id: string) {
  const http = HttpService.getInstance();
  try {
    const response = await http.delete(`/users/${id}`);
    return response;
  } catch (err) {
    console.error("Error Creating user:", err);
  }
}

export async function createEndoser(payload: any) {
  const http = HttpService.getInstance();
  try {
    const response = await http.post("/endoser", payload);
    return response;
  } catch (err) {
    console.error("Error Creating user:", err);
  }
}

export async function fetchEndosers(query?: any) {
  const http = HttpService.getInstance();
  try {
    const response = await http.get("/endoser", {
      params: query,
    });
    return response;
  } catch (err) {
    console.error("Error Geting Endoser user:", err);
  }
}
export async function fetchEndoser(id: string) {
  const http = HttpService.getInstance();
  try {
    const response = await http.get(`/endoser/${id}`);
    return response;
  } catch (err) {
    console.error("Error Geting Endoser user:", err);
  }
}
export async function editEndoser(id: string, payload: any) {
  const http = HttpService.getInstance();
  try {
    const response = await http.put(`/endoser/${id}`, payload);
    return response;
  } catch (err) {
    console.error("Error Editing Endoser user:", err);
  }
}
export async function deleteEndoser(id: string) {
  const http = HttpService.getInstance();
  try {
    const response = await http.delete(`/endoser/${id}`);
    return response;
  } catch (err) {
    console.error("Error Deleting Endoser user:", err);
  }
}

export async function fetchGemstones(query?: any) {
  const http = HttpService.getInstance();
  try {
    const response = await http.get("/gemstone/", {
      params: query,
    });
    return response;
  } catch (err) {
    console.error("Error Geting Endoser user:", err);
  }
}
export async function fetchGemstone(id: string) {
  const http = HttpService.getInstance();
  try {
    const response = await http.get(`/gemstone/${id}`);
    return response;
  } catch (err) {
    console.error("Error Geting Endoser user:", err);
  }
}
export async function editGemstone(id: string, payload: any) {
  const http = HttpService.getInstance();
  try {
    const response = await http.put(`/endoser/${id}`, payload);
    return response;
  } catch (err) {
    console.error("Error Editing Endoser user:", err);
  }
}
export async function deleteGemstone(id: string) {
  const http = HttpService.getInstance();
  try {
    const response = await http.delete(`/endoser/${id}`);
    return response;
  } catch (err) {
    console.error("Error Deleting Endoser user:", err);
  }
}
export async function fetchOrders(query?: any) {
  const http = HttpService.getInstance();
  try {
    const response = await http.get("/orders", {
      params: query,
    });
    return response;
  } catch (err) {
    console.error("Error Geting Endoser user:", err);
  }
}
export async function fetchOrder(id: string) {
  const http = HttpService.getInstance();
  try {
    const response = await http.get(`/order/${id}`);
    return response;
  } catch (err) {
    console.error("Error Geting Endoser user:", err);
  }
}
