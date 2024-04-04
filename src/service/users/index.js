import {req} from "../axios"

export const users={
    GET:async () => req.get("/users"),
    CREATE:async (data) => req.post("/users", data),
    DELETE:async (id) => req.delete(`/users/${id}`),
    UPDATE:async (id, data) => req.put(`/users/${id}`, data)
}