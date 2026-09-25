"use client";

import { useNavigation } from "@refinedev/core";
import { NavigateToResource } from "@refinedev/nextjs-router";

export default function AdminHome() {
  useNavigation();
  return <NavigateToResource resource="messages" />;
}
