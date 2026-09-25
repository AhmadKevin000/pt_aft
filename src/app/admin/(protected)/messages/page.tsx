"use client";

import { useInvalidate } from "@refinedev/core";
import { List, DeleteButton, useTable } from "@refinedev/antd";
import { Table, Space, Tag, Button, Drawer, Typography } from "antd";
import { useState } from "react";

interface MessageRecord {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  content: string;
  isRead: boolean;
  createdAt: string;
}

export default function MessageList() {
  const { tableProps } = useTable({
    resource: "messages",
    syncWithLocation: true,
    sorters: { initial: [{ field: "createdAt", order: "desc" }] },
  });
  const [selected, setSelected] = useState<MessageRecord | null>(null);
  const invalidate = useInvalidate();

  const markAsRead = async (record: MessageRecord) => {
    await fetch(`/api/admin/messages/${record.id}/toggle-read`, {
      method: "PATCH",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ isRead: !record.isRead }),
    });
    invalidate({ resource: "messages", invalidates: ["list"] });
  };

  return (
    <List title="Pesan Masuk">
      <Table
        {...tableProps}
        rowKey="id"
        onRow={(record) => ({
          onClick: () => {
            setSelected(record as MessageRecord);
          },
          style: { cursor: "pointer" },
        })}
      >
        <Table.Column dataIndex="isRead" title="Status" width={110}
          render={(v: boolean) =>
            v ? <Tag>Terbaca</Tag> : <Tag color="cyan">Baru</Tag>
          } />
        <Table.Column dataIndex="name" title="Nama" width={160} />
        <Table.Column dataIndex="email" title="Email" width={220} />
        <Table.Column dataIndex="content" title="Isi Pesan" ellipsis />
        <Table.Column dataIndex="createdAt" title="Tanggal" width={120}
          render={(v: string) => new Date(v).toLocaleDateString("id-ID")} />
        <Table.Column title="Aksi" width={160}
          render={(_, record: MessageRecord) => (
            <Space onClick={(e) => e.stopPropagation()}>
              <Button size="small" onClick={() => markAsRead(record)}>
                {record.isRead ? "Tandai Belum" : "Tandai Terbaca"}
              </Button>
              <DeleteButton hideText size="small" recordItemId={record.id} resource="messages" />
            </Space>
          )} />
      </Table>

      <Drawer
        open={!!selected}
        onClose={() => setSelected(null)}
        title={selected?.name}
        width={420}
      >
        {selected && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <Typography.Text type="secondary">{selected.email}</Typography.Text>
            {selected.phone && <Typography.Text>{selected.phone}</Typography.Text>}
            <Typography.Paragraph style={{ whiteSpace: "pre-wrap" }}>
              {selected.content}
            </Typography.Paragraph>
            <Typography.Text type="secondary">
              {new Date(selected.createdAt).toLocaleString("id-ID")}
            </Typography.Text>
          </div>
        )}
      </Drawer>
    </List>
  );
}
