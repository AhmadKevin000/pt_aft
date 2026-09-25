"use client";

import { Suspense } from "react";
import { AuthPage } from "@refinedev/antd";

export default function Login() {
  return (
    <Suspense fallback={null}>
      <AuthPage type="login" title={<strong>PT AFT Admin</strong>} />
    </Suspense>
  );
}
