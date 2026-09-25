"use client";

import { Suspense, useEffect, useState } from "react";
import { ThemedLayout } from "@refinedev/antd";
import { useMenu, useLogout, useNavigation } from "@refinedev/core";
import { Menu as AntdMenu } from "antd";
import type { ItemType } from "antd/es/menu/interface";
import { usePathname } from "next/navigation";

function AdminSiderContent() {
  const { menuItems } = useMenu();
  const { list } = useNavigation();
  const { mutate: logout } = useLogout();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toItems = (items: typeof menuItems): ItemType[] =>
    items
      .filter((item) => item.route || item.children?.length)
      .map((item): ItemType => {
        if (item.children?.length) {
          return {
            key: item.key,
            icon: item.icon,
            label: item.label,
            children: toItems(item.children),
          };
        }
        return {
          key: item.key,
          icon: item.icon,
          label: item.label,
        };
      });

  const selectedKey = menuItems.find((item) =>
    item.route ? pathname?.startsWith(item.route) : false
  )?.key;

  return (
    <>
      {mounted ? (
        <AntdMenu
          mode="inline"
          theme="dark"
          selectedKeys={selectedKey ? [selectedKey] : []}
          items={toItems(menuItems)}
          onClick={({ key }) => {
            const target = menuItems.find((item) => item.key === key);
            if (target?.name) list(target.name);
          }}
          style={{ borderInlineEnd: 0 }}
        />
      ) : (
        <div style={{ flex: 1 }} />
      )}
      <div style={{ marginTop: "auto", paddingBottom: 16 }}>
        {mounted ? (
          <AntdMenu
            mode="inline"
            theme="dark"
            selectable={false}
            items={[{ key: "logout", label: "Keluar", danger: true }]}
            onClick={() => logout()}
            style={{ borderInlineEnd: 0 }}
          />
        ) : (
          <div style={{ height: 40 }} />
        )}
      </div>
    </>
  );
}

export default function AdminProtectedLayout({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={null}>
      <ThemedLayout
        Title={({ collapsed }) => (
          <span style={{ fontWeight: 600, padding: "0 8px" }}>
            {collapsed ? "AFT" : "PT AFT Admin"}
          </span>
        )}
        Sider={() => (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
              overflowY: "auto",
            }}
          >
            <AdminSiderContent />
          </div>
        )}
      >
        {children}
      </ThemedLayout>
    </Suspense>
  );
}
