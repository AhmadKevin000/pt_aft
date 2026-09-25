"use client";

import { Suspense, useState } from "react";
import { App as AntdApp, ConfigProvider, theme } from "antd";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Refine } from "@refinedev/core";
import { RefineKbarProvider } from "@refinedev/kbar";
import routerProvider from "@refinedev/nextjs-router";
import { refineDataProvider } from "@/lib/refineDataProvider";
import { resources } from "@/lib/adminResources";
import { authProvider } from "@/lib/authProvider";

export default function AdminRootLayout({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <AntdRegistry>
      <ConfigProvider
        theme={{
          algorithm: theme.darkAlgorithm,
          token: { colorPrimary: "#22d3ee" },
        }}
      >
        <AntdApp>
          <QueryClientProvider client={queryClient}>
            <RefineKbarProvider>
              <Refine
                routerProvider={routerProvider}
                dataProvider={refineDataProvider}
                authProvider={authProvider}
                resources={resources}
                options={{ syncWithLocation: true, warnWhenUnsavedChanges: true, disableTelemetry: true, disableRouteChangeHandler: true }}
              >
                <Suspense fallback={null}>{children}</Suspense>
              </Refine>
            </RefineKbarProvider>
          </QueryClientProvider>
        </AntdApp>
      </ConfigProvider>
    </AntdRegistry>
  );
}
