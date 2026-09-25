import type { ResourceProps } from "@refinedev/core";

export const resources: ResourceProps[] = [
  { name: "products", list: "/admin/products", create: "/admin/products/new", edit: "/admin/products/:id/edit" },
  { name: "portfolios", list: "/admin/portfolios", create: "/admin/portfolios/new", edit: "/admin/portfolios/:id/edit" },
  { name: "testimonials", list: "/admin/testimonials", create: "/admin/testimonials/new", edit: "/admin/testimonials/:id/edit" },
  { name: "faqs", list: "/admin/faqs", create: "/admin/faqs/new", edit: "/admin/faqs/:id/edit" },
  { name: "stats", list: "/admin/stats", create: "/admin/stats/new", edit: "/admin/stats/:id/edit" },
  { name: "users", list: "/admin/users", create: "/admin/users/new", edit: "/admin/users/:id/edit" },
  { name: "messages", list: "/admin/messages" },
];
