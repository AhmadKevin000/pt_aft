import type { DataProvider, CrudFilter, Pagination } from "@refinedev/core";

const API_URL = "/api/admin";

type Sorter = { field: string; order: "asc" | "desc" };

function buildQuery(
  pagination?: Pagination,
  sorters?: Sorter[],
  filters?: CrudFilter[]
): string {
  const params = new URLSearchParams();
  params.set("current", String(pagination?.currentPage ?? 1));
  params.set("pageSize", String(pagination?.pageSize ?? 10));
  if (sorters?.length) params.set("sorters", JSON.stringify(sorters));
  if (filters?.length) params.set("filters", JSON.stringify(filters));
  return params.toString();
}

export const refineDataProvider: DataProvider = {
  getList: async ({ resource, pagination, sorters, filters }) => {
    const query = buildQuery(pagination, sorters, filters);
    const res = await fetch(`${API_URL}/${resource}?${query}`, { credentials: "include" });
    if (!res.ok) throw new Error((await res.json()).error ?? "Failed to fetch list");
    const json = await res.json();
    return { data: json.data, total: json.total };
  },

  getOne: async ({ resource, id }) => {
    const res = await fetch(`${API_URL}/${resource}?id=${encodeURIComponent(String(id))}`, { credentials: "include" });
    if (!res.ok) throw new Error((await res.json()).error ?? "Failed to fetch record");
    const json = await res.json();
    return { data: json.data };
  },

  create: async ({ resource, variables }) => {
    const res = await fetch(`${API_URL}/${resource}`, {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(variables),
    });
    if (!res.ok) throw new Error((await res.json()).error ?? "Failed to create");
    const json = await res.json();
    return { data: json.data };
  },

  update: async ({ resource, id, variables }) => {
    const res = await fetch(`${API_URL}/${resource}?id=${encodeURIComponent(String(id))}`, {
      method: "PATCH",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(variables),
    });
    if (!res.ok) throw new Error((await res.json()).error ?? "Failed to update");
    const json = await res.json();
    return { data: json.data };
  },

  deleteOne: async ({ resource, id }) => {
    const res = await fetch(`${API_URL}/${resource}?id=${encodeURIComponent(String(id))}`, {
      method: "DELETE",
      credentials: "include",
    });
    if (!res.ok) throw new Error((await res.json()).error ?? "Failed to delete");
    const json = await res.json();
    return { data: json.data };
  },

  getApiUrl: () => API_URL,

  getMany: async () => {
    throw new Error("getMany is not implemented");
  },
  createMany: async () => {
    throw new Error("createMany is not implemented");
  },
  deleteMany: async () => {
    throw new Error("deleteMany is not implemented");
  },
  updateMany: async () => {
    throw new Error("updateMany is not implemented");
  },
  custom: async () => {
    throw new Error("custom is not implemented");
  },
};
